# How the Panaversity team works (/claude-and-chatgpt-2/new-way-of-working/how-the-panaversity-team-works)

---
type: Document
title: "How the Panaversity team works"
description: "How the Panaversity team uses both apps: zip files in and out, a goal of 9.5 in each area, rounds of improvement, a second AI as reviewer and a person as the final check."
status: stable
order: 0.14
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Team method" ]
last_verified: 2026-11-05
sources:
  - id: team-plans
    title: "The Panaversity team's own plans (Panaversity, November 2026)"
    resource: "Panaversity team, November 2026"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product detail and its source"
    resource: "../tour/overview.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Panaversity, the team behind this book, uses both apps every day for its own work. Here is how. You do not need to copy it on day one.

## Which apps do we use, and where?

Everyone on the Panaversity team has a paid plan for both Claude and ChatGPT.[^team-plans] For both Claude and ChatGPT, our default place to work is the desktop app. We do the work in Claude, and we use ChatGPT for one main job: to review what Claude made.

We also use the apps on the web and on our phones, so that work can continue when we leave the desk. In the Claude mobile app we can also answer its questions, redirect the work or start something new.[^claude-and-chatgpt-2-tour]

## How do we move work in and out of the apps?

We move work in and out of the apps as **zip files**. A zip file packs many files and folders into one file, and keeps each file in its folder. To give Claude or ChatGPT a whole project at once, such as a chapter with its images and data, we upload one zip. When the work is done, we ask for the result as one zip to download, so every file comes back in the right folder, ready to use. This also suits the borrowed computer in [Where the work happens](where-the-work-happens.md): one zip is an easy way to bring all the work back as saved files.

Zip files are where you start. For this book itself, we go one step further. Claude's changes do not go straight into the book. They wait in a **pull request**: a request to add a set of changes, which shows exactly which lines changed. A second person checks it before the changes join the book. [Appendix: versions and pull requests](../../appendices/claude-and-chatgpt-2/appendix-versions-and-pull-requests.md) shows how.

## How do we improve the work?

Our method is simple: set a goal, 9.5 out of 10 in each area, then improve the work in rounds. When we write a book chapter, a blog post or an article, it goes like this:

1. **Claude writes a first draft.**
2. **Claude reviews the draft and grades it out of 10** in three areas: accuracy, quality, and how easy it is for a beginner to understand.
3. **Claude improves the draft until it reaches 9.5 in each area.** It improves, grades again and repeats. Claude now does these rounds by itself. Before, we had to ask for each round by hand.
4. **We give the result and its sources to ChatGPT** and ask it to review and grade the work too, with specific fixes.
5. **We give ChatGPT's review back to Claude,** which uses it to improve the work again.
6. **A person checks the facts against their sources,** reviews any problems still open, and decides when the work is ready. For the book, this is the second person's check on the pull request.

![How the Panaversity team works: set a goal, improve in rounds, check the evidence. 1, Draft: Claude writes a first draft. 2, Self-review: Claude grades each area out of 10, accuracy, quality and ease for beginners. 3, Check the goal: a self-assessed score of 9.5 in each area? If not yet, Claude improves the draft and grades it again. If yes, 4, Second review: ChatGPT reviews the draft and its sources, and gives grades and specific fixes. 5, Revise: Claude improves the draft using ChatGPT's feedback. 6, Human check: a person checks the facts against their sources, reviews unresolved issues and decides when the work is ready. A band says grades guide improvement, and evidence supports approval. At the foot: a second AI can spot missed problems, and a person makes the final decision.](img/team-loop.png)

### Why ask a second AI?

Grading your own work is hard, for people and for AI. ChatGPT comes from a different company and was trained differently, so it often notices problems that Claude missed.

### What do the grades prove?

The grades are a guide, not proof. A 9.5 does not show that every fact is right. That is why a person checks the facts and makes the final call. The 9.5 goal works like a "Done when" sentence, and the person at the end is the check.

### How do you keep the rounds honest?

If you try this yourself, two habits keep the rounds honest. Say what each grade means, for example that accuracy means every fact can be found in the sources. And limit the rounds, to three for example, and ask Claude to report any problem it could not fix. Then Claude improves the work, not just the score.

[^team-plans]: About $100 a month for each app, per person, as of November 2026. You do not need these plans to start this book.
[^claude-and-chatgpt-2-tour]: As verified on November 5, 2026. What each app can do depends on the plan. The tour gives the detail and the sources. Tour of the Apps.


