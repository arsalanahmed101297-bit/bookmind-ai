import type { Metadata } from "next";

import { NotesView } from "@/components/notes/notes-view";

export const metadata: Metadata = {
  title: "Notes & bookmarks",
  description: "Keep notes, highlights and bookmarks from every book.",
};

export default function NotesPage() {
  return <NotesView />;
}
