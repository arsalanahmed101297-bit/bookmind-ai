# Chapter 1. From Chatbots to AI Workers (/ai-worker-paradigm/from-chatbots-to-ai-workers/overview)

---
type: Document
title: "Chapter 1. From Chatbots to AI Workers"
description: "What changed behind the AI text box between 2023 and 2026, the ladder of interaction, where AI work runs and where its results are kept, and how to read a product announcement."
status: stable
order: 101
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "01"
part: I
expert_status: required
objectives:
  - { id: OAI.1.1, label: direct }
  - { id: CCAO-F.D3.O1, label: supporting }
word_budget: 3000
prerequisites: []
build_step: "Portable briefs, run on two runtimes, the AP jobs placed on the ladder, and where each result lives"
artifact: "your final briefs, in your first conversation; the Task 2 spreadsheet; the Task 5 doc; the Task 8 file in your Brightline AP folder"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch01.zip"
field_guides: []
delta_entries: [ "D-072", "D-076", "D-077" ]
concepts: [ "1.1", "1.2", "1.3", "1.4", "1.5", "1.6" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

AI text boxes often look much the same today as they did in 2023, but what
happens behind them has changed completely. In 2023 the box gave you back text: an answer
you copied somewhere else yourself. Today it can give you back finished work:
real documents, spreadsheets, and presentations that it can also open again
and edit.

After this chapter you can:

- explain that change
- place any AI product on a simple four-rung ladder, from tools you query to
  tools that hold a role
- keep three ideas separate that product marketing blurs together: whether
  the AI remembers and continues its work (continuity), which computer the
  work happens on (where it runs, the execution environment), and where the
  finished output ends up (where it is kept, persistence)
- tell what is genuinely new in the next big AI announcement from what is a
  new name for the same thing

Maria's story below shows what the three ideas cost when you get them wrong.

```yaml interactive="switchboard"
title: One AI worker. Three separate questions.
intro: Change any choice and watch which answer changes.
dials:
  - name: Continuity
    icon: memory
    ask: Tomorrow, does it pick up where it left off?
    options:
      - label: Remembers
        verdict: "Yes"
        answer: It continues yesterday's work.
        short: Picks up where it left off
        tone: good
      - label: Starts fresh
        verdict: "No"
        answer: You explain the task again.
        short: Starts from scratch
  - name: Where it runs
    icon: computer
    ask: Can you close your laptop while it works?
    options:
      - label: Cloud
        verdict: "Yes"
        answer: The work runs on a cloud computer.
        short: Laptop can close
        tone: good
      - label: Your computer
        verdict: "No"
        answer: It runs on your computer, so that has to stay on.
        short: Laptop stays on
  - name: Where it is kept
    icon: folder
    ask: Next week, can you open the finished report?
    options:
      - label: Temporary
        verdict: Maybe not
        answer: The workspace can be deleted, and the report with it.
        short: Report may be lost
        tone: warn
      - label: Shared folder
        verdict: "Yes"
        answer: If the folder's rules on access, and on how long files are kept, allow it.
        short: Report is kept
        tone: good
notes:
  - when:
      Continuity: Remembers
      Where it is kept: Temporary
    say: It remembers the report, and the report can still be gone. Remembering is not keeping.
rule: Product marketing blurs these together. Each one is a separate question.
```

## Why it matters

You met Maria in the [Preface](../../preface.md), matching invoices to
purchase orders each Monday. This Monday she types only one line:
"Summarize these vendor invoices." She attaches one of the week's two
batches, 15 PDFs, and copies the totals into a spreadsheet by hand. The same
box could have built the spreadsheet and checked each total. With both
batches in one request, it could also have caught the invoice paid twice.

On Wednesday she is told to "let the AI do it." This time she asks
for a report of unpaid vendor bills by how overdue they are. The assistant
builds a spreadsheet and shows her a short summary in the reply. She reads the
summary and closes the tab. The next Monday she asks for "last week's
spreadsheet, updated." The summary is still in the conversation. The
spreadsheet is not. It was built in a temporary workspace and was never saved
in a place where she could open it again.

Maria made two common mistakes. She got 2023 value from a 2026 system. And
she assumed that because the conversation remembered her, the work was kept
too.

## What does each lesson teach?

| Lesson | What it teaches |
| --- | --- |
| [1.1 The ladder of interaction](ladder-of-interaction.md) | The four rungs, from a query to a role, and why each rung up needs more control |
| [1.2 The same text box, a different destination](same-text-box.md) | What decides whether the box answers you or does the work |
| [1.3 Where the work runs](where-the-work-runs.md) | The machine a task works on, and what changes because it has one |
| [1.4 Continuity, execution and persistence](continuity-execution-persistence.md) | Three separate questions: does it continue, where does it run, where is the result kept |
| [1.5 Hand off a task in your own app](both-ai-vendors.md) | Where these controls are in Claude, ChatGPT and an open-source tool |
| [1.6 The paradigm and the products](paradigm-and-products.md) | Four questions to ask of any product announcement |

Start with [1.1](ladder-of-interaction.md). The [lab](lab.md) is where you do it.


