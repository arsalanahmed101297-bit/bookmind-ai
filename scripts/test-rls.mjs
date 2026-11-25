import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";

const migration = await readFile(
  new URL("../supabase/migrations/0001_profiles.sql", import.meta.url),
  "utf8",
);

const db = new PGlite();
let passed = 0;
let failed = 0;

function ok(name) {
  passed += 1;
  console.log(`PASS  ${name}`);
}

function bad(name, detail) {
  failed += 1;
  console.error(`FAIL  ${name}${detail ? ` — ${detail}` : ""}`);
}

async function query(sql, params = []) {
  return db.query(sql, params);
}

async function expectThrows(name, sql, params = [], expectedText) {
  try {
    await query(sql, params);
    bad(name, "statement unexpectedly succeeded");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!expectedText || message.toLowerCase().includes(expectedText.toLowerCase())) {
      ok(name);
    } else {
      bad(name, message);
    }
  }
}

async function asUser(id, callback) {
  await query("select set_config('request.jwt.claim.sub', $1, false)", [id]);
  await db.exec("set role authenticated");
  try {
    return await callback();
  } finally {
    await db.exec("reset role");
    await query("select set_config('request.jwt.claim.sub', '', false)");
  }
}

function assert(condition, name, detail) {
  if (condition) ok(name);
  else bad(name, detail);
}

try {
  // Supabase-compatible shim for the embedded Postgres test.
  await db.exec(`
    create schema if not exists auth;
    create table if not exists auth.users (
      id uuid primary key,
      email text,
      raw_user_meta_data jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    );
    create or replace function auth.uid()
    returns uuid language sql stable as $$
      select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid;
    $$;
  `);

  for (const role of ["anon", "authenticated"]) {
    try {
      await db.exec(`create role ${role}`);
    } catch {
      // Role already present.
    }
  }
  await db.exec(`
    grant usage on schema public to anon, authenticated;
    grant usage on schema auth to authenticated;
  `);

  await db.exec(migration);
  ok("migration applies cleanly to embedded Postgres");

  const ADMIN = "11111111-1111-4111-8111-111111111111";
  const READER = "22222222-2222-4222-8222-222222222222";
  const DIRECT_USER = "44444444-4444-4444-8444-444444444444";

  await query(
    "insert into auth.users (id, email, raw_user_meta_data) values ($1, $2, $3::jsonb)",
    [ADMIN, "ARSALANAHMED101297@GMAIL.COM", JSON.stringify({ full_name: "Attempted name" })],
  );
  await query(
    "insert into auth.users (id, email, raw_user_meta_data) values ($1, $2, $3::jsonb)",
    [READER, "reader@example.com", JSON.stringify({ full_name: "Normal Reader", role: "admin" })],
  );
  await query(
    "insert into auth.users (id, email, raw_user_meta_data) values ($1, $2, '{}'::jsonb)",
    [DIRECT_USER, "third@example.com"],
  );

  const seeded = await query(
    "select id, email, role, full_name from public.profiles order by email",
  );
  const adminRow = seeded.rows.find((row) => row.id === ADMIN);
  const readerRow = seeded.rows.find((row) => row.id === READER);

  assert(adminRow?.role === "admin", "founder email receives Admin role", adminRow?.role);
  assert(readerRow?.role === "user", "new signup is Normal User", readerRow?.role);
  assert(
    readerRow?.full_name === "Normal Reader" && readerRow?.full_name !== "Attempted name",
    "signup metadata cannot assign Admin identity",
    readerRow?.full_name,
  );

  await asUser(READER, () =>
    expectThrows(
      "admin email list is not readable by users",
      "select email from public.admin_emails",
      [],
    ),
  );

  const own = await asUser(READER, () =>
    query("select id from public.profiles where id = $1", [READER]),
  );
  assert(own.rows.length === 1, "normal user can read own profile");

  const foreign = await asUser(READER, () =>
    query("select id from public.profiles where id = $1", [ADMIN]),
  );
  assert(foreign.rows.length === 0, "normal user cannot read another profile");

  await expectThrows(
    "normal user cannot make themselves Admin",
    "update public.profiles set role = 'admin' where id = $1",
    [READER],
  );

  await expectThrows(
    "Admin cannot promote another user",
    "update public.profiles set role = 'admin' where id = $1",
    [READER],
  );

  const blockedEdit = await asUser(READER, () =>
    query("update public.profiles set full_name = 'Hacked' where id = $1", [ADMIN]),
  );
  assert(blockedEdit.rowCount === 0, "normal user cannot edit another profile");

  const adminEdit = await asUser(ADMIN, () =>
    query("update public.profiles set full_name = 'Managed Reader', bio = 'Checked' where id = $1", [READER]),
  );
  assert(adminEdit.rowCount === 1, "Admin can manage a registered user");

  const afterEdit = await query(
    "select full_name, bio, role from public.profiles where id = $1",
    [READER],
  );
  assert(
    afterEdit.rows[0]?.full_name === "Managed Reader" &&
      afterEdit.rows[0]?.bio === "Checked" &&
      afterEdit.rows[0]?.role === "user",
    "Admin edit changes only allowed fields",
  );

  const adminRead = await asUser(ADMIN, () => query("select id from public.profiles"));
  assert(adminRead.rows.length >= 3, "Admin can read all profiles");

  await query("delete from public.profiles where id = $1", [ADMIN]);
  await asUser(ADMIN, () =>
    expectThrows(
      "direct insert cannot create an Admin profile",
      "insert into public.profiles (id, email, full_name, role) values ($1, $2, 'Fake Admin', 'admin')",
      [ADMIN, "arsalanahmed101297@gmail.com"],
      "row-level security",
    ),
  );

  await query("delete from public.profiles where id = $1", [DIRECT_USER]);
  await asUser(DIRECT_USER, () =>
    query("insert into public.profiles (id, email, full_name, role) values ($1, $2, 'Fake', 'admin')", [
      DIRECT_USER,
      "third@example.com",
    ]),
  );
  const directRow = await query("select role from public.profiles where id = $1", [DIRECT_USER]);
  assert(directRow.rows[0]?.role === "user", "direct insert with role=admin is forced to Normal User");

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
} catch (error) {
  console.error("RLS test setup failed:", error);
  process.exitCode = 1;
} finally {
  await db.close();
}
