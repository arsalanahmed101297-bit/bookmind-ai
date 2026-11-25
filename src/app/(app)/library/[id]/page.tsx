import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookDetailView } from "@/components/library/book-detail-view";
import { getOfficialToc } from "@/lib/agentfactory/catalog";
import { getSampleBook } from "@/lib/sample-data";

type BookPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = getSampleBook(id);

  if (!book) return { title: "Book not found" };

  return {
    title: book.title,
    description: book.blurb.en,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = getSampleBook(id);

  if (!book) notFound();

  const tocGroups = book.isOfficial
    ? getOfficialToc().map((group) => ({
        label: group.label,
        count: group.docs.length,
        firstPath: group.docs[0]?.path ?? "",
      }))
    : undefined;

  return <BookDetailView book={book} tocGroups={tocGroups} />;
}
