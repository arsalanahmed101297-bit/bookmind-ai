export type SupabaseConfig = {
  url: string;
  anonKey: string;
  siteUrl: string;
};

/**
 * Supabase uses public (anon) keys in the browser; row level security in
 * `supabase/migrations/0001_profiles.sql` is what protects user data.
 */
export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) return null;

  return {
    url,
    anonKey,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "",
  };
}

export function isSupabaseConfigured() {
  return getSupabaseConfig() !== null;
}
