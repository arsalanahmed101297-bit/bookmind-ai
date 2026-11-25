import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { officialCoursePaths } from "@/lib/agentfactory/course-paths";
import { getSupabaseConfig } from "@/lib/supabase/config";

export async function proxy(request: NextRequest) {
  // Unknown course slugs must fail with a real 404 before streaming starts.
  // The app's loading boundary sends a 200 as soon as it flushes, so the
  // page-level notFound() alone cannot change the status.
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/course/")) {
    const slug = pathname
      .slice("/course/".length)
      .replace(/\/+$/, "")
      .split("/")
      .join("/");
    if (!officialCoursePaths.has(slug)) {
      const notFoundUrl = request.nextUrl.clone();
      notFoundUrl.pathname = "/404";
      notFoundUrl.search = "";
      return NextResponse.rewrite(notFoundUrl);
    }
  }

  const config = getSupabaseConfig();
  if (!config) return NextResponse.next();

  let response = NextResponse.next({ request });

  const supabase = createServerClient(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headersToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });

        // Rebuild the response so refreshed cookies are sent on the request.
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });

        Object.entries(headersToSet).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      },
    },
  });

  // Refreshes expired access tokens and writes new cookies through setAll.
  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
