import "server-only";

import { cache } from "react";

import { getCurrentUserRole } from "@/lib/auth/dal";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type AdminUserRow = {
  id: string;
  name: string;
  email: string;
  bio: string;
  createdAt: string | null;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/** Server-only. Fails closed before touching profile data for non-admins. */
export const getAdminUsers = cache(async (): Promise<AdminUserRow[]> => {
  if ((await getCurrentUserRole()) !== "admin") return [];

  const supabase = await getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, full_name, bio, created_at")
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return (data as Array<Record<string, unknown>>).map((row) => ({
    id: text(row.id),
    name: text(row.full_name),
    email: text(row.email),
    bio: text(row.bio),
    createdAt: typeof row.created_at === "string" ? row.created_at : null,
  }));
});
