# What happens when you send a message (/claude-and-chatgpt-2/behind-the-screen/what-happens-when-you-send-a-message)

---
type: Document
title: "What happens when you send a message"
description: "The team behind one message, step by step: the backend saves it, the harness calls the model and does the tasks on the borrowed desk, and the loop repeats until the job is done."
status: stable
order: 0.31
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "One message" ]
last_verified: 2026-11-09
sources:
  - id: harness-desk
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## What happens after you press send?

Say you ask: "Make a chart from this spreadsheet."

1. **You type the request.** The app sends it to the company's servers (the backend), which save it in your conversation.
2. **The organizer starts.** The backend hands your request to the organizer (the harness). In a Claude session the Panaversity team examined, the organizer sat at the borrowed desk itself.[^harness-desk] In other products it may sit somewhere else.
3. **The consultant thinks.** The organizer calls the model and gives it the conversation so far, sometimes with older parts summarized. The model answers with a plan, such as "open the file, then run this Python code".
4. **The organizer does the task.** It runs the code on the borrowed desk and gets the result, maybe a chart or an error.
5. **Back to the consultant.** The organizer calls the model again. The model forgot the last call, so the organizer gives it the request, the earlier steps and the new result.
6. **Repeat until done.** Steps 3 to 5 repeat until the model says the job is finished. Then you see the answer and the chart.

![Who does what behind the screen: the organizer does the work, the consultant only thinks. A row of four boxes joined by two-way arrows. You, chatting in the app or on the web. The backend, the filing cabinet that keeps the chat. The harness, the organizer that makes the calls, keeps the notes and does the tasks, shown highlighted inside a larger box labeled borrowed desk (the sandbox). The model, the consultant that thinks, then forgets, called again at every step. Below the borrowed desk, a two-way arrow labeled "does the tasks" leads to desk tools: run code and read and write files. A second arrow leads from the desk to reception, the proxy, which holds the keys and reaches your connected apps. A caption says this is a Claude cloud session as the author examined it. At the foot: the model runs on the company's AI servers, not on the desk.](img/who-does-what-behind-the-screen.png)

## Where does the model run?

The important point: **the model runs on the company's AI servers, not on the desk.** The desk is where the hands-on work happens.

> [!NOTE]
> **Word to know**
>
> - **Tool:** an action the AI can take, like running code, searching the web or reading a file. A tool on the desk.


[^harness-desk]: As verified on November 9, 2026, Anthropic says that in Cowork's cloud sessions "the agent loop and code execution run in an isolated, temporary sandbox on Anthropic-managed infrastructure". The agent loop is the harness's step-by-step work. Claude Cowork architecture overview, Anthropic.


