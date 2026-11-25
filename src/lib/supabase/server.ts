import "server-only";

import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { cache } from "react";

import { getSupabaseConfig } from "./config";

/**
 * One client per request. `cache` lets Server Components and Server Actions in
 * the same request share the client without sharing it across users.
 */
export const getSupabaseServerClient = cache(
  async (): Promise<SupabaseClient | null> => {
    const config = getSupabaseConfig();
    if (!config) return null;

    const cookieStore = await cookies();

    return createServerClient(config.url, config.anonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          // Server Components cannot write cookies. The proxy refreshes the
          // session there; Server Actions can write cookies normally.
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            /* read-only cookie store during Server Component rendering */
          }
        },
      },
    });
  },
);
