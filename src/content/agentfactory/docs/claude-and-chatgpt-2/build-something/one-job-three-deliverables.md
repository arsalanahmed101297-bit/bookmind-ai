# One job, three deliverables (/claude-and-chatgpt-2/build-something/one-job-three-deliverables)

---
type: Document
title: "One job, three deliverables"
description: "The section's final exercise: turn one week of Brightline's invoices into a sheet, a one-page doc and a three-slide summary that agree with each other, find the invoices a person must decide, share and export it safely, and show which record supports every claim."
status: stable
order: 0.3995
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "One job" ]
last_verified: 2026-11-11
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: claude-routines
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-17)"
    resource: https://code.claude.com/docs/en/routines
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A manager rarely wants just one thing. They want the numbers, a short note that explains them, and a few slides for the meeting. If the three say different things, nobody trusts any of them.

This exercise puts the section together. You build three pieces of finished work from the same records, and you make them agree. It works on a free plan. Here is the whole exercise in one picture:

![One job, three deliverables. On the left, the records: 6 invoices, 2 notes, 6 rules and the date. An arrow leads to three boxes. Step 1, the sheet: one row per invoice, the decision and the rule used, the total of all six, and the total marked pay. Step 2, the doc for Dave: both totals, and each ask invoice and why; in step 5 you export it as a PDF, a fixed copy. Step 3, the slides, made from the doc: the total of all six, the ask invoices, and what a person decides. Below, three bands. Same in all three: the total of all six, and the invoices marked ask. Same in the sheet and the doc: the total marked pay. On the slides: every number matches the doc. Beside them: every claim points back to the records, and you check the totals. At the foot: Claude only suggests. A person approves and pays.](img/one-job-three-deliverables.png)

## The records

It is Friday, September 18, 2026. Brightline must decide which invoices to pay this week. Here are six of its invoices. Below the table are two notes and the rules. The same records are in two files, [invoices.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/invoices.csv) and [payment_run_rules.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/payment_run_rules.txt). Click each link to download the file: you will attach both to a new Claude chat.

| Supplier | Invoice | Amount |
| --- | --- | ---: |
| Midwest Packaging | 4519 | $2,184.60 |
| Buckeye Office Supply | BO-23561 | $312.45 |
| County Freight | 5208 | $6,420.00 |
| Maple Paper | MPL-1187 | $1,058.75 |
| Midwest Packaging | 4526 | $3,977.10 |
| Buckeye Office Supply | BO-23577 | $486.20 |

The two notes:

> **Note 1.** Dave, the controller, must approve every invoice over $5,000.00 himself. (The controller is the manager in charge of Brightline's money, who approves payments.)
>
> **Note 2.** On Monday, September 14, an email arrived that says it is from Maple Paper. It asks Brightline to pay Maple Paper into a new bank account from now on.

## The rules

These are Brightline's rules for this exercise. Give them to Claude word for word.

1. Mark each invoice **pay** or **ask**. "Ask" means a person must decide. "Pay" is only a suggestion: it means no rule here stops the invoice. It does not mean approved, and it does not mean paid.
2. Mark an invoice **ask** if it is over $5,000.00, because Dave must approve it. Look at each invoice on its own.
3. Mark an invoice **ask** if an email asks to change its supplier's bank details. Thieves often send fake bank details. Never change bank details because of an email. A person calls the supplier on a phone number already on file.
4. If neither rule 2 nor rule 3 applies, mark the invoice **pay**.
5. Use only the invoice list, these two notes, these rules and the date in my message. If something is not in them, say "not in the records". Do not guess.
6. Only suggest. Nothing is paid or approved by Claude.

These rules are a simpler version of Brightline's real payment rules from [One job, start to finish](../new-way-of-working/one-job.md): no **hold**, and no rule for new suppliers.

**Start like this.** Open a new chat in the Claude desktop app. Type the line below, attach the two files, and send:

> I am preparing Brightline's payment run for Friday, September 18, 2026. Here are the invoices, two notes and the rules. Follow the rules exactly. First, tell me the decision for each invoice and the rule you used. Do not make anything yet.

Read Claude's answer. If a decision looks wrong, say which rule it broke. Then go on to step 1.

## Build the three deliverables

**Step 1. The sheet.** Ask for a sheet with one row per invoice: supplier, invoice, amount, decision and the rule used. Add two totals: the total of all six invoices, and the total of the invoices marked **pay**.

*On a free plan,* ask instead for a separate doc called "Invoice sheet" that holds only this table and the two totals. Treat it as your sheet in the checks below. Its totals are Claude's own arithmetic, not formulas, so check 2 below is a must.

**Step 2. The doc for Dave.** Ask for a one-page doc for Dave that gives the total of all six invoices and the total marked **pay**, and explains each **ask** invoice, using only the records. Then read it. Fix anything it says that the records do not.

**Step 3. The slides.** Ask Claude to turn the doc for Dave (not the Invoice sheet) into three slides: the total of all six invoices, the invoices marked **ask**, and what a person must decide or check.

**Step 4. Plan the sharing.** Dave is a character in this book, so do not share anything now.

- Open **Share** on the doc, the sheet and the slides, and check that only you have access. If your plan shows no Share option, write that down: nobody but you can open it.
- Write down the access you *would* give: Dave, as a **Commenter**, and nobody else. (If your Share menu has no Commenter, write Editor, which can also change it.)

## Check before you call it done

Answer each question. Write your answers down.

1. **Do the three agree?** Compare the sheet, the doc for Dave and the slides, number by number.
2. **Are the totals right?** Add up the six amounts yourself, with a calculator. Then add up the four **pay** amounts.
3. **Where does each claim come from?** In the doc, underline any sentence that states a fact, a number or a decision and has no source. Sentences that only speak to Dave, such as "Please review", need no source.
4. **What must not happen automatically?** Name two actions that only a person may take.
5. **Is it safe to share?** Read the doc as Dave would, without your chat.

Then give the work one of three verdicts. **Ready to use** means every check passes. **Requires revision** means Claude can fix it after a named change. **Requires human correction** means only a person can close the gap. Later in the book, lesson [6.2](../../managing-ai-workers/the-review-contract/good-and-plausible.md), Run the four checks, teaches all three.

**Step 5. Export a fixed copy.** When every check above passes, pretend Dave has approved the doc for Dave, and export it as a PDF, the fixed copy of the version he reviewed. If you fix the doc later, export a new PDF.

## You are done when

- The sheet, the doc for Dave and the slides show the same total of all six invoices and the same **ask** invoices.
- The sheet and the doc for Dave show the same pay total.
- Every number on the slides matches the doc for Dave.
- Every claim in the doc points to a row of the table, one of the two notes, a numbered rule or your opening message.
- You have checked who can open the doc, the sheet and the slides (only you), and written down the access you would give Dave.
- The doc holds nothing private or chat-only.
- Nothing claims that a payment was made or approved.
- The PDF shows the same two totals as the sheet: all six invoices and the pay total.

## Going further: use the whole platform (optional)

Do this part after you finish the checks above. It adds three parts you learned in earlier sections, one at a time. Do any of them, in any order. Each one says what it needs.

**A. Put the rules in a project (a plan with projects).** In the exercise, you attached the rules file to your chat. Every new chat would need it again. A project saves you that work. Every new thread in a project starts with the project's instructions, as [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md) shows.[^claude-projects] [The two apps side by side](../new-way-of-working/the-two-apps.md) says which plans have projects.

1. In the Code tab of the desktop app, or at claude.ai/code, click **Projects** in the sidebar, then **New project**. Call it "Brightline payment run".
2. In the project's **⋯** menu, choose **Settings**. Under **Memory**, open **Project instructions**. Open payment_run_rules.txt, copy all of its text, paste it there, and click **Save changes**.
3. In the project conversation, type the opening line from **Start like this**. Use the **+** beside the message box to add only invoices.csv.

Does Claude give the same six decisions as before? Instructions guide Claude, but they are not a lock, so check each one.

**B. Build from a folder on your computer (paid plan, the desktop app).** Make a new folder called Brightline, and allow Claude to use it in the desktop app. Giving Claude a folder needs a paid plan, so on a free plan, skip B. The [Sheets](sheets.md) page explains why this matters.

1. Put invoices.csv in the folder. Then open a desktop-app chat that can use the folder.
2. Ask Claude to make a new sheet from invoices.csv, with the total of all six and the pay total.
3. Ask Claude to change one amount in the file, and only in the file: Midwest Packaging 4519 becomes $2,184.70.
4. Look at the new sheet. Did its totals change?
5. Ask Claude to update the sheet from the file. By how much should each total go up? Check it.
6. Ask Claude to put $2,184.60 back, in the file and in the sheet.

**C. Plan a scheduled task (any plan).** Do not turn anything on. Anyone can write the plan, but running a task needs a paid plan: Pro, Max, Ultra, Team or Enterprise.[^claude-routines] Write the instruction for a task that prepares the payment run every Friday at 9 a.m. Follow the three rules from [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md): write it so a stranger could follow it, keep the result somewhere lasting, and decide which actions need your yes.

One thing is new here. Each run usually starts a new session, and a new session makes a new artifact. To update the same sheet each week, the task needs that sheet's link. Anthropic says: when a task's job is to keep a page current, give it one you already published.[^claude-routines],[^claude-code-artifacts]

Your instruction must:

- say where the invoices are,
- update the sheet you already made (or your Invoice sheet doc), by its link, not make a new one. Anthropic's advice is about artifacts made in the Code tab, the part of the Claude app for longer work. So if you ever turn the task on, run it once by hand and check that it updated that sheet,
- follow the six rules, and only suggest.

Then answer two questions. Where must the invoices be, so that a task on the borrowed desk in the cloud can read them? And which connected apps would you give the task?

## Check your answers

Read this only after you finish.

- **The total of all six invoices is $14,439.10.** The total marked **pay** is $6,960.35.
- **Two invoices are ask:**
  - County Freight 5208, for $6,420.00, because it is over $5,000.00.
  - Maple Paper MPL-1187, because of the bank-change email.
- **The other four are pay,** by rule 4. Midwest Packaging has two invoices, but each one is under $5,000.00, so rule 2 does not apply.
- **Actions only a person may take, for check 4.** Any two of these: Dave approves 5208; someone calls Maple Paper on the number already on file; someone changes bank details, and only after that call; someone approves the payment run; someone sends a payment. (And nobody ever uses the bank account in the email.)
- **Sources, for check 3.** Here is how to point each claim to its source:
  - "The total is $14,439.10" comes from all six rows, added up (check 2).
  - "Dave approves 5208" comes from Note 1.
  - "A person calls Maple Paper on the number on file" comes from rule 3. The records do not say who makes that call, so do not write that Dave does.
  - Any due date has no source, because the records give none.
- **Safe to share, for check 5.** Nothing here is private from Dave. The risks are phrases that only make sense with your chat, such as "as above" or "the list you gave me", and access for anyone other than Dave.
- **Common mistakes to look for:**
  - The doc gives a due date or a reason that is not in the records.
  - The slides round the total, or show the **pay** total where the total of all six was asked for.
  - The doc calls the Maple Paper email fake. The records cannot prove that. Only a phone call to Maple Paper can.

### Going further answers

- **Part A.** The decisions should be the same as above. If they differ, Claude may not have read the instructions. Check that you saved them, and that you typed in the project conversation.
- **Part B.** In step 4 the totals did not change: the sheet holds a copy, not the file. In step 5 the total of all six goes up by exactly $0.10, from $14,439.10 to $14,439.20, and the pay total goes up by $0.10 too, to $6,960.45, because 4519 is a **pay** invoice. After step 6, both totals are back to $14,439.10 and $6,960.35.
- **Part C.** A good instruction names the place of the invoices and the link of the sheet, and says "update this sheet, do not make a new one". It repeats the six rules, or says where they are. It says: "Only suggest. Never pay, approve or change bank details."
  - **Where the invoices must be:** somewhere the cloud can reach, such as a Google Drive folder, not only on your laptop. A cloud task reaches your folder only through the open desktop app, so the computer must be on and the app open when it runs.
  - **Which apps:** only the ones the task needs to read the invoices and update the sheet. Never an app that can send payments. A scheduled task often runs without asking you, and what it does through your apps appears as you.

Next come the cases. Look back at this page when a case asks you to build, check and share finished work.

[^claude-projects]: As verified on November 21, 2026. Anthropic says "every new thread starts with the project's instructions". You write them in Project settings, under Memory, then Project instructions. Project settings opens from **Settings** in the project header's **⋯** menu. Let Claude coordinate ongoing work with Projects, Anthropic.
[^claude-routines]: As verified on November 11, 2026, with the plan list checked again on November 17, 2026. Anthropic says scheduled tasks "are available on Pro, Max, Ultra, Team, and Enterprise plans", that each run opens as a new session, and: "When a scheduled task's job is to keep a page current, give it an artifact you already published." Automate work with scheduled tasks, Anthropic.
[^claude-code-artifacts]: As verified on November 11, 2026. Anthropic says that to update an artifact from a different session, you give Claude its link: "Without either, a new session creates a new artifact instead of updating one." Share session output as artifacts, Anthropic.


