# 1.4 Continuity, execution and persistence (/ai-worker-paradigm/from-chatbots-to-ai-workers/continuity-execution-persistence)

---
type: Document
title: "1.4 Continuity, execution and persistence"
description: "Worker continuity, the execution environment and artifact persistence: three ideas a manager must keep apart."
status: stable
order: 101.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "01"
part: I
expert_status: required
concepts: [ "1.4" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Your family doctor is the same doctor for years, even though each visit happens in a different exam room. Your records are kept in a file the office can pull up any time. The doctor, the room and the file are three different things.

## Which three ideas must you keep apart?

Products mix together three ideas that a manager must keep apart.

- **Worker continuity** is what makes a worker the same worker over time: its identity, its responsibilities, the context it keeps, and the recurring work it does.
- **The execution environment** is where one piece of work runs. It is often temporary.
- **Artifact persistence** is where results are saved, and how you get them back.

Each of the three can change without the other two. A standing worker does not need one computer to keep running forever. A temporary machine does not mean the worker forgets who it is. And a finished spreadsheet on a machine is not a saved spreadsheet until it is saved in a place where you can get it back.

![Over time the worker stays the same while task environments come and go. Delivered results remain. Task 2's result, never delivered, may be lost.](img/continuity.png)

*Figure 1.3. Continuity, execution and persistence vary independently.*

## Where is each thing kept, and for how long?

Artifact persistence depends on where things are kept. [Where your work is saved](../../claude-and-chatgpt-2/build-something/where-your-work-is-saved.md#three-places) showed where a result can go. This table adds where the work runs:

| Place | What lives there | How long it lasts |
| --- | --- | --- |
| Your account or workspace | Transcripts, delivered outputs, documents, projects, schedules, memory | Durable. Some of it is personal, some is shared by your organization |
| The execution environment | Working files, installed tools, work in progress | Often temporary. Check each product |
| Your own computer | Your folders, browser sessions and apps | As long as you keep them. Cloud work reaches them only through a desktop app, with your permission |

![Three places for one piece of work. First, where the work runs: a cloud sandbox, a temporary machine in the AI vendor's cloud that holds working files, installed tools and work in progress, often temporary. Second, where your files live: your account or workspace, which holds transcripts, delivered outputs, documents, projects, schedules and memory and is durable, and your own computer, with your folders, browser sessions and apps, kept as long as you keep them. Third, what needs the desktop app open: cloud work reaching your computer. With the desktop app open, the work goes from the cloud sandbox through the app to your own computer and reaches your folders and apps, with your permission. With the app closed, there is no way in, and the work cannot reach the files on your computer.](img/three-places.png)

*Figure 1.4. Where the work runs, where your files live, and what needs the desktop app open.*

## What is the rule for anything you need later?

**Save anything you need later to a known place, and check that you can get it back. Know that place's retention and access rules: how long it keeps things, and who can reach them.** Maria's spreadsheet, in the [chapter's opening story](overview.md), failed this rule. Her summary survived because it was part of the conversation.

## Is a saved file the official record?

No. Durable is not the same as authoritative. Your memory lasts, and so do a project's instructions and files. Neither is your company's official record of policy, and neither is the live state of the ledger. [Chapter 4](../the-architecture-in-one-picture/overview.md) shows where those are kept.


