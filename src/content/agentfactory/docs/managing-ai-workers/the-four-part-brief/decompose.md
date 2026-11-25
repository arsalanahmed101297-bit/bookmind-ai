# 5.3 Decompose complex requests (/managing-ai-workers/the-four-part-brief/decompose)

---
type: Document
title: "5.3 Decompose complex requests"
description: "Four signs that a request is too big to do all at once, three ways to split it, where to put the stop for a person's decision, and how to brief a worker that splits the job among helpers."
status: stable
order: 205.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "05"
part: II
expert_status: required
concepts: [ "5.3" ]
last_verified: 2026-10-06
sources:
  - id: anthropic-multi-agent
    title: "How we built our multi-agent research system (Anthropic Engineering, verified 2026-10-29)"
    resource: https://www.anthropic.com/engineering/multi-agent-research-system
  - id: v1-thesis
    title: "The Agent Factory Thesis (Panaversity, first edition, verified 2026-10-06)"
    resource: https://agentfactory1.panaversity.org/docs/thesis
  - id: claude-code-subagents
    title: "Create custom subagents (Claude Code Docs, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/sub-agents
  - id: openai-subagents
    title: "Subagents (OpenAI, ChatGPT Learn, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/agent-configuration/subagents?surface=app
  - id: anthropic-what-are-projects
    title: "What are projects? (Claude Help Center, updated 30 October 2026, verified 2026-11-19)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
  - id: anthropic-claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You approve the paint color before the painter does the whole house.

Some requests are too big to do all at once. Splitting one into stages is called decomposing it. Four signs say a request needs it:

- It asks for several deliverables for different readers, such as a CSV for Maria and a memo for Dave.
- It mixes kinds of judgment, such as finding exceptions and adding up totals.
- A later part depends on a person's decision about an earlier part.
- The parts need different sources or different constraints.

Size alone can also decide it. A request may cover more items than you can check in one sitting, such as every invoice paid since January. Then split it into batches, such as one month at a time, and check each batch before the next.

The payment run shows the first three signs. Its exceptions are the cases a person must decide: the invoice that needs Dave's approval, a duplicate invoice, the Canadian-dollar invoice and the bank-detail request.

## Three ways to split it

The lightest step is a **follow-up**, your next message in the same chat. When Maria writes "Now sort them by amount, largest first", no new decision is needed, so a follow-up is enough. "Now build the run file" is not: it needs her decisions on the exceptions first, so it is a new stage. For a new stage, choose one of three:

1. **A sequence of briefs.** One brief lists the exceptions. After you decide them, a second brief builds the run file and the memo.
2. **One brief with a stop point.** "First list every exception with its policy section, then stop and wait for my decisions."
3. **Plan first.** "Before you start, give me your plan in a few lines, and wait for my OK." Use this when you are not sure how the work divides.

If you are not sure what you want at all, let the worker interview you first: "Interview me, one question at a time, until you could write this brief." Then run the brief it writes in a fresh chat.

A **checkpoint** is a place where the worker stops and waits for you. It is a planned stop, like your own checkpoint in [0.4.2](../../how-ai-works/critical-thinking/the-checkpoint.md), but here the worker makes it. Put one where a human decision changes what follows. At each stop, check the stage's result before the next stage uses it. Let nothing that cannot be undone happen before the check.[^v1-thesis] Each stage still gets an outcome, not a list of clicks, which is the difference between decomposing and micromanaging.

When stages take days, keep them in one project, a workspace where every new conversation starts with the project's files, instructions and memory.[^anthropic-what-are-projects] Claude chooses what to note in memory, so do not count on it to carry a checked result.[^anthropic-claude-projects] Add the checked result to the project's files, and the next stage starts from it.

![Under the title The payment run in two stages, four boxes in a row, joined by arrows. Stage 1, the AI Worker: identify exceptions, list each one, cite the policy or flag a gap, then stop and wait. The human checkpoint, in red: Maria reviews, confirms holds and next steps, and escalates the decisions reserved for Dave. Stage 2, the AI Worker: build the proposal CSV and the memo for Dave, using the policy and the recorded decisions. Final approval, in gold: on Thursday, Dave approves the whole run and records the invoice approvals it needs. Below, what Stage 1 must surface. Approval needed: Midwest 4519 for $6,480 needs Dave's approval under section 4. Duplicate copy: hold the second copy of Buckeye BO-22871, under section 6. Bank-change request: hold both Tri-County invoices, 5149 and 5161, and verify by callback, under section 5. Policy gap: Northern Maple NMP-3390 is in Canadian dollars, so refer it to Dave and do not convert it. A footer reads: the worker prepares, people decide and approve. This task proposes payments, it does not execute them.](img/two-stages.png)

*Figure 5.4. The payment run in two stages. Stage 1 lists the exceptions and stops. Stage 2 builds from Maria's decisions, and Dave approves the run on Thursday, October 22.*

## When the worker splits the job

A worker can split a job too. It hands parts to helpers, called **subagents**: second workers it starts for one part each. It then combines what they send back.

Splitting helps when the parts do not depend on each other, such as the same check on each vendor's invoices. It hurts when each step needs the one before it, or the job is small. Some checks need every part at once: the total, the duplicate check and the exceptions list. A duplicate can land in two parts, and neither helper sees both copies, so those checks run on all the rows together.

Most helpers see only the part they were given, not your conversation. A few get a copy of the whole conversation, and you usually cannot tell which kind ran.[^claude-code-subagents] So put every rule in the brief itself, not in an earlier message, with the governed source named by its version. When the worker may split, add two lines. In the format: every part returns rows in the same columns, and the worker lists every invoice number it received and where each went. In the constraints: every limit holds for every helper.[^anthropic-multi-agent] Splitting often uses more of your plan, even when it finishes sooner.[^openai-subagents]

A split does not move a checkpoint: the stop after the exceptions list still waits for Maria. When the work comes back, check the combined result, not the worker's account of how it got there. Count the inputs against what came back, and test a few rows against the governed source.

[^anthropic-multi-agent]: How we built our multi-agent research system, Anthropic Engineering.
[^v1-thesis]: The Agent Factory Thesis, Panaversity, first edition.
[^claude-code-subagents]: Create custom subagents, Claude Code Docs.
[^openai-subagents]: Subagents, ChatGPT Learn, OpenAI.
[^anthropic-what-are-projects]: What are projects?, Claude Help Center.
[^anthropic-claude-projects]: Let Claude coordinate ongoing work with Projects, Claude Code Docs.


