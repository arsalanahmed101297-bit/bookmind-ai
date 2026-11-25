# 12.7 The same agent outside the app (/building-ai-workers/agentic-coding/outside-the-app)

---
type: Document
title: "12.7 The same agent outside the app"
description: "How the same coding agent runs from a terminal, an editor, a script and a pipeline, and why the fewer people watch a seat, the tighter its permissions."
status: stable
order: 312.7
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:24Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.7" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-21T00:02:24Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A taxi driver can take bookings at the taxi stand, through the app on their phone, or from a regular customer who calls every Monday at 7. The driver, the car and the rules of the road are the same each time. Only the way the job arrives changes.

**What you will learn.** How the same agent runs from a terminal, an editor, a script and a pipeline, and why a seat with fewer people watching needs tighter limits.

**Why it matters.** A run that nobody watches cannot ask you anything. What it may do has to be decided before it starts.

### Where else can it run?

So far you have started the agent in the desktop app. The agent is the driver, and each place you can start it from is a seat, where you sit to give it a job. This book starts in the desktop app because it puts the pieces in one place: the folder picker, the list of sessions, the permission prompts, every change line by line, and the local or cloud choice. The same agent also runs in four other seats.

| Seat | How work arrives | Who watches |
| --- | --- | --- |
| Desktop app | You type a task and watch the session | You, live |
| Terminal | You type a task in a command-line window | You, live |
| Editor | You ask from inside your code editor, the program you write code in, next to the file | You, live |
| Script | A command runs the agent once with a task and prints the result. This is often called **headless** or non-interactive mode. | Nobody while it runs. You read the output later. |
| Pipeline | A **CI** (continuous integration) system, which runs checks on every change, runs the agent on every pull request or on a schedule | Nobody while it runs. The pull request shows the result. |

![The title reads "One agent, five seats." The line below it reads "Five ways to run an agent. Check the setup in each one." A box at the top, "Coding agent: project instructions + configured tools", connects to two groups. "Interactive use: you can guide the work as it runs" holds Desktop app, "Work through a visual app", Terminal, "Work from the command line", and Editor, "Work beside your code". "Automated use: the run may continue without you present" holds Script, "Run a defined task", and Pipeline, "Run within an automated workflow". A row headed "Check every seat" lists "Correct project", "Instructions loaded" and "Permissions verified". A banner reads "Less supervision calls for tighter permissions and clear stopping rules." The footer reads "Available interfaces and instruction loading vary by tool. A new seat may start a separate session."](img/five-seats.png)

*Figure 12.7. One agent, five seats. In every seat, check the project, the instructions loaded and the permissions. Less supervision calls for tighter permissions and clear stopping rules.*

### What stays the same?

The driver and the rules of the road. The rules file travels with the repository into every seat, so the agent can follow the same project rules whether you start it from the app or a pipeline. Settings files travel too. But a seat does not always load them. Some headless modes skip the rules file on purpose, for speed or for a clean run, and [12.8](both-ai-vendors.md#practice-outside-the-app) names one. So check that each seat loads the rules and settings you intend.

### What changes when nobody watches?

Nobody is there to say yes. In the app, a risky command waits for you. In a script or pipeline, the permissions must be set in advance, and set tighter: which tools the agent may use, which commands it may run, and which folders it may write. A headless run should have the least it needs. A run that reviews pull requests needs to read and comment, not to push to the main copy.

Nobody is there to say "done", either. So give the run a condition that ends it, such as "all the tests pass". Some agents can have a second model check that condition after each turn ([12.8](both-ai-vendors.md#the-details-tool-by-tool) names one). That model reads only the conversation, and it runs nothing itself. So its "done" is a second opinion, not your check. As [12.1](from-chat-to-coding-agent.md) showed, passing tests show only that the script runs.

### How does a program read the result?

A person reads the agent's answer in the app. A script needs output it can read. Headless modes can return structured output, in a fixed text format programs read, such as JSON, so the next step of a pipeline can check what happened. Some can also stream each step as it happens, so a program can show progress or stop a run early. Chapter 25 teaches structured output in depth.

### What is a routine?

The same agent with the same rules file, started by a clock or an event instead of by you. Some products can run a saved task in the AI vendor's cloud, on a schedule or when an event arrives. The event can be a new invoice file or a **webhook**, a message one system sends another when something happens. These are often called routines or automations. Chapter 38 covers their schedules and triggers.

**At work.** Ana's team now opens every change to `brightline-ap` as a pull request. A pipeline runs the coding agent headless on each one. It reads the rules file, runs `npm test`, checks the change against the rule about `data/`, and posts its comments. It can read the code and comment, but it cannot change what it reviews. Each run also runs the cases from Ana's check, which, once the script was right, she turned into tests. Its comments are one worker checking another. As [Chapter 6](../../managing-ai-workers/the-review-contract/work-you-did-not-watch.md) says, that is not a review, so a person still decides. [Chapter 15](../code-review/overview.md) builds this review setup in full.

**The operating rule:** keep the rules in the repository, check that each seat loads them, and the fewer people watching a seat, the tighter its permissions must be.

**Practice it.** [Practice: outside the app](both-ai-vendors.md#practice-outside-the-app), in your own tool, ten minutes, plus the command-line install.


