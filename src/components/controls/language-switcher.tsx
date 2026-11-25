"use client";

import { useCallback, useId, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { useClickOutside } from "@/hooks/use-click-outside";
import { LOCALES, localeLabels, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  tone = "default",
  compact = false,
}: {
  className?: string;
  tone?: "default" | "light";
  compact?: boolean;
}) {
  const { locale, setLocale, dict } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);
  useClickOutside(ref, close, open);

  function choose(next: Locale) {
    setOpen(false);
    setLocale(next);
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={dict.common.language}
        className={cn(
          "inline-flex h-10 items-center gap-1.5 rounded-full border px-3 text-[0.78rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          tone === "light"
            ? "border-white/20 text-on-forest hover:bg-white/10"
            : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
          compact && "px-2.5",
        )}
      >
        <Languages className="size-[0.95rem]" aria-hidden="true" />
        <span className={cn(locale === "ur" && "font-urdu-text text-[0.95rem]")}>
          {locale === "ur" ? "اردو" : "EN"}
        </span>
        <ChevronDown
          className={cn("size-3.5 opacity-60 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="listbox"
          aria-label={dict.common.language}
          className="absolute end-0 top-[calc(100%+0.5rem)] z-50 w-44 overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-lift"
        >
          {LOCALES.map((item) => {
            const labels = localeLabels[item];
            const active = locale === item;
            return (
              <button
                key={item}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => choose(item)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors",
                  active ? "bg-accent-soft text-accent-ink" : "text-ink-soft hover:bg-ink/5 hover:text-ink",
                )}
              >
                <span className="flex flex-col">
                  <span className={cn("font-medium", item === "ur" && "font-urdu-text text-base leading-relaxed")}>
                    {labels.native}
                  </span>
                  {item === "ur" ? (
                    <span className="text-[0.65rem] text-muted">Urdu · RTL</span>
                  ) : (
                    <span className="text-[0.65rem] text-muted">English · LTR</span>
                  )}
                </span>
                {active ? <Check className="size-4 shrink-0" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
