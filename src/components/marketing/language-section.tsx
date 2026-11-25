"use client";

import { Check, Languages, Sparkles } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function LanguageSection() {
  const { dict, locale, setLocale } = useI18n();

  return (
    <section
      id="languages"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-paper-deep/40 py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,color-mix(in_srgb,var(--accent)_7%,transparent),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">{dict.languages.eyebrow}</p>
          <h2 className="mt-4 font-display text-title text-ink">{dict.languages.title}</h2>
          <p className="mt-4 max-w-lg text-[0.96rem] leading-[1.85] text-muted">
            {dict.languages.description}
          </p>

          <div className="mt-7">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {dict.languages.switchLabel}
            </p>
            <div className="mt-2.5 inline-flex rounded-full border border-line bg-surface p-1">
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={cn(
                  "rounded-full px-4 py-1.5 text-[0.78rem] font-medium transition-colors",
                  locale === "en" ? "bg-forest text-on-forest dark:bg-accent dark:text-primary-fg" : "text-muted hover:text-ink",
                )}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLocale("ur")}
                aria-pressed={locale === "ur"}
                lang="ur"
                className={cn(
                  "rounded-full px-4 py-1.5 font-urdu-text text-base leading-relaxed transition-colors",
                  locale === "ur" ? "bg-forest text-on-forest dark:bg-accent dark:text-primary-fg" : "text-muted hover:text-ink",
                )}
              >
                اردو
              </button>
            </div>
          </div>

          <ul className="mt-7 space-y-3">
            {dict.languages.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-[0.82rem] text-ink-soft">
                <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-forest/10 text-forest dark:bg-accent/15 dark:text-accent">
                  <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[0.65rem] text-muted">
            <Languages className="size-3.5 text-accent" aria-hidden="true" />
            {dict.languages.rtlNote}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-lift">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full bg-accent-soft text-accent-ink">
                  <Sparkles className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.78rem] font-semibold text-ink">
                    {dict.languages.exampleLabel}
                  </p>
                  <p className="text-[0.6rem] text-muted">{dict.languages.concept}</p>
                </div>
              </div>
              <span className="rounded-full border border-line px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-[0.1em] text-muted">
                {dict.common.sample}
              </span>
            </div>

            <div className="divide-y divide-line">
              <div className="p-5 sm:p-6" dir="ltr">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    English · LTR
                  </span>
                  <span className="rounded-full bg-ink/[0.05] px-2 py-0.5 text-[0.55rem] text-ink-soft">
                    {dict.languages.concept}
                  </span>
                </div>
                <p className="mt-3 border-s-2 border-accent/40 ps-4 text-[0.88rem] leading-[1.8] text-ink-soft">
                  {dict.languages.englishText}
                </p>
              </div>

              <div className="p-5 sm:p-6" lang="ur" dir="rtl">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    اردو · RTL
                  </span>
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 font-urdu-text text-[0.65rem] text-accent-ink">
                    {dict.languages.concept}
                  </span>
                </div>
                <p className="mt-3 border-s-2 border-accent/40 ps-4 font-urdu-text text-[1.02rem] leading-[2.1] text-ink-soft">
                  {dict.languages.urduText}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-line bg-paper/60 px-5 py-3">
              <p className="text-[0.6rem] text-muted">{dict.readerShowcase.caption.split("·")[0]}</p>
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="font-urdu text-base leading-relaxed text-accent-ink" lang="ur">
                  اردو
                </span>
                <span className="text-muted">/</span>
                <span className="text-[0.62rem] text-muted">EN</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
