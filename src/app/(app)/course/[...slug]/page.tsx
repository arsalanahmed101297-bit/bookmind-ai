import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OfficialReaderView } from "@/components/reader/official-reader-view";
import {
  getOfficialDoc,
  getOfficialNeighbours,
  getOfficialToc,
  officialManifest,
  readOfficialMarkdown,
} from "@/lib/agentfactory/catalog";
import { prepareOfficialMarkdown } from "@/lib/agentfactory/markdown";
import { getLessonLearningState } from "@/lib/learning/dal";

export const dynamicParams = false;

type CoursePageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return officialManifest.docs.map((doc) => ({
    slug: doc.path.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getOfficialDoc(slug.join("/"));
  if (!doc) return { title: "Document not found" };

  return {
    title: `${doc.title} | ${officialManifest.source.bookTitle}`,
    description: doc.description,
  };
}

export default async function CourseDocumentPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const docPath = slug.join("/");
  const doc = getOfficialDoc(docPath);
  if (!doc) notFound();

  const markdown = await readOfficialMarkdown(doc);
  const prepared = prepareOfficialMarkdown(markdown, {
    currentPath: doc.path,
    knownPaths: new Set(officialManifest.docs.map((item) => item.path)),
    assets: officialManifest.assets,
    siteUrl: officialManifest.source.site,
  });
  const { previous, next } = getOfficialNeighbours(doc.path);
  const learning = await getLessonLearningState(doc.path);
  const toc = getOfficialToc().map((group) => ({
    label: group.label,
    docs: group.docs.map((item) => ({
      path: item.path,
      title: item.title,
    })),
  }));

  return (
    <OfficialReaderView
      doc={{
        path: doc.path,
        title: doc.title,
        description: doc.description,
        sourceUrl: doc.sourceUrl,
        markdownUrl: doc.markdownUrl,
        order: doc.order,
        wordCount: doc.wordCount,
        footnoteCount: doc.footnoteCount,
        lastVerified: doc.lastVerified,
        reviewBy: doc.reviewBy,
      }}
      tokens={prepared.tokens}
      headings={prepared.headings}
      footnotes={prepared.footnotes}
      toc={toc}
      previous={previous ? { path: previous.path, title: previous.title } : undefined}
      next={next ? { path: next.path, title: next.title } : undefined}
      total={officialManifest.docs.length}
      learning={learning}
    />
  );
}
