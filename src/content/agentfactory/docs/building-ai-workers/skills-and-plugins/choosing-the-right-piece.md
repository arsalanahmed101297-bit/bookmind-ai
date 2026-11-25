# 16.2 Choosing the right piece (/building-ai-workers/skills-and-plugins/choosing-the-right-piece)

---
type: Document
title: "16.2 Choosing the right piece"
description: "What belongs in a skill and what does not: the steps go in the skill, every number in tested code, and every never that must hold in a setting."
status: stable
order: 316.02
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:28Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.2" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-21T00:02:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A kitchen has a recipe card, a kitchen scale and a lock on the cabinet that holds the cleaning chemicals. The card says what to do. The scale gives the same weight every time. The lock works even when nobody reads the card. You would not write "do not open the chemicals cabinet" on a recipe card and call it locked.

**What you will learn.** What belongs in a skill, and what belongs somewhere else: in code, in a setting, or in a piece you will build in a later chapter.

**Why it matters.** A skill is words, and an agent usually follows words. For a number or a "never", usually is not enough.

### What belongs in a skill?

The steps of a job, where judgment is needed: what to do, in what order, what to report, and who gets the result. Two things do not belong in its words.

| This part of the job | Goes in | Because |
| --- | --- | --- |
| The steps, the order, the report | A **skill** | The agent needs guidance, and words give it |
| A number that must be exact | **Tested code** that the skill runs | Code gives the same answer every time |
| A "never" that must always hold | A **setting** in your tool | A setting works even when instructions are ignored |

### Where do calculations go?

Into tested code, never into a skill's words. This is the rule from [Chapter 13](../programming-fundamentals/functions.md). A skill that says "add up the amounts" asks the model to do arithmetic. A skill that says "run the triage script and copy its totals" does not. So most good skills have a script beside them. The skill says when to run it and how to report what it printed.

### What is the difference between a skill and a setting?

A skill guides. A setting enforces. "Never edit the AP export" in a skill's steps is a request. A permission **setting** that denies edits to `data/` is a lock. If a "never" must hold every time, set the lock, and write the line in the skill as well, so the agent knows why.

### What about the other pieces?

You build three more pieces in later chapters. For now, know what each is for.

| Piece | What it is | Use it for |
| --- | --- | --- |
| **Connector** | A link that gives the agent data and tools from another system | An accounting system, a database, a shared drive |
| **Subagent** | A helper agent with its own context that reports back | Side work whose reading would crowd the session |
| **Hook** | Code your tool runs before or after an action, which can block it | An approval gate |

[Chapter 17](../connectors-and-mcp/overview.md) builds a connector, and Chapter 28 builds a hook. [Chapter 20](../mcp-apps/overview.md) gives a connector its own screens inside the chat, called an MCP App.

And if the agent can already do the job well with the tools it has, such as reading a file, it needs no new piece at all.

### How do I choose?

Ask these questions in order, and stop at the first yes. If a job has parts, ask for each part.

1. Must it never happen? A setting or a hook.
2. Is the data in another system? A connector.
3. Must a number be calculated exactly? Your own tested code.
4. Is it side work that would crowd the session? A subagent.
5. Can the agent already do it well? A built-in tool, so nothing new.
6. None of these? A skill.

![A decision ladder of six questions, asked in order. Must it never happen? Then a hook or setting. Is the data in another system? Then a connector. Must a number be calculated exactly? Then your own tested code. Is it side work that would crowd the session? Then a subagent. Can the agent already do it well? Then a built-in tool. Otherwise, it is a procedure with judgment: a skill.](img/choosing-the-piece.png)

*Figure 16.4. Choosing the piece. Reading a long contract is side work, so it goes to a subagent, even though the agent could read it in the main session.*

**At work.** Ana and the builder place six AP jobs:

| Job | Piece | Why |
| --- | --- | --- |
| Read the weekly invoice export | Nothing new | The agent can already read a file |
| Compute due dates | Tested code: `src/due-date.ts` | A number people act on |
| Sort invoices into piles and report | A skill, which runs a script | Steps and a report shape, with the sorting in code |
| Look up a vendor in the accounting system | A connector | Another system |
| Never edit `data/` | A setting | It must hold even if instructions are ignored |
| Pause before scheduling a payment | A hook | An approval gate |

### Try it

**Predict.** On paper, place each job below as one piece, with one reason. Ask the six questions in order.

- Read the files in `docs/` to answer a question about how the team works.
- Add up the open invoices for one vendor.
- Write the weekly note to the controller, in the shape the controller wants.
- Find a contract in the company's shared drive.
- Never print a bank account number.
- Read a 300-page contract to answer one question.

**Check.** In `practice-16`, send: "Here are my six placements. For each one, say whether you would place it differently, and why. Don't change anything." Then paste your list.

**What you should see.** In order: nothing new, tested code, a skill, a connector, a setting or hook, and a subagent. If you and the agent disagree on one, ask which of the six questions it answered differently.

**The operating rule:** put the steps in a skill, every number in tested code, and every "never" that must hold in a setting.


