"use client";

import Link from "next/link";
import { useActionState, useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Info,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import { loginAction, signupAction } from "@/app/actions/auth";
import { useI18n } from "@/components/providers/locale-provider";
import type { Dictionary } from "@/lib/i18n/en";
import {
  initialAuthState,
  type AuthCode,
  type AuthField,
} from "@/lib/auth/form-state";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";

type Mode = "login" | "signup";
type FieldName = Exclude<AuthField, "form">;
type Errors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function messageForCode(code: AuthCode, dict: Dictionary) {
  switch (code) {
    case "nameRequired":
      return dict.auth.errors.nameRequired;
    case "emailRequired":
      return dict.auth.errors.emailRequired;
    case "emailInvalid":
      return dict.auth.errors.emailInvalid;
    case "passwordRequired":
      return dict.auth.errors.passwordRequired;
    case "passwordShort":
      return dict.auth.errors.passwordShort;
    case "passwordMismatch":
      return dict.auth.errors.passwordMismatch;
    case "termsRequired":
      return dict.auth.errors.termsRequired;
    case "invalidCredentials":
      return dict.auth.serverErrors.invalidCredentials;
    case "emailNotConfirmed":
      return dict.auth.serverErrors.emailNotConfirmed;
    case "emailInUse":
      return dict.auth.serverErrors.emailInUse;
    case "weakPassword":
      return dict.auth.serverErrors.weakPassword;
    case "rateLimited":
      return dict.auth.serverErrors.rateLimited;
    case "checkEmail":
      return dict.auth.notices.checkEmail;
    case "callbackFailed":
      return dict.auth.notices.callbackFailed;
    case "signedOut":
      return dict.auth.notices.signedOut;
    case "genericError":
    default:
      return dict.auth.serverErrors.genericError;
  }
}

export function AuthForm({
  mode,
  next = "/dashboard",
  noticeCode,
}: {
  mode: Mode;
  next?: string;
  noticeCode?: AuthCode;
}) {
  const { dict } = useI18n();
  const isSignup = mode === "signup";
  const [state, formAction, pending] = useActionState(
    isSignup ? signupAction : loginAction,
    initialAuthState,
  );
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  useEffect(() => {
    const first = state.fieldErrors
      ? (Object.keys(state.fieldErrors)[0] as FieldName | undefined)
      : undefined;
    if (first) document.getElementById(`${mode}-${first}`)?.focus();
  }, [state, mode]);

  function serverError(field: FieldName) {
    const code = state.fieldErrors?.[field];
    return code ? messageForCode(code, dict) : undefined;
  }

  function update(name: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!(name in current)) return current;
      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
  }

  function validate() {
    const nextErrors: Errors = {};
    const messages = dict.auth.errors;

    if (isSignup && !values.name.trim()) nextErrors.name = messages.nameRequired;
    if (!values.email.trim()) nextErrors.email = messages.emailRequired;
    else if (!emailPattern.test(values.email.trim())) nextErrors.email = messages.emailInvalid;

    if (!values.password) nextErrors.password = messages.passwordRequired;
    else if (isSignup && values.password.length < 8) nextErrors.password = messages.passwordShort;

    if (isSignup && values.confirm !== values.password) nextErrors.confirm = messages.passwordMismatch;
    if (isSignup && !agreed) nextErrors.terms = messages.termsRequired;

    return nextErrors;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`${mode}-${first}`)?.focus();
    }
  }

  const title = isSignup ? dict.auth.signupTitle : dict.auth.loginTitle;
  const description = isSignup ? dict.auth.signupDescription : dict.auth.loginDescription;
  const formError =
    state.status === "error" && !state.fieldErrors && state.code
      ? messageForCode(state.code, dict)
      : null;
  const topNotice = noticeCode ? messageForCode(noticeCode, dict) : null;

  return (
    <div>
      <p className="eyebrow">BookMind AI</p>
      <h1 className="mt-3 font-display text-[2.35rem] leading-[1.08] text-ink sm:text-[2.6rem]">
        {title}
      </h1>
      <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{description}</p>

      {topNotice ? (
        <div
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-line bg-surface/70 px-3.5 py-3 text-[0.76rem] text-ink-soft"
          role="status"
        >
          <Info className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
          <span>{topNotice}</span>
        </div>
      ) : null}

      {state.status === "success" && state.code === "checkEmail" ? (
        <div
          className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft/60 p-4"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
              <CheckCircle2 className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.82rem] font-semibold text-ink">{dict.auth.checkEmailTitle}</p>
              <p className="mt-1 text-[0.76rem] leading-relaxed text-ink-soft/80">
                {dict.auth.checkEmailBody}
              </p>
              {state.email ? (
                <p className="mt-2 text-[0.72rem] font-medium text-accent-ink" dir="ltr">
                  {state.email}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {state.status === "preview" ? (
        <div
          className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft/60 p-4"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.82rem] font-semibold text-ink">{dict.auth.previewTitle}</p>
              <p className="mt-1 text-[0.76rem] leading-relaxed text-ink-soft/80">
                {dict.auth.previewBody}
              </p>
              <ButtonLink href={state.next ?? next} variant="subtle" size="sm" className="mt-3">
                {dict.auth.exploreDashboard}
                <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}

      {formError ? (
        <div
          className="mt-5 rounded-xl border border-danger/25 bg-danger/5 px-3.5 py-3 text-[0.76rem] font-medium text-danger"
          role="alert"
        >
          {formError}
        </div>
      ) : null}

      <form
        onSubmit={onSubmit}
        action={formAction}
        noValidate
        className="mt-7 space-y-4"
      >
        <input type="hidden" name="next" value={next} />

        {isSignup ? (
          <Field
            label={dict.auth.nameLabel}
            htmlFor={`${mode}-name`}
            error={errors.name ?? serverError("name")}
          >
            <div className="relative">
              <UserRound
                className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted/70"
                aria-hidden="true"
              />
              <Input
                id={`${mode}-name`}
                name="name"
                autoComplete="name"
                placeholder={dict.auth.namePlaceholder}
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                aria-invalid={Boolean(errors.name ?? serverError("name"))}
                aria-describedby={
                  errors.name ?? serverError("name") ? `${mode}-name-error` : undefined
                }
                className="h-12 ps-10"
              />
            </div>
          </Field>
        ) : null}

        <Field
          label={dict.auth.emailLabel}
          htmlFor={`${mode}-email`}
          error={errors.email ?? serverError("email")}
        >
          <div className="relative">
            <Mail
              className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted/70"
              aria-hidden="true"
            />
            <Input
              id={`${mode}-email`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={dict.auth.emailPlaceholder}
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email ?? serverError("email"))}
              className="h-12 ps-10"
              dir="ltr"
            />
          </div>
        </Field>

        <Field
          label={dict.auth.passwordLabel}
          htmlFor={`${mode}-password`}
          error={errors.password ?? serverError("password")}
          hint={isSignup ? dict.auth.passwordHint : undefined}
        >
          <div className="relative">
            <LockKeyhole
              className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted/70"
              aria-hidden="true"
            />
            <Input
              id={`${mode}-password`}
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              value={values.password}
              onChange={(event) => update("password", event.target.value)}
              aria-invalid={Boolean(errors.password ?? serverError("password"))}
              className="h-12 px-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? dict.auth.hidePassword : dict.auth.showPassword}
              className="absolute end-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {showPassword ? (
                <EyeOff className="size-4" aria-hidden="true" />
              ) : (
                <Eye className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </Field>

        {isSignup ? (
          <Field
            label={dict.auth.confirmLabel}
            htmlFor={`${mode}-confirm`}
            error={errors.confirm ?? serverError("confirm")}
          >
            <div className="relative">
              <LockKeyhole
                className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted/70"
                aria-hidden="true"
              />
              <Input
                id={`${mode}-confirm`}
                name="confirm"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={values.confirm}
                onChange={(event) => update("confirm", event.target.value)}
                aria-invalid={Boolean(errors.confirm ?? serverError("confirm"))}
                className="h-12 ps-10"
              />
            </div>
          </Field>
        ) : null}

        {isSignup ? (
          <div>
            <label className="flex cursor-pointer items-start gap-2.5 text-[0.74rem] leading-relaxed text-ink-soft">
              <input
                id={`${mode}-terms`}
                name="terms"
                type="checkbox"
                checked={agreed}
                onChange={(event) => {
                  setAgreed(event.target.checked);
                  setErrors((current) => {
                    const nextErrors = { ...current };
                    delete nextErrors.terms;
                    return nextErrors;
                  });
                }}
                aria-invalid={Boolean(errors.terms ?? serverError("terms"))}
                className="mt-0.5 size-4 shrink-0 rounded border-line-strong accent-[var(--accent)]"
              />
              <span>
                {dict.auth.termsPrefix}
                <Link href="/terms" className="font-medium text-accent hover:underline">
                  {dict.auth.termsLink}
                </Link>
                {dict.auth.termsJoin}
                <Link href="/privacy" className="font-medium text-accent hover:underline">
                  {dict.auth.privacyLink}
                </Link>
                {dict.auth.termsSuffix}
              </span>
            </label>
            {(errors.terms ?? serverError("terms")) ? (
              <p className="mt-1.5 text-[0.75rem] font-medium text-danger" role="alert">
                {errors.terms ?? serverError("terms")}
              </p>
            ) : null}
          </div>
        ) : null}

        <Button type="submit" size="lg" className="mt-1 w-full" disabled={pending}>
          {pending ? dict.auth.submitting : isSignup ? dict.auth.submitSignup : dict.auth.submitLogin}
          {!pending ? (
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          ) : null}
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-center gap-1.5 text-[0.8rem] text-muted">
        <span>{isSignup ? dict.auth.haveAccount : dict.auth.noAccount}</span>
        <Link
          href={isSignup ? "/login" : "/signup"}
          className="font-medium text-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
        >
          {isSignup ? dict.auth.toLogin : dict.auth.toSignup}
        </Link>
      </div>

      <div className="mt-6 flex items-start gap-2 rounded-xl border border-line bg-surface/60 px-3.5 py-3">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-forest dark:text-accent" aria-hidden="true" />
        <p className="text-[0.68rem] leading-relaxed text-muted">{dict.auth.secureNote}</p>
      </div>

      <div className="mt-6 border-t border-line pt-5 text-center">
        <p className="text-[0.62rem] uppercase tracking-[0.16em] text-muted">
          {dict.common.tagline}
        </p>
      </div>
    </div>
  );
}
