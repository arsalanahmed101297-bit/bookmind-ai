"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bookmark,
  Check,
  NotebookPen,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import {
  deleteLessonNoteAction,
  recordLessonVisitAction,
  saveLessonNoteAction,
  setLessonBookmarkAction,
  setLessonCompleteAction,
} from "@/app/actions/learning";
import type {
  LearningActionCode,
  LearningActionResult,
  LessonLearningState,
} from "@/lib/learning/types";
import { cn } from "@/lib/utils";

type Message = { kind: "success" | "error"; text: string };

export function LessonLearningControls({
  lessonPath,
  state,
}: {
  lessonPath: string;
  state: LessonLearningState;
}) {
  const { dict } = useI18n();
  const router = useRouter();
  const t = dict.official.learning;
  const appT = dict.app.learning;
  const recordedPath = useRef<string | null>(null);

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [newNote, setNewNote] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    if (state.status !== "ready" || recordedPath.current === lessonPath) return;
    recordedPath.current = lessonPath;
    void recordLessonVisitAction(lessonPath);
  }, [lessonPath, state.status]);

  function errorText(code: LearningActionCode) {
    switch (code) {
      case "authRequired":
        return appT.signInDescription;
      case "emptyNote":
        return appT.noteRequired;
      case "noteTooLong":
        return appT.noteTooLong;
      case "invalidLesson":
        return appT.invalidLesson;
      default:
        return appT.errorGeneric;
    }
  }

  async function run(
    action: () => Promise<LearningActionResult>,
    successText?: string,
  ) {
    if (pending) return;
    setPending(true);
    setMessage(null);
    try {
      const result = await action();
      if (result.ok) {
        if (successText) setMessage({ kind: "success", text: successText });
        setNewNote("");
        setEditingId(null);
        router.refresh();
      } else {
        setMessage({ kind: "error", text: errorText(result.code) });
      }
    } catch {
      setMessage({ kind: "error", text: appT.errorGeneric });
    } finally {
      setPending(false);
    }
  }

  if (state.status !== "ready") {
    return (
      <section className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
            <NotebookPen className="size-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-[1.05rem] text-ink">{t.title}</h2>
            {state.status === "signInRequired" ? (
              <>
                <p className="mt-1 text-[0.76rem] leading-relaxed text-muted">
                  {t.signInDescription}
                </p>
                <ButtonLink
                  href={`/login?next=${encodeURIComponent(`/course/${lessonPath}`)}`}
                  variant="secondary"
                  size="sm"
                  className="mt-3"
                >
                  {t.signInCta}
                </ButtonLink>
              </>
            ) : (
              <p className="mt-1 text-[0.76rem] leading-relaxed text-muted">
                {t.unavailable}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <NotebookPen className="size-4 text-accent" aria-hidden="true" />
          <h2 className="font-display text-[1.05rem] text-ink">{t.title}</h2>
        </div>
        <Badge variant="outline">{t.privacy}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant={state.completed ? "subtle" : "secondary"}
          disabled={pending}
          onClick={() =>
            void run(
              () => setLessonCompleteAction(lessonPath, !state.completed),
              appT.saved,
            )
          }
        >
          <Check className="size-3.5" aria-hidden="true" />
          {state.completed ? t.completed : t.markComplete}
        </Button>
        <Button
          type="button"
          size="sm"
          variant={state.bookmarked ? "subtle" : "secondary"}
          disabled={pending}
          onClick={() =>
            void run(
              () => setLessonBookmarkAction(lessonPath, !state.bookmarked),
              appT.saved,
            )
          }
        >
          <Bookmark className="size-3.5" aria-hidden="true" />
          {state.bookmarked ? t.bookmarked : t.bookmark}
        </Button>
      </div>

      <div className="mt-5 border-t border-line pt-4">
        <h3 className="text-[0.82rem] font-semibold text-ink">{t.notesTitle}</h3>
        <p className="mt-1 text-[0.72rem] text-muted">{t.notesDescription}</p>

        {state.notes.length ? (
          <ul className="mt-3 space-y-2">
            {state.notes.map((note) => (
              <li
                key={note.id}
                className="rounded-xl border border-line bg-paper/50 p-3"
              >
                {editingId === note.id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editBody}
                      onChange={(event) => setEditBody(event.target.value)}
                      aria-label={t.editNote}
                      className="min-h-20 text-[0.78rem]"
                    />
                    <div className="flex flex-wrap gap-2">
                      <Button
                        type="button"
                        size="sm"
                        disabled={pending || !editBody.trim()}
                        onClick={() =>
                          void run(
                            () =>
                              saveLessonNoteAction(lessonPath, editBody, note.id),
                            appT.saved,
                          )
                        }
                      >
                        {t.saveNote}
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        disabled={pending}
                        onClick={() => {
                          setEditingId(null);
                          setEditBody("");
                        }}
                      >
                        <X className="size-3.5" aria-hidden="true" />
                        {t.cancelEdit}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="whitespace-pre-wrap break-words text-[0.78rem] leading-relaxed text-ink-soft">
                      {note.body}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2.5"
                        disabled={pending}
                        onClick={() => {
                          setEditingId(note.id);
                          setEditBody(note.body);
                          setMessage(null);
                        }}
                      >
                        <Pencil className="size-3" aria-hidden="true" />
                        {t.editNote}
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2.5 text-danger"
                        disabled={pending}
                        onClick={() =>
                          void run(() =>
                            deleteLessonNoteAction(lessonPath, note.id),
                          )
                        }
                      >
                        <Trash2 className="size-3" aria-hidden="true" />
                        {t.deleteNote}
                      </Button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-[0.74rem] text-muted">{t.noNotes}</p>
        )}

        <form
          className="mt-3 space-y-2"
          onSubmit={(event) => {
            event.preventDefault();
            void run(() => saveLessonNoteAction(lessonPath, newNote), appT.saved);
          }}
        >
          <Textarea
            value={newNote}
            onChange={(event) => setNewNote(event.target.value)}
            placeholder={t.notePlaceholder}
            aria-label={t.notePlaceholder}
            className="min-h-20 text-[0.78rem]"
          />
          <Button type="submit" size="sm" disabled={pending || !newNote.trim()}>
            {t.addNote}
          </Button>
        </form>
      </div>

      {message ? (
        <p
          role="status"
          className={cn(
            "mt-3 text-[0.72rem] font-medium",
            message.kind === "success" ? "text-accent-ink" : "text-danger",
          )}
        >
          {message.text}
        </p>
      ) : null}
    </section>
  );
}
