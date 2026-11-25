"use client";

import {
  useActionState,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Bookmark,
  Check,
  Info,
  LogOut,
  NotebookPen,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import { signOutAction, updateProfileAction } from "@/app/actions/auth";
import { PageHeader, StatCard } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/input";
import type { AuthUser } from "@/lib/auth/dal";
import { initialProfileState, type ProfileCode } from "@/lib/auth/form-state";
import {
  annotationsStore,
  profileStore,
  type StoredProfile,
} from "@/lib/local-store";
import { sampleBooks, sampleLibraryStats } from "@/lib/sample-data";
import { initials } from "@/lib/utils";

function profileMessage(code: ProfileCode | undefined, dict: ReturnType<typeof useI18n>["dict"]) {
  switch (code) {
    case "nameRequired":
      return dict.app.profile.nameRequired;
    case "authRequired":
      return dict.app.profile.authRequired;
    case "profileError":
      return dict.app.profile.saveError;
    case "profileSaved":
    default:
      return dict.app.profile.saved;
  }
}

export function ProfileView({
  user,
  authEnabled,
}: {
  user: AuthUser | null;
  authEnabled: boolean;
}) {
  const { dict, locale } = useI18n();
  const router = useRouter();
  const [profileState, profileAction, profilePending] = useActionState(
    updateProfileAction,
    initialProfileState,
  );
  const storedProfile = useSyncExternalStore(
    profileStore.subscribe,
    profileStore.getSnapshot,
    profileStore.getServerSnapshot,
  );
  const annotations = useSyncExternalStore(
    annotationsStore.subscribe,
    annotationsStore.getSnapshot,
    annotationsStore.getServerSnapshot,
  );
  const [draft, setDraft] = useState<StoredProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const profile: StoredProfile = authEnabled
    ? {
        name: user?.name ?? "",
        email: user?.email ?? "",
        bio: user?.bio ?? "",
      }
    : {
        name: storedProfile.name || dict.app.profile.defaultName,
        email: storedProfile.email,
        bio: storedProfile.bio || dict.app.profile.defaultBio,
      };
  const form = draft ?? profile;

  const counts = useMemo(
    () => ({
      notes: annotations.filter((item) => item.kind === "note").length,
      bookmarks: annotations.filter((item) => item.kind === "bookmark").length,
    }),
    [annotations],
  );

  useEffect(() => {
    if (!saved) return;
    const timer = window.setTimeout(() => setSaved(false), 2400);
    return () => window.clearTimeout(timer);
  }, [saved]);

  const [handledProfileState, setHandledProfileState] = useState(profileState);
  if (profileState !== handledProfileState) {
    setHandledProfileState(profileState);
    if (profileState.status === "success") {
      setDraft(null);
      setError(null);
      setSaved(true);
    } else if (profileState.status === "error") {
      setError(profileMessage(profileState.code, dict));
    }
  }

  const averageProgress = useMemo(
    () =>
      Math.round(
        sampleBooks.reduce((total, book) => total + book.progress, 0) /
          sampleBooks.length,
      ),
    [],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (authEnabled) return;
    event.preventDefault();

    if (!form.name.trim()) {
      setError(dict.app.profile.nameRequired);
      return;
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError(dict.auth.errors.emailInvalid);
      return;
    }

    const next: StoredProfile = {
      name: form.name.trim(),
      email: form.email.trim(),
      bio: form.bio.trim(),
    };
    profileStore.set(next);
    setDraft(null);
    setError(null);
    setSaved(true);
  }

  function change(patch: Partial<StoredProfile>) {
    setDraft({ ...form, ...patch });
    setError(null);
  }

  const displayName = profile.name || dict.app.profile.defaultName;
  const displayEmail = profile.email || dict.app.profile.defaultEmail;
  const joined = user?.createdAt
    ? new Intl.DateTimeFormat(locale === "ur" ? "ur-PK" : "en-GB", {
        month: "long",
        year: "numeric",
      }).format(new Date(user.createdAt))
    : dict.app.profile.memberSinceValue;

  const signOutControl = authEnabled ? (
    <form action={signOutAction}>
      <Button type="submit" variant={saved ? "secondary" : "outline"} size="sm">
        <LogOut className="size-3.5 rtl:rotate-180" aria-hidden="true" />
        {dict.app.profile.signOut}
      </Button>
    </form>
  ) : (
    <Button variant="outline" size="sm" onClick={() => router.push("/")}>
      <LogOut className="size-3.5 rtl:rotate-180" aria-hidden="true" />
      {dict.app.profile.signOut}
    </Button>
  );

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.account} · ${authEnabled ? dict.app.profile.defaultName : dict.app.common.previewChip}`}
        title={dict.app.profile.title}
        description={dict.app.profile.subtitle}
      >
        <Badge variant={authEnabled ? "gold" : "outline"} className="h-7 px-3">
          {authEnabled ? displayName : dict.app.profile.sampleMember}
        </Badge>
        {signOutControl}
      </PageHeader>

      <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
        <div className="space-y-5">
          <section className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
            <div
              className="h-24 bg-forest-deep bg-[radial-gradient(ellipse_at_20%_120%,rgba(220,174,107,0.35),transparent_60%)]"
              aria-hidden="true"
            />
            <div className="relative px-5 pb-6 sm:px-7">
              <div className="-mt-11 flex flex-wrap items-end justify-between gap-3">
                <span className="grid size-[5.5rem] place-items-center rounded-3xl border-4 border-surface bg-accent-soft text-[1.5rem] font-semibold uppercase text-accent-ink shadow-card">
                  {initials(displayName)}
                </span>
                <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/60 px-2.5 py-1 text-[0.6rem] text-muted">
                  <UserRound className="size-3" aria-hidden="true" />
                  {dict.app.profile.memberSince}: {joined}
                </span>
              </div>

              <h2 className="mt-4 font-display text-[1.8rem] leading-tight text-ink">
                {displayName}
              </h2>
              <p className="mt-1 text-[0.76rem] text-muted" dir="ltr">
                {displayEmail}
              </p>
              <p className="mt-3 max-w-xl text-[0.82rem] leading-relaxed text-ink-soft/80">
                {profile.bio || dict.app.profile.defaultBio}
              </p>

              <div className="mt-6 border-t border-line pt-5">
                <h3 className="text-[0.78rem] font-semibold text-ink">
                  {dict.app.profile.editTitle}
                </h3>
                <p className="mt-1 text-[0.66rem] text-muted">
                  {authEnabled
                    ? dict.app.profile.cloudNote
                    : dict.app.profile.localNote}
                </p>

                <form
                  onSubmit={onSubmit}
                  action={authEnabled ? profileAction : undefined}
                  className="mt-4 grid gap-4 sm:grid-cols-2"
                >
                  <Field label={dict.app.profile.nameLabel} htmlFor="profile-name">
                    <Input
                      id="profile-name"
                      name="full_name"
                      value={form.name}
                      onChange={(event) => change({ name: event.target.value })}
                      placeholder={dict.app.profile.nameLabel}
                    />
                  </Field>
                  <Field
                    label={dict.app.profile.emailLabel}
                    htmlFor="profile-email"
                    optional={authEnabled ? undefined : dict.common.optional}
                    hint={authEnabled ? dict.app.profile.emailManaged : undefined}
                  >
                    <Input
                      id="profile-email"
                      name="email"
                      type="email"
                      value={form.email}
                      readOnly={authEnabled}
                      onChange={(event) => change({ email: event.target.value })}
                      placeholder={dict.app.profile.defaultEmail}
                      dir="ltr"
                      className={authEnabled ? "opacity-70" : undefined}
                    />
                  </Field>
                  <Field
                    label={dict.app.profile.bioLabel}
                    htmlFor="profile-bio"
                    error={error ?? undefined}
                    className="sm:col-span-2"
                  >
                    <Textarea
                      id="profile-bio"
                      name="bio"
                      value={form.bio}
                      onChange={(event) => change({ bio: event.target.value })}
                      placeholder={dict.app.profile.bioPlaceholder}
                    />
                  </Field>

                  <div className="flex items-center justify-between gap-3 sm:col-span-2">
                    <span className="inline-flex items-center gap-1.5 text-[0.64rem] text-muted">
                      <Check className="size-3 text-accent" aria-hidden="true" />
                      {saved ? dict.app.profile.saved : dict.app.settings.autosave}
                    </span>
                    <Button type="submit" size="sm" disabled={profilePending}>
                      {profilePending ? dict.auth.submitting : dict.app.profile.save}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
              label={dict.app.profile.stats.books}
              value={String(sampleLibraryStats.books)}
              icon={<BookOpen className="size-3.5" />}
              hint={dict.common.sample}
            />
            <StatCard
              label={dict.app.profile.stats.notes}
              value={String(counts.notes)}
              icon={<NotebookPen className="size-3.5" />}
              hint={dict.app.notes.previewNote}
            />
            <StatCard
              label={dict.app.profile.stats.bookmarks}
              value={String(counts.bookmarks)}
              icon={<Bookmark className="size-3.5" />}
              hint={dict.app.notes.previewNote}
            />
            <StatCard
              label={dict.app.profile.stats.progress}
              value={`${averageProgress}%`}
              icon={<Sparkles className="size-3.5" />}
              hint={dict.app.status.reading}
              tone="accent"
            />
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <section className="rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-xl bg-forest/10 text-forest dark:bg-accent/15 dark:text-accent">
                <ShieldCheck className="size-4" aria-hidden="true" />
              </span>
              <h2 className="font-display text-[1.15rem] text-ink">
                {dict.app.profile.dataTitle}
              </h2>
            </div>
            <p className="mt-3 text-[0.72rem] leading-relaxed text-muted">
              {dict.app.profile.dataNote}
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-paper-deep/40 p-5">
            <div className="flex items-start gap-2.5">
              <Info className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-[0.7rem] leading-relaxed text-muted">
                {dict.privacy.pledgeText}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="text-[0.82rem] font-semibold text-ink">
              {dict.app.profile.signOut}
            </h2>
            <p className="mt-1.5 text-[0.68rem] leading-relaxed text-muted">
              {dict.app.profile.signOutDescription}
            </p>
            <div className="mt-3 [&_button]:w-full">{signOutControl}</div>
          </section>
        </aside>
      </div>
    </div>
  );
}
