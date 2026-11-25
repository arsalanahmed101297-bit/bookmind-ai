import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Inter,
  Noto_Naskh_Arabic,
  Noto_Nastaliq_Urdu,
} from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { getDictionary, dirFor } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  weight: "variable",
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  display: "swap",
  preload: false,
});

const naskh = Noto_Naskh_Arabic({
  weight: "variable",
  subsets: ["arabic", "latin"],
  variable: "--font-naskh",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BookMind AI — Read. Understand. Ask. Learn.",
    template: "%s · BookMind AI",
  },
  description:
    "A premium bilingual AI library. Upload your PDFs, read them in a focused reader, and get answers grounded in the pages of your own books — in English or Urdu.",
  applicationName: "BookMind AI",
  keywords: [
    "AI book reader",
    "PDF reader",
    "RAG",
    "Urdu AI",
    "study assistant",
    "book summaries",
    "bilingual reading",
  ],
  authors: [{ name: "BookMind AI" }],
  creator: "BookMind AI",
  openGraph: {
    type: "website",
    siteName: "BookMind AI",
    title: "BookMind AI — Read. Understand. Ask. Learn.",
    description:
      "Your PDFs, an intelligent reading companion, and answers grounded in the pages you own. English and Urdu.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "BookMind AI — Read. Understand. Ask. Learn.",
    description:
      "A bilingual AI library for the books you actually own. Read, ask, and learn in English or Urdu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f2e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1611" },
  ],
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("bookmind_theme") || "system";
    var dark = stored === "dark" || (stored === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
  } catch (error) {}
})();
`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={dirFor(locale)}
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${nastaliq.variable} ${naskh.variable} h-full overflow-x-clip`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-full overflow-x-clip bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-primary px-5 py-3 text-primary-fg focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          {dict.common.skipToContent}
        </a>
        <AppProviders initialLocale={locale}>{children}</AppProviders>
      </body>
    </html>
  );
}
