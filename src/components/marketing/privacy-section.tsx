"use client";

import { KeyRound, LockKeyhole, ShieldCheck, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Reveal } from "./reveal";

const icons: LucideIcon[] = [KeyRound, LockKeyhole, Trash2];

export function PrivacySection() {
  const { dict } = useI18n();

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">{dict.privacy.eyebrow}</p>
          <h2 className="mt-4 font-display text-title text-ink">{dict.privacy.title}</h2>
          <p className="mt-4 max-w-md text-[0.96rem] leading-[1.85] text-muted">
            {dict.privacy.description}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl bg-forest p-6 text-on-forest">
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10">
                <ShieldCheck className="size-[1.05rem] text-[#e6c68f]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.86rem] font-semibold">{dict.privacy.pledgeTitle}</p>
                <p className="mt-1.5 text-[0.8rem] leading-[1.8] text-[#e9e2d4]/70">
                  {dict.privacy.pledgeText}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:pt-12">
          {dict.privacy.items.map((item, index) => {
            const Icon = icons[index] ?? LockKeyhole;
            return (
              <Reveal key={item.title} delay={index * 90}>
                <div className="group flex gap-5 border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-ink-soft transition-colors group-hover:border-accent/30 group-hover:text-accent">
                    <Icon className="size-[1.1rem]" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-[1.25rem] leading-tight text-ink">
                        {item.title}
                      </h3>
                      <span className="text-[0.6rem] tabular-nums text-muted">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.83rem] leading-[1.8] text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
