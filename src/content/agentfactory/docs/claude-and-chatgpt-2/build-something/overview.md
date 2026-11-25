# Build Something (/claude-and-chatgpt-2/build-something/overview)

---
type: Document
title: "Build Something"
description: "The fourth section of Claude and ChatGPT 2.0. How to build with Claude's six artifact types, Docs, Slides, Sheets, Design, Data and Whiteboard, and with the ChatGPT tools that do the same jobs, before you use them in the cases."
status: stable
order: 0.3991
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "Artifacts", "Docs", "Slides", "Sheets", "Design", "Data", "Whiteboard" ]
last_verified: 2026-11-17
review_by: 2026-12-11
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-share
    title: "Share artifacts (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: claude-launch
    title: "Introducing Claude Whiteboards, Claude Sheets, and Claude Data (Anthropic, November 10, 2026)"
    resource: https://claude.com/resources/articles/sheets-whiteboards-data
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Six things you can build in Claude, and what ChatGPT offers*

## Where this section fits

The earlier sections showed that an AI Worker gives you finished work, not just an answer. This section shows you how to make that finished work yourself. It covers six kinds, in Claude and in ChatGPT. After this section comes [The Architecture](../architecture/overview.md), which is optional, and then the case studies. In the cases you write, check and share finished work, such as a brief, a draft and a grading sheet. The habits on these pages are the ones the cases need, so do this section first.

> [!NOTE]
> **Words used in this section**
>
> - **Artifact:** a piece of finished work that Claude makes, such as a document or a slide deck. It opens next to your chat. You can change it, come back to it and share it.
> - **Export:** to save a copy as an ordinary file, such as a Word file.
> - **Beta:** a new feature that works but is not finished yet. It may change.
> - **Connected app:** another app you have linked to Claude, such as your calendar or email.
> - **Space and Work:** two parts of the ChatGPT app. **Space** keeps your shared pages and decks. **Work** is where ChatGPT does longer jobs for you.
> - **Plugin:** an add-on you install. It can bring skills and connected apps. ChatGPT also calls its app connections plugins.

## Use the desktop apps

This book works in the **Claude desktop app**, on a Mac or a Windows computer, and in the **ChatGPT desktop app** for the ChatGPT parts. Every step in this section is written for them.

- **Claude.** The same steps also work in a web browser, because Anthropic gives the web and the desktop app the same artifact tools.[^anthropic-artifacts] What a browser or phone conversation cannot reach, such as your folders, is in [Where your work is saved](where-your-work-is-saved.md#in-a-web-browser-or-on-a-phone).
- **ChatGPT.** Use the new desktop app, the one with Chat, Work and Codex. Each page says where a tool differs on the desktop.

## Start here: the big idea

When Claude makes an artifact, it saves it in the **Artifacts** tab, in the menu on the left side of the Claude desktop app. It stays there, so you can find it again tomorrow.[^anthropic-artifacts] If you do not see the Artifacts tab, open Settings, then Capabilities, and turn on **Artifacts** and **Create and edit files**.[^anthropic-artifacts]

To start one, open the Artifacts tab. Under **Make something new**, you see one big button, called a **tile**, for each kind:

![Six things you can build. Six colored cards in two rows. Docs: a document people read and edit; in ChatGPT, Pages, in Space. Slides: a deck to present; in ChatGPT, Slides, in Space. Sheets: a shared table with formulas; in ChatGPT, inside Excel and Google Sheets. Design: something judged by how it looks; in ChatGPT, Sites, which are working web pages. Data: charts from your company's data; in ChatGPT, the @Data plugin in Work. Whiteboard: a board for thinking together; in ChatGPT, no built-in board yet. At the foot: build a draft with the AI, improve it together, check it before anyone sees it.](img/six-things-you-can-build.png)

Which tiles you see depends on your plan:[^anthropic-artifacts],[^claude-launch]

| Your Claude plan | What you can build |
| --- | --- |
| Free | Docs, Slides and Design |
| Any paid plan | All six. Sheets and Whiteboards are still in beta, and on Enterprise an owner turns them on |

In ChatGPT, most of these tools need a paid plan. Which plans differs from tool to tool, so each page says.[^openai-space]

One sentence holds the whole idea:

> **Pick the tool that fits the job. Make a draft with the AI. Improve it together. Check it before anyone else sees it.**

## Four habits for every kind

1. **Ask for the kind you need.** Say what you want, who it is for and what to use. The [next page](where-your-work-is-saved.md) shows how to say where the result goes. If you need an ordinary file, such as a Word file, make the artifact first, check it, and export it at the end. A file is only a copy: if you fix the artifact later, the file does not change.[^claude-code-artifacts]
2. **Improve it together.** Fix small things yourself. Ask the AI for big changes.
3. **Share it on purpose.** Only you can see a new artifact. You choose who can open it, and what they can do. Who you can share with depends on your plan, as the table below shows.[^anthropic-share]
4. **Check it before anyone else sees it.** It looks finished, but it can still be wrong. Check the numbers, the names and the facts. Remove anything private. Ask yourself: would a reader understand it without my chat?

| Your Claude plan | Who you can share with |
| --- | --- |
| Free | It may be limited, as the [Docs](docs.md) page explains. Check your Share button |
| Pro, Max and Ultra | Anyone who has the link, or people you invite by email (in beta) |
| Team and Enterprise | People in your company. Outside it only if an owner allows it |

Most artifacts shared by link open without a Claude account, but a doc needs one. Change sharing on a computer: the phone apps cannot change it.[^anthropic-share]

> [!WARNING]
> **Two people can see different data in the same artifact.** Some artifacts read your connected apps. When a colleague opens one, it reads the colleague's own apps, not yours. So each person sees only what they are allowed to see.[^anthropic-share] This protects only what an artifact reads live. Everyone who can open an artifact can read anything already copied into it, such as a number in a doc. The [Data](data.md) page explains the one exception. Also, open shared artifacts only from people you trust. A page can hide instructions that try to trick an AI, as [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) explained.

## Artifact, file, connected app or website?

An artifact, an exported file, a connected app and a website are easy to mix up, but they do different jobs. In the examples, Dave is Brightline's controller, from [One job, start to finish](../new-way-of-working/one-job.md).

| You need | Use | Brightline example |
| --- | --- | --- |
| Work you and Claude keep improving, shared by a link | An **artifact** | The payment-run doc that Dave comments on |
| A fixed copy to send, print or keep | An **exported file** | A PDF of the version of the doc that Dave reviewed |
| Claude to read or change information in another app | A **connected app** | Claude reads this week's invoices from a Google Drive folder |
| A working web page that other people use | A **website**, such as a ChatGPT Site | A page where suppliers check when they will be paid. A real one needs a sign-in, so each supplier sees only its own payments |

The PDF does not prove the approval itself. That needs its own record, such as Dave's sign-off in the payment system.

## The practice files

The next pages use five small files from Brightline. Each page links the file it needs: click the link, and the file downloads. You can also [download all five in one zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-practice-build-something.zip).

Three files come from one meeting. It is Monday, October 12, 2026. Last Friday, Brightline's managers met to review the third quarter of the year, called Q3: July, August and September. You have what the meeting left behind:

| File | What is in it | Used on |
| --- | --- | --- |
| [q3_review_notes.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/q3_review_notes.txt) | Notes typed during the meeting. Nobody has tidied them | [Docs](docs.md), [Slides](slides.md), [Design](design.md), [Whiteboard](whiteboard.md) |
| [budget_actual_q3.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/budget_actual_q3.csv) | Eight departments, month by month: the **budget** (what each planned to spend) and the **actual** (what it spent) | [Sheets](sheets.md), [Data](data.md) |
| [brand_note.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brand_note.txt) | Brightline's colors and fonts | [Design](design.md) |

Two files come from an earlier week: Brightline's payment run of Friday, September 18, 2026, which you met in [One job, start to finish](../new-way-of-working/one-job.md):

| File | What is in it | Used on |
| --- | --- | --- |
| [invoices.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/invoices.csv) | Six invoices to decide on | [Docs](docs.md), [Sheets](sheets.md), [One job, three deliverables](one-job-three-deliverables.md) |
| [payment_run_rules.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/payment_run_rules.txt) | Two notes and six rules for deciding | [Docs](docs.md), [One job, three deliverables](one-job-three-deliverables.md) |

Every name and number in the files is made up. Each task ends with the answers, so you can check Claude's work. One of the files also holds a mistake, as real files do. The Sheets and Data tasks ask you to find it.

## Build on what you already know

The parts of an AI Worker you have met still apply here: they decide what Claude can reach and when it works. A cloud job runs on a borrowed desk, and the desk is cleared when the job ends, or after a quiet spell, as [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) showed. An artifact is kept by Anthropic, outside that desk, in your Artifacts tab.[^anthropic-artifacts],[^claude-code-artifacts] So **an artifact is one way finished work leaves the borrowed desk and stays.** A downloaded file, or a file saved to Google Drive, also stays.

![Build on what you already know. On the left, five earlier parts: your folders, read by the desktop app; connected apps, such as Google Drive; a project, your rules written once; a skill, your method; a scheduled task, which decides when the job runs. An arrow leads to a dashed box in the middle, Claude does the job: a cloud job runs on a borrowed desk, a temporary computer that reads, calculates and writes, and the desk is cleared when the job ends. An arrow leads to a box on the right, the artifact stays: a doc, deck, sheet, design, dashboard or board, kept in your Artifacts tab, outside the desk. You keep it, you check it, you share it. At the foot: the earlier parts decide what Claude can reach and when it works.](img/build-on-what-you-know.png)

The pages that follow add a connected app, a folder and a skill where each fits. Some need a paid plan.

Start with [Where your work is saved](where-your-work-is-saved.md), then [Docs](docs.md). The last page puts everything together in one exercise.

[^anthropic-artifacts]: As verified on November 11, 2026. Anthropic says that on "Claude on the web and Claude Desktop" you can "create, edit, and share artifacts, and start from a template", and that on a phone you can ask for a design, deck or doc in any chat and view the result. Anthropic says artifacts need Create and edit files turned on, and in the app on November 11, 2026, the Artifacts switch said it is required for Create and edit files. On Team and Enterprise plans, an owner turns this on in the organization's settings. On Enterprise plans, Sheets and Whiteboards stay off until an owner turns them on. Some company plans also have Motion, for short animations, which this section does not cover. What are artifacts and how do I use them?, Anthropic.
[^anthropic-share]: As verified on November 17, 2026. Anthropic says that when you share by link, "Docs open only for people signed in to Claude, who can only view them," and that you cannot change sharing settings in Claude for iOS or Claude for Android. Share artifacts, Anthropic.
[^claude-launch]: Sheets and Whiteboards arrived on November 10, 2026, when the older Dashboards tool was renamed Data. Introducing Claude Whiteboards, Claude Sheets, and Claude Data, Anthropic.
[^claude-code-artifacts]: As verified on November 11, 2026, Anthropic's guide to the Code tab also says that to get a file instead of a doc, you can name the format, such as .docx. It says artifact content "is stored on Anthropic-operated infrastructure". Share session output as artifacts, Anthropic.
[^openai-space]: Getting started with Space in ChatGPT, OpenAI.


