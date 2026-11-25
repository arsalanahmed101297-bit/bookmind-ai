"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Check, Languages, Sparkles } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/controls/language-switcher";
import { ThemeToggle } from "@/components/controls/theme-toggle";
import { useI18n } from "@/components/providers/locale-provider";

export function AuthShell({ children }: { children: React.ReactNode }) {
  const { dict } = useI18n();

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.02fr_1fr]">
      <aside className="relative hidden overflow-hidden bg-forest-deep px-12 py-10 text-on-forest lg:flex lg:flex-col">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(220,174,107,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="arch-lines pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-30"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 end-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          aria-hidden="true"
        />

        <div className="relative">
          <Logo tone="light" />
        </div>

        <div className="relative my-auto max-w-md py-12">
          <span className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/5">
            <BookOpen className="size-5 text-[#e6c68f]" aria-hidden="true" />
          </span>
          <blockquote className="mt-7">
            <p className="font-display text-[2.6rem] leading-[1.15] text-on-forest xl:text-[3rem]">
              “{dict.auth.leftQuote}”
            </p>
          </blockquote>
          <p className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-[#e9e2d4]/50">
            {dict.auth.leftAttribution}
          </p>

          <div className="mt-10 h-px w-2/3 bg-white/12" />

          <ul className="mt-8 space-y-4">
            {dict.auth.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[0.86rem] text-[#e9e2d4]/80">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#e6c68f]/15 text-[#e6c68f]">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-2 text-[0.65rem] text-[#e9e2d4]/50">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 px-2.5 py-1">
              <Languages className="size-3 text-[#e6c68f]" aria-hidden="true" /> English + اردو
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 px-2.5 py-1">
              <Sparkles className="size-3 text-[#e6c68f]" aria-hidden="true" /> Grounded answers
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-[0.65rem] text-[#e9e2d4]/45">{dict.common.tagline}</p>
          <p className="font-urdu text-sm leading-loose text-[#e9e2d4]/50" lang="ur" dir="rtl">
            پڑھیں، سمجھیں، سیکھیں
          </p>
        </div>
      </aside>

      <div className="relative flex min-h-screen flex-col bg-paper">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_70%_0%,color-mix(in_srgb,var(--accent)_8%,transparent),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-between px-5 py-5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full text-[0.76rem] font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              {dict.common.backHome}
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <LanguageSwitcher compact />
            <ThemeToggle />
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-5 pb-12 pt-4 sm:px-8">
          <div className="w-full max-w-[27rem]">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Logo />
            </div>
            {children}
          </div>
        </div>

        <div className="relative flex items-center justify-center gap-2 px-5 pb-6 text-center">
          <p className="text-[0.62rem] text-muted">{dict.footer.copyright}</p>
        </div>
      </div>
    </div>
  );
}
