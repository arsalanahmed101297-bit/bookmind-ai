import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { getDictionary } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

/**
 * Rendered only by a server component after the role is verified. The client
 * receives a ready-made link, never a role flag or admin constant.
 */
export async function AdminNavLink() {
  const dict = getDictionary(await getLocale());

  return (
    <li>
      <Link
        href="/admin"
        className="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.84rem] text-ink-soft transition-colors hover:bg-ink/[0.04] hover:text-ink"
      >
        <span
          className="absolute inset-y-2 start-0 w-0.5 rounded-full bg-accent opacity-0"
          aria-hidden="true"
        />
        <ShieldCheck
          className="size-[1.05rem] shrink-0 text-accent"
          aria-hidden="true"
        />
        <span className="flex-1">{dict.app.nav.admin}</span>
      </Link>
    </li>
  );
}
