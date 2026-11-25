# Projects: one coordinator, many desks (/claude-and-chatgpt-2/behind-the-screen/projects-one-team-lead-many-desks)

---
type: Document
title: "Projects: one coordinator, many desks"
description: "Claude's projects, behind the screen: a coordinator conversation that gives each job its own borrowed desk, a shared binder and shelf that outlast every desk, and what a project does not yet do for a business."
status: stable
order: 0.36
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Projects" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic, September 17, 2026)"
    resource: https://claude.com/blog/projects-redesigned
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

A Claude **project** is one conversation that starts **threads**, one for each job. [The Code tab](../tour/claude-code-tab.md) explains projects in full and shows how to set one up.[^projects-redesigned]

This page shows what happens behind the screen. Anthropic's own examples are mostly software work, but threads work on files you upload too, as the Brightline project here does.[^claude-projects]

## The team, with a coordinator

Use the team picture from this section, with one new person: a **coordinator**.

- **The coordinator is the project conversation.** It is Claude in a coordinating role: it hands out jobs instead of doing them. It starts a thread for each job and reads what each thread reports, not every step.[^claude-projects]
- **Each thread gets its own borrowed desk.** A thread is usually a full cloud session, with its own sandbox. Three jobs means three desks, working at the same time.[^claude-projects] Each thread still has its own organizer (the harness). The coordinator only hands out the jobs.
- **The shared binder** is the project instructions and the project memory, where a correction you ask Claude to remember goes. Cloud threads read both when they start.[^claude-projects]
- **The shared shelf** is the Library, with the files you add and the files the threads make.[^claude-projects]

![A project: one coordinator, many borrowed desks. You brief the coordinator once, and each job gets its own desk. On the left, You send all the work to one conversation. A two-way arrow joins You to the coordinator, the project conversation, which starts a thread for each job and reads their reports. A note says the coordinator has no connectors of its own. On the right, a panel called Borrowed desks, one cloud sandbox per thread, holds three threads: check the invoices, draft the owner's summary, and update supplier contacts. A note in the panel says your yes is asked inside each thread. Below, the coordinator connects to the Shared binder: project instructions sent to every new thread, and project memory, notes Claude writes and reads at the start. An arrow from the binder to the desks shows that the threads read it. The desks connect to the Shared shelf, the Library: files you add and files the threads make. A callout at the bottom says desks can still be cleared, the binder and the shelf stay, so save work in progress.](img/one-team-lead-many-borrowed-desks.png)

## The desks still get cleared

Each thread's desk is still temporary. If a thread cannot pick up where it stopped, it continues on a fresh copy, and changes that were never saved can be lost. So on long jobs, ask Claude to save its work in progress.[^claude-projects]

The binder and the shelf live outside every desk, so they survive.

## One desk can be on your own computer

A thread can also run on your computer, in one folder you pick ([The Code tab](../tour/claude-code-tab.md) shows the steps). It gets the brief but not the notes, meaning the project instructions but not the project memory, and it runs only while that computer is awake and connected.[^claude-projects]

## Words are not locks

- **Your yes is asked inside each thread,** not in the coordinator's chat.
- **A rule you type in chat is a preference.** Claude follows "run at most two threads at a time", but Anthropic says such rules are "not enforced settings".[^claude-projects]

So **the payment itself still needs the second signature** that the payment system checks ([Staying safe](staying-safe-a-locked-office-and-a-second-signature.md)).

A project belongs to one person, and no one else can open it or its threads. It has no organization controls yet, so today it is a tool for **your own** AI Worker.[^claude-projects]


[^claude-projects]: As verified on November 9, 2026, with the ownership rule checked again on November 21, 2026. Anthropic says a thread on your computer "starts with the project's instructions, but not with its memory files loaded" and "runs only while that computer is awake with Remote Control turned on", and that it needs Claude Code v2.1.280 or later on that computer. It says each thread is "usually a cloud session", that "every new thread starts with the project's instructions", that every cloud thread "reads the index file `MEMORY.md` when it starts", and that if a thread's sandbox cannot be resumed, it "continues from a fresh clone, so uncommitted changes can be lost". It says "the project conversation itself has no connectors", that preferences such as a thread limit are "instructions Claude keeps to, not enforced settings", that a project "belongs to one user", and that "You can't share a project or its threads with another user." It says cloud threads "work on GitHub repositories and on the files, folders, and Google Drive folders you upload to the project". Let Claude coordinate ongoing work with Projects, Anthropic.
[^projects-redesigned]: Anthropic announced projects that work as one conversation on September 17, 2026. It describes a project as having "threads that do the work and a coordinator that directs them". Projects redesigned: from folder to conversation, Anthropic.


