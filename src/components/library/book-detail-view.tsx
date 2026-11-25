"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  ExternalLink,
  Highlighter,
  Info,
  NotebookPen,
  Sparkles,
} from "lucide-react";

import { BookCover } from "@/components/library/book-cover";
import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  sampleAnnotations,
  type SampleBook,
  type SampleAnnotation,
} from "@/lib/sample-data";
import { cn, formatNumber } from "@/lib/utils";

const annotationIcons = {
  note: NotebookPen,
  highlight: Highlighter,
  bookmark: Bookmark,
};

type OfficialTocSummary = {
  label: string;
  count: number;
  firstPath: string;
};

function annotationHref(annotation: SampleAnnotation, book: SampleBook) {
  if (book.readerHref) return `${book.readerHref}?page=${annotation.page}`;
  if (!book.hasReaderPreview) return `/library/${book.id}`;
  return `/reader/${book.id}?page=${annotation.page}`;
}

export function BookDetailView({
  book,
  tocGroups,
}: {
  book: SampleBook;
  tocGroups?: OfficialTocSummary[];
}) {
  const { dict, locale } = useI18n();
  const annotations = sampleAnnotations.filter(
    (annotation) => annotation.bookId === book.id,
  );
  const sampleReaderHref = "/reader/a-tale-of-two-cities";

  return (
    <div className="container-app py-7 sm:py-9">
      <Link
        href="/library"
        className="inline-flex items-center gap-2 text-[0.76rem] font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
        {dict.app.book.back}
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:items-start">
        <div className="mx-auto w-full max-w-[19rem] lg:sticky lg:top-24 lg:mx-0">
          <BookCover book={book} size="lg" />

          <div className="mt-5 rounded-2xl border border-line bg-surface p-4">
            <div className="flex items-center justify-between text-[0.68rem] text-muted">
              <span>{dict.app.book.progressTitle}</span>
              <span className="font-medium tabular-nums text-ink">
                {book.progress}%
              </span>
            </div>
            <ProgressBar
              value={book.progress}
              tone={book.status === "finished" ? "forest" : "accent"}
              className="mt-2"
              label={dict.app.book.progressTitle}
            />
            <p className="mt-2 text-[0.64rem] text-muted">
              {dict.app.status[book.status]} · {formatNumber(book.pages)}{" "}
              {(book.isOfficial
                ? dict.official.documentsUnit
                : dict.app.book.pagesLabel
              ).toLowerCase()}
            </p>
          </div>

          <dl className="mt-4 space-y-2.5 rounded-2xl border border-line bg-surface p-4 text-[0.74rem]">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-muted">{dict.app.book.authorLabel}</dt>
              <dd className="text-end font-medium text-ink">{book.author}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-muted">
                {book.isOfficial ? dict.official.versionLabel : dict.app.book.published}
              </dt>
              <dd className="text-end font-medium text-ink">{book.published}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-muted">
                {book.isOfficial ? dict.official.documentsLabel : dict.app.book.pagesLabel}
              </dt>
              <dd className="text-end font-medium tabular-nums text-ink">
                {formatNumber(book.pages)}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-muted">{dict.app.book.categoryLabel}</dt>
              <dd className="text-end font-medium text-ink">
                {dict.app.categories[book.category]}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-muted">{dict.app.book.sourceLabel}</dt>
              <dd className="text-end font-medium text-ink">
                {book.isOfficial && book.sourceUrl ? (
                  <a
                    href={book.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-ink hover:underline"
                  >
                    {dict.official.sourceValue}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                ) : (
                  dict.app.book.sourceValue
                )}
              </dd>
            </div>
          </dl>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={book.isOfficial ? "forest" : "gold"}>
              {book.isOfficial ? dict.official.badge : dict.app.book.sampleBadge}
            </Badge>
            <Badge variant="outline">
              {dict.app.categories[book.category]}
            </Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-2.5 py-1 text-[0.62rem] font-semibold text-forest dark:bg-accent/15 dark:text-accent">
              <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
              {dict.app.status[book.status]}
            </span>
          </div>

          <h1 dir={book.isOfficial ? "ltr" : undefined} className="mt-4 text-start font-display text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem]">
            {book.title}
          </h1>
          <p className="mt-2 text-[0.86rem] text-muted">
            {book.author} ·{" "}
            {book.isOfficial
              ? dict.official.versionLabel
              : dict.app.book.published}{" "}
            {book.published}
          </p>

          <p
            dir={book.isOfficial ? "ltr" : undefined}
            className="mt-6 max-w-2xl text-start text-[0.95rem] leading-[1.85] text-ink-soft/85"
          >
            {book.blurb[locale]}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {book.readerHref ? (
              <ButtonLink href={book.readerHref}>
                <BookOpen className="size-4" aria-hidden="true" />
                {dict.official.openReader}
                <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              </ButtonLink>
            ) : book.hasReaderPreview ? (
              <ButtonLink href={`/reader/${book.id}`}>
                <BookOpen className="size-4" aria-hidden="true" />
                {dict.app.book.openReader}
                <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              </ButtonLink>
            ) : (
              <ButtonLink href={sampleReaderHref} variant="secondary">
                <BookOpen className="size-4" aria-hidden="true" />
                {dict.app.book.openSampleReader}
              </ButtonLink>
            )}
            {book.isOfficial ? (
              <ButtonLink
                href="https://agentfactory.piaic.org/"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                {dict.official.sourcePage}
              </ButtonLink>
            ) : (
              <ButtonLink href={`/assistant?book=${book.id}`} variant="outline">
                <Sparkles className="size-4" aria-hidden="true" />
                {dict.app.book.askAbout}
              </ButtonLink>
            )}
          </div>

          {book.isOfficial ? (
            <div className="mt-5 flex max-w-2xl items-start gap-3 rounded-2xl border border-accent/20 bg-accent-soft/25 p-4">
              <Info className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden="true" />
              <div>
                <p className="text-[0.76rem] font-semibold text-ink">
                  {dict.official.noticeTitle}
                </p>
                <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">
                  {dict.official.noticeText}
                </p>
              </div>
            </div>
          ) : !book.hasReaderPreview ? (
            <div className="mt-5 flex max-w-2xl items-start gap-3 rounded-2xl border border-line bg-paper-deep/40 p-4">
              <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-[0.76rem] font-semibold text-ink">
                  {dict.app.book.readerUnavailable}
                </p>
                <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">
                  {dict.app.book.readerUnavailableDescription}
                </p>
              </div>
            </div>
          ) : null}

          <section className="mt-9 border-t border-line pt-7">
            <h2 className="font-display text-[1.6rem] text-ink">
              {dict.app.book.about}
            </h2>
            <p
              dir={book.isOfficial ? "ltr" : undefined}
              className="mt-3 max-w-2xl text-start text-[0.88rem] leading-[1.9] text-ink-soft/80"
            >
              {book.blurb[locale]}
            </p>
          </section>

          {book.isOfficial && tocGroups?.length ? (
            <section className="mt-9 border-t border-line pt-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-display text-[1.6rem] text-ink">
                    {dict.official.contentsTitle}
                  </h2>
                  <p className="mt-1 text-[0.72rem] text-muted">
                    {dict.official.contentsDescription}
                  </p>
                </div>
                <Badge variant="outline">
                  {formatNumber(book.documentCount ?? book.pages)}{" "}
                  {dict.official.documentsUnit}
                </Badge>
              </div>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {tocGroups.map((group) => (
                  <li key={group.label}>
                    <Link
                      href={`/course/${group.firstPath}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-3 transition-all hover:border-line-strong hover:shadow-card"
                    >
                      <span dir="ltr" className="min-w-0 truncate text-[0.8rem] font-medium text-ink">
                        {group.label}
                      </span>
                      <span className="shrink-0 text-[0.66rem] tabular-nums text-muted">
                        {formatNumber(group.count)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-9 border-t border-line pt-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-[1.6rem] text-ink">
                  {dict.app.book.notesForBook}
                </h2>
                <p className="mt-1 text-[0.72rem] text-muted">
                  {dict.app.notes.previewNote}
                </p>
              </div>
              <span className="rounded-full border border-line px-2.5 py-1 text-[0.62rem] font-medium tabular-nums text-muted">
                {annotations.length}
              </span>
            </div>

            {annotations.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {annotations.map((annotation) => {
                  const Icon = annotationIcons[annotation.kind];
                  return (
                    <li key={annotation.id}>
                      <Link
                        href={annotationHref(annotation, book)}
                        className="group block rounded-2xl border border-line bg-surface p-4 transition-all hover:border-line-strong hover:shadow-card"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-accent">
                            <Icon className="size-3" aria-hidden="true" />
                            {annotation.kind === "note"
                              ? dict.app.notes.tabs.notes
                              : annotation.kind === "highlight"
                                ? dict.app.notes.highlightLabel
                                : dict.app.notes.bookmarkLabel}
                          </span>
                          <span className="text-[0.62rem] text-muted">
                            {dict.common.page} {annotation.page}
                          </span>
                        </div>
                        {annotation.quote ? (
                          <blockquote
                            className={cn(
                              "mt-2.5 border-s-2 border-accent/40 ps-3 font-display text-[0.98rem] leading-relaxed text-ink-soft/80",
                              annotation.kind === "highlight" &&
                                "rounded-sm bg-highlight/40 py-1",
                            )}
                          >
                            “{annotation.quote}”
                          </blockquote>
                        ) : null}
                        {annotation.body ? (
                          <p className="mt-2.5 text-[0.8rem] leading-relaxed text-ink-soft/80">
                            {annotation.body}
                          </p>
                        ) : null}
                        <span className="mt-3 inline-flex items-center gap-1 text-[0.62rem] text-muted">
                          {dict.app.time[annotation.createdAt]}
                          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-line-strong bg-surface/50 px-5 py-8 text-center">
                <p className="text-[0.82rem] text-muted">
                  {dict.app.reader.annotationsEmpty}
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
