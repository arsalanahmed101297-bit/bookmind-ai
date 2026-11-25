# 8.1 Five places an answer comes from (/managing-ai-workers/context-memory-knowledge-and-state/five-places)

---
type: Document
title: "8.1 Five places an answer comes from"
description: "Where an AI Worker's answer can come from, the question each source answers, and which sources may decide a question about a rule or about a payment."
status: stable
order: 208.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "08"
part: II
expert_status: required
concepts: [ "8.1" ]
last_verified: 2026-10-07
sources:
  - id: ksor
    title: "KSoR, the Knowledge System of Record (Panaversity, GitHub, verified 2026-10-07)"
    resource: https://github.com/panaversity/ksor
  - id: ssor
    title: "SSoR, the State System of Record (Panaversity, GitHub, verified 2026-10-07)"
    resource: https://github.com/panaversity/ssor
  - id: dsor
    title: "DSoR, the Data System of Record (Panaversity, GitHub, verified 2026-10-07)"
    resource: https://github.com/panaversity/dsor
  - id: v1-system-of-context
    title: "The System of Context (Panaversity, first edition, verified 2026-10-07)"
    resource: https://agentfactory1.panaversity.org/docs/ecosystem/system-of-context
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You ask a friend when the pharmacy closes. They might read the sign in front of them (**context**), or remember what you told them last week (**memory**). They might know that your prescription was ordered Monday and promised for Thursday (the case file). They might quote the pharmacy's official hours (the official record). Or they might call to check whether it closed early today (current state).

**What you will learn.** How to tell which of five places an AI Worker's answer came from, and which of them can give the final answer about a rule or a payment. You practice it in Task 1 of the lab.

**Why it matters.** A wrong answer can sound just as sure as a right one. Where an answer came from tells you whether to trust it.

## Where can an answer come from?

An AI Worker's answer can come from five places. Each one answers its own question:

1. What can the worker see right now? Its **context**, such as the invoice you just attached.
2. What does it remember about you? Its **memory**, which the AI product writes from your chats: "Maria wants replies in plain English."
3. Where does this piece of work stand, as last recorded, and how did it get here? The work's case file, the job of **SSoR**, the State System of Record ([4.4](../../ai-worker-paradigm/the-architecture-in-one-picture/ssor-tracks.md)).[^ssor] It keeps one file for each **matter**, such as an invoice from receipt to payment: "Invoice 5149: callback October 22, held October 23, paid October 30."
4. What is officially true here? The company's approved record, with a named owner and an approver, the job of **KSoR**, the Knowledge System of Record ([4.2](../../ai-worker-paradigm/the-architecture-in-one-picture/ksor-knows.md)).[^ksor] One of its rules: "Invoices over $5,000 need the controller's approval."
5. What do the company's systems show now? The system that holds the fact, such as the accounting system: "Invoice 5149 is paid." **DSoR**, the Data System of Record ([4.5](../../ai-worker-paradigm/the-architecture-in-one-picture/dsor-acts.md)), is the name for what reads those systems for the worker: it governs current state and the actions taken on it.[^dsor]

In Part II, you read current state from the company's systems yourself, and keep the case file by hand.

## How does each place reach the worker?

The worker works only from its context. The other four reach it only by being put into that context. What settles a question is where the content came from, not how it reached the worker.[^v1-system-of-context] "Invoice 5149 is paid" settles the question when it was read from the accounting system, not when memory supplies it.

## One fact, one authority

[4.3](../../ai-worker-paradigm/the-architecture-in-one-picture/memory-remembers.md#who-wins-when-memory-disagrees-with-the-record)'s rule holds: each fact has one authority, and memory is never it. If memory disagrees with any of the other four, memory loses. Two things are new here.

1. The case file's line is the latest known, as of its date. When it shows 5149 paid, it records what the accounting system said and when, not proof of now.
2. A rule stays true until someone with authority changes it: "Invoices over $5,000 need approval." State changes: "Invoice 5149 is unpaid" was true on October 23, and not on October 30. So a file that holds state is a snapshot: evidence of its date, out of date as soon as the state changes.

![The title reads "Five places an answer comes from." The line below it reads "Working context, personal continuity, case history, approved policy and current business state." Five columns each give a question, a source, how long it lasts and an AP example. Context, the working space: what can the worker see this turn? Instructions, messages, files and tool results, limited to what is loaded for this turn. Example: the invoice you just attached. Its badge reads "Carries source material." Memory, personal continuity: what does it remember about you? Preferences and details from past chats. It may persist across chats, and it can be incomplete. Example: "Maria prefers plain English." Badge: "Continuity, not authority." SSoR, the State System of Record: where does this matter stand, and how did it get here? Governed entries from systems, workers and people. History is kept, and corrections add new entries. Example: a timeline for invoice 5149, a callback on October 22, held on October 23, paid on October 30. Badge: "Authority for the case record." KSoR, the Knowledge System of Record: what is the approved rule? A named owner and a recorded approval. It lasts while in force and within its review period. Example: "Invoices over $5,000 need controller approval." Badge: "Authority for policy." DSoR, the Data System of Record: what do business systems record now? Governed reads and actions in authoritative systems. State changes, so recheck before acting. Example: the accounting system shows "Invoice 5149 is paid." Badge: "Current state and action." A bar below reads "Memory and retrieved records enter context. Their authority comes from their source." Then, in red, "One fact, one authority." The last line reads "SSoR records what happened and the evidence. Payment status remains authoritative in the accounting system."](img/five-places.png)

*Figure 8.1. Five places an answer comes from.*

![The title asks "Is invoice 5149 paid right now?" The line below it reads "Verify current recorded status in the accounting system." On the left, under "Useful evidence," four cards. Memory, a remembered status, "5149 was paid," which supports continuity but does not verify current status. Snapshot, the saved status list of 23 October, "5149: on hold," evidence of the status recorded on that date. SSoR, the latest known case state of 30 October, "Paid in the 30 October run," which preserves the case record but still needs a fresh check. Reported, a vendor email of 2 November, "Still unpaid," a discrepancy to investigate, not a status override. Below the cards: "Evidence can be valid without being current." An arrow labeled "Verify" points to a box on the right, "Read the accounting system now," the authority for recorded payment status. It reads "Check before answering or acting" and lists status, payment reference, read time, source and unresolved discrepancies. Part II, a human check: a person reads the system and records what it shows. Part V, governed execution: DSoR reads for the worker and checks actions against delegated authority. A banner at the foot reads "SSoR preserves the case. The accounting system verifies its current payment status."](img/current-state.png)

*Figure 8.2. Memory, an old snapshot, SSoR's latest-known line and a vendor's email may each be true, but none settles whether 5149 is paid now. Only the accounting system, read now, settles it. In Part V, DSoR does that reading for the worker.*

[^ssor]: SSoR, the State System of Record, Panaversity.
[^ksor]: KSoR, the Knowledge System of Record, Panaversity.
[^dsor]: DSoR, the Data System of Record, Panaversity.
[^v1-system-of-context]: The System of Context, Panaversity, first edition.


