# Exhibits (/claude-and-chatgpt-2/case-4-nishas-month-end/exhibits)

---
type: Document
title: "Exhibits"
description: "The details behind the story: where the earlier sections appear, the setup part by part, the project's instructions, the skill, the request and the run notes, the two runs, the week, the hours, the four tests, a document editor and a workplace, three answers for the owner, a checklist for trusting a setup, and Claude and ChatGPT side by side."
status: stable
order: 0.86
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
sources:
  - id: run-sheet
    title: "Nisha's Month-End: practical run sheet (the practical has not yet been run)"
    resource: "../../appendices/instructors/case-4/appendix-practical-run-sheet.md"
  - id: sandbox
    title: "Anthropic, Claude Cowork architecture overview (Claude Help Center)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: artifact-link
    title: "Anthropic, Share session output as artifacts (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: tag-routine
    title: "Anthropic, Set up routines (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/users/proactivity
  - id: claude-projects
    title: "Anthropic, Let Claude coordinate ongoing work with Projects (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: skills
    title: "Anthropic, How to create custom skills (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: plans
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: tag-plans
    title: "Anthropic, Work with Claude Tag"
    resource: https://claude.com/docs/claude-tag/overview
  - id: routines
    title: "Anthropic, Automate work with scheduled tasks (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/routines
  - id: no-source
    title: "Anthropic, Get started with Claude Sheets (Claude Help Center)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: openai-projects
    title: "OpenAI, Projects in ChatGPT (OpenAI Help Center)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: openai-scheduled
    title: "OpenAI, Scheduled tasks in ChatGPT (OpenAI Help Center)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

These exhibits hold the details behind the story. Read them when a story page points here.

## About this case, in full

- **The story is fiction.** The firm, the client, the bank, the people, the figures and the times are made up.
- **The product facts were checked.** What each part of Claude can do comes from Anthropic's help pages, checked in November 2026 for this case and for the earlier sections it builds on. Each fact has a note with its source.
- **The joining was not replayed.** Nobody ran this exact setup for this case. The run times (25 minutes, 6 minutes) and the line counts are **illustrative**. The [practical run sheet](../../appendices/instructors/case-4/appendix-practical-run-sheet.md) says how to test it.[^run-sheet]
- **Eight things the story assumes.** A thread in a project can read a connected drive, and save a file there. It runs the matching as a program on the cloud computer.[^sandbox] A run updates existing artifacts when it is given their links.[^artifact-link] A thread in a project can make and update a sheet, a doc, a deck and a design. The worker in Slack can run one more routine, as it does in [Case 3](../case-3-nishas-firm/overview.md), and read the latest run note in the drive.[^tag-routine] A sheet can hold the month's 6,800 lines. The lab's core path works as written. The run sheet tests each one.
- **The matching rule is simplified.** Real matching also uses reference numbers, payment types and names, and treats every unclear pair as a question for a person.
- **It is not accounting advice.** A real bank reconciliation, and a real promise to a lender, have more detail than one figure. A check deposited late in September can come back by September 30, so the date in the story is realistic. Banks differ in how soon such a line appears in a download. And a real promise to a lender is usually tested in a more detailed way than one adjusted bank balance. The $195,000.00 rule here is made up for the case. So Wednesday's $150.00 is a shortfall under the case's own simple rule. It is not a finding about any real loan.

## Exhibit 1: Where the earlier sections appear in this case

| In this case | You learned it in |
|---|---|
| Handing over a whole job, and checking what comes back | [The New Way of Working](../new-way-of-working/overview.md) |
| A folder on a computer, read through the desktop app | [Set up the apps](../new-way-of-working/set-up-the-apps.md) |
| The temporary computer in the cloud | [Where the work happens](../new-way-of-working/where-the-work-happens.md) and [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) |
| Connected apps and skills | [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md) |
| Scheduled tasks | [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md) |
| Permissions, not words | [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) |
| Projects | [Projects: one conversation that runs the work](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work) |
| The sheet, the doc, the deck and the design | [Build Something](../build-something/overview.md) |
| A worker in Slack with its own name | [Case 3](../case-3-nishas-firm/overview.md) |

## Exhibit 2: The setup, part by part

| Part | What it holds | Where it lasts | Plan |
|---|---|---|---|
| The project, "Northgate month-end" | The client's rules, three files from Dana, the links of the four pieces. It uses the shared drive, the only app connected to Hamza's account.[^claude-projects] | In Hamza's own Claude account. Only he can open it.[^claude-projects] | Hamza's own plan. The firm's Team plan does not offer projects yet. |
| Sana's skill | The memo method: READY, NOT READY, unrecorded items | In Claude's settings, in Sana's account and in Hamza's | Every plan, when **Create and edit files** (the code execution switch) is turned on in Settings[^skills] |
| The shared drive, connected | The bank's lines, the ledger, the matched list, the run notes. From Friday, a copy of the bank's statement too. | In the drive | A connected app |
| Hamza's folder | Dana's three files, before they were copied to the project, and the bank's statement for Hamza's own tests | On his computer | Needs a paid plan and the desktop app |
| The borrowed desk | Nothing. It runs the matching program and is cleared.[^sandbox] | Nowhere | |
| The four artifacts | The sheet, the memo, the slides, the cover | In Hamza's Claude account. PDF copies go to the drive. | Docs, slides and designs on every plan. Sheets need a paid plan.[^plans] |
| The routine (a scheduled task) | One instruction, and a time | With the worker in Slack, in the firm's channel[^tag-routine] | Claude in Slack is on Team and Enterprise plans.[^tag-plans] In Claude itself, scheduled tasks need a paid plan.[^routines] |

## Exhibit 3: The project's instructions

> **Northgate month-end.** You prepare the month-end pack for Northgate Supply, Cleveland. The pack is for Northgate's bank.
>
> **Files.** The month's bank lines and ledger are in the shared drive, in `Northgate/` and then the month, for example `2027-09`. Use the newest bank file. Before you start, compare its closing balance with the bank's statement for the month, in the same folder. If the two differ, or there is no statement yet, stop and say so. If the file was downloaded more than a day ago, say that too. In the run note, name the ledger file you used and its date. The bank's letter and the layout the bank wants are in this project's files.
>
> **Method.** Match each bank line to a ledger line with the same amount and a date no more than five days apart. Use the name or check number too, where there is one. If a bank line could match more than one ledger line, pair it with one, and list the pair under Needs a look. List every line that has no match. Work out reconciled cash: the bank's closing balance, plus deposits the bank has not shown yet, minus checks the bank has not paid yet. Save the matched list to the month's folder.
>
> **The pack.** Update these four pieces, and do not make new ones: the sheet [link], the memo [link], the slides [link], the cover [link]. Write the memo with the month-end memo skill. Slide 2 shows reconciled cash and the bank's minimum, side by side. The bank's minimum is $195,000.00.
>
> **Run note.** After every run, save a note to the month's folder: the files you read, the number of lines matched, the lines left over, reconciled cash, and the pieces you updated. If this is not the first run for the month, say what changed.
>
> **Never.** Never send anything to anyone. Never change a file in the drive that you did not make. If the bank and the books do not agree, say so in the first line. Nisha or Sana approves every pack before it leaves the firm.

Sentences were added twice during the week: the one about slide 2, on Tuesday, and the ones about the bank's statement, the age of the bank file and the ledger file, on Friday. From Friday, Hamza saves a copy of the bank's statement to the month's folder before each run.

## Exhibit 4: Sana's skill

> **Month-end memo.** Use this when asked for a month-end memo.
>
> 1. The first line is the status. Write **READY** when reconciled cash agrees with the cash balance in the ledger and nothing is unrecorded. Write **NOT READY** when anything is unrecorded. The status says whether the books agree with the bank. It does not say the pack may go out. A person decides that, in the approval.
> 2. A **timing item** is in the ledger and not yet at the bank: a deposit the bank has not shown yet, or a check it has not paid yet. Count them. Do not list them unless asked.
> 3. An **unrecorded item** is at the bank and not in the ledger: a returned check, a bank fee the company has not entered yet, a payment nobody entered. List each one directly under the status, with its date and amount.
> 4. Then give reconciled cash, and how far it is above or below any minimum the client must keep.
> 5. Never write that the books are correct. Write what was compared, and what agreed.

## Exhibit 5: The request and the run note

**The request, Tuesday, 10:05 a.m.**

> *"Prepare the September 2027 month-end pack."*

**The run note, Tuesday, 10:30 a.m.** (illustrative)

| | |
|---|---|
| Files read | Bank lines, downloaded October 1. Ledger, downloaded October 1. |
| Lines | 3,395 bank lines, 3,404 ledger lines |
| Matched | 3,395 pairs |
| Left over | 9 ledger lines: 2 deposits, $6,120.00, and 7 checks, $9,300.00 |
| Needs a look | 2 pairs with the same amount on the same day. *Added by Hamza afterwards: confirmed both by hand.* |
| Reconciled cash | $198,300.00. Agrees with the ledger. |
| Status | READY |
| Pieces updated | The sheet, the memo, the slides, the cover |

**The run note, Wednesday, 10:00 a.m.** (illustrative)

| | |
|---|---|
| Files read | Bank lines, downloaded October 6. Ledger, downloaded October 1. |
| Lines | 3,396 bank lines, 3,404 ledger lines |
| Matched | 3,395 pairs |
| Left over | 9 ledger lines, as before. 1 bank line: a returned check, Erie Street Diner, $3,450.00, dated September 30. |
| Reconciled cash | $194,850.00. The ledger says $198,300.00. |
| Status | NOT READY, 1 unrecorded item |
| Pieces updated | The sheet, the memo, the slides, the cover |
| Changed since the last run | The bank's closing balance fell by $3,450.00. Reconciled cash fell by $3,450.00. |

## Exhibit 6: Two runs

The figures for both runs are in [The second run](wednesday-morning.md#the-second-run). Who approved each one, and when it went to Dana, is in [Exhibit 7](#exhibit-7-the-week).

## Exhibit 7: The week

Cleveland is nine hours behind Karachi in October.

| When, in Karachi | In Cleveland | What happened |
|---|---|---|
| Fri, Oct 1, 4:00 p.m. | 7:00 a.m. | The worker downloads September's bank lines, as it does every Friday |
| Mon, Oct 4, afternoon | early morning | The firm builds the setup |
| Tue, Oct 5, 10:05 a.m. | 1:05 a.m. | Hamza's request. The run ends at 10:30 a.m. |
| Tue, 2:00 p.m. | 5:00 a.m. | Sana's review. One rule is added, and the job runs again. |
| Tue, 4:10 p.m. | 7:10 a.m. | Nisha approves $198,300.00 |
| Tue, 4:25 p.m. | 7:25 a.m. | The pack goes to Dana |
| Wed, Oct 6, 9:00 a.m. | midnight | The morning bank check reports the returned check |
| Wed, 9:40 a.m. | 12:40 a.m. | The second run. It ends at 10:00 a.m. |
| Wed, 11:15 a.m. | 2:15 a.m. | Sana approves $194,850.00 |
| Wed, 11:30 a.m. | 2:30 a.m. | The new pack goes to Dana |
| Wed, 5:00 p.m. | 8:00 a.m. | Dana reads it, and later calls her bank |
| Thu, Oct 7, 7:00 p.m. | 10:00 a.m. | Dana meets her bank, with one pack |
| Fri, Oct 8, 6:00 p.m. | 9:00 a.m. | Walter Brennan calls Nisha |

## Exhibit 8: By hand, and with the setup

All times are illustrative. The steps and their hours are in [Two days of copying](two-days-of-copying.md): about 17 hours of people's time each month by hand, and about 2 with the setup.

| | By hand | With the setup |
|---|---|---|
| Built once | Nothing | About 6 hours: three people, one afternoon |
| A late change | Most of a day | A second run, and about an hour of checking |

## Exhibit 9: Hamza's four tests

None of them uses Claude.

| Test | How | What it can miss |
|---|---|---|
| The arithmetic | A calculator, three lines | A wrong closing balance. On Tuesday Hamza took it from Claude's run note, not from the bank's statement, and missed the returned check. From now on, he compares the two first. |
| The matching | Twenty pairs, chosen at random, read against the bank's own statement | A wrong pair among the other 3,375 |
| The leftovers | Every leftover line, found in the ledger | A line the program wrongly matched, so that it is not left over. The test shows where each line came from. It does not show that each one will clear. For that, he looks for each one in the bank's first October lines, a few days later. |
| The pieces | Open the sheet, the memo and slide 2. Do they say the same? | A figure in a place he did not open |

## Exhibit 10: A document editor and a workplace

The comparison is in [Is this better than a document tool?](what-the-setup-did.md#is-this-better-than-a-document-tool).

## Exhibit 11: Three answers for the owner

The prices and totals are in [What is the work worth now?](fridays-decision.md#what-is-the-work-worth-now)

| | 1. Charge for the hours | 2. Charge for the pack | 3. Charge for the service |
|---|---|---|---|
| Good for the client | Cheap, and easy to understand | A fixed price for a result | One fee, and no bill for a bad month |
| What it still trusts | That hours measure the work | That the client values the tests | That bad months are rare |
| Who relies on the pack | Dana, and through her the bank | The same | The same |

The line Nisha drew, for how far a task may run alone, is the figure in [How far may it run alone?](fridays-decision.md#how-far-may-it-run-alone)

## Exhibit 12: Before you trust a setup

1. **Can you say what each part is for?** One line for each: the project, the skill, the files, the schedule, the artifacts.
2. **Where does each file live, and which jobs can reach it?** A job that must run without you cannot rely on a folder on your computer: it can be read only while the desktop app is open.
3. **What lasts after the desk is cleared?** The method, the matched list and the run note must be saved somewhere else.
4. **Which rules are sentences, and which are settings?** For example, which connected apps are turned on is a setting. A sentence asks. A setting stops. Know which rules have only a sentence.
5. **Does every run update the same pieces?** Give the run their links, and check that it did not make new ones.
6. **Do the pieces agree?** No piece reads another.[^no-source] Open each one.
7. **Who checks, and without what?** At least one check must not use the AI.
8. **Who approves, by name, and what does the approval name?** The pack, its figure, and anything still open.
9. **What does the morning bank check do when it finds something?** Reports, and changes nothing, is the safe answer.
10. **How many times has it run?** A setup that has run three times has not been tested by a strange month yet.
11. **Who may change the method, and who reviews the change?** The instructions and the skill are the method. Keep a record of each change: who made it, when, and who agreed. [15.2 GitHub and the pull request](../../building-ai-workers/code-review/github-and-the-pull-request.md) shows one way.

## Exhibit 13: Claude and ChatGPT side by side

Northgate works in ChatGPT. The same setup can be built there.

| The need | In Claude | In ChatGPT |
|---|---|---|
| Rules for one piece of work | A project's instructions[^claude-projects] | A project's instructions[^openai-projects] |
| A method | A skill | An installed skill, which ChatGPT uses by itself when it fits |
| Files on your computer | A folder, through the desktop app | Source folders, through the desktop app |
| Connected apps | Connectors | Plugins |
| Work at a set time | A scheduled task,[^routines] or a routine in Claude in Slack | A scheduled task[^openai-scheduled] |
| The result | Artifacts: a sheet, a doc, a deck, a design | Its own tools for the same jobs, as [Build Something](../build-something/overview.md) shows |

The ChatGPT names come from [ChatGPT 2.0](../tour/chatgpt.md), [Set up the apps](../new-way-of-working/set-up-the-apps.md) and [Build Something](../build-something/overview.md). The names differ, and so do the plans that include each part. The four rules in [What this case shows](the-case-at-a-glance.md#four-rules-from-the-case) are the same.

[^run-sheet]: The [practical run sheet](../../appendices/instructors/case-4/appendix-practical-run-sheet.md) says how to run the exercise and record it. It has not yet been run.
[^sandbox]: As verified on November 9, 2026, Anthropic says that in cloud sessions "the agent loop and code execution run in an isolated, temporary sandbox on Anthropic-managed infrastructure", and that each session's sandbox is "created when the session starts and destroyed when it ends". Claude Cowork architecture overview, Anthropic.
[^artifact-link]: As verified on November 11, 2026, Anthropic says that to update an artifact from a different session, you give Claude its link: "Without either, a new session creates a new artifact instead of updating one." Anthropic's guide says this about artifacts made in the Code tab. This case assumes the same for a thread in a project, and has not tested it. Share session output as artifacts, Anthropic.
[^tag-routine]: As verified on November 10, 2026, Anthropic says a routine in Claude Tag "uses that channel's connections with the same permissions as a typed request." [Case 3](../case-3-nishas-firm/overview.md) describes the worker and its channel. Set up routines, Claude Tag docs, Anthropic.
[^claude-projects]: As verified on November 21, 2026, Anthropic says "A project belongs to one user. You can't share a project or its threads with another user" and "Projects aren't offered on Team or Enterprise plans yet." It says "every new thread starts with the project's instructions", and that cloud threads get their tools from "the connectors on your claude.ai account". Let Claude coordinate ongoing work with Projects, Anthropic.
[^skills]: As verified on November 11, 2026, Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". How to create custom skills, Anthropic.
[^plans]: As verified on November 11, 2026, Docs, Slides and Design are on every Claude plan, and Sheets needs a paid plan. What are artifacts and how do I use them?, Anthropic.
[^tag-plans]: As verified on November 10, 2026, Anthropic says "Claude Tag is available on Team and Enterprise plans" and "isn't available on individual plans (Free, Pro, Max, or Ultra)". It was in public beta. Work with Claude Tag, Anthropic.
[^routines]: As verified on November 11, 2026, with the plan list checked again on November 13, 2026, Anthropic says scheduled tasks "are available on Pro, Max, Ultra, Team, and Enterprise plans", that each run opens as a new session, and that Claude "can use an included connector during a run, including writes". Automate work with scheduled tasks, Anthropic.
[^no-source]: As verified on November 12, 2026, Anthropic says "Sheets can't pull live data from connected apps, and docs, decks, and dashboards can't use a sheet as a data source." Get started with Claude Sheets, Anthropic.
[^openai-projects]: As verified on November 11, 2026, OpenAI says project sharing "is available on ChatGPT Free, Go, Plus, Pro, Business, Enterprise, and Edu", and that "Project instructions apply only within that project". Projects in ChatGPT, OpenAI.
[^openai-scheduled]: As verified on November 11, 2026, OpenAI says "Scheduled tasks can use supported apps, including Gmail, Slack, and GitHub, when those apps are available for your account or workspace." Scheduled tasks in ChatGPT, OpenAI.


