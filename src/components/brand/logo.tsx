import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-[0.7rem] bg-forest text-on-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-8px_rgba(16,43,32,0.8)]",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" fill="none" className="size-full">
        <path
          d="M8.5 12.4c3.6-1.8 7.4-1.6 11.5.7 4.1-2.3 7.9-2.5 11.5-.7v14.4c-3.6-1.8-7.4-1.6-11.5.7-4.1-2.3-7.9-2.5-11.5-.7V12.4Z"
          stroke="#f0e4c8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M20 13.1v14.4" stroke="#f0e4c8" strokeWidth="1.2" opacity="0.7" />
        <path
          d="M28.6 8.2v3M27.1 9.7h3M26.3 12.1l1.1-1.1"
          stroke="#e0b26b"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  tone = "default",
  withLink = true,
  href = "/",
}: {
  className?: string;
  tone?: "default" | "light";
  withLink?: boolean;
  href?: string;
}) {
  const content = (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <LogoMark className="transition-transform duration-500 group-hover:-rotate-3" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.42rem] leading-none tracking-[-0.01em]",
            tone === "light" ? "text-on-forest" : "text-ink",
          )}
        >
          BookMind
          <span className="ms-1 align-super font-sans text-[0.58rem] font-semibold tracking-[0.16em] text-accent">
            AI
          </span>
        </span>
      </span>
    </span>
  );

  if (!withLink) return content;

  return (
    <Link href={href} aria-label="BookMind AI home" className="rounded-lg">
      {content}
    </Link>
  );
}
