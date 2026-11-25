# Whiteboard (/claude-and-chatgpt-2/build-something/whiteboard)

---
type: Document
title: "Whiteboard"
description: "How to think through ideas on a Claude Whiteboard: talk, type or sketch, let Claude group and order your ideas, review its suggestions, work on the board with your team, then turn it into a doc or deck, and what ChatGPT offers instead."
status: stable
order: 0.39945
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Whiteboard" ]
last_verified: 2026-11-11
sources:
  - id: claude-whiteboards
    title: "Get started with Claude Whiteboards (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/18324319-get-started-with-claude-whiteboards
  - id: claude-docs
    title: "Get started with Claude Docs (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: openai-site-tools
    title: "Using site tools in the ChatGPT desktop app (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app
  - id: openai-community
    title: "Feature Request: A Shared Visual Workspace / Whiteboard Inside ChatGPT (OpenAI Developer Community, verified 2026-11-11)"
    resource: https://community.openai.com/t/feature-request-a-shared-visual-workspace-whiteboard-inside-chatgpt/1394344
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** When a team plans something new, someone picks up a marker. Ideas go on the board in any order. Then the team moves them, groups them and draws arrows between them, until a plan appears. The board is for thinking. It is not the final answer.

## What it is

**Claude Whiteboards** is a shared board where you, your team and Claude think through ideas. You talk, type or draw. Claude puts your ideas in order and groups them. Use a board before you know the final answer, for example when you are choosing between options. You need a paid plan, and it is still in beta.[^claude-whiteboards]

## Build one

In the Claude desktop app, ask for a whiteboard in any chat, or pick the **Whiteboard** tile in the Artifacts tab. Then add your ideas in the easiest way for you:[^claude-whiteboards]

- **Talk.** Press the microphone button and speak. Many languages work.
- **Type or draw** on the board.
- **Add pictures.**

For Brightline:

> Brightline wants to change how its Friday payment run works. Here are my rough notes. Put the steps on a board in order, group the risks, and show which steps depend on which.

## Work on it with Claude

Claude groups ideas that belong together and puts steps in order. It draws arrows between steps that depend on each other. You can ask it to:[^claude-whiteboards]

- group the ideas a different way,
- turn the board into a timeline,
- say what is missing.

When you ask what is missing, Claude adds new ideas to the board. If it answers in the chat instead, ask it to add them to the board. **Check each one.** On the board, Claude's ideas look just like your team's ideas. Decide for each: keep it, change it or remove it.

## Work on it with your team

Everyone on the board can change it at the same time. Click **Share** to invite people.[^claude-whiteboards]

## When the thinking is done

![From board to finished work. Three cards joined by arrows. Whiteboard, step 1, think it through: talk, type or sketch, Claude groups and orders, you check each suggestion. Docs, step 2, write it down: turn the board into a one-page plan, edit it, check every fact. Slides, step 3, show it: turn the doc into a four-slide deck, present it, then export. At the foot: when the plan is clear, ask Claude to turn the board into a doc or a deck.](img/from-board-to-finished-work.png)

When the plan is clear, ask Claude to turn the board into a doc or a deck. Then continue on the [Docs](docs.md) and [Slides](slides.md) pages.[^claude-whiteboards],[^claude-docs] You can also save a picture of the board: click **Share**, then **Export**.[^claude-whiteboards]

If the plan has several separate jobs, a project can run them side by side, as [Projects: one coordinator, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md) showed. Ask Claude to turn the board into a doc that lists the jobs and what "done" means for each. Check the list, then paste it into the project and ask for one thread per job. Every thread gets the project's instructions.[^claude-projects]

**One limit:** Claude uses only what is on the board. It does not look in your other apps. So put on the board every fact it needs.[^claude-whiteboards]

## In ChatGPT: no built-in board yet

- **No whiteboard in ChatGPT, when this page was checked.** On November 11, 2026, OpenAI's help pages did not mention one. When a user asked, OpenAI's support account suggested site tools instead.[^openai-community]
- **Instead, use a whiteboard website.** Open it in the ChatGPT desktop app's own web browser. On some websites, ChatGPT can work on the page for you. OpenAI calls this **site tools**. ChatGPT asks your permission first.[^openai-site-tools]
- **Site tools are not ChatGPT Sites.** Sites, from the [Design](design.md) page, makes web pages. Site tools let ChatGPT work on other companies' websites.

## Try it

Download [q3_review_notes.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/q3_review_notes.txt): untidy notes from a managers' meeting at Brightline. Open it and copy all of its text.

1. **Build it.** In the Artifacts tab, pick **Whiteboard**. On the blank board, click **Show chat**. Type the line below, paste the notes under it, and send:

   > Put these meeting notes on a whiteboard. Group them into Results, Problems, Risks and Actions. Show each action with its owner and its date.

2. **Ask what is missing.** Click **Ask Claude** and type: "Add what is missing from the risks to the board." Then remove at least one of Claude's ideas.
3. **Ask for a timeline.** Type: "Turn the actions into a timeline from October 12, 2026, to the next review on January 15, 2027, with the owner on each step."
4. **Check it** against the answers below.

**The answers.** The notes hold two risks: the chain of stores that pays after 60 days, and the carrier with no signed contract. Every other risk on the board is Claude's idea. There are five actions, owned by Priya, Dave, Omar, Nina and Ivan. Four have a date: October 16, 23, 30 and 31. Ivan's has none, because the notes only say "before the scanner pilot".

**On the Free plan,** paste the notes into a chat, and ask for the same four groups and what is missing from the risks.

[^claude-whiteboards]: As verified on November 11, 2026. Whiteboards is on the Pro, Max, Ultra, Team and Enterprise plans, on the web, desktop and phone. You can invite people outside your company by email, and send a board to Lucid, Miro or Zoho Vani. Pictures export as PNG files. You cannot import a board from a file. In the app on November 17, 2026, a question typed in the chat was answered in the chat, and Claude added its ideas to the board when asked to. Get started with Claude Whiteboards, Anthropic.
[^claude-docs]: Claude can also turn a doc into a Slides deck. Get started with Claude Docs, Anthropic.
[^openai-community]: *(Reported.)* When a user asked for a whiteboard in ChatGPT, OpenAI's support account suggested site tools instead, on September 13, 2026. Feature Request: A Shared Visual Workspace / Whiteboard Inside ChatGPT, OpenAI Developer Community.
[^openai-site-tools]: As verified on November 11, 2026, OpenAI says site tools "are available when your account has access and the website provides site tools", and that "Each website decides which tools to provide." It lists no plans. Using site tools in the ChatGPT desktop app, OpenAI.
[^claude-projects]: As verified on November 11, 2026. Anthropic says a project "starts a thread for each task", that "every new thread starts with the project's instructions", and that the Library tab holds "the files you added and the files threads produced". Let Claude coordinate ongoing work with Projects, Anthropic.


