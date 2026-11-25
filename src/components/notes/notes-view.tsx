"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Highlighter,
  Info,
  NotebookPen,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";

import { PageHeader } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import {
  annotationsStore,
  createId,
  isRelativeTime,
  nowIso,
  type StoredAnnotation,
} from "@/lib/local-store";
import {
  getSampleBook,
  sampleBooks,
  type AnnotationKind,
} from "@/lib/sample-data";
import { cn, formatNumber } from "@/lib/utils";

const tabs: { id: AnnotationKind; labelKey: "notes" | "highlights" | "bookmarks"; icon: typeof NotebookPen }[] = [
  { id: "note", labelKey: "notes", icon: NotebookPen },
  { id: "highlight", labelKey: "highlights", icon: Highlighter },
  { id: "bookmark", labelKey: "bookmarks", icon: Bookmark },
];

const kindLabels: Record<AnnotationKind, "highlightLabel" | "bookmarkLabel"> = {
  note: "highlightLabel",
  highlight: "highlightLabel",
  bookmark: "bookmarkLabel",
};

export function NotesView() {
  const { dict, locale } = useI18n();
  const annotations = useSyncExternalStore(
    annotationsStore.subscribe,
    annotationsStore.getSnapshot,
    annotationsStore.getServerSnapshot,
  );
  const [tab, setTab] = useState<AnnotationKind>("note");
  const [bookFilter, setBookFilter] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [form, setForm] = useState({
    bookId: sampleBooks[0].id,
    page: "1",
    quote: "",
    body: "",
  });
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const counts = useMemo(
    () => ({
      note: annotations.filter((item) => item.kind === "note").length,
      highlight: annotations.filter((item) => item.kind === "highlight").length,
      bookmark: annotations.filter((item) => item.kind === "bookmark").length,
    }),
    [annotations],
  );

  const visible = annotations.filter(
    (annotation) =>
      annotation.kind === tab &&
      (bookFilter === "all" || annotation.bookId === bookFilter),
  );

  function persist(next: StoredAnnotation[]) {
    annotationsStore.set(next);
  }

  function remove(id: string) {
    persist(annotations.filter((annotation) => annotation.id !== id));
    setConfirmId(null);
  }

  function submitNote() {
    if (!form.body.trim()) {
      setFormError(dict.app.notes.noteRequired);
      return;
    }
    const page = Number.parseInt(form.page, 10);
    const next: StoredAnnotation = {
      id: createId("note"),
      kind: "note",
      bookId: form.bookId,
      page: Number.isFinite(page) && page > 0 ? page : 1,
      quote: form.quote.trim() || undefined,
      body: form.body.trim(),
      createdAt: nowIso(),
    };
    persist([next, ...annotations]);
    setDialogOpen(false);
    setForm({
      bookId: form.bookId,
      page: "1",
      quote: "",
      body: "",
    });
    setFormError(null);
    setTab("note");
    setBookFilter("all");
    setToast(dict.app.notes.added);
  }

  function formatTime(value: string) {
    if (isRelativeTime(value)) return dict.app.time[value];
    try {
      return new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(value));
    } catch {
      return dict.app.notes.updated;
    }
  }

  function readerHref(annotation: StoredAnnotation) {
    const book = getSampleBook(annotation.bookId);
    if (!book) return "/library";
    return book.hasReaderPreview
      ? `/reader/${book.id}?page=${annotation.page}`
      : `/library/${book.id}`;
  }

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.workspace} · ${dict.app.common.previewChip}`}
        title={dict.app.notes.title}
        description={dict.app.notes.subtitle}
      >
        <ButtonLink href="/assistant" variant="secondary" size="sm">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {dict.app.common.askAssistant}
        </ButtonLink>
        <Button size="sm" onClick={() => setDialogOpen(true)}>
          <Plus className="size-3.5" aria-hidden="true" />
          {dict.app.notes.newNote}
        </Button>
      </PageHeader>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <div
          className="flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface p-1"
          role="tablist"
          aria-label={dict.app.notes.title}
        >
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => {
                  setTab(item.id);
                  setConfirmId(null);
                }}
                className={cn(
                  "inline-flex h-8 items-center gap-1.5 rounded-full px-3.5 text-[0.72rem] font-medium transition-colors",
                  tab === item.id
                    ? "bg-accent-soft text-accent-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                <Icon className="size-3.5" aria-hidden="true" />
                {dict.app.notes.tabs[item.labelKey]}
                <span className="tabular-nums text-[0.6rem] opacity-60">
                  {counts[item.id]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="notes-book-filter"
            className="text-[0.66rem] font-medium text-muted"
          >
            {dict.app.notes.filterBook}
          </label>
          <Select
            id="notes-book-filter"
            value={bookFilter}
            onChange={(event) => setBookFilter(event.target.value)}
            className="h-9 w-[13rem] text-[0.72rem]"
          >
            <option value="all">{dict.app.notes.allBooks}</option>
            {sampleBooks.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {visible.map((annotation) => {
            const book = getSampleBook(annotation.bookId);
            const kindLabel =
              annotation.kind === "note"
                ? dict.app.notes.tabs.notes
                : dict.app.notes[kindLabels[annotation.kind]];

            return (
              <li
                key={annotation.id}
                className="flex flex-col rounded-2xl border border-line bg-surface p-4 shadow-[0_1px_2px_rgba(22,35,28,0.03)] sm:p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-accent">
                    {annotation.kind === "bookmark" ? (
                      <Bookmark className="size-3" aria-hidden="true" />
                    ) : annotation.kind === "highlight" ? (
                      <Highlighter className="size-3" aria-hidden="true" />
                    ) : (
                      <NotebookPen className="size-3" aria-hidden="true" />
                    )}
                    {kindLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {annotation.sample ? (
                      <span className="rounded-full border border-line px-2 py-0.5 text-[0.54rem] font-medium text-muted">
                        {dict.app.notes.sampleChip}
                      </span>
                    ) : null}
                    {confirmId === annotation.id ? (
                      <span className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => remove(annotation.id)}
                          className="rounded-full bg-danger/10 px-2 py-1 text-[0.56rem] font-medium text-danger hover:bg-danger/15"
                        >
                          {dict.app.notes.delete}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmId(null)}
                          className="rounded-full px-2 py-1 text-[0.56rem] font-medium text-muted hover:text-ink"
                        >
                          {dict.common.cancel}
                        </button>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmId(annotation.id)}
                        aria-label={dict.app.notes.delete}
                        className="grid size-7 place-items-center rounded-full text-muted transition-colors hover:bg-danger/10 hover:text-danger"
                      >
                        <Trash2 className="size-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>

                {annotation.quote ? (
                  <blockquote
                    className={cn(
                      "mt-3 border-s-2 border-accent/40 ps-3 text-[0.82rem] leading-relaxed text-ink-soft/85",
                      annotation.kind === "highlight" &&
                        "rounded-sm bg-highlight/40 py-1.5 font-display text-[0.94rem]",
                    )}
                  >
                    “{annotation.quote}”
                  </blockquote>
                ) : null}

                {annotation.body ? (
                  <p className="mt-2.5 text-[0.8rem] leading-[1.8] text-ink-soft/85">
                    {annotation.body}
                  </p>
                ) : null}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
                  <div className="min-w-0">
                    <p className="truncate text-[0.7rem] font-medium text-ink">
                      {book?.title ?? dict.app.notes.bookLabel}
                    </p>
                    <p className="mt-0.5 text-[0.6rem] text-muted">
                      {dict.app.notes.pageLabel} {annotation.page} ·{" "}
                      {formatTime(annotation.createdAt)}
                    </p>
                  </div>
                  <Link
                    href={readerHref(annotation)}
                    className="group inline-flex items-center gap-1 text-[0.64rem] font-medium text-accent hover:underline"
                  >
                    {dict.app.common.openReader}
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface/50 px-6 py-14 text-center">
          <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface text-accent shadow-sm">
            {tab === "note" ? (
              <NotebookPen className="size-5" aria-hidden="true" />
            ) : tab === "highlight" ? (
              <Highlighter className="size-5" aria-hidden="true" />
            ) : (
              <Bookmark className="size-5" aria-hidden="true" />
            )}
          </span>
          <h2 className="mt-4 font-display text-[1.4rem] text-ink">
            {dict.app.notes.emptyTitle}
          </h2>
          <p className="mt-2 max-w-sm text-[0.82rem] leading-relaxed text-muted">
            {tab === "highlight"
              ? dict.app.notes.highlightsEmpty
              : tab === "bookmark"
                ? dict.app.notes.bookmarksEmpty
                : dict.app.notes.emptyDescription}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => setDialogOpen(true)}>
              <Plus className="size-3.5" aria-hidden="true" />
              {dict.app.notes.newNote}
            </Button>
            <ButtonLink href="/library" size="sm">
              {dict.app.common.openLibrary}
              <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      )}

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-paper-deep/40 p-4">
        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
          <Info className="size-3.5" aria-hidden="true" />
        </span>
        <p className="text-[0.7rem] leading-relaxed text-muted">
          {dict.app.notes.previewNote}
        </p>
      </div>

      <Modal
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setFormError(null);
        }}
        title={dict.app.notes.noteDialogTitle}
        description={dict.app.notes.previewNote}
        closeLabel={dict.common.close}
      >
        <div className="space-y-4">
          <Field label={dict.app.notes.bookLabel} htmlFor="note-book">
            <Select
              id="note-book"
              value={form.bookId}
              onChange={(event) =>
                setForm((current) => ({ ...current, bookId: event.target.value }))
              }
            >
              {sampleBooks.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title}
                </option>
              ))}
            </Select>
          </Field>

          <Field label={dict.app.notes.pageLabel} htmlFor="note-page">
            <Input
              id="note-page"
              type="number"
              min={1}
              max={9999}
              value={form.page}
              onChange={(event) =>
                setForm((current) => ({ ...current, page: event.target.value }))
              }
            />
          </Field>

          <Field
            label={dict.app.notes.quoteLabel}
            htmlFor="note-quote"
            optional={dict.common.optional}
          >
            <Textarea
              id="note-quote"
              value={form.quote}
              onChange={(event) =>
                setForm((current) => ({ ...current, quote: event.target.value }))
              }
              placeholder={dict.app.notes.notePlaceholder}
              className="min-h-20"
            />
          </Field>

          <Field
            label={dict.app.notes.noteLabel}
            htmlFor="note-body"
            error={formError ?? undefined}
          >
            <Textarea
              id="note-body"
              value={form.body}
              onChange={(event) => {
                setForm((current) => ({ ...current, body: event.target.value }));
                if (formError) setFormError(null);
              }}
              placeholder={dict.app.notes.notePlaceholder}
              aria-invalid={formError ? true : undefined}
            />
          </Field>

          <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
            <span className="text-[0.6rem] text-muted">
              {formatNumber(annotations.length)} {dict.app.notes.tabs.notes}
            </span>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setDialogOpen(false)}
              >
                {dict.common.cancel}
              </Button>
              <Button type="button" size="sm" onClick={submitNote}>
                {dict.app.notes.saveNote}
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
          <div
            role="status"
            className="rounded-full border border-line bg-surface px-4 py-2.5 text-[0.72rem] font-medium text-ink shadow-lift"
          >
            {toast}
          </div>
        </div>
      ) : null}
    </div>
  );
}
