"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUserRole } from "@/lib/auth/dal";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type AdminActionCode =
  | "forbidden"
  | "invalidId"
  | "nameRequired"
  | "saved"
  | "saveError";

export type AdminActionState = {
  status: "idle" | "success" | "error";
  code?: AdminActionCode;
};

export const initialAdminActionState: AdminActionState = { status: "idle" };

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function formText(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Admin profile editing. Authorization is checked again here (never trusted
 * from the page) and enforced by RLS + an immutable-role trigger in the DB.
 */
export async function adminUpdateUserAction(
  _state: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  if ((await getCurrentUserRole()) !== "admin") {
    return { status: "error", code: "forbidden" };
  }

  const id = formText(formData, "id");
  const fullName = formText(formData, "full_name");
  const bio = formText(formData, "bio");

  if (!uuidPattern.test(id)) return { status: "error", code: "invalidId" };
  if (!fullName || fullName.length > 120) {
    return { status: "error", code: "nameRequired" };
  }

  const supabase = await getSupabaseServerClient();
  if (!supabase) return { status: "error", code: "forbidden" };

  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName.slice(0, 120), bio: bio.slice(0, 500) })
    .eq("id", id);

  if (error) return { status: "error", code: "saveError" };

  revalidatePath("/admin");
  return { status: "success", code: "saved" };
}
