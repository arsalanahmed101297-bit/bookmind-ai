import type { Metadata } from "next";

import { AssistantView } from "@/components/assistant/assistant-view";
import { getSampleBook } from "@/lib/sample-data";

export const metadata: Metadata = {
  title: "AI Book Assistant",
  description:
    "Ask about a book and see the pages behind every answer. Live AI arrives in a later build phase.",
};

type AssistantPageProps = {
  searchParams: Promise<{ book?: string }>;
};

export default async function AssistantPage({
  searchParams,
}: AssistantPageProps) {
  const { book } = await searchParams;
  const requested = book ? getSampleBook(book) : undefined;

  return <AssistantView initialBookId={requested?.id} />;
}
