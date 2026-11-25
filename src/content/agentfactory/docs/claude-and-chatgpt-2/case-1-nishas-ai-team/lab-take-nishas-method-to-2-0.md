# Lab: take Nisha's method to 2.0 (/claude-and-chatgpt-2/case-1-nishas-ai-team/lab-take-nishas-method-to-2-0)

---
type: Document
title: "Lab: take Nisha's method to 2.0"
description: "Run Nisha's six steps again for one chapter of her book, this time with a project, a writer thread and a reviewer thread, an overnight scheduled draft, ChatGPT Work as the independent reviewer, and a second signature that only you can give."
status: stable
order: 0.565
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T07:13:20Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Method to 2.0" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: tour-chatgpt
    title: "The Tour: ChatGPT"
    resource: "../tour/chatgpt.md"
  - id: tour-chatgpt-perms
    title: "The Tour: ChatGPT, Permissions and governance"
    resource: "../tour/chatgpt.md#permissions-and-governance"
generated:
  at: 2026-11-23T07:13:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!IMPORTANT]
> **Your exercise, not Nisha's.** Nisha did not use threads, scheduled tasks, ChatGPT Work or a `final` folder. Her recorded evening of November 8, 2026 is in the story pages and the [exhibits](exhibits.md). This lab asks *you* to try the newer features, so nothing you record here is part of her case.

In the case, Nisha used two projects, a Claude Project and a ChatGPT Project, with one conversation in each, and stayed at her laptop the whole evening. That is the first step of the ladder in [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md): a helper, used by a person who is present. In this lab you run her six steps again for **one chapter** of her book. This time you use the features from the earlier sections: a project with a writer thread and a reviewer thread, an overnight scheduled draft, ChatGPT Work as the independent reviewer, and a second signature that only you can give.

This page explains each part, what it is for and the decisions you make. The exact clicks, the fallbacks and the docs' own words are in the **[lab guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md)** in the starter kit. Apps change often, so the guide is kept up to date separately and shows the date it was last checked.

![Evening 1.0 versus lab 2.0. Six parts of the work, before and after. Nisha's evening used two projects with one conversation each, one laptop and one evening. The lab uses one project, two threads, one evening and one morning. Writing: one conversation in a Claude Project becomes a writer thread. Grading: the same conversation grading itself becomes a separate reviewer thread. Overnight: nothing ran while Nisha slept, and in the lab a scheduled task drafts at 1 a.m. Second opinion: one conversation in a ChatGPT Project becomes ChatGPT Work. Record: files she saved and her diary become the Library and your version log. Final yes: her decision written in a conversation becomes a file only you can move to the final folder. The overnight row and the final yes row are gold, because they are the two big changes: work that runs without you, and a rule that is enforced. The callout says your judgment stays in every step, and the tools change where the work lives.](img/evening-1-0-versus-lab-2-0.png)

## Lab at a glance

You need two sittings: one evening and the next morning.

**Evening checklist**

- [ ] Part 1. Write the brief.
- [ ] Part 2. Create the project, paste the brief, upload version 6.
- [ ] Part 2. Turn off every connector that can send. Lock GitHub.
- [ ] Part 2. Run the enforcement test and record the result.
- [ ] Part 3. Ask for the 1 a.m. draft. Empty the scheduled task's connectors. Close your laptop.

**Morning checklist**

- [ ] Part 3. Read the 1 a.m. draft. Run the enforcement test on the 1 a.m. thread. Save your edit as version 2. Tell Claude what to remember.
- [ ] Part 4. Start a new reviewer thread. Start a new writer thread. Get version 3.
- [ ] Part 5. ChatGPT Work reviews version 3. Sort its points.
- [ ] Part 6. The writer makes version 4. A new reviewer thread grades it.
- [ ] Part 7. Check the facts. Make version 5. Move it into `final` yourself.
- [ ] Part 8. Reflect and compare.
- [ ] Hand in the files listed at the end, then do the lab quiz at the end of this page.

> [!NOTE]
> **Short path**
>
> Short on time? Do Parts 1 to 4 and Part 7 only: the brief, the project, connector check and enforcement test, the overnight draft, the reviewer thread, and the fact check and second signature. You skip ChatGPT's review, the writer's second round and the written reflection, so you practice every Claude 2.0 step but not the independent review. In Part 7, start from `chapter-7-v3.md` instead of version 4, and ask the morning writer thread for its list of unchecked facts first. Hand in the items for those parts, and one line saying you took the short path.

### Words to know

- **Thread:** one job inside a project, done by its own Claude session. The writer and the reviewer are two threads.
- **Project instructions and project memory:** the shared binder from [Projects: one coordinator, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md). Instructions are the rules sent to every new thread. This project exists for one job, so they hold your brief for that job too. Memory is notes Claude writes when you ask it to remember something.
- **Library:** the shared shelf. It keeps the files you add and every file the threads make.
- **Cloud scheduled task:** a saved prompt that starts a thread in the cloud at a set time, even with your laptop closed.
- **Connector:** a link from Claude to another app, such as Google Drive or Gmail.
- **Enforcement test:** asking a thread to do the thing you locked, to prove that it cannot. A screenshot of a setting shows what you chose. The test shows what the thread can actually do.

## Before you start

You need:

- **Claude,** with projects if your plan has them, and **ChatGPT,** with the Work toggle if your app has it. The [lab guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#where-to-find-it) says where to find each feature.
- **The starter kit:** download [nisha-lab-case-1.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-1.zip). It holds the lab guide, a brief template, a version log, a grading sheet, a fact checklist and a reflection template.
- **Two folders on your own computer:** `versions` for copies you download, and `final`. Only you will put files in `final`.

The chapter you will plan is **Chapter 7, Inventory**, from [Exhibit 7](exhibits.md#exhibit-7-the-final-result-table-of-contents-version-6). The case already explained one difference: US GAAP allows LIFO and IFRS does not. Your job is a chapter plan in the book's own pattern, plus one full worked example.

Use made-up numbers in your worked example, as Nisha did. Do not paste real company data.

**If a feature is missing,** use the fallback in the lab guide's [Which path do you take?](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#which-path-do-you-take) section: two ordinary Claude conversations instead of threads, a Desktop scheduled task or a draft started by hand instead of a cloud task, and a regular ChatGPT conversation instead of Work. A Desktop scheduled task runs on your own computer, in the folder you chose for it, so it can save its draft in that folder. Ask it to.[^desktop-scheduled-tasks] Open it there, and upload it to your writer conversation before human check 1. Keep `final` outside that folder. Record what you actually used. A fallback run still teaches the lab's main lesson, because the second signature does not depend on any feature.

## Part 1. Write the brief once

**Goal:** turn Nisha's first prompt into a proper brief, so you do not have to add missing context later, as she did in human check 1.

1. Open `brief-template.md` from the starter kit. Fill in the four parts that [One job, start to finish](../new-way-of-working/one-job.md) teaches, in order: the outcome, ending with a "Done when" sentence (the test that says when the job is finished), the context, the format and the constraints.
2. Add the rules Nisha only set later, in her human checks. Plain English for readers who speak English as a second language, no new chapters, two or three main standards per side and official sources only are content rules, so they go in the constraints. A list of every fact the writer could not check goes in the format.
3. Write the autonomy half of the constraints with care. The writer and reviewer may draft and grade. They may **not** share, send or publish anything.

Nisha wrote her rules into the chat as the evening went on. You put them in once, before any work starts. Compare how often you have to correct the draft with how often she did.

## Part 2. Set up the project, lock the connectors and test the lock

**Goal:** give every thread the same binder and the same shelf, make sure no thread has a connector that can send, and prove it with a test.
Exact clicks: [lab guide, Part 2](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#part-2-set-up-the-project-and-lock-the-connectors).

![Where everything lives in your lab project. On the left, your project in the cloud, opened at claude.ai/code or in the Code tab. In it, the project conversation, where you ask and Claude starts threads. It has no connectors. It starts a writer thread and a reviewer thread. Below them, the project instructions (your brief) and project memory. Below that, the Overview pane with three parts: the Library with every version, Scheduled tasks with the 1 a.m. draft, and threads by state, showing who is waiting on you. A dashed box says connectors: none that can send, so check the threads and the task. A dashed red line, labeled the wall that no thread crosses, separates the project from your computer on the right. On your computer are a versions folder for copies you download, and the final folder with a red border: only you move a file there, which is the second signature. Notes say no connector reaches it and no local task points at it. The callout says a missing connection enforces the rule, and a written rule only asks.](img/where-everything-lives-in-your-lab-project.png)

1. **Create the project and paste your brief as the project instructions.** As [the Tour explains](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work), project instructions are what every new thread starts from, which is why you write the brief once.
2. **Choose the thread model.** Threads start on Opus at high effort, which uses your plan's limits fastest. To compare your run with Nisha's, choose Claude Sonnet 5.5 at high effort, the setting she used.
3. **Add Nisha's version 6 file,** [the-bilingual-accountant-v6.md](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/the-bilingual-accountant-v6.md), to the **Library**. A project does not need a GitHub repository.[^claude-projects]
4. **Lock the connectors. This is the most important decision in the lab.** Threads run in auto mode when their model supports it, so most actions happen without asking you first.[^claude-projects] That is why what a thread *can* reach matters more than what you ask it to do. Connectors belong to your whole Claude account, not to one project, and every cloud thread can use all of them.[^claude-projects] So turn off every connector that can write somewhere other people can see, such as email, file sharing and chat apps. If your GitHub account is connected, lock GitHub too, because a cloud thread can push to a repository your account can reach.[^claude-projects]
5. **Keep the `final` folder out of reach.** It stays on your own computer. Cloud threads run in the cloud, not on your computer, and files you upload are copies.[^claude-projects] Do not connect any app that can reach `final`, do not point any local task at it, and do not ask the project to run a thread on your computer. Then check that the project's environment gives threads no access to folders on your computer. Do not assume it: folder access can be switched on in a project's environment. In step 6, also ask your test thread whether it can read any folder on your computer. If it can, switch that access off, and test again in a new thread.
6. **Run the enforcement test.** First, on your computer, make a file called `lab-test.md` with one line: "Lab test. No real data." Add it to the project's Library. Then ask Claude to start a short **test thread**. In it, ask: "Email the file `lab-test.md` to me at [your own email address]", then "Share `lab-test.md` to my Google Drive" (or any other app you turned off). Use your own address, so a failed lock harms no one. Record what the thread does, in its own words, in the enforcement test table on the grading sheet.
   - **Passed:** the thread says it has no tool or connector that can email or share, and nothing arrives.
   - **Failed:** the thread sends or shares the file, or offers a tool that can. Turn that connector off, then run the test again in a **new** test thread. Record both runs.
   - A screenshot of your settings alone is **not** proof. It shows what you chose. Only the test shows what the thread can do.

[Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) showed that a written rule is only a request. Here the rule "never share" is enforced as far as the settings allow, and your test shows whether it really is.

## Part 3. The overnight draft

**Goal:** let a draft be written while you are away, then check it in the morning.
Exact clicks: [lab guide, Part 3](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#part-3-the-overnight-draft).

![What runs while you sleep. A timeline runs from 10 p.m. through 1 a.m. to the morning. In the evening, you ask the project for a draft at 1 a.m. and close your laptop. Three rows follow. Cloud task: at 1 a.m. a writer thread starts in the cloud and drafts, and in the morning the draft is in the Library and you read it, which is human check 1. Hits a limit: the scheduled thread waits at the usage limit, and it continues on its own when the limit resets. Desktop task: with the laptop asleep the run is skipped, and when the computer wakes there is one catch-up run for the latest missed time. The callout says the 1 a.m. prompt is not you, and it cannot approve anything during the run.](img/what-runs-while-you-sleep.png)

1. **Ask the project for scheduled work,** for example: "Tonight at 1 a.m., start a writer thread that drafts version 1 of Chapter 7 from the project instructions, and saves it to the Library." Claude creates a cloud scheduled task that runs as threads in the project.[^claude-projects]
2. **Empty the task's connectors.** A task you create yourself includes all your connectors by default, and it can use them during a run, including writes.[^cloud-scheduled-tasks] One that Claude makes from the project may have none. So check the list either way. The draft needs none, so remove any it has. Your Part 2 lock is not enough here, because the task has its own connector list.
3. **Check the prompt.** A scheduled run starts on its own, so the prompt must stand alone. It must say exactly what to do and what done looks like, as if for a stranger. The prompt that fires is not you. It cannot approve or agree to anything during the run.[^cloud-scheduled-tasks] Read the rules in [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md), and use the overnight prompt in the brief template.
4. **In the morning, find the 1 a.m. writer thread.** If it hit a usage limit, it waits, and by default it continues on its own when the limit resets. The setting is **Auto-continue when usage limits reset**, in **Project settings**, then **General**. If the thread has not continued by the time you check, send it a message.[^claude-projects]
5. **Test the task's lock.** In the 1 a.m. writer thread, ask it to email or share `lab-test.md` as in Part 2, and record the result in the same table. This thread was started by the task, so it shows what the task could reach while you slept.
6. **Morning check (human check 1).** Download version 1 into your `versions` folder. Read it as Nisha did. Cut anything you did not ask for and fix what is wrong, in your own copy. Save it as `chapter-7-v2.md` and add it back to the Library. Now the Library holds your version, not only the AI's. Write each problem you notice in the private notes table on the grading sheet, and do not tell either AI about these notes.
7. **Make the binder learn.** For each correction that should hold for later work, tell Claude in the project conversation to remember it, for example: "Remember: every chapter line is one or two short sentences." Then check that the note is in project memory. Every cloud thread reads project memory when it starts, so your note reaches threads started after it, not threads already running.[^claude-projects] That is why Part 4 starts a new writer thread. Nisha had no binder. She had to repeat her rules in each prompt.
8. Record version 1 and your edited version 2 in `version-log-template.md`: who made it, what changed, words, sources, where it is saved and when.

## Part 4. The reviewer thread grades, the writer improves

**Goal:** separate the writer from the reviewer, and see whether that changes the grades.

**A rule for this part and Part 6: start a new thread for each new job, and check that it can find every file it must read.** The docs say threads read the files you add to the Library. They do not promise that a thread can read files another thread saved. A running thread may not see files or notes added after it started, so start a new thread for each job. If it cannot find a file, download the file and add it to the Library yourself, or paste its text into the thread.

1. In the project conversation, ask Claude to start a new **reviewer thread** that grades `chapter-7-v2.md` in the Library out of 10 in Nisha's three areas: accuracy, quality and ease of understanding. Use the grading prompt in the brief template. It must not change the draft.
2. **Start a new writer thread and hand it the grades.** Ask for a new **morning writer thread**, not the 1 a.m. one. Because it is new, it starts with the memory notes you saved in Part 3. A thread may not see another thread's conversation, so paste the reviewer thread's grades and its list of problems into the morning writer thread. Tell it to start from `chapter-7-v2.md`, your edited version, not version 1.
3. Ask the morning writer thread to improve `chapter-7-v2.md` in rounds, until every area reaches 9.5 or it can go no further. After each round it grades its own work, as Claude did for Nisha, so these round grades are **self-grades**. Ask for a table of scores after each round, and ask it to save the result in the Library as `chapter-7-v3.md`.
4. Write every grade on the grading sheet. Mark the writer's round grades as self-grades.

Nisha's Claude graded its own work. Here a different thread grades. Both threads still run on the same model with the same binder. Note on your grading sheet whether the reviewer thread's grades look more like Claude's self-grades or ChatGPT's grades in [Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version). Remember that every grade is a judgment against your prompt, not a measure of how correct the draft is.

## Part 5. A second opinion from ChatGPT Work

**Goal:** get an independent review, then decide what to use.
Exact clicks: [lab guide, Part 5](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#part-5-chatgpt-work).

1. Download `chapter-7-v3.md` into your `versions` folder. In ChatGPT, turn on **Work** if you have it, and upload the file with the review prompt from the brief template.[^tour-chatgpt]
2. **Decide what ChatGPT may reach.** Check which plugins ChatGPT can use. The review needs none that can send or share. Not naming a plugin is only a request, because ChatGPT can pick relevant plugins itself.[^tour-chatgpt] In the desktop app, add a lock with the **Ask for approval** permission mode.[^tour-chatgpt-perms] In the web app, the Tour documents no setting you can lock here, so give ChatGPT only a copy of the file and record this rule as **only asked**.
3. **Optional, a ChatGPT 2.0 step.** Keep the review in a **ChatGPT project**, so a second review later starts from the same files.[^tour-chatgpt]
4. Do not tell ChatGPT which tool wrote the draft or what grades it got.
5. **Human check 3.** Sort ChatGPT's points into accept, change and not now, as Nisha did. Add any new problem to your private notes, and mark which reviewer caught each problem. Your reviewers saw different versions too, so this is not a controlled test either.

## Part 6. The writer uses the review

**Goal:** use the review without letting the draft grow out of control.

1. Paste only the points you accepted into the morning writer thread, with Nisha's four rules from human check 3: plain wording, short chapter lines, nothing you did not accept, and every new fact checked or left out.
2. Ask for a list of every fact the writer could not fully check. Ask it to save the result in the Library as `chapter-7-v4.md`, and record it as version 4 in the version log.
3. Ask Claude to start a new reviewer thread to grade `chapter-7-v4.md` with the same prompt. If the thread cannot find the file, download it and add it to the Library yourself (see the rule in Part 4). Write the grades in the "4 / Reviewer thread" row of the grading sheet.

## Part 7. The fact check and the second signature

**Goal:** make the final decision yourself, in a place no AI can reach.

1. Turn the writer's list into your own checklist with `fact-checklist.md` from the starter kit, as in [Exhibit 6](exhibits.md#exhibit-6-nishas-fact-check-step-6). Check each fact against an official source: the IFRS Foundation for IAS 2, and FASB for ASC 330. Mark each one confirmed, changed or removed. This is the step that turns judgments into evidence.
2. Download `chapter-7-v4.md` into your `versions` folder and make your own last edits there. Save it as `chapter-7-v5.md`, add it to the Library, and record it as version 5 in the version log. Now the lasting record holds your final wording too.
3. **The second signature.** Copy `chapter-7-v5.md` from your `versions` folder into your `final` folder yourself. This is the only way a file becomes final in this lab. No thread can do it, as long as no thread can reach that folder, which you checked in Part 2.

## Part 8. Reflect and compare

**Goal:** measure what changed when the work moved up the ladder.

![Asked versus enforced. Two columns. Only asked, written in the brief or a chat: no new chapters, official sources only, two or three standards per side, repeat until every area reaches 9.5, the reviewer must not change the draft, and "never share or publish". A note says Claude stopped at 9.3 and nothing forced it. Enforced, by a setting or a permission that is missing: no connector that can send is turned on, GitHub is not connected or no repositories are granted to the Claude GitHub App, the scheduled task has no connectors, the final folder is outside every thread, only you move a file into final, and cloud threads run in the cloud, not on your computer. A note says these hold even if a thread ignores the brief. The callout says asking is not enforcing, so lock every rule that can be locked.](img/asked-versus-enforced.png)

Fill in `reflection.md` from the starter kit. Compare your run with the case:

- **Time.** Nisha took 1 hour and 40 minutes from first draft to final file ([Exhibit 8](exhibits.md#exhibit-8-time-and-cost)). How much of your own time did your run take, and how much ran while you were away?
- **Versions and size.** Compare your version log with [Exhibit 4](exhibits.md#exhibit-4-how-the-draft-changed). Did your draft grow as much as hers did?
- **Grades.** Compare your grading sheet with [Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version). Was the reviewer thread stricter than Claude's self-grading? Which disputed claims did your fact check settle?
- **Enforced or asked.** List each rule you set, in two columns like the figure above. A rule counts as enforced only if your enforcement test showed the thread could not break it. Which rules were only words?
- **The ladder.** Which step of [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md) did you reach? What would the next step need?

## What to hand in

Your instructor uses the same list to grade the lab.

- Your brief, pasted as the project instructions (Part 1)
- Your enforcement test table: what you asked, what each thread said, and whether anything arrived, for the Part 2 test thread and the 1 a.m. thread (Parts 2 and 3). Screenshots of your connector settings may support it, but they are not proof on their own.
- A screenshot of the scheduled task's empty connector list, and of your ChatGPT permission mode if you used the desktop app (Parts 3 and 5)
- A screenshot of project memory showing at least one correction you saved (Part 3)
- Your version log, with where each version was saved (Parts 3 to 7)
- Your grading sheet, with all grades, the writer's self-grades marked, and your private notes (Parts 3 to 6)
- ChatGPT's review and your accept, change and not now list (Part 5)
- Your fact checklist, made with `fact-checklist.md` (Part 7)
- The final file from your `final` folder, and one line saying you moved it there yourself (Part 7)
- Your reflection, with the rules you only asked for and the rules your test showed were enforced (Part 8)
- One line saying which features and which fallbacks you used, and the "last verified" date of the lab guide you followed

> [!NOTE]
> **Beyond this lab**
>
> This lab reaches the second step of the ladder: a personal AI Worker that runs while you are away. The next steps need features this lab leaves out on purpose:
>
> - **Cowork** is now part of Claude chat. One conversation can do real work with your files, a browser and your computer. See [the Tour](../tour/claude-conversations.md#two-places-to-work).
> - **Cloud environments** decide what a desk can reach on the web and which keys it can use. See [Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md).
> - **Claude Tag** gives a team worker its own accounts in a Slack channel. That is the team step of the ladder.
> - **A business AI Worker** adds its own identity, approvals checked by the system that acts, a lasting business record and monitoring. Case 2 shows Nisha starting that climb.

Check what you learned with the lab quiz at the end of this page. Then go to [Check yourself](check-yourself.md), which mixes questions from the whole case.

After that comes [Case 2: Nisha's First Client](../case-2-nishas-first-client/overview.md), where Nisha runs a paid job with an AI Worker that works while she sleeps. After both cases, the [final assessment](../case-2-nishas-first-client/final-assessment-a-new-ai-worker.md) gives you a new job to plan on your own.


[^claude-projects]: Let Claude coordinate ongoing work with Projects, Anthropic, verified November 9, 2026. The usage-limit rule was checked again on November 13, 2026, after Anthropic's page changed. The exact wording is in the [lab guide's Sources section](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#sources-what-the-docs-say-word-for-word).
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic, verified November 9, 2026. The exact wording is in the [lab guide's Sources section](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#sources-what-the-docs-say-word-for-word).
[^desktop-scheduled-tasks]: Schedule recurring tasks in Claude Code Desktop, Anthropic, checked November 22, 2026. It lists the folder among the settings you can edit for a task. Claude Code's overview page says Desktop scheduled tasks "run on your machine, with direct access to your local files and tools".
[^tour-chatgpt]: The Tour's ChatGPT page. The exact wording is in the [lab guide's Sources section](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#sources-what-the-docs-say-word-for-word). Check the model picker in your own app.
[^tour-chatgpt-perms]: The Tour's ChatGPT page, Permissions and governance. The available modes depend on the app version, your settings and your organization's rules.


