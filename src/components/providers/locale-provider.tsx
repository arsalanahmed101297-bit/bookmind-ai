"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import {
  LOCALE_COOKIE,
  dirFor,
  getDictionary,
  type Dictionary,
  type Locale,
} from "@/lib/i18n/config";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
  isSwitching: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isSwitching, startTransition] = useTransition();
  const router = useRouter();

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      setLocaleState(next);
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = next;
      document.documentElement.dir = dirFor(next);
      try {
        window.localStorage.setItem(LOCALE_COOKIE, next);
      } catch {
        /* storage can be unavailable; the cookie is the source of truth */
      }
      startTransition(() => {
        router.refresh();
      });
    },
    [locale, router],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: dirFor(locale),
      isRtl: locale === "ur",
      dict: getDictionary(locale),
      setLocale,
      isSwitching,
    }),
    [locale, setLocale, isSwitching],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useI18n must be used inside a LocaleProvider");
  return ctx;
}
