"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Highlighter,
  Info,
  Minus,
  NotebookPen,
  Plus,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { BookCover } from "@/components/library/book-cover";
import { useI18n } from "@/components/providers/locale-provider";
import { ReaderAssistant } from "@/components/reader/reader-assistant";
import {
  HighlightedText,
  countMatches,
} from "@/components/reader/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  annotationsStore,
  createId,
  nowIso,
  type StoredAnnotation,
} from "@/lib/local-store";
import {
  getSampleBook,
  readerSample,
  type SampleBook,
} from "@/lib/sample-data";
import { clamp, cn, formatNumber } from "@/lib/utils";

const kindIcons = {
  note: NotebookPen,
  highlight: Highlighter,
  bookmark: Bookmark,
};

export function ReaderView({
  initialPage = 1,
  book,
}: {
  initialPage?: number;
  book: SampleBook;
}) {
  const { dict } = useI18n();
  const totalPages = readerSample.pages.length;
  const [pageIndex, setPageIndex] = useState(
    clamp(initialPage - 1, 0, totalPages - 1),
  );
  const [zoom, setZoom] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const annotations = useSyncExternalStore(
    annotationsStore.subscribe,
    annotationsStore.getSnapshot,
    annotationsStore.getServerSnapshot,
  );

  const page = readerSample.pages[pageIndex];
  const pageNumber = pageIndex + 1;

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!assistantOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAssistantOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [assistantOpen]);

  const matches = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return page.paragraphs.reduce(
      (total, paragraph) => total + countMatches(paragraph, searchQuery),
      0,
    );
  }, [page, searchQuery]);

  const isBookmarked = annotations.some(
    (annotation) =>
      annotation.kind === "bookmark" &&
      annotation.bookId === book.id &&
      annotation.page === pageNumber,
  );

  const pageAnnotations = annotations.filter(
    (annotation) =>
      annotation.bookId === book.id && annotation.page === pageNumber,
  );

  function persist(next: StoredAnnotation[]) {
    annotationsStore.set(next);
  }

  function toggleBookmark() {
    if (isBookmarked) {
      persist(
        annotations.filter(
          (annotation) =>
            !(
              annotation.kind === "bookmark" &&
              annotation.bookId === book.id &&
              annotation.page === pageNumber
            ),
        ),
      );
      setToast(dict.app.reader.removeBookmark);
      return;
    }

    persist([
      {
        id: createId("bookmark"),
        kind: "bookmark",
        bookId: book.id,
        page: pageNumber,
        createdAt: nowIso(),
      },
      ...annotations,
    ]);
    setToast(dict.app.reader.bookmarkAdded);
  }

  function saveHighlight() {
    if (!selectedText) {
      setToast(dict.app.reader.selectTextFirst);
      return;
    }
    persist([
      {
        id: createId("highlight"),
        kind: "highlight",
        bookId: book.id,
        page: pageNumber,
        quote: selectedText,
        createdAt: nowIso(),
      },
      ...annotations,
    ]);
    setSelectedText("");
    setToast(dict.app.reader.highlightSaved);
  }

  function goToPage(nextIndex: number) {
    const target = clamp(nextIndex, 0, totalPages - 1);
    setPageIndex(target);
    setSelectedText("");
    articleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function captureSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    if (!articleRef.current?.contains(selection.anchorNode)) return;
    const text = selection.toString().trim();
    if (text) setSelectedText(text);
  }

  function changeZoom(delta: number) {
    setZoom((current) => clamp(Number((current + delta).toFixed(2)), 0.82, 1.5));
  }

  const snippetBook = getSampleBook(book.id) ?? book;

  return (
    <div className="container-app py-6 sm:py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={`/library/${book.id}`}
          className="inline-flex items-center gap-2 text-[0.74rem] font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
          {dict.app.reader.backToLibrary}
        </Link>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft/40 px-2.5 py-1 text-[0.58rem] font-medium text-accent-ink">
          <Info className="size-3" aria-hidden="true" />
          {dict.app.reader.sampleNotice}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 shrink-0 sm:w-12">
          <BookCover book={book} size="sm" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-[1.35rem] leading-tight text-ink sm:text-[1.6rem]">
            {book.title}
          </h1>
          <p className="truncate text-[0.68rem] text-muted">
            {book.author} · {dict.app.reader.section}
          </p>
        </div>
        <Badge variant="outline" className="hidden sm:inline-flex">
          {dict.common.sample}
        </Badge>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
        <div className="min-w-0">
          <div className="rounded-2xl border border-line bg-surface p-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSearchOpen((value) => !value)}
                aria-pressed={searchOpen}
                className={cn(
                  "inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[0.7rem] font-medium transition-colors",
                  searchOpen
                    ? "bg-accent-soft text-accent-ink"
                    : "text-ink-soft hover:bg-ink/[0.05]",
                )}
              >
                <Search className="size-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">{dict.app.reader.search}</span>
              </button>

              <span className="mx-0.5 h-5 w-px bg-line" aria-hidden="true" />

              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  onClick={() => changeZoom(-0.06)}
                  aria-label={dict.app.reader.zoomOut}
                  className="grid size-8 place-items-center rounded-full text-ink-soft transition-colors hover:bg-ink/[0.05]"
                >
                  <Minus className="size-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom(1)}
                  aria-label={dict.app.reader.zoomReset}
                  title={dict.app.reader.zoomReset}
                  className="min-w-12 rounded-full px-1 text-[0.66rem] font-semibold tabular-nums text-ink transition-colors hover:bg-ink/[0.05]"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  onClick={() => changeZoom(0.06)}
                  aria-label={dict.app.reader.zoomIn}
                  className="grid size-8 place-items-center rounded-full text-ink-soft transition-colors hover:bg-ink/[0.05]"
                >
                  <Plus className="size-3.5" aria-hidden="true" />
                </button>
              </div>

              <span className="mx-0.5 h-5 w-px bg-line" aria-hidden="true" />

              <button
                type="button"
                onClick={toggleBookmark}
                aria-pressed={isBookmarked}
                aria-label={
                  isBookmarked
                    ? dict.app.reader.removeBookmark
                    : dict.app.reader.bookmark
                }
                className={cn(
                  "inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[0.7rem] font-medium transition-colors",
                  isBookmarked
                    ? "bg-accent-soft text-accent-ink"
                    : "text-ink-soft hover:bg-ink/[0.05]",
                )}
              >
                <Bookmark
                  className={cn("size-3.5", isBookmarked && "fill-current")}
                  aria-hidden="true"
                />
                <span className="hidden lg:inline">
                  {isBookmarked
                    ? dict.app.reader.bookmarked
                    : dict.app.reader.bookmark}
                </span>
              </button>

              <button
                type="button"
                onClick={saveHighlight}
                className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[0.7rem] font-medium text-ink-soft transition-colors hover:bg-ink/[0.05]"
              >
                <Highlighter className="size-3.5" aria-hidden="true" />
                <span className="hidden lg:inline">{dict.app.reader.highlight}</span>
              </button>

              <button
                type="button"
                onClick={() => setToast(dict.app.reader.listenSoon)}
                className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[0.7rem] font-medium text-ink-soft transition-colors hover:bg-ink/[0.05]"
              >
                <Headphones className="size-3.5" aria-hidden="true" />
                <span className="hidden lg:inline">{dict.app.reader.listen}</span>
              </button>

              <button
                type="button"
                onClick={() => setAssistantOpen(true)}
                className="ms-auto inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-3.5 text-[0.7rem] font-medium text-primary-fg transition-opacity hover:opacity-90 xl:hidden"
              >
                <Sparkles className="size-3.5" aria-hidden="true" />
                {dict.app.reader.assistant}
              </button>

              <span className="ms-auto hidden text-[0.64rem] tabular-nums text-muted xl:inline">
                {dict.app.reader.pageOf} {pageNumber} {dict.app.reader.of}{" "}
                {totalPages}
              </span>
            </div>

            {searchOpen ? (
              <div className="mt-2 border-t border-line pt-2.5">
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute start-3 top-1/2 size-3.5 -translate-y-1/2 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    autoFocus
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder={dict.app.reader.searchPlaceholder}
                    aria-label={dict.app.reader.search}
                    className="h-9 w-full rounded-xl border border-line bg-paper/60 ps-9 pe-20 text-[0.76rem] text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15"
                  />
                  <span className="pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 rounded-full bg-surface px-2 py-0.5 text-[0.58rem] font-medium text-muted">
                    {matches > 0
                      ? `${matches} ${dict.app.reader.matches}`
                      : searchQuery
                        ? dict.app.reader.noResults
                        : ""}
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <article
            ref={articleRef}
            dir="ltr"
            onMouseUp={captureSelection}
            onKeyUp={captureSelection}
            className="mt-4 rounded-3xl border border-line bg-surface px-5 py-8 shadow-card sm:px-10 sm:py-12 lg:px-16"
          >
            <div className="mx-auto max-w-[40rem]">
              <header className="border-b border-line pb-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-accent">
                  {dict.app.reader.section}
                </p>
                <h2 className="mt-2 font-display text-[1.8rem] leading-tight text-ink sm:text-[2.1rem]">
                  {dict.app.reader.chapter}
                </h2>
                <p className="mt-2 text-[0.64rem] text-muted">
                  {book.title} · {book.author}
                </p>
              </header>

              <div
                className="mt-7 space-y-5 font-display leading-[1.88] text-ink-soft/90"
                style={{ fontSize: `${(1.06 * zoom).toFixed(3)}rem` }}
              >
                {page.paragraphs.map((paragraph, index) => (
                  <p
                    key={`${page.number}-${index}`}
                    className={cn(
                      index === 0 &&
                        "first-letter:float-start first-letter:me-2 first-letter:mt-1 first-letter:font-display first-letter:text-[3.1em] first-letter:leading-[0.78] first-letter:text-accent",
                    )}
                  >
                    <HighlightedText text={paragraph} query={searchQuery} />
                  </p>
                ))}
              </div>

              <div className="mt-9 rounded-xl border border-line bg-paper/50 p-3.5">
                <p className="text-[0.66rem] leading-relaxed text-muted">
                  {dict.app.reader.originalLanguageNote}
                </p>
              </div>

              <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <p className="text-[0.62rem] text-muted">
                  {dict.app.reader.sampleNotice}
                </p>
                <p className="text-[0.62rem] text-muted">
                  {dict.app.reader.sourceNote}
                </p>
              </footer>
            </div>
          </article>

          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-surface p-3">
            <button
              type="button"
              onClick={() => goToPage(pageIndex - 1)}
              disabled={pageIndex === 0}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-[0.7rem] font-medium text-ink transition-colors hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              {dict.app.reader.previousPage}
            </button>

            <div className="min-w-[8rem] flex-1">
              <div className="flex items-center justify-between text-[0.58rem] text-muted">
                <span>{dict.app.reader.readingProgress}</span>
                <span className="tabular-nums">
                  {Math.round(((pageIndex + 1) / totalPages) * 100)}%
                </span>
              </div>
              <ProgressBar
                value={((pageIndex + 1) / totalPages) * 100}
                className="mt-1.5"
                label={dict.app.reader.readingProgress}
              />
            </div>

            <span className="text-[0.68rem] tabular-nums text-muted">
              {dict.app.reader.pageOf} {pageNumber} {dict.app.reader.of}{" "}
              {formatNumber(totalPages)}
            </span>

            <button
              type="button"
              onClick={() => goToPage(pageIndex + 1)}
              disabled={pageIndex === totalPages - 1}
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-3.5 text-[0.7rem] font-medium text-primary-fg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {dict.app.reader.nextPage}
              <ChevronRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
            </button>
          </div>

          <section className="mt-6 rounded-2xl border border-line bg-surface p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="inline-flex items-center gap-2 font-display text-[1.15rem] text-ink">
                <NotebookPen className="size-4 text-accent" aria-hidden="true" />
                {dict.app.reader.annotations}
              </h2>
              <span className="rounded-full border border-line px-2 py-0.5 text-[0.6rem] tabular-nums text-muted">
                {pageAnnotations.length}
              </span>
            </div>

            {pageAnnotations.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {pageAnnotations.map((annotation) => {
                  const Icon = kindIcons[annotation.kind];
                  return (
                    <li
                      key={annotation.id}
                      className="rounded-xl border border-line bg-paper/40 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-accent">
                          <Icon className="size-3" aria-hidden="true" />
                          {annotation.kind === "note"
                            ? dict.app.notes.tabs.notes
                            : annotation.kind === "highlight"
                              ? dict.app.notes.highlightLabel
                              : dict.app.notes.bookmarkLabel}
                        </span>
                        <span className="text-[0.58rem] text-muted">
                          {dict.app.notes.pageLabel} {annotation.page}
                        </span>
                      </div>
                      {annotation.quote ? (
                        <blockquote className="mt-1.5 border-s-2 border-accent/40 ps-2.5 text-[0.76rem] leading-relaxed text-ink-soft/80">
                          “{annotation.quote}”
                        </blockquote>
                      ) : null}
                      {annotation.body ? (
                        <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink-soft/75">
                          {annotation.body}
                        </p>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-2.5 text-[0.72rem] leading-relaxed text-muted">
                {dict.app.reader.annotationsEmpty}
              </p>
            )}

            {selectedText ? (
              <div className="mt-3 rounded-xl border border-accent/25 bg-accent-soft/40 p-3">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-accent-ink">
                  {dict.app.reader.highlight}
                </p>
                <p className="mt-1 line-clamp-3 text-[0.74rem] leading-relaxed text-ink-soft/80">
                  “{selectedText}”
                </p>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={saveHighlight}
                    className="rounded-full bg-primary px-3 py-1 text-[0.62rem] font-medium text-primary-fg"
                  >
                    {dict.app.reader.highlight}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedText("")}
                    className="rounded-full border border-line px-3 py-1 text-[0.62rem] font-medium text-muted hover:text-ink"
                  >
                    {dict.common.cancel}
                  </button>
                </div>
              </div>
            ) : null}
          </section>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-[5.5rem] h-[calc(100vh-7rem)]">
            <ReaderAssistant bookTitle={snippetBook.title} />
          </div>
        </aside>
      </div>

      {assistantOpen ? (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-forest-deep/50 backdrop-blur-sm"
            onClick={() => setAssistantOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={dict.app.reader.assistant}
            className="absolute inset-y-0 end-0 w-[min(23rem,92vw)] p-2"
          >
            <ReaderAssistant
              bookTitle={snippetBook.title}
              onClose={() => setAssistantOpen(false)}
            />
          </div>
        </div>
      ) : null}

      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
          <div
            role="status"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-[0.72rem] font-medium text-ink shadow-lift"
          >
            <Info className="size-3.5 text-accent" aria-hidden="true" />
            {toast}
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label={dict.common.close}
              className="ms-1 grid size-5 place-items-center rounded-full text-muted hover:bg-ink/5 hover:text-ink"
            >
              <X className="size-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
