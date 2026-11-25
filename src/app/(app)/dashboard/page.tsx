import type { Metadata } from "next";

import { DashboardView } from "@/components/app-shell/dashboard-view";
import { getCurrentUser } from "@/lib/auth/dal";
import { getLearningSummary } from "@/lib/learning/dal";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your BookMind AI workspace: recently opened books, reading progress and quick actions.",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const learning = await getLearningSummary();
  return <DashboardView user={user} learning={learning} />;
}
