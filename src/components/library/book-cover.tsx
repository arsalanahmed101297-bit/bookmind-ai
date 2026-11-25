import type { SampleBook } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

function Motif({ motif, accent }: { motif: SampleBook["cover"]["motif"]; accent: string }) {
  const stroke = accent;
  if (motif === "arch") {
    return (
      <svg viewBox="0 0 200 300" fill="none" className="absolute inset-0 size-full opacity-40" aria-hidden="true">
        <path d="M40 300V150a60 60 0 0 1 120 0v150" stroke={stroke} strokeWidth="0.9" />
        <path d="M58 300V155a42 42 0 0 1 84 0v145" stroke={stroke} strokeWidth="0.7" opacity="0.8" />
        <path d="M76 300V160a24 24 0 0 1 48 0v140" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
        <circle cx="100" cy="88" r="2.4" fill={stroke} />
      </svg>
    );
  }
  if (motif === "sun") {
    return (
      <svg viewBox="0 0 200 300" fill="none" className="absolute inset-0 size-full opacity-40" aria-hidden="true">
        <circle cx="100" cy="210" r="58" stroke={stroke} strokeWidth="0.8" />
        <circle cx="100" cy="210" r="44" stroke={stroke} strokeWidth="0.5" opacity="0.7" />
        {Array.from({ length: 12 }).map((_, index) => (
          <line
            key={index}
            x1="100"
            y1="210"
            x2={100 + Math.cos((index * Math.PI) / 6) * 78}
            y2={210 + Math.sin((index * Math.PI) / 6) * 78}
            stroke={stroke}
            strokeWidth="0.35"
            opacity="0.55"
          />
        ))}
      </svg>
    );
  }
  if (motif === "lines") {
    return (
      <svg viewBox="0 0 200 300" fill="none" className="absolute inset-0 size-full opacity-30" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <line
            key={index}
            x1="26"
            x2={index % 2 === 0 ? "174" : "150"}
            y1={70 + index * 22}
            y2={70 + index * 22}
            stroke={stroke}
            strokeWidth="0.6"
          />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 300" fill="none" className="absolute inset-0 size-full opacity-35" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <path
          key={index}
          d={`M-10 ${232 + index * 14} C 40 ${200 + index * 14}, 70 ${268 + index * 14}, 210 ${218 + index * 14}`}
          stroke={stroke}
          strokeWidth="0.6"
          opacity={0.9 - index * 0.12}
        />
      ))}
    </svg>
  );
}

const sizeStyles = {
  sm: {
    title: "text-[0.92rem]",
    author: "text-[0.42rem]",
    padding: "p-3.5",
    meta: "text-[0.32rem]",
  },
  md: {
    title: "text-[1.28rem]",
    author: "text-[0.5rem]",
    padding: "p-4 sm:p-5",
    meta: "text-[0.36rem]",
  },
  lg: {
    title: "text-[1.7rem] sm:text-[2rem]",
    author: "text-[0.58rem]",
    padding: "p-5 sm:p-7",
    meta: "text-[0.4rem]",
  },
};

export function BookCover({
  book,
  size = "md",
  className,
}: {
  book: SampleBook;
  size?: keyof typeof sizeStyles;
  className?: string;
}) {
  const styles = sizeStyles[size];
  const { background, foreground, accent, motif } = book.cover;

  return (
    <div
      dir="ltr"
      role="img"
      aria-label={`${book.title} by ${book.author} — sample cover`}
      className={cn(
        "relative aspect-[2/3] w-full select-none overflow-hidden rounded-[3px] rounded-e-lg shadow-[2px_6px_22px_-8px_rgba(10,20,15,0.55)]",
        className,
      )}
      style={{ backgroundColor: background, color: foreground }}
    >
      {/* cloth texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, transparent 1px, transparent 4px)",
        }}
        aria-hidden="true"
      />
      <Motif motif={motif} accent={accent} />

      {/* spine */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/35 via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[7%] w-px opacity-20"
        style={{ backgroundColor: foreground }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/[0.07]"
        aria-hidden="true"
      />

      <div className={cn("relative flex h-full flex-col justify-between", styles.padding)}>
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn("font-medium uppercase tracking-[0.24em] opacity-60", styles.meta)}
          >
            BookMind · Sample
          </span>
          <span
            className="size-1.5 rounded-full opacity-70"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
        </div>

        <div className="mt-auto">
          <div className="mb-[9%] h-px w-1/4 opacity-80" style={{ backgroundColor: accent }} />
          <h3 className={cn("font-display leading-[1.03] tracking-[-0.01em]", styles.title)}>
            {book.title}
          </h3>
          <p
            className={cn(
              "mt-[7%] font-medium uppercase tracking-[0.18em] opacity-70",
              styles.author,
            )}
          >
            {book.author}
          </p>
        </div>

        <div className="mt-[12%] flex items-end justify-between gap-2">
          <div
            className="grid size-7 place-items-center rounded-full border text-[0.35rem] uppercase tracking-widest opacity-80"
            style={{ borderColor: `${accent}88` }}
            aria-hidden="true"
          >
            BM
          </div>
          <span className={cn("uppercase tracking-[0.2em] opacity-50", styles.meta)}>
            Public domain
          </span>
        </div>
      </div>
    </div>
  );
}
