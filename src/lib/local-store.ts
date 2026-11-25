import {
  sampleAnnotations,
  type AnnotationKind,
  type RelativeTime,
} from "./sample-data";

export const STORAGE_KEYS = {
  annotations: "bookmind_annotations_v1",
  settings: "bookmind_reading_settings_v1",
  profile: "bookmind_profile_v1",
} as const;

export type StoredAnnotation = {
  id: string;
  kind: AnnotationKind;
  bookId: string;
  page: number;
  quote?: string;
  body?: string;
  createdAt: string;
  sample?: boolean;
};

export type ReadingSettings = {
  fontSize: number;
  lineHeight: "compact" | "comfortable";
  answerLanguage: "en" | "ur";
  explainLevel: "simple" | "balanced" | "detailed";
  showSources: boolean;
};

export type StoredProfile = {
  name: string;
  email: string;
  bio: string;
};

export const defaultReadingSettings: ReadingSettings = {
  fontSize: 1.06,
  lineHeight: "comfortable",
  answerLanguage: "en",
  explainLevel: "balanced",
  showSources: true,
};

const emptyProfile: StoredProfile = { name: "", email: "", bio: "" };

const relativeTimes: RelativeTime[] = [
  "twoHours",
  "yesterday",
  "threeDays",
  "lastWeek",
];

export function isRelativeTime(value: string): value is RelativeTime {
  return (relativeTimes as string[]).includes(value);
}

export function readStoredJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStoredJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage can be unavailable in private browsing */
  }
}

export function seedAnnotations(): StoredAnnotation[] {
  return sampleAnnotations.map((annotation) => ({
    ...annotation,
    createdAt: annotation.createdAt,
    sample: true,
  }));
}

type JsonStore<T> = {
  getSnapshot: () => T;
  getServerSnapshot: () => T;
  subscribe: (listener: () => void) => () => void;
  set: (next: T) => void;
};

/**
 * A tiny external store for localStorage-backed values.
 *
 * `useSyncExternalStore` needs the server snapshot to be stable and the client
 * snapshot to be cached, so reads happen once per change instead of on every
 * render. The server snapshot is deliberately the default state: the browser
 * value is applied right after hydration, which keeps SSR markup stable.
 */
function createJsonStore<T>({
  key,
  serverSnapshot,
  load,
}: {
  key: string;
  serverSnapshot: T;
  load: () => T;
}): JsonStore<T> {
  let snapshot: T | undefined;
  const listeners = new Set<() => void>();

  function emit() {
    listeners.forEach((listener) => listener());
  }

  function read() {
    if (snapshot === undefined) snapshot = load();
    return snapshot;
  }

  return {
    getSnapshot: read,
    getServerSnapshot: () => serverSnapshot,
    subscribe(listener) {
      listeners.add(listener);
      const onStorage = (event: StorageEvent) => {
        if (event.key !== key) return;
        snapshot = undefined;
        emit();
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
      };
    },
    set(next) {
      snapshot = next;
      writeStoredJson(key, next);
      emit();
    },
  };
}

const seededAnnotations = seedAnnotations();

export const annotationsStore = createJsonStore<StoredAnnotation[]>({
  key: STORAGE_KEYS.annotations,
  serverSnapshot: seededAnnotations,
  load: () => readStoredJson(STORAGE_KEYS.annotations, seededAnnotations),
});

export const readingSettingsStore = createJsonStore<ReadingSettings>({
  key: STORAGE_KEYS.settings,
  serverSnapshot: defaultReadingSettings,
  load: () => ({
    ...defaultReadingSettings,
    ...readStoredJson<Partial<ReadingSettings>>(STORAGE_KEYS.settings, {}),
  }),
});

export const profileStore = createJsonStore<StoredProfile>({
  key: STORAGE_KEYS.profile,
  serverSnapshot: emptyProfile,
  load: () => readStoredJson(STORAGE_KEYS.profile, emptyProfile),
});

export function loadAnnotations(): StoredAnnotation[] {
  return annotationsStore.getSnapshot();
}

export function saveAnnotations(annotations: StoredAnnotation[]) {
  annotationsStore.set(annotations);
}

export function loadReadingSettings(): ReadingSettings {
  return readingSettingsStore.getSnapshot();
}

export function saveReadingSettings(settings: ReadingSettings) {
  readingSettingsStore.set(settings);
}

export function loadProfile(): StoredProfile | null {
  const profile = profileStore.getSnapshot();
  return profile.name || profile.email || profile.bio ? profile : null;
}

export function saveProfile(profile: StoredProfile) {
  profileStore.set(profile);
}

export function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.();
  return random ? `${prefix}-${random}` : `${prefix}-${Date.now()}`;
}

export function nowIso() {
  return new Date().toISOString();
}
