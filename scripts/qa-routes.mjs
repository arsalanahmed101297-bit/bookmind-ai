import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { root, startServer } from "./qa-server.mjs";

let passed = 0;
let failed = 0;

function check(name, condition, detail) {
  if (condition) {
    passed += 1;
    console.log(`PASS  ${name}`);
  } else {
    failed += 1;
    console.error(`FAIL  ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

async function expectRoute(server, route, expected, label) {
  const response = await fetch(new URL(route, server.baseUrl), {
    redirect: "manual",
  });
  const location = response.headers.get("location");
  const pathname = location ? new URL(location, server.baseUrl).pathname : "";
  if (expected !== 200 && response.status === 200) {
    // A redirect inside a streamed Server Component is emitted in the HTML.
    const html = await response.text();
    const ok =
      html.includes(`url=${expected}`) ||
      html.includes(`NEXT_REDIRECT;replace;${expected};`);
    check(
      `${label} ${route}`,
      ok,
      `status=200 streamed redirect location=${expected}`,
    );
    return;
  }

  const ok =
    expected === 200
      ? response.status === 200
      : response.status >= 300 &&
        response.status < 400 &&
        pathname === expected;
  check(
    `${label} ${route}`,
    ok,
    `status=${response.status} location=${location ?? "none"}`,
  );
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(fullPath) : [fullPath];
    }),
  );
  return files.flat();
}

async function checkServerSecuritySource() {
  const adminAction = await readFile(
    path.join(root, "src/app/actions/admin.ts"),
    "utf8",
  );
  check(
    "admin action rechecks role server-side",
    adminAction.includes("getCurrentUserRole()"),
  );
  check(
    "admin action uses no service-role key",
    !/service[_-]?role/i.test(adminAction),
  );

  const adminPage = await readFile(
    path.join(root, "src/app/(app)/admin/page.tsx"),
    "utf8",
  );
  check(
    "admin page guards before rendering",
    adminPage.includes("getCurrentUserRole()") && adminPage.includes("redirect("),
  );

  const adminDal = await readFile(path.join(root, "src/lib/admin/dal.ts"), "utf8");
  check(
    "admin DAL is server-only and fails closed",
    adminDal.includes('import "server-only"') &&
      adminDal.includes("getCurrentUserRole()") &&
      adminDal.includes('!== "admin"'),
  );

  const authDal = await readFile(path.join(root, "src/lib/auth/dal.ts"), "utf8");
  check(
    "AuthUser client DTO excludes role",
    !/export type AuthUser[\s\S]*?role:/.test(authDal),
  );

  const learningDal = await readFile(
    path.join(root, "src/lib/learning/dal.ts"),
    "utf8",
  );
  check(
    "learning DAL is server-only and scoped to the signed-in user",
    learningDal.includes('import "server-only"') &&
      learningDal.includes('.eq("user_id", user.id)'),
  );

  const learningActions = await readFile(
    path.join(root, "src/app/actions/learning.ts"),
    "utf8",
  );
  check(
    "learning actions recheck the session and validate official lesson paths",
    learningActions.includes("supabase.auth.getUser()") &&
      learningActions.includes("getOfficialDoc(") &&
      !/service[_-]?role/i.test(learningActions),
  );

  const chunksDir = path.join(root, ".next/static/chunks");
  const clientFiles = (await walk(chunksDir)).filter((file) => file.endsWith(".js"));
  const founderEmail = "arsalanahmed101297@gmail.com";
  const emailHits = [];
  const dbHits = [];

  for (const file of clientFiles) {
    const source = await readFile(file, "utf8");
    if (source.toLowerCase().includes(founderEmail)) emailHits.push(file);
    if (
      source.includes("admin_emails") ||
      source.includes("set_profile_identity") ||
      source.includes("guard_profile_privilege")
    ) {
      dbHits.push(file);
    }
  }

  check(
    "founder email is absent from browser bundles",
    emailHits.length === 0,
    emailHits.map((file) => path.relative(root, file)).join(", "),
  );
  check(
    "admin DB internals are absent from browser bundles",
    dbHits.length === 0,
    dbHits.map((file) => path.relative(root, file)).join(", "),
  );
}

let preview;
let configured;

try {
  preview = await startServer({ port: 4173 });
  configured = await startServer({
    port: 4174,
    env: {
      NEXT_PUBLIC_SUPABASE_URL: "http://127.0.0.1:9",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "qa-dummy-anon-key",
      NEXT_PUBLIC_SITE_URL: "http://127.0.0.1:4174",
    },
  });

  const publicRoutes = ["/", "/privacy", "/terms", "/login", "/signup"];
  const previewRoutes = [
    "/dashboard",
    "/library",
    "/library/a-tale-of-two-cities",
    "/library/the-ai-agent-factory",
    "/course/claude-and-chatgpt-2/overview",
    "/learning",
    "/reader/a-tale-of-two-cities",
    "/assistant",
    "/notes",
    "/settings",
    "/profile",
  ];

  for (const route of publicRoutes) {
    await expectRoute(preview, route, 200, "preview");
  }
  for (const route of previewRoutes) {
    await expectRoute(preview, route, 200, "preview");
  }

  await expectRoute(preview, "/admin", "/dashboard", "preview");

  for (const route of publicRoutes) {
    await expectRoute(configured, route, 200, "dummy auth");
  }

  const protectedRoutes = [
    "/admin",
    "/dashboard",
    "/library",
    "/library/a-tale-of-two-cities",
    "/library/the-ai-agent-factory",
    "/course/claude-and-chatgpt-2/overview",
    "/learning",
    "/reader/a-tale-of-two-cities",
    "/assistant",
    "/notes",
    "/settings",
    "/profile",
  ];
  for (const route of protectedRoutes) {
    await expectRoute(configured, route, "/login", "dummy auth");
  }

  await checkServerSecuritySource();

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
} catch (error) {
  console.error("Route QA failed:", error);
  process.exitCode = 1;
} finally {
  await preview?.stop();
  await configured?.stop();
}
