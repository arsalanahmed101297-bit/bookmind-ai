"use client";

import { Check, Info } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Reveal } from "./reveal";

export function HowItWorks() {
  const { dict } = useI18n();

  return (
    <section id="how-it-works" className="scroll-mt-24 pb-6 sm:pb-10">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-on-forest shadow-lift sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgba(220,174,107,0.16),transparent_55%)]"
              aria-hidden="true"
            />
            <div
              className="arch-lines pointer-events-none absolute inset-y-0 end-0 w-2/5 opacity-40"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#e6c68f]">
                  <span className="size-1.5 rounded-full bg-[#e6c68f]" aria-hidden="true" />
                  {dict.how.eyebrow}
                </p>
                <h2 className="mt-4 max-w-md font-display text-title text-on-forest">
                  {dict.how.title}
                </h2>
              </div>
              <p className="max-w-xl text-[0.93rem] leading-[1.85] text-[#e9e2d4]/70 lg:justify-self-end">
                {dict.how.description}
              </p>
            </div>

            <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
              {dict.how.steps.map((step) => (
                <div
                  key={step.number}
                  className="relative md:px-7 md:first:ps-0 md:last:pe-0 md:[&:not(:first-child)]:border-s md:[&:not(:first-child)]:border-white/12"
                >
                  <span className="font-display text-[3.4rem] leading-none text-[#f4ecd9]/20">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[1.02rem] font-semibold text-on-forest">{step.title}</h3>
                  <p className="mt-2.5 text-[0.82rem] leading-[1.8] text-[#e9e2d4]/65">
                    {step.description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[0.6rem] text-[#e9e2d4]/60">
                    <Check className="size-2.5 text-[#e6c68f]" aria-hidden="true" />
                    {step.meta}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2.5 text-[0.75rem] leading-relaxed text-[#e9e2d4]/70 sm:items-center">
                <Info className="mt-0.5 size-4 shrink-0 text-[#e6c68f] sm:mt-0" aria-hidden="true" />
                {dict.how.note}
              </p>
              <span className="shrink-0 font-urdu text-base leading-loose text-[#e9e2d4]/60" lang="ur" dir="rtl">
                صرف حقیقی صفحات سے جواب
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
