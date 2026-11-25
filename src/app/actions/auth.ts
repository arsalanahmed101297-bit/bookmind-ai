"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  initialProfileState,
  type AuthCode,
  type AuthState,
  type ProfileState,
} from "@/lib/auth/form-state";
import { safeNextPath } from "@/lib/auth/redirect";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function formText(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function errorState(
  code: AuthCode,
  field?: keyof NonNullable<AuthState["fieldErrors"]>,
  extra: Partial<AuthState> = {},
): AuthState {
  return {
    status: "error",
    code,
    fieldErrors: field ? { [field]: code } : undefined,
    ...extra,
  };
}

function mapAuthError(error: { code?: string; message?: string }): AuthCode {
  const code = error.code?.toLowerCase() ?? "";
  const message = error.message?.toLowerCase() ?? "";

  if (code === "invalid_credentials" || message.includes("invalid login credentials")) {
    return "invalidCredentials";
  }
  if (code === "email_not_confirmed" || message.includes("email not confirmed")) {
    return "emailNotConfirmed";
  }
  if (
    code === "user_already_exists" ||
    code === "email_address_in_use" ||
    message.includes("already registered")
  ) {
    return "emailInUse";
  }
  if (code === "weak_password" || message.includes("password should be")) {
    return "weakPassword";
  }
  if (
    code.includes("rate_limit") ||
    message.includes("rate limit") ||
    message.includes("too many requests")
  ) {
    return "rateLimited";
  }
  return "genericError";
}

async function getCallbackUrl() {
  const config = getSupabaseConfig();
  if (!config) return "";

  try {
    return new URL("/auth/callback", config.siteUrl).toString();
  } catch {
    const headerStore = await headers();
    const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
    const protocol = headerStore.get("x-forwarded-proto") ?? "http";
    if (host) return new URL("/auth/callback", `${protocol}://${host}`).toString();
    return "http://localhost:3000/auth/callback";
  }
}

export async function loginAction(
  _state: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = formText(formData, "email");
  const password = formText(formData, "password");
  const next = safeNextPath(formData.get("next"));

  if (!email) return errorState("emailRequired", "email");
  if (!emailPattern.test(email)) return errorState("emailInvalid", "email");
  if (!password) return errorState("passwordRequired", "password");

  const supabase = await getSupabaseServerClient();
  if (!supabase) {
    return { status: "preview", next };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return errorState(mapAuthError(error));

  redirect(next);
}

export async function signupAction(
  _state: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const name = formText(formData, "name");
  const email = formText(formData, "email");
  const password = formText(formData, "password");
  const confirm = formText(formData, "confirm");
  const agreed = formData.get("terms") === "on";
  const next = safeNextPath(formData.get("next"));

  if (!name) return errorState("nameRequired", "name");
  if (!email) return errorState("emailRequired", "email");
  if (!emailPattern.test(email)) return errorState("emailInvalid", "email");
  if (!password) return errorState("passwordRequired", "password");
  if (password.length < 8) return errorState("passwordShort", "password");
  if (password !== confirm) return errorState("passwordMismatch", "confirm");
  if (!agreed) return errorState("termsRequired", "terms");

  const supabase = await getSupabaseServerClient();
  if (!supabase) {
    return { status: "preview", next };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
      emailRedirectTo: await getCallbackUrl(),
    },
  });

  if (error) return errorState(mapAuthError(error));

  if (!data.session) {
    return { status: "success", code: "checkEmail", email, next };
  }

  if (data.user) {
    await supabase
      .from("profiles")
      .update({ full_name: name, updated_at: new Date().toISOString() })
      .eq("id", data.user.id);
  }

  redirect(next);
}

export async function signOutAction() {
  const supabase = await getSupabaseServerClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/login?signedOut=1");
}

export async function updateProfileAction(
  _state: ProfileState,
  formData: FormData,
): Promise<ProfileState> {
  const name = formText(formData, "full_name");
  const bio = formText(formData, "bio");

  if (!name) return { status: "error", code: "nameRequired" };

  const supabase = await getSupabaseServerClient();
  if (!supabase) return initialProfileState;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) return { status: "error", code: "authRequired" };

  const { error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: user.id,
        full_name: name,
        bio,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );

  if (error) return { status: "error", code: "profileError" };

  revalidatePath("/profile");
  revalidatePath("/dashboard");
  return { status: "success", code: "profileSaved" };
}
