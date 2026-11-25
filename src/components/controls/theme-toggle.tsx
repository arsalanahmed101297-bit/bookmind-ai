"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { useI18n } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { toggleTheme } = useTheme();
  const { dict } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "grid size-10 place-items-center rounded-full border border-transparent text-ink-soft transition-all duration-200 hover:border-line hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
      aria-label={dict.common.toggleTheme}
      title={dict.common.theme}
    >
      <Sun className="size-[1.05rem] dark:hidden" aria-hidden="true" />
      <Moon className="hidden size-[1.05rem] dark:block" aria-hidden="true" />
    </button>
  );
}
