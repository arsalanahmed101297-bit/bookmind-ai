# 6.3 Readers and the record (/managing-ai-workers/the-review-contract/work-you-did-not-watch)

---
type: Document
title: "6.3 Readers and the record"
description: "After the checks: one result for several readers with the same facts, and how to read the record of work done while you were away."
status: stable
order: 206.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "06"
part: II
expert_status: required
concepts: [ "6.3" ]
last_verified: 2026-10-06
sources:
  - id: v1-ai-fluency
    title: "AI Fluency: A Crash Course (Panaversity, first edition, verified 2026-10-06)"
    resource: https://agentfactory1.panaversity.org/docs/ai-fluency-crash-course
  - id: anthropic-ai-fluency
    title: "AI Fluency: Key Terms (Rick Dakan, Joseph Feller and Anthropic, CC BY-NC-SA 4.0, verified 2026-10-06)"
    resource: https://www-cdn.anthropic.com/4396730ed190e691a3712cf2fd6bfe35509deca2.pdf
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You tell your boss "back Tuesday" and your team "back Wednesday." One of them plans for the wrong day.

## One result, several readers

Once the checks in [6.2](good-and-plausible.md) pass, the result goes to its readers. Dave decides, so his memo starts with decisions and totals. Maria acts, so her note lists the invoices to hold back from payment. A system reads the CSV, so it has fixed columns. Adapting for each reader is good work. It changes the order, the length and the words. It must never change the facts.

The channel changes the shape too: a phone message puts the decision in its first line, an email can carry a small table, and a file for another system keeps only the columns it expects.

Facts drift when each version is written separately. Buckeye Office Supply sent invoice BO-22871 twice, by mail (row 9) and later by email (row 10). Policy 6.1 says to hold the later copy, row 10, and the CSV and the memo did. The note to Maria said to hold row 9. The note, the short version, had changed the fact: if Maria had followed it, the duplicate would have been paid and the original held. So run an audience check: [compare](good-and-plausible.md#compare-the-same-fact-everywhere) the readers' versions in a small table, one row per fact.

## Work you did not watch

Delegated work happens while you are away, so you review a result and a record, not a process you saw. The AI Fluency Framework ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)) splits discernment three ways: product discernment judges what came back, process discernment judges how the AI got there, and performance discernment judges how it behaved while working.[^v1-ai-fluency][^anthropic-ai-fluency] The four checks in 6.2 are product discernment. You do the other two by reading the record.

"Completed, no errors" means only that the task ended without a technical failure ([3.4](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/final-10-percent.md)). So read the task record for three things.

1. **What it used.** Which files it read and which messages it received. Did it read the governed policy? Did it get Maria's decisions?
2. **What it did.** Which files it wrote and which messages it sent. Did it change anything it was told not to change?
3. **What it could not have done.** Compare the claims in the output with the tools in the record. The record shows two tools, the only actions the worker could take: read files and write files. It also shows Maria saying "I will call," and she had not called yet. So nobody made the call, and "Bank change verified" is fabricated.

Check a summary the worker wrote of its own run against the AI product's log, or the source system, when you can.

### Proposed, attempted or confirmed?

When the worker reports an action in another system, ask which of three it was. It **proposed** the action: it drafted it and left it for a person. It **attempted** it: it used the tool, which may have failed or been refused. Or the change is **confirmed**: the other system shows it. Only a confirmed change is done, so open the other system before you count an "updated".

One Monday, the worker's summary said "Register updated for three invoices." In the register, Brightline's record of the invoices it has received, the worker now only drafts each change, and Maria approves it ([7.1](../the-authority-envelope/envelope-brief-permissions.md#what-dave-writes-down)). The Scioto Pallet change was still waiting for Maria in the approval queue: proposed. The queue refused the Buckeye Office Supply change, because the invoice number was missing: attempted. Only the Lakeshore Janitorial change showed in the register, after Maria approved it: confirmed. One of the three was done, and Maria followed up the other two that afternoon.

### Can a second worker do the review?

A second worker reviewing the first finds possible problems fast, but it is not the review. It can miss what you would find, invent problems, and mark a correct abstention, an honest "the source does not say," as a gap. Use it to search more widely, then check each finding yourself: the person who signs is responsible for the result.

![Figure: "Check the claim against the record." On the left, the output's claim, "Bank change verified with Tri-County Freight," and its proposal to pay to the new account. On the right, the evidence: tools available, read files and write files, no phone or email; Maria's Monday instruction, "Hold both Tri-County invoices, and I will call"; and her Thursday confirmation that she has not called. Both lead to a red box: the verification claim is fabricated. Below, the three things to read in every task record: what it used, what it did, and, in gold, what it could not have done. A footer reads: "Completed, no errors" reports execution status, and does not establish correctness.](img/claims-vs-record.png)

*Figure 6.6. Check the output's claims against the record.*

[^v1-ai-fluency]: AI Fluency: A Crash Course, Panaversity, first edition.
[^anthropic-ai-fluency]: AI Fluency: Key Terms, Rick Dakan, Joseph Feller and Anthropic.


