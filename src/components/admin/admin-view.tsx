"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShieldCheck, UsersRound, X } from "lucide-react";

import {
  adminUpdateUserAction,
  initialAdminActionState,
  type AdminActionCode,
} from "@/app/actions/admin";
import { PageHeader } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import type { AdminUserRow } from "@/lib/admin/dal";
import type { Dictionary } from "@/lib/i18n/en";

function messageFor(code: AdminActionCode | undefined, dict: Dictionary) {
  const copy = dict.app.admin;
  switch (code) {
    case "forbidden":
      return copy.forbidden;
    case "invalidId":
      return copy.invalidId;
    case "nameRequired":
      return copy.nameRequired;
    case "saveError":
      return copy.saveError;
    case "saved":
    default:
      return copy.saved;
  }
}

function EditUserForm({
  user,
  onClose,
}: {
  user: AdminUserRow;
  onClose: () => void;
}) {
  const { dict } = useI18n();
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    adminUpdateUserAction,
    initialAdminActionState,
  );
  const copy = dict.app.admin;

  useEffect(() => {
    if (state.status === "success") router.refresh();
  }, [state.status, router]);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={user.id} />

      <Field label={copy.nameColumn} htmlFor="admin-edit-name">
        <Input
          id="admin-edit-name"
          name="full_name"
          defaultValue={user.name}
          maxLength={120}
          required
        />
      </Field>

      <Field label={copy.emailColumn} htmlFor="admin-edit-email">
        <Input
          id="admin-edit-email"
          value={user.email}
          readOnly
          dir="ltr"
          className="opacity-70"
        />
      </Field>

      <Field label={copy.bioLabel} htmlFor="admin-edit-bio">
        <Textarea
          id="admin-edit-bio"
          name="bio"
          defaultValue={user.bio}
          maxLength={500}
          placeholder={copy.bioPlaceholder}
        />
      </Field>

      {state.status !== "idle" ? (
        <p
          className={
            state.status === "error"
              ? "text-[0.76rem] font-medium text-danger"
              : "text-[0.76rem] font-medium text-accent-ink"
          }
          role={state.status === "error" ? "alert" : "status"}
        >
          {messageFor(state.code, dict)}
        </p>
      ) : null}

      <div className="flex justify-end gap-2 border-t border-line pt-4">
        <Button type="button" variant="ghost" size="sm" onClick={onClose}>
          {copy.cancel}
        </Button>
        <Button type="submit" size="sm" disabled={pending}>
          {pending ? copy.saving : copy.save}
        </Button>
      </div>
    </form>
  );
}

export function AdminView({ users }: { users: AdminUserRow[] }) {
  const { dict, locale } = useI18n();
  const copy = dict.app.admin;
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<AdminUserRow | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return users;
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(normalized) ||
        user.email.toLowerCase().includes(normalized),
    );
  }, [query, users]);

  function formatDate(value: string | null) {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    return new Intl.DateTimeFormat(locale === "ur" ? "ur-PK" : "en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  return (
    <div className="container-app py-7 sm:py-9">
      <PageHeader
        eyebrow={`${dict.app.nav.account} · ${dict.app.nav.admin}`}
        title={copy.title}
        description={copy.subtitle}
      >
        <Badge variant="gold" className="h-7 px-3">
          <ShieldCheck className="size-3" aria-hidden="true" />
          {dict.app.nav.admin}
        </Badge>
      </PageHeader>

      <div className="mt-7 rounded-2xl border border-line bg-surface p-4">
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            aria-label={copy.searchPlaceholder}
            className="ps-10 pe-10"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={dict.common.close}
              className="absolute end-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-[0.72rem] font-medium text-muted">
        <UsersRound className="size-3.5 text-accent" aria-hidden="true" />
        <span className="tabular-nums text-ink">{filtered.length}</span>
        {filtered.length === 1 ? copy.countOne : copy.count}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="hidden grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)_7rem_6rem] gap-4 border-b border-line bg-paper/60 px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted md:grid">
            <span>{copy.nameColumn}</span>
            <span>{copy.emailColumn}</span>
            <span>{copy.joinedColumn}</span>
            <span>{copy.actionColumn}</span>
          </div>
          <ul className="divide-y divide-line">
            {filtered.map((user) => (
              <li
                key={user.id}
                className="grid gap-3 px-5 py-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)_7rem_6rem] md:items-center md:gap-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-[0.84rem] font-medium text-ink">
                    {user.name || dict.app.profile.defaultName}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-[0.68rem] text-muted">
                    {user.bio || copy.noBio}
                  </p>
                </div>
                <p
                  className="truncate text-[0.76rem] text-ink-soft"
                  dir="ltr"
                >
                  {user.email || dict.app.profile.defaultEmail}
                </p>
                <p className="text-[0.72rem] text-muted">
                  {formatDate(user.createdAt)}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setEditing(user)}
                >
                  {copy.manage}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface/50 px-6 py-14 text-center">
          <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface text-accent">
            <UsersRound className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-[1.4rem] text-ink">
            {copy.emptyTitle}
          </h2>
          <p className="mt-2 max-w-sm text-[0.82rem] leading-relaxed text-muted">
            {copy.emptyDescription}
          </p>
        </div>
      )}

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-paper-deep/40 p-4">
        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
          <ShieldCheck className="size-3.5" aria-hidden="true" />
        </span>
        <p className="text-[0.7rem] leading-relaxed text-muted">{copy.note}</p>
      </div>

      <Modal
        open={Boolean(editing)}
        onClose={() => setEditing(null)}
        title={copy.editTitle}
        description={copy.editDescription}
        closeLabel={dict.common.close}
      >
        {editing ? (
          <EditUserForm
            key={editing.id}
            user={editing}
            onClose={() => setEditing(null)}
          />
        ) : null}
      </Modal>
    </div>
  );
}
