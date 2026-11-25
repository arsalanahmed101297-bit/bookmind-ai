"use client";

import Link from "next/link";

import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { BookCover } from "./book-cover";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { SampleBook } from "@/lib/sample-data";
import { formatNumber, cn } from "@/lib/utils";

export function BookCard({ book, className }: { book: SampleBook; className?: string }) {
  const { dict } = useI18n();

  return (
    <Link
      href={`/library/${book.id}`}
      className={cn(
        "group flex flex-col rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper",
        className,
      )}
    >
      <div className="relative">
        <div className="overflow-hidden rounded-e-lg shadow-card transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[0.65deg] group-hover:shadow-lift">
          <BookCover book={book} />
        </div>
        <Badge
          variant="outline"
          className="absolute end-3 top-3 border-white/25 bg-black/25 text-white backdrop-blur-md"
        >
          {book.isOfficial ? dict.official.badge : dict.common.sample}
        </Badge>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.22rem] leading-tight text-ink transition-colors group-hover:text-accent-ink">
            {book.title}
          </h3>
          <span
            className={cn(
              "mt-1 shrink-0 rounded-full px-2 py-0.5 text-[0.62rem] font-semibold tracking-[0.06em] uppercase",
              book.status === "reading" && "bg-accent-soft text-accent-ink",
              book.status === "finished" && "bg-forest/10 text-forest dark:bg-accent/15 dark:text-accent",
              book.status === "unread" && "bg-ink/[0.06] text-muted",
            )}
          >
            {dict.app.status[book.status]}
          </span>
        </div>
        <p className="mt-1 text-[0.76rem] text-muted">
          {book.author} · {book.published}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between gap-3 text-[0.68rem] text-muted">
            <span>{dict.app.categories[book.category]}</span>
            <span>
              {formatNumber(book.pages)}{" "}
              {(book.isOfficial
                ? dict.official.documentsUnit
                : dict.app.book.pagesLabel
              ).toLowerCase()}
            </span>
          </div>
          {book.status !== "unread" ? (
            <div className="mt-2 flex items-center gap-2.5">
              <ProgressBar
                value={book.progress}
                tone={book.status === "finished" ? "forest" : "accent"}
                label={dict.app.book.progressTitle}
              />
              <span className="w-8 shrink-0 text-end text-[0.66rem] font-medium tabular-nums text-muted">
                {book.progress}%
              </span>
            </div>
          ) : (
            <div className="mt-2 flex items-center gap-1.5 text-[0.68rem] font-medium text-accent-ink">
              <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
              {dict.app.library.openSample}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function BookCoverLink({
  book,
  className,
}: {
  book: SampleBook;
  className?: string;
}) {
  return (
    <Link
      href={`/library/${book.id}`}
      className={cn("block rounded-e-lg transition-transform duration-500 hover:-translate-y-1", className)}
      aria-label={book.title}
    >
      <BookCover book={book} size="sm" />
    </Link>
  );
}

export function AssistantBookContext({ book }: { book: SampleBook }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
      <div className="w-10 shrink-0">
        <BookCover book={book} size="sm" />
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-base text-ink">{book.title}</p>
        <p className="truncate text-[0.7rem] text-muted">{book.author}</p>
      </div>
    </div>
  );
}
