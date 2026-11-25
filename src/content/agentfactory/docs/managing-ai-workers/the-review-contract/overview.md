# Chapter 6. The Review Contract (/managing-ai-workers/the-review-contract/overview)

---
type: Document
title: "Chapter 6. The Review Contract"
description: "Write the checks before you look, then run them as four checks, the number someone acts on first: recompute, trace, match and compare. Then give the result to each reader without changing its facts, and read the record of work you did not watch."
status: stable
order: 206
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "06"
part: II
expert_status: required
objectives:
  - { id: CCAO-F.D2.O1, label: direct }
  - { id: CCAO-F.D2.O2, label: direct }
  - { id: CCAO-F.D2.O3, label: direct }
  - { id: CCAO-F.D2.O4, label: direct }
  - { id: OAI.1.4, label: direct }
word_budget: 4000
prerequisites: [ "01", "02", "03", "04", "05" ]
build_step: "Write the Review Contract for the October 30 payment run before opening the package, review the package you did not watch, recompute the totals, and compare a fresh second reviewer, on the other AI vendor if you have one"
artifact: "the downloaded Review Contract, with its dated amendments, and the Review findings"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch06.zip"
field_guides: []
delta_entries: [ "D-072" ]
concepts: [ "6.1", "6.2", "6.3", "6.4" ]
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
> **Your Role Contract.** [Chapter 3](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/overview.md) started the **Evaluations** line of the Role Contract, the one-page description of the worker's job, from [2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in). This chapter fills it in, one job at a time.

AI work can look finished when it is not. This chapter teaches one thing: the list of checks you write before you look at the work, and how to run it when the work comes back. The list is a **Review Contract**: what you will check, what evidence comes back, what counts as success, and when the worker must stop and ask.

You run it as four checks, and you start with the one that guards the decision:

- **Recompute** the number someone will act on, from the source files.
- **Trace** every claim to its source.
- **Match** every item in the source to the output, exactly once.
- **Compare** the same fact everywhere it appears.

Then you give the result to each reader without changing its facts, and read the record of work you did not watch. So the question is: before you sign work you did not watch, what do you check, and in what order?

This chapter deepens **Discernment** ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)), judging what AI gives you. It is one of the [4Ds](../overview.md#the-4ds-in-this-part) of AI fluency.

## Why it matters

Brightline's AP Worker still gets the Friday [payment run](../../claude-and-chatgpt-2/new-way-of-working/one-job.md) ready, and Dave, the controller, approves each run.

On Thursday, October 22, at 4:30 p.m., Dave had half an hour before he approved the run for Friday, October 23. The AP Worker's package had come back on Tuesday, October 20: a proposal file with one row for each open invoice, a memo for Dave, and a note for Maria, the office manager. The worker had the brief from [Chapter 5](../the-four-part-brief/four-parts.md), with Maria's added line to hold both Tri-County invoices until she called. It was a good brief. A good brief makes good work likely, not certain.

The memo looked like every good memo Dave had ever signed. It started with three decisions for him, cited sections of the AP policy, Brightline's rules for paying bills, and said "Ready to approve: $24,607.75 across 8 invoices." Dave read the first screen and opened the screen where he approves the run.

Maria stopped at his door with a question. "Who verified Tri-County's new bank account? I haven't called them yet."

An invoice from Tri-County Freight, a supplier, had asked Brightline to pay it into a new bank account. The proposal file said "Bank change verified with Tri-County Freight" on both Tri-County rows, and proposed paying them, $7,155 in total, into the new account, ending 9914. Nobody had verified anything.

Dave stopped and read the package carefully. In the next half hour he found six more problems: a wrong total, an invented policy section, two files that disagreed, a missing invoice, an unfair note about a vendor, and a wrong hold.

None of these was hard to find. Dave had no list of what to check, so he checked what the memo showed him. This chapter gives him the list, and teaches how to run it.


