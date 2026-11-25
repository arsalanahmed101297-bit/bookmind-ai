# The Architecture (/claude-and-chatgpt-2/architecture/overview)

---
type: Document
title: "The Architecture"
description: "The technical edition of Claude and ChatGPT 2.0. It shows what was seen inside a real Claude session, what each vendor documents, why both chose the same design, and what a business must add. Optional reading."
status: stable
order: 0.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00A"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "The architecture", "Request flow", "Why the same design", "Sandbox and state", "Cloud environments", "Scheduled tasks", "Projects", "Where to run work", "Security boundaries", "Worked example", "ChatGPT and Codex", "AI Worker platforms", "Business worker", "What comes next" ]
last_verified: 2026-11-09
review_by: 2026-12-09
sources:
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
  - id: chatgpt-inspection
    title: "ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity"
    resource: "Reported to Panaversity by ChatGPT, November 9, 2026"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product feature and its source"
    resource: "../tour/overview.md"
  - id: security-guide
    title: "Unified Claude Security Best Practices, v1.3.6 (Anthropic, November 7, 2026; verified 2026-11-16)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
  - id: cowork-safely
    title: "Use Claude Cowork safely (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13364135-use-cowork-safely
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*How the new apps work behind the screen, with the evidence*

## Where this section fits

This is the fifth section of Claude and ChatGPT 2.0: the technical edition. It is optional. Read it for the evidence and the engineering, or come back when you build AI Workers for a business.

The whole section makes one point. The AI works on a borrowed computer that gets cleared. So anything that matters, such as the record and the "yes" to a payment, must live outside that computer, in systems you control. [Behind the Screen](../behind-the-screen/overview.md) taught this in plain words. This section adds the evidence: what was observed in a real Claude session, what each vendor documents, why both chose the same design, and what a business must add. It does not repeat the Tour's feature lists.

> [!NOTE]
> For builders: the rest of this page is detail you can skip on a first reading. Come back to it for the evidence labels and the word list.

## How to read the evidence labels

Each claim in this section carries a label in square brackets. The label says how we know it.

- **Observed:** seen directly in the Claude session examined: command output, running programs, the environment and behavior.
- **Reported by ChatGPT:** results that ChatGPT reported from commands it ran in its own tools, at our request. Nobody else has reviewed the raw output.
- **Tool-documented:** stated in the descriptions of the tools available inside the session, but not seen in action.
- **Vendor-documented:** stated in Anthropic's or OpenAI's public documentation, with the source in a footnote.
- **Inferred:** our conclusion from the observations and documents. The vendor does not state it.
- **Unknown:** not visible from inside a session, and not documented.

Products change often, and features differ by plan. Each fact carries the date it was checked, in its footnote. If your app looks different, trust the vendor's help page. The architecture still holds.

## What the architecture is

A **session** is one running conversation or task. In the desktop app or on the web, a Claude session runs in the cloud by default. Some run on your own computer instead, depending on the product and the plan. [Appendix: runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md#where-sessions-run) lists which.

In a cloud session, a request passes through four parts, in this order. This section calls them its **four layers**.

1. **The UI:** the app or web page you type into.
2. **The backend:** Anthropic's servers behind the app.
3. **The harness:** the organizer of [Behind the Screen](../behind-the-screen/overview.md), the program that calls the model, runs its tools and keeps the notes.
4. **The model:** it runs on Anthropic's **inference servers**, the computers that run the model.

Later in the book, [Chapter 4](../../ai-worker-paradigm/the-architecture-in-one-picture/five-layers.md) draws a fuller picture of a whole AI Worker. You do not need it to read this section.

## What was seen, and what is documented

The firsthand observations come from one cloud Claude session that the Panaversity team inspected on November 8 and 9, 2026. The [appendix](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md) gives the method.[^author-inspection] ChatGPT also reported an inspection of its own code environment. It did not show ChatGPT's harness or inference.[^chatgpt-inspection] The rest of the OpenAI side rests on OpenAI's documentation.

Each cloud session gets a small virtual machine (VM) of its own, a complete computer simulated in software, which is removed when the session ends.[^cowork-safely],[^security-guide] **[Observed]** In the session examined, the harness was Claude Code. **[Inferred]** The model does not run inside the VM. Each page gives its own evidence.

## How this section is organized

The first half shows how the runtime works, with Claude as the observed example. The second half, from [Are Claude and ChatGPT now AI Worker platforms?](are-claude-and-chatgpt-now-ai-worker-platforms.md), shows what a business must add. Three appendices hold the detail: the [reproduction steps](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md), the [business-layer details](../../appendices/claude-and-chatgpt-2/appendix-business-layer-details.md) and the [runtime details](../../appendices/claude-and-chatgpt-2/appendix-runtime-details.md).

## Words used in this section

The model, the harness and the sandbox are the consultant, the organizer and the borrowed desk of [Behind the Screen](../behind-the-screen/overview.md). Here they get their technical meaning, with the words that are new. Later pages use these words without explaining them again.

- **Model:** the stateless inference service that reads a context and returns text or a tool call. A *tool call* is the model's request to use a tool, such as running a command. *Stateless* means it keeps nothing from one call to the next. *Inference* means running the model to produce an answer. *Context* is everything the model reads in one call.
- **Harness:** the agent loop around the model. It builds the context, runs tools and tracks progress. Claude Code and Codex are harnesses. It can run inside the sandbox, as observed here, or apart from it.
- **Sandbox:** the isolated place where tool calls run, the borrowed desk. It can be a cloud VM or a container. It can also be a limited space on your own computer.
- **Container:** an isolated space, lighter than a VM. It shares the operating system of the computer it runs on.
- **Cloud session:** a chat or task whose work runs on Anthropic's computers, not on yours.
- **Snapshot:** a saved copy of a VM's disk at one moment. A new VM can start from it.
- **Runtime:** the harness, sold with the sandbox it works in. For Claude, four products are runtimes: the Claude app; Claude Tag, which is Claude in your team's Slack; Managed Agents, where Anthropic runs the harness for a program your company writes; and the Agent SDK, a kit for running the harness on your own computers. For OpenAI, the runtimes are ChatGPT Work and Codex.
- **Worker identity:** the account or app identity a worker acts under. It is separate from the people who sponsor or approve the worker.
- **Business layer:** what an organization adds around the runtime: identity, durable records, enforced authority and audit.

[^author-inspection]: The observations come from one cloud Claude chat session on November 8 and 9, 2026, and may not hold for every plan, account or app. The commands and their limits are in the appendix.
[^chatgpt-inspection]: At our request, ChatGPT ran commands in its own Python and terminal tools, in a separate ChatGPT conversation, and reported the results. The raw output was not independently reviewed.
[^security-guide]: As verified on November 16, 2026. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators.
[^cowork-safely]: As verified on November 20, 2026, Anthropic says "Each session gets its own environment, which is removed when the session ends." Use Claude Cowork safely, Anthropic.


