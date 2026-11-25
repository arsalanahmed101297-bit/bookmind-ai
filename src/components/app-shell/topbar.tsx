"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, Search } from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/controls/language-switcher";
import { ThemeToggle } from "@/components/controls/theme-toggle";
import { useI18n } from "@/components/providers/locale-provider";
import type { AuthUser } from "@/lib/auth/dal";
import { useWorkspaceUi } from "./workspace-ui";
import { initials } from "@/lib/utils";

export function WorkspaceTopbar({
  onOpenMenu,
  user,
}: {
  onOpenMenu: () => void;
  user: AuthUser | null;
}) {
  const { dict } = useI18n();
  const { openSearch } = useWorkspaceUi();
  const pathname = usePathname();

  const crumb = pathname.startsWith("/library")
    ? dict.app.library.title
    : pathname.startsWith("/reader")
      ? dict.nav.reader
      : pathname.startsWith("/assistant")
        ? dict.app.assistant.title
        : pathname.startsWith("/notes")
          ? dict.app.notes.title
          : pathname.startsWith("/settings")
            ? dict.app.settings.title
            : pathname.startsWith("/profile")
              ? dict.app.profile.title
              : dict.nav.dashboard;

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={dict.common.openMenu}
          className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
        >
          <Menu className="size-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2 lg:hidden">
          <LogoMark className="size-8" />
        </div>

        <div className="hidden items-center gap-2 text-[0.72rem] lg:flex">
          <span className="text-muted">{dict.app.nav.workspace}</span>
          <ChevronRight className="size-3 text-muted/60 rtl:rotate-180" aria-hidden="true" />
          <span className="font-medium text-ink">{crumb}</span>
        </div>

        <div className="ms-auto flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={openSearch}
            className="hidden h-9 w-[17rem] items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-start text-[0.75rem] text-muted transition-colors hover:border-line-strong hover:text-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:flex"
          >
            <Search className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="flex-1 truncate">{dict.app.common.searchPlaceholder}</span>
            <kbd className="rounded border border-line bg-paper px-1.5 py-0.5 text-[0.55rem] font-medium text-muted">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={openSearch}
            aria-label={dict.common.search}
            className="grid size-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink md:hidden"
          >
            <Search className="size-4" aria-hidden="true" />
          </button>

          <LanguageSwitcher compact className="hidden sm:block" />
          <ThemeToggle />

          <span className="mx-0.5 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />

          <Link
            href="/profile"
            aria-label={user?.name ?? dict.app.profile.title}
            title={user?.email ?? dict.app.profile.defaultEmail}
            className="grid size-9 place-items-center rounded-full bg-accent-soft text-[0.66rem] font-semibold uppercase text-accent-ink ring-1 ring-accent/15 transition-transform hover:scale-[1.04]"
          >
            {initials(user?.name || dict.app.profile.defaultName)}
          </Link>
        </div>
      </div>
    </header>
  );
}
