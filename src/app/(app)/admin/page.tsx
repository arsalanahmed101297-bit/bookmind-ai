import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AdminView } from "@/components/admin/admin-view";
import { getAdminUsers } from "@/lib/admin/dal";
import { getCurrentUserRole } from "@/lib/auth/dal";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin-only account management for BookMind AI.",
};

export default async function AdminPage() {
  // Authorization happens on the server. No role flag is passed to the client.
  if ((await getCurrentUserRole()) !== "admin") redirect("/dashboard");

  return <AdminView users={await getAdminUsers()} />;
}
