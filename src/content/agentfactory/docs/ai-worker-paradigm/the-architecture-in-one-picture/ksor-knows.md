# 4.2 KSoR knows (/ai-worker-paradigm/the-architecture-in-one-picture/ksor-knows)

---
type: Document
title: "4.2 KSoR knows"
description: "The layer that holds what a company officially knows, kept as one approved record that people and workers both read."
status: stable
order: 104.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "04"
part: I
expert_status: required
concepts: [ "4.2" ]
last_verified: 2026-10-04
sources:
  - id: ksor
    title: "KSoR, the Knowledge System of Record (Panaversity, GitHub, verified 2026-10-04)"
    resource: https://github.com/panaversity/ksor
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** In the restaurant from [4.1](five-layers.md), the recipe book is the one official copy of each dish, and it wins over what any cook remembers. A school does the same when it puts one official term calendar on its website, instead of a different date in each teacher's handout.

The **approved knowledge (KSoR**, the Knowledge System of Record) holds what the organization officially knows and how it operates: policies, procedures, thresholds and definitions. Its design fits in one line: **one authoritative record**, **one governance boundary**, **many open projections**.[^ksor] In plain words: one official copy, one way to change it, and many ways to read it.

![KSoR knows: the school calendar. A school puts one official term calendar on its website, instead of a different date in each teacher's handout. A laptop shows the school website's term calendar, marked as the official copy, version 3, approved. Beside it, three teacher handouts each give a different date for term 1, and each is crossed out. On the desk, books labeled official calendar, policies, procedures and definitions. A side panel lists what a KSoR holds. Policies are the official rules with versions and an owner, procedures are step-by-step instructions, thresholds are limits such as approval amounts, and definitions are common terms in one place. Below it, one record and three rules. One authoritative record, where a new version replaces the old one. One governance boundary, where changes go through review and approval. Many open projections, where people and workers read the same record. The banner reads: one official copy, one way to change it, and many ways to read it. A worker reading a KSoR names the exact version it used, and says so when the record has no answer.](img/school-calendar.png)

*The school calendar. One official copy on the website, and the handouts lose.*

## What makes it one official record?

- **One authoritative record.** There is one AP policy, not one in a project and another in an email. A new version replaces the old one in the record, and the old one is marked as retired.
- **One governance boundary.** Knowledge changes through review and approval by a named person, and every version is kept. A draft is not policy until someone with authority approves it. Each version has the date it takes effect, and the version in force on the day of a decision governs that decision. An August invoice paid in October is judged by version 3.
- **Many open projections.** A projection is a view of the record. People read the record as pages. Workers read the same record through a governed interface: the worker sends a question and gets back the passage that answers it, with its version and owner, or nothing. The record's header, its owner, version and approval date, travels with every projection. Nobody keeps a separate copy for the machines.

## What can a worker do with approved knowledge that it cannot do with a loose file?

Two things. It **cites**: every answer points to the approved concept and version it came from. And it **abstains**: when the record does not contain the answer, it says so instead of filling the gap with whatever the model knows.[^ksor] The approved knowledge starts small, with the sources the role names, and each abstention is a request for the next entry, which the record's owner decides.

**The approved knowledge holds the rules, not the day's facts.** Whether an invoice is paid, or what a vendor's terms are today, is current state, and the company's systems hold it ([4.3](memory-remembers.md)).

## How would it have changed Wednesday?

Wednesday's failure was a knowledge failure. The approved policy existed, but it was badly published, and the worker answered from the retired copy it could see. With the policy in the approved knowledge, version 3 of the approval-limits entry would be the only approved version, owned by Dave and dated September 1. The answer would read "Yes. Invoices over $5,000 need the controller's approval (AP policy v3, approved September 1)." Maria could check that citation in ten seconds.

This book is kept the same way: a repository of pages with versions, owners and approvals, read by people as a site and by workers through a connector.

[^ksor]: KSoR, the Knowledge System of Record, Panaversity.


