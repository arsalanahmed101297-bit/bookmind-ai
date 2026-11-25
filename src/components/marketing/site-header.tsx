"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/controls/language-switcher";
import { ThemeToggle } from "@/components/controls/theme-toggle";
import { useI18n } from "@/components/providers/locale-provider";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { dict } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/#features", label: dict.nav.features },
    { href: "/#how-it-works", label: dict.nav.howItWorks },
    { href: "/#reader", label: dict.nav.reader },
    { href: "/#languages", label: dict.nav.languages },
    { href: "/#faq", label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-page flex h-[4.6rem] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-[0.82rem] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-accent/70 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <LanguageSwitcher compact className="hidden xs:block" />
            <ThemeToggle />
            <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
            <a
              href="/login"
              className="hidden rounded-full px-3 py-2 text-[0.82rem] font-medium text-ink-soft transition-colors hover:text-ink sm:block"
            >
              {dict.nav.login}
            </a>
            <ButtonLink href="/signup" size="sm" className="hidden sm:inline-flex">
              {dict.nav.start}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            >
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-[4.6rem] z-30 bg-forest-deep/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="absolute inset-x-0 top-full z-40 border-b border-line bg-paper px-5 pb-6 pt-3 shadow-lift"
          >
            <div className="flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line/70 py-3.5 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="font-display text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <ButtonLink href="/signup" size="lg" onClick={() => setOpen(false)}>
                {dict.nav.start}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/login"
                variant="secondary"
                size="lg"
                onClick={() => setOpen(false)}
              >
                {dict.nav.login}
              </ButtonLink>
            </div>
            <div className="mt-5 flex items-center justify-between sm:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
