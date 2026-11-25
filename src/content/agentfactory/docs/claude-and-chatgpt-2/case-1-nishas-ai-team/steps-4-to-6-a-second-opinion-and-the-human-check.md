# Steps 4 to 6: a second opinion and the human check (/claude-and-chatgpt-2/case-1-nishas-ai-team/steps-4-to-6-a-second-opinion-and-the-human-check)

---
type: Document
title: "Steps 4 to 6: a second opinion and the human check"
description: "ChatGPT reviews the draft, Nisha filters its points, Claude uses the review, and Nisha makes her own edits, checks the facts and calls the work final."
status: stable
order: 0.53
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Second opinion" ]
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "../../appendices/instructors/case-1/appendix-the-practical-log.md"
  - id: review-file
    title: "ChatGPT's review of version 3: The Bilingual Accountant v3 - Expert Review.md (separate file, not included)"
    resource: "The Bilingual Accountant v3 - Expert Review.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Step 4: A second opinion from ChatGPT

Next, Nisha created a Project in ChatGPT. She chose the model GPT-6 Astra (older than the GPT-6.2 models in the [Tour](../tour/chatgpt.md); her plan still offered it), on its "medium" setting. She uploaded version 3 and a review prompt ([Exhibit 2](exhibits.md#exhibit-2-nishas-key-prompts)). She asked for the same three grades, with exact fixes, and listed the decisions she had already made so that ChatGPT would not undo them. She did *not* tell ChatGPT Claude's scores, or that Claude had written the draft. She wanted a second opinion that the first review had not shaped.

ChatGPT's grades were much lower: **accuracy 8, quality 7, ease 8**. That was 1.3 to 2.5 points below Claude's own grades for the same document.

ChatGPT's review was detailed: 27 numbered points, most with exact new wording. With a second, one-line prompt, Nisha asked ChatGPT to save the review as a file. According to ChatGPT's review file, it had opened all ten links in the nine sources (one source had two links) and checked each one.[^review-file] It found technical problems that Claude had missed or only partly fixed. Chapter 5's list of standards showed IAS 1, the current standard on presenting accounts, but not IFRS 18, which replaces it from 2027. Claude had added a line about IFRS 18 to the chapter in step 3, but not to its list of standards. A book for readers in 2027 and later needed both. The chapter on debt did not list the main US standard on debt. And one chapter put a new US rule under "presentation" changes, when the rule really adds extra notes to the accounts.

The review had weaknesses too. Its wording was formal and technical, with phrases like "domestic SEC registrants". It suggested adding more content again. It brought in new facts that would need checking. And it suggested that Nisha drop her personal story, because it made the book sound like "a learning portfolio".

## Human check 3: Filtering the second opinion

Nisha did not pass ChatGPT's review straight to Claude. She sorted its 27 points first:

- **20 points: accept**, but rewrite in plain English.
- **3 points: accept with her own changes.** She kept the preface simple. She kept her personal story and added a line about how it helps readers. And she moved dated news out of the chapter list.
- **4 points: not now.** They would be used later, when writing the appendices and chapters.

She also set four rules:

1. Do not copy the reviewer's wording if it is long or technical.
2. Keep each chapter line to one or two short sentences.
3. Do not add anything she had not accepted.
4. Check every new fact before using it, and leave it out if it cannot be checked.

## Step 5: Claude uses the review

Claude produced version 4. It checked ChatGPT's new facts against official web pages, confirmed four of them and left out two details because the pages it opened did not mention them.

Nisha noticed something here. **Both details Claude left out were actually true.** One was about IFRS 1, the standard for companies adopting IFRS for the first time. The other was about the PCAOB, the body that oversees audits of companies listed in the US. Claude had checked short summary pages, not the full standards. "Not found on this page" did not mean "wrong". Nothing false had gone into the draft. It was only less detailed. So Nisha left it as it was.

Claude's grades for version 4 were **9.3 / 8.8 / 9.0**. These were lower than the grades it had given version 3, even though version 4 included fixes from both reviews. One possible reason is that Claude became stricter after seeing ChatGPT's lower grades, but the scores alone cannot prove why. It also said that quality was held back partly by Nisha's own decision to postpone some additions. As she had asked, Claude also gave her a list of 14 facts to check herself.

## Step 6: The human check

The last step belonged to Nisha. She did it in three parts.

**1. Her own edits (version 5).** She made six groups of small edits, touching eight places in the document. The main ones were:

- She shortened three long chapter lines.
- She removed hard terms such as "public accountability" from the chapter list. The exact terms stayed in the sources.
- She noticed that Chapter 22 used the term "foreign private issuer" (a non-US company listed in the US that may use IFRS there), which the book never explained. Neither AI had spotted this.
- She changed one US reference in Chapter 12 to the standard on equity investments (shares held in other companies), a key difference between the two systems. Both reviews had pointed to this gap, and it was still open.
- She added a note about where one FASB rule now sits.

**2. A check on the checker.** Nisha asked Claude to review her edits and tell her about any problems, but not to change anything itself.

Claude agreed with most of the edits. It said some detail was lost when lines were shortened, and that "public companies" was looser than the official term. It also challenged one note Nisha had added, about how to access the US GAAP database, because it could not confirm it.

Claude's final grades, for the record, were **9.2 / 9.0 / 9.3**. Simplifying had made the text easier to read, but slightly less precise.

**3. The fact check.** Nisha turned Claude's list into her own 12-point checklist. She merged two items about US GAAP topic numbers, dropped two (her own ICAP record, and a renamed standard that was not yet in the book), and added one point for her own judgment ([Exhibit 6](exhibits.md#exhibit-6-nishas-fact-check-step-6)). She checked 11 points against official sources and confirmed them. For the twelfth, whether the plain-English lines still said the right thing, she used her own judgment as an accountant and accepted them. She accepted the trade-offs Claude had pointed out and removed the unconfirmed note. Then she wrote: *"This is the final version. Do not make any other changes and do not grade it again."*

Version 6 was saved at 23:49, one hour and forty minutes after the first draft was saved ([Exhibit 8](exhibits.md#exhibit-8-time-and-cost)). [Exhibit 7](exhibits.md#exhibit-7-the-final-result-table-of-contents-version-6) shows the final table of contents.[^practical-log]

Next, [A company of one](a-company-of-one.md).

[^practical-log]: Nisha's AI Team: Practical Log, entries 5 to 8 and Appendix B.
[^review-file]: ChatGPT's review is kept in a separate file, "The Bilingual Accountant v3 - Expert Review.md". It is not included in this package. The practical log records its grades and the count of 27 points (10 for accuracy, 11 for quality, 6 for ease). The details of its points come from that file.


