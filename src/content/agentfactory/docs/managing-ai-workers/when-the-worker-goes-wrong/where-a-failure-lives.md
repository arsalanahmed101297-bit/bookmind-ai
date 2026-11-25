# 11.2 Where a failure lives: five causes, cheapest first (/managing-ai-workers/when-the-worker-goes-wrong/where-a-failure-lives)

---
type: Document
title: "11.2 Where a failure lives: five causes, cheapest first"
description: "The five causes of a failure, how to check them cheapest first, how usage limits and a shared allowance can stop a recurring job, and which layer to check when a setup drifts."
status: stable
order: 211.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "11"
part: II
expert_status: required
concepts: [ "11.2" ]
last_verified: 2026-11-18
sources:
  - id: v1-workflow-design
    title: "Workflow Design & Diagnosis (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/workflow-design-diagnosis-crash-course
  - id: anthropic-cowork
    title: "Get started with Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: openai-codex-usage
    title: "Using Codex with your ChatGPT plan (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** The car will not start. You check the fuel and the lights before you replace the engine.

**What you will learn.** How to find where a failure comes from among five causes, quickest check first, how a usage limit stops a recurring job, and which layer to check when a setup drifts. You practice it in Tasks 3, 4, 6, 10 and 12 of the lab.

**Why it matters.** Each check takes about a minute. The costly change comes last.

**Friday, January 15, later that afternoon.** Both jobs are paused. Maria takes the four records one at a time.

## Five causes, cheapest first

[3.6](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/three-failures.md) asked which part of the work broke. This lesson looks inside that answer.

Bad outputs look alike. The causes behind them do not. Five causes explain most failures:

| Cause | What it means | When it usually shows | Cheap check |
| --- | --- | --- | --- |
| **The brief** | The written instructions never included what the work needed | Wrong from the first output | Check it against its four parts: outcome, context, format and constraints ([Chapter 5](../the-four-part-brief/four-parts.md)) |
| **The inputs** | A source is wrong, renamed or out of date | "It used to work" | Open the source that the task record names. Check its name and date. |
| **Tools and permissions** | A connector to another app failed, or access is too wide or too narrow | A step with an error in the record, then the worker guessing | Find the first error in the step list |
| **Capacity** | Too much context, a usage limit, or the wrong feature or model | Gets worse over time, stops at a limit, or one repeated kind of error | Start a fresh session, check usage, or try the right feature once |
| **Task fit** | The task asks for something the tool cannot do | Never right, however you ask | Only after the other four look unlikely |

**The time a failure appears tells you where to look first. It does not prove the cause.**[^v1-workflow-design] A negative check, one that finds nothing wrong, makes that cause less likely, not impossible, so run the next check too. Dave's two changes are the most expensive on the list, so they come last. And do not stop at the first cause, because one failure can have two causes.

![The title reads "Five causes of a failure." The line below it reads "Start with the quickest checks. Let evidence guide the diagnosis." Under "Recommended check order," five numbered rows each give a check. Row 1, "The brief," reads "Check the brief against its four parts." Row 2, "The inputs," reads "Open the named source. Verify its identity, date and contents." Row 3, "Tools and permissions," reads "Inspect the first failed step. Check access and tool errors." Row 4, "Capacity," reads "Check usage limits, context load and feature availability." Row 5, "Task fit," reads "Assess suitability after investigating the earlier checks." A panel on the right asks "Switch the model?" and reads "A common first reaction. Investigate the cause before making the change." A note at the bottom reads "A quick check gives a clue, not proof. Verify the cause before changing the setup."](img/five-causes.png)

*Figure 11.3. Five causes of a failure. Check the cheapest first.*

## The four records

**Tuesday: capacity, then the brief.** The duplicate check left no output, so Maria runs [11.1](stop-first.md#make-every-job-say-what-it-checked)'s checks for a missing output before she opens the brief. Every Tuesday run says "Not started. Usage limit reached." The check runs on Maria's own Claude plan, and Monday's year-end task had used that plan up ([below](#how-does-a-usage-limit-stop-a-recurring-job)). Tuesday had a second cause: the brief says nothing about a suffix like "-R", so the check could not be trusted to match 7781-R to 7781.

**Wednesday: the brief.** Wrong from the first output points to the brief. Jordan's request named no source for the payment terms, so its context part was empty.

**Thursday: the inputs.** The note "used to work," so Maria opens the source the record names: "AP Register," the closed 2026 file. After the January 8 run she had started saving the accounting system's export as "AP Register 2027," but the old file kept the name the job looked for.

**Friday: tools and permissions, and the brief.** The first error in the step list is at step 2, as [11.1](stop-first.md#a-record-and-a-finished-run-are-both-reports) found: the January 4 password reset had broken the worker's link to the shared drive. And the brief had no rule for a missing attachment.

Two of the four also passed a person, a failure of the final 10 percent. Maria forwarded Thursday's note without checking its first line, and sent Friday's replies without opening an attachment. A Review Contract line for each would have caught them, so ask also which check was skipped.

### How does a usage limit stop a recurring job?

**In everyday life.** A family shares one mobile data plan. One person streams videos all weekend, and by Monday the data is gone for everyone.

On plans with a fixed allowance, three facts hold on both AI vendors.

- Work in different places in one account usually draws from **one pool**, a single shared allowance.
- Limits are measured over a **five-hour window and a week**, so Monday's work can stop Tuesday's job.
- **Overflow is a cost decision.** Overflow is use beyond your limit. At a limit you wait, upgrade or pay for more, and paying is a money choice for whoever owns the budget. It fixes nothing.

Agentic work, where the AI acts in steps, costs far more than chat, because a task plans, searches and reads many files.[^anthropic-cowork][^openai-codex-usage] So two rules follow.

- **Keep recurring work on an account whose budget is planned for it,** away from one-off work. And brief well the first time, because three rounds of corrections cost three runs.
- **Never move it to a personal account the company never approved.** That is shadow AI ([10.5](../governance-and-responsible-use/organizational-policy.md#the-policy)).

### When is the cause the wrong feature, or task fit?

One repeated kind of error suggests the wrong feature, a capacity cause.[^v1-workflow-design] At Brightline, the worker's early-payment discounts come out wrong by amounts from a few cents to $41.30, though the rate and amounts are right. The math is written in sentences, so run it as code, or in a spreadsheet. That tests the cause and fixes it. When the cause is task fit, reshape the task: ask for a sales forecast as a range with its assumptions, not one exact number.

## When a setup that worked starts to drift

A setup that worked for months can drift. Each change you see usually comes from one of its four layers. Instructions are checked like the brief, because both tell the worker what to do. Knowledge and memory are inputs, and a skill can change the brief or the tools.

| What you see | The layer | First check |
| --- | --- | --- |
| Drafts break a rule they used to follow | Instructions | Was an instruction edited? Does a newer one conflict with it? |
| Drafts cite an old file or a retired rule | Knowledge | Open the file the draft cites, and check its date. Is a replaced file still in the project? |
| Every run of one task now uses new steps or a new layout | Skill | Was the skill updated to a new version? |
| Drafts carry details from another customer or an old chat | Memory | Read the saved memories, and delete the ones that hold those details |

Fix the layer you found. Then run the task again, and compare the new draft with one from before the drift.

If two instructions conflict, change one of them so that they agree. For an organization instruction, that means asking an Owner. On Claude, only Owners can see organization instructions ([10.6](../governance-and-responsible-use/both-ai-vendors.md)).

> **Outside finance: the proposals project.** For three weeks, the sales lead's proposal drafts have quoted last year's price list and used details from another customer's deal. Nobody changed the instructions, and the formatting skill is the same version, so neither can explain the change. Two symptoms point to two layers. The price list is stale knowledge: the project still holds last year's copy, so the sales lead replaces it. The other customer's details come from memory saved in earlier chats. So the sales lead reads the saved memories and deletes the ones that hold them. Then they check that the project keeps its memory apart from other work ([8.2](../context-memory-knowledge-and-state/context-window.md#the-limit-memory-kept)).

[^v1-workflow-design]: Workflow Design & Diagnosis, Panaversity, first edition.
[^anthropic-cowork]: Get started with Claude Cowork, Claude Help Center.
[^openai-codex-usage]: Using Codex with your ChatGPT plan, OpenAI Help Center.


