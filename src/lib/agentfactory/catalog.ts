import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import manifestJson from "@/content/agentfactory/manifest.json";

export type OfficialDoc = {
  id: string;
  path: string;
  order: number;
  title: string;
  description: string;
  status: string;
  chapter: string | null;
  part: string | null;
  section: string | null;
  sectionTitle: string | null;
  lastVerified: string | null;
  reviewBy: string | null;
  trustTier: string | null;
  wordCount: number;
  footnoteCount: number;
  images: string[];
  sourceUrl: string;
  markdownUrl: string;
  file: string;
  sha256: string;
};

export type OfficialManifest = {
  source: {
    site: string;
    llms: string;
    full: string;
    name: string;
    bookTitle: string;
    buildId: string | null;
    ksorVersion: string | null;
    documentCount: number;
    fullSha256: string;
    documentsSha256: string;
    importedAt: string;
    assetsMapped: boolean;
    mappedImages: number;
    totalImages: number;
    warnings: string[];
  };
  docs: OfficialDoc[];
  assets: Record<string, string>;
};

export type OfficialTocGroup = {
  label: string;
  docs: OfficialDoc[];
};

export const officialManifest = manifestJson as OfficialManifest;

const docsByPath = new Map(officialManifest.docs.map((doc) => [doc.path, doc]));

export function getOfficialDoc(docPath: string) {
  return docsByPath.get(docPath);
}

export function getOfficialToc(): OfficialTocGroup[] {
  const groups = new Map<string, OfficialDoc[]>();
  for (const doc of officialManifest.docs) {
    const label = doc.sectionTitle ?? doc.part ?? "Reference";
    const group = groups.get(label) ?? [];
    group.push(doc);
    groups.set(label, group);
  }
  return [...groups.entries()].map(([label, docs]) => ({ label, docs }));
}

export function getOfficialNeighbours(docPath: string) {
  const index = officialManifest.docs.findIndex((doc) => doc.path === docPath);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: officialManifest.docs[index - 1],
    next: officialManifest.docs[index + 1],
  };
}

export async function readOfficialMarkdown(doc: OfficialDoc) {
  // Manifest file paths are relative to the content root and already include
  // the `docs/` segment, so resolving under `docs/` would duplicate it.
  const contentRoot = path.resolve(process.cwd(), "src", "content", "agentfactory");
  const target = path.resolve(contentRoot, doc.file);
  if (!target.startsWith(`${contentRoot}${path.sep}`)) {
    throw new Error("Invalid official document path");
  }
  return readFile(target, "utf8");
}
