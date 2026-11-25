# Chapter 0.2. Markdown: The Language AI Reads and Writes (/how-ai-works/markdown/overview)

---
type: Document
title: "Chapter 0.2. Markdown: The Language AI Reads and Writes"
description: "Every AI reply is markdown, plain text with marks for its shape: the app turns the marks into a neat page, a plain text box shows them, and a neat page is only as right as its lines."
status: stable
order: 13
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.2"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
objectives:
  - { id: CCAO-F.D2.O4, label: supporting } # Output adaptation and format selection. Primary: Chapter 6 (6.3), with formats in 5.7, and companion A2. Here: 0.2.1 organizes notes for the model, and 0.2.2 chooses a shape by its next reader. Fields, types and checks stay in 5.7
word_budget: 2500
prerequisites: [ "0.1" ]
artifact: "brightline-ap-notes.md: Brightline's AP notes as a markdown page, each rule checked against AP policy version 3 and naming its line, and what no line of the policy settles listed under Open questions. Nobody has approved it"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch0-3.zip"
delta_entries: [] # none planned. D-003 shares this objective, and its answer stays true: this chapter never calls an output an artifact
concepts: [ "0.2.1", "0.2.2", "0.2.3", "0.2.4" ]
last_verified: 2026-10-17
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

Every reply an AI chat writes is plain text with a few marks in it, whether you ask for marks or not. A # sign goes in front of a heading, stars go around bold words, and a table is drawn with | bars. This plain text format is called **markdown**. The app turns the marks into a neat page, so in the chat you never see them.

One thing a neat page cannot do is check itself. A wrong rule in a neat bullet point looks as sure as a right one.

After this chapter you can see the marks behind a neat page, and get the shape the next place needs. You can give the AI your notes in a clear shape. You can check a neat page line by line against its source before you trust it. And you can keep a page to use again.

## Why it matters

It is Friday, September 18, at 4:40 p.m. Dave, Brightline's controller, needs this week's payment list before the payment run closes, in twenty minutes. He approves the run in Brightline's accounting system, so you ask the AI for the list. A neat answer comes back: a heading, a table of six invoices, and the total in bold. You click Copy under the reply, and paste it into the payment run's note box. This time, the marks come with it. At 4:52 Dave opens the run, and this is the note he sees.

```text
## Payments due by Friday, September 18

| Vendor | Invoice | Amount |
|---|---|---:|
| Midwest Packaging | 4519 | $2,184.60 |
| Buckeye Office Supply | BO-23561 | $312.45 |
| County Freight | 5208 | $6,420.00 |
| Maple Paper | MPL-1187 | $1,058.75 |
| Midwest Packaging | 4526 | $3,977.10 |
| Buckeye Office Supply | BO-23577 | $486.20 |

**Total: $14,439.10**
```

He cannot check six amounts in that before the run closes. The run waits until Monday, and all six invoices are paid late. The note box takes plain text only, so it shows the marks.

So what are these marks, and how do you get a reply in the shape the next place needs?


