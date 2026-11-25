"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/controls/language-switcher";
import { ThemeToggle } from "@/components/controls/theme-toggle";
import { useI18n } from "@/components/providers/locale-provider";

export function SiteFooter() {
  const { dict } = useI18n();

  const productLinks = [
    { href: "/#features", label: dict.nav.features },
    { href: "/#how-it-works", label: dict.nav.howItWorks },
    { href: "/#reader", label: dict.nav.reader },
    { href: "/#languages", label: dict.nav.languages },
    { href: "/#faq", label: dict.nav.faq },
  ];

  const accountLinks = [
    { href: "/login", label: dict.common.login },
    { href: "/signup", label: dict.common.signup },
    { href: "/dashboard", label: dict.nav.dashboard },
  ];

  return (
    <footer className="border-t border-line bg-paper-deep/50">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[0.85rem] leading-relaxed text-muted">
              {dict.footer.description}
            </p>
            <p className="mt-5 font-urdu text-lg leading-[2] text-ink-soft" lang="ur" dir="rtl">
              ہر کتاب، اپنی زبان میں۔
            </p>
          </div>

          <FooterColumn title={dict.footer.product} links={productLinks} />
          <FooterColumn title={dict.footer.account} links={accountLinks} />

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {dict.footer.legal}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[0.85rem] text-ink-soft transition-colors hover:text-accent"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[0.85rem] text-ink-soft transition-colors hover:text-accent"
                >
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <LanguageSwitcher compact />
              <ThemeToggle className="size-9 border border-line bg-surface" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.72rem] text-muted">{dict.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <p className="text-[0.72rem] text-muted">{dict.footer.builtFor}</p>
            <a
              href="#top"
              aria-label={dict.common.backHome}
              className="grid size-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.85rem] text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
