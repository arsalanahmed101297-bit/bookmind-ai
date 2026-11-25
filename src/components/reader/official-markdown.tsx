"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type {
  OfficialFootnote,
  OfficialToken,
} from "@/lib/agentfactory/markdown";
import { cn } from "@/lib/utils";

const proseParagraph =
  "text-[0.96rem] leading-[1.85] text-ink-soft/90 sm:text-[1rem]";
const proseList = "mt-4 space-y-2 ps-5 text-[0.95rem] leading-[1.8] text-ink-soft/90";

function isExternal(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith("//");
}

function renderInline(token: OfficialToken, key: string): ReactNode {
  switch (token.type) {
    case "text":
    case "escape":
      return <span key={key}>{token.text ?? ""}</span>;
    case "strong":
      return (
        <strong key={key} className="font-semibold text-ink">
          {(token.tokens ?? []).map((child, index) =>
            renderInline(child, `${key}-s-${index}`),
          )}
        </strong>
      );
    case "em":
      return (
        <em key={key}>
          {(token.tokens ?? []).map((child, index) =>
            renderInline(child, `${key}-e-${index}`),
          )}
        </em>
      );
    case "codespan":
      return (
        <code
          key={key}
          className="rounded-md bg-paper-deep/70 px-1.5 py-0.5 font-mono text-[0.84em] text-ink"
        >
          {token.text ?? ""}
        </code>
      );
    case "br":
      return <br key={key} />;
    case "footnoteRef": {
      const id = token.footnoteId ?? "note";
      return (
        <sup key={key} className="ms-0.5 font-semibold text-accent-ink">
          <a href={`#fn-${id}`} aria-label={`Footnote ${token.footnoteNumber ?? ""}`}>
            {token.footnoteNumber ?? ""}
          </a>
        </sup>
      );
    }
    case "link": {
      const href = token.resolvedHref ?? token.href ?? "#";
      const children = (token.tokens ?? []).map((child, index) =>
        renderInline(child, `${key}-l-${index}`),
      );
      const className =
        "font-medium text-accent-ink underline decoration-accent/40 underline-offset-2 hover:decoration-accent";
      if (href.startsWith("/course/") || href.startsWith("#")) {
        return (
          <Link key={key} href={href} className={className}>
            {children}
          </Link>
        );
      }
      return (
        <a
          key={key}
          href={href}
          className={className}
          {...(isExternal(href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }
    case "image": {
      const alt = token.text ?? "Official course image";
      const path = token.imagePath ?? "";
      if (token.resolvedSrc) {
        return (
          <Image
            key={key}
            src={token.resolvedSrc}
            alt={alt}
            width={1200}
            height={800}
            unoptimized
            className="mt-5 h-auto w-full rounded-xl border border-line bg-surface-strong object-contain"
          />
        );
      }
      return (
        <span key={key} className="rounded-md bg-paper-deep px-2 py-1 text-[0.82rem] text-muted">
          {alt} · {path}
        </span>
      );
    }
    case "html":
      return <span key={key}>{token.raw ?? token.text ?? ""}</span>;
    default:
      if (token.tokens?.length) {
        return (
          <span key={key}>
            {token.tokens.map((child, index) =>
              renderInline(child, `${key}-d-${index}`),
            )}
          </span>
        );
      }
      return <span key={key}>{token.text ?? ""}</span>;
  }
}

// Inline tokens must not render block elements: a Markdown image inside a
// paragraph would otherwise produce <p><figure>, which the browser repairs
// and React then reports as a hydration mismatch.
const inlineTokenTypes = new Set([
  "text",
  "escape",
  "strong",
  "em",
  "codespan",
  "br",
  "footnoteRef",
  "link",
  "image",
  "html",
]);

function renderChildren(tokens: OfficialToken[] | undefined, key: string) {
  return (tokens ?? []).map((token, index) =>
    inlineTokenTypes.has(token.type)
      ? renderInline(token, `${key}-${index}`)
      : renderToken(token, `${key}-${index}`),
  );
}

function renderToken(token: OfficialToken, key: string): ReactNode {
  switch (token.type) {
    case "space":
    case "def":
      return null;
    case "paragraph": {
      const children = token.tokens ?? [];
      // A standalone image is a block, so keep its figure outside the <p>.
      if (children.length === 1 && children[0]?.type === "image") {
        return renderToken(children[0], key);
      }
      return <p key={key} className={cn(proseParagraph, "mt-4 first:mt-0")}>{renderChildren(children, key)}</p>;
    }
    case "heading": {
      const level = Math.min(Math.max(token.depth ?? 2, 2), 5);
      const Tag = `h${level}` as "h2" | "h3" | "h4" | "h5";
      const sizes: Record<number, string> = {
        2: "mt-9 font-display text-[1.65rem] text-ink sm:text-[1.85rem]",
        3: "mt-7 font-display text-[1.35rem] text-ink sm:text-[1.5rem]",
        4: "mt-6 font-display text-[1.15rem] text-ink",
        5: "mt-5 text-[1rem] font-semibold text-ink",
      };
      return (
        <Tag key={key} id={token.id} className={cn("scroll-mt-28", sizes[level])}>
          {renderChildren(token.tokens, key)}
        </Tag>
      );
    }
    case "text":
    case "escape":
      return renderInline(token, key);
    case "strong":
    case "em":
    case "codespan":
    case "footnoteRef":
    case "br":
      return renderInline(token, key);
    case "link":
      return <span key={key}>{renderInline(token, key)}</span>;
    case "image": {
      const alt = token.text ?? "Official course image";
      if (!token.resolvedSrc) return null;
      return (
        <figure key={key} className="my-6">
          <Image
            src={token.resolvedSrc}
            alt={alt}
            width={1200}
            height={800}
            unoptimized
            className="h-auto w-full rounded-xl border border-line bg-surface-strong object-contain"
          />
        </figure>
      );
    }
    case "list": {
      const Tag = token.ordered ? "ol" : "ul";
      return (
        <Tag
          key={key}
          className={cn(proseList, token.ordered ? "list-decimal" : "list-disc")}
          {...(token.ordered && token.start ? { start: token.start } : {})}
        >
          {(token.items ?? []).map((item, index) => (
            <li key={`${key}-i-${index}`} className="ps-1">
              {item.task ? (
                <span className="me-2 inline-block size-3 rounded-sm border border-line-strong align-middle" aria-hidden="true" />
              ) : null}
              {renderChildren(item.tokens, `${key}-i-${index}`)}
            </li>
          ))}
        </Tag>
      );
    }
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="mt-5 border-s-2 border-accent/50 bg-accent-soft/20 px-4 py-3 text-[0.92rem] leading-[1.8] text-ink-soft/85"
        >
          {renderChildren(token.tokens, key)}
        </blockquote>
      );
    case "code":
      return (
        <pre
          key={key}
          className="mt-5 overflow-x-auto rounded-xl border border-line bg-paper-deep/60 p-4 text-[0.82rem] leading-relaxed text-ink"
        >
          <code className={token.lang ? `language-${token.lang}` : undefined}>{token.text ?? ""}</code>
        </pre>
      );
    case "hr":
      return <hr key={key} className="my-8 border-line" />;
    case "table": {
      const header = token.header ?? [];
      const rows = token.rows ?? [];
      return (
        <div key={key} className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-[0.84rem]">
            {header.length ? (
              <thead className="bg-paper-deep/50 text-start">
                <tr>
                  {header.map((cell, index) => (
                    <th
                      key={`${key}-h-${index}`}
                      scope="col"
                      className="border-b border-line px-3 py-2 text-start font-semibold text-ink"
                    >
                      {renderChildren(cell.tokens, `${key}-h-${index}`)}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`${key}-r-${rowIndex}`} className="border-b border-line/70 last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={`${key}-r-${rowIndex}-c-${cellIndex}`} className="px-3 py-2 align-top text-ink-soft/85">
                      {renderChildren(cell.tokens, `${key}-r-${rowIndex}-c-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "html":
      return (
        <span key={key} className="text-ink-soft/90">
          {token.raw ?? token.text ?? ""}
        </span>
      );
    default:
      if (token.tokens?.length) return <span key={key}>{renderChildren(token.tokens, key)}</span>;
      return null;
  }
}

export function OfficialMarkdown({
  tokens,
  footnotes,
  notesLabel,
}: {
  tokens: OfficialToken[];
  footnotes: OfficialFootnote[];
  notesLabel: string;
}) {
  return (
    <div className="official-prose">
      {tokens.map((token, index) => renderToken(token, `block-${index}`))}
      {footnotes.length ? (
        <section className="mt-12 border-t border-line pt-6">
          <h2 className="font-display text-[1.35rem] text-ink">{notesLabel}</h2>
          <ol className="mt-4 space-y-3">
            {footnotes.map((footnote) => (
              <li
                key={footnote.id}
                id={`fn-${footnote.id}`}
                className="scroll-mt-28 text-[0.82rem] leading-[1.75] text-muted"
              >
                <span className="font-semibold text-ink">{footnote.number}. </span>
                {footnote.tokens.map((token, index) =>
                  renderInline(token, `fn-${footnote.id}-${index}`),
                )}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  );
}
