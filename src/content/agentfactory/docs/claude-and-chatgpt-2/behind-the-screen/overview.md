# Behind the Screen (/claude-and-chatgpt-2/behind-the-screen/overview)

---
type: Document
title: "Behind the Screen"
description: "Who does what when an AI Worker works, why the borrowed desk is cleared, and why permissions, not words, keep a job safe. Starts with the big idea: a small team works behind the chat window."
status: stable
order: 0.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "The big idea", "One message", "The borrowed desk", "Scheduled tasks", "The payment run", "Staying safe", "Projects", "Setting up the desk", "The same idea", "Helper to AI Worker" ]
last_verified: 2026-11-09
review_by: 2026-12-09
sources:
  - id: claude-and-chatgpt-2
    title: "The New Way of Working, the first section, for AI Workers, the borrowed desk, Brightline's payment run and the four rules"
    resource: "../new-way-of-working/overview.md"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product detail and its source"
    resource: "../tour/overview.md"
  - id: connectors
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: codex
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: claude-code-harness
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Who does what when an AI Worker works*

This section looks behind the screen. It explains why the borrowed desk is cleared, and why permissions, not words, keep a job safe. [The Architecture](../architecture/overview.md) gives the full evidence and detail.

## Start here: the big idea

When you hand Claude or ChatGPT a whole job, like Brightline's payment run, more than one thing is working for you. A small team works behind the chat window. Each member has one job. This picture describes long, hands-on work. Regular chat may work differently, as [Claude and ChatGPT: the same idea](claude-and-chatgpt-the-same-idea.md) explains.

- **The model is a brilliant consultant with no memory.** You reach the consultant by phone. They give excellent answers, but forget everything after each call, so someone must brief them every time.
- **The harness is the organizer.** It is the program that runs the AI step by step: it calls the consultant, keeps the notes, and does the tasks the consultant asks for. You will meet two harnesses: Claude Code, Anthropic's program for long, hands-on work,[^claude-code-harness] and Codex, OpenAI's program of the same kind.[^codex]
- **The sandbox is the borrowed desk** you met in [Where the work happens](../new-way-of-working/where-the-work-happens.md): a separate, isolated computer, usually a virtual machine on the company's servers. The organizer does the hands-on work there, and the desk is cleared when you stop for a while. Some AI work runs on your own computer instead.
- **The backend is your account's filing cabinet.** The company's servers keep a copy of your conversation, so you can come back tomorrow, on another device, and continue.
- **Connectors are keys held at reception.** They let the team use your other apps, like email or a calendar. The team asks reception for a key each time, so your password is never handed over.[^connectors]

One sentence holds the whole idea:

> **The model is a smart helper that forgets everything between calls. The harness keeps the notes for the job and sees it through to the end.**


[^connectors]: As verified on November 9, 2026, Anthropic says "Connector authorization tokens never enter the sandbox" and that "connector calls are made on the server side". Claude Cowork architecture overview, Anthropic.
[^claude-code-harness]: As verified on November 9, 2026, Anthropic describes a cloud session as "Claude Code running in the cloud rather than on your machine". Let Claude coordinate ongoing work with Projects, Anthropic.
[^codex]: As verified on November 9, 2026, OpenAI says "Work Cloud uses the Codex task-execution harness". ChatGPT Work cloud security, OpenAI.


