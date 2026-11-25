# BookMind AI

A premium bilingual reading companion for the official AI Agent Factory course book. The current build contains the Phase 1 interface, Phase 2 Supabase authentication, Phase 3 official course content with a private Personal Learning Dashboard, and database-enforced role-based access control. Uploads, reader AI, RAG answers, quizzes, flashcards and Urdu AI explanations remain clearly labelled as separate planned phases; none are presented as live features.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Without Supabase environment variables, the app runs in an honest preview mode. Auth forms validate and explain that no account is created; profile edits save only in the current browser. No page pretends that live authentication or cloud saving succeeded.

## Official course content

Phase 3 imports the complete official book from <https://agentfactory.piaic.org/> — all 460 documents listed in `/llms.txt` and `/llms-full.txt`. The importer stores each document's Markdown verbatim, including front matter, links, footnotes, tables and code fences. Concatenating the stored files reproduces the official document block hash. No lesson text, quotation, citation or page reference was invented, and no Urdu translation of official content was added.

The reader renders the official text with a custom token-based Markdown renderer. Relative `.md` links resolve to other documents in the course; remaining links and images point back to the official site. All 437 image references from the source were mapped to their official `_next/static/media` URLs. Article content always renders `dir="ltr"`, even when the interface is switched to Urdu RTL.

### Automatic import

```bash
npm run import:course
```

This fetches `/llms.txt` and `/llms-full.txt` from the official site and maps images from official pages. It also regenerates `src/lib/agentfactory/course-paths.ts`, the compact slug list used by Proxy to return a real 404 for unknown documents before the page starts streaming. The current imported build is `sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a`, with full-source SHA-256 `523e965d0c57f7577dbda52cbd1227a0eb3be10e0204bce111baec8ed5c8e735` and document-block SHA-256 `572ab375ca94f78f0a8d3c0302b08c111440bba03048e90628b205ca34554f7c`.

### Manual import

If the site is unavailable, download `llms.txt` and `llms-full.txt` from the official source, place them anywhere on your machine, and run:

```bash
npm run import:course -- --llms-file /path/to/llms.txt --full-file /path/to/llms-full.txt --no-assets
```

With `--no-assets`, the Markdown remains verbatim and image references are attributed to the official source instead of loading remote images. Details are also recorded in `src/content/agentfactory/IMPORT.md`.

## Personal Learning Dashboard

The `/learning` page and the controls inside each official lesson save only the signed-in user's own data to Supabase:

- completed lessons and completion percentage, derived from the 460-document official manifest;
- chapter progress, derived from lesson completion — there is no manual chapter table;
- personal notes on individual lessons;
- bookmarked lessons;
- Continue Learning from the last visited official lesson.

The supporting tables are `course_lesson_progress`, `course_lesson_notes` and `course_lesson_bookmarks` in `supabase/migrations/0002_learning.sql`. All three have row level security, owner-forcing triggers and no Admin policy: even an Admin can access only their own learning rows. Server actions recheck the session and accept only lesson paths that exist in the official manifest.

Without Supabase configuration, the dashboard and lesson controls show an honest sign-in-required state. They do not save local copies and do not claim that progress was synced. If Supabase is configured but the learning migration has not been applied, the UI reports that learning sync is unavailable.

This is a learning-progress feature only. It does **not** add AI tutoring, RAG, citations, Urdu AI explanations, quizzes or flashcards; those remain separate planned phases.

## Role-based access control

Roles are enforced in the database, not in frontend code:

- `public.admin_emails` contains exactly one address: `arsalanahmed101297@gmail.com`. Ordinary users have no read or write grant on this table.
- `public.profiles.role` is constrained to `user` or `admin`.
- The `set_profile_identity` trigger derives email and role from `auth.users` plus `admin_emails` on every insert. A client-supplied `role` is ignored.
- The `guard_profile_privilege` trigger prevents any update to `role` or `email`, including Admin edits.
- RLS lets users read and update only their own profile. Admin reads all profiles and may change only `full_name` and `bio`.
- `AuthUser` deliberately has no `role` field. The Admin navigation link is rendered by a server component only after a server-side role check; no role flag or founder email is sent to the browser.
- `/admin` redirects non-Admins before rendering. The Admin server action rechecks the role and relies on RLS as the final boundary.
- No service-role key is used anywhere in the app.

The founder address is seeded in the migration. If the founder account already existed before the migration, re-running the migration backfills that profile to `admin`. All other signups are forced to `user`.

## Create Supabase and connect credentials securely

1. **Create the project**
   - Sign in at <https://supabase.com/dashboard>.
   - Select **New project**.
   - Choose a project name, a strong database password, and the region closest to your users.
   - Wait until the project status is healthy.

2. **Copy the public API values**
   - Open **Project Settings → API**.
   - Copy **Project URL**.
   - Copy the **anon / public** key.
   - Do **not** copy or use the `service_role` key. It bypasses RLS and must never be placed in the app or browser.

3. **Configure local environment**
   - Copy `.env.example` to `.env.local` in the project root.
   - Set:

     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_PUBLIC_KEY
     NEXT_PUBLIC_SITE_URL=http://localhost:3000
     ```

   - `.env.local` is gitignored. Never commit it.
   - The anon key is public by design; RLS is the security boundary.

4. **Apply the database migrations**
   - Open **SQL Editor → New query** in Supabase.
   - Paste and run the entire contents of `supabase/migrations/0001_profiles.sql`, then the entire contents of `supabase/migrations/0002_learning.sql`. Both scripts are idempotent, so they are safe to re-run.
   - Confirm that `public.profiles` has RLS enabled and that `admin_emails` contains only the founder address.
   - Confirm that `course_lesson_progress`, `course_lesson_notes` and `course_lesson_bookmarks` all have RLS enabled. Learning sync stays unavailable until `0002_learning.sql` has been applied.

5. **Configure email authentication**
   - Open **Authentication → Providers → Email**.
   - Keep Email enabled and keep email confirmation enabled.
   - For each real signup, the user confirms from their email before signing in. No confirmation is faked by the app.

6. **Allow the auth callback**
   - Open **Authentication → URL Configuration**.
   - Set **Site URL** to `http://localhost:3000` for local development.
   - Add `http://localhost:3000/auth/callback` to **Redirect URLs**.
   - Before deployment, add the production site URL and `https://YOUR_DOMAIN/auth/callback` as well. Keep `NEXT_PUBLIC_SITE_URL` aligned with the active deployment URL.

7. **Start the app and verify roles**
   - Run `npm run dev`.
   - Sign up a test reader with a normal email address.
   - In **Table Editor → public.profiles**, confirm that the new row has `role = user`.
   - Sign in as the founder address after it exists in `auth.users`; re-run the migration if the founder profile was created earlier. Confirm that only that row has `role = admin`.
   - Sign in as a normal user and confirm that `/admin` redirects to `/dashboard` and that no Admin navigation link appears.
   - Open an official lesson, mark it complete, add a note and bookmark it. Confirm that `/learning` shows the change and that signing in on another device shows the same data.
   - Sign in as a second normal user and confirm that the first user's progress, notes and bookmarks are not visible. Sign in as the founder account and confirm the same isolation.

8. **Deploy securely**
   - Add only the three `NEXT_PUBLIC_...` values above to your hosting provider's environment settings.
   - Never add `SUPABASE_SERVICE_ROLE_KEY` to the browser or to a public frontend environment.
   - If you run multiple server instances, set a stable `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` in the server-only environment as well.

## Tests and QA

Run the production build first, because the route and visual checks start `next start`:

```bash
npm run build
npm run qa:rls
npm run qa:routes
npm run qa:visual
npm run qa:official
```

Or run all five together with `npm run qa`.

- `qa:rls` applies both migrations in embedded Postgres and checks Admin assignment, Normal User signup, self-promotion attempts, owner-only profile reads/edits, forced Normal User on direct insert, plus owner-forced learning rows, cross-user isolation, Admin isolation, anon denial and cascade deletes.
- `qa:routes` checks preview routes including `/learning`, server-side redirect behaviour with dummy Supabase configuration, server-action authorization source, learning DAL/action scoping, and absence of founder email/database internals in browser bundles.
- `qa:visual` uses Microsoft Edge through Playwright for desktop/mobile, light/dark, English/Urdu RTL screenshots of `/dashboard` and `/learning`, plus preview-mode E2E interactions and the lesson-level sign-in-required state. Screenshots are written to `qa/screenshots/` and ignored by git.
- `qa:official` verifies document count, source hashes, per-file hashes, verbatim reconstruction, image mapping, safe rendering, course routes, the LTR article inside RTL UI, and that learning progress is derived from the official manifest without changing lesson text.

Docker and a live Supabase project are not required for these local checks. They do not create accounts or claim successful live saves.

## What is implemented

- English LTR and Urdu RTL interfaces with a cookie-based language switcher.
- Light, dark and system themes with no first-paint flash.
- Supabase email/password sign-up, sign-in, session refresh, sign-out, and email confirmation callback.
- Server-side workspace protection when Supabase is configured.
- Database-enforced Admin/Normal User roles with RLS and immutable role/email triggers.
- Admin-only dashboard for viewing registered users and editing names/bios.
- Authenticated user shown in the sidebar, topbar, dashboard greeting, and profile.
- Profile name and bio saved to a row-level-secure Supabase `profiles` table when connected.
- Honest preview fallback when Supabase is not configured.
- Complete official AI Agent Factory course: 460 verbatim documents, grouped contents, source links and document-by-document navigation.
- Official Markdown rendered safely without raw HTML injection, with LTR article text inside the bilingual RTL-capable interface.
- Private Personal Learning Dashboard at `/learning` with real lesson progress, derived chapter progress, notes, bookmarks and Continue Learning when Supabase is connected.
- Lesson-level controls on official documents for completion, bookmarking and personal notes, with an honest sign-in-required preview state.
- Row level security on all learning tables, with owner-forcing triggers and no Admin access to other users' learning data.

## Still to build

- PDF uploads and the production PDF.js page reader.
- Indexing and retrieval for uploaded books.
- RAG tutor with source chapter or page references — a separate future phase, not active in this build.
- Urdu/English AI explanations and translation — a separate future phase; official lesson text is not translated.
- Quiz and flashcard engine with adaptive review — a separate future phase; quiz material in the official book remains reader-only.
- Synced highlights for sample books. Official-course progress, notes and bookmarks are already implemented above.
- Final end-to-end testing and deployment.

The remaining sample books in the library are public-domain classics used only to demonstrate the interface. They are not official course content.
