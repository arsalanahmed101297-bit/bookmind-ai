import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AuthForm } from "@/components/auth/auth-form";
import { getCurrentUser } from "@/lib/auth/dal";
import type { AuthCode } from "@/lib/auth/form-state";
import { safeNextPath } from "@/lib/auth/redirect";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Log in",
  description: "Sign in to your BookMind AI library.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; signedOut?: string; error?: string }>;
}) {
  const params = await searchParams;
  const next = safeNextPath(params.next);

  if (isSupabaseConfigured()) {
    const user = await getCurrentUser();
    if (user) redirect(next);
  }

  const noticeCode: AuthCode | undefined =
    params.signedOut === "1"
      ? "signedOut"
      : params.error === "callback"
        ? "callbackFailed"
        : undefined;

  return <AuthForm mode="login" next={next} noticeCode={noticeCode} />;
}
