"use client";

import { ArrowLeft, Compass, LayoutDashboard } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/controls/language-switcher";
import { ThemeToggle } from "@/components/controls/theme-toggle";
import { useI18n } from "@/components/providers/locale-provider";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  const { dict } = useI18n();

  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col bg-paper px-5 py-6"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between gap-4">
        <Logo href="/" />
        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeToggle />
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center py-14">
        <div className="w-full max-w-lg text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-3xl border border-accent/25 bg-accent-soft/50 text-accent-ink shadow-card">
            <Compass className="size-7" aria-hidden="true" />
          </span>
          <p className="mt-6 font-display text-[4.5rem] leading-none text-accent/80">
            404
          </p>
          <h1 className="mt-3 font-display text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
            {dict.notFound.title}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[0.88rem] leading-relaxed text-muted">
            {dict.notFound.description}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-2 sm:flex-row">
            <ButtonLink href="/" size="md">
              <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
              {dict.notFound.home}
            </ButtonLink>
            <ButtonLink href="/dashboard" variant="secondary" size="md">
              <LayoutDashboard className="size-4" aria-hidden="true" />
              {dict.notFound.dashboard}
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
