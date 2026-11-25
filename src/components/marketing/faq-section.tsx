"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function FaqSection() {
  const { dict } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-line py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">{dict.faq.eyebrow}</p>
            <h2 className="mt-4 font-display text-title text-ink">{dict.faq.title}</h2>
            <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-muted">
              {dict.faq.description}
            </p>
            <p
              className="mt-8 font-urdu text-xl leading-[2.1] text-ink-soft/70"
              lang="ur"
              dir="rtl"
            >
              سوال پوچھنا سیکھنے کی پہلی سیڑھی ہے۔
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-t border-line">
            {dict.faq.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="flex w-full items-start justify-between gap-5 py-5 text-start transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="flex gap-4">
                        <span className="mt-0.5 font-display text-xs tabular-nums text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.95rem] font-medium text-ink">{item.question}</span>
                      </span>
                      <span
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-full border transition-colors",
                          isOpen
                            ? "border-accent bg-accent text-primary-fg"
                            : "border-line-strong text-muted",
                        )}
                      >
                        {isOpen ? (
                          <Minus className="size-3" aria-hidden="true" />
                        ) : (
                          <Plus className="size-3" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 ps-9 pe-10 text-[0.85rem] leading-[1.85] text-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
