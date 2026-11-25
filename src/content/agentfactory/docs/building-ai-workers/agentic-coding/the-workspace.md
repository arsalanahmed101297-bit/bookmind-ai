# 12.2 The workspace: folder, session and where it runs (/building-ai-workers/agentic-coding/the-workspace)

---
type: Document
title: "12.2 The workspace: folder, session and where it runs"
description: "The three choices before any coding task: which folder the agent works in, which session it uses and which machine it runs on."
status: stable
order: 312.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T14:08:49Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.2" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-09T14:08:49Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A carpenter who comes to build shelves needs three answers before starting. Which room? Is this one visit, or will they come back tomorrow? And will they work in your house, or take the boards to their own workshop? The same three questions apply to a coding agent: which folder, which **session**, and which machine.

**What you will learn.** How to choose the folder the agent can reach, the session it works in and the computer it runs on, before any task starts.

**Why it matters.** Each choice decides what the agent can touch and where your data goes. Made at the start, each one takes a minute.

### Which folder?

This is the carpenter's room. You pick one folder when you start, and the agent works on the files inside it. Pick the folder that holds everything this job needs, and nothing more. Your whole computer is too big: the agent has too much to read and too much it could damage. Half the project is too small: the agent has to guess what is missing.

For real work, keep the folder under git ([12.1](from-chat-to-coding-agent.md)). Git works like save points in a game. You tell the agent when a step is worth keeping, and it saves one. If a later step goes wrong, you tell it to go back. The agent runs the git commands, and [13.2](../programming-fundamentals/the-workbench.md#what-will-i-see-when-the-agent-uses-git) shows what each one does.

Whatever the agent reads goes to the model's provider. So a file that must not leave the company, such as one with bank details, stays outside the folder, and a setting denies the agent reading it ([12.4](rules-the-agent-reads.md)). You need both. The folder is not a wall: some agents can read files outside it unless a setting stops them. And a setting alone cannot always stop a script the agent writes from opening the file, so keeping the file elsewhere comes first.

### Which session?

This is the carpenter's visit. A session is one continuous piece of work with the agent: the task, the files it read, the commands it ran and the conversation about them. Everything in it so far is called its **context**, and that fills up as the work goes on ([12.5](context-sessions-effort.md)). You can start a fresh session for a new task, or come back to an old one to continue. A good habit is one session for one task.

Desktop apps let you run several sessions at once, for example one fixing a bug while another writes tests. [12.6](many-sessions.md) shows how to keep them from colliding.

### Which machine?

This is your house or the carpenter's workshop. The agent's loop can run in one of two places.

| | Local session | Cloud session |
| --- | --- | --- |
| Where the agent runs | On your own computer | On a machine the AI vendor runs for you |
| What it can reach | The folder you chose, your installed tools, your network | A copy of the repository, taken from a website that keeps your code online, such as GitHub. Your code must be there first. |
| Where your code goes | The files stay on your disk, but everything the agent reads is sent to the model's provider | A copy of the repository sits on the AI vendor's machine, and the agent reads it there |
| When it stops | When you close the app or the computer sleeps | It can keep going after you close your laptop |
| Good for | Work you want to watch, and tools that only your machine has | Long tasks, several tasks at once, and work you check later |

[Chapter 1](../../ai-worker-paradigm/from-chatbots-to-ai-workers/overview.md) asked where a piece of work runs and where its results are kept. In a local session the work runs on your machine and the results are in your folder. In a cloud session the work runs on the AI vendor's machine and the results come back as a **pull request**: a request for you or a teammate to review the work before it joins the main copy. Either way, nothing counts as delivered until it is in the repository and you have reviewed it.

### Do I choose all of this every time?

No. If you start most sessions in the same place, such as one repository, another computer you reach over the network, or the cloud, most desktop apps let you save that setup. You make the choice carefully once, not in a hurry every morning.

**At work.** Ana keeps Brightline's AP scripts in one repository called `brightline-ap`. It holds copies of the invoice exports with the bank details removed. The live export, with vendor bank details, stays outside it. She builds the Friday due-invoices script in a local session, because it is her first real task with an agent and she wants to watch every step. When it is reviewed, she runs it on the live export herself. A week later she wants the README, the file that explains the project, cleaned up, and a new test file. Neither needs the live export, so she starts two cloud sessions, closes her laptop, and reviews two pull requests the next morning.

**The operating rule:** one task, one session, one folder under git. Choose local for work you watch and cloud for long or parallel work you review later. Data that must not leave the company stays out of the agent's folder, and a setting denies the agent reading it, because whatever the agent reads goes to the model.

![The title reads "Three choices before any task." The line below it reads "Choose the workspace, the conversation, and where the tools run." Three numbered panels sit side by side. Panel 1, "Which folder?", shows a folder with the git symbol and reads "Keep the task together. Choose the smallest folder that contains the whole project. Save checkpoints with Git commits." Its note reads "Folder scope is not an access barrier." Panel 2, "Which session?", shows a chat window with a checklist and reads "One task, one session. New task? Start fresh. Continuing work? Resume it. Handing over? Leave clear notes." Its note reads "Keep the context focused." Panel 3, "Which machine?", shows a laptop, "Local, on your computer", and a cloud server, "Cloud, on a hosted machine", and reads "Where will tools run? Choose for tools and task duration." Its note reads "Local execution does not ensure privacy." The footer reads "Decide all three before the first message. Check permissions and where model data is sent."](img/folder-session-machine.png)

*Figure 12.2. Three choices before any task: which folder, which session, and which machine. A commit, in the first panel, is one of git's save points.*

**Practice it.** [Practice: the workspace](both-ai-vendors.md#practice-the-workspace), in your own tool, ten minutes.


