"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Highlighter, Search, StickyNote } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";

function ReaderVisual() {
  const { dict } = useI18n();

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_11%,transparent),transparent)] blur-xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-lift">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-surface-strong/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <Badge variant="gold" className="text-[0.52rem]">
              {dict.app.common.previewChip}
            </Badge>
            <span className="text-[0.62rem] text-muted">{dict.readerShowcase.caption.split("·")[0]}</span>
          </div>
          <div className="flex items-center gap-1 text-muted">
            {[Search, Highlighter, StickyNote].map((Icon, index) => (
              <span
                key={index}
                className="grid size-6 place-items-center rounded-full border border-line bg-paper"
              >
                <Icon className="size-3" aria-hidden="true" />
              </span>
            ))}
            <span className="ms-1 rounded-full border border-line bg-paper px-2 py-0.5 text-[0.55rem] tabular-nums">
              1 / 489
            </span>
          </div>
        </div>

        <div className="book-paper relative px-5 py-7 sm:px-9 sm:py-10">
          <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-[0.18em] text-[#6c705f]">
            <span>Book the First · Recalled to Life</span>
            <span className="tabular-nums">1</span>
          </div>
          <div className="mt-5">
            <p className="font-display text-[1.05rem] leading-tight text-[#1d2a21] sm:text-[1.2rem]">
              Chapter I
              <span className="ms-2 text-[#8a7a58]">·</span>
              <span className="ms-2">The Period</span>
            </p>
            <p className="mt-4 font-display text-[0.82rem] leading-[1.95] text-[#2a352c] sm:text-[0.9rem]">
              <span className="float-start me-2 mt-1 font-display text-[2.4rem] leading-[0.72] text-[#8a6a2f]">
                I
              </span>
              t was the best of times, it was the worst of times, it was the age of{" "}
              <span className="bg-[#f4e3ad] px-0.5">wisdom</span>, it was the age of foolishness, it
              was the epoch of belief, it was the epoch of incredulity, it was the season of Light,
              it was the season of Darkness, it was the spring of hope, it was the winter of despair,
              we had everything before us, we had nothing before us…
            </p>
            <div className="mt-3 space-y-1.5 opacity-40" aria-hidden="true">
              <span className="block h-1 w-[96%] rounded-full bg-[#2a352c]/35" />
              <span className="block h-1 w-[88%] rounded-full bg-[#2a352c]/25" />
              <span className="block h-1 w-[52%] rounded-full bg-[#2a352c]/20" />
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-[#d9d0bb] pt-3 text-[#6c705f]">
            <div className="flex items-center gap-1.5">
              <ChevronLeft className="size-3.5" aria-hidden="true" />
              <span className="text-[0.55rem]">Previous</span>
            </div>
            <span className="text-[0.52rem] uppercase tracking-[0.16em]">Sample excerpt</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[0.55rem]">Next</span>
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </div>
          </div>

          <span
            className="absolute end-3 top-1/2 -translate-y-1/2 rounded-e-md bg-[#c9a35a] px-1 py-3 text-[0.45rem] font-semibold uppercase tracking-[0.18em] text-[#241b09] shadow-sm"
            aria-hidden="true"
          >
            Notes
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-4 -mt-6 rounded-2xl border border-line bg-surface-strong p-3.5 shadow-lift sm:absolute sm:-bottom-8 sm:-end-5 sm:mx-0 sm:w-60 sm:p-4">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-ink">
            <StickyNote className="size-3.5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold text-ink">My note · p. 1</p>
            <p className="mt-1 text-[0.66rem] leading-relaxed text-muted">
              Opposites, repeated. The rhythm is doing the work here.
            </p>
            <p className="mt-2 inline-flex items-center gap-1 text-[0.55rem] text-accent-ink">
              <Highlighter className="size-2.5" aria-hidden="true" /> Highlighted passage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReaderShowcase() {
  const { dict } = useI18n();

  return (
    <section id="reader" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">{dict.readerShowcase.eyebrow}</p>
          <h2 className="mt-4 font-display text-title text-ink">{dict.readerShowcase.title}</h2>
          <p className="mt-4 max-w-lg text-[0.96rem] leading-[1.85] text-muted">
            {dict.readerShowcase.description}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {dict.readerShowcase.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-[0.8rem] text-ink-soft">
                <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-forest/10 text-forest dark:bg-accent/15 dark:text-accent">
                  <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <Link
            href="/reader/a-tale-of-two-cities"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[0.8rem] font-medium text-ink transition-all hover:border-ink/40 hover:bg-surface"
          >
            {dict.app.book.openSampleReader}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-180" aria-hidden="true" />
          </Link>
          <p className="mt-3 text-[0.65rem] text-muted">{dict.readerShowcase.caption}</p>
        </Reveal>

        <Reveal delay={120}>
          <ReaderVisual />
        </Reveal>
      </div>
    </section>
  );
}
