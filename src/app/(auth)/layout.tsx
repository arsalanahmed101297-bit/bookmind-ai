import { AuthShell } from "@/components/auth/auth-shell";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthShell>
      <main id="main-content">{children}</main>
    </AuthShell>
  );
}
