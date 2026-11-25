# Lab: build the month-end (/claude-and-chatgpt-2/case-4-nishas-month-end/lab-build-the-month-end)

---
type: Document
title: "Lab: build the month-end"
description: "Build the firm's setup with sample files: a project, a skill and one run that makes three pieces. Check and approve it. Then a late bank line arrives: fix it by hand, see what is left wrong, and run the job again."
status: stable
order: 0.827
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T11:53:28Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
sources:
  - id: claude-projects
    title: "Anthropic, Let Claude coordinate ongoing work with Projects (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: skills
    title: "Anthropic, How to create custom skills (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: plans
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: code-execution
    title: "Anthropic, Create and edit files with Claude (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
  - id: skill-how
    title: "Anthropic, How to create a skill with Claude through conversation (Anthropic Academy)"
    resource: https://academy.claude.com/tutorials/how-to-create-a-skill-with-claude-through-conversation
  - id: routines
    title: "Anthropic, Automate work with scheduled tasks (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-21T11:53:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

In this lab you build a smaller version of the firm's setup, with twenty-nine sample lines in place of 3,400. You make a project and a skill, run the job, check it, and approve it. Then a late bank line arrives, and you decide how to deal with it.

> **Read first.** Read the story up to [The run](the-run.md). Do the lab before you read [Wednesday morning](wednesday-morning.md), if you can. Then you meet Wednesday yourself.

> **What you need.** The Claude desktop app, on a Pro, Max or Ultra plan, which has projects.[^claude-projects] The web version at claude.ai/code works too. Skills, docs and decks are on your plan as well.[^skills],[^plans] Three steps are marked **optional**: a sheet, a folder on your computer and a real scheduled task. Your plan has usage limits: if you reach one, wait and go on later. If a menu name differs a little, follow the app.
>
> **If your Claude has no projects in the Code tab yet**, use a classic project instead, from Projects in the Claude app. Free has only that kind. Put the instructions and the files on the project's page, and run each step in a new chat in the project.

> **Two levels.** The **core lab** (Parts 1 to 8) practises a project, a skill, one reproducible calculation, several pieces and your own tests. The **full lab** adds the three **optional** steps: a sheet, a folder on your computer, and a real scheduled task that reads its files from a connected drive. Only the full lab shows that the whole setup in the story works.

## Lab at a glance

| Part | What you do |
|---|---|
| 1 | Make the two files |
| 2 | Build the setup: a project and a skill |
| 3 | Run the job |
| 4 | Check and approve |
| 5 | Write the morning bank check |
| 6 | Wednesday: fix it by hand |
| 7 | Wednesday: run the job again |
| 8 | What did the setup do? |
| 9 | Decide as Nisha (stretch) |

The core path is Parts 1 to 8. Keep your answers in a plain text file called `lab-notes.md` (or `lab-notes.txt`), or on paper.

> **Your app may look a little different.** The names of buttons change from time to time. If you cannot find one, ask Claude in any chat, for example: *"Where do I add instructions to a project?"* Claude can usually tell you where a button is.

## Part 1. Make the two files

These are Northgate's last few days of September. The figures are made up. Both the bank and the ledger start the week at **$186,000.00**. This is the money in the account before these lines. The dates differ by a day or two for the same payment, because the bank often records a payment after the company does.

**The bank's lines.** Save them as `bank-september.csv`. Two deposits of $2,000.00 have no name. Banks sometimes leave the name out.

```csv
date,type,name,amount
2027-09-24,Deposit,Parma Hardware,4210.00
2027-09-24,Check 2291,Great Lakes Freight,-1860.50
2027-09-27,Deposit,Lorain Builders,5125.25
2027-09-27,Check 2292,Ohio Edison,-940.75
2027-09-28,Deposit,,2000.00
2027-09-29,Deposit,,2000.00
2027-09-28,Deposit,Erie Street Diner,3450.00
2027-09-28,Check 2293,Summit Packaging,-2315.00
2027-09-29,Deposit,Medina Farm Supply,2890.00
2027-09-29,Check 2294,Payroll service,-6480.00
2027-09-30,Deposit,Akron Tool Rental,7926.00
2027-09-30,Bank fee,Monthly fee,-525.00
```

**The ledger's lines.** Save them as `ledger-september.csv`.

```csv
date,type,name,amount
2027-09-23,Deposit,Parma Hardware,4210.00
2027-09-22,Check 2291,Great Lakes Freight,-1860.50
2027-09-24,Deposit,Lorain Builders,5125.25
2027-09-24,Check 2292,Ohio Edison,-940.75
2027-09-27,Deposit,Bay Village Bakery,2000.00
2027-09-28,Deposit,Solon Garden Center,2000.00
2027-09-27,Deposit,Erie Street Diner,3450.00
2027-09-27,Check 2293,Summit Packaging,-2315.00
2027-09-28,Deposit,Medina Farm Supply,2890.00
2027-09-28,Check 2294,Payroll service,-6480.00
2027-09-29,Deposit,Akron Tool Rental,7926.00
2027-09-30,Bank fee,Monthly fee,-525.00
2027-09-29,Deposit,Canton Plumbing,4000.00
2027-09-30,Deposit,Elyria Motors,2120.00
2027-09-28,Check 2295,Northcoast Insurance,-5000.00
2027-09-29,Check 2296,Lake Erie Lumber,-2800.00
2027-09-30,Check 2297,City of Cleveland,-1500.00
```

To make each file:

1. Open a plain text editor. On Windows, use Notepad. On a Mac, use TextEdit, and choose **Format**, then **Make Plain Text**.
2. Paste the lines, with the first line `date,type,name,amount`.
3. Save the file with the name above, ending in `.csv`. If your editor adds `.txt`, change the name back.

Or paste the lines into a chat and ask Claude: *"Give me this as a file called bank-september.csv."* Then download the file.

Put both files in a new folder called `Northgate`.

## Part 2. Build the setup

**The project.**

1. In the Claude desktop app's Code tab, or at claude.ai/code, select **Projects** in the sidebar, then **New project**. Call it "Northgate month-end".[^claude-projects]
2. Open the project's **Library**, choose **Add**, and add your two `.csv` files. You should see both file names in the Library. A file you add is a copy: if you change it later, add it again.[^claude-projects]
3. Open **Project settings**, then **Memory**, then **Project instructions**. Paste the text below, and save it. Every new thread in the project starts with these instructions.[^claude-projects]

> You prepare the month-end pack for Northgate Supply. The bank's lines and the ledger are in this project's files. Use the newest bank file. Both start at $186,000.00.
>
> Match each bank line to a ledger line with the same amount and a date no more than five days apart. Use the name or check number too, where there is one. If a bank line could match more than one ledger line, pair it with one, and list the pair under **Needs a look**. List every line that has no match. Work out reconciled cash: the bank's closing balance, plus deposits the bank has not shown yet, minus checks the bank has not paid yet.
>
> The pack is three pieces: the numbers doc, the memo, and a deck of three slides. Slide 2 shows reconciled cash and the bank's minimum, side by side. Slide 3 lists the timing items and any unrecorded items. The bank's minimum is $195,000.00.
>
> After every run, write a run note: the files you read, the lines matched, the lines left over, reconciled cash, and the pieces you made or updated.
>
> Never send anything. If the bank and the books do not agree, say so in the first line.

**Optional.** In the desktop app, let Claude read your `Northgate` folder (ask Claude: *"How do I let you read a folder on my computer?"*), and change the sentence "The bank's lines and the ledger are in this project's files" to name your folder. Then Claude reads your files where they are.

**The skill.**

A skill needs **code execution** turned on. Code execution lets Claude run small programs.[^skills]

1. Open **Settings**, then **Capabilities**. Make sure code execution is turned on. In the updated Settings layout, this switch is called **Create and edit files**.[^code-execution]
2. Start a new chat, outside the project. Type: *"I want to make a skill called month-end memo. Here are its rules."* Then paste these five rules:

> **Month-end memo.** Use this when asked for a month-end memo.
>
> 1. The first line is the status. Write READY when reconciled cash is the same as the cash in the ledger and nothing is unrecorded. Write NOT READY when anything is unrecorded. The status says whether the books agree with the bank. It does not say the pack may go out. A person decides that, in the approval.
> 2. A timing item is in the ledger and not yet at the bank. Count timing items. Do not list them.
> 3. An unrecorded item is at the bank and not in the ledger, such as a returned check. List each one under the status, with its date and amount.
> 4. Then give reconciled cash, and how far it is above or below the bank's minimum.
> 5. Never write that the books are correct. Write what was compared, and what was the same.

3. Answer Claude's questions. When Claude has written the skill, follow its prompt to save it. If you see no prompt, ask: *"Save this skill for me."*
4. Open **Customize**, then **Skills**, and turn the new skill on.[^skills] On older screens, the path is **Settings**, then **Capabilities**, then **Skills**.[^skill-how] The threads in your project use the skills you turn on in your account.[^claude-projects]

**If you cannot make a skill,** paste the five rules at the end of the project's instructions. The lab works the same way.

In `lab-notes.md`, write one line for each part you built: what it is for.

## Part 3. Run the job

In the **project conversation**, the chat on the project's page, type one request. Claude starts a thread for the job.

> Prepare the September 2027 month-end pack. Match the lines with a program if you can. Make the numbers as a doc with a table, the memo as a doc and the slides as a deck.

Optional: you can ask for the numbers as a sheet.

When Claude has finished, write in `lab-notes.md`:

1. How many pairs did it match? Which lines were left over? Which lines did it list under Needs a look?
2. What is reconciled cash?
3. What does the memo's first line say?
4. The time the run took. Note the clock time when you send the request, and when Claude finishes.

If your figure is not what you expect, see **If something goes wrong** after Part 7.

Then tell the setup which pieces to update next time.

1. Open each piece from the thread that made it. If you cannot find one, ask in the project conversation: *"Give me the links to the three pieces."*
2. Click **Share**, and copy the piece's link. If you cannot copy a link, write down the piece's exact name, the title shown at the top of the piece, instead. If Claude still makes new pieces later, that is a finding for Part 8. Then keep a short **current-version list** in the instructions: each piece, its link or name, and the date of the run that made it.
3. Add the three links, or names, to the project's instructions, under a line that says: *"Update these pieces. Do not make new ones."*

## Part 4. Test and approve

Do these five tests. Do not use Claude for them.

1. **The source balance.** Add the bank's twelve lines to $186,000.00 with a calculator, from `bank-september.csv` itself. That is the bank's closing balance. Compare it with the closing balance Claude used. This test uses the bank's own file, not Claude's work. It catches a figure that Claude read wrongly. You will come back to this test in Part 6.
2. **The arithmetic.** Work out reconciled cash, using the leftover lines Claude listed in Part 3. Your fourth test, below, makes sure those lines are right.
3. **The matching.** Choose three matched pairs, and find each one in your two files. Then find the two $2,000.00 deposits without a name. Could each one be matched to either ledger line? Did Claude list them under Needs a look?
4. **The leftovers.** Find each leftover line in `ledger-september.csv`. Is each one a deposit the bank has not shown yet, or a check the bank has not paid yet?
5. **The pieces.** Open the numbers doc, the memo and slide 2. Do all three show the same figure?

If a test fails, write down in `lab-notes.md` what is wrong and where. Do not approve until it is fixed.

Before you approve, look at the two $2,000.00 deposits under Needs a look. In real work, you would confirm them with the bank first. Here you cannot, so your approval must name them as not yet confirmed.

Then write your approval in `lab-notes.md`, with the date and time. It must name the pack, the figure and the two deposits. Use Nisha's message in [The run](the-run.md) as a model.

Save the memo as a PDF: open the memo, find its export option (in the **Share** menu or the menu next to it), and choose **PDF**. Name the file `memo-1.pdf`. This is what the client gets.

## Part 5. Write the morning bank check

Write the instruction for a scheduled task that checks the bank each morning. Write it in `lab-notes.md`. It must say:

- what to read,
- what to compare it with,
- where to report (in this lab, in the chat),
- and what it must not do.

**Optional.** Turn it on as a scheduled task, and use **Run now** once.[^routines] A task that runs in the cloud cannot count on a folder on your computer. Keep the files in a connected app, such as Google Drive, and name that place in the instruction.

## Part 6. Wednesday: fix it by hand

A message arrives.

> *"The bank's lines for September have changed. There is one new line, dated September 30: a returned check from Erie Street Diner, minus $3,450.00."*

Open `bank-september.csv` in your text editor. Add this line at the end. Choose **Save As**, and name the new file `bank-september-2.csv`. The first file stays as it was.

```csv
2027-09-30,Returned check,Erie Street Diner,-3450.00
```

1. Work out the new reconciled cash yourself.
2. Now fix it by hand. Open the deck from its link. Change the figure on slide 2 yourself. Or, in the thread that made the deck, ask Claude: *"Change only slide 2 to the new figure."*
3. Open the other pieces. In `lab-notes.md`, list every place that is now wrong. Check the numbers doc, the memo and slide 3.

How many places did you find?

Then answer one more question in your notes. Your first test passed in Part 4. Why did it not catch this?

## Part 7. Wednesday: run the job again

1. Add `bank-september-2.csv` to the project's Library. If Claude reads your folder, it is already there.
2. In the project conversation, type:

> The bank's lines for September have changed. Prepare the September 2027 month-end pack again, from bank-september-2.csv.

3. Do the five tests again. This time, do the first test properly. The bank's statement for September shows a closing balance of $198,030.00. Compare that with the closing balance Claude used.
4. Write a new approval. It must name the new figure, the status, the unrecorded item and the two deposits that are still not confirmed, and say that it replaces the first pack.
5. Save the memo as a PDF again, as in Part 4. Name it `memo-2.pdf`.
6. Write the message to Dana, in five sentences or fewer. Say what changed, why, the old figure, the new figure, and which pack to use.

In `lab-notes.md`, write the time the second run took, and the time your tests took.

> **If something goes wrong.**
>
> - **Your figure is not $198,300.00 (or $194,850.00 in Part 7).** Ask Claude: *"Show me each matched pair and each line left over."* Compare its list with the answers at the end of this page. Then change the instructions, not the pieces, and run again.
> - **Claude made new pieces instead of updating the old ones.** That is a real finding. Write it in your notes. Check that the links or names are in the instructions, and run again.
> - **Claude did not use the skill.** Check that the skill is turned on in **Customize**, then **Skills**. Or paste the five rules at the end of the project's instructions.

## Part 8. What did the setup do?

Answer in `lab-notes.md`.

1. Make two lists: what the setup did, and what you did.
2. In Part 6 you fixed one slide. In Part 7 you ran the job again. Which was faster? Which left the pieces the same as each other?
3. Did Claude update your three pieces in Part 7, or make new ones? If it made new ones, what would you change in the setup?
4. Name one rule in your instructions that is only a sentence. What could make it a setting? (A setting is a permission in the app, such as which connected apps are turned on. A sentence only asks. A setting stops.)
5. Next month, October's files arrive. What exactly would you have to do?

## Part 9. Decide as Nisha (stretch)

Read [Friday's decision](fridays-decision.md). In ten lines or fewer, write what you would tell Walter: how far the setup may run alone, how you would charge, and one thing that could still go wrong with your answer, and who would catch it.

## What to hand in

`lab-notes.md`, `memo-1.pdf` and `memo-2.pdf`.

## How the lab is graded

The lab is worth 10 points.

| Part | Points | Full marks for |
|---|---|---|
| 2 | 1 | A project with instructions, and one line on what each part is for |
| 3 | 1 | One run that makes three pieces, with its answers written down |
| 4 | 3 | The bank's own closing balance compared with Claude's, the two $2,000.00 deposits flagged, the other tests done without Claude, and an approval that names the pack, the figure and the two deposits not yet confirmed |
| 5 | 1 | A check that says what to read, what to compare, where to report, and that it changes nothing |
| 6 | 1 | A list of the places that were wrong after the fix by hand |
| 7 | 2 | A second run, a new approval that names the unrecorded item and the two deposits and replaces the first, and a clear message to the client |
| 8 | 1 | Two honest lists, and an answer to question 5 |

Part 9 is not graded.

## Check your answers

**Part 3.** Twelve pairs match. The two $2,000.00 bank deposits have no name, and each could be Bay Village Bakery or Solon Garden Center. A good run lists them under Needs a look. The figure is the same either way, but a person should confirm them with the bank. Five ledger lines are left over: two deposits, $4,000.00 and $2,120.00, which is $6,120.00, and three checks, $5,000.00, $2,800.00 and $1,500.00, which is $9,300.00. The memo's first line says READY.

**Part 4.** The bank's twelve lines add up to $15,480.00, so the bank's closing balance is $201,480.00. If Claude used another closing balance, your first test has caught an error.

| Line | Amount |
|---|---|
| Bank's closing balance | $201,480.00 |
| Add: deposits the bank has not shown yet | $6,120.00 |
| Subtract: checks the bank has not paid yet | $9,300.00 |
| **Reconciled cash** | **$198,300.00** |

That is $3,300.00 above the bank's minimum. The ledger's seventeen lines add up to $12,300.00, so the ledger's balance is $198,300.00 too. The two agree, which is why the status is READY. A good approval reads: *"Approved: Northgate September month-end pack, first version, reconciled cash $198,300.00. Two $2,000.00 deposits were matched without a name and are not yet confirmed with the bank."*

**Part 5.** A good check says: read the newest bank file; compare its closing balance with the one in your last run note; report in the chat, or in the firm's channel; change nothing in the pack.

**Part 6.** The bank's closing balance is now $198,030.00, and reconciled cash is $194,850.00. After the fix by hand, slide 2 is right. At least five places are wrong: the numbers, the memo's first line (it still says READY), the memo's figure, the comparison with the minimum (it still says above), and slide 3, if it lists the items. Your first test passed in Part 4 because it never looked outside the bank file. You added up the file's own lines, and Claude's balance came from the same file. That file was downloaded before the bank had added all of September 30's lines. Only the bank's statement could show the missing line, and your test did not compare with it. Hamza missed it for a similar reason in the story: he took the balance from Claude's run note, not from his statement.

**Part 7.** The memo's first line now says NOT READY, with one unrecorded item: the returned check, $3,450.00. Reconciled cash is $194,850.00, which is $150.00 below the bank's minimum. The ledger still says $198,300.00, because Northgate's books do not show the returned check yet. The closing balance Claude used, $198,030.00, now agrees with the bank's statement. A good approval reads: *"Approved to send: Northgate September month-end pack, second version. Status NOT READY, one unrecorded item: the returned check, $3,450.00. Reconciled cash $194,850.00. The two $2,000.00 deposits are still not confirmed with the bank. It replaces the first pack."*

**Part 8.** A good answer to question 5: put October's two files in the project, or in the folder, and type one request. Then check, approve and send. If Claude made new pieces in Part 7, the links were missing from the instructions, or the run did not use them: say so in your notes.

## What you practiced

You chose a part for each need, joined the parts into one setup, and ran a job with one request. You checked the result without the AI and approved it by name. When the figures changed, you saw what a fix by hand leaves behind, and you let the setup do the job again.

[^claude-projects]: As verified on November 21, 2026, Anthropic names "Pro, Max, and Ultra plans" for projects. It says to select **Projects** "in the left sidebar", then **New project**, and that you add files with **Add** in the project's **Library**, and that "uploads are copies". Project instructions are in **Project settings > Memory > Project instructions**, and "every new thread starts with the project's instructions". Cloud threads load "the skills you enable there", in your claude.ai account. Let Claude coordinate ongoing work with Projects, Anthropic.
[^skills]: As verified on November 11, 2026, Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". As checked on November 13, 2026, the same page says "Enable the skill in Customize > Skills." How to create custom skills, Anthropic.
[^code-execution]: As verified on November 13, 2026, Anthropic says to turn it on "from **Settings > Capabilities** by toggling **Code execution and file creation** (called **Create and edit files** in the updated Settings layout) on". Create and edit files with Claude, Anthropic.
[^plans]: As verified on November 11, 2026, Docs, Slides and Design are on every Claude plan, and Sheets needs a paid plan. What are artifacts and how do I use them?, Anthropic.
[^skill-how]: As verified on November 11, 2026, Anthropic's tutorial says to describe the skill in a new chat, answer Claude's questions, save the skill and turn it on under Settings, Capabilities, Skills. Claude reads each skill's name and description to decide when to use it. How to create a skill with Claude through conversation, Anthropic.
[^routines]: As verified on November 11, 2026, with the plan list checked again on November 13, 2026, Anthropic says scheduled tasks "are available on Pro, Max, Ultra, Team, and Enterprise plans", that each run opens as a new session, and that Claude "can use an included connector during a run, including writes". Automate work with scheduled tasks, Anthropic.


