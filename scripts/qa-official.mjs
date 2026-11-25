import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { root, startServer } from "./qa-server.mjs";

const expected = {
  buildId: "sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a",
  fullSha256: "523e965d0c57f7577dbda52cbd1227a0eb3be10e0204bce111baec8ed5c8e735",
  documentsSha256:
    "572ab375ca94f78f0a8d3c0302b08c111440bba03048e90628b205ca34554f7c",
  documents: 460,
  images: 437,
};

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

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function checkImportedContent() {
  const manifestPath = path.join(root, "src/content/agentfactory/manifest.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const { source, docs, assets } = manifest;

  check("official manifest has 460 documents", docs.length === expected.documents, `count=${docs.length}`);
  check("official manifest count matches source", source.documentCount === expected.documents, `count=${source.documentCount}`);
  check("official build identifier matches source", source.buildId === expected.buildId, source.buildId);
  check("full source hash matches source", source.fullSha256 === expected.fullSha256, source.fullSha256);
  check("verbatim document hash matches source", source.documentsSha256 === expected.documentsSha256, source.documentsSha256);
  check("official source is the permitted site", source.site === "https://agentfactory.piaic.org", source.site);
  check("every document is stable", docs.every((doc) => doc.status === "stable"));

  const paths = docs.map((doc) => doc.path);
  check("document paths are unique", new Set(paths).size === paths.length);
  check("document paths are safe", paths.every((docPath) => /^[a-z0-9-]+(?:\/[a-z0-9-]+)*$/.test(docPath)));

  let concatenated = "";
  let badFiles = 0;
  let badHashes = 0;
  let unsafeDocs = 0;
  let badUrls = 0;

  for (const doc of docs) {
    const file = path.join(root, "src/content/agentfactory", doc.file);
    const text = await readFile(file, "utf8");
    concatenated += text;
    if (!file.startsWith(path.join(root, "src/content/agentfactory") + path.sep)) badFiles += 1;
    if (sha256(text) !== doc.sha256) badHashes += 1;
    if (/<script\b/i.test(text)) unsafeDocs += 1;
    if (!doc.sourceUrl.startsWith("https://agentfactory.piaic.org/")) badUrls += 1;
    if (!doc.markdownUrl.startsWith("https://agentfactory.piaic.org/md/")) badUrls += 1;
  }

  check("every stored document file exists", badFiles === 0, `bad=${badFiles}`);
  check("every stored document hash matches manifest", badHashes === 0, `bad=${badHashes}`);
  check("document concatenation reproduces the source block", sha256(concatenated) === expected.documentsSha256, sha256(concatenated));
  check("stored official Markdown contains no scripts", unsafeDocs === 0, `docs=${unsafeDocs}`);
  check("all document URLs point to the official source", badUrls === 0, `bad=${badUrls}`);

  const assetEntries = Object.entries(assets);
  check("all official images were mapped", source.mappedImages === expected.images && source.totalImages === expected.images, `${source.mappedImages}/${source.totalImages}`);
  check("no image warnings were recorded", source.warnings.length === 0, source.warnings.join(" | "));
  check(
    "all mapped images use the official site",
    assetEntries.every(([, url]) => url.startsWith("https://agentfactory.piaic.org/_next/static/media/")),
    `assets=${assetEntries.length}`,
  );

  const renderer = await readFile(path.join(root, "src/components/reader/official-markdown.tsx"), "utf8");
  check("renderer does not inject raw HTML", !renderer.includes("dangerouslySetInnerHTML"));

  const route = await readFile(path.join(root, "src/app/(app)/course/[...slug]/page.tsx"), "utf8");
  check("course route prerenders all documents", route.includes("generateStaticParams"));
  check("course route rejects unknown documents", route.includes("dynamicParams = false"));
  check("course route reads stored Markdown on the server", route.includes("readOfficialMarkdown"));
  check("course route loads private lesson state", route.includes("getLessonLearningState"));

  const reader = await readFile(path.join(root, "src/components/reader/official-reader-view.tsx"), "utf8");
  check("official articles are rendered LTR", reader.includes('dir="ltr"'));
  check("official reader passes signed-in lesson state to learning controls", reader.includes("LessonLearningControls"));

  const learningDal = await readFile(path.join(root, "src/lib/learning/dal.ts"), "utf8");
  check(
    "learning progress uses the official manifest as its denominator",
    learningDal.includes("officialManifest.docs.length"),
  );
  check(
    "chapter progress is derived from official lesson documents",
    learningDal.includes("doc.chapter ?? doc.section"),
  );

  const learningControls = await readFile(
    path.join(root, "src/components/learning/lesson-learning-controls.tsx"),
    "utf8",
  );
  check(
    "learning controls render outside the verbatim article",
    learningControls.includes("setLessonCompleteAction") &&
      !learningControls.includes("OfficialMarkdown"),
  );

  return manifest;
}

async function checkRoutes() {
  const server = await startServer({ port: 4176 });
  try {
    const first = await fetch(new URL("/course/claude-and-chatgpt-2/overview", server.baseUrl));
    const html = await first.text();
    check("official reader route returns 200", first.status === 200, `status=${first.status}`);
    check("official reader shows verbatim source wording", html.includes("Welcome to <em>The AI Agent Factory</em>") || html.includes("Welcome to"));
    check("official reader does not render front matter", !html.includes("type: Document"));
    check("official reader marks the article LTR", html.includes('dir="ltr"'));
    check("official reader links the source page", html.includes("https://agentfactory.piaic.org/claude-and-chatgpt-2/overview/"));
    check("official reader renders official images", /<img[^>]+src="https:\/\/agentfactory\.piaic\.org\/_next\/static\/media\//.test(html));
    check("official reader renders footnotes", html.includes("id=\"fn-name\""));

    const deep = await fetch(new URL("/course/appendices/instructors/case-4/appendix-practical-run-sheet", server.baseUrl));
    check("deep official document route returns 200", deep.status === 200, `status=${deep.status}`);

    const library = await fetch(new URL("/library/the-ai-agent-factory", server.baseUrl));
    const libraryHtml = await library.text();
    check("official book detail returns 200", library.status === 200, `status=${library.status}`);
    check("official book detail shows 460 documents", libraryHtml.includes("460"));
    check("official book detail links the course reader", libraryHtml.includes("/course/claude-and-chatgpt-2/overview"));

    const missing = await fetch(new URL("/course/not-a-real-document", server.baseUrl), { redirect: "manual" });
    check("unknown official document returns 404", missing.status === 404, `status=${missing.status}`);
  } finally {
    await server.stop();
  }
}

try {
  await checkImportedContent();
  await checkRoutes();
  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
} catch (error) {
  console.error("Official content QA failed:", error);
  process.exitCode = 1;
}
