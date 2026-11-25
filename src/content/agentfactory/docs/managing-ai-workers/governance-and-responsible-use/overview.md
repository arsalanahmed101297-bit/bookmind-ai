# Chapter 10. Governance and Responsible Use (/managing-ai-workers/governance-and-responsible-use/overview)

---
type: Document
title: "Chapter 10. Governance and Responsible Use"
description: "How to govern an AI Worker: a named person decides in writing whether it should do a job, what data may go in, who owns what it knows and who signs before a result leaves, then handles the first hour after a mistake and finds the settings that carry the rules out, on Claude or on ChatGPT."
status: stable
order: 210
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
objectives:
  - { id: CCAO-F.D6.O1, label: direct }
  - { id: CCAO-F.D6.O2, label: direct }
  - { id: CCAO-F.D6.O3, label: direct }
  - { id: OAI.1.8, label: direct }
  - { id: CCAO-F.D2.O3, label: supporting }
  - { id: CCAR-P.D5.T5, label: supporting }
  - { id: KSOR.LIFECYCLE, label: extension }
  - { id: INV.1, label: extension }
word_budget: 3000
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09" ]
build_step: "Decide the terms on which the AP Worker runs again: classify six proposed uses, decide what data the vendor clean-up needs and which way in it may take, find who the early-pay list left out and write the brief that names the promise, give each piece of knowledge an owner and take down what must go, name who signs and sends each output, file the incident note and the first-hour rule, decide who can open a result and when each share ends, write the Governance Record and an interim AI policy for Dave, find which settings carry the policy out on both AI vendors, and prove the terms on Monday's cases in a fresh chat"
artifact: "The terms for switching the AP Worker back on, one document: the use register, the data and way-in decision, the people check and the standing early-pay brief, the knowledge register and takedown records, the sign-off matrix, the first-hour rule and the incident note, who can open a result, the Governance Record, the interim AI policy, the settings that carry it out, and the lines of the Role Contract's Draft 7"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch10.zip"
field_guides: []
delta_entries: [ "D-072", "D-080" ]
concepts: [ "10.1", "10.2", "10.3", "10.4", "10.5", "10.6" ]
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
> **Your Role Contract.** This chapter adds the company's rules to the Role Contract from [2.6](../../ai-worker-paradigm/what-is-an-ai-worker/role-contract.md#the-chapters-that-fill-it-in). Each entry under **Knowledge sources** gets an owner. Under **Authority**, the chapter adds what is never automated and what a person must sign. Its lab writes them into Draft 7.

**Before an AI Worker does a job, a named person decides, in writing, whether it may and on what terms.** That is **governance**. Chapters [5](../the-four-part-brief/overview.md) to [9](../work-that-runs-without-you/overview.md) made the AI Worker useful. But useful work can still be the wrong work, use the wrong data or reach the wrong person. The goal of governance is not "no." It is "yes, on these terms," with terms someone can check later.

Each concept takes back one day of Brightline's December, and ends with the written rule that would have stopped it.

| Concept | The question | The day it answers |
| --- | --- | --- |
| [10.1](appropriate-use.md) | Should a worker do this at all, and who could it harm or leave out? | Tuesday, December 1 |
| [10.2](can-this-data-go-in.md) | Can this data go in, and by which **route**, the way it reaches the AI? | Sunday, December 6 |
| [10.3](ownership-and-takedown.md) | Who owns what the worker knows, and who takes it down? | Wednesday, December 9 |
| [10.4](when-a-human-must-sign.md) | Who must sign before a result leaves, and who can open it? | Thursday, December 3, and Monday, December 14 |
| [10.5](organizational-policy.md) | What happens in the first hour after a mistake, and what rules apply? | Monday, December 7, and Friday, December 11 |
| [10.6](both-ai-vendors.md) | Which settings carry out the rules, on each AI vendor? | |

The lab turns the answers into documents for Dave, Brightline's controller, chief among them a **Governance Record**: one page with the answers for one workflow. The chapter covers Domain 6 of the CCAO-F exam, Anthropic's Claude Certified Associate: Foundations. It is a method for the people who do the work, not legal or compliance advice.

This chapter also deepens **Diligence**, one of the 4Ds of AI fluency ([0.3.2](../../how-ai-works/ai-fluency/the-four-ds.md)). Diligence has three parts, and December shows a lapse in each.

| Part of Diligence | What a lapse looks like | Taught in |
| --- | --- | --- |
| Creation diligence: what you put in, and where | A vendor file uploaded to a personal account | [10.2](can-this-data-go-in.md) |
| Transparency diligence: telling people AI was involved | A schedule for the auditors, sent with no word that an AI Worker drafted it | [10.1](appropriate-use.md#who-the-list-left-out) |
| Deployment diligence: standing behind what you use | A schedule sent under Dave's name that Dave never read | [10.4](when-a-human-must-sign.md) |

## Why it matters

By December 2026, the AP Worker was part of how Brightline Wholesale Supply, [the book's example company](../../claude-and-chatgpt-2/new-way-of-working/one-job.md), worked. It drafted replies that Maria, the office manager, sent from the AP inbox. In the first nine days of December, four ordinary decisions went wrong. Nobody had seen any of them as a decision.

**Tuesday, December 1.** Dave asked the worker for "a list of vendors worth paying early for the 2 percent discount, strategic vendors first." He approved its list of 14 large suppliers, all of which already offer that discount. Brightline promises to pay small suppliers within 15 days of receiving their invoice. Three were already past that date, and the list delayed them another week.

**Thursday, December 3.** The auditors, the outside company that checks Brightline's accounts, asked for a schedule of the bills Brightline still owed, signed by the controller. The worker built it and drafted the email, with Dave's name and title at the bottom. Maria sent it like any other draft. Dave never saw it. It showed CAD 18,400.00 (Canadian dollars) owed to Northern Maple Paper as USD 18,400.00 (US dollars).

**Sunday, December 6.** To find duplicate vendors before the year-end tax forms, Maria uploaded the full vendor master to her personal AI account, because the company's AI workspace felt slow. The file held bank account numbers, and the Social Security numbers of 23 sole-proprietor contractors, people who each run a business on their own. Her account allowed its chats to be used for training.

**Wednesday, December 9.** Jordan, a clerk hired for year-end, asked the AI how to handle a vendor's new bank details. Through his Google Drive connector, it answered from onboarding notes written in 2025: "Confirm by replying to the vendor's email." Jordan did. The AP policy's callback rule stopped the payment: a change waits until someone phones the vendor on the number already on file. The notes had no owner, so nobody had withdrawn them.

By Friday, December 11, Dave knew about all four. His first answer was "Turn it all off." On its own, that would have stopped the useful work and left the four decisions as they were. So the worker stays off only until Monday, December 14, while he and Maria take the four back one at a time, in the order of the table above.


