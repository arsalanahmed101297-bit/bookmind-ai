import { Lexer } from "marked";

export type OfficialToken = {
  type: string;
  raw?: string;
  text?: string;
  tokens?: OfficialToken[];
  items?: OfficialToken[];
  href?: string;
  resolvedHref?: string;
  title?: string | null;
  depth?: number;
  id?: string;
  lang?: string | null;
  ordered?: boolean;
  start?: number;
  task?: boolean;
  checked?: boolean;
  loose?: boolean;
  header?: OfficialToken[];
  rows?: OfficialToken[][];
  align?: (string | null)[];
  footnoteId?: string;
  footnoteNumber?: number;
  resolvedSrc?: string;
  imagePath?: string;
};

export type OfficialHeading = {
  id: string;
  text: string;
  depth: number;
};

export type OfficialFootnote = {
  id: string;
  number: number;
  tokens: OfficialToken[];
};

export type PreparedOfficialDoc = {
  tokens: OfficialToken[];
  headings: OfficialHeading[];
  footnotes: OfficialFootnote[];
};

type TransformContext = {
  currentPath: string;
  knownPaths: Set<string>;
  assets: Record<string, string>;
  siteUrl: string;
  headings: OfficialHeading[];
  headingCounts: Map<string, number>;
  footnotes: OfficialFootnote[];
  footnoteNumbers: Map<string, number>;
  usedFootnoteRefs: Set<string>;
};

const nonDocumentExtensions =
  /\.(png|jpe?g|gif|webp|svg|pdf|ya?ml|json|txt|csv|xlsx?|zip|mp4|mp3)$/i;

function assetKey(reference: string) {
  const filename = reference.split("/").pop() ?? reference;
  return filename.replace(/\.[^.]+$/, "").toLowerCase();
}

// The stored slice is verbatim. The source header and YAML front matter are
// metadata, so they are removed only at render time.
function stripOfficialMetadata(markdown: string) {
  const withoutHeader = markdown.replace(/^# [^\r\n]*\(\/[^)]+\)[ \t]*\r?\n+/, "");
  return withoutHeader.replace(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n)+/, "");
}

function safeId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "note";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "section";
}

function uniqueHeadingId(value: string, counts: Map<string, number>) {
  const base = slugify(value);
  const next = (counts.get(base) ?? 0) + 1;
  counts.set(base, next);
  return next === 1 ? base : `${base}-${next}`;
}

function normalizePath(href: string, currentPath: string) {
  const clean = href.split("#")[0].split("?")[0].replace(/\.md$/i, "").replace(/\/$/, "");
  const currentDir = currentPath.includes("/")
    ? currentPath.slice(0, currentPath.lastIndexOf("/"))
    : "";
  const combined = clean.startsWith("/")
    ? clean.slice(1)
    : [currentDir, clean].filter(Boolean).join("/");
  const segments: string[] = [];
  for (const segment of combined.split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") segments.pop();
    else segments.push(segment);
  }
  return segments.join("/");
}

function officialUrl(siteUrl: string, pathname: string) {
  return new URL(pathname.replace(/^\/+/, ""), `${siteUrl}/`).toString();
}

function resolveLink(href: string, context: TransformContext) {
  if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith("//")) {
    return href.startsWith("//") ? `https:${href}` : href;
  }
  if (href.startsWith("#")) return href;

  const clean = href.split("#")[0];
  const hash = href.includes("#") ? `#${href.slice(href.indexOf("#") + 1)}` : "";
  if (!clean) return hash;

  if (nonDocumentExtensions.test(clean)) {
    return `${officialUrl(context.siteUrl, normalizePath(clean, context.currentPath))}${hash}`;
  }

  const normalized = normalizePath(clean, context.currentPath);
  const candidates = [normalized, `${normalized}/overview`];
  const match = candidates.find((candidate) => context.knownPaths.has(candidate));
  if (match) return `/course/${match}${hash}`;
  return `${officialUrl(context.siteUrl, normalized)}${hash}`;
}

function resolveImage(href: string, context: TransformContext) {
  const key = assetKey(href);
  return context.assets[key];
}

function extractFootnotes(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const bodyLines = [...lines];
  const definitions: { id: string; text: string }[] = [];
  let inFence = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = line.match(/^\[\^([^\]]+)\]:\s?(.*)$/);
    if (!match) continue;

    const collected = [match[2]];
    bodyLines[index] = "";
    let cursor = index + 1;
    while (cursor < lines.length) {
      const next = lines[cursor];
      if (!next.trim()) break;
      if (/^\[\^([^\]]+)\]:/.test(next)) break;
      collected.push(next.trim());
      bodyLines[cursor] = "";
      cursor += 1;
    }
    definitions.push({ id: match[1], text: collected.join("\n").trim() });
  }

  return { body: bodyLines.join("\n"), definitions };
}

function lexInline(text: string) {
  const blocks = Lexer.lex(text, { gfm: true }) as unknown as OfficialToken[];
  const first = blocks.find((token) => token.type !== "space");
  return first?.tokens ?? blocks;
}

function splitFootnoteRefs(text: string, context: TransformContext) {
  const pattern = /\[\^([^\]]+)\]/g;
  const result: OfficialToken[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      result.push({ type: "text", text: text.slice(cursor, match.index) });
    }

    const rawId = match[1];
    const id = safeId(rawId);
    if (!context.footnoteNumbers.has(id)) {
      const number = context.footnotes.length + 1;
      context.footnoteNumbers.set(id, number);
    }
    const number = context.footnoteNumbers.get(id) ?? 1;
    const isFirst = !context.usedFootnoteRefs.has(id);
    if (isFirst) context.usedFootnoteRefs.add(id);

    result.push({
      type: "footnoteRef",
      footnoteId: id,
      footnoteNumber: number,
      ...(isFirst ? { id: `fnref-${id}` } : {}),
    });
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    result.push({ type: "text", text: text.slice(cursor) });
  }
  return result;
}

function transformTokens(tokens: OfficialToken[], context: TransformContext) {
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];

    if (token.tokens) transformTokens(token.tokens, context);
    if (token.items) {
      for (const item of token.items) {
        if (item.tokens) transformTokens(item.tokens, context);
      }
    }
    if (token.header) transformTokens(token.header, context);
    if (token.rows) {
      for (const row of token.rows) transformTokens(row, context);
    }

    if (token.type === "heading") {
      const text = token.text ?? "";
      const id = uniqueHeadingId(text, context.headingCounts);
      token.id = id;
      context.headings.push({ id, text, depth: token.depth ?? 2 });
    }

    if (token.type === "link" && token.href) {
      token.resolvedHref = resolveLink(token.href, context);
    }

    if (token.type === "image" && token.href) {
      token.imagePath = token.href;
      token.resolvedSrc = resolveImage(token.href, context);
    }

    if (token.type === "text" && token.text?.includes("[^")) {
      const replacement = splitFootnoteRefs(token.text, context);
      if (replacement.length > 1) tokens.splice(index, 1, ...replacement);
    }
  }
}

export function prepareOfficialMarkdown(
  markdown: string,
  options: {
    currentPath: string;
    knownPaths: Set<string>;
    assets: Record<string, string>;
    siteUrl: string;
  },
): PreparedOfficialDoc {
  const { body, definitions } = extractFootnotes(stripOfficialMetadata(markdown));
  const context: TransformContext = {
    currentPath: options.currentPath,
    knownPaths: options.knownPaths,
    assets: options.assets,
    siteUrl: options.siteUrl,
    headings: [],
    headingCounts: new Map(),
    footnotes: [],
    footnoteNumbers: new Map(),
    usedFootnoteRefs: new Set(),
  };

  context.footnotes = definitions.map((definition, index) => ({
    id: safeId(definition.id),
    number: index + 1,
    tokens: [],
  }));
  definitions.forEach((definition, index) => {
    context.footnoteNumbers.set(safeId(definition.id), index + 1);
  });

  const tokens = Lexer.lex(body, { gfm: true }) as unknown as OfficialToken[];
  transformTokens(tokens, context);

  for (const footnote of context.footnotes) {
    const definition = definitions[footnote.number - 1];
    footnote.tokens = lexInline(definition.text);
    transformTokens(footnote.tokens, context);
  }

  return {
    tokens,
    headings: context.headings,
    footnotes: context.footnotes.filter((footnote) =>
      context.usedFootnoteRefs.has(footnote.id),
    ),
  };
}
