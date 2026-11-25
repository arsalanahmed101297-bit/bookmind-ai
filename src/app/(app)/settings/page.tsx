import type { Metadata } from "next";

import { SettingsView } from "@/components/settings/settings-view";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Settings",
  description: "Reading, assistant, language and account settings for BookMind AI.",
};

export default function SettingsPage() {
  return <SettingsView authEnabled={isSupabaseConfigured()} />;
}
