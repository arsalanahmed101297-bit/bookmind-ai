"use client";

import { useSyncExternalStore } from "react";
import { Sparkles, X } from "lucide-react";
import Link from "next/link";

import { useI18n } from "@/components/providers/locale-provider";

const STORAGE_KEY = "bookmind_preview_banner_dismissed";
const DISMISS_EVENT = "bookmind-preview-banner-dismissed";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(DISMISS_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(DISMISS_EVENT, onChange);
  };
}

function getSnapshot() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

export function PreviewBanner() {
  const { dict } = useI18n();
  const dismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (dismissed) return null;

  return (
    <div className="container-app pt-4">
      <div className="flex items-start gap-3 rounded-xl border border-accent/25 bg-accent-soft/45 px-3.5 py-2.5">
        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
          <Sparkles className="size-3" aria-hidden="true" />
        </span>
        <p className="flex-1 text-[0.7rem] leading-relaxed text-ink-soft/90">
          {dict.app.banner.text}{" "}
          <Link
            href="/#how-it-works"
            className="font-medium text-accent-ink underline underline-offset-2 hover:text-accent"
          >
            {dict.app.banner.link}
          </Link>
        </p>
        <button
          type="button"
          aria-label={dict.app.banner.dismiss}
          onClick={() => {
            try {
              window.sessionStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* ignore */
            }
            window.dispatchEvent(new Event(DISMISS_EVENT));
          }}
          className="grid size-6 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X className="size-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
