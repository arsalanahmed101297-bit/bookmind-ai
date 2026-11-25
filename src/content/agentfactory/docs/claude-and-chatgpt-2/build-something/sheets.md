# Sheets (/claude-and-chatgpt-2/build-something/sheets)

---
type: Document
title: "Sheets"
description: "How to build a spreadsheet with Claude Sheets: start a tracker or budget, watch each change Claude makes, undo with version history, share and export it, know its beta limits, and do the same job with ChatGPT inside Excel and Google Sheets."
status: stable
order: 0.3993
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Sheets" ]
last_verified: 2026-11-11
sources:
  - id: claude-sheets
    title: "Get started with Claude Sheets (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
  - id: openai-spreadsheets
    title: "ChatGPT for Excel and Google Sheets (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shopping list on paper is fine for one person. But when five people share a budget, they need one table that everyone can see. And the totals should add up by themselves. That table is a **spreadsheet**.

> [!NOTE]
> **Spreadsheet words**
>
> - **Cell:** one box in the table.
> - **Formula:** a rule in a cell that calculates something, such as a total.
> - **Tab:** one page inside a spreadsheet. A spreadsheet can have several tabs.
> - **Dropdown:** a cell where you pick from a short list, such as pay, hold or ask.

## What it is

**Claude Sheets** is a spreadsheet inside Claude. You, your team and Claude can all change the same cells. It is new and in beta, so it has only the basic features for now. You need a paid plan.[^claude-sheets]

## Build one

In the Claude desktop app, ask for a sheet in any chat, or pick the **Sheets** tile in the Artifacts tab. If you already have numbers, give them to Claude. You can paste them in, or bring in a file from Excel or Google Sheets.[^claude-sheets] This sample uses only pay and ask, like the exercise at the end of this section. For Brightline:

> Make a sheet from the invoices in the file I attached, one row per invoice. Show the supplier, invoice and amount, and add a dropdown for the decision (pay or ask). Add a total. Add a second tab with the total of the invoices marked pay.

To try it, download [invoices.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/invoices.csv) and attach it to your message.

## Change it safely

Claude can add tabs, formulas (including formulas that work across tabs), dropdowns, checkboxes and charts. You can also type in any cell yourself, or select some cells and ask Claude about them.[^claude-sheets]

Two features keep your work safe:[^claude-sheets]

- **You can see each change.** When Claude changes a cell, the cell gets an outline, so you can see what changed.
- **You can go back.** **Version history** lists earlier versions, and you can restore one. But be careful: restoring an old version also removes every change made after it.

![Going back with version history. A timeline of four versions of the invoice sheet. Version 1, by you: 15 invoices, one row each (Brightline's full week, from One job, start to finish). Version 2, by Claude: adds totals and a dropdown. Version 3, by Claude: adds a second tab. Version 4, by you: fixes a supplier name. A red arrow goes from version 4 back to version 2, labeled restore version 2. Versions 1 and 2 are kept. Versions 3 and 4 are marked removed by the restore, including your own fix. At the foot: before you restore, note any good edits you want to keep.](img/going-back-with-version-history.png)

The figure uses Brightline's full week of 15 invoices, not the six in your practice file.

## Share it and save a copy

Click **Share** to work on it with others. To save a copy, export it as an Excel file (.xlsx) or a CSV file (a simple table file that most apps can open). On a phone, you can only read it.[^claude-sheets]

## What it cannot do yet

Claude Sheets is for simple sheets. It cannot yet make **pivot tables** (summary tables that group your rows), and it has no macros (small programs that do steps for you) or PDF export. It cannot read live data from your other apps.[^claude-sheets] For a big spreadsheet you already keep in Excel or Google Sheets, Anthropic suggests **Claude for Excel** or **Claude for Google Workspace** instead, which put Claude inside those apps.

## Check it before you share it

- **Click a total and read its formula.** Does it add up every row?
- **Add a new row.** Does the total change to include it? A formula that stops at the old last row is a common mistake.
- **Type a wrong amount on purpose,** such as 10 times too big. The total should go up by exactly as much as that cell went up. If the total does not change, the formula leaves that row out. Then put the right amount back.
- **Work out one row by hand,** with a calculator.
- **Compare with a number you trust.** At Brightline, the sheet's total must match the total from the team's **checking program**, a program that adds up the invoices to the cent. In the Try it below, use your own calculator total.

## In ChatGPT: inside Excel and Google Sheets

ChatGPT does this differently. It does not keep a spreadsheet inside ChatGPT. Instead, **ChatGPT for Excel and Google Sheets** opens ChatGPT in a side panel inside your own spreadsheet.[^openai-spreadsheets]

1. **Add it.** In Excel, go to **Home**, then **Add-ins**, and search for ChatGPT. In Google Sheets, install it from Google's add-on store.
2. **Use it.** Ask it to build, change or explain your spreadsheet.
3. **Ask your company first.** At work, your company's IT team (the people who look after computers) may need to turn it on.

It is on every ChatGPT plan, including Free.[^openai-spreadsheets]

OpenAI has said ChatGPT will get its own Sheets too. When this page was checked, it was still "coming soon".[^openai-space]

## Build it from a file on your computer

In the desktop app, Claude can read a folder on your computer once you allow it, as [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md) shows. This needs a paid plan, as [Set up the apps](../new-way-of-working/set-up-the-apps.md) says. So you can build a sheet from a file you already have. To try it, put [invoices.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/invoices.csv) in a folder called Invoices, and allow Claude to use that folder:

> Read invoices.csv in my Invoices folder. Make a sheet from it, one row per invoice, with a total.

**Treat the sheet as a copy,** like the deck on the [Slides](slides.md) page. Anthropic does not say whether a sheet watches a file on your computer, so assume it does not.[^claude-sheets] If the file changes, ask Claude to update the sheet from it, then check the total again.

![A sheet holds a copy of your file, in three steps. Step 1, Claude builds the sheet: the file invoices.csv says one invoice is $100.00, and the sheet in Claude shows a total of all invoices of $600.00. The sheet matches the file. Step 2, the file changes: the file now says $110.00, but nothing passes to the sheet, which still shows the old total, $600.00. Step 3, you ask Claude to update it: the file says $110.00 and the sheet now shows $610.00. The total goes up by exactly $10.00. At the foot: after every update, check the total again.](img/a-sheet-holds-a-copy.png)

**In ChatGPT:** ChatGPT for Excel and Google Sheets works inside your own spreadsheet file. So there you change the file itself, not a copy.

## Try it

Download [budget_actual_q3.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/budget_actual_q3.csv). It shows what eight Brightline departments planned to spend (the **budget**) and what they spent (the **actual**) in July, August and September.

1. **Open it as a sheet.** In the Artifacts tab, pick **Sheets**. In the blank sheet, click **+** at the bottom left, choose **Import CSV**, and pick the file.[^claude-sheets]

   ![The foot of a sheet in the Claude app, as it looked on November 17, 2026. The pointer is on the + button at the bottom left, beside the tab names Budget vs Actual Q3 and Q3 Summary. A small menu is open above it with two choices: Import CSV and Blank sheet. A sheet that is still empty also offers Import from Excel and Import from Google Sheets.](img/sheets-import-menu.png)

2. **Fix the typing mistake.** One amount is ten times too big. Find it, and type the right amount in its cell.
3. **Ask for a summary.** Type in the chat:

   > Add a tab called Q3 Summary. For each department, show the budget for the three months together, the actual for the three months together, and the difference in dollars and as a percent. Add a row for the total of all eight departments. Use formulas that read the imported tab.

4. **Check it.** Click the total and read its formula. Then work out the Logistics row with a calculator.

**The answers.** The mistake is IT's actual for August: 123,600 should be 12,360. After your fix:

| | Budget | Actual | Difference |
| --- | ---: | ---: | --- |
| Logistics | 108,000 | 127,440 | 19,440 over (18.0%) |
| All eight departments | 666,000 | 684,150 | 18,150 over (2.7%) |

**On the Free plan,** attach the file in a chat and ask for the same summary as a table in a doc. Its numbers are Claude's own arithmetic, not formulas, so check both rows with a calculator.

[^claude-sheets]: As verified on November 11, 2026. A sheet holds up to 100,000 cells. Some company plans need an owner to turn Sheets on first. Anthropic names Claude for Excel and Claude for Google Workspace as the tools for files you already have. Get started with Claude Sheets, Anthropic. The **+** menu at the foot of a sheet, with Import from Excel, Import from Google Sheets, Import CSV and Blank sheet, is as the app showed it on November 16 and 17, 2026.
[^openai-space]: As verified on November 11, 2026, OpenAI says "Sheets are coming soon." Getting started with Space in ChatGPT, OpenAI.
[^openai-spreadsheets]: As verified on November 11, 2026, OpenAI says the tool "is available globally to Business, Enterprise, Edu, and K-12 users, and to ChatGPT Free, Go, Pro, and Plus users". It also says Codex, in the ChatGPT desktop app, can work on a workbook you have open in Microsoft Excel through the same add-in. ChatGPT for Excel and Google Sheets, OpenAI.


