import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "subtle" | "danger";
type Size = "sm" | "md" | "lg" | "icon" | "icon-sm";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-fg shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_10px_24px_-14px_rgba(16,43,32,0.7)] hover:bg-primary-hover hover:-translate-y-px active:translate-y-0",
  secondary:
    "border border-line bg-surface-strong text-ink shadow-[0_1px_2px_rgba(22,35,28,0.04)] hover:border-line-strong hover:bg-paper",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-ink/50 hover:bg-ink/[0.04]",
  ghost: "text-ink-soft hover:bg-ink/[0.05] hover:text-ink",
  subtle: "bg-accent-soft text-accent-ink hover:bg-accent/20",
  danger: "border border-danger/25 text-danger hover:bg-danger/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.95rem]",
  icon: "size-11",
  "icon-sm": "size-9",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}
