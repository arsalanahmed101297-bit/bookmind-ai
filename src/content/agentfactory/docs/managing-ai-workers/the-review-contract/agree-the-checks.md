# 6.1 Agree the checks before you delegate (/managing-ai-workers/the-review-contract/agree-the-checks)

---
type: Document
title: "6.1 Agree the checks before you delegate"
description: "What to check, what evidence to ask for, what counts as success and when the worker must stop, written down before the work starts, and how deep a review should go."
status: stable
order: 206.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "06"
part: II
expert_status: required
concepts: [ "6.1" ]
last_verified: 2026-10-06
sources:
  - id: v1-how-to-think
    title: "How to Think in the AI Era (Panaversity, first edition, verified 2026-10-06)"
    resource: https://agentfactory1.panaversity.org/docs/how-to-think-ai-era
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Before a builder lays new tiles in your kitchen, you agree on the job: straight rows, no cracked tiles, the old floor fully removed, and stop if the floor underneath is wet.

A **Review Contract** is the acceptance criteria you set before delegation, the last decision of the first 10 percent. [3.2](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/first-10-percent.md) previewed its four questions. Here they are in full, with what to write for each, for Brightline's payment run on Friday, October 23.

| Question | What to write | For Friday's run |
| --- | --- | --- |
| What must be checked? | The facts, figures and decisions that make the work usable, and the standards of your field, such as an accounting rule or a house style | Every open invoice has one action that follows AP policy version 3, Brightline's current rules for paying bills. Every amount, date and approval matches the source. The totals Dave signs |
| What evidence comes back? | What the worker returns, so you can check without doing the work again | A reason and a policy section on every row of the proposal file. The approval ID from the approvals log for every approval. The task record, the worker's log of what it did. Who verified anything the output says was verified |
| What counts as success? | Tests the output must pass | Each of the 15 invoices appears exactly once. The totals match totals worked out again from the source files, to the cent. The proposal file, the memo and the note agree. Every claim traces to a source |
| What stops the worker? | Cases where it must stop and ask | A request to change payment details. Inputs that disagree, when the brief does not say which one wins. A case the policy does not cover |

## When do you write it, and where does it go?

Write it first, as its own document, and share all four parts with the worker. The evidence and the stop conditions also go into the brief, because the worker acts on them ([Chapter 5](../the-four-part-brief/four-parts.md)). The brief's "Done when" says the work is finished; the Review Contract says whether you accept it. The worker may check its own work first, but the independent check and the decision stay with you.

## Why write it first?

Once you have seen a result, you compare it only with itself: a well-organized memo sets its own standard. This is anchoring ([0.4.4](../../how-ai-works/critical-thinking/reasoning-traps.md)): the first confident answer becomes the starting point for your judgment.[^v1-how-to-think] So if work arrives already done, write the contract before you open it. It also shows you a bad brief early: if you cannot say what success looks like, the worker cannot either.

## What about the standards of your field?

Work can match every source and still break a standard. In the worker's month-end list of costs, every amount matches its invoice. But a Tri-County Freight bill for October's deliveries is listed under November, because Brightline paid it in November, and Brightline's accounting rule records a cost in the month of delivery. Only a check against that rule finds it, so write the rule under "What must be checked?"

## How much review does the work need?

Match the review's depth to the consequence of an error. Can the result be undone? Will it leave the company, or change a record of truth, an official record others rely on, such as the vendor record? Will someone act on it without checking it again?

| If the work... | Review depth | Example at Brightline |
| --- | --- | --- |
| Moves money, goes outside the company (external delivery), or changes a record of truth | Full contract, every check, a named human signs | The payment run, a vendor email, a change to the vendor record |
| Feeds a decision someone else makes | Full contract on the numbers and claims the decision rests on, and a sample of the rest | The memo Dave uses to approve the run |
| Repeats often, with little at risk | A standing contract that you reuse, with a person checking a sample each week | Filing each week's office-supply invoices under the right account |
| Is a draft you will rewrite yourself (an internal draft) | A light check as you rewrite it | Maria's first draft of a vendor letter |

When the answer is unclear, choose the deeper level.

## Which check comes first?

Order the checks by what the decision rests on, so a short review finds the costly problems first. For the payment run, that is the total Dave signs: recompute it first ([6.2](good-and-plausible.md)), and again after any correction ([3.4](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/final-10-percent.md)).

## What do Chapters 7 and 10 add?

[Chapter 10](../governance-and-responsible-use/when-a-human-must-sign.md) sets when a human must sign, whatever the review finds. What must never happen automatically belongs to the **Authority Envelope** ([Chapter 7](../the-authority-envelope/overview.md)): it limits the worker, so it is set there, and the review still checks it.

![Figure: "The Review Contract comes first." On the left, the contract's four parts, written first and all shared with the worker: what must be checked, what evidence comes back, what counts as success, and what stops the worker. The second and fourth are marked gold: they must also go into the brief. Arrows lead from the contract to the brief, to the AI Worker, to the output and task record, and on to the human reviewer, who verifies against sources, decides and signs when required. A dashed line from the contract to the reviewer reads: independent verification and the verdict stay with you. A footer reads: inherited work? Write the contract before opening the output.](img/contract-first.png)

*Figure 6.1. The Review Contract comes first.*

[^v1-how-to-think]: How to Think in the AI Era, Panaversity, first edition.


