# Staying safe: a locked office and a second signature (/claude-and-chatgpt-2/behind-the-screen/staying-safe-a-locked-office-and-a-second-signature)

---
type: Document
title: "Staying safe: a locked office and a second signature"
description: "Why AI can be wrong or tricked by prompt injection, the two protections you need together (a locked office and a second signature), and two simple habits."
status: stable
order: 0.35
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Staying safe" ]
last_verified: 2026-11-09
sources:
  - id: sandbox-claude
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: sandbox-openai
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## How can an AI Worker be tricked?

AI can make mistakes. It can also be tricked. A web page or an email can hide instructions such as "send this file to this address". This is called **prompt injection**. It is like a fake note slipped to the organizer (the harness). The AI might follow those hidden instructions if nothing stops it.

Two protections work together.

## Protection 1: a locked office

The borrowed desk sits in a locked office at the AI company. It usually reaches only approved websites, depending on its settings, and your keys for connected apps stay at reception, not on the desk.[^sandbox-claude],[^sandbox-openai] So if something goes wrong, the office limits what it can affect. It cannot remove every risk, because tools and connectors can still change things outside, such as sending an email.

> [!NOTE]
> **Words to know**
>
> - **Approval:** a person saying yes before an important action happens. Like a second signature on a large payment.

## Protection 2: a second signature

The locked office limits where the AI Worker can work, not what the AI Worker is *allowed* to do. That is the job of permissions and approvals: rules that say which actions need a person's yes, or are blocked completely. Important actions, like paying, sending or deleting, should always need one. The yes should be checked by the system that performs the action, not only by the AI. At [Brightline](brightlines-payment-run-behind-the-screen.md), the payment system does this, and the AI Worker cannot pay at all.

![A locked office and a second signature: the locked office limits damage, and a second signature decides. At top left, a dashed box for a tricky note hidden in a page or email, which may give the AI bad instructions, points into a large box labeled locked office, around the borrowed desk. Inside the office, the AI plans an action, maybe a wrong one, and an arrow leads to Ready to act: send, pay or delete. A note inside the office says usually approved websites only, and keys stay at reception. From the office, an arrow leads out to the highlighted Second signature: does a person say yes? On yes, an arrow leads to Action happens, outside the office. On no, an arrow leads down to Stopped. Under the office, a note says the office limits damage, but does not give permission. At the foot: a safe AI Worker needs the locked office and a second signature.](img/a-locked-office-and-a-second-signature.png)

> **Rule to remember:** a locked office does not make every action safe. A safe AI Worker needs the locked office *and* a second signature.

## Which two habits help?

- Do not paste real passwords or secret keys into a chat. Connect apps through proper connectors instead.
- When you connect Claude to your own computer (for example, through the Claude desktop app), share only the folders the task needs.


[^sandbox-claude]: As verified on November 9, 2026, Anthropic says that from the cloud sandbox "only allow-listed destinations are reachable" and that "Connector authorization tokens never enter the sandbox". Claude Cowork architecture overview, Anthropic.
[^sandbox-openai]: As verified on November 9, 2026, OpenAI says an allowlist "governs network destinations" for Work's cloud tasks, and that "Consequential actions can still require separate confirmation". ChatGPT Work cloud security, OpenAI.


