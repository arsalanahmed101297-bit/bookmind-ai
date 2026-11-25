# 12.3 Permissions, and plan before you act (/building-ai-workers/agentic-coding/permissions-and-plan)

---
type: Document
title: "12.3 Permissions, and plan before you act"
description: "How to set a coding agent's permissions by how hard a mistake would be to undo, and why its plan is the review you can do before any code exists."
status: stable
order: 312.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-03T12:37:00Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.3" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-03T12:37:00Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** When a new hire starts, you do not give them every key on the first day. They can read the files, but they ask before they change the price list, and they never approve payments. As you learn to trust them, you let them do more without asking. You set those limits by how much damage a mistake could do.

**What you will learn.** How to decide what the agent may do without asking you, and how to read its plan against your own check before any code exists.

**Why it matters.** A mistake that is easy to undo can run alone. One that is hard to undo should wait for your yes, and a plan shows the mistake before it happens.

### What may it do without asking?

A coding agent's **permissions** are the new hire's keys. They decide which actions the agent may take on its own and which ones need your yes. Every product names its settings differently, but they fall on one ladder.

| Rung | What the agent may do alone | When it fits |
| --- | --- | --- |
| Plan only | Read files and propose a plan. It changes nothing. | A first look at an unfamiliar repository, and before any task you do not fully understand yet |
| Ask before acting | Read freely. Ask before every edit and every command. | Your first working sessions, once you have seen the repository |
| Accept edits | Edit files and run common file commands, such as moving or deleting a file inside the folder. Ask before other commands. | Routine edits in a repository under git |
| Automatic checks | Edit and run most commands. A safety check blocks risky ones and asks you. | Longer tasks you supervise loosely |
| Bypass approvals | Run anything without asking. | Only inside a throwaway **sandbox**, a sealed-off machine set up to be thrown away, never on your own machine |

### How do I choose a rung?

By how hard a mistake would be to undo. An action's **blast radius** is everything a mistake there could affect, so ask what the worst mistake would cost. Editing a file in a git repository is easy to undo, because git's save points, called **commits**, let the agent go back. It can also show you a **diff**, exactly which lines changed. Deleting files outside the folder, pushing (sending your commits to the shared copy online), sending an email or running a payment is hard to undo. The harder an action is to undo, the more the agent should ask. Derek, in this chapter's overview, chose the top rung with no git, so one wrong delete cost him a day.

![The title reads "The permission ladder." The line below it reads "Give the agent only the freedom the task needs." Five numbered rungs rise from "Less autonomy" at the bottom to "More autonomy" at the top. Rung 1, Plan only, says "Inspect the project and propose changes". Rung 2, Ask before acting, says "You approve edits and commands as configured". Rung 3, Accept edits, says "Edits proceed, many commands still ask". Rung 4, Automatic checks, says "Routine actions proceed, flagged actions pause". Rung 5, Bypass approvals, says "Runs without asking within available access". The top rung links to a red panel, "Disposable sandbox only: keep real credentials, live systems, and sensitive data out of reach." A second panel, "Before you grant access", asks two questions: Blast radius, "What could a mistake affect?", and Recovery, "How hard would it be to undo?" The footer reads "Choose the lowest level that gets the job done. Mode names and exceptions vary by tool. Verify the actual settings."](img/permission-ladder.png)

*Figure 12.3. The permission ladder. Choose the lowest rung that gets the job done, and climb only as far as the blast radius allows. Mode names and exceptions vary by tool.*

### What do I check before I say yes?

The command itself. When the agent asks to run a command, the prompt shows the exact command. Read it. `npm test` only runs the project's tests, so saying yes is safe. `rm -rf data/` deletes a whole folder, so it is not. A command that installs a package (ready-made code from the internet), deletes files, changes a setting outside the folder or sends data over the network needs a closer look. If you do not understand it, ask the agent what it does before you say yes.

### When do I ask for a plan?

For any task bigger than a one-line fix. A plan is a brief in reverse. In Part II you wrote the brief and the AI did the work. In plan mode the agent reads the files, writes out what it will change and why, then stops. You read the plan, correct it, and only then let it act. A plan costs a minute. A wrong change across ten files costs an afternoon.

Plan first when:

- the task touches several files, or files you do not know well
- there is more than one reasonable way to do it
- the change is hard to undo
- you cannot yet say what "done" looks like

Act directly when the task is clear and easy to check, such as fixing a typo or changing a label in one file.

### How do I read a plan?

Against your check, which holds the cases you know, such as which invoices belong on the list and why. Take your cases one at a time, and find each one in the plan. A case the plan handles wrongly is a correction to send now. A case the plan never mentions is a question to ask now.

**At work.** Ana asks for the Friday due-invoices script in plan mode, and reads the plan with her check from [12.1](from-chat-to-coding-agent.md) beside it. The plan says the agent will read `data/invoices.csv`, add `src/due-by-friday.ts` and a test, and add a command to run it. It also names a rule Ana forgot to give. Some old rows have an empty `due_date`, so the agent will work out the date from `invoice_date` and the payment terms in the `terms` column. The file cannot say whether that is Brightline's rule, but Ana can. She finds it in her check, along with her other cases, and tells the agent the plan is right. Only then does she switch to accepting edits and let it work. Had the rule been wrong, one sentence here would have fixed it, before any code existed.

A plan says what the agent means to do. It cannot show what the finished script will do with the real file. Only running the script shows that, and your check catches it.

**The operating rule:** set permissions by blast radius, read every command before you approve it, ask for a plan before any change you cannot check in a minute, and read the plan against your check.

**Practice it.** [Practice: permissions, and a plan](both-ai-vendors.md#practice-permissions-and-a-plan), in your own tool, twenty minutes.


