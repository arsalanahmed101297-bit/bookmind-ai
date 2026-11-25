"use client";

import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Languages,
  Search,
  Sparkles,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";

export function HeroPreview() {
  const { dict } = useI18n();
  const preview = dict.hero.preview;

  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
      {/* halo */}
      <div
        className="pointer-events-none absolute -inset-x-10 -top-12 h-[120%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_16%,transparent),transparent)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="arch-lines pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] opacity-70"
        aria-hidden="true"
      />

      {/* Reader window */}
      <div className="relative z-10 overflow-hidden rounded-[1.6rem] border border-line bg-surface shadow-lift">
        <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-strong/70 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex gap-1" aria-hidden="true">
              <span className="size-2 rounded-full bg-danger/60" />
              <span className="size-2 rounded-full bg-accent/60" />
              <span className="size-2 rounded-full bg-forest/40 dark:bg-accent/30" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-[0.98rem] leading-tight text-ink">
                {preview.bookTitle}
              </p>
              <p className="truncate text-[0.6rem] text-muted">{preview.bookMeta}</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-line bg-paper px-2.5 py-1 text-[0.6rem] font-medium tabular-nums text-muted">
            {preview.bookPages}
          </span>
        </div>

        <div className="relative px-5 pb-5 pt-5 sm:px-8 sm:pb-7 sm:pt-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-accent">
              Chapter 1 · The Period
            </p>
            <Badge variant="outline" className="text-[0.55rem]">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-ring" aria-hidden="true" />
              {preview.label}
            </Badge>
          </div>

          <p className="mt-4 font-display text-[1.35rem] leading-snug text-ink sm:text-[1.55rem]">
            It was the best of times,
            <br />
            it was the worst of times…
          </p>

          <div className="mt-3 space-y-2 font-display text-[0.78rem] leading-[1.75] text-ink-soft/90 sm:text-[0.85rem]">
            <p>
              It was the age of <span className="bg-highlight/80 px-1 text-ink">wisdom</span>, it
              was the age of foolishness, it was the epoch of belief, it was the epoch of
              incredulity, it was the season of Light, it was the season of Darkness…
            </p>
            <div className="space-y-1.5 pt-1 opacity-50" aria-hidden="true">
              <span className="block h-1.5 w-[96%] rounded-full bg-ink/15" />
              <span className="block h-1.5 w-[88%] rounded-full bg-ink/10" />
              <span className="block h-1.5 w-[62%] rounded-full bg-ink/10" />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
            <div className="flex items-center gap-1 text-muted">
              <span className="grid size-7 place-items-center rounded-full border border-line">
                <ChevronLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              </span>
              <span className="grid size-7 place-items-center rounded-full border border-line">
                <ChevronRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted">
              <span className="grid size-7 place-items-center rounded-full border border-line">
                <ZoomOut className="size-3.5" aria-hidden="true" />
              </span>
              <span className="px-1 text-[0.6rem] tabular-nums">100%</span>
              <span className="grid size-7 place-items-center rounded-full border border-line">
                <ZoomIn className="size-3.5" aria-hidden="true" />
              </span>
              <span className="ms-1 grid size-7 place-items-center rounded-full border border-line">
                <Search className="size-3.5" aria-hidden="true" />
              </span>
              <span className="grid size-7 place-items-center rounded-full border border-line">
                <Bookmark className="size-3.5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating assistant card */}
      <div className="relative z-20 mx-3 -mt-10 sm:absolute sm:-bottom-14 sm:-start-4 sm:mx-0 sm:mt-0 sm:w-[86%] md:-start-8 md:w-[80%]">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface-strong p-4 shadow-lift sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-full bg-forest text-on-forest dark:bg-accent dark:text-primary-fg">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.8rem] font-semibold text-ink">{preview.assistant}</p>
                <p className="text-[0.58rem] text-muted">{preview.label}</p>
              </div>
            </div>
            <Languages className="size-4 text-muted" aria-hidden="true" />
          </div>

          <div className="mt-3.5 rounded-xl rounded-ss-sm bg-paper px-3.5 py-2.5 text-[0.74rem] leading-relaxed text-ink-soft">
            “{preview.question}”
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[0.58rem] font-medium text-accent-ink">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-ring" aria-hidden="true" />
              {preview.retrieval}
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 text-[0.58rem] text-muted">
              {preview.sources}: {preview.sourcePages}
            </span>
          </div>

          <div className="mt-3 space-y-1.5" aria-hidden="true">
            <span className="block h-1.5 w-full rounded-full bg-ink/10" />
            <span className="block h-1.5 w-[82%] rounded-full bg-ink/10" />
            <span className="block h-1.5 w-[56%] rounded-full bg-ink/[0.07]" />
          </div>

          <div className="mt-3 flex items-center justify-between gap-2 border-t border-line pt-2.5">
            <p className="text-[0.55rem] text-muted">{preview.answerNote}</p>
            <div className="flex gap-1">
              <span className="rounded-full bg-ink/[0.05] px-2 py-0.5 text-[0.55rem] text-ink-soft">
                {preview.languageChips[0]}
              </span>
              <span className="rounded-full border border-accent/30 px-2 py-0.5 font-urdu-text text-[0.62rem] text-accent-ink">
                {preview.languageChips[1]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Small floating label */}
      <div className="absolute -end-2 -top-4 z-20 hidden items-center gap-2 rounded-full border border-line bg-surface-strong px-3 py-1.5 text-[0.6rem] font-medium text-muted shadow-card lg:flex">
        <span className="size-1.5 rounded-full bg-forest dark:bg-accent" aria-hidden="true" />
        Read · Understand · Ask
      </div>
    </div>
  );
}
