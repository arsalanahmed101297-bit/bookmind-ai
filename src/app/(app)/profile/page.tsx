import type { Metadata } from "next";

import { ProfileView } from "@/components/profile/profile-view";
import { getCurrentUser } from "@/lib/auth/dal";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your BookMind AI reading identity and account settings.",
};

export default async function ProfilePage() {
  const authEnabled = isSupabaseConfigured();
  const user = authEnabled ? await getCurrentUser() : null;

  return <ProfileView user={user} authEnabled={authEnabled} />;
}
