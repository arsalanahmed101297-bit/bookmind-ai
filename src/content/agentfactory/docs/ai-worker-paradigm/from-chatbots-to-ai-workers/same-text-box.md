# 1.2 The same text box, a different destination (/ai-worker-paradigm/from-chatbots-to-ai-workers/same-text-box)

---
type: Document
title: "1.2 The same text box, a different destination"
description: "Why the same text box now leads either to an answer or to work, and what decides which one you get."
status: stable
order: 101.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "01"
part: I
expert_status: required
concepts: [ "1.2" ]
last_verified: 2026-10-03
sources:
  - id: openai-plugins-2023
    title: "ChatGPT plugins (OpenAI, 23 March 2023, verified 2026-10-03)"
    resource: https://openai.com/index/chatgpt-plugins/
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You text a friend, "Where should we eat tonight?" and get a name back. Then you text the same friend, "Book a table for four at 7 on Friday, under $120, and send me the confirmation." This time they go and do it. The same friend heard two kinds of request.

This lesson shows what changed behind the text box, and what decides whether you get an answer or work.

## What did the box do in 2023?

In 2023, the box mostly led to a conversation. Some products could already run code in a sandbox, a closed-off space for running code. But that was an add-on that a small group of users switched on.[^openai-plugins-2023] For most people and most requests, the answer was text, and everything beyond it was your job.

## What does the same box do in 2026?

In 2026, the same box can lead to one conversation that routes itself. A short question still gets a short answer. A clear outcome usually gets work: the whole job, from planning the steps to delivering a finished file. The table shows what now sits behind each thing you see.

| You see | What is now behind it |
| --- | --- |
| The same text box | One conversation that routes between answering and working |
| A message you type | A brief that states an outcome, its context, a format and its constraints |
| A reply | A finished file, or a document, deck or design you edit in place |
| A wait at the keyboard | A task that runs while you are away, or on a schedule |
| A browser tab | A way into your own computer's folders, browser and apps, through a desktop app |
| Scrolling back to see what happened | A panel beside the conversation that shows the plan, the outputs and the tools used |
| A small settings menu | Permissions and connections that decide what the work can touch |

## Who decides between answering and working?

Often the system does, mostly from what you write. In some products there is no mode to pick at all, so the brief now does much of the job a button used to do. An unclear request usually gets a chat answer. A clear outcome, format and limits tell the system you want work done. What it can actually do still depends on the surface you use, its tools and your permissions ([1.5](both-ai-vendors.md)). A surface here is one way a product runs work for you, such as a chat or an agent that works on its own ([2.4](../what-is-an-ai-worker/surface-and-model.md)). This is why [Chapter 5](../../managing-ai-workers/the-four-part-brief/overview.md) treats the brief as a core management skill, not a writing trick.

![The same text box routes a short question to a short answer, and a clear outcome to planning, running in an environment and delivering a finished result.](img/routing.png)

*Figure 1.2. One conversation routes between answering and working.*

```yaml interactive="build-up"
title: Same box. Watch where the request goes.
intro: Maria's Monday request was one line. Add the parts of a clear request, one at a time, and watch what the same box does with it.
start: Summarize these vendor invoices.
attachment: 15 invoice PDFs
parts:
  - label: Outcome
    adds: Build me a spreadsheet of these invoices, and flag any invoice billed twice.
    tips: true
    replaces: true
    gives: "Flagged: any invoice billed twice."
  - label: Context
    adds: Use all 15 PDFs I attached.
    gives: All 15 invoices read, and each total checked.
  - label: Format
    adds: "One row per invoice: vendor, date, total."
    gives: "One row per invoice: vendor, date, total."
  - label: Constraints
    adds: Don't contact any vendor.
    gives: Nothing sent to any vendor.
answer:
  label: Answer
  reply: A tidy paragraph comes back.
  note: Everything beyond it is her job. She copies the totals into a spreadsheet by hand.
work:
  label: Work
  steps:
    - Plans the steps
    - Reads your files
    - Writes and runs code
    - Delivers a finished spreadsheet
  file: Vendor invoices spreadsheet
  note: The box did not change. What she wrote did.
caveat: What it can do also depends on the product and your permissions.
```

## What is the most common failure?

The most common failure is to keep using the box the 2023 way. That is what Maria did on Monday, in the [chapter's opening story](overview.md).

[^openai-plugins-2023]: ChatGPT plugins, OpenAI, 23 March 2023.


