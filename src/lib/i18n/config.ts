import { en, type Dictionary } from "./en";
import { ur } from "./ur";

export type Locale = "en" | "ur";

export const LOCALES: Locale[] = ["en", "ur"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "bookmind_locale";

export const localeLabels: Record<Locale, { native: string; english: string; dir: "ltr" | "rtl" }> = {
  en: { native: "English", english: "English", dir: "ltr" },
  ur: { native: "اردو", english: "Urdu", dir: "rtl" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "ur";
}

export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ur" ? "rtl" : "ltr";
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "ur" ? ur : en;
}

export type { Dictionary };
