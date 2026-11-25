import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
  tone = "accent",
  label,
}: {
  value: number;
  className?: string;
  tone?: "accent" | "forest" | "muted";
  label?: string;
}) {
  const width = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.07]", className)}
      role="progressbar"
      aria-valuenow={width}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-700 ease-out",
          tone === "accent" && "bg-accent",
          tone === "forest" && "bg-forest dark:bg-accent",
          tone === "muted" && "bg-muted/60",
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
