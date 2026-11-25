-- BookMind AI — personal learning data for the official course.
-- Run after 0001_profiles.sql. Idempotent: safe to re-run.
--
-- Every row belongs to exactly one auth user. There is deliberately no Admin
-- policy here: even an Admin can only read and change their own learning data.

create table if not exists public.course_lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_path text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  last_visited_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_path),
  constraint course_lesson_progress_path_check
    check (
      char_length(lesson_path) between 1 and 240
      and lesson_path ~ '^[a-z0-9-]+(/[a-z0-9-]+)*$'
    ),
  constraint course_lesson_progress_completion_check
    check ((completed and completed_at is not null) or (not completed and completed_at is null))
);

create table if not exists public.course_lesson_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_path text not null,
  body text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint course_lesson_notes_path_check
    check (
      char_length(lesson_path) between 1 and 240
      and lesson_path ~ '^[a-z0-9-]+(/[a-z0-9-]+)*$'
    ),
  constraint course_lesson_notes_body_check
    check (char_length(btrim(body)) between 1 and 10000)
);

create table if not exists public.course_lesson_bookmarks (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_path text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, lesson_path),
  constraint course_lesson_bookmarks_path_check
    check (
      char_length(lesson_path) between 1 and 240
      and lesson_path ~ '^[a-z0-9-]+(/[a-z0-9-]+)*$'
    )
);

create index if not exists course_lesson_progress_recent_idx
  on public.course_lesson_progress (user_id, last_visited_at desc);
create index if not exists course_lesson_notes_lesson_idx
  on public.course_lesson_notes (user_id, lesson_path, created_at desc);

revoke all on public.course_lesson_progress from anon, authenticated;
revoke all on public.course_lesson_notes from anon, authenticated;
revoke all on public.course_lesson_bookmarks from anon, authenticated;

grant usage on schema public to authenticated;
grant select, insert, update, delete on public.course_lesson_progress to authenticated;
grant select, insert, update, delete on public.course_lesson_notes to authenticated;
grant select, insert, update, delete on public.course_lesson_bookmarks to authenticated;

-- The owner is always derived from the session. A client-supplied user_id is
-- ignored, so a forged value cannot attach a row to another account.
create or replace function public.set_learning_owner()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.user_id := auth.uid();
  return new;
end;
$$;

revoke all on function public.set_learning_owner() from public;
grant execute on function public.set_learning_owner() to authenticated;

create or replace function public.touch_learning_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke all on function public.touch_learning_updated_at() from public;
grant execute on function public.touch_learning_updated_at() to authenticated;

do $$
declare
  learning_table text;
begin
  for learning_table in
    select unnest(array['course_lesson_progress', 'course_lesson_notes', 'course_lesson_bookmarks'])
  loop
    execute format(
      'drop trigger if exists %I on public.%I',
      learning_table || '_set_owner', learning_table
    );
    execute format(
      'create trigger %I before insert or update on public.%I for each row execute function public.set_learning_owner()',
      learning_table || '_set_owner', learning_table
    );
  end loop;
end;
$$;

drop trigger if exists course_lesson_progress_touch_updated_at on public.course_lesson_progress;
create trigger course_lesson_progress_touch_updated_at
  before update on public.course_lesson_progress
  for each row execute function public.touch_learning_updated_at();

drop trigger if exists course_lesson_notes_touch_updated_at on public.course_lesson_notes;
create trigger course_lesson_notes_touch_updated_at
  before update on public.course_lesson_notes
  for each row execute function public.touch_learning_updated_at();

alter table public.course_lesson_progress enable row level security;
alter table public.course_lesson_notes enable row level security;
alter table public.course_lesson_bookmarks enable row level security;

drop policy if exists "Users manage their own lesson progress" on public.course_lesson_progress;
create policy "Users manage their own lesson progress"
  on public.course_lesson_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users manage their own lesson notes" on public.course_lesson_notes;
create policy "Users manage their own lesson notes"
  on public.course_lesson_notes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users manage their own lesson bookmarks" on public.course_lesson_bookmarks;
create policy "Users manage their own lesson bookmarks"
  on public.course_lesson_bookmarks for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
