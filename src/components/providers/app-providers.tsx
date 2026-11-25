"use client";

import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n/config";
import { LocaleProvider } from "./locale-provider";
import { ThemeProvider } from "./theme-provider";

export function AppProviders({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
