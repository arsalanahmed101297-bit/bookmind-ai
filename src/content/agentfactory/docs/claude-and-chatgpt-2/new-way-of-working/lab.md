# Practice lab (/claude-and-chatgpt-2/new-way-of-working/lab)

---
type: Document
title: "Practice lab"
description: "Five short tasks on a free account: hand over a job, check a total yourself, see what permissions do, improve work in rounds, and try the same brief in ChatGPT."
status: stable
order: 0.16
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T09:29:31Z
chapter: "F00"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-05
generated:
  at: 2026-11-21T09:29:31Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Here are five short hands-on exercises that you can do with a free account. Do them in order, because each one builds on the last.

The lab is a first taste. They use small files and short jobs. You will run the full Brightline payment run in Chapter 5, when you have learned to write a brief properly.

### Before you start

You need:

- **The Claude desktop app** with a free account. [Set up the apps](set-up-the-apps.md) shows you how to set it up.
- **A spreadsheet app,** such as Excel, Google Sheets or Numbers, for Task 2.
- **The lab files.** Download [brightline-lab-f00.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-f00.zip) and unzip it. It holds two lab files and a short README:
  - `payment-policy-v3.md`: Brightline's six payment rules.
  - `office-orders.csv`: this week's office-supply orders.
- **The ChatGPT desktop app,** only for the optional parts of Task 4 and for Task 5.

Brightline is a made-up company, and the suppliers and numbers are invented. Still, do not paste real company data into this lab.

> [!NOTE]
> **If your app looks different**
>
> Apps change every month, and some features differ by plan. If a step does not match your screen, look for the closest option and carry on. If Claude cannot make a file on your plan, ask for the same result as a table in the reply. The idea behind each task still holds.

### Task 1. Ask a question, then hand over a job

**Goal:** see the difference between asking a question and handing over a whole job.

1. In Claude, start a new conversation and ask a question:

   > What should a small company check before it pays a supplier's bill?

   Read the answer. It is useful, but it is general advice, and you would still have to turn it into something your team can use.

2. Start another new conversation. Attach `payment-policy-v3.md`, using the + or paperclip button next to the message box. Then hand over a job with a four-part brief. The words in parentheses label each part. You can leave them in:

   > Make a one-page checklist for the accounting team to use before each payment run. Done when each numbered rule appears once, with its number, and the last line, about who may send payments, appears as a note without a number (outcome). Work from the attached payment policy (context). Make it a document I can edit, one rule per line (format). Do not share it with anyone (constraints).

3. Wait for the document. Open it.

**Check your work.** Open the policy next to the checklist. Find rules 1 to 6 on the checklist, one by one. Does each rule appear once, with its number? Then look for the policy's last line, about who may send payments. Is it there, as a separate note without a number? This is the "Done when" sentence, and you are the one checking it.

**What to notice:**

- The question gave you an answer. The brief gave you finished work, built from *your* company's rules.
- The last line of the policy has no number, but it may be the most important line on the page. A good checklist keeps both the numbering and the meaning: it does not turn that line into a rule 7, and it does not leave it out. If your checklist gets either wrong, tell Claude exactly what to fix. You just gave feedback on evidence, not on a feeling.
- Close the Claude app and open it again. The conversation is still there, and so is the document if Claude made one, because Claude saves them to your account, not to the borrowed computer.

### Task 2. Check the work, not the claim

**Goal:** check a total yourself, with a program you trust, instead of trusting what the worker says.

1. Start a new conversation in Claude. Attach `office-orders.csv`. Send this brief:

   > Work out the total cost of this week's office orders and the total for each supplier, doing the math with a small program, not in your head. Done when every row of the file is counted once and the supplier totals add up to the grand total (outcome). Use the attached file of this week's office orders (context). Give me a small table, one sentence with the grand total, and a short note on what you checked, what the checks found and anything you could not verify (format). Only report. Do not change the file (constraints).

2. Write down Claude's grand total. If Claude says it cannot run a program on your plan, carry on. Your spreadsheet is the check either way.

3. Now check it yourself. Open `office-orders.csv` in your spreadsheet app. In Google Sheets, choose File, then Import, then Upload.
   - In cell F1, the first empty column, type the heading `line total`.
   - In cell F2, multiply the quantity by the unit price: type `=D2*E2`. Copy the formula down to row 8, the last order. You can drag the small square at the corner of the cell.
   - Under the last line total, add them up with `=SUM(F2:F8)`.

4. Compare your total with Claude's.

**Check your work.** Your spreadsheet total and Claude's total should be exactly the same, to the cent. If they differ, find the row that causes it before you trust either number.

**What to notice:**

- Look at order O-206. It is a return, so its quantity is negative. A careless total adds it instead of taking it away. Did Claude handle it? Did Claude's note on its checks mention it?
- Claude said what it checked. That note helps, but it is still Claude's account of its own work. Your spreadsheet is the check. In this book, totals are always checked with a program you trust.

### Task 3. Words or permissions?

**Goal:** see that what stops a worker is a permission, not a sentence in the brief.

Do this task only if no banking or payment app is connected to your Claude account and you have not turned on computer use. **Computer use** lets Claude work your screen the way you do: it clicks, types and moves between apps.

1. In the Task 2 conversation, type:

   > Do not take any action. Just tell me: could you send a $50 payment to a supplier from this conversation? What would you need to be able to do it?

2. Read the reply. Claude will most likely say it cannot. Notice *why*: Claude has no access to any payment system. Your brief in Task 2 said "Only report", but that sentence is not what makes payment impossible. The missing access is.

3. Now look at your own settings. In Claude's settings, find the list of connected apps, called connectors. On a new account, no app is connected yet. Each app you connect adds something Claude is able to do.

4. Now see a setting stop Claude. Look under the message box. If it says *Manual*, the setting you chose in [Set up the apps](set-up-the-apps.md), start a new conversation and send:

   > Open https://forecast.weather.gov/MapClick.php?lat=39.96&lon=-83.00 and tell me the first forecast the page shows for Columbus, Ohio.

   In Manual, Claude asks before it opens a new site. Deny the request. Claude cannot open the page, so it cannot tell you the forecast. Your message asked it to open the page, but the setting stopped it. If you see no such setting, your plan may not have it yet. Skip to the check.

**Check your work.** Write one sentence in your own words that explains the difference between "Only report" in a brief and having no payment connector. If you did step 4, write a second sentence: what stopped Claude from opening the weather page, your words or the setting?

**What to notice:** the brief tells the worker what it should do. Permissions decide what it is able to do. When the stakes are high, such as money, rely on permissions, not on words.

### Task 4. Set a goal and improve in rounds

**Goal:** try the method the Panaversity team uses for its own writing.

1. Start a new conversation in Claude and type:

   > Write a short explanation, about 150 words, of what an "AI Worker platform" is, for a friend who has never used AI for work. Use only this text from *The AI Agent Factory* as your source. I will paste it below.

   Below it, in the same message, paste the text of the section "What has changed" from [The New Way of Working](overview.md#what-has-changed). Then send.

2. When the draft arrives, ask Claude to grade it:

   > Grade this draft out of 10 in three areas: accuracy, quality, and how easy it is for a beginner to understand. Give one reason for each grade.

3. Set the goal:

   > Our goal is 9.5 in each area. Accuracy means every fact can be found in the source I pasted. Improve the draft, grade it again, and repeat until it reaches 9.5 in each area, or until you have done three rounds. Show the grades after each round. At the end, list any problem you could not fix, even if the grade is below 9.5.

   The limit of three rounds keeps the task short and saves your plan's usage.

4. *Optional, if you have the ChatGPT app.* Paste both the final draft and the same source text into ChatGPT, and ask:

   > Below are a short explanation and the source it is based on. Review the explanation for a beginner. List any claim that the source does not support or that contradicts it. Then grade it out of 10 for accuracy, quality and ease of understanding, and list the three most useful changes.

   Paste ChatGPT's review back into the Claude conversation and ask Claude to use it to improve the draft.

5. Now do the last step yourself. Compare each sentence of the final draft with that text. Is every fact really there?

**Check your work.** You can name one change Claude made in the rounds, and one fact you checked against that text.

**What to notice:**

- Claude ran the rounds by itself once you gave it a goal. That goal works like a "Done when" sentence.
- The grades are a guide, not proof. A draft can score 9.5 and still contain a wrong fact. The person at the end, you, is the check.

### Task 5 (optional). The same brief in ChatGPT

**Goal:** see that one good brief works on both apps.

1. In the ChatGPT desktop app, turn on **Work**, the switch above the message box. If you see no Work switch, your app may already have merged Chat and Work. Just send the brief.
2. Attach `payment-policy-v3.md` and send the same brief you used in Task 1, word for word.
3. Open the document ChatGPT makes.

**Check your work.** Apply the same "Done when" sentence: does every numbered rule appear once, with its number, and is the note about who may send payments there without a number? Compare the two checklists side by side.

**What to notice:** you did not rewrite the brief for ChatGPT. As [the tour](../tour/chatgpt.md#briefing-chatgpt) shows, both vendors give the same advice: describe the outcome and how to check it, not the steps. To compare the two apps fairly, give them the same job, the same files, the same "Done when" sentence and the same limits, and check the results yourself. Chapter 5 does this with the full payment run.

### What you practiced

| Task | The idea from this section |
| --- | --- |
| 1 | An AI Worker does a whole job when you give it a four-part brief, and you check it against its "Done when" sentence |
| 2 | Check the work yourself, with a program you trust, not the worker's account of it |
| 3 | Words in a brief cannot block an action. Permissions can |
| 4 | Set a goal, improve in rounds, and keep a person as the final check |
| 5 | One brief works on both apps |

After this section's Check yourself, the [Tour of the Apps](../tour/overview.md) comes next. It shows each feature of both apps side by side, and you can skim it now or come back to it later.


