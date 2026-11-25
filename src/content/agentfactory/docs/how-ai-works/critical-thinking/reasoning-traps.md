# 0.4.4 Reasoning traps, and using AI to check AI (/how-ai-works/critical-thinking/reasoning-traps)

---
type: Document
title: "0.4.4 Reasoning traps, and using AI to check AI"
description: "Common reasoning mistakes, and how to use AI to find objections."
status: stable
order: 15.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.4"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route
concepts: [ "0.4.4" ]
last_verified: 2026-11-10

sources:
  - id: mckinney-critical-thinking
    resource: https://www.youtube.com/watch?v=n-Gtvaolbqg
    title: "Mastering Critical Thinking in the Age of AI, a video (Phil McKinney, YouTube, 28 October 2026, verified 2026-11-11)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You visit a city during the one sunny week of its year. You tell everyone the weather there is wonderful. Your sample was real. But it was not typical.

**What you will learn.** Common reasoning mistakes, called traps, the ones that AI makes worse, and how to use AI to find the weaknesses in its own answer.

**Why it matters.** Good writing makes old mistakes harder to see. In the memo, several mistakes combined into one very large error.

## Traps in any reasoning

### Which traps should you learn first?

A **trap** is a reasoning mistake that is easy to make and hard to notice. Learn these five first. The memo contains four of them.

| Trap | Also called | Example | The check |
| --- | --- | --- | --- |
| 1. A sample that is not typical | Unrepresentative sample | One unusual month is used for a whole year | Is this sample normal? What in it will not happen again? |
| 2. A number with no comparison | Missing denominator | "We saved $3,000," but out of how much? | Compared with what? |
| 3. A claim that is too wide | Overgeneralization | "Every vendor benefits," from a few cases | How many cases? Which ones? |
| 4. A number that is too exact | False precision | "$3,522.01 a month" from a rough guess at the rate | How exact are the inputs? |
| 5. Counting only one side | Ignoring the cost side | Counting the savings but not the cost of getting them | What does this cost? |

### Which other traps are common?

- **Two things happen together, so one caused the other.** This is also called correlation as cause. Late payments increased after a new system arrived. Did the system cause it? Ask: what else changed at the same time?
- **Looking only for agreement.** This is also called confirmation bias. You search only for sources that support what you already believe. Ask: what would a person who disagrees show me?

### Which traps are in the memo?

Brightline's invoice export shows that September includes one invoice for $148,500, from a vendor that gives no discount. That one invoice is most of the month. The treasury note says it is a one-time payment to buy leased equipment, and that no similar payment is planned.

![One bar split into two parts. The large part, 84%, is one invoice for $148,500 for leased equipment, a one-time payment with no discount. The small part, 16%, is all the other September invoices.](img/september.png)

*Figure 0.4.5. The memo multiplied September by 12. But 84% of September is one invoice that will not happen again.*

- **Trap 1.** The yearly number is built on an invoice that will not happen again.
- **Trap 3.** The memo applies 2% to every vendor. Only four of the seven vendors give any discount, and two of those give 1%.
- **Trap 4.** The memo gives a monthly saving to the cent, from a rough guess.
- **Trap 5.** The memo says paying early costs nothing. But paying early can mean borrowing at 9%.

In the lab you will find the real number from the invoice data. It is a small part of the memo's number.

## Traps AI makes worse

### Why does AI make some traps worse?

| Trap | Also called | Why AI makes it worse | The check |
| --- | --- | --- | --- |
| Good writing taken as truth | Fluency as truth | Clear, confident writing feels reliable | Judge the evidence, not the writing |
| Trusting the machine more than yourself | Automation bias | People believe a machine's answer over their own doubt | When you doubt something, check it |
| Staying with the first answer | Anchoring | The first draft shapes every change after it | Ask again in a new chat, or ask for other options first |
| AI agreeing with you | Sycophancy | Your wording becomes its conclusion | Ask a neutral question, and ask for the argument against |
| Made-up support | Hallucination | A number or citation looks real but has nothing behind it | Ask for the source, then open it |
| General answers | Generic output | The AI does not know your situation, so it answers in general terms | What does this miss about our case? |

Knowing the names helps you notice a trap. Only checking protects you.

## Using AI to check AI

### How can AI help you find what is wrong?

Ana pasted the memo into a new chat. She asked: "Give the three strongest reasons this recommendation could be wrong. For each one, say what data would answer the question." The reply named the one-month sample, the different discount rates and the cost of cash.

These requests work well:

- **Ask for the strongest objection.** An objection is a reason that something may be wrong. Asking for objections deliberately is called **red-teaming**.
- **Start a new chat.** A new chat does not contain your earlier wording, so the AI does not stay with its first answer.
- **Ask what it cannot know.** "What could you not know from what I gave you?" The reply often names the data you need to check.
- **Compare two models,** as Nisha did in [Case 1](../../claude-and-chatgpt-2/case-1-nishas-ai-team/steps-4-to-6-a-second-opinion-and-the-human-check.md). Ask Claude and ChatGPT the same neutral question. Then read the two answers three ways. Where they agree, look there first. Where they disagree, you have found something to check. Then ask what is missing from both. That gap is where your own knowledge matters most.[^mckinney-critical-thinking]

### What are the limits?

- When two models agree, that is not evidence. They learned from much of the same text, so they can share a mistake.
- An objection from AI is a point to check. It is not yet a fact. Check it against the data.
- AI can argue well for any side. If both sides sound strong, the question is still open. It does not tell you who is right.
- If you ask the same chat "Are you sure?", it may repeat its answer, or change it to please you. Neither one is a check.

**Later in this book.** In [Part III](../../building-ai-workers/code-review/evidence-before-the-pr.md), AI workers check each other's work automatically, and the same limits apply there.

[^mckinney-critical-thinking]: Phil McKinney, "Mastering Critical Thinking in the Age of AI" (opening chapter: "Two AIs, One Question, Both Missed It"), YouTube, October 28, 2026. Viewed November 10, 2026. A practitioner source for the prompts, not research.


