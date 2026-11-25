"use client";

import { useMemo, useState } from "react";
import {
  Info,
  LibraryBig,
  Search,
  SlidersHorizontal,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

import { PageHeader } from "@/components/app-shell/page-header";
import { useWorkspaceUi } from "@/components/app-shell/workspace-ui";
import { BookCard } from "@/components/library/book-card";
import { useI18n } from "@/components/providers/locale-provider";
import { Button, ButtonLink } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { sampleBooks, type BookStatus } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

type Filter = "all" | BookStatus;
type Sort = "recent" | "title" | "progress";

export function LibraryView() {
  const { dict } = useI18n();
  const { openUpload } = useWorkspaceUi();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("recent");

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: dict.app.library.filterAll, count: sampleBooks.length },
    {
      id: "reading",
      label: dict.app.library.filterReading,
      count: sampleBooks.filter((book) => book.status === "reading").length,
    },
    {
      id: "finished",
      label: dict.app.library.filterFinished,
      count: sampleBooks.filter((book) => book.status === "finished").length,
    },
    {
      id: "unread",
      label: dict.app.library.filterUnread,
      count: sampleBooks.filter((book) => book.status === "unread").length,
    },
  ];

  const books = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = sampleBooks.filter((book) => {
      const matchesFilter = filter === "all" || book.status === filter;
      const matchesQuery =
        normalized.length === 0 ||
        book.title.toLowerCase().includes(normalized) ||
        book.author.toLowerCase().includes(normalized) ||
        dict.app.categories[book.category].toLowerCase().includes(normalized);
      return matchesFilter && matchesQuery;
    });

    if (sort === "title") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sort === "progress") {
      return [...filtered].sort((a, b) => b.progress - a.progress);
    }
    return filtered;
  }, [dict, filter, query, sort]);

  const hasFilters = query.trim().length > 0 || filter !== "all";

  function clearFilters() {
    setQuery("");
    setFilter("all");
  }

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.workspace} · ${dict.app.common.sampleData}`}
        title={dict.app.library.title}
        description={dict.app.library.subtitle}
      >
        <Button variant="secondary" size="sm" onClick={openUpload}>
          <Upload className="size-3.5" aria-hidden="true" />
          {dict.app.library.uploadPdf}
        </Button>
        <ButtonLink href="/assistant" size="sm">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {dict.app.common.askAssistant}
        </ButtonLink>
      </PageHeader>

      <div className="mt-7 rounded-2xl border border-line bg-surface p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={dict.app.library.searchPlaceholder}
              aria-label={dict.app.library.searchPlaceholder}
              className="ps-10 pe-10"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={dict.common.close}
                className="absolute end-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              className="flex flex-wrap items-center gap-1 rounded-full border border-line bg-paper/60 p-1"
              role="group"
              aria-label={dict.app.library.filterLabel}
            >
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[0.72rem] font-medium transition-colors",
                    filter === item.id
                      ? "bg-surface-strong text-ink shadow-sm"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  <span className="tabular-nums text-[0.6rem] opacity-60">
                    {item.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative">
              <SlidersHorizontal
                className="pointer-events-none absolute start-3 top-1/2 size-3.5 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <Select
                value={sort}
                onChange={(event) => setSort(event.target.value as Sort)}
                aria-label={dict.app.library.sortLabel}
                className="h-9 w-[11.5rem] ps-8 text-[0.72rem]"
              >
                <option value="recent">{dict.app.library.sortRecent}</option>
                <option value="title">{dict.app.library.sortTitle}</option>
                <option value="progress">{dict.app.library.sortProgress}</option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-[0.72rem] font-medium text-muted">
          <LibraryBig className="size-3.5 text-accent" aria-hidden="true" />
          <span className="tabular-nums text-ink">{books.length}</span>{" "}
          {books.length === 1
            ? dict.app.library.bookCountOne
            : dict.app.library.bookCount}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-accent hover:underline"
          >
            <X className="size-3" aria-hidden="true" />
            {dict.app.library.clearFilters}
          </button>
        ) : null}
      </div>

      {books.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface/50 px-6 py-14 text-center">
          <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface text-accent shadow-sm">
            <LibraryBig className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-[1.4rem] text-ink">
            {dict.app.library.emptyTitle}
          </h2>
          <p className="mt-2 max-w-sm text-[0.82rem] leading-relaxed text-muted">
            {dict.app.library.emptyDescription}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button variant="secondary" size="sm" onClick={clearFilters}>
              {dict.app.library.clearFilters}
            </Button>
            <Button size="sm" onClick={openUpload}>
              <Upload className="size-3.5" aria-hidden="true" />
              {dict.app.library.uploadPdf}
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-paper-deep/40 p-4">
        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
          <Info className="size-3.5" aria-hidden="true" />
        </span>
        <p className="text-[0.7rem] leading-relaxed text-muted">
          {dict.app.library.libraryNote}
        </p>
      </div>
    </div>
  );
}
