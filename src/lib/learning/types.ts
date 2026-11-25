export type LearningStatus = "ready" | "signInRequired" | "unavailable";

export type LearningActionCode =
  | "saved"
  | "authRequired"
  | "invalidLesson"
  | "invalidNote"
  | "emptyNote"
  | "noteTooLong"
  | "notFound"
  | "saveError";

export type LearningActionResult = {
  ok: boolean;
  code: LearningActionCode;
};

export type LessonNote = {
  id: string;
  lessonPath: string;
  body: string;
  createdAt: string | null;
  updatedAt: string | null;
};

export type LearningNote = LessonNote & {
  lessonTitle: string;
};

export type LessonLearningState = {
  status: LearningStatus;
  completed: boolean;
  lastVisitedAt: string | null;
  bookmarked: boolean;
  notes: LessonNote[];
};

export type LearningLesson = {
  path: string;
  title: string;
  completed: boolean;
  lastVisitedAt: string | null;
  bookmarked: boolean;
  noteCount: number;
};

export type LearningChapter = {
  key: string;
  label: string;
  total: number;
  completed: number;
  firstLessonPath: string;
  firstIncompletePath: string | null;
};

export type LearningSummary = {
  status: LearningStatus;
  signedIn: boolean;
  totalLessons: number;
  completedLessons: number;
  percent: number;
  chaptersTotal: number;
  chaptersCompleted: number;
  notesCount: number;
  bookmarksCount: number;
  continueLesson: LearningLesson | null;
  startLessonPath: string;
  chapters: LearningChapter[];
  recentLessons: LearningLesson[];
  bookmarks: LearningLesson[];
  notes: LearningNote[];
};
