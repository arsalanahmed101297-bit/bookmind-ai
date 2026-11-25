import { Fragment } from "react";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function countMatches(text: string, query: string) {
  const needle = query.trim();
  if (!needle) return 0;
  const matches = text.match(new RegExp(escapeRegExp(needle), "gi"));
  return matches ? matches.length : 0;
}

export function HighlightedText({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const needle = query.trim();
  if (!needle) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRegExp(needle)})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === needle.toLowerCase() ? (
          <mark
            key={`${part}-${index}`}
            className="rounded-[2px] bg-highlight px-0.5 text-ink"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        ),
      )}
    </>
  );
}
