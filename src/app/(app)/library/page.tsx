import type { Metadata } from "next";

import { LibraryView } from "@/components/library/library-view";

export const metadata: Metadata = {
  title: "My library",
  description: "Browse every book in your BookMind library.",
};

export default function LibraryPage() {
  return <LibraryView />;
}
