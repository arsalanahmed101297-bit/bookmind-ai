"use server";

import { revalidatePath } from "next/cache";

import { getOfficialDoc } from "@/lib/agentfactory/catalog";
import type { LearningActionResult } from "@/lib/learning/types";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const maxNoteLength = 10000;

function fail(code: LearningActionResult["code"]): LearningActionResult {
  return { ok: false, code };
}

function saved(): LearningActionResult {
  return { ok: true, code: "saved" };
}

function validLessonPath(value: unknown): value is string {
  return typeof value === "string" && Boolean(getOfficialDoc(value));
}

async function getSession() {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;
  return { supabase, user };
}

function revalidateLesson(lessonPath: string) {
  revalidatePath("/dashboard");
  revalidatePath("/learning");
  revalidatePath(`/course/${lessonPath}`);
}

/** Records the current lesson for Continue Learning without altering completion. */
export async function recordLessonVisitAction(
  lessonPath: string,
): Promise<LearningActionResult> {
  if (!validLessonPath(lessonPath)) return fail("invalidLesson");
  const session = await getSession();
  if (!session) return fail("authRequired");

  const { supabase, user } = session;
  const now = new Date().toISOString();

  const { data: existing, error: selectError } = await supabase
    .from("course_lesson_progress")
    .select("user_id")
    .eq("user_id", user.id)
    .eq("lesson_path", lessonPath)
    .maybeSingle();

  if (selectError) return fail("saveError");

  const { error } = existing
    ? await supabase
        .from("course_lesson_progress")
        .update({ last_visited_at: now })
        .eq("user_id", user.id)
        .eq("lesson_path", lessonPath)
    : await supabase.from("course_lesson_progress").insert({
        user_id: user.id,
        lesson_path: lessonPath,
        last_visited_at: now,
      });

  if (error) return fail("saveError");
  revalidateLesson(lessonPath);
  return saved();
}

export async function setLessonCompleteAction(
  lessonPath: string,
  completed: boolean,
): Promise<LearningActionResult> {
  if (!validLessonPath(lessonPath)) return fail("invalidLesson");
  if (typeof completed !== "boolean") return fail("saveError");
  const session = await getSession();
  if (!session) return fail("authRequired");

  const { supabase, user } = session;
  const now = new Date().toISOString();
  const values = {
    completed,
    completed_at: completed ? now : null,
  };

  const { data: existing, error: selectError } = await supabase
    .from("course_lesson_progress")
    .select("user_id")
    .eq("user_id", user.id)
    .eq("lesson_path", lessonPath)
    .maybeSingle();

  if (selectError) return fail("saveError");

  const { error } = existing
    ? await supabase
        .from("course_lesson_progress")
        .update(values)
        .eq("user_id", user.id)
        .eq("lesson_path", lessonPath)
    : await supabase.from("course_lesson_progress").insert({
        user_id: user.id,
        lesson_path: lessonPath,
        last_visited_at: now,
        ...values,
      });

  if (error) return fail("saveError");
  revalidateLesson(lessonPath);
  return saved();
}

export async function setLessonBookmarkAction(
  lessonPath: string,
  bookmarked: boolean,
): Promise<LearningActionResult> {
  if (!validLessonPath(lessonPath)) return fail("invalidLesson");
  if (typeof bookmarked !== "boolean") return fail("saveError");
  const session = await getSession();
  if (!session) return fail("authRequired");

  const { supabase, user } = session;
  const { error } = bookmarked
    ? await supabase.from("course_lesson_bookmarks").upsert(
        { user_id: user.id, lesson_path: lessonPath },
        { onConflict: "user_id,lesson_path", ignoreDuplicates: true },
      )
    : await supabase
        .from("course_lesson_bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("lesson_path", lessonPath);

  if (error) return fail("saveError");
  revalidateLesson(lessonPath);
  return saved();
}

export async function saveLessonNoteAction(
  lessonPath: string,
  body: string,
  noteId?: string,
): Promise<LearningActionResult> {
  if (!validLessonPath(lessonPath)) return fail("invalidLesson");
  if (typeof body !== "string") return fail("emptyNote");
  if (noteId !== undefined && !uuidPattern.test(noteId)) return fail("invalidNote");

  const trimmed = body.trim();
  if (!trimmed) return fail("emptyNote");
  if (trimmed.length > maxNoteLength) return fail("noteTooLong");

  const session = await getSession();
  if (!session) return fail("authRequired");
  const { supabase, user } = session;

  const { error } = noteId
    ? await supabase
        .from("course_lesson_notes")
        .update({ body: trimmed })
        .eq("id", noteId)
        .eq("user_id", user.id)
        .eq("lesson_path", lessonPath)
        .select("id")
    : await supabase.from("course_lesson_notes").insert({
        user_id: user.id,
        lesson_path: lessonPath,
        body: trimmed,
      });

  if (error) return fail("saveError");
  revalidateLesson(lessonPath);
  return saved();
}

export async function deleteLessonNoteAction(
  lessonPath: string,
  noteId: string,
): Promise<LearningActionResult> {
  if (!validLessonPath(lessonPath)) return fail("invalidLesson");
  if (!uuidPattern.test(noteId)) return fail("invalidNote");

  const session = await getSession();
  if (!session) return fail("authRequired");
  const { supabase, user } = session;

  const { data, error } = await supabase
    .from("course_lesson_notes")
    .delete()
    .eq("id", noteId)
    .eq("user_id", user.id)
    .eq("lesson_path", lessonPath)
    .select("id");

  if (error) return fail("saveError");
  if (!data?.length) return fail("notFound");

  revalidateLesson(lessonPath);
  return saved();
}
