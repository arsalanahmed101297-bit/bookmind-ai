# 9.7 One deliverable, from question to plan (/managing-ai-workers/work-that-runs-without-you/one-deliverable)

---
type: Document
title: "9.7 One deliverable, from question to plan"
description: "How to carry one report or plan through four stages, from the question to a decision, and why each stage gets two checks."
status: stable
order: 209.87
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.7" ]
last_verified: 2026-11-19
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A family plans a move. They look up schools, add up the costs and write a plan with dates. The school list is accurate, and the sums are right. But the list ranked schools for older children, and their children are six and eight.

**What you will learn.** The four stages that carry a report or plan from a question to a decision, the two checks at each stage, and what makes a plan one someone can act on. You practice it in Task 13 of the lab.

**Monday, November 30.** Dave asks Maria a question. Should Brightline ask six of its suppliers, which give no such discount today, for 2 percent off for paying within 10 days, from January? He wants a yes or no for each supplier group before Thursday's budget meeting. It is a new, narrower proposal than the plan to pay every vendor early, which Ana checked in [0.4](../../how-ai-works/critical-thinking/overview.md). This work comes once, so [9.1](fit-the-workflow.md#three-gates-before-any-recurring-work)'s gates say to build nothing that repeats. But it is too large for one request. It needs sources, numbers and a decision. It is a **deliverable**: a report or plan that someone decides from.

## What are the four stages?

Each stage feeds the next. The labels in the last column are [9.1](fit-the-workflow.md#who-does-each-step)'s.

| Stage | The question it answers | Use | Who decides |
| --- | --- | --- | --- |
| 1. Requirements | Who decides what, by when, and what does done look like? | Chat. Let the AI interview you ([5.3](../the-four-part-brief/decompose.md)), then write the "Done when" sentence ([5.1](../the-four-part-brief/four-parts.md)) | Human-retained. The person who asked agrees the question |
| 2. Research, with cited sources | What do good sources say? | Research, for a question that needs many sources ([2.4](../../ai-worker-paradigm/what-is-an-ai-worker/surface-and-model.md)) | Human-reviewed. The AI searches, and you decide which claims hold |
| 3. Analysis, in code | What do our own numbers say? | Code execution on the file you upload | Human-reviewed. The AI computes, and you decide which numbers hold |
| 4. Synthesis, into a plan | What should we do? | An artifact, such as a document or slides ([5.1](../the-four-part-brief/four-parts.md#format-the-shape-its-next-reader-needs)) | Human-reviewed, then human-retained. The AI drafts, you check, and the person who asked decides |

No stage is AI-executed: a person checks each one before the next stage uses it. Put a checkpoint where a person's decision changes what follows ([5.3](../the-four-part-brief/decompose.md)).

## Two checks at every stage

Every stage can pass its own check, and the plan can still be wrong. So check each stage twice. The first check asks: is it right? Trace each source and recompute each number, as in [6.2](../the-review-contract/good-and-plausible.md#trace-every-claim-to-its-source). To recompute a number that code computed, use a different method, such as adding up one group yourself. Running the same code again repeats the same mistake.

The second check asks: does it answer the question? A correct total can mean less than it seems. So stage 1 writes the question down, and the person who decides agrees it.

| Stage | Is it right? | Does it answer the question? |
| --- | --- | --- |
| Requirements | The person who decides agrees the question, in writing | This stage writes the question |
| Research | The source behind each claim the plan rests on says what the report claims | What did the source count, and whom did it ask? |
| Analysis | Each number the decision rests on recomputes from the source file | What is it a number of: which year, which currency, on what assumption? |
| Synthesis | Every action has an owner, a date, a cost and a risk | Does it give the decision that was asked for, first? |

When a stage cannot answer the question, do not fill the gap. Write "not known", and keep those words in everything that follows.

## A plan someone can act on

A plan is **actionable** when someone can start each action tomorrow without asking a question. Start with the decision the reader must make. Give each action an owner, a date, a cost and a risk. End with what could not be verified, so the reader knows what the decision rests on. What is not known often gives the first action: test it on a small scale before you count on it.

Four stages and two checks take far longer than one request. For an answer you will only read, one request and one check are enough. Use the stages when someone will decide from the result. You carry Dave's question through them in [Task 13 of the lab](lab.md#task-13-one-plan-for-dave).


