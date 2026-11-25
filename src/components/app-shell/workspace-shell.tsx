"use client";

import { useEffect, useState, type ReactNode } from "react";

import type { AuthUser } from "@/lib/auth/dal";
import { Sidebar } from "./sidebar";
import { WorkspaceTopbar } from "./topbar";
import { PreviewBanner } from "./preview-banner";
import { WorkspaceUiProvider } from "./workspace-ui";

export function WorkspaceShell({
  children,
  user,
  authEnabled,
  adminLink,
}: {
  children: ReactNode;
  user: AuthUser | null;
  authEnabled: boolean;
  adminLink?: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <WorkspaceUiProvider>
      <div className="min-h-screen bg-paper">
        <aside className="fixed inset-y-0 start-0 z-40 hidden w-[17rem] border-e border-line bg-surface/70 backdrop-blur-xl lg:block">
          <Sidebar
            user={user}
            authEnabled={authEnabled}
            adminLink={adminLink}
          />
        </aside>

        <div className="flex min-h-screen flex-col lg:ms-[17rem]">
          <WorkspaceTopbar
            user={user}
            onOpenMenu={() => setMobileOpen(true)}
          />
          <PreviewBanner />
          <main id="main-content" className="flex-1 pb-16">
            {children}
          </main>
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-forest-deep/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              className="absolute inset-y-0 start-0 w-[18.5rem] max-w-[86vw] border-e border-line bg-surface shadow-lift"
            >
              <Sidebar
                mobile
                user={user}
                authEnabled={authEnabled}
                adminLink={adminLink}
                onClose={() => setMobileOpen(false)}
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </WorkspaceUiProvider>
  );
}
