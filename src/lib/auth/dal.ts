import "server-only";

import { cache } from "react";

import { getSupabaseServerClient } from "@/lib/supabase/server";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  bio: string;
  avatarUrl: string | null;
  createdAt: string | null;
};

export type UserRole = "user" | "admin";

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function nameFromEmail(email: string) {
  if (!email) return "";
  return email.split("@")[0].replace(/[._-]+/g, " ").trim();
}

/** Server-only DTO. Never pass the Supabase user/session object to the client. */
export const getCurrentUser = cache(async (): Promise<AuthUser | null> => {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  const email = user.email ?? "";
  let profile: Record<string, unknown> | null = null;

  try {
    const result = await supabase
      .from("profiles")
      .select("full_name, bio, avatar_url")
      .eq("id", user.id)
      .maybeSingle();
    profile = (result.data ?? null) as Record<string, unknown> | null;
  } catch {
    // The SQL migration may not have been applied yet; metadata still works.
  }

  const metadata = (user.user_metadata ?? {}) as Record<string, unknown>;

  return {
    id: user.id,
    email,
    name:
      text(profile?.full_name) ||
      text(metadata.full_name) ||
      text(metadata.name) ||
      nameFromEmail(email),
    bio: text(profile?.bio) || text(metadata.bio),
    avatarUrl: text(profile?.avatar_url) || text(metadata.avatar_url) || null,
    createdAt: user.created_at ?? null,
  };
});

/**
 * Server-only role lookup. The role is never added to AuthUser so it cannot be
 * serialized into a client component by accident.
 */
export const getCurrentUserRole = cache(async (): Promise<UserRole | null> => {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  try {
    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    return (data as { role?: string } | null)?.role === "admin" ? "admin" : "user";
  } catch {
    // Migration not applied yet: fail closed as a normal user.
    return "user";
  }
});
