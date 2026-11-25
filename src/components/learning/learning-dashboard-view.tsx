"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  CheckCircle2,
  LibraryBig,
  LockKeyhole,
  NotebookPen,
} from "lucide-react";

import { EmptyState, PageHeader, StatCard } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { LearningLesson, LearningSummary } from "@/lib/learning/types";
import { formatNumber } from "@/lib/utils";

function LessonLinkList({
  title,
  description,
  lessons,
  empty,
  openLabel,
}: {
  title: string;
  description: string;
  lessons: LearningLesson[];
  empty: string;
  openLabel: string;
}) {
  return (
    <section className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
      <h2 className="font-display text-[1.3rem] leading-tight text-ink">{title}</h2>
      <p className="mt-1 text-[0.72rem] text-muted">{description}</p>
      {lessons.length ? (
        <ul className="mt-4 space-y-2">
          {lessons.map((lesson) => (
            <li key={lesson.path}>
              <Link
                href={`/course/${lesson.path}`}
                className="group flex items-start justify-between gap-3 rounded-xl border border-line bg-paper/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface"
              >
                <div className="min-w-0">
                  <span dir="ltr" className="block truncate text-start text-[0.8rem] font-medium text-ink">
                    {lesson.title}
                  </span>
                </div>
                <span className="shrink-0 text-[0.68rem] font-medium text-muted transition-colors group-hover:text-accent-ink">
                  {openLabel}
                  <ArrowRight className="ms-1 inline size-3 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          className="mt-4"
          icon={<BookOpen className="size-5" aria-hidden="true" />}
          title={title}
          description={empty}
        />
      )}
    </section>
  );
}

export function LearningDashboardView({ summary }: { summary: LearningSummary }) {
  const { dict } = useI18n();
  const t = dict.app.learning;

  if (summary.status !== "ready") {
    return (
      <div className="container-app py-7 sm:py-9">
        <PageHeader
          eyebrow={`${dict.app.nav.workspace}${summary.status === "signInRequired" ? ` · ${dict.common.preview}` : ""}`}
          title={t.title}
          description={t.subtitle}
        />

        <section className="mt-7 max-w-2xl rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            <LockKeyhole className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-[1.6rem] leading-tight text-ink">
            {summary.status === "signInRequired"
              ? t.signInTitle
              : t.unavailableTitle}
          </h2>
          <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
            {summary.status === "signInRequired"
              ? t.signInDescription
              : t.unavailableDescription}
          </p>
          {summary.status === "signInRequired" ? (
            <ButtonLink href="/login?next=%2Flearning" className="mt-5">
              {t.signInCta}
            </ButtonLink>
          ) : null}
        </section>
      </div>
    );
  }

  const targetPath = summary.continueLesson?.path ?? summary.startLessonPath;
  const targetTitle = summary.continueLesson?.title ?? t.startTitle;

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.workspace} · ${dict.official.badge}`}
        title={t.title}
        description={t.subtitle}
      >
        <ButtonLink
          href="/library/the-ai-agent-factory"
          variant="secondary"
          size="sm"
        >
          <LibraryBig className="size-3.5" aria-hidden="true" />
          {t.bookDetail}
        </ButtonLink>
        <ButtonLink href={`/course/${targetPath}`} size="sm">
          <BookOpen className="size-3.5" aria-hidden="true" />
          {summary.continueLesson ? t.openLesson : t.startTitle}
        </ButtonLink>
      </PageHeader>

      <section className="relative mt-7 overflow-hidden rounded-3xl bg-forest p-5 text-on-forest shadow-card sm:p-7">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(220,174,107,0.2),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#e6c68f]">
                {t.continueTitle}
              </span>
              <Badge className="border border-white/15 bg-white/10 text-[0.52rem] text-[#e9e2d4]/80" variant="outline">
                {dict.official.badge}
              </Badge>
            </div>
            <h2 dir="ltr" className="mt-2 font-display text-[1.6rem] leading-tight sm:text-[2rem]">
              {targetTitle}
            </h2>
            <p className="mt-1 text-[0.75rem] text-[#e9e2d4]/60">{t.bookTitle}</p>
            <div className="mt-4 max-w-sm">
              <div className="flex items-center justify-between text-[0.64rem] text-[#e9e2d4]/70">
                <span>{t.stats.percent}</span>
                <span className="tabular-nums">{summary.percent}%</span>
              </div>
              <ProgressBar
                value={summary.percent}
                className="mt-1.5 bg-white/15"
                label={t.stats.percent}
              />
            </div>
          </div>
          <ButtonLink
            href={`/course/${targetPath}`}
            className="shrink-0 bg-on-forest text-forest-deep hover:bg-white"
          >
            {summary.continueLesson ? t.openLesson : t.startTitle}
            <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard
          label={t.stats.lessons}
          value={`${formatNumber(summary.completedLessons)}/${formatNumber(summary.totalLessons)}`}
          icon={<CheckCircle2 className="size-3.5" />}
        />
        <StatCard
          label={t.stats.chapters}
          value={`${formatNumber(summary.chaptersCompleted)}/${formatNumber(summary.chaptersTotal)}`}
          icon={<BookOpen className="size-3.5" />}
        />
        <StatCard
          label={t.stats.notes}
          value={formatNumber(summary.notesCount)}
          icon={<NotebookPen className="size-3.5" />}
        />
        <StatCard
          label={t.stats.bookmarks}
          value={formatNumber(summary.bookmarksCount)}
          icon={<Bookmark className="size-3.5" />}
          tone="accent"
        />
      </div>

      <section className="mt-7">
        <div>
          <h2 className="font-display text-[1.4rem] leading-tight text-ink">
            {t.chapters.title}
          </h2>
          <p className="mt-1 text-[0.72rem] text-muted">{t.chapters.description}</p>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {summary.chapters.map((chapter) => {
            const percent = chapter.total
              ? Math.round((chapter.completed / chapter.total) * 100)
              : 0;
            return (
              <Link
                key={chapter.key}
                href={`/course/${chapter.firstIncompletePath ?? chapter.firstLessonPath}`}
                className="block rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent/40 hover:bg-paper/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <span dir="ltr" className="min-w-0 text-start text-[0.8rem] font-medium text-ink">
                    {chapter.label}
                  </span>
                  <span className="shrink-0 text-[0.66rem] tabular-nums text-muted">
                    {chapter.completed}/{chapter.total}
                  </span>
                </div>
                <ProgressBar
                  value={percent}
                  className="mt-3"
                  label={chapter.label}
                />
                <span className="mt-2 block text-[0.66rem] text-muted">
                  {chapter.firstIncompletePath
                    ? t.chapters.start
                    : t.chapters.complete}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        <LessonLinkList
          title={t.recent.title}
          description={t.recent.description}
          lessons={summary.recentLessons}
          empty={t.recent.empty}
          openLabel={t.openLesson}
        />
        <LessonLinkList
          title={t.bookmarksSection.title}
          description={t.bookmarksSection.description}
          lessons={summary.bookmarks}
          empty={t.bookmarksSection.empty}
          openLabel={t.openLesson}
        />
      </div>

      <section className="mt-7 rounded-3xl border border-line bg-surface p-5 sm:p-6">
        <h2 className="font-display text-[1.3rem] leading-tight text-ink">
          {t.notesSection.title}
        </h2>
        <p className="mt-1 text-[0.72rem] text-muted">{t.notesSection.description}</p>
        {summary.notes.length ? (
          <ul className="mt-4 space-y-3">
            {summary.notes.map((note) => (
              <li key={note.id} className="rounded-2xl border border-line bg-paper/40 p-4">
                <Link
                  href={`/course/${note.lessonPath}`}
                  dir="ltr"
                  className="text-[0.76rem] font-semibold text-accent-ink hover:underline"
                >
                  {note.lessonTitle}
                </Link>
                <p className="mt-2 whitespace-pre-wrap break-words text-[0.78rem] leading-relaxed text-ink-soft">
                  {note.body}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            className="mt-4"
            icon={<NotebookPen className="size-5" aria-hidden="true" />}
            title={t.notesSection.title}
            description={t.notesSection.empty}
          />
        )}
      </section>

      <p className="mt-6 text-center text-[0.68rem] text-muted">{t.privacy}</p>
    </div>
  );
}
