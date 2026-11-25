export type AuthField =
  | "name"
  | "email"
  | "password"
  | "confirm"
  | "terms"
  | "form";

export type AuthCode =
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "passwordRequired"
  | "passwordShort"
  | "passwordMismatch"
  | "termsRequired"
  | "invalidCredentials"
  | "emailNotConfirmed"
  | "emailInUse"
  | "weakPassword"
  | "rateLimited"
  | "checkEmail"
  | "callbackFailed"
  | "signedOut"
  | "genericError";

export type AuthState = {
  status: "idle" | "error" | "success" | "preview";
  code?: AuthCode;
  fieldErrors?: Partial<Record<AuthField, AuthCode>>;
  email?: string;
  next?: string;
};

export const initialAuthState: AuthState = { status: "idle" };

export type ProfileCode =
  | "nameRequired"
  | "authRequired"
  | "profileSaved"
  | "profileError";

export type ProfileState = {
  status: "idle" | "success" | "error";
  code?: ProfileCode;
};

export const initialProfileState: ProfileState = { status: "idle" };
