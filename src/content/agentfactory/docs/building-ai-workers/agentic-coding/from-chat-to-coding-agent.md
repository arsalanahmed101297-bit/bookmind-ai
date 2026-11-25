# 12.1 From a chat to a coding agent (/building-ai-workers/agentic-coding/from-chat-to-coding-agent)

---
type: Document
title: "12.1 From a chat to a coding agent"
description: "How a coding agent differs from the chat app you already use, why the folder you give it is its world, and why its passing tests are its own evidence while your check, written first, decides."
status: stable
order: 312.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-22T04:54:26Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.1" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-22T04:54:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You can give a good handyman your key and ask them to fix a dripping tap. They do most jobs around the house, and often they fix it. Or you can give a plumber your key. The plumber looks under the sink, turns off the water, tries a fix, runs the tap to check it, and tells you what they changed. The same plumber also puts the pipes in new houses. Both have your key. What changes is who is trained for the pipes. Either way, you run the tap yourself before you pay.

**What you will learn.** How an AI built for software differs from the chat app you already use, and how you stay in charge when it does the work.

**Why it matters.** AI agents now build software from start to finish, and what they hand back is usually right. So nothing makes you look twice. The work looks finished, and the tests, the checks the agent runs on its own work, all pass. You still answer for the result.

### What is a coding agent?

In Parts I and II you managed an AI Worker in a chat app, Claude or ChatGPT. That chat app is the handyman. It does many kinds of work, and it can even run code and open a folder on your computer ([Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md#optional-give-it-a-folder-and-let-it-use-a-browser)).

A **coding agent** is the plumber. It is the same kind of AI, set up for one job: building software. You give it a folder that holds your project ([12.2](the-workspace.md) shows how to choose it). It works in that folder and hands back its changes, and you keep them or undo them. You can undo them because the folder is kept under git, a tool that saves every version of the files.

A coding agent can build a script, an app or a website. In this part you use one to build an AI Worker.

### How does it work?

Like the plumber at your sink, every coding agent runs the same loop. You give it a task. It reads the files it needs. It makes a plan. It acts: it edits a file or runs a command, an instruction typed to the computer. It looks at the result, such as a test that passed or an error message. Then it decides the next step, and it goes around again until the task is done or it needs you. Every choice in this chapter is about how much of that loop you let the agent run alone.

![The title reads "The coding agent loop." The line below it reads "The agent checks its own work. Your check decides." On the left, a box labeled "You" lists "Define the task", "Set permissions" and "Read the plan". Below it, a gold box, "Your check, written first", lists "The cases you know" and "The count and total you expect". An arrow labeled "Task + limits" leads from You into a large box, "Project workspace", where five numbered steps run in a loop. Step 1, Read, says "Files, rules, and task". Step 2, Plan, says "Choose the next steps". Step 3, Act, says "Edit files or run commands". Step 4, Check, says "The agent's own tests". Step 5, Decide, says "Continue, report, or ask". From Decide, an arrow labeled "Continue" goes back to Read, and a red arrow labeled "Result" leaves the workspace and ends at a red circle, "Compare", beside your check. No arrow runs from your check into the workspace. A label in the middle reads "Work within approved permissions". The footer reads "Done means the result matches your check. Passing tests are the agent's evidence."](img/coding-agent-loop.png)

*Figure 12.1. The coding agent loop. "Your check, written first" is the tap you run yourself, and it stays outside the loop.*

### What does it know about my project?

Mainly what is in the folder, so the folder is its world. The plumber sees your pipes, but not the rule your landlord gave you last week. A coding agent knows your project mainly from its folder, which developers call a **repository** when it is kept under git. If the folder has no tests, the agent can only check its work against its own reading of the task. If it has no notes about the project's rules, the agent guesses them. Your company's unwritten rules, or the meeting where your manager changed the due-date policy, it cannot see. You must write them down or tell it ([12.4](rules-the-agent-reads.md)). Most of this chapter is about setting up that folder well.

### How do I know its work is right?

The same way you know the tap is fixed: you run it yourself.

**At work.** Ana Morales is an accounts payable (AP) analyst at Brightline, on the AP team Maria Lopez leads. Every Wednesday she makes a list by hand: the invoices due by Friday's payment run, from a spreadsheet export. It is her check on the AP Worker's weekly run proposal, which lists the same invoices. Her team wants a script, a tested program anyone can run with one command. Writing it is a coding agent's job.

This Wednesday she makes the list first, as usual: 8 invoices, $19,229.53. She keeps it in a note outside the project folder. Comparing with that note is how she will run the tap herself. Then she gives the agent the task and the rules she can think of, and reads its plan ([12.3](permissions-and-plan.md)). The agent writes the script and its tests, and reports 8 invoices, $19,229.53, with every test passing. It also shows its working: 2 of the 8 had no due date, so it worked theirs out from their payment terms. Without them the list would be 6 invoices, $9,614.53.

Ana compares the list with her note, invoice by invoice. It matches, so she approves the change. Had they differed, she would tell the agent the difference and ask why, however many tests had passed. From now on she runs the script instead of making the list, and reads what it lists and what it worked out.

This is the delegation Part II taught you. The agent's list was right, and a wrong one would have looked the same. The agent writes its tests from its own understanding of the job, and one of them even checks the script's total against the agent's own figure, $19,229.53. Had it left those 2 invoices out, that test would expect $9,614.53, and every test would still pass. Passing tests show only that the script runs ([Chapter 11](../../managing-ai-workers/when-the-worker-goes-wrong/stop-first.md#a-record-and-a-finished-run-are-both-reports)). Write the note before the agent starts, because seeing its result first would shape your check ([Chapter 6](../../managing-ai-workers/the-review-contract/agree-the-checks.md)). Give the agent your rules, but keep the count and the total out of its folder, so it cannot aim at them. For an app, the note becomes a list of the cases you know and what each must do ([13.11](../programming-fundamentals/tests-first.md)). "Done" means the result matches the check you wrote first.

**The operating rule:** give the agent a folder it can learn from, write your own check before it starts, then compare its result with your check, not with its report.


