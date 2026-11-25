"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Info,
  LockKeyhole,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";

import { PageHeader } from "@/components/app-shell/page-header";
import { BookCover } from "@/components/library/book-cover";
import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { readingSettingsStore } from "@/lib/local-store";
import { getSampleBook, sampleBooks } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: number;
  role: "user" | "preview";
  text: string;
};

export function AssistantView({
  initialBookId,
}: {
  initialBookId?: string;
}) {
  const { dict } = useI18n();
  const [bookId, setBookId] = useState(
    initialBookId && getSampleBook(initialBookId) ? initialBookId : "",
  );
  const settings = useSyncExternalStore(
    readingSettingsStore.subscribe,
    readingSettingsStore.getSnapshot,
    readingSettingsStore.getServerSnapshot,
  );
  const answerLanguage = settings.answerLanguage;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const counter = useRef(0);

  const book = getSampleBook(bookId);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function setLanguage(next: "en" | "ur") {
    readingSettingsStore.set({ ...settings, answerLanguage: next });
  }

  function send(question?: string) {
    const text = (question ?? input).trim();
    if (!text || !book) return;
    counter.current += 1;
    const userId = counter.current;
    counter.current += 1;
    const replyId = counter.current;
    setMessages((current) => [
      ...current,
      { id: userId, role: "user", text },
      { id: replyId, role: "preview", text: dict.app.assistant.disclaimer },
    ]);
    setInput("");
  }

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.workspace} · ${dict.app.common.previewChip}`}
        title={dict.app.assistant.title}
        description={dict.app.assistant.subtitle}
      >
        <Badge variant="outline" className="h-7 gap-1.5 px-3">
          <span className="size-1.5 rounded-full bg-muted" aria-hidden="true" />
          {dict.app.assistant.statusChip}
        </Badge>
      </PageHeader>

      <div className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-start">
        <section className="flex h-[calc(100vh-15rem)] min-h-[32rem] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
          <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              {book ? (
                <div className="w-8 shrink-0">
                  <BookCover book={book} size="sm" />
                </div>
              ) : (
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-paper text-muted">
                  <BookOpen className="size-4" aria-hidden="true" />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="assistant-book"
                  className="block text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-muted"
                >
                  {dict.app.assistant.bookLabel}
                </label>
                <select
                  id="assistant-book"
                  value={bookId}
                  onChange={(event) => {
                    setBookId(event.target.value);
                    setMessages([]);
                    setInput("");
                  }}
                  className="mt-0.5 w-full max-w-[18rem] cursor-pointer truncate border-0 bg-transparent p-0 text-[0.82rem] font-medium text-ink focus:outline-none focus:ring-0"
                >
                  <option value="">{dict.app.assistant.noBook}</option>
                  {sampleBooks.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="flex items-center gap-0.5 rounded-full border border-line bg-paper p-0.5"
              role="group"
              aria-label={dict.app.assistant.answerLang}
            >
              {(["en", "ur"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={answerLanguage === code}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[0.62rem] font-medium transition-colors",
                    answerLanguage === code
                      ? "bg-surface-strong text-ink shadow-sm"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {code === "en"
                    ? dict.app.assistant.english
                    : dict.app.assistant.urdu}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setMessages([]);
                setToast(dict.app.assistant.conversationCleared);
              }}
              className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-2.5 text-[0.62rem] font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <Trash2 className="size-3" aria-hidden="true" />
              <span className="hidden sm:inline">
                {dict.app.assistant.newConversation}
              </span>
            </button>
          </div>

          <div className="scroll-slim min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
            {!book ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="grid size-14 place-items-center rounded-2xl border border-accent/25 bg-accent-soft/50 text-accent-ink">
                  <Sparkles className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-[1.5rem] leading-tight text-ink">
                  {dict.app.assistant.emptyTitle}
                </h2>
                <p className="mt-2 max-w-sm text-[0.8rem] leading-relaxed text-muted">
                  {dict.app.assistant.emptyDescription}
                </p>
                <ButtonLink href="/library" variant="secondary" size="sm" className="mt-5">
                  {dict.app.common.openLibrary}
                  <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
                </ButtonLink>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="grid size-12 place-items-center rounded-2xl border border-accent/25 bg-accent-soft/40 text-accent-ink">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-3.5 font-display text-[1.4rem] leading-tight text-ink">
                  {dict.app.assistant.selectedBook}: {book.title}
                </h2>
                <p className="mt-1.5 max-w-sm text-[0.76rem] leading-relaxed text-muted">
                  {dict.app.assistant.startPrompt}
                </p>

                <div className="mt-5 flex max-w-lg flex-wrap justify-center gap-2">
                  {dict.app.assistant.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => {
                        setInput(suggestion);
                        inputRef.current?.focus();
                      }}
                      className="rounded-full border border-line bg-paper/60 px-3 py-1.5 text-[0.68rem] text-ink-soft transition-colors hover:border-accent/30 hover:bg-surface"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {messages.map((message) =>
                  message.role === "user" ? (
                    <div key={message.id} className="flex justify-end gap-2.5">
                      <div className="max-w-[80%] rounded-2xl rounded-ee-md bg-primary px-4 py-3 text-[0.8rem] leading-relaxed text-primary-fg">
                        {message.text}
                      </div>
                      <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-ink/[0.06] text-[0.55rem] font-semibold uppercase text-muted">
                        {dict.app.assistant.you.slice(0, 1)}
                      </span>
                    </div>
                  ) : (
                    <div key={message.id} className="flex gap-2.5">
                      <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
                        <Sparkles className="size-3.5" aria-hidden="true" />
                      </span>
                      <div className="max-w-[80%] rounded-2xl rounded-ss-md border border-accent/25 bg-accent-soft/35 px-4 py-3">
                        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-accent-ink">
                          {dict.app.assistant.model}
                        </p>
                        <p className="mt-1 text-[0.78rem] leading-relaxed text-ink-soft/85">
                          {message.text}
                        </p>
                        <p className="mt-2 border-t border-accent/20 pt-2 text-[0.6rem] text-muted">
                          {dict.app.reader.sourceNote}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
            className="border-t border-line p-3 sm:p-4"
          >
            <div className="rounded-2xl border border-line bg-paper/60 p-2 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send();
                  }
                }}
                rows={2}
                disabled={!book}
                placeholder={dict.app.assistant.composerPlaceholder}
                aria-label={dict.app.assistant.composerPlaceholder}
                className="w-full resize-none bg-transparent px-1.5 py-1 text-[0.8rem] leading-relaxed text-ink placeholder:text-muted/70 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              />
              <div className="flex items-center justify-between gap-2 px-1 pt-1">
                <span className="inline-flex items-center gap-1.5 text-[0.56rem] text-muted">
                  <LockKeyhole className="size-3" aria-hidden="true" />
                  {dict.app.assistant.statusChip}
                </span>
                <button
                  type="submit"
                  disabled={!book || !input.trim()}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-3.5 text-[0.68rem] font-medium text-primary-fg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {dict.app.reader.send}
                  <Send className="size-3.5 rtl:rotate-180" aria-hidden="true" />
                </button>
              </div>
            </div>
            <p className="mt-2 px-1 text-[0.58rem] leading-relaxed text-muted">
              {dict.app.assistant.disclaimer}
            </p>
          </form>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-24">
          <section className="rounded-2xl border border-line bg-surface p-4">
            <h2 className="font-display text-[1.2rem] text-ink">
              {dict.app.assistant.infoTitle}
            </h2>
            <p className="mt-1.5 text-[0.72rem] leading-relaxed text-muted">
              {dict.app.assistant.infoText}
            </p>
            <ol className="mt-4 space-y-3">
              {dict.app.assistant.steps.map((step, index) => (
                <li key={step.title} className="flex gap-2.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent-soft/40 text-[0.6rem] font-semibold tabular-nums text-accent-ink">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[0.74rem] font-semibold text-ink">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-[0.66rem] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {book ? (
            <section className="rounded-2xl border border-line bg-surface p-4">
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-muted">
                {dict.app.assistant.selectedBook}
              </p>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-9 shrink-0">
                  <BookCover book={book} size="sm" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-[0.96rem] text-ink">
                    {book.title}
                  </p>
                  <p className="truncate text-[0.62rem] text-muted">
                    {book.author}
                  </p>
                </div>
              </div>
              <Link
                href={`/library/${book.id}`}
                className="mt-3 inline-flex items-center gap-1 text-[0.64rem] font-medium text-accent hover:underline"
              >
                {dict.app.common.viewDetails}
                <ArrowRight className="size-3 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </section>
          ) : null}

          <div className="flex items-start gap-2.5 rounded-2xl border border-line bg-paper-deep/40 p-4">
            <Info className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-[0.66rem] leading-relaxed text-muted">
              {dict.privacy.pledgeText}
            </p>
          </div>
        </aside>
      </div>

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
