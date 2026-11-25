# 10.3 Ownership, approval and takedown of knowledge (/managing-ai-workers/governance-and-responsible-use/ownership-and-takedown)

---
type: Document
title: "10.3 Ownership, approval and takedown of knowledge"
description: "Why every piece of knowledge needs an owner, how a takedown differs from deprecation, and how to remove every copy that is served."
status: stable
order: 210.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
concepts: [ "10.3" ]
last_verified: 2026-10-08
sources:
  - id: ksor
    title: "KSoR, the Knowledge System of Record (Panaversity, GitHub, verified 2026-10-08)"
    resource: https://github.com/panaversity/ksor
  - id: v1-governance
    title: "Governance, Risk & Responsible Use: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/governance-risk-responsible-use-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A school corrects a mistake in a notice on its board. The photocopies that parents already took home still carry the mistake, so each one must be replaced too.

**What you will learn.** Why every piece of knowledge needs an owner, how removing knowledge differs from replacing it, and how to remove every copy that people and AI tools can still read. You practice it in Task 7 of the lab.

**Friday, December 11, 11:00 a.m.** Dave turns to the notes Jordan followed on Wednesday. They left the AP Worker's project in November ([Chapter 8](../context-memory-knowledge-and-state/configure-the-workspace.md)), but the original stayed in the shared drive's Onboarding folder. Nobody removed it, because nobody was responsible for doing so.

## Who owns each piece of knowledge?

Every piece of knowledge needs an owner. The owner is the person who can approve it, change it and deprecate it. Knowledge with no owner cannot be governed. Three roles are easy to mix up: the owner keeps one piece of knowledge correct, the takedown authority orders knowledge withdrawn, and the incident owner ([10.5](organizational-policy.md)) decides what happens after a mistake. At Brightline, Dave holds all three.

## How is removing knowledge different from replacing it?

A rule replaced by a newer one is **deprecated** ([8.3](../context-memory-knowledge-and-state/configure-the-workspace.md#what-dave-approves-the-official-record)): still shown to people, with a pointer to its replacement, and no longer served to workers.[^ksor] **Takedown** is different. It is a recorded withdrawal of knowledge that should not be served at all.

| | Deprecated | Taken down |
| --- | --- | --- |
| Why | A newer rule replaced it | It should not be served at all: wrong, unsafe, unlicensed, or holding data that must be removed |
| Shown to people | Yes, pointing to its successor | No |
| Served to workers | No | No |
| Who can do it | The owner, or a takedown authority | A named takedown authority, a person the company names as allowed to order one |
| What is recorded | Who deprecated it, when, and its successor | Who withdrew it, when and why |

## How do you take knowledge down everywhere?

A takedown must reach every place where the knowledge can still be read. The KSoR's projections ([8.3](../context-memory-knowledge-and-state/configure-the-workspace.md#what-dave-approves-the-official-record)) are windows onto one master document: withdrawing a concept closes every window.[^ksor] A file uploaded by hand into an AI vendor's project is not a window. It is a photocopy, like the school's notices, and so is a copy in a shared folder. Closing the windows does not reach them. So in Part II you do the takedown by hand, once the takedown authority has decided:

1. Write the takedown record: who withdrew it, when and why.
2. Remove every served copy.
3. Check that it can no longer be found, by asking for it the way a worker would.
4. Tell the people who relied on it.

A copy kept as evidence moves to restricted storage, where no worker and no reader can reach it, and the record says so.

## May you use any material you have?

The right to use material matters too. A paid industry report licensed for reading may not be pasted into a project, however useful it is.[^v1-governance]

## What term does Dave set?

Dave's term, by 11:40, as Brightline's takedown authority: every piece of knowledge the worker or the staff can reach gets a named owner, and anything withdrawn gets a takedown record and a check that no copy is left.

![The title reads "Govern the knowledge lifecycle." The line below it reads "Name an owner. Record approval. Verify withdrawal everywhere it is served." A line of boxes runs from source material to draft, not served to workers. Then a red arrow labeled "Recorded approval by an authorized approver" leads to stable, approved for serving. From stable, one arrow leads to deprecated, replaced by a successor, and another to taken down, withdrawn from serving. A dashed arrow from draft also leads to taken down: "Draft or unowned material may also be withdrawn." A note reads "No owner? Escalate to the takedown authority." A table compares deprecated and taken down. Why: a newer rule replaces it, or it is unsafe, incorrect or unauthorized. Shown to readers: yes, with a link to the successor, or no. Served to workers: no, and no. Who decides: owner or takedown authority, or named takedown authority. Below, "Takedown: close every serving route" shows four steps. Step 1, record who withdrew it, when and why. Step 2, remove every active copy and projection. Step 3, verify: check source lists and retrieval. Step 4, notify the people who relied on it. Two notes read "Check the website, MCP access, AI projects and shared folders" and "Evidence may remain in restricted storage, outside serving access." A banner at the bottom reads "A withdrawn record is not enough. No served copy may remain."](img/knowledge-lifecycle.png)

*Figure 10.3. Owner, approval, deprecation and takedown. A takedown is not finished until no served copy remains.*

[^ksor]: KSoR, the Knowledge System of Record, Panaversity.
[^v1-governance]: Governance, Risk & Responsible Use: A Crash Course, Panaversity, first edition.


