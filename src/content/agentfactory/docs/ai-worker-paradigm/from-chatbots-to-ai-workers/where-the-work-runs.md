# 1.3 Where the work runs (/ai-worker-paradigm/from-chatbots-to-ai-workers/where-the-work-runs)

---
type: Document
title: "1.3 Where the work runs"
description: "The execution environment where AI work runs, and the three things that change because work has one."
status: stable
order: 101.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "01"
part: I
expert_status: required
concepts: [ "1.3" ]
last_verified: 2026-10-03
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

When a request becomes work, it needs somewhere to run. You met this place in [Where the work happens](../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md) as the borrowed desk. Its technical name is the **execution environment**. It has a file system, tools, a shell (a place to type commands), and limits on what it can reach.

## Where is the environment?

Products put it in three different places. It can be a temporary machine in the AI vendor's cloud, or a virtual machine (a computer made of software) on your own computer. It can also be a computer that belongs to a long-running AI Worker.

## What changes because work has one?

Three things change.

1. **Multi-step work becomes normal.** The agent can build something, check it and fix it before you see it. It can open the spreadsheet it made and confirm the totals match the invoices.
2. **Revising no longer means uploading your files again.** While the environment lasts, files from earlier steps are still there. A revision builds on them.
3. **The environment is a boundary, but only for code.** This is the locked office from [Staying safe](../../claude-and-chatgpt-2/behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md). Isolation limits where the agent's code runs and what that code can reach. It does not limit what the agent reads or does through the apps and folders you connect. [Chapter 7](../../managing-ai-workers/the-authority-envelope/overview.md) builds on this difference.

You usually operate the environment through the agent, in plain language. Some products also let you open the agent's computer and look inside.


