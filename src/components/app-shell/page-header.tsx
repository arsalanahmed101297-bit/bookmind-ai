import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 font-display text-[2.1rem] leading-[1.1] text-ink sm:text-[2.5rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-xl text-[0.88rem] leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
      {children ? <div className="flex flex-wrap items-center gap-2">{children}</div> : null}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon,
  tone = "default",
}: {
  label: string;
  value: string;
  hint?: string;
  icon?: ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-4",
        tone === "accent" && "border-accent/25 bg-accent-soft/40",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">
          {label}
        </p>
        {icon ? <span className="text-accent">{icon}</span> : null}
      </div>
      <p className="mt-2.5 font-display text-[1.8rem] leading-none tracking-tight text-ink">
        {value}
      </p>
      {hint ? <p className="mt-1.5 text-[0.66rem] text-muted">{hint}</p> : null}
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface/50 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface text-accent shadow-sm">
        {icon}
      </span>
      <h2 className="mt-4 font-display text-[1.4rem] text-ink">{title}</h2>
      <p className="mt-2 max-w-sm text-[0.82rem] leading-relaxed text-muted">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
