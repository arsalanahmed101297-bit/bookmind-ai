# Appendix: versions and pull requests (/appendices/claude-and-chatgpt-2/appendix-versions-and-pull-requests)

---
type: Document
title: "Appendix: versions and pull requests"
description: "An optional page for anyone who writes with Claude: Claude saves each change as a version, a person sends it online from GitHub Desktop, and a second person approves it, so every change carries a record of who, what, why and when."
status: stable
order: 904.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:23Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Pull requests" ]
last_verified: 2026-11-16
steps_run: [] # Partly run on 16 November 2026, on the editor's own repository: when Claude committed, the editor could not see the changes in GitHub Desktop's Changes tab, so the page has Claude write and the reader commit (see the spec). Still to run on a clean machine: GitHub Desktop's labels that day (Changes, Commit to <branch>, Publish branch, Preview Pull Request, Create Pull Request, Push origin).
sources:
  - id: where-the-work-happens
    title: "Where the work happens, for the desk on your computer and its limits"
    resource: "../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md"
  - id: github-desktop-pr
    title: "Creating an issue or pull request from GitHub Desktop (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop
  - id: github-desktop-commit
    title: "Committing and reviewing changes to your project in GitHub Desktop (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop
  - id: github-desktop-branches
    title: "Managing branches in GitHub Desktop (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop
  - id: github-protected-branches
    title: "About protected branches (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
  - id: github-pr-comments
    title: "Commenting on a pull request (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request
  - id: github-revert
    title: "Reverting a pull request (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/reverting-a-pull-request
  - id: github-commit-email
    title: "Setting your commit email address (GitHub documentation, verified 2026-11-16)"
    resource: https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address
generated:
  at: 2026-11-21T00:02:23Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

You can skip this page on your first day. Read it before you share your work with a team. It is for anyone who writes with Claude: notes, policies, reports or book chapters, not only code. The files on this page are markdown files. If markdown is new to you, read [Chapter 0.2, Markdown](../../how-ai-works/markdown/overview.md) first.

## Why AI raises the stakes

Working with AI is different from working with a colleague, in four ways:

- **Speed.** Claude can rewrite a long report in minutes. That is useful, but a mistake spreads just as fast.
- **Confidence.** AI can present a wrong number, a deleted paragraph or a rule it invented as calmly as a right one.
- **Invisibility.** If AI edits the official copy directly, you cannot easily see what changed. You would have to read it all again.
- **Variation.** AI picks each word with some chance, so the same request can come back different each time, as [Chapter 0.1](../../how-ai-works/what-ai-actually-is/the-machine.md) explains. A request that gave a good result last week does not promise a good result today, and a rerun can quietly change parts you already checked. So you cannot trust the request. You check each result.

Most apps keep a history, so you can go back. A pull request adds two things: you see only what changed in this run, and the change waits for a person's yes before it becomes official.

## Claude did the work. Who sends it?

[Where the work happens](../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md) explains that Claude, on the desk on your computer, cannot push your work to GitHub: "You do that from your own computer."[^where-the-work-happens] At first this looks like a nuisance. It is really a gate. Claude can write your files. It cannot put them in the copy your team shares. A person must do that. On this page, Claude does not even save the versions: you do, after you have read what changed.

So two questions follow. Who decides what reaches the shared copy? And how would anyone know that they checked it first? This page answers both.

## Eight words

- **Repository.** A folder whose history git keeps. Every saved version of every file stays in it.
- **Main.** The official, approved version of the files. This is the copy everyone should trust.
- **Commit.** A save point, like the save points in a game. Each commit records which files changed, a one-line reason, who made it and when.
- **Branch.** A draft copy for one piece of work. The changes go on a branch, so main stays as it was until someone approves.
- **Push.** Sending your commits to the shared copy online, on GitHub. The first push of a new branch is called **publishing** the branch.
- **Pull request.** A request to add a branch to main. It shows exactly which lines changed, and it is where people comment and approve.
- **Review.** A person reads the changes in the pull request, then approves them or asks for fixes.
- **Merge.** Adding the approved branch to main.

## One change, from start to finish

At 10:00 you open GitHub Desktop and make a new branch, `add-checklist`, from **Current Branch**, then **New Branch**.[^github-desktop-branches] Then you open the Claude app. Your `team-notes` folder is connected, and it is a repository. You ask:

> Write `payment-run-checklist.md` as a short markdown checklist, and add one line to `README.md` that links to it. Do not commit or push. Suggest a one-line commit message.

At 10:03 Claude reports the two files and suggests "Add payment-run checklist".

At 10:05 you go back to GitHub Desktop. Its **Changes** tab shows the two files: the new checklist, with every line in green because every line is new, and `README.md`, with one added line.[^github-desktop-commit] You read both. This is the moment that matters. Then you type Claude's suggested message in the **Summary** box and click **Commit to add-checklist**. The commit carries your name, because you read it and saved it.

Then you click **Publish branch**, which sends the new branch to GitHub.[^github-desktop-branches] You click **Preview Pull Request** to see all the changes once more, then **Create Pull Request**, and GitHub Desktop opens the form on github.com in your browser.[^github-desktop-pr] You give it a title and open it.

At 11:00 a colleague opens the pull request and reads the same two files. They leave a comment on one line of the checklist: "Say who approves, not just 'someone'."[^github-pr-comments] You ask Claude to fix that line. The Changes tab shows the one changed line. You read it, commit it, and click **Push origin**. The pull request now shows the fix, under the comment that asked for it.

At 11:30 your colleague approves and merges. The checklist is now in main.

## Who does what

| Who | Where | What they do | What it leaves behind |
| --- | --- | --- | --- |
| Claude | The desk on your computer | Writes the files, suggests a commit message | Changed files in your folder |
| You | GitHub Desktop | Make the branch, read the changes, commit, publish, open the pull request | Commits and a pull request, under your name |
| A colleague | github.com | Reads the changes, approves, merges | The approval, with a name and a time |

With one setting, nothing reaches the shared copy without two people's yes: yours when you commit and publish, and your colleague's when they merge. That setting is a rule on the main copy that requires an approval before any merge (step 6 below). Without it, the second yes is a habit your team keeps, not a rule GitHub enforces. Either way, everything is recorded. Months later, anyone can open the pull request and see what changed, why, who wrote it, who approved it and when, without asking anyone.

| | Without a pull request | With a pull request |
| --- | --- | --- |
| AI makes an edit | It changes the official copy, and you hope you notice | It waits on a branch, where you can inspect it |
| You check the work | You read everything again | You read only the changed lines |
| Something is wrong after the merge | You try to remember what it said before | You click **Revert**, and GitHub opens a new pull request that undoes the change, reviewed like any other[^github-revert] |
| Someone asks why it changed | There is no record | The reason, the comments and the approval are kept with the change |

A pull request can also run automatic checks before anyone merges, such as spelling, broken links or format.

The gate only works if you read before you commit. Committing without reading is like signing a payment without looking at the amount. This is the person at the end of [the Panaversity team's method](../../claude-and-chatgpt-2/new-way-of-working/how-the-panaversity-team-works.md), now with a place to do the check and a record of their yes.

## Setting it up once

1. **Create a free GitHub account** at github.com.
2. **Install GitHub Desktop** and sign in with that account.
3. **Make a repository.** In GitHub Desktop, create a new one, or clone your team's, into a folder on your computer.
4. **Connect that folder to the Claude app**, as [Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md) shows.
5. **Check the name and email your commits will carry,** in GitHub Desktop's settings. Every commit shows them. To keep your own email address out of the history, use the private "noreply" address GitHub gives you in your email settings.[^github-commit-email]
6. **Require an approval.** On github.com, open the repository's Settings and add a rule for the main branch: a pull request, with at least one approval, before any merge. By default the rule does not apply to the repository's administrators, so include them too. On a free account the rule works for public repositories only. A private repository needs a paid plan: GitHub Pro, Team or Enterprise.[^github-protected-branches] If you cannot use the rule, agree as a team that nobody merges their own pull request.

## When a zip is enough

If you work alone on a one-off job, a zip file, as the [team page](../../claude-and-chatgpt-2/new-way-of-working/how-the-panaversity-team-works.md) describes, is enough. Versions earn their cost when a document matters and changes often, or must show who approved each change: a handbook or policy, standard procedures and checklists, a report built from sources, a team's library of prompts, a book.

So draft and keep your work in markdown, and make the Claude doc, the slides or the PDF at the end. Markdown is plain text, so a pull request shows each changed line. A Word file or a PDF shows only that the file changed. This is the rule from [Chapter 0.2](../../how-ai-works/markdown/what-comes-back.md): you change the page, never a copy. When the markdown changes, make the copy again. If a reviewer comments in the Claude doc or in Word, bring each accepted change back to the markdown, through a pull request. Some work does not fit in markdown, such as a model with formulas or a designed deck. Keep data as a CSV file, which versions well, and for the rest use the app's own version history.

This page shows the idea, not the whole tool. [Chapter 12](../../building-ai-workers/agentic-coding/overview.md) uses git with a coding agent in depth, and [Chapter 15](../../building-ai-workers/code-review/overview.md) shows how to review many changes when an AI writes most of them.

[^where-the-work-happens]: Where the work happens gives the rule and its source: the desk on your computer can download from GitHub but cannot upload to it, unless your settings allow all websites.
[^github-desktop-pr]: As verified on November 16, 2026, GitHub says you must push changes to a branch on GitHub before you create a pull request, and that Create Pull Request opens your default browser to take you to GitHub. Creating an issue or pull request from GitHub Desktop, GitHub.
[^github-desktop-commit]: As verified on November 16, 2026, GitHub says GitHub Desktop's Changes tab shows the changes to your files as you make them, and that you write a summary and click Commit to BRANCH. Committing and reviewing changes to your project in GitHub Desktop, GitHub.
[^github-desktop-branches]: As verified on November 16, 2026, GitHub says a branch you create must be published to make it available for collaboration on GitHub. Managing branches in GitHub Desktop, GitHub.
[^github-protected-branches]: As verified on November 16, 2026, GitHub says a protected branch can require a number of approving reviews before a pull request is merged, that by default the rules do not apply to administrators, and that protected branches are available in public repositories with GitHub Free, and in private ones with GitHub Pro, Team and Enterprise. About protected branches, GitHub.
[^github-pr-comments]: As verified on November 16, 2026, GitHub says reviewers can leave line-specific comments and suggestions on a pull request. Commenting on a pull request, GitHub.
[^github-revert]: As verified on November 16, 2026, GitHub says reverting a merged pull request creates a new pull request that reverts the original merge commit, which you then merge. Reverting a pull request, GitHub.
[^github-commit-email]: As verified on November 16, 2026, GitHub says you can use your GitHub-provided noreply email address for your commits. Setting your commit email address, GitHub.


