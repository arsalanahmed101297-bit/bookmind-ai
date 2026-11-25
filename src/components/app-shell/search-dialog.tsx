"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CornerDownLeft,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  StickyNote,
  Upload,
  UserRound,
  Library,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Modal } from "@/components/ui/modal";
import { sampleBooks } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

type ResultItem = {
  id: string;
  label: string;
  meta?: string;
  icon: LucideIcon;
  swatch?: string;
  run: () => void;
};

export function SearchDialog({
  open,
  onClose,
  onUpload,
}: {
  open: boolean;
  onClose: () => void;
  onUpload: () => void;
}) {
  const { dict } = useI18n();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(timer);
  }, []);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const actions: ResultItem[] = useMemo(
    () => [
      {
        id: "upload",
        label: dict.app.common.uploadPdf,
        meta: dict.app.upload.previewTag,
        icon: Upload,
        run: onUpload,
      },
      {
        id: "assistant",
        label: dict.app.common.askAssistant,
        icon: Sparkles,
        run: () => go("/assistant"),
      },
      {
        id: "dashboard",
        label: dict.nav.dashboard,
        icon: LayoutDashboard,
        run: () => go("/dashboard"),
      },
      {
        id: "library",
        label: dict.app.library.title,
        icon: Library,
        run: () => go("/library"),
      },
      {
        id: "notes",
        label: dict.app.notes.title,
        icon: StickyNote,
        run: () => go("/notes"),
      },
      {
        id: "settings",
        label: dict.app.settings.title,
        icon: Settings,
        run: () => go("/settings"),
      },
      {
        id: "profile",
        label: dict.app.profile.title,
        icon: UserRound,
        run: () => go("/profile"),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dict, onUpload],
  );

  const normalized = query.trim().toLowerCase();

  const books: ResultItem[] = useMemo(
    () =>
      sampleBooks
        .filter((book) => {
          if (!normalized) return true;
          return (
            book.title.toLowerCase().includes(normalized) ||
            book.author.toLowerCase().includes(normalized) ||
            dict.app.categories[book.category].toLowerCase().includes(normalized)
          );
        })
        .map((book) => ({
          id: book.id,
          label: book.title,
          meta: `${book.author} · ${dict.app.categories[book.category]}`,
          icon: BookOpen,
          swatch: book.cover.background,
          run: () => go(`/library/${book.id}`),
        })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [normalized, dict],
  );

  const filteredActions = actions.filter(
    (action) => !normalized || action.label.toLowerCase().includes(normalized),
  );

  const flat = [...books, ...filteredActions];

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((current) => Math.min(current + 1, Math.max(flat.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((current) => Math.max(current - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      flat[active]?.run();
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={dict.app.search.title}
      closeLabel={dict.common.close}
      className="max-w-xl"
    >
      <div className="relative -mx-1 -mt-2">
        <Search
          className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          placeholder={dict.app.search.placeholder}
          aria-label={dict.app.search.title}
          className="h-12 w-full rounded-xl border border-line bg-surface-strong ps-11 pe-4 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div className="mt-4 max-h-[50vh] space-y-5 overflow-y-auto pe-1">
        {books.length > 0 ? (
          <div>
            <p className="px-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {dict.app.search.books}
            </p>
            <ul className="mt-2 space-y-0.5">
              {books.map((book, index) => (
                <li key={book.id}>
                  <button
                    type="button"
                    onClick={book.run}
                    onMouseEnter={() => setActive(index)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-start transition-colors",
                      active === index ? "bg-accent-soft/70" : "hover:bg-ink/[0.035]",
                    )}
                  >
                    <span
                      className="h-9 w-7 shrink-0 rounded-[2px] rounded-e-md shadow-sm"
                      style={{ backgroundColor: book.swatch }}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.84rem] font-medium text-ink">
                        {book.label}
                      </span>
                      <span className="block truncate text-[0.68rem] text-muted">{book.meta}</span>
                    </span>
                    <ArrowRight className="size-3.5 shrink-0 text-muted rtl:rotate-180" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {filteredActions.length > 0 ? (
          <div>
            <p className="px-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {dict.app.search.actions}
            </p>
            <ul className="mt-2 space-y-0.5">
              {filteredActions.map((action, index) => {
                const flatIndex = books.length + index;
                const Icon = action.icon;
                return (
                  <li key={action.id}>
                    <button
                      type="button"
                      onClick={action.run}
                      onMouseEnter={() => setActive(flatIndex)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-start transition-colors",
                        active === flatIndex ? "bg-accent-soft/70" : "hover:bg-ink/[0.035]",
                      )}
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-surface text-muted">
                        <Icon className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="flex-1 text-[0.82rem] font-medium text-ink">
                        {action.label}
                      </span>
                      {action.meta ? (
                        <span className="rounded-full border border-line px-2 py-0.5 text-[0.58rem] text-muted">
                          {action.meta}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {flat.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-sm text-muted">{dict.app.search.empty}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[0.6rem] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <CornerDownLeft className="size-3" aria-hidden="true" />
          Enter
        </span>
        <span>{dict.app.search.hint}</span>
      </div>
    </Modal>
  );
}
