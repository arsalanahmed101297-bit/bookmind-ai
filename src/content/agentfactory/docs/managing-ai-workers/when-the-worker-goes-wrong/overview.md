# Chapter 11. When the Worker Goes Wrong (/managing-ai-workers/when-the-worker-goes-wrong/overview)

---
type: Document
title: "Chapter 11. When the Worker Goes Wrong"
description: "How to stop a failing AI Worker, read its task record, check that a run really worked, find which of five causes a failure comes from, and fix it so the fix lasts, on Claude or ChatGPT."
status: stable
order: 211
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "11"
part: II
expert_status: required
objectives:
  - { id: CCAO-F.D5.O4, label: direct }
  - { id: CCAO-F.D1.O3, label: direct }
  - { id: CCAO-F.D4.O3, label: direct }
  - { id: OAI.1.9, label: direct }
  - { id: CCAR-P.D4.T4, label: supporting }
  - { id: P7.OBSERVABILITY, label: extension }
  - { id: P3.VERIFICATION, label: extension }
word_budget: 2500
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10" ]
build_step: "Contain four failed runs and find where each lives from its task record, check a usage report, recompute one set of discounts, fix three briefs one change at a time, with success signals, failure paths and one narrowed permission, turn a six-week feedback log into lasting fixes with a baseline, and run the same week again on the Role Contract, Draft 8, with the reviewer's checks"
artifact: "The AP Worker's Role Contract, Draft 8, and What went wrong, the notes on the week of January 11, 2027: two documents in the AI app"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch11.zip"
field_guides: []
delta_entries: [ "D-072", "D-075", "D-081" ]
concepts: [ "11.1", "11.2", "11.3", "11.4" ]
last_verified: 2026-10-08
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

> [!NOTE]
> **Your Role Contract.** This chapter fixes the Role Contract from [2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in) after a failure. You find the line or brief that was wrong, often **Knowledge sources**, **Procedures** or **Authority**. Then you change one thing, test it and note it in the contract's change log. Its lab writes Draft 8, the eighth and last draft of the contract in Part II, with every fix written in.

Chapters [5](../the-four-part-brief/overview.md) to [10](../governance-and-responsible-use/overview.md) lower the chance that an AI Worker gets a result wrong. This chapter is about the day it does anyway. Troubleshooting means finding where a failure lives, the place it comes from, and fixing that place and nothing else. It takes three steps, and the table's last row shows them in today's apps:

| Step | Concept | You can then |
| --- | --- | --- |
| Stop, and read what really happened | 11.1 | Stop the run, read its task record, check where the work landed, and give every job a **success signal** |
| Find where each failure lives | 11.2 | Run the five checks, cheapest first, including usage and limits |
| Fix one thing, and make the fix last | 11.3 | Change the brief, the inputs or the permissions, move the fix into the setup, and run the week again |
| What Claude and ChatGPT show today | 11.4 | Find each AI vendor's step list, scheduled runs, pause reasons and usage pages |

Maria takes the first two steps on Friday, January 15, and the third on Monday, January 18, when the Role Contract becomes Draft 8.

This chapter deepens **Discernment** ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)), one of the 4Ds of AI fluency.

## Why it matters

At Brightline Wholesale Supply, [the book's example company](../../claude-and-chatgpt-2/new-way-of-working/one-job.md), the AP Worker has run two recurring jobs on its own since November 9 ([Chapter 9](../work-that-runs-without-you/overview.md)): the Thursday pre-run note, which Dave reads before he approves each Friday's payment run, and a duplicate check on each invoice email. Anthropic's pages describe no task that an email starts by itself, so something outside the app has to start each check: that is the gap [9.5](../work-that-runs-without-you/both-ai-vendors.md) tells you to write down. Maria, the office manager, runs the worker, Dave, the controller, approves its work, and Jordan, a year-end clerk, helps with the January close.

> **A term used below.** A *remittance notice* is the note that tells a vendor which invoices a payment covers.

In the week of January 11, 2027, four things went wrong, one a day from Tuesday. The first began on Monday.

**Monday, January 11.** Maria spent the afternoon on a large year-end task in her own Claude account, matching twelve months of vendor statements against the register. Both recurring jobs run on that account too. Dave approved it for the worker, unlike the personal account of [Chapter 10](../governance-and-responsible-use/overview.md), because the worker still has no account of its own ([9.2](../work-that-runs-without-you/scheduled-and-event-triggered.md)), the gap [4.10](../../ai-worker-paradigm/the-architecture-in-one-picture/when-others-use-it.md) named, still open.

**Tuesday, January 12.** Nine invoice emails arrived, and the duplicate check checked none of them. It posts only when it finds a duplicate. One of the nine was Kenton Box & Crate's invoice 7781, sent again as 7781-R for $4,812.50. It was scheduled for the next payment run.

**Wednesday, January 13.** Jordan asked the worker to "reply to these three vendors about their short payments," the invoices Brightline paid less than in full. All three drafts gave every vendor the same terms, "2 percent 10, net 30": a 2 percent discount within 10 days, or the full amount within 30. But Stonebridge Carton's terms are net 45, and it was paid less because of a credit for damaged cartons. Maria caught it in her review.

**Thursday, January 14.** The pre-run note said "No invoices due this week." In fact, 31 invoices, worth $86,240.15, were due. So the January 15 run paid none of them. They were paid a week late, except 7781-R, which could still be stopped.

**Friday, January 15.** Five replies to vendors said "Attached is the remittance notice." Nothing was attached, and all five went out.

Dave read about all four on Friday afternoon. "Switch to the most expensive model," he said, "and Maria, rewrite every brief from scratch." A stronger model would have fixed none of the four, and new briefs only part of them, while losing every part that already worked. This chapter shows how to find the place before changing anything.


