# Chapter 5. The Four-Part Brief (/managing-ai-workers/the-four-part-brief/overview)

---
type: Document
title: "Chapter 5. The Four-Part Brief"
description: "How to brief an AI Worker in four parts (outcome, context, format and constraints), put each instruction in the right part, split a large request into stages, improve a brief one part at a time, choose the format of the result, and run the same brief on Claude and on ChatGPT."
status: stable
order: 205
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "05"
part: II
expert_status: required
objectives:
  - { id: CCAO-F.D1.O1, label: direct }
  - { id: CCAO-F.D1.O2, label: direct }
  - { id: CCAO-F.D1.O3, label: direct }
  - { id: CCAO-F.D2.O4, label: direct }
  - { id: OAI.1.3, label: direct }
  - { id: CCDV-F.D6.S2, label: supporting }
word_budget: 3000
prerequisites: [ "01", "02", "03", "04" ]
build_step: "Brief the weekly payment-run proposal once, run the same brief in Claude and in ChatGPT, compare, iterate and stage it"
artifact: "the downloaded payment-run brief"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch05.zip"
field_guides: []
delta_entries: [ "D-009", "D-072", "D-076" ]
concepts: [ "5.1", "5.2", "5.3", "5.4" ]
last_verified: 2026-10-06
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
> **Your Role Contract.** The Role Contract from [2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in) lists the worker's **Responsibilities**, its recurring jobs. This chapter writes what each job needs on top of the contract: a brief.

After this chapter you can write a **brief**: the message you send when you hand a job to an AI Worker. It has four parts: what you want back (the outcome), who it is for and what to work from (the context), the shape it comes back in (the format), and the rules it follows and how far the worker may go alone (the constraints).

The chapter teaches one idea: say what you want back and what must not go wrong, and leave the method to the worker. You do it in three steps:

1. Write the four parts ([5.1](four-parts.md)).
2. Read the result as a test, and change only the part that failed ([5.2](iterate.md)).
3. Split the job where a person must decide ([5.3](decompose.md)).

Then [5.4](both-ai-vendors.md) runs the same brief in Claude and in ChatGPT. This chapter deepens **Description** ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)), one of the [4Ds](../overview.md#the-4ds-in-this-part) of AI fluency.

## Why it matters

Brightline Wholesale Supply, the [book's example company](../../claude-and-chatgpt-2/new-way-of-working/one-job.md), pays its suppliers' bills every Friday. Its AP (accounts payable) Worker gets that week's **payment run**, the list of bills to pay, ready.

On Monday, October 19, Dave, the controller, sent the AP Worker one line: "Get this week's payment run ready. Everything's in the AP folder." The folder held 15 open invoices, the vendor records (each supplier's payment terms), the approvals log, the text of Tri-County Freight's invoice 5161, and two versions of the AP policy: version 3, current since September 1, and the retired version 2.

The answer looked well organized. It had four problems, one for each part of a brief:

- **Outcome: it did a different job.** It proposed paying all 15 invoices. Friday's run, on October 23, covered only bills due on or before October 30, the date of the next run. Five were due later.
- **Format: it came back in the wrong shape.** It was two pages of paragraphs. Maria, the office manager, needed rows she could check one by one.
- **Context: it used the wrong source.** It said Midwest Packaging's $6,480 invoice needed no approval, under a $10,000 limit. That is the same wrong limit the chat gave in [0.1](../../how-ai-works/what-ai-actually-is/overview.md), and this time it came from the retired version 2 in the folder. Version 3 lowered the limit to $5,000.
- **Constraints: it decided something nobody asked it to.** It converted Northern Maple Paper's invoice from Canadian dollars at a rate it found online. The policy says nothing about foreign currency.

Maria tried again, with fourteen numbered steps. Step 2 said to take each due date from the terms printed on the invoice. Lakeshore Janitorial's invoices come from an old template that still prints Net 45, which means pay within 45 days. Its terms have changed since, most recently to Net 15 in August ([Chapter 4](../../ai-worker-paradigm/the-architecture-in-one-picture/overview.md)), as the vendor record says, and the policy says the vendor record wins. So invoice 5131 was due on October 15, already late, and step 2 left it out. The worker followed her steps perfectly, mistakes included.

Dave said too little, and Maria said every step. A good brief sits between the two.


