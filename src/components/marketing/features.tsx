"use client";

import {
  ArrowRight,
  BookOpen,
  FileText,
  Headphones,
  Highlighter,
  Languages,
  ListTree,
  Sparkles,
  StickyNote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const iconMap: Record<string, LucideIcon> = {
  grounded: Sparkles,
  book: BookOpen,
  languages: Languages,
  summary: ListTree,
  audio: Headphones,
  note: Highlighter,
};

function MiniReaderVisual() {
  return (
    <div className="mt-6 rounded-xl border border-line bg-paper/70 p-3.5">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <span className="flex items-center gap-1.5 text-[0.58rem] text-muted">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Reader · page 42
        </span>
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-3 rounded-sm border border-line bg-surface" />
          <span className="size-3 rounded-sm border border-line bg-surface" />
        </span>
      </div>
      <div className="mt-3 space-y-1.5" aria-hidden="true">
        <span className="block h-1.5 w-[92%] rounded-full bg-ink/15" />
        <span className="block h-1.5 w-[98%] rounded-full bg-ink/10" />
        <span className="block h-1.5 w-[70%] rounded-full bg-highlight" />
        <span className="block h-1.5 w-[86%] rounded-full bg-ink/10" />
      </div>
      <div className="mt-3 flex items-center justify-between text-[0.58rem] text-muted">
        <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-accent-ink">
          <Highlighter className="size-2.5" aria-hidden="true" /> 3 highlights
        </span>
        <span className="tabular-nums">42 / 489</span>
      </div>
    </div>
  );
}

function SourceVisual() {
  return (
    <div className="mt-6 rounded-xl border border-line bg-paper/70 p-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-medium text-ink-soft">
          <FileText className="size-3 text-accent" aria-hidden="true" />
          Retrieved passages
        </span>
        <span className="rounded-full bg-forest/[0.08] px-2 py-0.5 text-[0.55rem] font-medium text-forest dark:bg-accent/15 dark:text-accent">
          3 found
        </span>
      </div>
      <div className="mt-2.5 space-y-1.5" aria-hidden="true">
        <span className="block h-1.5 w-full rounded-full bg-ink/10" />
        <span className="block h-1.5 w-[88%] rounded-full bg-ink/10" />
        <span className="block h-1.5 w-[94%] rounded-full bg-highlight" />
      </div>
      <div className="mt-2.5 flex items-center gap-1.5">
        <span className="rounded border border-line bg-surface px-1.5 py-0.5 text-[0.52rem] text-muted">
          p. 42
        </span>
        <span className="rounded border border-line bg-surface px-1.5 py-0.5 text-[0.52rem] text-muted">
          p. 43
        </span>
        <span className="ms-auto text-[0.52rem] text-muted">Cited in the answer</span>
      </div>
    </div>
  );
}

function SummaryVisual() {
  return (
    <div className="mt-6 space-y-2" aria-hidden="true">
      <div className="flex items-center gap-2">
        <span className="grid size-5 place-items-center rounded-full bg-accent-soft text-[0.5rem] font-semibold text-accent-ink">
          1
        </span>
        <span className="h-1.5 flex-1 rounded-full bg-ink/12" />
      </div>
      <div className="flex items-center gap-2">
        <span className="grid size-5 place-items-center rounded-full bg-accent-soft text-[0.5rem] font-semibold text-accent-ink">
          2
        </span>
        <span className="h-1.5 w-[86%] rounded-full bg-ink/10" />
      </div>
      <div className="flex items-center gap-2">
        <span className="grid size-5 place-items-center rounded-full bg-accent-soft text-[0.5rem] font-semibold text-accent-ink">
          3
        </span>
        <span className="h-1.5 w-[64%] rounded-full bg-ink/10" />
      </div>
      <p className="pt-1 text-[0.55rem] text-muted">Grounded in pages 12–18</p>
    </div>
  );
}

function AudioVisual() {
  const heights = [28, 52, 38, 74, 46, 88, 58, 96, 42, 70, 34, 62, 48, 80, 40, 56, 30, 66, 44, 78, 36, 50, 26, 58];
  return (
    <div className="mt-6 rounded-xl border border-line bg-paper/70 px-3.5 py-3">
      <div className="flex items-center gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-forest text-on-forest dark:bg-accent dark:text-primary-fg">
          <Headphones className="size-3.5" aria-hidden="true" />
        </span>
        <div className="flex h-9 flex-1 items-center gap-[3px]" aria-hidden="true">
          {heights.map((height, index) => (
            <span
              key={index}
              className={cn("flex-1 rounded-full", index < 10 ? "bg-accent" : "bg-ink/15")}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-[0.55rem] text-muted">
        <span>1.2× · English</span>
        <span className="tabular-nums">04:18</span>
      </div>
    </div>
  );
}

function NotesVisual() {
  return (
    <div className="mt-6 space-y-3">
      <div className="rounded-xl border border-line bg-paper/70 p-3.5">
        <p className="font-display text-[0.82rem] leading-relaxed text-ink-soft">
          <span className="bg-highlight px-0.5 text-ink">A single idea, underlined</span> and kept
          exactly where it belongs.
        </p>
        <div className="mt-2 flex items-center justify-between text-[0.55rem] text-muted">
          <span className="inline-flex items-center gap-1">
            <BookOpen className="size-2.5" aria-hidden="true" /> Meditations · p. 42
          </span>
          <span>Highlighted</span>
        </div>
      </div>
      <div className="ms-6 flex items-start gap-2 rounded-xl border border-accent/25 bg-accent-soft/60 p-3">
        <StickyNote className="mt-0.5 size-3.5 shrink-0 text-accent-ink" aria-hidden="true" />
        <div>
          <p className="text-[0.62rem] font-semibold text-accent-ink">My note</p>
          <p className="mt-0.5 text-[0.68rem] leading-relaxed text-accent-ink/80">
            Return to this before the next chapter.
          </p>
        </div>
      </div>
    </div>
  );
}

const visuals = [SourceVisual, MiniReaderVisual, null, SummaryVisual, AudioVisual, NotesVisual];

const spans = [
  "md:col-span-2 lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "md:col-span-2 lg:col-span-12",
];

export function Features() {
  const { dict } = useI18n();

  return (
    <section id="features" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{dict.features.eyebrow}</p>
            <h2 className="mt-4 font-display text-title text-ink">{dict.features.title}</h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              {dict.features.description}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="#reader"
              className="group inline-flex items-center gap-2 text-[0.8rem] font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {dict.readerShowcase.eyebrow}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {dict.features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Sparkles;
            const Visual = visuals[index];
            const isWide = index === dict.features.items.length - 1;

            return (
              <Reveal
                key={feature.title}
                delay={(index % 3) * 90}
                className={cn(spans[index], isWide && "lg:col-span-12")}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:border-line-strong hover:shadow-card sm:p-7",
                    isWide && "lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:p-9",
                  )}
                >
                  <div
                    className="pointer-events-none absolute -end-12 -top-12 size-32 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_10%,transparent),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className={cn(isWide && "lg:py-2")}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-2xl border border-line bg-paper text-ink-soft transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
                        <Icon className="size-[1.15rem]" aria-hidden="true" />
                      </span>
                      <Badge variant="outline" className="mt-1 text-[0.55rem] tracking-[0.12em]">
                        {feature.tag}
                      </Badge>
                    </div>

                    <h3 className="mt-6 font-display text-[1.45rem] leading-tight text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-[0.84rem] leading-[1.75] text-muted">
                      {feature.description}
                    </p>
                  </div>

                  {isWide ? (
                    <div className="mt-6 lg:mt-0">
                      {Visual ? <Visual /> : null}
                      <div className="mt-3 flex items-center gap-2 text-[0.62rem] text-muted">
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {dict.features.items[5].tag} · {dict.common.sample}
                      </div>
                    </div>
                  ) : Visual ? (
                    <div className="mt-auto">
                      <Visual />
                    </div>
                  ) : (
                    <div className="mt-6 flex flex-col gap-3 rounded-xl border border-line bg-paper/70 p-4" dir="rtl" lang="ur">
                      <p className="font-urdu text-lg leading-[2.1] text-ink-soft">
                        زبان بدلیں، اپنی جگہ نہ کھوئیں۔
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 font-urdu-text text-[0.68rem] text-accent-ink">
                          اردو
                        </span>
                        <span className="text-[0.55rem] text-muted">RTL · Nastaliq</span>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
