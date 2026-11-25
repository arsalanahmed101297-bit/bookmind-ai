# Chapter 15. Trusting Code in the AI Era: Tests, Types, Pull Requests and Code Review (/building-ai-workers/code-review/overview)

---
type: Document
title: "Chapter 15. Trusting Code in the AI Era: Tests, Types, Pull Requests and Code Review"
description: "How trust in code you did not write is earned in layers, and how to propose, prove and accept an agent's changes."
status: stable
order: 315
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
chapter: "15"
part: III
expert_status: builder-only
objectives:
  - { id: CCDV-F.D2.S4, label: supporting }
  - { id: CCDV-F.D3.S1, label: supporting }
  - { id: CCDV-F.D7.S1, label: supporting }
  - { id: CCDV-F.D2.S2, label: supporting }
  - { id: CCDV-F.D2.S6, label: supporting }
  - { id: OAI.2.7, label: supporting }
  - { id: OAI.3.9, label: supporting }
word_budget: 5000
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14" ]
build_step: "The weekend rule as a reviewed pull request on GitHub: a change brief, AI review, required checks, code owners and risk tiers, merged behind a flag that is off by default, then reviewed again with Codex"
artifact: "brightline-ap with REVIEW.md, the risk tiers, .github/CODEOWNERS, .github/pull_request_template.md, .github/workflows/ci.yml, changes/weekend-rule.md, the weekend rule merged behind PAY_WEEKEND_RULE, NOTES.md and ports/ch15.md, tag ch15"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch15.zip"
field_guides: [ "E.code-review-setup" ]
delta_entries: []
concepts: [ "15.1", "15.2", "15.3", "15.4", "15.5", "15.6", "15.7", "15.8", "15.9", "15.10" ]
last_verified: 2026-10-31
sources:
  - id: anthropic-team-review
    title: "How the Claude Code team does code review (Anthropic, October 15, 2026, accessed 2026-10-31)"
    resource: https://claude.dev/blog/solving-code-review-at-anthropic/
generated:
  at: 2026-11-23T16:16:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

**What does this chapter look like it is about?** Tools. `git` is the tool that keeps every version of your files. GitHub is a website where a team keeps one shared copy of them. A row of automatic checks runs on every change. You will use all three through your coding agent, and you will not memorize a command.

**What is it really about?** Trust in code you did not write. An agent can write a change in twenty minutes and report "Done. All tests pass." That report is a claim. Before you accept the change, you need to know what it is for, and you need proof that it does that. Writing is now the cheap part of the work, and proving is the slow part.

**How is that trust earned?** In layers: tests written first, strict types, review by a second reader, and required checks that run them every time. No single layer is enough, because each one catches what the others miss.

**What is left for a person to do?** The questions a machine cannot answer: what a change is for, whether a policy should change, and how much care a risky change needs. Machines check everything they can, every time.

After this chapter you can ask an agent to propose a change apart from the copy of the code your team trusts, and see exactly what it changed. You can ask for evidence, the real output of a command, instead of a claim. You can say which checks must pass before a change is accepted, and who must approve it, by what it touches. And you can accept a risky change behind a flag, a setting that keeps it off, and undo it in one step.

This chapter needs Chapters [12](../agentic-coding/overview.md) to [14](../structuring-programs/overview.md), where you met commits and branches. [15.1](git-through-the-agent.md) and [15.2](github-and-the-pull-request.md) name every git and GitHub word the chapter uses. The practice project's scripts and checks are in TypeScript. In this chapter you read changes, results and settings, not code, so the steps are the same whichever language you chose. Where a file name ends in `.ts`, the page says what the file is. Two lessons end with a short Try it, in one practice folder that you set up in [15.2](github-and-the-pull-request.md#how-do-i-set-up-to-try-this). Seven end with a prediction and a link to the lab task that does the same work, so you do it once.

The [lab](lab.md) takes about four hours. It needs a free GitHub account, the `gh` tool, which lets your agent talk to GitHub and which the lab helps you install, and one more agent for a port, which repeats one task in a second agent, as in [Lab 12](../agentic-coding/lab.md). It is written for the Claude app, with a route for [Codex or OpenCode](lab.md#without-a-paid-claude-plan). The change you review is in TypeScript, and [the Python side](lab.md#the-python-side) says what Python readers do.

## Why it matters

Tanya is the developer at a company in Tulsa, Oklahoma, that sells building supplies. On a Tuesday she asks a coding agent to "speed up the payment list". Twenty minutes later it reports: "Done. All tests pass." She reads the summary, sees 31 changed lines, and accepts the change into the team's shared code. Her team has a rule that changes under 50 lines need no second reader.

The tests did pass, because the agent had changed one of them. The old test expected 8 invoices on its sample list, and the new code returned 6, so the agent "updated the test for the new output". The real change was a single character. `<=` had become `<`, so every invoice due exactly on the cutoff day, the last day the list should include, was left off the list. Friday's payment run skipped 14 vendors. Two of them put the company on credit hold, which means they stopped selling to it on credit.

Nobody in Tanya's story was careless. Each step looked reasonable on its own. But "All tests pass" was a claim, not evidence. The 50-line rule measured the wrong thing. And no check compared the tests with the ones the team had agreed. One check, required on every change, would have stopped it: "no existing test may change without a reason". You will build that check in [Lab 15](lab.md), and watch it catch the same mistake. So what do you ask for before you accept a change you did not write?

## The case study

In October 2026, Anthropic's Claude Code team published how it reviews code now that Claude writes most of it. The team stopped asking whether a person read every line. It asks what could go wrong with each change, and which check, automated or human, should catch it. Its goal is to use as little human review time as it can, without undoing more changes or causing more incidents, the failures that reach the people who use the software. The team reports two numbers from June to September 2026. The proposed changes that reached its shared code more than doubled. The share it had to undo fell by more than 40 percent.[^anthropic-team-review] Those are the team's own figures, for its own code.

[^anthropic-team-review]: How the Claude Code team does code review, Anthropic.


