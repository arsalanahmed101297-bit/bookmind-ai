"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  LibraryBig,
  LockKeyhole,
  LogOut,
  NotebookPen,
  Settings,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { signOutAction } from "@/app/actions/auth";
import { Logo } from "@/components/brand/logo";
import { useI18n } from "@/components/providers/locale-provider";
import type { AuthUser } from "@/lib/auth/dal";
import { ButtonLink } from "@/components/ui/button";
import { cn, initials } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  match: string[];
};

export function Sidebar({
  mobile = false,
  onNavigate,
  onClose,
  user,
  authEnabled,
  adminLink,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
  onClose?: () => void;
  user: AuthUser | null;
  authEnabled: boolean;
  adminLink?: ReactNode;
}) {
  const { dict } = useI18n();
  const pathname = usePathname();

  const workspace: NavItem[] = [
    {
      href: "/dashboard",
      label: dict.nav.dashboard,
      icon: LayoutDashboard,
      match: ["/dashboard"],
    },
    {
      href: "/library",
      label: dict.app.library.title,
      icon: LibraryBig,
      match: ["/library", "/reader"],
    },
    {
      href: "/learning",
      label: dict.app.learning.title,
      icon: GraduationCap,
      match: ["/learning", "/course"],
    },
    {
      href: "/assistant",
      label: dict.app.assistant.title,
      icon: Sparkles,
      match: ["/assistant"],
    },
    {
      href: "/notes",
      label: dict.app.notes.title,
      icon: NotebookPen,
      match: ["/notes"],
    },
  ];

  const account: NavItem[] = [
    {
      href: "/settings",
      label: dict.app.settings.title,
      icon: Settings,
      match: ["/settings"],
    },
    {
      href: "/profile",
      label: dict.app.profile.title,
      icon: UserRound,
      match: ["/profile"],
    },
  ];

  function isActive(item: NavItem) {
    return item.match.some(
      (base) => pathname === base || pathname.startsWith(`${base}/`),
    );
  }

  const renderLink = (item: NavItem) => {
    const active = isActive(item);
    const Icon = item.icon;
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={cn(
            "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.84rem] transition-colors",
            active
              ? "bg-accent-soft/70 font-medium text-ink"
              : "text-ink-soft hover:bg-ink/[0.04] hover:text-ink",
          )}
        >
          <span
            className={cn(
              "absolute inset-y-2 start-0 w-0.5 rounded-full bg-accent transition-opacity",
              active ? "opacity-100" : "opacity-0",
            )}
            aria-hidden="true"
          />
          <Icon
            className={cn(
              "size-[1.05rem] shrink-0",
              active ? "text-accent" : "text-muted group-hover:text-ink-soft",
            )}
            aria-hidden="true"
          />
          <span className="flex-1">{item.label}</span>
          {active ? <ChevronRight className="size-3 text-accent rtl:rotate-180" aria-hidden="true" /> : null}
        </Link>
      </li>
    );
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center justify-between px-5">
        <Logo href="/dashboard" />
        {mobile && onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.common.closeMenu}
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <div className="px-3 pb-2">
        <ButtonLink
          href="/assistant"
          onClick={onNavigate}
          size="sm"
          className="w-full justify-between"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {dict.app.common.askAssistant}
          </span>
          <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[0.55rem] font-medium uppercase tracking-wide text-primary-fg/70">
            AI
          </span>
        </ButtonLink>
      </div>

      <nav
        className="scroll-slim flex-1 overflow-y-auto px-3 pb-4 pt-3"
        aria-label={dict.app.nav.workspace}
      >
        <p className="px-3 pb-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
          {dict.app.nav.workspace}
        </p>
        <ul className="space-y-0.5">{workspace.map(renderLink)}</ul>

        <p className="px-3 pb-2 pt-6 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
          {dict.app.nav.account}
        </p>
        <ul className="space-y-0.5">{account.map(renderLink)}</ul>

        {adminLink ? (
          <>
            <p className="px-3 pb-2 pt-6 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {dict.app.nav.admin}
            </p>
            <ul className="space-y-0.5">{adminLink}</ul>
          </>
        ) : null}

        <div className="mt-6 rounded-2xl border border-line bg-paper/70 p-3.5">
          <div className="flex items-start gap-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-forest/[0.08] text-forest dark:bg-accent/15 dark:text-accent">
              <LockKeyhole className="size-3.5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.72rem] font-semibold text-ink">
                {dict.privacy.items[1].title}
              </p>
              <p className="mt-1 text-[0.65rem] leading-relaxed text-muted">
                {dict.privacy.items[0].title}
              </p>
            </div>
          </div>
          <Link
            href="/#how-it-works"
            className="mt-2.5 inline-flex text-[0.62rem] font-medium text-accent hover:underline"
          >
            {dict.app.banner.link}
          </Link>
        </div>
      </nav>

      <div className="shrink-0 border-t border-line p-3">
        <Link
          href="/profile"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-ink/[0.04]"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-[0.7rem] font-semibold uppercase text-accent-ink">
            {initials(user?.name || dict.app.profile.defaultName)}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[0.78rem] font-medium text-ink">
              {user?.name || dict.app.profile.defaultName}
            </span>
            <span className="block truncate text-[0.62rem] text-muted" dir="ltr">
              {user?.email || dict.app.profile.sampleMember}
            </span>
          </span>
          <ChevronRight className="size-3.5 shrink-0 text-muted rtl:rotate-180" aria-hidden="true" />
        </Link>
        {authEnabled ? (
          <form action={signOutAction} className="mt-1">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-[0.7rem] text-muted transition-colors hover:bg-danger/5 hover:text-danger"
            >
              <LogOut className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              {dict.common.logout}
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
