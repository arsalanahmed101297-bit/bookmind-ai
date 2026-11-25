# A firm of three (/claude-and-chatgpt-2/case-3-nishas-firm/a-firm-of-three)

---
type: Document
title: "A firm of three"
description: "Six months after her first client, Nisha has two staff and a weekly job for a U.S. distributor. Her AI Worker lives in a project that belongs to her alone, and her team cannot use it."
status: stable
order: 0.71
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00E"
part: Front
expert_status: required
concepts: [ "A firm of three" ]
last_verified: 2026-11-10
sources:
  - id: case-2
    title: "Claude and ChatGPT 2.0 Case 2: Nisha's First Client"
    resource: "../case-2-nishas-first-client/overview.md"
  - id: one-user
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: tag-scope
    title: "Anthropic, Configure per-channel access (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/admins/attach-to-scope
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Six months later

Nisha no longer worked alone. Six months after the bridge for Mark Ellis, her firm had three clients who paid every month, two staff, and a small office above a bookshop in Karachi.

She had not hired because she wanted to manage people. She hired because the work came in faster than one person could check it. Her AI Worker could prepare a file overnight. It could not sit in a client call. And it could not be the second check she now wanted on everything that left the firm.

## The people

**Hamza** had joined four months ago, in his first job after his accounting exams. He was careful and fast. He hated to keep a client waiting.

**Sana** had fifteen years in audit. She worked Monday to Thursday and reviewed the firm's work. She was the one who asked, about any number, *"How do we know?"*

Nisha owned the firm and signed every engagement letter. When she was a company of one, she had also sent every file herself.

## The client and the weekly job

**Northgate Supply** (a fictional name) sold kitchen and cleaning supplies to restaurants around Cleveland, Ohio. It had come to Nisha through Mark, who knew its owner.

Northgate's controller (the person in charge of its accounts), **Dana Ruiz**, ran a finance team of two. Northgate borrowed from its bank on a credit line (a loan it can draw on as needed), and the bank wanted a one-page cash report every Friday. Dana paid Nisha's firm $1,500 a month for one thing: a weekly **cash reconciliation**.

A cash reconciliation compares two records of the same money.

- **The bank's record.** What the bank says came in and went out.
- **The ledger.** Northgate's own books, where its staff record each receipt and payment.

The two almost never match on a given day. Most differences are **timing items**. Northgate writes a check on Tuesday, and the supplier does not cash it until the next week. A customer's check is deposited on Thursday and clears on Friday. These fix themselves.

Some differences are not timing. The bank charges a fee that nobody recorded. A clerk types 1,540 for 1,450. A payment goes out twice. These do not fix themselves. Someone has to find them.

![How a cash reconciliation works. Two boxes side by side: the bank's record with a balance of 900 dollars, and the company's ledger with a balance of 1,000 dollars. Between them, a label says the difference is 100 dollars, and asks why. Below, two possible answers. A timing item: a customer's 100 dollar check is in the ledger and the bank has not added it yet, so it fixes itself in a few days. An open item, in a red-bordered box: the bank shows a payment that is not in the ledger, so someone must find out what it was. A band says reconciled cash is only as good as these labels. A callout says a payment that has left the bank with no ledger line is not a timing item.](img/how-a-cash-reconciliation-works.png)

So the job was to explain every difference, say which kind it was, and give Dana one figure she could trust: the **reconciled cash** balance. The file was due every Friday at 9 a.m. in Cleveland. That month, 9 a.m. in Cleveland was 6 p.m. in Karachi. Dana put the figure into the bank's report the same morning.

## Why the project could not come along

In [Case 2](../case-2-nishas-first-client/building-the-ai-worker.md), Nisha had built her AI Worker as a project: one coordinator, a few threads, a Library for every version, and a nightly run. It had served her well. It could not serve a firm.

The project belonged to her account, and Anthropic's documentation was plain about it. A project belongs to one user, and it cannot be shared with another user. Projects were also not offered on team plans yet.[^one-user] And a Slack channel could not be pointed at a project.

So Hamza and Sana could not hand the worker a job, or see what it had done, unless Nisha did it for them. She thought about giving them her password. Then every action would appear as her, and nobody could say who had asked for what.

She had two choices.

| Choice | What it meant |
|---|---|
| Keep the personal worker | Everything keeps going through Nisha. She becomes the firm's slowest step. |
| Move to a team worker | Hamza and Sana can hand it work themselves. The project, its Library and its memory stay behind. |

She chose the second. The firm moved to a Team plan, and the worker moved into the place where the three of them already talked all day: Slack.

Next, [A worker with its own name](a-worker-with-its-own-name.md).

*Sources for the product facts in this story are given in full in the [exhibits](exhibits.md).*

[^one-user]: As verified on November 20, 2026, Anthropic's Projects page says "A project belongs to one user. You can't share a project or its threads with another user" and "Projects aren't offered on Team or Enterprise plans yet." Let Claude coordinate ongoing work with Projects, Anthropic.


