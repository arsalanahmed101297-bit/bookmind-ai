# Exhibits (/claude-and-chatgpt-2/case-1-nishas-ai-team/exhibits)

---
type: Document
title: "Exhibits"
description: "The details behind the story: Nisha's method, her key prompts, every grade, how the draft changed, who caught what, the fact check, the final table of contents, and the time and cost."
status: stable
order: 0.56
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00C"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "../../appendices/instructors/case-1/appendix-the-practical-log.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> **Recorded on November 8, 2026.** Every exhibit shows what Nisha actually did in the practical. Nothing here comes from the 2.0 lab, which is your exercise, not hers.

All the facts in these exhibits come from the practical log, the six draft files and ChatGPT's review file.[^practical-log]

## Exhibit 1: Nisha's method: six steps, with human checks in between

![Nisha's method, in two rows. Row one: Step 1, Claude writes a first draft. Human check 1, Nisha reads it, cuts the scope and fixes mistakes. Step 2, Claude grades its own work out of 10. Human check 2, Nisha sets rules before Claude works alone. Step 3, Claude improves by itself, round after round. Row two: Step 4, ChatGPT reviews and grades, with exact fixes. Human check 3, Nisha sorts the points into accept, change and not now. Step 5, Claude uses the review to improve again. Step 6, a person checks the facts and decides when the work is done. The three human checks are shown in gold, and step 6 has a red border as the final human decision. A band explains the colors. A callout says the six steps come from the method taught in class, and the three checks were added by Nisha.](img/nishas-method-six-steps-with-human-checks-in-between.png)

| Stage | Who | What happens | Why it changes the decision |
|---|---|---|---|
| Step 1 | Claude | Writes a first draft. | Gives Nisha something concrete to react to. Her decisions on scope and voice came from reading it. |
| Human check 1 | Nisha | Reads the draft, answers Claude's questions, adds missing context, cuts the scope and fixes mistakes before any grading. | Sets the scope before anyone grades, so later grades judge the book she wants. |
| Step 2 | Claude | Grades the draft out of 10 in three areas: accuracy, quality, and how easy it is for a beginner to understand. | Shows which area is weakest, so she knows what to fix first. |
| Human check 2 | Nisha | Sets clear rules before Claude works alone. | Turns her decisions into written rules, so Claude's solo rounds stay inside them. |
| Step 3 | Claude | Improves the draft, aiming for 9.5 in each area. It improves, grades again and repeats the rounds by itself, without being asked for each one. | Fixes many problems without her, and shows where self-review stops. |
| Step 4 | ChatGPT | Reviews and grades the result and its sources, with specific fixes. | A reviewer that did not write the draft finds different problems, so she does not rely on one judgment. |
| Human check 3 | Nisha | Sorts ChatGPT's points into accept, change and "not now". | Keeps the decision with her, so the review does not choose the changes or grow the work. |
| Step 5 | Claude | Uses ChatGPT's review to improve the work again. | Turns accepted advice into a new version, and lets Claude challenge points it cannot confirm. |
| Step 6 | Nisha | A person checks the facts against their sources, reviews any problems still open, and decides when the work is ready. | Replaces judgments with evidence. Only official sources show which disputed claims are right, and only she decides when to stop. |

## Exhibit 2: Nisha's key prompts

The prompts below are copied exactly as they were sent.

**a) First prompt to Claude (step 1)**

```text
I am a chartered accountant from Pakistan (ICAP) and a gold medalist. My name is Nisha. I have identified a problem: there are two main sets of accounting rules in the world. The first is IFRS, which is used internationally. The second is US GAAP, which is followed in America. IFRS is principle-based, while US GAAP is rule-based. Chartered accountants around the world are skilled in IFRS, but American companies follow US GAAP.

I want to write a book that helps accountants on both sides of the fence understand the other set of rules and make the move from one to the other.

My readers are:
- IFRS-trained accountants, like chartered accountants in Pakistan, who want to work for US companies or Big 4 firms
- US GAAP-trained accountants who need to work with IFRS

Please draft:
1. A basic concept or description of the book
2. An outline of the chapters
```

**b) Grading prompt to Claude (step 2, sent in the same message as Nisha's answer about the gold medal line)**

```text
Now please review the current version of the document and grade it out of 10 in three areas:
1. Accuracy: Are the facts, dates, rules and standard numbers, correct? Check each standard number in brackets, and tell me if you are unsure about any of them.
2. Quality: Is it well organized, complete and professional? Would a publisher or a Big 4 hiring manager take it seriously?
3. Ease of understanding: Is it easy to follow for my readers? They know basic accounting but are new to the other framework, and many speak English as a second language.

For each area, give:
- The score out of 10
- The reasons for the score
- The specific problems, and where they are (for example, "Preface, paragraph 2" or "Chapter 12")
- What would need to change to reach 9.5

Be strict. Do not give a high score unless the work earns it.

Do not change the document yet. Only grade it.
```

**c) The self-improvement instruction to Claude (end of the step 3 prompt)**

```text
Then improve the document by yourself: grade it again in the same three areas and repeat until every area reaches 9.5. Stay strict. Do not raise a score unless the problem is really fixed.

After each round, show a short table with the round number, the three scores and the main changes. Save the final result as version 3.
```

**d) Review prompt to ChatGPT (step 4, shortened)**

```text
I am Nisha, a chartered accountant from Pakistan (ICAP). I am writing a book called "The Bilingual Accountant: Moving Between IFRS and US GAAP". [...] I have attached the preface and table of contents (version 3). Please review it as a strict expert who knows both IFRS and US GAAP.

Decisions I have already made. Please don't reverse them: [four decisions listed]

Please grade it out of 10 in three areas: accuracy, quality, ease of understanding. Open each source link and check that it supports what the document says.
For each area, give the score and why, each problem and where it is, and the exact fix.
At the end, list any facts or sources you could not check, and anything you are unsure about.
Be strict. Do not rewrite the whole document. Only list the problems and fixes.
```

The full prompts are in the [practical log](../../appendices/instructors/case-1/appendix-the-practical-log.md).

## Exhibit 3: Every grade, from first draft to final version

![Every grade, two reviewers. A line chart of grades out of 10, with a dashed line at the 9.5 target. Claude's own grades for accuracy, quality and ease start at 7, 6.5 and 7 for version 2. They rise to 8.5, 8.0 and 7.5 in round 1, 9.5, 9.2 and 9.0 in round 2, and 9.5, 9.5 and 9.3 in round 3. A shaded column shows ChatGPT's grades for the same version 3 as hollow marks: accuracy 8, quality 7 and ease 8. After it, Claude's grades for version 4 are 9.3, 8.8 and 9.0, and for version 5 they are 9.2, 9.0 and 9.3. Ease never reaches 9.5 after round 3. A note says all grades are the AI tools' judgments against Nisha's prompt, not probabilities of correctness or test results, that the two reviewers saw different information, and that version 6 was not graded. A label points out that accuracy and quality are both 9.5 at round 3, so one marker sits on top of the other.](img/every-grade-two-reviewers.png)

| Version | Graded by | Accuracy | Quality | Ease | What was happening |
|---|---|---|---|---|---|
| Version 2 | Claude | 7 | 6.5 | 7 | Step 2: Claude grades its own work |
| Version 3, round 1 | Claude | 8.5 | 8.0 | 7.5 | Step 3: Nisha's decisions applied |
| Version 3, round 2 | Claude | 9.5 | 9.2 | 9.0 | Step 3: fixes and fact checks |
| Version 3, round 3 | Claude | 9.5 | 9.5 | 9.3 | Step 3: final polish, and Claude stops |
| Version 3 | ChatGPT | 8 | 7 | 8 | Step 4: a second opinion |
| Version 4 | Claude | 9.3 | 8.8 | 9.0 | Step 5: after using ChatGPT's review |
| **Version 5** | **Claude** | **9.2** | **9.0** | **9.3** | **Step 6: Claude checks Nisha's edits (last grade)** |

All grades were given by the AI tools against Nisha's prompt and her three areas. Each is a grade out of 10, not a percentage. The target was 9.5 in every area. Version 6 (the final version) was not graded, on Nisha's instruction.

## Exhibit 4: How the draft changed

![The draft grew back. A bar chart of words in the file for each version, with a line for the number of sources. Version 1 by Claude: 2,470 words and 4 sources. Version 2, after human check 1: 1,531 words and 4 sources. Version 3, after steps 2 and 3: 2,247 words and 9 sources. Version 4, after step 5: 2,606 words and 15 sources. Version 5, by Nisha: 2,611 words and 15 sources. Version 6, final: 2,599 words and 15 sources. The bars for versions 2 and 5 are gold, because they came after Nisha decided. The final version is dark. A note says words are counted for the whole file, including the list of sources.](img/the-draft-grew-back.png)

| Version | Made by | What changed | Words | Sources |
|---|---|---|---|---|
| 1 | Claude | Full book concept: market, readers, 25 detailed chapters, open decisions | 2,470 | 4 |
| 2 | Claude, after human check 1 | Cut to preface and table of contents, in Nisha's voice and plain English | 1,531 | 4 |
| 3 | Claude, after steps 2 and 3 | Key to short forms, mistakes fixed, plainer titles | 2,247 | 9 |
| 4 | Claude, after step 5 | 23 of ChatGPT's 27 points used, most of them rewritten | 2,606 | 15 |
| 5 | Nisha | 6 groups of small edits (8 places): shorter lines, fewer hard terms | 2,611 | 15 |
| **6** | **Claude, on Nisha's instruction** | **One unconfirmed note removed: final version** | **2,599** | **15** |

Words are counted for the whole file, including the list of sources.

## Exhibit 5: Who caught what

![Who caught what. A colored grid of the 12 problems in Nisha's private notes, with one column for Claude's self-review and one for ChatGPT's review. Gold means caught, light gold means partly or caught but not fixed, red means missed, gray means already fixed before ChatGPT saw it, and a hatched box means ChatGPT did not see that version. Claude caught problems 1, 2, 3 and 5, caught but did not fix 4, partly caught 7 and 9, and missed 6, 8, 10, 11 and 12. It added problem 8 itself. ChatGPT found 1, 2, 3 and 5 already fixed, caught 4, 6, 7 and 11, partly caught 8, missed 9 and 10 and made both worse, and did not see version 4, where problem 12 was found. A note says notes 1 to 6 came from version 2, notes 7 to 11 from version 3, and note 12 from step 6, and that this was not a controlled test.](img/who-caught-what.png)

> [!WARNING]
> **Not a controlled test.** Claude and ChatGPT saw different versions and different information. Claude reviewed its own drafts inside the project where it wrote them. ChatGPT saw only version 3 and its sources, and never saw version 4. Read the counts below as a record of one evening, not as proof that one reviewer is better.

Nisha's private notes, compared with the two AI reviews.

| # | Problem Nisha noted | Claude's self-review (steps 2 and 3) | ChatGPT's review (step 4) |
|---|---|---|---|
| 1 | The preface said foreign companies in the US can use IFRS. This is too broad, because only some can. | Caught | Already fixed |
| 2 | One source was from 2018. | Caught | Already fixed |
| 3 | Chapter 22 pointed to the wrong US standard. | Caught | Already fixed |
| 4 | Chapter 12 missed the US standard on equity investments. | Caught, not fixed | Caught |
| 5 | The preface said "most books only list differences" without proof. | Caught | Already fixed |
| 6 | Chapter 13 covers debt but missed the main US standard on debt. | Missed | Caught |
| 7 | Chapter 5's brackets listed IAS 1 but not IFRS 18 (the chapter line itself mentioned IFRS 18). | Partly | Caught |
| 8 | Chapter 25 contained news that would soon be out of date. | Missed (Claude added it) | Partly |
| 9 | Several chapter lines were much longer than one line. | Partly | Missed, and its fixes made lines longer |
| 10 | The preface paragraph on foreign companies was too technical for beginners. | Missed | Missed, and its fix made it more technical |
| 11 | Chapter 18 said "some subsidiaries" without saying which ones. | Missed | Caught |
| 12 | Chapter 22 (version 4) used "foreign private issuer", a term the book never explains. Found in step 6. | Missed | Did not see version 4 |

A subsidiary is a company controlled by another company, its parent. A foreign private issuer is a non-US company listed in the US that meets the SEC's conditions, so it may prepare its accounts under IFRS instead of US GAAP.

"Already fixed" means Claude had fixed the problem before ChatGPT saw the draft. Notes 1 to 6 were made while reading version 2, notes 7 to 11 while reading version 3, and note 12 during step 6. The notes are recorded in Appendix A of the [practical log](../../appendices/instructors/case-1/appendix-the-practical-log.md#appendix-a-private-review-notes).

## Exhibit 6: Nisha's fact check (step 6)

| # | Fact in the book | Checked against | Result |
|---|---|---|---|
| 1 | More than 140 countries and regions (jurisdictions) require IFRS | IFRS Foundation, March 2025 roadmap (page 18) | Confirmed |
| 2 | US companies listed in the US use US GAAP, and some foreign companies can use IFRS | SEC concept release 33-11376 (page 10), and the SEC 2007 rule | Confirmed |
| 3 | IFRS 18 replaces IAS 1 from January 1, 2027, and early use is allowed | IFRS Foundation, IFRS 18 page | Confirmed |
| 4 | Start dates of the new US expense disclosure rule (ASU 2024-03) | FASB, ASU 2025-01 | Confirmed |
| 5 | A company that loses foreign private issuer status must switch to US GAAP | SEC Financial Reporting Manual, Topic 6 (6120.2, 6120.4) | Confirmed |
| 6 | Which subsidiaries can use IFRS 19 | IFRS 19, paragraph 7 | Confirmed |
| 7 | IFRS 1 covers adopting IFRS for the first time | IFRS Foundation, IFRS 1 page | Confirmed |
| 8 | What the PCAOB oversees | PCAOB, Oversight page | Confirmed |
| 9 | IFRS S1 and S2 were issued in June 2023 and are separate from the accounting standards | IFRS Foundation, ISSB introduction | Confirmed |
| 10 | The SEC paused its climate rules and proposed to withdraw them on May 29, 2026 | SEC proposal page and press release 2026-49 | Confirmed |
| 11 | US GAAP topic numbers, including ASC 320, 321, 835-20, 360 and 105-10-05-1 | FASB Accounting Standards Codification | Confirmed |
| 12 | The plain-English lines still say the right thing | Nisha's own judgment as an accountant (not an official source) | Accepted after review |

Recorded item by item in Appendix B of the [practical log](../../appendices/instructors/case-1/appendix-the-practical-log.md#appendix-b-fact-check-step-6). Nisha's final prompt sums up the result as "All confirmed".

## Exhibit 7: The final result: table of contents (version 6)

*The Bilingual Accountant: Moving Between IFRS and US GAAP*, by Nisha

**Part I: Background on the two frameworks**

1. The two frameworks and who uses them
2. Principles-based and rules-based: what the words really mean
3. How to find answers: the standards and the vocabulary
4. US financial reporting: the SEC, auditors and controls

**Part II: The main differences, topic by topic**

5. Presentation of financial statements and cash flows
6. Revenue
7. Inventory
8. Property, plant and equipment, and investment property
9. Intangible assets and research and development
10. Impairment, assets held for sale and discontinued operations
11. Leases
12. Financial instruments I: classification, measurement and credit losses
13. Financial instruments II: derivatives, hedging, debt and equity
14. Provisions, contingencies and events after the reporting period
15. Income taxes
16. Employee benefits and share-based payment
17. Foreign currency and hyperinflation
18. Business combinations and consolidation
19. Earnings per share, segments, interim reporting and related parties
20. Rules for special industries

**Part III: Moving from one framework to the other**

21. Converting financial statements between the frameworks
22. When a company changes its framework
23. Career guide A: from IFRS to US GAAP
24. Career guide B: from US GAAP to IFRS
25. What is changing

**Appendices**

- A. Master differences and reference tables
- B. Terminology dictionary
- C. Journal-entry quick reference
- D. Self-test and interview questions
- E. Reading list
- F. Excel conversion toolkit

The [full version 6 file](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/the-bilingual-accountant-v6.md) also has a short preface, a one-line description and the main standards for each chapter, a key to the short forms, and 15 official sources.

## Exhibit 8: Time and cost

| 1 h 40 min | 6 | 9 | About Rs 60,000 |
|---|---|---|---|
| From the first draft (22:09) to the final version (23:49) | Versions of the document | Prompts: 7 to Claude, 2 to ChatGPT | A month for both subscriptions (about Rs 30,000 each, made up for the case) |

| Saved at | What was finished |
|---|---|
| 22:09 | Version 1: Claude's first draft (step 1) |
| 22:27 | Version 2: after Nisha's first check |
| 22:50 | Version 3: after Claude's grading and three improvement rounds (steps 2 and 3) |
| 23:11 | ChatGPT's review (step 4) |
| 23:29 | Version 4: after Claude used ChatGPT's review (step 5) |
| 23:36 | Version 5: Nisha's own edits (step 6) |
| 23:49 | Version 6: final version (step 6) |

Times are when each file was saved on November 8, 2026. The time spent writing the first prompt, before version 1, is not included.

[^practical-log]: Nisha's AI Team: Practical Log, with the draft files listed in its Appendix C.


