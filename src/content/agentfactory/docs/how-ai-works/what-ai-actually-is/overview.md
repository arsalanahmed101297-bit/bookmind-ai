# Chapter 0.1. What AI Actually Is (/how-ai-works/what-ai-actually-is/overview)

---
type: Document
title: "Chapter 0.1. What AI Actually Is"
description: "What a model works from when it answers you: what it learned in training and the context window built for each reply, and why that explains memory, sure-sounding guesses, tokens and tools."
status: stable
order: 11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.1"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
objectives:
  - { id: CCAO-F.D2.O2, label: supporting } # Hallucination detection and verification. Primary: Chapter 6. Here: ideas 3 and 6
  - { id: CCAO-F.D3.O2, label: supporting } # Model and effort selection. Primary: Chapter 2. Here: 0.1.4
  - { id: CCAO-F.D3.O3, label: supporting } # Context and memory management. Primary: Chapter 8. Here: idea 5 shows the limit, not the four moves
  - { id: OAI.1.2, label: supporting } # Choose a model and reasoning effort. Primary: Chapter 2. Here: idea 9 and 0.1.4
  - { id: CCDV-F.D5.S1, label: supporting } # LLM fundamentals and model options. Introduced here, primary Chapter 29. Here: ideas 1, 2 and 4
word_budget: 4000
prerequisites: [ "F2" ]
artifact: "AI field notes: a table of what each test showed, and where each answer came from"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch0-1.zip"
delta_entries: [] # D-001 and D-004 are planned. Their notes are proposed in the README, not approved
concepts: [ "0.1.1", "0.1.2", "0.1.3", "0.1.4" ]
last_verified: 2026-10-16
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

When you ask an AI chat a question, where does its answer come from, and can you trust it?

Ask it a question, and a tidy, sure answer comes back. Open yesterday's chat, and it carries on where you left off. Neither is quite what it seems. Every answer comes from two places: what the model learned in training, and the text the app puts in front of it for this one reply, called the context window.

[Behind the Screen](../../claude-and-chatgpt-2/behind-the-screen/overview.md) called the model a consultant with no memory. This chapter shows why it forgets, and what remembers instead.

After this chapter you can look at any answer and say which of the two it came from. You can explain why a new chat forgets you, and what really remembers you when a chat seems to. You can say why a sure answer can still be a guess, and why the check is yours, not the AI's. And you can see how the same model, given tools, carries out work in steps. That is where Part I begins.

## Why it matters

On Monday you ask an AI chat about Brightline Wholesale Supply, the book's example company. Does a $7,800 invoice from Midwest Packaging need the controller's approval? The answer comes back at once, calm and sure. Approval is needed only for invoices over $10,000, it says, so this one can be paid. It is wrong. Brightline's accounts payable policy, version 3, approved on September 1 by Dave, the controller, sets the limit at $5,000. If you had trusted the answer, the invoice would have been paid without Dave's approval. The AI had never seen that policy. It gave the limit that sounds right, and nothing inside it checked.

So you attach the policy and ask again. This time the answer is right, and it quotes the policy's line. On Tuesday you open a new chat and ask once more. The answer is back to $10,000. The AI did not forget the policy overnight, because it never learned it. Monday's chat had the policy in front of it. Tuesday's new chat did not.

Maria, Brightline's office manager in the [Preface](../../preface.md), lost $4,850 in the same way. Each new chat saw only its own batch of invoices, so nothing compared the two batches, and one invoice was paid twice.

Neither mistake was about how clever the AI was. Both came from not knowing what it was working from. This chapter teaches you to ask that of every answer: did it come from training, or from the context window?


