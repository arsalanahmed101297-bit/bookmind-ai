# Work that runs while you sleep (/claude-and-chatgpt-2/behind-the-screen/work-that-runs-while-you-sleep)

---
type: Document
title: "Work that runs while you sleep"
description: "Scheduled tasks: cloud tasks and desktop tasks, why each run usually starts fresh, and three rules for writing a task that a stranger could follow."
status: stable
order: 0.33
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Scheduled tasks" ]
last_verified: 2026-11-09
sources:
  - id: claude-code-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: claude-routines
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## What is a scheduled task?

A **scheduled task** is a saved instruction that runs by itself. For example: "Every Friday at 9 a.m., prepare this week's payment run and save the spreadsheet to our shared Drive." Think of it as a job on the calendar of the organizer (the harness).

There are two kinds:[^claude-code-scheduled-tasks],[^claude-routines]

| Kind | Where it runs | Your computer must be on? |
| --- | --- | --- |
| **Cloud task** | On a borrowed desk in the cloud | No |
| **Desktop task** (the app also calls it a local task) | On your own computer, through the Claude desktop app | Yes, with the app open and the computer awake |

ChatGPT has scheduled tasks too. The Tour's [Side by side](../tour/side-by-side.md) page compares the two apps.

## What does a run remember?

Each run usually starts a **brand-new session**. It does not remember the chat that created it or the last run.[^claude-code-scheduled-tasks],[^claude-routines] Think of a stranger who sits down at a new desk every Friday. They know only the written instructions and what was saved somewhere lasting, like Drive.

![A new desk for every run: each run usually starts fresh, and only what you saved somewhere lasting carries over. At the top, a box for the scheduled task, your written instruction and a time. Arrows lead from it to three boxes, Run 1, Run 2 and Run 3. Each is a fresh session, with no chat and no last run. Each run has a two-way arrow, labeled read and write, to a wide gold box below: saved somewhere lasting, such as Drive, a shared sheet or GitHub. Under it are two boxes. Cloud task: keeps going with your laptop closed. Desktop task: needs the app open and the computer awake. The callout at the bottom says: write the brief for a stranger, and save the results outside the desk.](img/a-new-desk-for-every-run.png)

## Which three rules follow?

1. **Write the instruction so a stranger could follow it.** Say exactly what to do and what "done" looks like.
2. **Save results somewhere lasting,** like Drive or a shared document, so the next run can find them.
3. **Decide which actions need your yes.** A scheduled task runs while you are away. A cloud task usually does not stop to ask you before each step, and its actions through your connectors appear as you.[^claude-routines] So give it connectors and settings that can only draft, not send or pay, and let a person approve the important actions.


[^claude-code-scheduled-tasks]: As verified on November 9, 2026, Anthropic says a local task "only fires while the app is open and your computer is awake", and a cloud task "runs even when your computer is off". It also says a desktop task "starts a fresh session when a task is due". Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^claude-routines]: As verified on November 9, 2026, Anthropic says a cloud run's session "begins in auto mode unless auto mode is unavailable", that "You don't choose a permission mode when you create the task", and that Claude "can use an included connector during a run, including writes". It says a run still stops for some actions, such as ones that match an ask rule, and that "Anything a scheduled task does through your connected GitHub identity or connectors appears as you." It says each cloud run opens as a new session, and that inside a project a run can continue an existing thread instead, which is why this page says "usually". Automate work with scheduled tasks, Anthropic.


