# Appendix: practical run sheet (/appendices/instructors/case-4/appendix-practical-run-sheet)

---
type: Document
title: "Appendix: practical run sheet"
description: "How to test the case on the product: the setup on a Team plan, the data, fifteen tests of how the parts join, what to measure, and what to keep. The practical has not yet been run."
status: stable
order: 9041
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T11:53:26Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
generated:
  at: 2026-11-21T11:53:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

This appendix is for the editors, and for an instructor who wants to test the case on the product. **The practical has not yet been run.** Until it is, the run times, the line counts and the run notes in the exhibits are illustrative.

## What the practical is for

The case joins parts that were each checked against Anthropic's help pages. It has not been checked that they join in the way the story says. This sheet tests the joins.

## Setup

- A Claude **Team** plan with three members, standing for Nisha, Sana and Hamza.
- A Claude Pro, Max or Ultra account with projects, standing for Hamza's own plan. The project lives here.
- A shared Google Drive folder, `Northgate/2027-09`, connected to that account.
- The Claude desktop app on one computer, with a local folder `Northgate` allowed.
- A test Slack workspace with Claude Tag, which is Claude in Slack, in one channel, as in [Case 3's run sheet](../case-3/appendix-practical-run-sheet.md).
- A test mailbox outside the organization, standing for Dana.

## The data

Make two files of about 3,400 lines each, with the same totals as the case: a bank file that closes at $201,480.00 and a ledger that closes at $198,300.00, with two unmatched deposits of $6,120.00 in all and seven unmatched checks of $9,300.00 in all. Make a second bank file with one more line: a returned check, minus $3,450.00, dated September 30. The lab's small files have the same totals and can be used for a first pass.

## The tests

| Test | Do this | Record |
|---|---|---|
| 1 | On Hamza's account, make the project, with the instructions in [Exhibit 3](../../../claude-and-chatgpt-2/case-4-nishas-month-end/exhibits.md#exhibit-3-the-projects-instructions) and the skill in [Exhibit 4](../../../claude-and-chatgpt-2/case-4-nishas-month-end/exhibits.md#exhibit-4-sanas-skill) | Screens of both |
| 2 | In the project, ask Claude to start a thread that lists the files in the drive folder | Whether a thread can read the connected drive |
| 3 | Send the request in [Exhibit 5](../../../claude-and-chatgpt-2/case-4-nishas-month-end/exhibits.md#exhibit-5-the-request-and-the-run-note) | The time. Whether Claude ran a program. The number of pairs. The figure. |
| 4 | Look at the four pieces | Whether the run updated the linked pieces or made new ones |
| 5 | Look for the run note and the matched list in the drive | Whether Claude could save them there |
| 6 | Add the sentence about slide 2 and run again | The time. Whether only slide 2 changed. |
| 7 | Give the worker in Slack the morning bank check as a scheduled task. Put the second bank file in place. | What the worker posts, and whether it changed anything |
| 8 | Send the second request | The time. The memo's first line. Whether all pieces agree. |
| 9 | Export the cover, the memo and the slides as PDFs and email them to the test mailbox | That the files open, and what they show |
| 10 | Turn the skill on in Hamza's account. Send the request. Save the PDFs to the drive folder, and open them there as a Team member. | Whether the run used the skill, and whether a member can read the pack without the project |
| 11 | Ask the worker to read the latest run note in the drive and compare it with a fresh download | Whether the worker can read it |
| 12 | Make a sheet from the month's 6,800 lines | Whether the sheet holds them, and how long it takes |
| 13 | On Hamza's account, leave only the Drive connector on. In a thread in the project, try to send an email. | That the thread cannot send through a connected app |
| 14 | Do the lab's core path in a new project | Each step that does not work as written, and the minutes taken |
| 15 | In a desktop chat, read a file from the local folder. Then try to reach the same folder from a scheduled cloud task. | Whether each one can, and whether the cloud task still can with the app closed |

## What to measure

- Minutes for each run, and for each person's checks.
- For test 3, check twenty pairs by hand, and count any wrong ones.
- For tests 4 and 8, the figure in each piece.

## What to keep

- The project's instructions and the skill, as text
- Each run's thread, as screens
- The two run notes
- Screens of the four pieces after tests 3, 6 and 8
- The worker's message from test 7
- The PDFs from test 9

## After the practical

Replace each *illustrative* label in the exhibits with what was measured, or correct the story. If a join does not work as the story says, change the story to what the product does, and say in the exhibits what was changed.


