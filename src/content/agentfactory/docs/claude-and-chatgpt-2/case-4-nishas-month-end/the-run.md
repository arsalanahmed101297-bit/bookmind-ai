# The run (/claude-and-chatgpt-2/case-4-nishas-month-end/the-run)

---
type: Document
title: "The run"
description: "One request prepares the pack in 25 minutes. Hamza checks it without Claude, Sana finds what the first run forgot, and Nisha approves by name and figure."
status: stable
order: 0.825
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "The run" ]
last_verified: 2026-11-12
sources:
  - id: deck-export
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## One request

> **New words on this page.**
>
> - **Export:** to save a copy of an artifact as an ordinary file, such as a PDF.
> - **Deposit:** money paid into a bank account.


On Tuesday, October 5, at 10:05 a.m., Hamza opened the Northgate project and typed one request.

> *"Prepare the September 2027 month-end pack."*

That was all. The rest was already in the setup: the project's instructions told Claude where the files were, what to build and what never to do. Sana's skill told it how to write the memo.

## What Claude did

Claude said what it was doing as it worked ([Exhibit 5](exhibits.md#exhibit-5-the-request-and-the-run-note)).

1. **It read the files.** September's bank lines and the ledger, from the shared drive: 3,395 bank lines and 3,404 ledger lines. The bank file was the one the worker had downloaded on Friday, October 1.
2. **It matched them, with a program.** It wrote a small program and ran it on its borrowed desk in the cloud. The program paired each bank line with a ledger line of the same amount, a date no more than five days apart, and the same name or check number where there was one. It matched 3,395 pairs. It listed two pairs under **Needs a look**, because two payments had the same amount on the same day, and Hamza confirmed them by hand. Nine ledger lines had no bank line yet: two payments in (**deposits**) and seven checks.
3. **It worked out the figure.**

| Line | Amount |
|---|---|
| Bank's closing balance, September 30 | $201,480.00 |
| Add: 2 deposits the bank has not shown yet | $6,120.00 |
| Subtract: 7 checks the bank has not paid yet | $9,300.00 |
| **Reconciled cash** | **$198,300.00** |

4. **It built the four pieces.** It put the lines and the matched list in the sheet. With Sana's skill, it wrote the memo. It filled the three slides and the cover. It used the links in the instructions, so it updated the four pieces that Hamza had made on Monday.
5. **It wrote a run note.** A few lines, saved to the drive: which files it read, how many lines it matched, the figure, and the four pieces it updated.

It finished at 10:30 a.m. Hamza had not copied a single number.

## What people did

Hamza's two days of work were now about two hours of checking, this first time. In a normal month it would be about one hour. He did four **tests**: checks he does by hand. None of them used Claude.

1. **The arithmetic.** With a calculator, using the closing balance in Claude's run note: $201,480.00 plus $6,120.00 minus $9,300.00 is $198,300.00.
2. **The matching.** He chose twenty matched pairs from the sheet at random. He read each pair against the bank's own statement in his folder.
3. **The leftovers.** He read all nine lines and found each one in Northgate's ledger. They were **timing items**.
4. **The pieces.** He opened the sheet, the memo and slide 2. All three said $198,300.00.

The figure was also the same as the cash in Northgate's ledger. So the memo's first line said:

> *Status: READY. Reconciled cash at September 30, 2027 is $198,300.00, the same as the ledger. 9 timing items. Nothing unrecorded.*

It was $3,300.00 above the bank's minimum.

## What the first run got wrong

Sana read the pack in the drive at 2 p.m. The figures were right. One thing was missing.

*"Slide 2 shows our figure. It does not show the bank's minimum beside it. The bank will look for that first."*

Hamza reached for the slide. Sana stopped him.

*"If you type it into the slide, what happens next month?"*

Hamza thought about it. Then he added one sentence to the project's instructions: *"Slide 2 shows reconciled cash and the bank's minimum, side by side."* Then he asked Claude to prepare the pack again. Six minutes later slide 2 had both figures, and the other pieces had not changed.

## Approved and sent

At 4:10 p.m. Nisha wrote in the firm's Slack channel:

*"Approved: Northgate September month-end pack, reconciled cash $198,300.00."*

Hamza exported the cover, the memo and the slides as PDF files.[^deck-export] At 4:25 p.m. he sent them to Dana from his own work address. In Cleveland it was 7:25 a.m.

![The run. Five steps in a row. Step 1, read: bank lines and ledger, from the shared drive. Step 2, match: a small program on a borrowed desk pairs 3,395 lines. Step 3, compute: 201,480 dollars plus 6,120 minus 9,300 is 198,300. Step 4, build: the sheet, the memo, the slides and the cover, from one result. Step 5, note: a run note saved to the drive. Under the steps, a band for people: Hamza checks, Sana reviews, Nisha approves by name and figure, and the PDFs go to Dana from Hamza's own work address. A band at the foot says twenty-five minutes for the setup, and the rest of the day for judgment.](img/the-run.png)

Dana answered within the hour. *"This is exactly what the bank asked for. Thank you."*

Nisha counted the people's time for the day: Hamza two hours, Sana one hour, herself fifteen minutes.

[^deck-export]: As verified on November 12, 2026, Anthropic says "Decks export to PowerPoint and PDF, or go straight to Google Slides as editable files." A doc exports as Word, PDF or Markdown, and a design as a PDF. What are artifacts and how do I use them?, Anthropic.


