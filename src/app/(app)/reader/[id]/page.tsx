import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ReaderView } from "@/components/reader/reader-view";
import { getSampleBook, readerSample } from "@/lib/sample-data";

type ReaderPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
};

export const metadata: Metadata = {
  title: "Reader preview",
  description:
    "A focused reading workspace preview with in-book search, notes and a grounded assistant.",
};

export default async function ReaderPage({
  params,
  searchParams,
}: ReaderPageProps) {
  const { id } = await params;
  const book = getSampleBook(id);

  if (!book || !book.hasReaderPreview || id !== readerSample.bookId) {
    notFound();
  }

  const { page } = await searchParams;
  const parsedPage = Number.parseInt(page ?? "1", 10);
  const initialPage = Number.isFinite(parsedPage) ? parsedPage : 1;

  return <ReaderView book={book} initialPage={initialPage} />;
}
