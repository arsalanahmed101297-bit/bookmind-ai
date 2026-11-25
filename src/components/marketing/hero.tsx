"use client";

import {
  ArrowRight,
  BookOpen,
  Check,
  Database,
  FileText,
  Headphones,
  Highlighter,
  Languages,
  Search,
  Sparkles,
} from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroPreview } from "./hero-preview";

function Underline() {
  return (
    <svg
      viewBox="0 0 220 12"
      fill="none"
      aria-hidden="true"
      className="absolute -bottom-1 left-0 h-2.5 w-full text-accent/70 sm:-bottom-2 sm:h-3"
      preserveAspectRatio="none"
    >
      <path
        d="M3 8.5C48 3.8 118 2.6 217 6.7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M22 11C66 8 126 7.4 196 9.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function Hero() {
  const { dict, locale } = useI18n();

  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pb-16 sm:pt-12 lg:pb-28 lg:pt-16">
      {/* ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] bg-[radial-gradient(ellipse_at_72%_18%,color-mix(in_srgb,var(--accent)_9%,transparent),transparent_58%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 start-0 -z-10 w-1/3 bg-[radial-gradient(ellipse_at_left,color-mix(in_srgb,var(--forest)_6%,transparent),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.02fr_1fr] lg:gap-12 xl:gap-20">
        <div className="relative z-10 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" dot className="py-1.5">
              {dict.hero.eyebrow}
            </Badge>
            <span className="inline-flex items-center gap-1.5 font-urdu text-sm leading-[1.9] text-muted" lang="ur" dir="rtl">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              اردو میں پڑھیں، اردو میں سمجھیں
            </span>
          </div>

          <h1 className="mt-6 font-display text-display text-ink">
            <span className="block">{dict.hero.titleLead}</span>
            <span className="mt-1 block">
              <span className="relative inline-block italic text-accent">
                {dict.hero.titleAccent}
                <Underline />
              </span>{" "}
              <span className="text-ink">{dict.hero.titleTail}</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.8] text-ink-soft/90 sm:text-[1.08rem]">
            {dict.hero.description}
          </p>

          {locale === "en" ? (
            <p
              lang="ur"
              dir="rtl"
              className="mt-3 font-urdu text-lg leading-[2.1] text-muted sm:text-xl"
            >
              ہر کتاب، اپنی زبان میں۔
            </p>
          ) : (
            <p className="mt-3 font-display text-lg italic text-muted">
              Read. Understand. Ask. Learn.
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/signup" size="lg" className="group">
              {dict.hero.primaryCta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outline" size="lg">
              <BookOpen className="size-4" aria-hidden="true" />
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
            {dict.hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-[0.78rem] text-ink-soft">
                <span className="grid size-4 place-items-center rounded-full bg-forest/[0.08] text-forest dark:bg-accent/15 dark:text-accent">
                  <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 lg:pb-16">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

const stripIcons = [Database, Search, Languages, FileText, Headphones, Highlighter];

export function TrustStrip() {
  const { dict } = useI18n();

  return (
    <div className="border-y border-line bg-surface/60">
      <div className="container-page flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <p className="max-w-xs text-[0.75rem] font-medium leading-relaxed text-ink-soft">
          {dict.strip.heading}
        </p>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:justify-end">
          {dict.strip.items.map((item, index) => {
            const Icon = stripIcons[index] ?? Check;
            return (
              <li
                key={item}
                className={cn(
                  "flex items-center gap-2 text-[0.72rem] text-muted",
                  index > 0 && "lg:border-s lg:border-line lg:ps-4",
                )}
              >
                <Icon className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
