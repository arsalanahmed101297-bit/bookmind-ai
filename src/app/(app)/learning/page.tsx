import type { Metadata } from "next";

import { LearningDashboardView } from "@/components/learning/learning-dashboard-view";
import { getLearningSummary } from "@/lib/learning/dal";

export const metadata: Metadata = {
  title: "My learning",
  description: "Private progress, notes and bookmarks for the official AI Agent Factory course.",
};

export default async function LearningPage() {
  const summary = await getLearningSummary();
  return <LearningDashboardView summary={summary} />;
}
