"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
  ListTree,
  Search,
  X,
} from "lucide-react";

import { LessonLearningControls } from "@/components/learning/lesson-learning-controls";
import { useI18n } from "@/components/providers/locale-provider";
import { OfficialMarkdown } from "@/components/reader/official-markdown";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type {
  OfficialFootnote,
  OfficialHeading,
  OfficialToken,
} from "@/lib/agentfactory/markdown";
import type { LessonLearningState } from "@/lib/learning/types";
import { cn, formatNumber } from "@/lib/utils";

export type OfficialTocLink = {
  path: string;
  title: string;
};

export type OfficialTocGroup = {
  label: string;
  docs: OfficialTocLink[];
};

type OfficialReaderProps = {
  doc: {
    path: string;
    title: string;
    description: string;
    sourceUrl: string;
    markdownUrl: string;
    order: number;
    wordCount: number;
    footnoteCount: number;
    lastVerified: string | null;
    reviewBy: string | null;
  };
  tokens: OfficialToken[];
  headings: OfficialHeading[];
  footnotes: OfficialFootnote[];
  toc: OfficialTocGroup[];
  previous?: OfficialTocLink;
  next?: OfficialTocLink;
  total: number;
  learning: LessonLearningState;
};

export function OfficialReaderView({
  doc,
  tokens,
  headings,
  footnotes,
  toc,
  previous,
  next,
  total,
  learning,
}: OfficialReaderProps) {
  const { dict } = useI18n();
  const [contentsOpen, setContentsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const t = dict.official;

  const filteredToc = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return toc;
    return toc
      .map((group) => ({
        ...group,
        docs: group.docs.filter((item) =>
          item.title.toLowerCase().includes(needle),
        ),
      }))
      .filter((group) => group.docs.length > 0);
  }, [query, toc]);

  const contents = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <ListTree className="size-4 text-accent" aria-hidden="true" />
          <h2 className="font-display text-[1.05rem] text-ink">{t.contents}</h2>
        </div>
        <button
          type="button"
          onClick={() => setContentsOpen(false)}
          className="rounded-full p-1.5 text-muted transition-colors hover:bg-ink/5 hover:text-ink lg:hidden"
          aria-label={t.closeContents}
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="border-b border-line px-4 py-3">
        <div className="relative">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-3.5 -translate-y-1/2 text-muted" aria-hidden="true" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchContents}
            aria-label={t.searchContents}
            className="h-9 ps-9 text-[0.8rem]"
          />
        </div>
      </div>

      <nav aria-label={t.contents} className="official-contents flex-1 overflow-y-auto px-2 py-3">
        {filteredToc.length ? (
          filteredToc.map((group) => (
            <details
              key={group.label}
              className="group border-b border-line/70 last:border-0"
              open={Boolean(query) || group.docs.some((item) => item.path === doc.path)}
            >
              <summary className="cursor-pointer list-none px-2 py-2.5 text-[0.74rem] font-semibold text-ink-soft/80 transition-colors hover:text-ink">
                <span className="flex items-center justify-between gap-2">
                  <span dir="ltr">{group.label}</span>
                  <span className="rounded-full bg-ink/[0.05] px-1.5 py-0.5 text-[0.6rem] font-medium tabular-nums text-muted">
                    {group.docs.length}
                  </span>
                </span>
              </summary>
              <ul className="space-y-0.5 pb-2">
                {group.docs.map((item) => {
                  const active = item.path === doc.path;
                  return (
                    <li key={item.path}>
                      <Link
                        href={`/course/${item.path}`}
                        onClick={() => setContentsOpen(false)}
                        dir="ltr"
                        className={cn(
                          "block rounded-lg px-2 py-1.5 text-[0.78rem] leading-snug transition-colors",
                          active
                            ? "bg-accent-soft font-semibold text-accent-ink"
                            : "text-muted hover:bg-ink/[0.04] hover:text-ink",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          ))
        ) : (
          <p className="px-3 py-6 text-center text-[0.78rem] text-muted">
            {t.noContentsMatches}
          </p>
        )}
      </nav>
    </div>
  );

  return (
    <div className="container-app py-6 sm:py-8">
      <Link
        href="/library/the-ai-agent-factory"
        className="inline-flex items-center gap-2 text-[0.76rem] font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
        {dict.app.book.back}
      </Link>

      <header className="mt-5 rounded-3xl border border-line bg-surface/70 p-5 shadow-card sm:p-7">
        <div dir="ltr" className="text-start">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="forest">{t.badge}</Badge>
            <Badge variant="outline">{t.document}</Badge>
            <span className="text-[0.68rem] font-medium tabular-nums text-muted">
              {formatNumber(doc.order + 1)} {t.of} {formatNumber(total)}
            </span>
          </div>
          <h1 className="mt-4 font-display text-[2rem] leading-tight tracking-[-0.02em] text-ink sm:text-[2.7rem]">
            {doc.title}
          </h1>
          <p className="mt-3 max-w-3xl text-[0.88rem] leading-[1.75] text-muted">
            {doc.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <Button
            onClick={() => setContentsOpen(true)}
            variant="secondary"
            className="lg:hidden"
          >
            <ListTree className="size-4" aria-hidden="true" />
            {t.contents}
          </Button>
          <ButtonLink href={doc.sourceUrl} variant="outline" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" aria-hidden="true" />
            {t.sourcePage}
          </ButtonLink>
          <ButtonLink href={doc.markdownUrl} variant="ghost" size="sm" target="_blank" rel="noopener noreferrer">
            <FileText className="size-3.5" aria-hidden="true" />
            {t.markdownSource}
          </ButtonLink>
        </div>
      </header>

      <div className="mt-4 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent-soft/25 p-4">
        <FileText className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden="true" />
        <div>
          <p className="text-[0.76rem] font-semibold text-ink">{t.noticeTitle}</p>
          <p className="mt-1 text-[0.74rem] leading-relaxed text-muted">{t.noticeText}</p>
          <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">{t.aiNotice}</p>
        </div>
      </div>

      <div className="mt-4">
        <LessonLearningControls lessonPath={doc.path} state={learning} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
        <article
          dir="ltr"
          lang="en"
          className="min-w-0 rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-8"
        >
          <OfficialMarkdown tokens={tokens} footnotes={footnotes} notesLabel={t.footnotes} />
        </article>

        <aside className="hidden min-w-0 space-y-4 lg:block">
          {headings.length ? (
            <nav
              aria-label={t.onThisPage}
              className="rounded-2xl border border-line bg-surface p-4"
            >
              <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted">
                {t.onThisPage}
              </h2>
              <ul className="mt-3 space-y-1.5">
                {headings.map((heading) => (
                  <li key={heading.id} className={heading.depth > 2 ? "ps-3" : undefined}>
                    <a
                      href={`#${heading.id}`}
                      dir="ltr"
                      className="block text-[0.76rem] leading-snug text-muted transition-colors hover:text-accent-ink"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="rounded-2xl border border-line bg-surface p-4 text-[0.72rem]">
            <dl className="space-y-2.5">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-muted">{t.words}</dt>
                <dd className="font-medium tabular-nums text-ink">{formatNumber(doc.wordCount)}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-muted">{t.footnotes}</dt>
                <dd className="font-medium tabular-nums text-ink">{formatNumber(doc.footnoteCount)}</dd>
              </div>
              {doc.lastVerified ? (
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-muted">{t.lastVerified}</dt>
                  <dd dir="ltr" className="font-medium tabular-nums text-ink">{doc.lastVerified}</dd>
                </div>
              ) : null}
              {doc.reviewBy ? (
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-muted">{t.reviewBy}</dt>
                  <dd dir="ltr" className="font-medium tabular-nums text-ink">{doc.reviewBy}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </aside>
      </div>

      <nav aria-label={t.document} className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {previous ? (
          <ButtonLink href={`/course/${previous.path}`} variant="secondary">
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            <span className="max-w-[14rem] truncate" dir="ltr">{previous.title}</span>
          </ButtonLink>
        ) : (
          <span />
        )}
        {next ? (
          <ButtonLink href={`/course/${next.path}`} variant="secondary">
            <span className="max-w-[14rem] truncate" dir="ltr">{next.title}</span>
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          </ButtonLink>
        ) : (
          <span />
        )}
      </nav>

      {contentsOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setContentsOpen(false)}
            aria-label={t.closeContents}
          />
          <div className="absolute inset-y-0 end-0 w-[min(22rem,88vw)] border-s border-line bg-surface shadow-lift">
            {contents}
          </div>
        </div>
      ) : null}

      <div className="hidden lg:block">
        <div className="mt-6 max-h-[32rem] overflow-hidden rounded-2xl border border-line bg-surface">
          {contents}
        </div>
      </div>
    </div>
  );
}
