import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-line bg-surface-strong px-4 text-sm text-ink placeholder:text-muted/70 shadow-[0_1px_2px_rgba(22,35,28,0.03)] transition-colors duration-200 hover:border-line-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/15";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(fieldBase, "h-11", className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldBase, "min-h-28 resize-y py-3 leading-relaxed", className)}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select
      className={cn(fieldBase, "h-11 cursor-pointer pe-9 appearance-none", className)}
      {...props}
    >
      {children}
    </select>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  optional,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  optional?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="text-[0.82rem] font-medium text-ink">
          {label}
          {optional ? (
            <span className="ms-1.5 text-[0.7rem] font-normal text-muted">({optional})</span>
          ) : null}
        </label>
      </div>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          className="text-[0.75rem] font-medium text-danger"
          role="alert"
        >
          {error}
        </p>
      ) : hint ? (
        <p className="text-[0.75rem] text-muted">{hint}</p>
      ) : null}
    </div>
  );
}
