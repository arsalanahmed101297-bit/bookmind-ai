import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const contentDir = path.join(root, "src", "content", "agentfactory");
const docsDir = path.join(contentDir, "docs");

const args = process.argv.slice(2);

function arg(name, fallback = undefined) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) return fallback;
  return value;
}

function has(name) {
  return args.includes(name);
}

function hash(value) {
  return createHash("sha256").update(value).digest("hex");
}

function unquote(value) {
  const trimmed = value.trim();
  if (trimmed.length >= 2 && trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.slice(1, -1);
    }
  }
  if (trimmed.length >= 2 && trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1).replace(/''/g, "'");
  }
  if (trimmed === "null" || trimmed === "~") return null;
  return trimmed;
}

function parseFrontMatter(markdown) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === "---");
  if (start === -1) return {};

  const metadata = {};
  for (let index = start + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.trim() === "---") break;
    if (/^\s/.test(line)) continue;
    const match = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!match) continue;
    metadata[match[1]] = unquote(match[2]);
  }
  return metadata;
}

function sectionTitleFor(docPath, docs) {
  const [section] = docPath.split("/");
  if (!section || section === docPath) return null;
  const overview = docs.find((doc) => doc.path === `${section}/overview`);
  return overview?.title ?? null;
}

function imageRefs(markdown) {
  return [...markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map(
    (match) => match[1],
  );
}

function footnoteCount(markdown) {
  return new Set(
    [...markdown.matchAll(/^\[\^([^\]]+)\]:/gm)].map((match) => match[1]),
  ).size;
}

function countWords(markdown) {
  const body = markdown.replace(/^---[\s\S]*?^---\s*/m, "");
  return body.split(/\s+/).filter(Boolean).length;
}

function assetKey(reference) {
  const filename = reference.split("/").pop() ?? reference;
  return filename.replace(/\.[^.]+$/, "").toLowerCase();
}

function officialUrl(base, pathname) {
  return new URL(pathname.replace(/^\/+/, ""), `${base}/`).toString();
}

async function readText(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const response = await fetch(source, {
      headers: { "user-agent": "BookMind-AI-Importer/1.0" },
    });
    if (!response.ok) {
      throw new Error(`${source} returned HTTP ${response.status}`);
    }
    return response.text();
  }
  return readFile(source, "utf8");
}

function parseIndex(text) {
  const docs = [];
  const pattern = /^- \[(.+)\]\(\/([^)]+)\): (.+)$/gm;
  for (const match of text.matchAll(pattern)) {
    docs.push({
      title: match[1],
      path: match[2].replace(/^\/+|\/+$/g, ""),
      description: match[3],
    });
  }
  return docs;
}

function parseFull(text) {
  const headers = [...text.matchAll(/^# (.+) \(\/([^)]+)\)[ \t]*$/gm)];
  const docs = [];
  for (let index = 0; index < headers.length; index += 1) {
    const header = headers[index];
    const start = header.index;
    const end = index + 1 < headers.length ? headers[index + 1].index : text.length;
    docs.push({
      headerTitle: header[1],
      path: header[2].replace(/^\/+|\/+$/g, ""),
      // Keep the exact slice, including the blank lines between documents, so
      // concatenating all stored files reproduces the official source byte for byte.
      markdown: text.slice(start, end),
    });
  }
  return docs;
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

function parseImageAssets(html, base, assetMap, warnings, docPath) {
  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    const srcMatch = tag[0].match(/\bsrc="([^"]+)"/i);
    if (!srcMatch) continue;
    const src = srcMatch[1].split("?")[0];
    const mediaMatch = src.match(/^\/_next\/static\/media\/(.+?)\.([a-f0-9]{6,})\.(png|jpe?g|webp|svg)$/i);
    if (!mediaMatch) continue;
    const key = mediaMatch[1].toLowerCase();
    if (!assetMap.has(key)) assetMap.set(key, officialUrl(base, src));
  }
  if (!html.includes("/_next/static/media/") && warnings.length < 20) {
    warnings.push(`No static media found while importing assets for ${docPath}`);
  }
}

async function main() {
  const base = (arg("--source", "https://agentfactory.piaic.org") ?? "").replace(/\/$/, "");
  const llmsSource = arg("--llms-file") ?? arg("--llms", `${base}/llms.txt`);
  const fullSource = arg("--full-file") ?? arg("--full", `${base}/llms-full.txt`);
  const withAssets = !has("--no-assets");

  console.log(`Importing official content from ${base}`);
  const [llmsText, fullText] = await Promise.all([
    readText(llmsSource),
    readText(fullSource),
  ]);

  const index = parseIndex(llmsText);
  const full = parseFull(fullText);
  if (index.length !== full.length) {
    throw new Error(
      `Source mismatch: llms.txt has ${index.length} documents, llms-full.txt has ${full.length}`,
    );
  }

  const indexPaths = new Set(index.map((doc) => doc.path));
  const fullPaths = new Set(full.map((doc) => doc.path));
  for (const docPath of indexPaths) {
    if (!fullPaths.has(docPath)) throw new Error(`Missing full Markdown for /${docPath}`);
  }
  for (const docPath of fullPaths) {
    if (!indexPaths.has(docPath)) throw new Error(`Missing index entry for /${docPath}`);
  }

  const indexByPath = new Map(index.map((doc) => [doc.path, doc]));
  const drafts = full.map((doc) => ({ doc, meta: parseFrontMatter(doc.markdown) }));
  const titles = drafts.map((entry) => ({
    path: entry.doc.path,
    title: entry.meta.title ?? entry.doc.headerTitle,
  }));

  const docs = drafts.map(({ doc, meta }, order) => {
    const sourceUrl = officialUrl(base, `/${doc.path}/`);
    return {
      id: doc.path,
      path: doc.path,
      order,
      title: meta.title ?? doc.headerTitle,
      description: meta.description ?? indexByPath.get(doc.path)?.description ?? "",
      status: meta.status ?? "stable",
      chapter: meta.chapter ?? null,
      part: meta.part ?? null,
      section: doc.path.split("/")[0] ?? null,
      sectionTitle: sectionTitleFor(doc.path, titles),
      lastVerified: meta.last_verified ?? null,
      reviewBy: meta.review_by ?? null,
      trustTier: meta.trust_tier ?? null,
      wordCount: countWords(doc.markdown),
      footnoteCount: footnoteCount(doc.markdown),
      images: imageRefs(doc.markdown),
      sourceUrl,
      markdownUrl: officialUrl(base, `/md/${doc.path}.md`),
      file: `docs/${doc.path}.md`,
      sha256: hash(doc.markdown),
    };
  });

  const warnings = [];
  const assetMap = new Map();
  if (withAssets) {
    const imageDocs = docs.filter((doc) => doc.images.length > 0);
    console.log(`Mapping images from ${imageDocs.length} official pages…`);
    await mapLimit(imageDocs, 6, async (doc) => {
      try {
        const response = await fetch(doc.sourceUrl, {
          headers: { "user-agent": "BookMind-AI-Importer/1.0" },
        });
        if (!response.ok) {
          warnings.push(`HTTP ${response.status} for ${doc.sourceUrl}`);
          return;
        }
        parseImageAssets(await response.text(), base, assetMap, warnings, doc.path);
      } catch (error) {
        warnings.push(`Failed asset fetch for ${doc.path}: ${error.message}`);
      }
    });
  }

  const mappedImages = docs.reduce(
    (total, doc) => total + doc.images.filter((ref) => assetMap.has(assetKey(ref))).length,
    0,
  );
  const allImages = docs.reduce((total, doc) => total + doc.images.length, 0);

  const bookHeaderEnd = fullText.indexOf("\n---", 3);
  const buildMeta = parseFrontMatter(fullText.slice(0, bookHeaderEnd + 4));
  const firstDocumentIndex = fullText.search(/^# .+ \(\/.+\)[ \t]*$/m);
  const manifest = {
    source: {
      site: base,
      llms: llmsSource,
      full: fullSource,
      name: buildMeta.name ?? "agentfactory-v2",
      bookTitle: buildMeta.title ?? "The AI Agent Factory",
      buildId: buildMeta.build_id ?? null,
      ksorVersion: buildMeta.ksor_version ?? null,
      documentCount: docs.length,
      fullSha256: hash(fullText),
      documentsSha256: hash(fullText.slice(firstDocumentIndex === -1 ? 0 : firstDocumentIndex)),
      importedAt: new Date().toISOString(),
      assetsMapped: withAssets,
      mappedImages,
      totalImages: allImages,
      warnings,
    },
    docs,
    assets: Object.fromEntries([...assetMap.entries()].sort(([a], [b]) => a.localeCompare(b))),
  };

  await mkdir(docsDir, { recursive: true });
  await Promise.all(
    full.map(async (doc) => {
      const destination = path.join(docsDir, `${doc.path}.md`);
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, doc.markdown, "utf8");
    }),
  );
  await writeFile(
    path.join(contentDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
  // Proxy needs the valid slugs before streaming starts. Keep a compact list
  // in sync with the manifest instead of bundling the full 592 KB manifest.
  const pathsFile = path.join(root, "src", "lib", "agentfactory", "course-paths.ts");
  await writeFile(
    pathsFile,
    [
      "// Generated by scripts/import-agentfactory.mjs from the official manifest.",
      "// Do not edit by hand; rerun `npm run import:course` to refresh.",
      "export const officialCoursePaths: ReadonlySet<string> = new Set([",
      ...docs.map((doc) => `  ${JSON.stringify(doc.path)},`),
      "]);",
      "",
    ].join("\n"),
    "utf8",
  );
  await writeFile(
    path.join(contentDir, "IMPORT.md"),
    [
      "# Official course content",
      "",
      `Source: <${base}>`,
      `Imported: ${manifest.source.importedAt}`,
      `Build: ${manifest.source.buildId ?? "unknown"}`,
      `Documents: ${docs.length}`,
      `Exact full-source SHA-256: ${manifest.source.fullSha256}`,
      `Verbatim document block SHA-256: ${manifest.source.documentsSha256}`,
      `Mapped images: ${mappedImages}/${allImages}`,
      "",
      "Every file in `docs/` is the verbatim Markdown block from the official",
      "`/llms-full.txt` bundle, including front matter, relative links, footnotes,",
      "tables and code fences. No lesson text was rewritten or translated.",
      "",
      "If the site is unavailable, download `/llms.txt` and `/llms-full.txt` from",
      "the official source and rerun:",
      "",
      "```bash",
      "npm run import:course -- --llms-file /path/to/llms.txt --full-file /path/to/llms-full.txt --no-assets",
      "```",
      "",
      "With `--no-assets`, image references remain in the Markdown and the reader",
      "attributes them to the official source instead of loading remote images.",
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(`Imported ${docs.length} official documents into src/content/agentfactory/docs`);
  console.log(`Mapped ${mappedImages}/${allImages} image references`);
  if (warnings.length) {
    console.warn(`${warnings.length} import warnings; see manifest.source.warnings`);
  }
}

main().catch((error) => {
  console.error("Official content import failed:", error);
  process.exitCode = 1;
});
