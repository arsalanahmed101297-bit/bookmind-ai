# Chapter 8. Context, Memory, Knowledge and State (/managing-ai-workers/context-memory-knowledge-and-state/overview)

---
type: Document
title: "Chapter 8. Context, Memory, Knowledge and State"
description: "Every answer comes from one of five places, and each kind of fact has one place that is final: find the place, keep what matters out of the chat, and make the official record the only rule."
status: stable
order: 208
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "08"
part: II
expert_status: required
objectives:
  - { id: CCAO-F.D3.O3, label: direct }
  - { id: CCAO-F.D5.O1, label: direct }
  - { id: CCAO-F.D5.O2, label: direct }
  - { id: CCAO-F.D5.O3, label: direct }
  - { id: CCAO-F.D5.O4, label: direct }
  - { id: OAI.1.5, label: direct }
  - { id: OAI.1.6, label: direct }
  - { id: CCAO-F.D2.O2, label: supporting }
  - { id: KSOR.OWNER, label: extension }
  - { id: DSOR.STATE, label: extension }
  - { id: SSOR.RECORD, label: extension }
word_budget: 3500
prerequisites: [ "01", "02", "03", "04", "05", "06", "07" ]
build_step: "Find where each of the AP Worker's four wrong answers came from, write five AP policy concepts and get them approved, load the project with them, standing instructions and one invoice's case file, fix a ready-made skill, carry one approved change through every copy, write the Role Contract's knowledge lines, and prove the setup in a new project of your own"
artifact: "Maria's records, your first KSoR: the five approved concepts, invoice 5149's case file, the refresh log, the fixed skill, Draft 5's knowledge lines and the project review. And the AP Worker project document, with its instructions and the copies a worker answers from"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch08.zip"
field_guides: []
delta_entries: [ "D-072", "D-077", "D-079" ]
concepts: [ "8.1", "8.2", "8.3", "8.4", "8.5" ]
last_verified: 2026-10-07
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
> **Your Role Contract.** This chapter fills in **What it works with** in the Role Contract from [2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in): its **Knowledge sources**, **Memory** and **Procedures (skills)** lines. Its lab writes them into Draft 5.

Every answer an AI Worker gives comes from one of five places, and each kind of fact has one place whose word is final. So when an answer is wrong, fix the place it came from, not the words of the question. You learn it in three steps, on the days of the story:

1. **Find the place** ([8.1](five-places.md)): the five places an answer can come from, and which one settles each kind of fact.
2. **Keep what matters out of the chat** ([8.2](context-window.md)), on Tuesday, November 3 and Wednesday, November 4: what the worker can see, what to do when a chat grows long, what memory may keep, and one matter's case file.
3. **Make the official record the only rule** ([8.3](configure-the-workspace.md)), from Wednesday at 10 to Monday, November 9: the project the worker answers from, approved rules kept once, and every copy kept current.

[8.4](both-ai-vendors.md) sets it up in Claude and in ChatGPT, and [8.5](skills-and-plugins.md) applies the same care to a skill, on Thursday, November 5. This chapter deepens **Description** ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)), one of the 4Ds of AI fluency.

## Why it matters

Maria, Brightline's office manager, runs the AP Worker that gets the Friday [payment run](../../claude-and-chatgpt-2/new-way-of-working/one-job.md) ready for Dave, the controller. The AP Worker works in the project Maria set up for it in September, under her own login. The project holds AP policy version 3, which Dave approved on September 1, a former clerk's onboarding notes, and the payment status list from October 23. One long conversation has run in it since September 8.

On Tuesday, November 3, 2026, Maria asked it four questions. Every answer came back fast and sure. None named its source, and all four were wrong:

- **"Has Tri-County's invoice 5149 been paid?"** "No. It is on hold under policy 5.3." Section 5.3 holds a payment until a change to the supplier's bank details is verified. It read the October 23 status list. But 5149 was paid on October 30. The file was a snapshot, a copy of how things stood on October 23, and nobody had replaced it.
- **"Does Buckeye's invoice BO-23104 for $6,150 need Dave's approval?"** "No. Approval is needed only over $10,000." It is the wrong limit from [0.1](../../how-ai-works/what-ai-actually-is/overview.md), back from a new place. In October, Maria had mentioned a possible new limit for next year, and that was saved to memory as Brightline's threshold. Section 4.1 of the policy still says $5,000.
- **"What do we do when a vendor emails new bank details?"** "Confirm by replying to the vendor's email." That came from the onboarding notes. Section 5.1 of the policy says never change bank details because of an email. Both files were in the project, and nothing told the worker which one was approved.
- **"Anything unusual in this week's invoices?"** It missed Northern Maple's invoice in Canadian dollars. In the first week, Maria had told the worker in the chat to "always flag Northern Maple to Dave." By November, that instruction was gone from what the worker could see.

Four wrong answers, four causes. Asking in better words would not fix them. Each answer came from the wrong place.

So the question this chapter answers is this: when an AI Worker's answer is wrong, where did it come from, and where should it have come from?


