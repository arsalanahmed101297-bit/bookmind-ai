# 9.3 Govern what it does unasked (/managing-ai-workers/work-that-runs-without-you/governing-initiative)

---
type: Document
title: "9.3 Govern what it does unasked"
description: "What makes a standing worker different from a delegated one, and the initiative ladder: four rungs a worker can climb when nobody asked, and the rule that keeps that initiative inside the authority you already set."
status: stable
order: 209.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.3" ]
last_verified: 2026-10-08
sources:
  - id: v1-thesis
    title: "The Agent Factory Thesis (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/thesis
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will learn.** What changes when a worker stays on, and the rules that keep what it does unasked inside the authority you already gave it. You practice it in Tasks 7 and 8 of the lab.

## A worker that stays on

Nobody asked the email job to tidy the scans folder on Sunday night. It noticed something and acted on its own, as a worker that stays on does.

[Chapter 2](../../ai-worker-paradigm/what-is-an-ai-worker/anatomy-of-an-ai-worker.md#two-kinds-of-ai-worker) named the two kinds. A **Delegated AI Worker** completes a briefed task, then stops. A **Standing AI Worker** holds an ongoing role: a lasting identity, responsibilities it keeps between runs, and triggers that start it without anyone asking each time. A schedule is a trigger, not a kind of worker. Each of Maria's two jobs is one briefed task, repeated on a trigger. The AP Worker that runs them is a Standing AI Worker, and it ends only when someone retires it. It acts for one person, the one it works for, even when a whole team can ask it for things ([9.6](shared-room.md)).[^v1-thesis]

Three things change how you manage it.

- *Lasting identity.* It needs a name and access of its own, granted on purpose and reviewed, like any colleague's ([9.2](scheduled-and-event-triggered.md#five-facts-about-runs)). Then its work is recorded as its own, so a team can rely on it and an audit can trace it.
- *Memory.* The product it runs in may remember things between conversations. Memory is continuity, never authority ([8.2](../context-memory-knowledge-and-state/context-window.md#the-limit-memory-kept)). It may hold that Maria prefers short notes. It must never hold the approval threshold.
- *Proactive work.* It notices things and helps without being asked. It posts when a job finishes, or flags an invoice nobody asked about. That is its value, and its risk, so it needs rules of its own.

## The initiative ladder

**In everyday life.** A house-sitter may notice a leak and text you. They may even buy a bucket. They may not hire a plumber to rebuild the bathroom.

Initiative is work nobody asked for. Grade it on the four rungs of [Chapter 7's autonomy ladder](../the-authority-envelope/envelope-brief-permissions.md#four-rungs-set-for-each-action): observe (it finds something, such as an untidy folder), recommend, draft, execute.

The governing rule is short. **Initiative may observe and recommend freely, to the people and channels you named. It may draft only into a drafts place. It may execute only inside the Authority Envelope you already set for that action, exactly as if someone had asked.** Initiative never widens authority.

Sunday's renaming was the execute rung. The connector allowed it. The envelope did not. So the job should have stopped at recommend: tell Maria, and change nothing.

When initiative reaches the execute rung, an **execute rule** for each kind of act says what happens, with one of four answers: do it without asking, do it if pre-approved (a person approved that kind of act in advance), ask first, or hand it to a person. At Brightline, the bank-detail and payment steps that [9.1](fit-the-workflow.md#who-does-each-step) keeps with people always go to a person.

Four habits apply the rule.

- **Default to read-only.** The worker can read, but not change anything outside its drafts place, unless a request or a granted rule says so.
- **Design the unattended exit.** It is a designed exit ([9.2](scheduled-and-event-triggered.md#what-does-a-scheduled-run-start-with)) for an approval nobody is there to give: the run stops that item, records why, and tells a named person.
- **Read what it did.** A named person reads the run history on a set day.
- **Keep a way to stop it.** Know who can pause it, and set a limit on what it may cost.

![The title reads "The initiative ladder." The line below it reads "A worker may take initiative only within the authority already granted." Four rungs go up from the bottom. 1, Observe: read authorized sources and spot an issue. Read-only. 2, Recommend: tell named people through approved channels. Stay within the agreed audience. 3, Draft: prepare work in the designated drafts area. Do not send or apply it. A red dashed line with a lock reads "Authority check before action." Above it, 4, Execute: send, move, rename, delete, change, or pay. Only inside the Authority Envelope. On the right, a box reads "Set a rule for each action." Choice 1, without asking. Choice 2, if pre-approved. Choice 3, ask first. Choice 4, hand off to a person. It also reads "These are policy choices, not app settings." Inside it, a red note reads "At Brightline: bank-detail changes and payments stay with people." Below, a box titled "The 212-file mistake" reads "A logging job renamed 212 scans. The connector permitted it. The Authority Envelope did not. Recommend the cleanup. Do not rename files." A gold band at the bottom reads "Initiative never widens authority." It lists four habits: default to read-only, stop and notify when blocked, review run history, keep stop controls and spend caps.](img/initiative-ladder.png)

*Figure 9.5. The initiative ladder. The red line marks the authority check before any act.*

[^v1-thesis]: The Agent Factory Thesis, Panaversity, first edition.


