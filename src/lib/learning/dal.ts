import "server-only";

import { getOfficialDoc, officialManifest } from "@/lib/agentfactory/catalog";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type {
  LearningChapter,
  LearningLesson,
  LearningNote,
  LearningStatus,
  LearningSummary,
  LessonLearningState,
} from "./types";

type ProgressRow = {
  lesson_path: string;
  completed: boolean;
  completed_at: string | null;
  last_visited_at: string | null;
};

type BookmarkRow = {
  lesson_path: string;
  created_at: string | null;
};

type NoteRow = {
  id: string;
  lesson_path: string;
  body: string;
  created_at: string | null;
  updated_at: string | null;
};

const startLessonPath = officialManifest.docs[0]?.path ?? "";

function unavailableLessonState(): LessonLearningState {
  return {
    status: "unavailable",
    completed: false,
    lastVisitedAt: null,
    bookmarked: false,
    notes: [],
  };
}

function signInLessonState(): LessonLearningState {
  return {
    status: "signInRequired",
    completed: false,
    lastVisitedAt: null,
    bookmarked: false,
    notes: [],
  };
}

function summaryShell(status: LearningStatus): LearningSummary {
  return {
    status,
    signedIn: status === "ready",
    totalLessons: officialManifest.docs.length,
    completedLessons: 0,
    percent: 0,
    chaptersTotal: 0,
    chaptersCompleted: 0,
    notesCount: 0,
    bookmarksCount: 0,
    continueLesson: null,
    startLessonPath,
    chapters: [],
    recentLessons: [],
    bookmarks: [],
    notes: [],
  };
}

async function getLearningSession() {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;
  return { supabase, user };
}

/**
 * Reads the signed-in user's own lesson state. RLS is the final boundary; the
 * explicit user_id filters are defence in depth.
 */
export async function getLessonLearningState(
  lessonPath: string,
): Promise<LessonLearningState> {
  if (!getOfficialDoc(lessonPath)) return unavailableLessonState();

  const session = await getLearningSession();
  if (!session) return signInLessonState();

  const { supabase, user } = session;

  const [progressResult, bookmarkResult, notesResult] = await Promise.all([
    supabase
      .from("course_lesson_progress")
      .select("completed, last_visited_at")
      .eq("user_id", user.id)
      .eq("lesson_path", lessonPath)
      .maybeSingle(),
    supabase
      .from("course_lesson_bookmarks")
      .select("lesson_path")
      .eq("user_id", user.id)
      .eq("lesson_path", lessonPath)
      .maybeSingle(),
    supabase
      .from("course_lesson_notes")
      .select("id, lesson_path, body, created_at, updated_at")
      .eq("user_id", user.id)
      .eq("lesson_path", lessonPath)
      .order("updated_at", { ascending: false }),
  ]);

  if (progressResult.error || bookmarkResult.error || notesResult.error) {
    return unavailableLessonState();
  }

  const progress = progressResult.data as unknown as {
    completed: boolean;
    last_visited_at: string | null;
  } | null;
  const notes = (notesResult.data ?? []) as unknown as NoteRow[];

  return {
    status: "ready",
    completed: progress?.completed === true,
    lastVisitedAt: progress?.last_visited_at ?? null,
    bookmarked: bookmarkResult.data !== null,
    notes: notes.map((note) => ({
      id: note.id,
      lessonPath: note.lesson_path,
      body: note.body,
      createdAt: note.created_at,
      updatedAt: note.updated_at,
    })),
  };
}

function buildChapters(completedPaths: Set<string>): {
  chapters: LearningChapter[];
  chaptersCompleted: number;
} {
  const groups = new Map<string, typeof officialManifest.docs>();

  for (const doc of officialManifest.docs) {
    const key = doc.chapter ?? doc.section ?? `order-${doc.order}`;
    const group = groups.get(key) ?? [];
    group.push(doc);
    groups.set(key, group);
  }

  const chapters: LearningChapter[] = [];
  let chaptersCompleted = 0;

  for (const [key, docs] of groups) {
    if (!docs.length) continue;
    const first = docs[0];
    const completed = docs.filter((doc) => completedPaths.has(doc.path)).length;
    const firstIncomplete = docs.find((doc) => !completedPaths.has(doc.path));

    if (completed === docs.length) chaptersCompleted += 1;
    chapters.push({
      key,
      label: first.chapter ? first.title : (first.sectionTitle ?? first.title),
      total: docs.length,
      completed,
      firstLessonPath: first.path,
      firstIncompletePath: firstIncomplete?.path ?? null,
    });
  }

  return { chapters, chaptersCompleted };
}

/** Private, per-user summary derived from official lesson rows. */
export async function getLearningSummary(): Promise<LearningSummary> {
  const session = await getLearningSession();
  if (!session) return summaryShell("signInRequired");

  const { supabase, user } = session;

  const [progressResult, bookmarkResult, notesResult] = await Promise.all([
    supabase
      .from("course_lesson_progress")
      .select("lesson_path, completed, completed_at, last_visited_at")
      .eq("user_id", user.id)
      .order("last_visited_at", { ascending: false }),
    supabase
      .from("course_lesson_bookmarks")
      .select("lesson_path, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }),
    supabase
      .from("course_lesson_notes")
      .select("id, lesson_path, body, created_at, updated_at")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false }),
  ]);

  if (progressResult.error || bookmarkResult.error || notesResult.error) {
    return summaryShell("unavailable");
  }

  const progressRows = (progressResult.data ?? []) as unknown as ProgressRow[];
  const bookmarkRows = (bookmarkResult.data ?? []) as unknown as BookmarkRow[];
  const noteRows = (notesResult.data ?? []) as unknown as NoteRow[];

  const docsByPath = new Map(
    officialManifest.docs.map((doc) => [doc.path, doc] as const),
  );
  const progressByPath = new Map(
    progressRows.map((row) => [row.lesson_path, row] as const),
  );
  const completedPaths = new Set(
    progressRows
      .filter((row) => row.completed && docsByPath.has(row.lesson_path))
      .map((row) => row.lesson_path),
  );
  const noteCounts = new Map<string, number>();
  for (const note of noteRows) {
    noteCounts.set(note.lesson_path, (noteCounts.get(note.lesson_path) ?? 0) + 1);
  }

  const toLesson = (
    lessonPath: string,
    row?: Pick<ProgressRow, "completed" | "last_visited_at">,
  ): LearningLesson | null => {
    const doc = docsByPath.get(lessonPath);
    if (!doc) return null;
    const progress = row ?? progressByPath.get(lessonPath);
    return {
      path: doc.path,
      title: doc.title,
      completed: progress?.completed === true,
      lastVisitedAt: progress?.last_visited_at ?? null,
      bookmarked: bookmarkRows.some((item) => item.lesson_path === doc.path),
      noteCount: noteCounts.get(doc.path) ?? 0,
    };
  };

  const recentLessons = progressRows
    .map((row) => toLesson(row.lesson_path, row))
    .filter((lesson): lesson is LearningLesson => lesson !== null)
    .slice(0, 6);

  const bookmarks = bookmarkRows
    .map((row) => toLesson(row.lesson_path))
    .filter((lesson): lesson is LearningLesson => lesson !== null);

  const notes: LearningNote[] = noteRows
    .filter((note) => docsByPath.has(note.lesson_path))
    .map((note) => ({
      id: note.id,
      lessonPath: note.lesson_path,
      lessonTitle: docsByPath.get(note.lesson_path)?.title ?? note.lesson_path,
      body: note.body,
      createdAt: note.created_at,
      updatedAt: note.updated_at,
    }));

  const { chapters, chaptersCompleted } = buildChapters(completedPaths);
  const completedLessons = completedPaths.size;
  const totalLessons = officialManifest.docs.length;

  return {
    status: "ready",
    signedIn: true,
    totalLessons,
    completedLessons,
    percent: totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0,
    chaptersTotal: chapters.length,
    chaptersCompleted,
    notesCount: notes.length,
    bookmarksCount: bookmarks.length,
    continueLesson: recentLessons[0] ?? null,
    startLessonPath,
    chapters,
    recentLessons,
    bookmarks,
    notes,
  };
}
