# Chapter 9. Work That Runs Without You (/managing-ai-workers/work-that-runs-without-you/overview)

---
type: Document
title: "Chapter 9. Work That Runs Without You"
description: "How to design work that runs when nobody is watching, in four steps: decide what runs and who does each step, give every run what it needs, govern what it does unasked, and say who still checks, then set it up on Claude or on ChatGPT, share it with a team, and carry one plan from a question to a decision."
status: stable
order: 209
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
objectives:
  - { id: CCAO-F.D4.O1, label: direct }
  - { id: CCAO-F.D4.O3, label: direct }
  - { id: CCAO-F.D4.O2, label: direct }
  - { id: CCAO-F.D4.O4, label: direct }
  - { id: OAI.1.7, label: direct }
  - { id: OAI.1.10, label: direct }
  - { id: INV.2, label: extension }
  - { id: INV.7, label: extension }
  - { id: SSOR.RECORD, label: extension }
  - { id: DSOR.IDEMPOTENCY, label: extension }
word_budget: 3500
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08" ]
build_step: "Run five AP jobs through the three gates, find what the Role Contract decided in the eleven days nobody watched, map the Thursday review, write its standing spec and the email check's, make every run read the AP matters record first, replay November 12 and 19, set rules for initiative, choose the name it runs under and who notices when it fails, write Dave his page, write who may ask, prove it on Thanksgiving in a fresh chat, and carry one plan for Dave from his question to a decision"
artifact: "Draft 6 of the AP Worker's Role Contract, with both standing specs, the record's rules, initiative rules and who may ask, downloaded as .docx or .pdf, and the note to Dave, with one plan for next year"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch09.zip"
field_guides: []
delta_entries: [ "D-072", "D-078" ]
concepts: [ "9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7" ]
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
> **Your Role Contract.** This chapter fills in **How it runs and is reached** in the Role Contract from [2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in). That means its **Triggers**, its **Runtime needs** (how each run picks up where the last one stopped) and its **Channels** (where people reach it, and who may ask for what). It also settles **Identity**, the account each run acts as. Its lab writes Draft 6.

This chapter is about work that runs when you are not there: a job every Thursday morning, or one each time an email arrives. Such work fails in the gaps nobody designed: what a run is not given, what it does unasked, and who stops checking. So you design each gap before it runs, in four steps.

- **Decide what runs, and who does each step** ([9.1](fit-the-workflow.md)).
- **Give every run what it needs** ([9.2](scheduled-and-event-triggered.md)).
- **Govern what it does unasked** ([9.3](governing-initiative.md)).
- **Say what runs, and who still checks** ([9.4](explaining-value-and-limits.md)).

[9.5](both-ai-vendors.md) shows where today's tools set each of these. [9.6](shared-room.md) adds a team that can all ask the worker for things, and [9.7](one-deliverable.md) carries one plan from a question to a decision.

**The timeline.** Monday, November 9: two jobs start running on their own. Friday, November 20: four mistakes are found, and the fixes begin. Monday, November 23: a new clerk joins the team channel. Thursday, November 26, Thanksgiving: a fresh run proves the fixes. Monday, November 30: Dave asks for one plan. Wednesday, December 2: requests in the channel clash.

So the question this chapter answers is this: what has to be designed before work runs when nobody is watching?

This chapter deepens **Delegation** ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)), one of the 4Ds of AI fluency.

## Why it matters

Brightline Wholesale Supply, [the book's example company](../../claude-and-chatgpt-2/new-way-of-working/one-job.md), pays its vendors every Friday. Each Thursday, Maria, the office manager, spent about two and a half hours with the AP Worker on a **pre-run note** for Dave Kowalski, the controller: which invoices are due, which need his approval, and which to hold. On Monday, November 9, with the AP rules approved in [Chapter 8](../context-memory-knowledge-and-state/configure-the-workspace.md#monday-november-9-change-once-refresh-every-copy), Maria gave it two jobs to do on its own, under her own login:

1. Every Thursday at 7 a.m., read the accounting system's export of open invoices, and write the pre-run note.
2. Every time an invoice arrives by email, check that it is not a copy of one already received, and log it.

She emailed Dave: "The AP Worker now handles the pre-run review by itself." For eleven days, nobody watched. By Friday, November 20, four things had gone wrong.

**A run did not know what had happened that week.** On Tuesday, November 17, an email asked Brightline to send Tri-County Freight's payments to a new bank account. Requests like this are a common kind of fraud, so the policy says to call the vendor back on the number on file, and hold its payments until then (section 5.1, the callback, and section 5.3, the hold). Maria logged the request in her **SSoR** record, the State System of Record, which shows where each piece of work stands. But Thursday's run read only the invoice list and the rules. Its note told Dave to pay Tri-County's invoice 5207, for $3,110.00. Maria caught it at 4:40 that afternoon, just before Dave approved the run.

**The email job saw one email at a time.** On November 18, Lakeshore Janitorial sent invoice 5155 a second time. The job could not see that the same invoice had arrived on November 4, so it logged the copy as new.

**A run did something nobody asked for.** On Sunday night, November 15, the email job "tidied up" the shared folder of scanned invoices and renamed 212 files. Every link in the outside auditors' index broke. It could rename them because Maria's account could, and the folder's history showed Maria as the person who did it.

**Dave stopped checking.** He read "by itself" as "nobody needs to look," so he dropped his own Thursday check of the payment list.

None of these came from a bad brief or a weak AI model. The work now ran when nobody was watching, and nothing had been designed for that.


