# 4.9 Isn't the missing permanent machine a gap? (/ai-worker-paradigm/the-architecture-in-one-picture/worker-is-the-records)

---
type: Document
title: "4.9 Isn't the missing permanent machine a gap?"
description: "Why the picture has no standing computer in it: every kind of continuity a permanent machine would give already has a governed home, and what that design costs."
status: stable
order: 104.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.9" ]
last_verified: 2026-10-14
review_by: 2026-11-12
sources:
  - id: anthropic-cowork-architecture
    title: "Unified Claude Security Best Practices (Anthropic Trust Center, version 1.3.6, 7 November 2026, verified 2026-11-18)"
    resource: https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-10-15)"
    resource: https://openai.com/index/introducing-dots/
  - id: anthropic-duet
    title: "Claude Duet (Anthropic, 21 October 2026, verified 2026-10-22)"
    resource: https://claude.com/resources/articles/claude-duet
  - id: openclaw
    title: "OpenClaw README (OpenClaw Foundation, GitHub, MIT, verified 2026-10-22)"
    resource: https://github.com/openclaw/openclaw
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**The worker needs no permanent machine, because everything that must last is kept in its records.** Behind the Screen called the machine the borrowed desk, and showed [why it gets cleared](../../claude-and-chatgpt-2/behind-the-screen/why-the-borrowed-desk-gets-cleared.md). [Chapter 1](../from-chatbots-to-ai-workers/both-ai-vendors.md) showed the same in Claude: every run gets a fresh sandbox, the isolated computer a task works on,[^anthropic-cowork-architecture] and between a scheduled task's runs there is no machine at all.[^anthropic-scheduled-tasks] A human worker has a desk that stays. Surely an AI Worker needs one too?

**In everyday life.** A hospital runs on twelve-hour shifts. The nurse who cared for a patient this morning goes home, and a different nurse takes over tonight. Care continues anyway, not because any nurse stays, but because the chart stays. The next nurse starts from the record, as the next cook starts from the order tickets ([4.4](ssor-tracks.md)). A hospital where continuity lived in one nurse's head would be one sick day away from losing the patient's history.

![The chart stays. Three panels. One, the day nurse works from 7 a.m. to 7 p.m., then goes home, and carries nothing the night shift needs. Two, the chart stays on the wall day and night, a patient record with every observation, every dose and every decision, each with its time. Three, the night nurse works from 7 p.m. to 7 a.m., reads the chart first to see what has happened, and continues the care. The banner: care continues because the chart stays, not because any nurse stays. A footer: a worker's records are its chart.](img/chart-stays.png)

*Figure 4.6. The chart stays.*

## What is the worker, if not the machine?

**The worker is its records, tied together by the Role Contract ([4.1](five-layers.md)).** It was never the machine. Look at the picture again: no standing computer appears in it, because everything a permanent machine would keep already has a home the company governs.

- What the worker knows lives in the approved knowledge (KSoR).
- What has happened so far, every run, every decision, every handoff, lives in the case files (SSoR), one for each matter.
- What it may change, and what it has changed, lives at the governed door (DSoR).
- What wakes it is not a machine idling overnight. It is a trigger: when a job is due, it starts a fresh machine, which reads the pending work from the case files ([Chapter 9](../../managing-ai-workers/work-that-runs-without-you/overview.md)).

## Why build a worker this way?

A worker built this way can be audited, because every run's inputs, steps and evidence are in its records. It can be handed to a new owner, improved or replaced, because nothing about it is trapped in one machine's state. And it is harder to attack, because nothing worth stealing lives on a machine nobody governs.

![A worker is its records, not its machine. The same work is done on a new machine each day, using the same records. Monday, Tuesday and Wednesday, each the same chain. At seven a trigger fires, a fresh machine starts, it reads the records, KSoR, SSoR and DSoR, it writes its steps and evidence back, and at seven forty the machine is destroyed when the work is done. Beside them, one machine that never stops. Files pile up on it. Context exists only inside it. When it drifts or dies, the history goes with it. The banner asks what would be lost if the machine were destroyed tonight, and answers: nothing that matters.](img/worker-is-the-records.png)

*Figure 4.7. A worker is its records, not its machine. If the machine were destroyed tonight, what would be lost?*

## What goes wrong with a standing machine?

**The risk is not that the machine persists, but that whatever lives only on it answers to nobody's records.** A standing machine collects things that nobody governs. Files pile up on it. Context exists only inside it. When it drifts or dies, the worker's history drifts or dies with it. That is the quiet risk in the always-on agents Chapter 1 described: a dot,[^openai-dots] Duet[^anthropic-duet] or OpenClaw.[^openclaw] The same question applies to any harness that keeps a session's files and history on the server between interactions, whichever AI vendor runs it ([4.8's product reference](both-ai-vendors.md#product-reference)).

## What does it cost?

Three things, and each has to be designed for.

- **Rebuilding context every run.** A fresh machine reads what the run needs from the records, not the whole record. That costs tokens, and so usage on your plan, and startup time.
- **Reacting only as fast as its triggers fire.** No worker is running between runs. The inbox fills and the scheduler counts, which is why the Role Contract states an accepted delay ([4.4](ssor-tracks.md)).
- **Saving progress on long jobs.** A job longer than one session must save its progress to the records and resume, which has to be designed. Part III shows how.

They are the price of a worker whose memory answers to governance instead of to a hard drive. This book's position is that for a Digital FTE, with a named owner and real authority, that price is well worth paying.

[^anthropic-cowork-architecture]: Unified Claude Security Best Practices, version 1.3.6, Anthropic Trust Center, 7 November 2026.
[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^anthropic-duet]: Claude Duet, Anthropic, 21 October 2026.
[^openclaw]: OpenClaw, OpenClaw Foundation, README on GitHub.


