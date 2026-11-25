import { readFile } from "node:fs/promises";

import { PGlite } from "@electric-sql/pglite";

const profilesMigration = await readFile(
  new URL("../supabase/migrations/0001_profiles.sql", import.meta.url),
  "utf8",
);
const learningMigration = await readFile(
  new URL("../supabase/migrations/0002_learning.sql", import.meta.url),
  "utf8",
);

const db = new PGlite();
let passed = 0;
let failed = 0;

function ok(name) {
  passed += 1;
  console.log(`PASS  ${name}`);
}

function bad(name, detail) {
  failed += 1;
  console.error(`FAIL  ${name}${detail ? ` — ${detail}` : ""}`);
}

function assert(condition, name, detail) {
  if (condition) ok(name);
  else bad(name, detail);
}

async function query(sql, params = []) {
  return db.query(sql, params);
}

async function expectThrows(name, sql, params = [], expectedText) {
  try {
    await query(sql, params);
    bad(name, "statement unexpectedly succeeded");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!expectedText || message.toLowerCase().includes(expectedText.toLowerCase())) {
      ok(name);
    } else {
      bad(name, message);
    }
  }
}

async function asUser(id, callback) {
  await query("select set_config('request.jwt.claim.sub', $1, false)", [id]);
  await db.exec("set role authenticated");
  try {
    return await callback();
  } finally {
    await db.exec("reset role");
    await query("select set_config('request.jwt.claim.sub', '', false)");
  }
}

try {
  await db.exec(`
    create schema if not exists auth;
    create table if not exists auth.users (
      id uuid primary key,
      email text,
      raw_user_meta_data jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    );
    create or replace function auth.uid()
    returns uuid language sql stable as $$
      select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid;
    $$;
  `);

  for (const role of ["anon", "authenticated"]) {
    try {
      await db.exec(`create role ${role}`);
    } catch {
      // Role already present.
    }
  }
  await db.exec(`
    grant usage on schema public to anon, authenticated;
    grant usage on schema auth to authenticated;
  `);

  await db.exec(profilesMigration);
  ok("profiles migration applies cleanly");
  await db.exec(learningMigration);
  ok("learning migration applies cleanly");
  await db.exec(learningMigration);
  ok("learning migration is idempotent");

  const ADMIN = "11111111-1111-4111-8111-111111111111";
  const READER = "22222222-2222-4222-8222-222222222222";
  const OTHER = "33333333-3333-4333-8333-333333333333";

  for (const [id, email] of [
    [ADMIN, "ARSALANAHMED101297@GMAIL.COM"],
    [READER, "reader@example.com"],
    [OTHER, "other@example.com"],
  ]) {
    await query(
      "insert into auth.users (id, email) values ($1, $2) on conflict (id) do nothing",
      [id, email],
    );
  }

  const rls = await query(`
    select relname, relrowsecurity
    from pg_class
    where relname in ('course_lesson_progress', 'course_lesson_notes', 'course_lesson_bookmarks')
  `);
  assert(
    rls.rows.length === 3 && rls.rows.every((row) => row.relrowsecurity === true),
    "all learning tables have row level security enabled",
    JSON.stringify(rls.rows),
  );

  const progressPath = "claude-and-chatgpt-2/overview";
  const secondPath = "preface";

  await asUser(READER, async () => {
    await query(
      `insert into public.course_lesson_progress (user_id, lesson_path, completed, completed_at)
       values ($1, $2, true, now())`,
      [READER, progressPath],
    );
  });
  ok("normal user can save own lesson progress");

  await asUser(READER, async () => {
    const result = await query(
      `insert into public.course_lesson_progress (user_id, lesson_path)
       values ($1, $2) returning user_id`,
      [OTHER, secondPath],
    );
    assert(
      result.rows[0]?.user_id === READER,
      "progress owner is forced from the session",
      result.rows[0]?.user_id,
    );
  });

  const foreignProgress = await asUser(OTHER, () =>
    query("select lesson_path from public.course_lesson_progress where user_id = $1", [READER]),
  );
  assert(foreignProgress.rows.length === 0, "normal user cannot read another user's progress");

  const foreignUpdate = await asUser(OTHER, () =>
    query("update public.course_lesson_progress set completed = false where user_id = $1", [READER]),
  );
  assert(
    Number(foreignUpdate.affectedRows ?? 0) === 0,
    "normal user cannot update another user's progress",
  );

  const foreignDelete = await asUser(OTHER, () =>
    query("delete from public.course_lesson_progress where user_id = $1", [READER]),
  );
  assert(
    Number(foreignDelete.affectedRows ?? 0) === 0,
    "normal user cannot delete another user's progress",
  );

  const adminProgress = await asUser(ADMIN, () =>
    query("select lesson_path from public.course_lesson_progress where user_id = $1", [READER]),
  );
  assert(adminProgress.rows.length === 0, "Admin cannot read another user's progress");

  await db.exec("set role anon");
  await expectThrows(
    "anonymous users cannot read progress",
    "select lesson_path from public.course_lesson_progress",
  );
  await db.exec("reset role");

  await asUser(READER, async () => {
    await expectThrows(
      "unsafe lesson paths are rejected",
      `insert into public.course_lesson_progress (user_id, lesson_path) values ($1, $2)`,
      [READER, "../admin/secrets"],
    );
    await expectThrows(
      "completion timestamp must agree with the flag",
      `insert into public.course_lesson_progress (user_id, lesson_path, completed, completed_at)
       values ($1, $2, true, null)`,
      [READER, "invalid/completion"],
    );
  });

  let noteId = "";
  await asUser(READER, async () => {
    const result = await query(
      `insert into public.course_lesson_notes (user_id, lesson_path, body)
       values ($1, $2, $3) returning id, user_id`,
      [READER, progressPath, "My private note"],
    );
    noteId = result.rows[0]?.id ?? "";
    assert(result.rows[0]?.user_id === READER, "normal user can write own lesson note", result.rows[0]?.user_id);
  });

  await asUser(READER, async () => {
    const result = await query(
      "insert into public.course_lesson_notes (user_id, lesson_path, body) values ($1, $2, $3) returning user_id",
      [OTHER, progressPath, "Forged note"],
    );
    assert(result.rows[0]?.user_id === READER, "note owner is forced from the session", result.rows[0]?.user_id);
    await expectThrows(
      "empty notes are rejected",
      "insert into public.course_lesson_notes (user_id, lesson_path, body) values ($1, $2, $3)",
      [READER, progressPath, "   "],
    );
  });

  const foreignNotes = await asUser(OTHER, () =>
    query("select id from public.course_lesson_notes where user_id = $1", [READER]),
  );
  assert(foreignNotes.rows.length === 0, "normal user cannot read another user's notes");

  const foreignNoteUpdate = await asUser(OTHER, () =>
    query("update public.course_lesson_notes set body = 'tampered' where id = $1", [noteId]),
  );
  assert(
    Number(foreignNoteUpdate.affectedRows ?? 0) === 0,
    "normal user cannot edit another user's note",
  );

  const foreignNoteDelete = await asUser(OTHER, () =>
    query("delete from public.course_lesson_notes where id = $1", [noteId]),
  );
  assert(
    Number(foreignNoteDelete.affectedRows ?? 0) === 0,
    "normal user cannot delete another user's note",
  );

  const adminNotes = await asUser(ADMIN, () =>
    query("select id from public.course_lesson_notes where user_id = $1", [READER]),
  );
  assert(adminNotes.rows.length === 0, "Admin cannot read another user's notes");

  await asUser(READER, async () => {
    const result = await query(
      "update public.course_lesson_notes set body = 'Updated note' where id = $1 returning body",
      [noteId],
    );
    assert(result.rows[0]?.body === "Updated note", "normal user can edit own note");
    await query("delete from public.course_lesson_notes where id = $1", [noteId]);
    ok("normal user can delete own note");
  });

  await asUser(READER, async () => {
    await query(
      "insert into public.course_lesson_bookmarks (user_id, lesson_path) values ($1, $2)",
      [READER, progressPath],
    );
    const result = await query(
      "insert into public.course_lesson_bookmarks (user_id, lesson_path) values ($1, $2) returning user_id",
      [OTHER, secondPath],
    );
    assert(result.rows[0]?.user_id === READER, "bookmark owner is forced from the session", result.rows[0]?.user_id);
  });

  const foreignBookmarks = await asUser(OTHER, () =>
    query("select lesson_path from public.course_lesson_bookmarks where user_id = $1", [READER]),
  );
  assert(foreignBookmarks.rows.length === 0, "normal user cannot read another user's bookmarks");

  const foreignBookmarkDelete = await asUser(OTHER, () =>
    query("delete from public.course_lesson_bookmarks where user_id = $1", [READER]),
  );
  assert(
    Number(foreignBookmarkDelete.affectedRows ?? 0) === 0,
    "normal user cannot delete another user's bookmarks",
  );

  const adminBookmarks = await asUser(ADMIN, () =>
    query("select lesson_path from public.course_lesson_bookmarks where user_id = $1", [READER]),
  );
  assert(adminBookmarks.rows.length === 0, "Admin cannot read another user's bookmarks");

  await asUser(READER, async () => {
    await query(
      "delete from public.course_lesson_bookmarks where user_id = $1 and lesson_path = $2",
      [READER, secondPath],
    );
    ok("normal user can remove own bookmark");
  });

  await query("delete from auth.users where id = $1", [READER]);
  const cascaded = await query(
    `select
       (select count(*) from public.course_lesson_progress where user_id = $1)
       + (select count(*) from public.course_lesson_notes where user_id = $1)
       + (select count(*) from public.course_lesson_bookmarks where user_id = $1) as remaining`,
    [READER],
  );
  assert(Number(cascaded.rows[0]?.remaining ?? -1) === 0, "learning rows cascade with the auth user");

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
} catch (error) {
  console.error("Learning RLS QA failed:", error);
  process.exitCode = 1;
} finally {
  await db.close();
}
