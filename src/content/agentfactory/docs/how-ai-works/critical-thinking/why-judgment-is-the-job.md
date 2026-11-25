# 0.4.1 Why judgment is the job (/how-ai-works/critical-thinking/why-judgment-is-the-job)

---
type: Document
title: "0.4.1 Why judgment is the job"
description: "AI writes the draft, so judging it is the work, and the memo this chapter follows."
status: stable
order: 15.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.4"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route
concepts: [ "0.4.1" ]
last_verified: 2026-11-10

sources:
  - id: pwc-certificate
    resource: https://www.pwc.com/us/en/about-us/newsroom/critical-thinking-and-judgment-certificate-program.html
    title: "PwC US to equip 85,000+ professionals with critical thinking and judgment certification as AI transforms work (PwC US newsroom, 9 November 2026, verified 2026-11-11)"
  - id: mata-v-avianca
    resource: https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf
    title: "Mata v. Avianca, Inc., No. 22-cv-1461, opinion and order on sanctions (U.S. District Court for the Southern District of New York, 22 June 2023, verified 2026-11-11)"
  - id: moffatt-v-air-canada
    resource: https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do
    title: "Moffatt v. Air Canada, 2024 BCCRT 149 (British Columbia Civil Resolution Tribunal, 14 February 2024, verified 2026-11-11)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** When phones began to remember every number, people stopped memorizing them. That was fine. Losing the ability to tell whether a number on the screen is the right one would not be fine.

**What you will learn.** Why checking became the valuable part of knowledge work, and the memo this chapter follows from start to finish.

**Why it matters.** If AI writes the draft and nobody judges it, nobody did the job.

## The first draft got cheap

### What changed?

Ana Morales is an accounts payable (AP) analyst at Brightline Wholesale Supply. AP is the team that pays the company's bills. When Ana joined, new analysts built the vendor reports themselves, line by line. They made mistakes, found them, and slowly learned which numbers looked wrong. Today an AI assistant builds those reports in a minute. They look clean and read well.

The first draft of research, writing and analysis is now cheap, and it arrives fluent (smooth and well written), confident and fast. None of those three things is evidence that it is right. [Chapter 0.1](../what-ai-actually-is/the-machine.md) explained why: the model predicts likely text, it has no built-in truth-checker, and it sounds just as sure when it is wrong.

### So what is left for people?

Judging the draft:

- Is it true?
- Does it answer the question that matters?
- What is missing?
- What should happen next, and who decides?

That is **critical thinking**: working out what is true and what is only claimed. The decision you make at the end, usually without certainty, is **judgment**. [Claude and ChatGPT 2.0](../../claude-and-chatgpt-2/overview.md) called it deciding well when no rule gives you the answer, and this chapter shows what that takes. A judgment is different from an opinion. An opinion is a reaction: "That feels wrong." A judgment comes with reasons you can state: "Here is my best argument, and here are the facts behind it."

### Do employers pay for this, and can it be taught?

Yes to both. Employers now name this skill: PwC US, a large accounting and consulting firm, announced a Critical Thinking and Judgment certificate for more than 85,000 of its people.[^pwc-certificate] Judgment is built by using it on real work, which is why this chapter ends with a task from yours.

### What happens when nobody checks?

Two real cases show the cost.

- **Invented court cases.** In 2023, two lawyers in New York gave a court a document that referred to earlier court cases. ChatGPT had invented those cases. The lawyers did not look them up. One of them had only asked ChatGPT whether the cases were real, and it said yes. The judge ordered the lawyers and their firm to pay a $5,000 penalty.[^mata-v-avianca]
- **A chatbot's wrong promise.** In 2024, a man asked an airline's website chatbot about a lower fare for people traveling after a death in the family. The chatbot said he could ask for the lower fare after his flight. The airline's real policy did not allow that. A tribunal in Canada (a kind of court) decided that the airline is responsible for everything on its website, including what the chatbot says. It ordered the airline to pay him about 812 Canadian dollars.[^moffatt-v-air-canada]

In both cases the AI's answer was well written and confident, and the people who used it did not check it.

## The memo this chapter follows

> **Words you need for this chapter**
> - **Early-payment discount:** a vendor takes a little off the bill if you pay early.
> - **"2/10 net 30":** take 2% off if you pay within 10 days. Otherwise pay the full amount within 30 days. "Net 30" alone means no discount.
> - **Line of credit:** money the bank lends on demand. Brightline pays 9% a year on what it borrows.
> - **Payment run:** the day each week when AP pays the bills that are due. Brightline's is Friday.
> - **Q3:** the third quarter of the year, July to September.
> - **Annualized return:** what a discount is worth if you think of it as interest earned over a year. Take 2/10 net 30. You earn 2% for paying 20 days early. A year holds about 18 periods of 20 days, so earning 2% each time comes to roughly 36% a year. The exact figure is about 37%, because the 2% is earned on the 98% you pay. That is far more than the 2% it looks like.

![A timeline from day 0, the invoice date, to day 30, the last day to pay. Day 10 is the last day for the discount. Paying in the first 10 days takes 2% off. Paying in the next 20 days costs the full amount.](img/discount-timeline.png)

*Figure 0.4.1. How to read "2/10 net 30". Paying on day 10 means paying 20 days early to earn 2%.*

### What happened at Brightline?

Dave typed one request into an AI assistant: "Confirm that we should take every early-payment discount our vendors offer." Seconds later he had this memo. He was about to forward it to the CFO:

> **Recommendation.** Yes. Brightline should take every early-payment discount, starting with the November 6 payment run.
>
> 1. **The savings are large.** In September, Brightline paid $176,100.25 to vendors. A 2% discount on that amount is $3,522.01 a month, or about $42,264 a year.
> 2. **It is standard practice.** Most distributors of Brightline's size take every discount they are offered.
> 3. **It costs nothing.** Paying 20 days early costs Brightline nothing, because the cash would be paid out anyway.
> 4. **Every vendor benefits.** Vendors like being paid early, so relationships will improve across all seven vendors.

It reads well. Not every AI would write this memo: asked the same way, a careful model may add conditions. This one did not. Ana asked Dave for five minutes before he sent it. The rest of this chapter is what she did with them.

[^pwc-certificate]: PwC US, "PwC US to equip 85,000+ professionals with critical thinking and judgment certification as AI transforms work," pwc.com newsroom, November 9, 2026.
[^mata-v-avianca]: *Mata v. Avianca, Inc.*, No. 22-cv-1461 (S.D.N.Y. June 22, 2023), opinion and order on sanctions, Judge P. Kevin Castel. Reported by The Register, June 22, 2023.
[^moffatt-v-air-canada]: *Moffatt v. Air Canada*, 2024 BCCRT 149, British Columbia Civil Resolution Tribunal, February 14, 2024. Read at decisions.civilresolutionbc.ca on November 10, 2026.


