"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bookmark,
  LibraryBig,
  Sparkles,
  StickyNote,
  Upload,
} from "lucide-react";

import { BookCard } from "@/components/library/book-card";
import { PageHeader, StatCard } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import type { AuthUser } from "@/lib/auth/dal";
import { useWorkspaceUi } from "@/components/app-shell/workspace-ui";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { LearningSummary } from "@/lib/learning/types";
import { sampleBooks } from "@/lib/sample-data";
import { formatNumber } from "@/lib/utils";

export function DashboardView({
  user,
  learning,
}: {
  user: AuthUser | null;
  learning: LearningSummary;
}) {
  const { dict } = useI18n();
  const { openUpload } = useWorkspaceUi();

  const firstName = user?.name.split(/\s+/)[0] ?? "";
  const greeting = firstName
    ? dict.app.dashboard.greetingNamed.replace("{name}", firstName)
    : dict.app.dashboard.greeting;

  const recentBooks = sampleBooks.slice(0, 3);
  const learningReady = learning.status === "ready";
  const lessonPath = learning.continueLesson?.path ?? learning.startLessonPath;
  const lessonTitle = learning.continueLesson?.title ?? dict.app.learning.startTitle;

  const learningStats = [
    {
      label: dict.app.learning.stats.lessons,
      value: learningReady
        ? `${formatNumber(learning.completedLessons)}/${formatNumber(learning.totalLessons)}`
        : "—",
      icon: <BookOpen className="size-3.5" />,
      hint: learningReady ? dict.official.badge : dict.app.learning.signInHint,
    },
    {
      label: dict.app.learning.stats.chapters,
      value: learningReady
        ? `${formatNumber(learning.chaptersCompleted)}/${formatNumber(learning.chaptersTotal)}`
        : "—",
      icon: <LibraryBig className="size-3.5" />,
      hint: learningReady ? dict.app.learning.chapters.description : dict.app.learning.signInHint,
    },
    {
      label: dict.app.learning.stats.notes,
      value: learningReady ? formatNumber(learning.notesCount) : "—",
      icon: <StickyNote className="size-3.5" />,
      hint: learningReady ? dict.app.learning.privacy : dict.app.learning.signInHint,
    },
    {
      label: dict.app.learning.stats.bookmarks,
      value: learningReady ? formatNumber(learning.bookmarksCount) : "—",
      icon: <Bookmark className="size-3.5" />,
      hint: learningReady ? dict.app.learning.privacy : dict.app.learning.signInHint,
      tone: "accent" as const,
    },
  ];

  const quickActions = [
    {
      label: dict.app.common.uploadPdf,
      description: dict.app.dashboard.quickUploadDesc,
      icon: Upload,
      onClick: openUpload,
    },
    {
      label: dict.app.common.askAssistant,
      description: dict.app.dashboard.quickAskDesc,
      icon: Sparkles,
      href: "/assistant",
    },
    {
      label: dict.app.common.addNote,
      description: dict.app.dashboard.quickNotesDesc,
      icon: StickyNote,
      href: "/notes",
    },
    {
      label: dict.app.common.openLibrary,
      description: dict.app.dashboard.quickLibraryDesc,
      icon: LibraryBig,
      href: "/library",
    },
  ];

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.workspace} · ${dict.app.common.sampleData}`}
        title={greeting}
        description={dict.app.dashboard.subtitle}
      >
        <button
          type="button"
          onClick={openUpload}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[0.78rem] font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper"
        >
          <Upload className="size-3.5" aria-hidden="true" />
          {dict.app.common.uploadPdf}
        </button>
        <ButtonLink href="/assistant" size="sm">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {dict.app.common.askAssistant}
        </ButtonLink>
      </PageHeader>

      <div className="mt-7 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {/* Continue learning */}
          <section className="relative overflow-hidden rounded-3xl bg-forest p-5 text-on-forest shadow-card sm:p-7">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(220,174,107,0.2),transparent_55%)]"
              aria-hidden="true"
            />
            <div
              className="arch-lines pointer-events-none absolute inset-y-0 end-0 w-2/5 opacity-30"
              aria-hidden="true"
            />

            <div className="relative min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#e6c68f]">
                  {dict.app.dashboard.continueLearningLabel}
                </span>
                <Badge className="border border-white/15 bg-white/10 text-[0.52rem] text-[#e9e2d4]/80" variant="outline">
                  {dict.official.badge}
                </Badge>
              </div>
              <h2 dir="ltr" className="mt-2 font-display text-[1.7rem] leading-tight text-on-forest sm:text-[2rem]">
                {lessonTitle}
              </h2>
              <p className="mt-1 text-[0.75rem] text-[#e9e2d4]/60">
                {dict.app.learning.bookTitle}
              </p>

              {learningReady ? (
                <div className="mt-4 max-w-sm">
                  <div className="flex items-center justify-between text-[0.62rem] text-[#e9e2d4]/60">
                    <span>{dict.app.learning.stats.percent}</span>
                    <span className="tabular-nums">{learning.percent}%</span>
                  </div>
                  <ProgressBar
                    value={learning.percent}
                    className="mt-1.5 bg-white/15"
                    label={dict.app.learning.stats.percent}
                  />
                </div>
              ) : (
                <p className="mt-4 max-w-md text-[0.76rem] leading-relaxed text-[#e9e2d4]/70">
                  {dict.app.learning.signInDescription}
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <ButtonLink
                  href={`/course/${lessonPath}`}
                  className="bg-on-forest text-forest-deep hover:bg-white"
                >
                  <BookOpen className="size-3.5" aria-hidden="true" />
                  {learningReady ? dict.app.learning.openLesson : dict.app.learning.startTitle}
                  <ArrowRight className="size-3 rtl:rotate-180" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href="/learning"
                  className="border border-white/20 text-[#e9e2d4]/80 hover:bg-white/10"
                >
                  {dict.app.learning.openDashboard}
                </ButtonLink>
              </div>
            </div>
          </section>

          {/* Learning stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {learningStats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                hint={stat.hint}
                tone={stat.tone}
              />
            ))}
          </div>

          {/* Recently opened */}
          <section>
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-[1.4rem] leading-tight text-ink">
                  {dict.app.dashboard.recentTitle}
                </h2>
                <p className="mt-1 text-[0.72rem] text-muted">
                  {dict.app.dashboard.recentDescription}
                </p>
              </div>
              <Link
                href="/library"
                className="group inline-flex shrink-0 items-center gap-1.5 text-[0.72rem] font-medium text-muted transition-colors hover:text-ink"
              >
                {dict.common.viewAll}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {recentBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        </div>

        {/* Aside */}
        <aside className="space-y-5">
          <section className="relative overflow-hidden rounded-3xl border border-accent/25 bg-accent-soft/50 p-5 sm:p-6">
            <div
              className="pointer-events-none absolute -end-8 -top-8 size-32 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_22%,transparent),transparent)]"
              aria-hidden="true"
            />
            <span className="grid size-10 place-items-center rounded-2xl bg-accent/15 text-accent-ink">
              <Sparkles className="size-[1.1rem]" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-[1.4rem] leading-tight text-ink">
              {dict.app.dashboard.assistantTitle}
            </h2>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-soft/80">
              {dict.app.dashboard.assistantDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {[dict.app.assistant.suggestions[0], dict.app.assistant.suggestions[1]].map(
                (suggestion) => (
                  <Link
                    key={suggestion}
                    href="/assistant"
                    className="rounded-full border border-accent/25 bg-surface/60 px-2.5 py-1 text-[0.62rem] text-ink-soft transition-colors hover:bg-surface"
                  >
                    {suggestion}
                  </Link>
                ),
              )}
            </div>
            <ButtonLink href="/assistant" size="sm" className="mt-4 w-full justify-between">
              {dict.app.dashboard.assistantCta}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </ButtonLink>
            <p className="mt-2 text-center text-[0.58rem] text-muted">
              {dict.app.assistant.statusChip}
            </p>
          </section>

          <section className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-[1.25rem] leading-tight text-ink">
                  {dict.app.dashboard.quickTitle}
                </h2>
                <p className="mt-1 text-[0.68rem] text-muted">
                  {dict.app.dashboard.quickDescription}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                const content = (
                  <>
                    <span className="grid size-8 place-items-center rounded-lg border border-line bg-paper text-accent transition-colors group-hover:border-accent/30">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="mt-2.5 block text-[0.72rem] font-medium text-ink">
                      {action.label}
                    </span>
                    <span className="mt-0.5 block text-[0.6rem] leading-snug text-muted">
                      {action.description}
                    </span>
                  </>
                );

                const className =
                  "group rounded-xl border border-line bg-paper/40 p-3 text-start transition-all hover:border-line-strong hover:bg-surface hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

                if (action.href) {
                  return (
                    <Link key={action.label} href={action.href} className={className}>
                      {content}
                    </Link>
                  );
                }
                return (
                  <button key={action.label} type="button" onClick={action.onClick} className={className}>
                    {content}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-[1.25rem] leading-tight text-ink">
                  {dict.app.dashboard.goalTitle}
                </h2>
                <p className="mt-2 font-display text-[2rem] leading-none text-ink">
                  {dict.app.dashboard.goalValue}
                </p>
                <p className="mt-1.5 text-[0.62rem] leading-relaxed text-muted">
                  {dict.app.dashboard.goalCaption}
                </p>
              </div>
              <div className="relative grid size-14 shrink-0 place-items-center">
                <svg viewBox="0 0 44 44" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="var(--line)" strokeWidth="4" />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="113"
                    strokeDashoffset="42"
                  />
                </svg>
                <span className="text-[0.62rem] font-semibold text-ink">63%</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
