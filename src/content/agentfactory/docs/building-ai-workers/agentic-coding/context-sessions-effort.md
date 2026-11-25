# 12.5 Context, sessions and choosing the effort (/building-ai-workers/agentic-coding/context-sessions-effort)

---
type: Document
title: "12.5 Context, sessions and choosing the effort"
description: "How a long session loses track, the four moves that manage context, and how to choose the model and effort for a task."
status: stable
order: 312.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:37Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.5" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-15T11:19:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** By the end of a long meeting, everyone remembers the last ten minutes clearly and the first ten only vaguely. Decisions made early get lost under later discussion. A good meeting leader stops, sums up what was agreed, and starts the next topic with that summary on one page.

**What you will learn.** Why a long session starts to forget, the moves that fix it, and how to choose a model and how hard it should think for each task.

**Why it matters.** A session that has lost its early rules makes the same mistake twice. A clean start from a written handover is often the quickest fix.

### Why does a long session get worse?

A coding agent has the same problem. Its **context** is everything in the session so far: your messages, the files it read, the commands it ran and their output. Context has a limit, and long before the limit, quality starts to drop. Instructions from early in the session get less attention. Old file contents that have since changed confuse it. This slow decline is often called **context rot**.

You will see it happen. The agent repeats a mistake you already corrected. It forgets a rule from the start of the session. It edits a file as if an earlier version were still current. Its answers get longer and less precise. When you see these signs, do not argue with it. Change the session.

### What can I do about it?

You have four moves.

| Move | What it does | When to use it |
| --- | --- | --- |
| Clear | Starts a fresh context in the same folder. The rules file is read again. | A new task, or a session that has gone wrong |
| Compact | Replaces the history with a summary and keeps going | Long tasks that are still going well |
| Resume | Opens an earlier session with its history | Continuing yesterday's task |
| Rewind | Goes back to an earlier point, undoing the agent's file changes after it | The last few steps went wrong |

![The title reads "Context rot: four moves." The line below it reads "When a session becomes cluttered, choose the move that fits the problem." Four numbered panels. 1, Compact, tagged "Too much history": "Summarize the conversation and continue. Keep key decisions, constraints, and next steps." 2, Clear, tagged "Need a fresh start": "Reset the conversation context. Bring a short handover. Project files remain." 3, Rewind, tagged "Took a wrong turn": "Return to an earlier point and try again. Check what is restored, because external actions may remain." 4, Resume, tagged "Returning to saved work": "Reopen an earlier session and continue. Existing context returns, including its clutter." A bar below reads "Before switching: save the goal, decisions, changed files, and next step." The footer reads "These moves manage context, and none guarantees better output. Exact behavior varies by tool."](img/context-rot.png)

*Figure 12.5. Context rot: four moves. When a session becomes cluttered, choose the move that fits the problem. Before you switch, save the goal, the decisions, the changed files and the next step. These moves manage context, and none of them guarantees better output.*

Most products also compact on their own when the context gets close to full. That keeps a session alive, but a summary loses detail. For important work, do what the meeting leader does. Ask the agent to write what is done and what is left into a file. Then clear, and start the next session from that file.

### Is rewinding the same as git?

No. Rewinding undoes the agent's own edits inside that session. It cannot undo a command that changed something outside the folder, such as a program it installed for the whole computer or a message it sent. Git is still your main undo. Have the agent commit when a step works, so every good state is a save point you can return to.

### How do I choose the model and the effort?

Match them to the task. Coding agents let you pick the model and how hard it thinks, often called **effort** or reasoning effort. More effort means more careful plans and fewer mistakes on hard problems. It also means slower answers and higher cost.

| Task | A sensible choice |
| --- | --- |
| Rename, format, fix a typo | A fast model, low effort |
| Add a script with tests, fix an ordinary bug | The default model and effort |
| A plan across many files, a hard bug, a design choice | The strongest model, high effort, in plan mode |

Start with the default. Raise the effort before you change to a stronger model. Lower both for routine work.

Some products also let a fast, low-cost model do most of the work and consult a stronger model only at the hard moments, so you pay for the strong model's judgment only where it matters. You can also give each helper agent ([12.6](many-sessions.md)) its own model: a fast one to search, a strong one to review. Chapter 29 shows how to measure what each choice costs.

**At work.** Ana's due-invoices session ran for an hour, and the script worked. Next she wanted a list of invoices whose vendor is missing from `vendors.csv`, which is a new task. So she stopped, as a good meeting leader does. She asked the agent to write a short `NOTES.md` with what the script does and the date rule, and to commit the work. Then she cleared the session and started the new task from the notes.

**The operating rule:** one task per session, have the agent commit every good state, and when the agent starts forgetting, clear and restart from a written handover rather than arguing with it.

**Practice it.** [Practice: context and sessions](both-ai-vendors.md#practice-context-and-sessions), in your own tool, fifteen minutes.


