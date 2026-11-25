import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getDictionary } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How BookMind AI handles your library, extracted text and AI requests.",
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const content = dict.legal.privacy;

  return (
    <article className="container-narrow py-16 sm:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[0.78rem] font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
        {dict.common.backHome}
      </Link>

      <p className="eyebrow mt-10">BookMind AI</p>
      <h1 className="mt-4 font-display text-title text-ink">{content.title}</h1>
      <p className="mt-3 text-[0.72rem] text-muted">{content.updated}</p>
      <p className="mt-6 text-[0.95rem] leading-[1.85] text-ink-soft">{content.intro}</p>

      <div className="mt-10 space-y-9">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-[1.45rem] leading-tight text-ink">{section.heading}</h2>
            <p className="mt-2.5 text-[0.9rem] leading-[1.85] text-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
