# 12.6 Many sessions at once: a coordinator, threads and side chats (/building-ai-workers/agentic-coding/many-sessions)

---
type: Document
title: "12.6 Many sessions at once: a coordinator, threads and side chats"
description: "How to split a coding job across a coordinator, worker threads, subagents and side chats without the parts colliding, and review each part."
status: stable
order: 312.6
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T11:29:55Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.6" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-05T11:29:55Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A small renovation has one site lead and a few skilled workers. The lead does not lay the tiles or wire the lights. The lead writes each worker a short job sheet, checks the work at the end of each day, and keeps the one plan that says what is done and what is next. If the lead tried to do every job alone, the day would end in a mess. If the workers never reported back, nobody would know whether the kitchen was finished.

**What you will learn.** How to split one coding job across several sessions, threads, helpers and side chats without the parts colliding, and how to check each part.

**Why it matters.** Parallel work saves time only when the parts can run on their own. Two agents editing the same file undo each other's work.

### When is it worth splitting a job?

When the parts can run on their own. [12.2](the-workspace.md) gave you the habit of one task per session. A bigger job is several tasks, and you can hand them to several sessions. But every session and subagent uses its own context, so a job split five ways can cost several times as much as one session. Split only the parts that really run on their own.

### Which kind of helper do I use?

Coding agents offer three patterns, and they are not the same thing. Not every product has all three ([12.8](both-ai-vendors.md#practice-many-sessions)).

| Pattern | What it is | Can you talk to it directly? | Good for |
| --- | --- | --- | --- |
| Subagent | A helper that one session starts for a side task. It works in its own context and hands back a summary. | Usually not. You direct it through the session that started it. | Searching, reviewing or checking something without filling the main context |
| Thread, or nested session | A full session that a **coordinator** session starts and gives a brief. It reports back to the coordinator. | Yes. You can open a thread and work in it. | A job with parts that each need their own back-and-forth |
| Side chat | A short conversation that can read the main session so far, but adds nothing back to it | Yes, and it stays out of the way | A quick question while the agent is busy: "How far along is it?" |

In the thread pattern, you talk to one session, the coordinator. It is the site lead. It splits the job, starts a thread for each part, and keeps track of what each thread reports. It sees the reports, not every step a thread took. That keeps the coordinator's own context small, so it keeps working well while the threads do most of the work. A thread can still start its own subagents.

![The title reads "A coordinator and its workers." The line below it reads "Delegate bounded tasks. Bring results back. Review the combined work." On the left, a box labeled "You", "Set the goal and limits. Review the final result.", sends a "Brief" to a dark box, "Coordinator", which "Splits the task", "Checks worker reports" and "Combines the results", and returns "Result + evidence" to You. The coordinator sends "Task + context" to two workers, each marked "Own context": Worker 1, "Calculate vendor totals", and Worker 2, "Update the README". Each returns "Report + evidence". A note reads "Workers may be subagents or separate task threads." A red box, "Side chat", reads "Explore a question separately. Bring useful findings back explicitly." The footer reads "Separate context does not guarantee separate files or permissions. Delegation and context sharing vary by tool."](img/coordinator.png)

*Figure 12.6. A coordinator and its workers. Workers may be subagents or separate threads, each with its own context, and each reports back with evidence. A side chat adds nothing to the main session, so bring back what you need yourself. Separate context does not mean separate files or permissions.*

### What does each worker need?

A real job sheet. Do not assume a thread or subagent has read your whole conversation. In most products a thread or new session starts from a brief, or from fresh context, plus the rules file, and messages between sessions carry only the text one agent writes to another. "Do the README" is not a brief. A thread needs what any brief needs: the outcome, context, format and constraints. Some subagents are **forks**, copies of the conversation so far, but still put everything a worker needs in its brief.

When something changes halfway, such as a new cutoff date, tell each worker that needs to know, or ask the coordinator to.

### How do I stop two sessions colliding?

Give each one its own files, as a site lead gives each worker a room. If they must work on the same files, give each its own **worktree**: a second copy of the folder, with its own line of commits, called a **branch**. You can ask the agent to set one up, and some desktop apps have a setting for it. When a session finishes, you review its branch and **merge** it, which adds its commits to the main line. Merge one at a time.

### What do I watch while they run?

The plan, not every line. Most desktop apps can show the agent's plan as a list that updates as steps finish. They can also show a panel, or a status line at the bottom of the window, with where the session runs, how full its context is, and which files it changed or produced. Read those first. A step that has been "in progress" for a long time, or a context that is nearly full, tells you where to look. When the agent finishes a reply, some apps show a short recap. Read it before the full output, and check it against the changes.

### What if the agent offers more help?

Decide as you would for any request. Some agents start a helper on their own when they judge that a task needs one, and each helper's work counts toward your usage limits. If you want a limit, say so in the brief: "use no helpers" or "ask before you start one". A fresh helper can give a second opinion, but it is still a second worker, and your check still decides.

An agent also often notices something else worth doing, such as a missing test, and some apps offer that as a suggested task in a separate session. Read what it would do and where it would run before you start it, and say no when it is not worth the cost.

**At work.** On Wednesday Ana has three things to do in `brightline-ap`: add a weekly total by vendor, update the README for the new command, and check the tests against the rules file. She starts one session as the coordinator and asks it to split the work. It starts two threads, one for the vendor totals and one for the README. Each works on its own files, so they cannot collide. For the test check it uses a subagent, because Ana only needs the summary. While the threads work, she opens the vendor totals thread, starts a side chat there, and asks whether anything has touched `data/`. The answer adds nothing to the thread's context. At the end she reviews each part against her check: the vendor totals must add up to Friday's total, $19,229.53. Then she asks for a commit of each, one at a time.

**The operating rule:** split a job only into parts that can run on their own, give every thread a real brief and its own files, use a side chat for questions, and review each part before you merge it.

**Practice it.** [Practice: many sessions](both-ai-vendors.md#practice-many-sessions), in your own tool, twenty minutes.


