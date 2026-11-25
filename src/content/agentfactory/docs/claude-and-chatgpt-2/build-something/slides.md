# Slides (/claude-and-chatgpt-2/build-something/slides)

---
type: Document
title: "Slides"
description: "How to build a deck with Claude Slides: start from notes or a doc, edit slides directly or with Claude, present from Claude, share and export it, check it, and do the same job with ChatGPT Slides in Space."
status: stable
order: 0.39925
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Slides" ]
last_verified: 2026-11-17
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-share
    title: "Share artifacts (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: anthropic-keyboard
    title: "Use artifacts with a keyboard or screen reader (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/17457950
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: openai-slides
    title: "Creating and collaborating on slides in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001605-creating-and-collaborating-on-slides-in-chatgpt
  - id: openai-space-sharing
    title: "Collaborate in Space (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/space/collaboration
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A good talk has a few clear slides. It does not show every fact you know. Each slide makes one point. The details stay in the report.

## What it is

**Claude Slides** makes a **deck**: a set of slides for a talk. It can start from your notes, a report or your chat. You can change the slides yourself, present them from Claude, and save a copy as a file. It is on every plan, including Free.[^anthropic-artifacts]

## Build one

In the Claude desktop app, ask for a deck in any chat, or pick the Slides tile in the Artifacts tab. Say what it is about, who will watch it, and how many slides you want. If you already have a doc, ask Claude to turn it into a deck. For Brightline, with the payment-run doc from the [Docs](docs.md) example:

> Turn the payment-run doc into a three-slide deck for Dave, who approves the run: the total, the invoices marked "ask", and what he must decide. One idea per slide.

## Change it and present it

Match the way to the size of the change:

- **Fix a slide yourself** for small things: change a word, move a box, correct a number.
- **Comment on one slide** for a change to that slide. Click the **Comment** button, click the slide or one box on it, and type what to change. Keep **Send to Claude** ticked, so the comment also goes to Claude as a request. If you only want to leave a note for your team, untick it.[^anthropic-keyboard]
- **Ask Claude in the chat** for big changes, such as "Make slide 2 a chart" or "Cut it to five slides".

![A comment box on a slide in the Claude app, as it looked on November 17, 2026. The box names the part it is about: Slide 2, Lead "$127,440". It holds @Claude and the words Show this against budget as a chart. Below, a box named Send to Claude is ticked, beside the send arrow.](img/slides-comment-send-to-claude.png)

When it is ready, **present it from Claude,** in full screen.[^anthropic-artifacts]

## Share it and save a copy

Click **Share** and pick a level for each person. They are the three levels on the [Docs](docs.md#share-it-and-save-a-copy) page, and a deck's Share menu names them "Can view", "Commenter" and "Can edit".[^anthropic-share] To save a copy, export it as a PowerPoint or PDF file, or open it in Google Slides.[^anthropic-artifacts]

## Check it before you present it

This picture uses Brightline's full rules from [One job, start to finish](../new-way-of-working/one-job.md). The exercise at the end of this section uses a simpler set.

![One idea per slide. Left, in the doc: a paragraph says every invoice due in the next seven days is marked pay, hold or ask, with the rule from version 3 of the payment policy; invoices from a new supplier, invoices large enough to need a manager, and invoices with changed bank details are marked ask; and the total matches the checking program's total. An arrow points right to the slide, titled "Some invoices need your decision", with three short points: each invoice is pay, hold or ask; ask means a new supplier, a large invoice or new bank details; the total matches the checking program. At the foot: check every point on the slide against the doc it came from.](img/one-idea-per-slide.png)

- **Check every number.** A slide shows a number big, without the working behind it. Check each one against where it came from. Do not round it: a rounded number can hide a mistake.
- **One idea per slide.** If a slide needs a paragraph, that paragraph belongs in the doc.
- **Practice once.** Click through it in full screen, as your audience will see it.

## In ChatGPT: Slides

ChatGPT also has **Slides**. Its decks live in **Space**, as pages do.[^openai-slides]

1. **Make one.** In the ChatGPT desktop app, open **Work** and ask ChatGPT to "create ChatGPT slides". Say the topic, the audience and the material to use.
2. **Change it.** Edit text, pictures and charts on the slide yourself, or ask ChatGPT. Teammates can work on it at the same time.
3. **Present or save it.** Present from ChatGPT. On the web, you can also export it to PowerPoint, PDF or Google Slides.

ChatGPT Slides is rolling out to accounts that have Space, so your account may not have it yet.[^openai-slides]

**On a Windows computer,** check what you get. On Windows 10, and on some Windows 11 computers, the desktop app makes a PowerPoint file instead of a shared deck. If that happens, make the deck in ChatGPT on the web.[^openai-slides]

> [!NOTE]
> **Ask for "slides", not "a PowerPoint".** If you ask ChatGPT for a PowerPoint file, you get a file, not a deck you can keep working on.[^openai-slides] Also, anyone who can open a space can open the decks in it.[^openai-space-sharing]

## Build it from a connected app

While Claude builds a deck, it can read a connected app, such as a Google Drive folder of invoices. Anthropic's pages do not say whether a deck reads the app again later. So treat the deck as a **snapshot** of what Claude read at that moment. If someone changes the files in Drive later, assume the deck still shows the old numbers.[^claude-code-artifacts] (The live artifacts in the overview's warning are different: they read an app each time they open.)

So put the time of the snapshot on the deck:

> Read this week's invoices in my Invoices folder on Google Drive, and make a three-slide deck for Dave. On the first slide, write the date and time you read the folder.

On the day you present, ask Claude to read the folder again and update the deck. Then check the numbers again. To try this, first connect Google Drive to Claude, in **Customize > Connectors**. In some accounts the sidebar says **Plugins** instead.

**In ChatGPT:** ChatGPT reads your apps through **plugins**, as [ChatGPT 2.0](../tour/chatgpt.md) shows. Keep the same habit: before you present, ask for a fresh read and check the numbers.

## Try it (any plan)

Use the chat that holds your review note from the [Docs](docs.md) page. If you have none, start a new chat and attach [q3_review_notes.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/q3_review_notes.txt).

1. **Build it.** Type the request below. If Claude asks a question first, answer it.

   > Turn this into a five-slide deck for Brightline's managers: the headline, the results against budget, the three biggest problems, the risks, and the actions with their owners and dates. One idea per slide.

2. **Comment on one slide.** Click **Comment**, click the sales number on the results slide, and type "Show sales against budget as a chart". Keep **Send to Claude** ticked, and send it.
3. **Change the whole deck.** Type in the chat: "Split the problems slide into three slides, one problem on each."
4. **Check it and present it.** Check every number against the notes. Then click **Present**, the play button at the top right, and click through the deck.

**The answers.** Sales are $4.82m against a budget of $4.65m, not "about $4.8m", and the chart shows the same two numbers. There are five actions, and Ivan's has no date. Each problem now has a slide of its own.

[^anthropic-artifacts]: As verified on November 11, 2026. In the presenter, F shows full screen and the arrow keys move between slides. What are artifacts and how do I use them?, Anthropic.
[^anthropic-share]: As verified on November 11, 2026. Anthropic's pages differ on sharing from the Free plan, as the [Docs](docs.md) page notes. Share artifacts, Anthropic.
[^anthropic-keyboard]: As verified on November 17, 2026. Anthropic says a "Send to Claude" checkbox "sets whether the comment also goes to Claude as a request". It describes this for decks and designs. In the app on November 17, 2026, the Comment button was in the toolbar at the foot of the deck, and Send to Claude started ticked. Use artifacts with a keyboard or screen reader, Anthropic.
[^claude-code-artifacts]: `/slides` needs Claude Code version 2.1.265 or later. Anthropic says Claude builds an artifact from what the session can reach, "including your codebase and data it pulls through your connected tools". It describes a page that pulls fresh data each time someone opens it as different from "a snapshot from the session that built it". That guide is about artifacts made in the Code tab. It does not describe Slides decks, so test it once with your own deck. Share session output as artifacts, Anthropic.
[^openai-slides]: As verified on November 11, 2026, OpenAI says Slides "is available on ChatGPT Pro, Business, and Enterprise plans with Space access", and that it is still rolling out. It says that on Windows devices without a required component, slide creation in the desktop app uses PowerPoint (.pptx) files "instead of collaborative Slides", that Windows 10 does not support the component, and that you can use cloud mode or ChatGPT on the web instead. It describes export to PowerPoint, PDF and Google Slides on the web. Creating and collaborating on slides in ChatGPT, OpenAI.
[^openai-space-sharing]: *(Reported.)* Removing one person's invitation to a deck does not stop them if they can still open its space. Collaborate in Space, OpenAI.


