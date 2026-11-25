# One place for Northgate (/claude-and-chatgpt-2/case-4-nishas-month-end/one-place-for-lakeshore)

---
type: Document
title: "One place for Northgate"
description: "In one afternoon the firm builds the setup: a project for the rules, a skill for the method, files where a job can reach them, a borrowed desk for the matching, four artifacts for the result, and a scheduled task for the time."
status: stable
order: 0.82
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "One place" ]
last_verified: 2026-11-12
sources:
  - id: claude-projects
    title: "Anthropic, Let Claude coordinate ongoing work with Projects (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: skills
    title: "Anthropic, How to create custom skills (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: local-task
    title: "Anthropic, Schedule recurring tasks in Claude Code Desktop (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: sandbox
    title: "Anthropic, Claude Cowork architecture overview (Claude Help Center)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: deck-export
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: artifact-link
    title: "Anthropic, Share session output as artifacts (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: no-source
    title: "Anthropic, Get started with Claude Sheets (Claude Help Center)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: tag-routine
    title: "Anthropic, Set up routines (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/users/proactivity
  - id: docs-outside
    title: "Anthropic, Get started with Claude Docs (Claude Help Center)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Monday afternoon

> **New words on this page.**
>
> - **Run note:** a few lines Claude saves after each run.
> - **Closing balance:** the money in an account at the end of the last day.


Nisha, Sana and Hamza sat at Hamza's screen, in the Claude desktop app.

Then they built the parts, one at a time. Each part answers one question ([Exhibit 2](exhibits.md#exhibit-2-the-setup-part-by-part)).

## 1. Where do the rules live? In a project

They made a project called **"Northgate month-end"**. A **project** keeps files and **instructions** together. Instructions are text that every new thread in the project starts with. A **thread** is one job that Claude runs inside the project.[^claude-projects]

A project belongs to one person, and nobody else can open it ([Projects](../behind-the-screen/projects-one-team-lead-many-desks.md#words-are-not-locks)). The firm's Team plan does not offer projects yet.[^claude-projects]

**So Hamza made the project under a login of his own**, on a personal Claude plan that is separate from the firm's Team plan, because he would run the job each month. Nisha and Sana never open it. They see its results where the firm already keeps its work: in the shared drive.

Nisha wrote the instructions in plain sentences ([Exhibit 3](exhibits.md#exhibit-3-the-projects-instructions)). They said who the client is, what the pack contains, where the files are, what the bank's minimum is, and what Claude must never do: *"Never send anything to anyone. Never change a file in the drive that you did not make. If the bank and the books do not agree, say so in the first line."*

*"Now nobody pastes the rules again,"* she said. *"And when a rule changes, we change it in one place."*

## 2. Where does the method live? In a skill

Sana had a way of writing a month-end memo. She had saved it as a **skill**: instructions that teach Claude to do one kind of job her way.[^skills]

She gave Hamza a copy, and he turned it on in his own Claude account, where every thread in his project could use it.[^claude-projects] Like her weekly reconciliation skill in [Case 3](../case-3-nishas-firm/sanas-skill.md), it set the memo's first line. That line says **READY** when the bank and the books agree, and **NOT READY** when they do not. Anything the bank shows and the books do not yet show is listed under it, as an **unrecorded item** ([Exhibit 4](exhibits.md#exhibit-4-sanas-skill)). Case 3 called this an open item.

*"A project is about one client,"* said Sana. *"A skill is about one kind of work. My memo method is the same for every client, so it is a skill."*

## 3. Where are the files? Where they already are

The job needed two kinds of file.

- **The files that change every month.** The bank's lines and the ledger. The worker already saved the bank's lines to the **shared drive** every Friday, and Northgate's ledger was there too. Hamza had connected the drive to his Claude account. So Claude could read them there.
- **The files that do not change.** Dana had emailed the bank's letter, the layout the bank wanted and last quarter's pack from her old accountant. Hamza had saved them in a folder on his computer. In the desktop app, he let Claude read that folder.

Hamza wanted to keep everything in his folder. Nisha asked one question. *"What can read your folder when your laptop is closed?"*

Nothing reliable. Claude reaches a folder on a computer only through the open desktop app, as [Where the work happens](../new-way-of-working/where-the-work-happens.md#what-this-means-for-you) says.[^local-task] The worker in Slack cannot reach it at all. The morning bank check had to run at 9 a.m. every day, whether Hamza's laptop was open or not. So the monthly files stayed in the shared drive. There, any of the three people, and any job, could read them. Hamza also uploaded copies of Dana's three files to the project, so the setup did not depend on his laptop.

The folder kept one job. Hamza downloaded the bank's own statement, its official list of the month's lines, into the folder himself. Later he would compare the setup's work with this file. So his test would not depend on the setup's own work.

![Where a file lives decides who can read it. A table with two columns, a folder on your computer and a connected shared drive. You, in the desktop app: yes for both. A job started from the desktop app: only while the app is open for the folder, yes for the drive. The worker's routine in Slack: no for the folder, yes for the drive. When your laptop is closed: no for the folder, yes for the drive. A band at the foot says your folder is for work at your desk, and a connected drive is for work that runs without you.](img/where-a-file-lives.png)

## 4. Where does the heavy work happen? On a borrowed desk

Nobody can match 3,400 lines well by reading them. Claude does it another way. It writes a small program and runs it on what this book calls a [borrowed desk](../new-way-of-working/where-the-work-happens.md), a temporary computer in the cloud that is wiped clean after one session.[^sandbox]

*"Then next month it starts from nothing,"* said Hamza.

*"The desk does,"* said Nisha. *"So the method must not live on the desk."* They added one line to the project's instructions: the matching rules, in words, and *"save the matched list to the drive folder for this month"*.

## 5. Where is the result? In four artifacts

The pack would be four artifacts: a **sheet** for the numbers, a **doc** for the memo, a **deck** for the three slides, and a **design** (a one-page picture) for the cover. Hamza made an empty one of each, and pasted their links into the project's instructions. The pieces were his, like the project. So after each run, he would save the memo, the slides and the cover as PDF files in the month's folder in the drive. Nisha and Sana would read the pack there.

Why artifacts, and not ordinary files? Every run would update the same piece, so nobody had to guess which copy was current. And the memo, the slides and the cover can each be saved as a PDF file, to read and to send.[^deck-export]

Pasting the links into the instructions matters. A new thread makes a new artifact unless it is given the link of an old one.[^artifact-link] With the links in the instructions, every run should update the same four pieces. If a run ever made a new piece instead, Hamza would change the link in the instructions, so the list always showed which piece was current.

Sana noticed one more thing. A doc or a deck cannot read its numbers from a sheet.[^no-source] *"So the figure is written into the sheet, the memo and the slides. They are three copies."*

*"Written by one run, from one result,"* said Nisha. *"And checked by you. That is your first test: do the pieces agree?"*

## 6. When does it run? On a schedule

The last part was time. The pack goes out once a month, but the bank keeps working every day. So the firm wanted a second look, **the morning bank check**: a job that looks at the bank's lines again each morning.

The worker in Slack could already read the bank's lines. So Nisha gave the job to the worker, as one more **routine**. A routine is a [scheduled task](../behind-the-screen/work-that-runs-while-you-sleep.md) that the worker in Slack runs.[^tag-routine] Her instruction said:

- Every morning at 9:00 a.m., download the month's bank lines again.
- Start the day after a pack is sent. Stop after Dana's meeting with Northgate's bank.
- Compare the bank's closing balance with the one in the latest run note in the drive.
- Post what you find in the firm's channel. *"If something changed, say what. Change nothing in the pack."*

A routine is allowed to do whatever the worker is allowed to do.[^tag-routine]

### Why the project cannot send

No thread in the project can send an email. The worker can send email, and Nisha wanted nothing in the project to be able to send the pack. A connected app belongs to an account, not to one project. Every thread in every project Hamza owns can use all the apps connected to his account.[^claude-projects] So his account had the shared drive and nothing else: no email, no Slack. When a run needed new bank lines, a person asked the worker to download them. The worker is set up separately, in its Slack channel.

![One place for Northgate: the parts, joined for one job. On the left, three boxes feed the run: the project, the client's rules written once; the skill, the firm's method; the shared drive, the month's files. In the middle, the run, on a borrowed desk in the cloud, where Claude matches the lines with a small program and then builds the pack; the desk is cleared afterward. On the right, four pieces: the sheet, the memo, the slides and the cover. Below, two boxes beside the run: a folder on Hamza's computer, with the bank's statement he downloads himself, for tests the setup never touched; and the worker's routine in Slack, which every morning compares a fresh download with the latest run note. A band at the foot says people check, approve by name and tell the client.](img/one-place-for-lakeshore.png)

## What it cost

The afternoon took the three of them about two hours each. Nothing in it was programming. Every part was a sentence, a file or a setting.

The pack would go to Dana as PDF files, which a person would send from their own work address.[^docs-outside] Only the worker sends from `reports@`.

On Monday evening the setup had never run. Nisha did not trust it yet. *"Tomorrow we find out what we forgot."*

[^claude-projects]: As verified on November 21, 2026, Anthropic says "A project belongs to one user. You can't share a project or its threads with another user" and "Projects aren't offered on Team or Enterprise plans yet." It says "every new thread starts with the project's instructions", that cloud threads load "the skills you enable there", in your claude.ai account, and that "Every cloud thread can use all of them with no per-project setup", meaning your account's connectors. Let Claude coordinate ongoing work with Projects, Anthropic.
[^skills]: As verified on November 11, 2026, Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". How to create custom skills, Anthropic.
[^local-task]: As verified on November 9, 2026, Anthropic says a task on your own computer "only fires while the app is open and your computer is awake", and a cloud task "runs even when your computer is off". Whether a cloud session started from the desktop app can also use the folder while the app is open, this case has not checked; the practical run sheet tests it. Reading a folder on your computer needs a paid plan, as [Set up the apps](../new-way-of-working/set-up-the-apps.md) says. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^sandbox]: As verified on November 9, 2026, Anthropic says that in cloud sessions "the agent loop and code execution run in an isolated, temporary sandbox on Anthropic-managed infrastructure", and that each session's sandbox is "created when the session starts and destroyed when it ends". Claude Cowork architecture overview, Anthropic.
[^deck-export]: As verified on November 12, 2026, Anthropic says "Decks export to PowerPoint and PDF, or go straight to Google Slides as editable files." A doc exports as Word, PDF or Markdown, and a design as a PDF. What are artifacts and how do I use them?, Anthropic.
[^artifact-link]: As verified on November 11, 2026, Anthropic says that to update an artifact from a different session, you give Claude its link: "Without either, a new session creates a new artifact instead of updating one." Anthropic's guide says this about artifacts made in the Code tab. This case assumes the same for a thread in a project, and has not tested it. Share session output as artifacts, Anthropic.
[^no-source]: As verified on November 12, 2026, Anthropic says "Sheets can't pull live data from connected apps, and docs, decks, and dashboards can't use a sheet as a data source." Get started with Claude Sheets, Anthropic.
[^tag-routine]: As verified on November 10, 2026, Anthropic says a routine in Claude Tag "uses that channel's connections with the same permissions as a typed request." [Case 3](../case-3-nishas-firm/overview.md) describes the worker and its channel. Set up routines, Claude Tag docs, Anthropic.
[^docs-outside]: As verified on November 13, 2026, Anthropic says "Opening a shared doc requires a Claude account." Dana and the bank have no Claude accounts. Get started with Claude Docs, Anthropic.


