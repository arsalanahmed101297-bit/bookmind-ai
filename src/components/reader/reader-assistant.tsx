"use client";

import { useRef, useState } from "react";
import { Info, Send, Sparkles, X } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  role: "user" | "preview";
  text: string;
};

export function ReaderAssistant({
  bookTitle,
  onClose,
}: {
  bookTitle: string;
  onClose?: () => void;
}) {
  const { dict } = useI18n();
  const [language, setLanguage] = useState<"en" | "ur">("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const counter = useRef(0);

  function submit() {
    const question = input.trim();
    if (!question) return;
    counter.current += 1;
    const userId = counter.current;
    counter.current += 1;
    const replyId = counter.current;
    setMessages((current) => [
      ...current,
      { id: userId, role: "user", text: question },
      { id: replyId, role: "preview", text: dict.app.reader.previewReply },
    ]);
    setInput("");
  }

  return (
    <div className="flex h-full min-h-0 flex-col rounded-3xl border border-line bg-surface shadow-card">
      <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-xl bg-accent/15 text-accent-ink">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[0.82rem] font-semibold text-ink">
              {dict.app.reader.assistant}
            </p>
            <p className="mt-0.5 text-[0.58rem] text-muted">
              {dict.app.reader.noAi}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="flex items-center gap-0.5 rounded-full border border-line bg-paper p-0.5"
            role="group"
            aria-label={dict.app.reader.languageToggle}
          >
            {(["en", "ur"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={cn(
                  "rounded-full px-2 py-1 text-[0.58rem] font-medium transition-colors",
                  language === code
                    ? "bg-surface-strong text-ink shadow-sm"
                    : "text-muted hover:text-ink",
                )}
              >
                {code === "en" ? "EN" : "اردو"}
              </button>
            ))}
          </div>
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              aria-label={dict.common.close}
              className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="scroll-slim min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col justify-center py-4 text-center">
            <span className="mx-auto grid size-11 place-items-center rounded-2xl border border-accent/25 bg-accent-soft/50 text-accent-ink">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-3 font-display text-[1.2rem] leading-tight text-ink">
              {dict.app.reader.assistantEmptyTitle}
            </h3>
            <p className="mx-auto mt-1.5 max-w-[15rem] text-[0.7rem] leading-relaxed text-muted">
              {dict.app.reader.assistantEmptyDescription}
            </p>

            <div className="mt-4 space-y-1.5">
              {[
                dict.app.reader.suggestion1,
                dict.app.reader.suggestion2,
                dict.app.reader.suggestion3,
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    setInput(suggestion);
                    inputRef.current?.focus();
                  }}
                  className="w-full rounded-xl border border-line bg-paper/50 px-3 py-2 text-start text-[0.68rem] leading-snug text-ink-soft transition-colors hover:border-accent/30 hover:bg-surface"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) =>
            message.role === "user" ? (
              <div key={message.id} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-ee-md bg-primary px-3.5 py-2.5 text-[0.76rem] leading-relaxed text-primary-fg">
                  {message.text}
                </div>
              </div>
            ) : (
              <div key={message.id} className="rounded-2xl border border-accent/25 bg-accent-soft/35 p-3">
                <div className="flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-accent-ink">
                  <Info className="size-3" aria-hidden="true" />
                  {dict.common.preview}
                </div>
                <p className="mt-1.5 text-[0.74rem] leading-relaxed text-ink-soft/85">
                  {message.text}
                </p>
              </div>
            ),
          )
        )}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className="border-t border-line p-3"
      >
        <div className="rounded-2xl border border-line bg-paper/60 p-2 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submit();
              }
            }}
            rows={2}
            placeholder={dict.app.reader.composerPlaceholder}
            aria-label={dict.app.reader.composerPlaceholder}
            className="w-full resize-none bg-transparent px-1.5 py-1 text-[0.76rem] leading-relaxed text-ink placeholder:text-muted/70 focus:outline-none"
          />
          <div className="flex items-center justify-between gap-2 px-1 pt-1">
            <span className="truncate text-[0.55rem] text-muted">
              {bookTitle}
            </span>
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label={dict.app.reader.send}
              className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-fg transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Send className="size-3.5 rtl:rotate-180" aria-hidden="true" />
            </button>
          </div>
        </div>
        <p className="mt-2 px-1 text-[0.55rem] leading-relaxed text-muted">
          {dict.app.reader.sourceNote}
        </p>
      </form>
    </div>
  );
}
