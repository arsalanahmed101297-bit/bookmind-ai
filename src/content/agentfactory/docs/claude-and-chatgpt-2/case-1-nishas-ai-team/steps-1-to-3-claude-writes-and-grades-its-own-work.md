# Steps 1 to 3: Claude writes and grades its own work (/claude-and-chatgpt-2/case-1-nishas-ai-team/steps-1-to-3-claude-writes-and-grades-its-own-work)

---
type: Document
title: "Steps 1 to 3: Claude writes and grades its own work"
description: "Claude writes a first draft, Nisha takes control of it, Claude grades its own work, Nisha sets rules, and Claude improves the draft by itself in three rounds."
status: stable
order: 0.52
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Self-grading" ]
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

## Step 1: The first draft

Nisha created a project in Claude (one conversation for a big job, which keeps the job's files with it) and gave it no special instructions. She did all the work in that one conversation, and no threads were started.

She chose the model Claude Sonnet 5.5, on its "High" setting, which controls how much effort the model puts into thinking. Then she typed her first prompt ([Exhibit 2](exhibits.md#exhibit-2-nishas-key-prompts)). She introduced herself, explained the IFRS and US GAAP problem, named her readers and asked for two things: a description of the book and an outline of the chapters.

It ended with these lines:

```text
Please draft:
1. A basic concept or description of the book
2. An outline of the chapters
```

Claude's answer was much bigger than she expected: 2,470 words. It suggested the title *The Bilingual Accountant*. According to the version 1 file, it described the market, compared the two groups of readers in a table, planned 25 chapters in three parts, listed six appendices and gave her five decisions to make. It had even searched the web and added four sources.

Two things stood out. First, **Claude disagreed with her.** Nisha had written that IFRS is principle-based and US GAAP is rule-based. Claude said this was "only partly true". In some big areas, like revenue, the two sets of rules are now almost the same. It suggested a whole chapter to explain this.

Second, **Claude was honest about what it had not checked.** It said it had checked some dates on the web, but the chapter-by-chapter differences came "from my knowledge". It had not checked the route from ICAP to a US accounting qualification.

## Human check 1: Nisha takes control

Nisha did not move straight to grading. "If I grade this now," she thought, "I will be grading something I did not ask for." She read the draft carefully, as an accountant, and made her decisions:

- She answered Claude's five questions. The book would lead with the IFRS-to-US GAAP direction, because that was her own path.
- She added what she had forgotten to say: her personal reason for writing the book, and that many readers speak English as a second language, so the writing must be plain and simple.
- She cut the scope to "only two parts", a preface and a table of contents (the list of the book's chapters), and told Claude: "Remove everything else."
- She accepted Claude's correction about principles and rules.
- She caught a mistake. Claude's word list paired "inventory" and "stock" the wrong way round. She told Claude that IFRS uses "inventories", that "stock" is British usage, and that in the US "stock" means shares.
- She asked for official sources "where possible", instead of summaries from firms' websites. She named three: the IFRS Foundation, which oversees IFRS, the Financial Accounting Standards Board (FASB), which writes US GAAP, and the US Securities and Exchange Commission (SEC), which regulates US stock markets.
- She chose the title: *The Bilingual Accountant: Moving Between IFRS and US GAAP*.

Version 2 was shorter (1,531 words), written in Nisha's voice and in plain English. Claude asked two small questions: should the preface mention her gold medal, and was the length all right? Nisha said yes to both.

## Step 2: Claude grades its own work

Nisha asked Claude to grade version 2 out of 10 in three areas: **accuracy**, **quality** and **ease of understanding** for her readers. She told it to be strict, and not to change anything yet ([Exhibit 2](exhibits.md#exhibit-2-nishas-key-prompts)).

**These grades are the AI's own opinion**, judged against Nisha's three areas. They are not a test result, and a different reviewer could score the same work differently.

Claude's grades were low: **accuracy 7, quality 6.5, ease 7** ([Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version)). It found real mistakes in its own work. One chapter probably pointed to the wrong US standard. One sentence said that foreign companies in the US "can choose IFRS", which is only true for certain companies. One source was from 2018. Claude even criticized the line it had just added: "I am also a gold medalist." A gold medal for what?

Claude also admitted its limits. It had not checked 19 of its US GAAP references against the official US GAAP database, called the *Codification*. Its topics are numbered, and the numbers start with "ASC" (for example, ASC 330 is the topic on inventory). Claude said it was confident of them "from working knowledge", but the Codification was "behind a login".

Two things worried Nisha. First, some of Claude's advice pulled in opposite directions. To improve accuracy, it said "add the missing standard numbers". To improve ease, it said "cut the lists to two or three". Someone had to choose. Second, Claude asked an uncomfortable question: how could Nisha say she "understands both frameworks" while she was still learning one of them?

## Human check 2: Rules before Claude works alone

Step 3 would let Claude improve the draft by itself, round after round. Nisha knew that without clear rules the draft would grow again. So before she started it, she made her decisions:

- No new chapters. Missing topics go into existing chapters.
- Only the two or three main standards for each side (IFRS and US GAAP), plus a short key that explains the abbreviations.
- The exact wording of her gold medal line.
- A more modest claim: the book is her way of "showing what I have learned", not proof that she is already an expert.
- "Grade accuracy on what you can check, and give me a list of the ASC numbers you could not check. I will check them myself at the end."
- Then improve the draft by yourself and "repeat until every area reaches 9.5", with a table of scores after each round. She set no limit on the number of rounds.

## Step 3: Claude improves its own work

Claude worked through three rounds by itself ([Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version)). Its scores (accuracy / quality / ease) rose from 7 / 6.5 / 7 to **9.5 / 9.5 / 9.3**. Then it stopped, even though ease of understanding was still below the 9.5 target and Nisha had asked it to keep going until every area reached 9.5. It explained that the last gap could only be closed by testing the text with real readers, which it could not do. It did not push its own score up just to reach the target.

Version 3 was clearer. It spelled out every abbreviation, used plain chapter titles and added a key to the short forms. Claude had also checked more facts: the US GAAP topic numbers it could not confirm fell from 19 to 2. It checked them against FASB's published documents, not the Codification itself. Claude also said that confirming a number is not the same as checking that the topic fits the chapter. But the document had grown again, and the sources had gone from 4 to 9 ([Exhibit 4](exhibits.md#exhibit-4-how-the-draft-changed)).

From version 2 onward, Nisha had kept private notes of the problems she noticed. She did not share them with either AI. She wanted to see later which reviewer would catch what ([Exhibit 5](exhibits.md#exhibit-5-who-caught-what)).[^practical-log]

Next, [Steps 4 to 6: a second opinion and the human check](steps-4-to-6-a-second-opinion-and-the-human-check.md).

[^practical-log]: Nisha's AI Team: Practical Log, entries 1 to 4 and Appendix A.


