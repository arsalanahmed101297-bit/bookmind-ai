import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "gold" | "forest" | "outline" | "danger";

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-ink/[0.055] text-ink-soft",
  gold: "bg-accent-soft text-accent-ink",
  forest: "bg-forest text-on-forest",
  outline: "border border-line-strong text-ink-soft",
  danger: "bg-danger/10 text-danger",
};

export function Badge({
  children,
  variant = "neutral",
  className,
  dot,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.66rem] font-semibold tracking-[0.08em] uppercase",
        variants[variant],
        className,
      )}
    >
      {dot ? (
        <span className="size-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
      ) : null}
      {children}
    </span>
  );
}
