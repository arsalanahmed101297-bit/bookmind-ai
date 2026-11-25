-- BookMind AI — profiles, roles and row level security.
-- Run this in the Supabase SQL editor before enabling authentication.
-- It is idempotent: re-running it will not duplicate policies or triggers.

-- The only address that receives the Admin role. Stored in the database,
-- never in frontend code.
create table if not exists public.admin_emails (
  email text primary key
);

alter table public.admin_emails enable row level security;
revoke all on public.admin_emails from anon, authenticated;

insert into public.admin_emails (email)
values (lower('arsalanahmed101297@gmail.com'))
on conflict (email) do nothing;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null default '',
  full_name text not null default '',
  bio text not null default '',
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Support upgrades from the earlier Phase 2 table.
alter table public.profiles add column if not exists email text not null default '';
alter table public.profiles add column if not exists role text not null default 'user'
  check (role in ('user', 'admin'));

alter table public.profiles enable row level security;
grant usage on schema public to authenticated;
grant select, insert, update on public.profiles to authenticated;

-- Backfill existing rows before the immutable-role trigger is installed.
update public.profiles p
set email = u.email
from auth.users u
where p.id = u.id and (p.email is null or p.email = '');

update public.profiles p
set role = 'admin',
    full_name = case when coalesce(p.full_name, '') = '' then 'Arsalan Ahmed' else p.full_name end
from auth.users u
where p.id = u.id
  and lower(coalesce(u.email, '')) in (select email from public.admin_emails);

-- Security definer avoids recursive RLS checks on public.profiles.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- Force identity and role from auth.users + admin_emails on insert.
-- A client cannot choose its own role, even with a direct table insert.
create or replace function public.set_profile_identity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text;
begin
  select email into v_email from auth.users where id = new.id;
  new.email := coalesce(v_email, new.email, '');

  if lower(new.email) in (select email from public.admin_emails) then
    new.role := 'admin';
    if coalesce(new.full_name, '') = '' then
      new.full_name := 'Arsalan Ahmed';
    end if;
  else
    new.role := 'user';
  end if;

  return new;
end;
$$;

drop trigger if exists profiles_set_identity on public.profiles;
create trigger profiles_set_identity
  before insert on public.profiles
  for each row execute function public.set_profile_identity();

-- Role and email are immutable for every UPDATE path, including Admin edits.
create or replace function public.guard_profile_privilege()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.role is distinct from old.role then
    raise exception 'Profile role cannot be changed';
  end if;
  if new.email is distinct from old.email then
    raise exception 'Profile email cannot be changed from the client';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_guard_privilege on public.profiles;
create trigger profiles_guard_privilege
  before update on public.profiles
  for each row execute function public.guard_profile_privilege();

-- New auth users get a profile through a security definer trigger.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', ''),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- Drop both old and new policy names so this migration can be re-applied.
drop policy if exists "Profiles are readable by their owner" on public.profiles;
drop policy if exists "Profiles are insertable by their owner" on public.profiles;
drop policy if exists "Profiles are updatable by their owner" on public.profiles;
drop policy if exists "Users can read their own profile" on public.profiles;
drop policy if exists "Users can create their own profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Admins can read all profiles" on public.profiles;
drop policy if exists "Admins can update profiles" on public.profiles;

create policy "Users can read their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Admins can read all profiles"
  on public.profiles for select
  using (public.is_admin());

create policy "Users can create their own profile"
  on public.profiles for insert
  with check (auth.uid() = id and role = 'user');

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id and role = 'user');

create policy "Admins can update profiles"
  on public.profiles for update
  using (public.is_admin())
  with check (public.is_admin());
