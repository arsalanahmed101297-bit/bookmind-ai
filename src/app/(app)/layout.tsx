import { redirect } from "next/navigation";

import { AdminNavLink } from "@/components/admin/admin-nav-link";
import { WorkspaceShell } from "@/components/app-shell/workspace-shell";
import { getCurrentUser, getCurrentUserRole } from "@/lib/auth/dal";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const authEnabled = isSupabaseConfigured();
  const user = authEnabled ? await getCurrentUser() : null;

  if (authEnabled && !user) redirect("/login");

  // The role is resolved here, on the server. Only a verified Admin gets a
  // rendered link; the client never receives a role flag or admin constant.
  const isAdmin = authEnabled && (await getCurrentUserRole()) === "admin";

  return (
    <WorkspaceShell
      user={user}
      authEnabled={authEnabled}
      adminLink={isAdmin ? <AdminNavLink /> : null}
    >
      {children}
    </WorkspaceShell>
  );
}
