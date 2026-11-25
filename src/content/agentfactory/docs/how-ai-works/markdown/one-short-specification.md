# 0.2.3 A copy you can check (/how-ai-works/markdown/one-short-specification)

---
type: Document
title: "0.2.3 A copy you can check"
description: "One morning with Brightline's AP notes, the short request a copy is checked against, and why this book's working files are markdown pages."
status: stable
order: 13.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.2"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.2.3" ]
last_verified: 2026-10-16

generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** At a print shop, you fill in an order form: the size, the paper, how many copies and when you need them. When the job is ready, you check it against the form, line by line. The form is short, and each line is something the finished job must have.

**What you will learn.** One morning of turning notes into a checked page. How to ask for a copy that keeps every line.

**Why it matters.** A copy made from a vague request can drop a line you needed. A short request, with one line for each thing the copy must keep, lets you check the copy in a minute.

## One morning with the notes

### What does one morning with the notes look like?

You are in Brightline's accounts payable (AP) office, with both AI vendors' apps. Several people wrote the AP notes over time.

> We pay vendors once a week, on Friday. Anything over $5,000 needs Dave's approval before we pay it. Dave is thinking of raising the limit to $10,000 next year. If a vendor emails new bank details, confirm by replying to their email, then update the record. Nobody knows yet what to do with an invoice in Canadian dollars.

These are the lines you need from AP policy version 3, which Dave approved.

> 4.1 Invoices over $5,000.00 need the controller's approval before payment.
>
> 4.3 The controller approves every weekly payment run as a whole, in addition to 4.1.
>
> 5.1 Never change a vendor's bank details because of an email. Call the vendor back on the phone number already in the vendor record.

Here is the morning.


- **9:00.** In a new chat you paste the notes and ask what the approval limit is. The answer sounds sure, but nothing in the paragraph marks which line is the rule and which is Dave's idea.
- **9:04.** You ask for the notes in markdown, under Rules, Remarks and Open questions. Now you see each line's place. The $10,000 line is under Remarks, where it belongs. It is the wrong limit from 0.1 again, and this time it comes from a colleague's note, not from training. The bank-details line is under Rules, as two neat steps.
- **9:08.** You attach the policy and check each rule against it. The bank-details rule says the opposite of line 5.1. The policy is approved and the notes are not, so line 5.1's words replace it.
- **9:10.** "Anything over $5,000" came back as "Payments over $5,000". So you ask for line 4.1's own words, "Invoices over $5,000.00", with "(policy 4.1)".
- **9:12.** Line 4.3 says the controller approves "every weekly payment run", but none of these lines names Friday, the day the notes give. So the day goes under Open questions, with the line about Canadian dollars. You save the page as `brightline-ap-notes.md`.
- **9:14.** You give each AI vendor the page and the short request below, for a web page Dave can share with the AP team. You check each web page against `brightline-ap-notes.md`. One has left out the open question, so you ask that one again.
- **9:20.** In a new chat, you attach `brightline-ap-notes.md` and ask whether a $7,800 invoice needs Dave's approval. The answer says yes, and names policy 4.1. You ask about an invoice in Canadian dollars, and the answer says the notes leave it open.

Nobody has approved the page yet. [Chapter 8](../../managing-ai-workers/context-memory-knowledge-and-state/configure-the-workspace.md#what-dave-approves-the-official-record) shows how a company approves a page like it.

## A request the copy can be checked against

### How do you ask for a copy that keeps every line?

With a short **specification**, which is a request written as a markdown page, with one line for each thing the copy must keep. Dave's web page needed five lines:

```markdown
## A web page from brightline-ap-notes.md

- Every rule, in its own words, with its policy line.
- The open questions, under their own heading.
- No remarks.
- Nothing that is not on the page.
- Easy to read on a phone.
```

Each line is one thing you check when the copy comes back. At 9:14, the copy with no open question failed the second line. A vague line, such as "make it look good", is no use. You cannot check it, so a bad copy passes it.

### Why are this book's working files markdown?

Because each one is read again, by people and by AIs, and checked line by line. The briefs you keep in [Chapter 5](../../managing-ai-workers/the-four-part-brief/overview.md), the Review Contracts in [Chapter 6](../../managing-ai-workers/the-review-contract/agree-the-checks.md) and the records in Chapter 8 are markdown pages. So are this book's lab files and answer keys. The book itself is written in markdown.



