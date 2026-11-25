"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { signOutAction } from "@/app/actions/auth";
import {
  BookOpen,
  Check,
  Info,
  Languages,
  LockKeyhole,
  LogOut,
  Monitor,
  Moon,
  RotateCcw,
  Sparkles,
  Sun,
  Type,
  UserRound,
} from "lucide-react";

import { PageHeader } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { useTheme, type ThemeMode } from "@/components/providers/theme-provider";
import { Button, ButtonLink } from "@/components/ui/button";
import {
  defaultReadingSettings,
  readingSettingsStore,
  type ReadingSettings,
} from "@/lib/local-store";
import { cn } from "@/lib/utils";

type SettingsTab = "reading" | "ai" | "language" | "account";

function SettingCard({
  title,
  description,
  children,
  icon,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[0.9rem] font-semibold text-ink">{title}</h2>
          {description ? (
            <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {icon ? <span className="text-accent">{icon}</span> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function SettingsView({ authEnabled }: { authEnabled: boolean }) {
  const { dict, locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const [tab, setTab] = useState<SettingsTab>("reading");
  const settings = useSyncExternalStore(
    readingSettingsStore.subscribe,
    readingSettingsStore.getSnapshot,
    readingSettingsStore.getServerSnapshot,
  );
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  function update(patch: Partial<ReadingSettings>) {
    readingSettingsStore.set({ ...settings, ...patch });
  }

  const tabs: { id: SettingsTab; label: string; icon: typeof BookOpen }[] = [
    { id: "reading", label: dict.app.settings.tabs.reading, icon: BookOpen },
    { id: "ai", label: dict.app.settings.tabs.ai, icon: Sparkles },
    { id: "language", label: dict.app.settings.tabs.language, icon: Languages },
    { id: "account", label: dict.app.settings.tabs.account, icon: UserRound },
  ];

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.account} · ${dict.app.common.previewChip}`}
        title={dict.app.settings.title}
        description={dict.app.settings.subtitle}
      >
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            readingSettingsStore.set(defaultReadingSettings);
            setTheme("system");
            setNotice(dict.app.settings.defaultsRestored);
          }}
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          {dict.app.settings.reset}
        </Button>
      </PageHeader>

      <div className="mt-7 grid gap-5 lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start">
        <nav
          aria-label={dict.app.settings.title}
          className="scroll-slim -mx-1 flex gap-1 overflow-x-auto rounded-2xl border border-line bg-surface p-1.5 lg:mx-0 lg:sticky lg:top-24 lg:flex-col"
        >
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                aria-current={tab === item.id ? "page" : undefined}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-[0.76rem] font-medium transition-colors",
                  tab === item.id
                    ? "bg-accent-soft text-accent-ink"
                    : "text-ink-soft hover:bg-ink/[0.04] hover:text-ink",
                )}
              >
                <Icon
                  className={cn(
                    "size-4",
                    tab === item.id ? "text-accent" : "text-muted",
                  )}
                  aria-hidden="true"
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="space-y-4">
          {tab === "reading" ? (
            <>
              <SettingCard
                title={dict.app.settings.themeLabel}
                description={dict.app.settings.themeDesc}
                icon={<Sun className="size-4" />}
              >
                <div className="grid gap-2 sm:grid-cols-3">
                  {(
                    [
                      { id: "light", label: dict.app.settings.themeLight, icon: Sun },
                      { id: "dark", label: dict.app.settings.themeDark, icon: Moon },
                      { id: "system", label: dict.app.settings.themeSystem, icon: Monitor },
                    ] as { id: ThemeMode; label: string; icon: typeof Sun }[]
                  ).map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setTheme(option.id)}
                        aria-pressed={theme === option.id}
                        className={cn(
                          "flex items-center gap-2.5 rounded-xl border p-3 text-start transition-colors",
                          theme === option.id
                            ? "border-accent/40 bg-accent-soft/50"
                            : "border-line bg-paper/40 hover:border-line-strong",
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-8 place-items-center rounded-lg border",
                            theme === option.id
                              ? "border-accent/30 bg-surface text-accent"
                              : "border-line bg-surface text-muted",
                          )}
                        >
                          <Icon className="size-3.5" aria-hidden="true" />
                        </span>
                        <span className="flex-1 text-[0.76rem] font-medium text-ink">
                          {option.label}
                        </span>
                        {theme === option.id ? (
                          <Check className="size-3.5 text-accent" aria-hidden="true" />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </SettingCard>

              <SettingCard
                title={dict.app.settings.fontSize}
                description={dict.app.settings.fontSizeDesc}
                icon={<Type className="size-4" />}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      update({ fontSize: Math.max(0.9, settings.fontSize - 0.04) })
                    }
                    aria-label={dict.app.reader.zoomOut}
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-[0.72rem] font-semibold text-ink hover:border-line-strong"
                  >
                    A−
                  </button>
                  <input
                    type="range"
                    min={0.9}
                    max={1.35}
                    step={0.02}
                    value={settings.fontSize}
                    onChange={(event) =>
                      update({ fontSize: Number(event.target.value) })
                    }
                    aria-label={dict.app.settings.fontSize}
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-line accent-[var(--accent)]"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      update({ fontSize: Math.min(1.35, settings.fontSize + 0.04) })
                    }
                    aria-label={dict.app.reader.zoomIn}
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-[0.8rem] font-semibold text-ink hover:border-line-strong"
                  >
                    A+
                  </button>
                  <span className="w-12 shrink-0 text-end text-[0.66rem] tabular-nums text-muted">
                    {Math.round(settings.fontSize * 16)}px
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-line bg-surface-strong px-5 py-4">
                  <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {dict.app.settings.readingPreviewTitle}
                  </p>
                  <p
                    className="mt-2 font-display text-ink-soft/90"
                    style={{
                      fontSize: `${settings.fontSize}rem`,
                      lineHeight:
                        settings.lineHeight === "comfortable" ? 1.9 : 1.55,
                    }}
                  >
                    {dict.app.settings.readingPreviewText}
                  </p>
                </div>
              </SettingCard>

              <SettingCard
                title={dict.app.settings.lineHeight}
                description={dict.app.settings.lineHeightDesc}
                icon={<BookOpen className="size-4" />}
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  {(
                    [
                      { id: "comfortable", label: dict.app.settings.lineComfortable },
                      { id: "compact", label: dict.app.settings.lineCompact },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => update({ lineHeight: option.id })}
                      aria-pressed={settings.lineHeight === option.id}
                      className={cn(
                        "rounded-xl border p-3 text-[0.76rem] font-medium transition-colors",
                        settings.lineHeight === option.id
                          ? "border-accent/40 bg-accent-soft/50 text-accent-ink"
                          : "border-line bg-paper/40 text-ink-soft hover:border-line-strong",
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </SettingCard>
            </>
          ) : null}

          {tab === "ai" ? (
            <>
              <SettingCard
                title={dict.app.settings.answerLang}
                description={dict.app.settings.answerLangDesc}
                icon={<Languages className="size-4" />}
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  {(
                    [
                      { id: "en", label: dict.app.settings.answerEnglish, hint: "English" },
                      { id: "ur", label: dict.app.settings.answerUrdu, hint: "اردو" },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => update({ answerLanguage: option.id })}
                      aria-pressed={settings.answerLanguage === option.id}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl border p-3.5 text-start transition-colors",
                        settings.answerLanguage === option.id
                          ? "border-accent/40 bg-accent-soft/50"
                          : "border-line bg-paper/40 hover:border-line-strong",
                      )}
                    >
                      <span>
                        <span className="block text-[0.8rem] font-medium text-ink">
                          {option.label}
                        </span>
                        <span className="mt-0.5 block text-[0.62rem] text-muted">
                          {option.hint}
                        </span>
                      </span>
                      {settings.answerLanguage === option.id ? (
                        <Check className="size-4 text-accent" aria-hidden="true" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </SettingCard>

              <SettingCard
                title={dict.app.settings.explainLevel}
                description={dict.app.assistant.infoText}
                icon={<Sparkles className="size-4" />}
              >
                <div className="grid gap-2 sm:grid-cols-3">
                  {(
                    [
                      { id: "simple", label: dict.app.settings.levelSimple },
                      { id: "balanced", label: dict.app.settings.levelBalanced },
                      { id: "detailed", label: dict.app.settings.levelDetailed },
                    ] as const
                  ).map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => update({ explainLevel: level.id })}
                      aria-pressed={settings.explainLevel === level.id}
                      className={cn(
                        "rounded-xl border p-3 text-[0.76rem] font-medium transition-colors",
                        settings.explainLevel === level.id
                          ? "border-accent/40 bg-accent-soft/50 text-accent-ink"
                          : "border-line bg-paper/40 text-ink-soft hover:border-line-strong",
                      )}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </SettingCard>

              <SettingCard
                title={dict.app.settings.showSources}
                description={dict.app.settings.showSourcesDesc}
                icon={<Info className="size-4" />}
              >
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.showSources}
                  onClick={() => update({ showSources: !settings.showSources })}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-paper/40 p-3 text-start transition-colors hover:border-line-strong"
                >
                  <span className="text-[0.76rem] text-ink-soft">
                    {dict.app.reader.sourceNote}
                  </span>
                  <span
                    className={cn(
                      "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                      settings.showSources ? "bg-accent" : "bg-line-strong",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-all",
                        settings.showSources ? "start-[1.375rem]" : "start-0.5",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </SettingCard>
            </>
          ) : null}

          {tab === "language" ? (
            <>
              <SettingCard
                title={dict.app.settings.interfaceLang}
                description={dict.app.settings.interfaceLangDesc}
                icon={<Languages className="size-4" />}
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  {(
                    [
                      { id: "en" as const, label: "English", sub: "Left to right" },
                      { id: "ur" as const, label: "اردو", sub: "دائیں سے بائیں" },
                    ]
                  ).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setLocale(option.id);
                        setNotice(dict.app.settings.savedNotice);
                      }}
                      aria-pressed={locale === option.id}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl border p-4 text-start transition-colors",
                        locale === option.id
                          ? "border-accent/40 bg-accent-soft/50"
                          : "border-line bg-paper/40 hover:border-line-strong",
                      )}
                    >
                      <span>
                        <span
                          className={cn(
                            "block text-[0.95rem] font-medium text-ink",
                            option.id === "ur" && "font-urdu",
                          )}
                        >
                          {option.label}
                        </span>
                        <span className="mt-0.5 block text-[0.62rem] text-muted">
                          {option.sub}
                        </span>
                      </span>
                      {locale === option.id ? (
                        <Check className="size-4 text-accent" aria-hidden="true" />
                      ) : null}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-[0.64rem] leading-relaxed text-muted">
                  {dict.app.settings.previewOnly}
                </p>
              </SettingCard>

              <SettingCard
                title={dict.app.settings.answerLang}
                description={dict.app.settings.answerLangDesc}
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  {(
                    [
                      { id: "en", label: dict.app.settings.answerEnglish },
                      { id: "ur", label: dict.app.settings.answerUrdu },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => update({ answerLanguage: option.id })}
                      aria-pressed={settings.answerLanguage === option.id}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl border p-3 text-[0.78rem] font-medium transition-colors",
                        settings.answerLanguage === option.id
                          ? "border-accent/40 bg-accent-soft/50 text-accent-ink"
                          : "border-line bg-paper/40 text-ink-soft hover:border-line-strong",
                      )}
                    >
                      {option.label}
                      {settings.answerLanguage === option.id ? (
                        <Check className="size-3.5 text-accent" aria-hidden="true" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </SettingCard>
            </>
          ) : null}

          {tab === "account" ? (
            <>
              <SettingCard
                title={dict.app.settings.accountTitle}
                description={dict.app.settings.accountDesc}
                icon={<UserRound className="size-4" />}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <ButtonLink href="/profile" size="sm">
                    <UserRound className="size-3.5" aria-hidden="true" />
                    {dict.app.settings.manageProfile}
                  </ButtonLink>
                  {authEnabled ? (
                    <form action={signOutAction}>
                      <Button type="submit" variant="outline" size="sm">
                        <LogOut className="size-3.5 rtl:rotate-180" aria-hidden="true" />
                        {dict.app.settings.signOut}
                      </Button>
                    </form>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      {dict.app.common.notConnected}
                    </Button>
                  )}
                </div>
              </SettingCard>

              <SettingCard
                title={dict.app.settings.privacyTitle}
                description={dict.app.settings.privacyNote}
                icon={<LockKeyhole className="size-4" />}
              >
                <div className="flex items-start gap-2.5 rounded-xl border border-line bg-paper/40 p-3">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-[0.68rem] leading-relaxed text-muted">
                    {dict.app.profile.dataNote}
                  </p>
                </div>
              </SettingCard>
            </>
          ) : null}

          <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-paper-deep/40 px-4 py-3">
            <p className="text-[0.64rem] leading-relaxed text-muted">
              {dict.app.settings.autosave}
            </p>
            <span className="inline-flex shrink-0 items-center gap-1 text-[0.62rem] font-medium text-accent">
              <Check className="size-3" aria-hidden="true" />
              {dict.common.saved}
            </span>
          </div>
        </div>
      </div>

      {notice ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
          <div
            role="status"
            className="rounded-full border border-line bg-surface px-4 py-2.5 text-[0.72rem] font-medium text-ink shadow-lift"
          >
            {notice}
          </div>
        </div>
      ) : null}
    </div>
  );
}
