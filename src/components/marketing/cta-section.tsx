"use client";

import { ArrowRight, Sparkles } from "lucide-react";

import { BookCover } from "@/components/library/book-cover";
import { useI18n } from "@/components/providers/locale-provider";
import { ButtonLink } from "@/components/ui/button";
import { sampleBooks } from "@/lib/sample-data";
import { Reveal } from "./reveal";

export function CtaSection() {
  const { dict } = useI18n();
  const leftBook = sampleBooks[1];
  const rightBook = sampleBooks[0];

  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-forest-deep px-6 py-16 text-center text-on-forest shadow-lift sm:px-12 sm:py-20 lg:py-24">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(220,174,107,0.22),transparent_55%)]"
              aria-hidden="true"
            />
            <div
              className="arch-lines pointer-events-none absolute inset-y-0 start-0 w-1/2 opacity-25"
              aria-hidden="true"
            />
            <div
              className="arch-lines pointer-events-none absolute inset-y-0 end-0 w-1/2 opacity-25"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -start-6 top-1/2 hidden w-32 -translate-y-1/2 -rotate-6 xl:block"
              aria-hidden="true"
            >
              <div className="opacity-80"><BookCover book={leftBook} size="sm" /></div>
            </div>
            <div
              className="pointer-events-none absolute -end-4 top-1/2 hidden w-32 -translate-y-1/2 rotate-6 xl:block"
              aria-hidden="true"
            >
              <div className="opacity-80"><BookCover book={rightBook} size="sm" /></div>
            </div>

            <div className="relative mx-auto max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#e6c68f]">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {dict.cta.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-title text-on-forest">{dict.cta.title}</h2>
              <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-[1.85] text-[#e9e2d4]/70">
                {dict.cta.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href="/signup"
                  size="lg"
                  variant="secondary"
                  className="group border-transparent bg-on-forest text-forest-deep hover:bg-white hover:text-forest-deep"
                >
                  {dict.cta.primary}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href="/dashboard"
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-on-forest hover:border-white/45 hover:bg-white/10 hover:text-on-forest"
                >
                  {dict.cta.secondary}
                </ButtonLink>
              </div>
              <p className="mt-5 text-[0.68rem] text-[#e9e2d4]/50">{dict.cta.note}</p>
              <p className="mt-2 font-urdu text-base leading-loose text-[#e9e2d4]/50" lang="ur" dir="rtl">
                پڑھیں۔ سمجھیں۔ پوچھیں۔ سیکھیں۔
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
