const DEFAULT_PATH = "/dashboard";

/** Accept only local paths so `next` cannot become an open redirect. */
export function safeNextPath(
  value: unknown,
  fallback: string = DEFAULT_PATH,
): string {
  if (typeof value !== "string") return fallback;

  const raw = value.trim();
  if (!raw || !raw.startsWith("/") || raw.startsWith("//") || /[\\\r\n]/.test(raw)) {
    return fallback;
  }

  const parsed = new URL(raw, "http://bookmind.local");
  if (parsed.origin !== "http://bookmind.local") return fallback;

  const path = `${parsed.pathname}${parsed.search}${parsed.hash}`;
  if (
    path === "/login" ||
    path.startsWith("/login?") ||
    path === "/signup" ||
    path.startsWith("/signup?") ||
    path.startsWith("/auth/")
  ) {
    return fallback;
  }

  return path;
}
