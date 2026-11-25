# Chapter 12. Agentic Coding: Claude Code, Codex and OpenCode (/building-ai-workers/agentic-coding/overview)

---
type: Document
title: "Chapter 12. Agentic Coding: Claude Code, Codex and OpenCode"
description: "How to direct a coding agent on a real job, wherever it runs, and check its result against work you have already done."
status: stable
order: 312
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-03T12:37:00Z
chapter: "12"
part: III
expert_status: manager
objectives:
  - { id: CCDV-F.D3.S1, label: direct }
  - { id: CCAR-F.D3.T1, label: direct }
  - { id: CCAR-F.D3.T4, label: direct }
  - { id: OAI.2.7, label: direct }
  - { id: OAI.3.9, label: direct }
word_budget: 3500
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11" ]
build_step: "The Brightline starter repository with its rules files, and one plan-then-execute task on Claude Code, then ported to Codex and OpenCode"
artifact: "brightline-ap repository with AGENTS.md, CLAUDE.md, .claude/settings.json, src/due-by-friday.ts and its tests, NOTES.md and ports/ch12.md, a branch for a second agent, tags rules and ch12"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch12.zip"
field_guides: []
delta_entries: [ "D-022" ]
concepts: [ "12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7", "12.8" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-03T12:37:00Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

In Parts I and II you managed an AI Worker. Now you build one with a **coding agent**. This chapter shows you how to work with it. You choose what it can touch, you read its plan, you split work among several agents, and you check what comes back. The same ideas work in Claude Code, Codex and OpenCode, wherever you run them, such as a desktop app, a terminal or the cloud.

Much software today is built with a coding agent. It looks like the chat box you already know, and in the desktop apps it sits one switch away from it. The chat can run code and work in your folders too. The difference is the job. A coding agent is built for software.

The agent writes the software and the tests for it. So how will you know its result is right?

## For managers

A coding agent can build a script, an app or an AI Worker for your team. You manage it the way Part II taught you to manage an AI Worker: you decide what it may touch, and you check what comes back.

Before you trust a coding agent with your team's work, ask four questions:

1. What can it reach, and can a change there be undone? It should reach only the folder the job needs, kept under git, the tool that keeps every saved version of the files.
2. What may it do without asking? Only what is easy to undo, such as changing a file under git. It should ask before deleting a folder, sending an email or making a payment.
3. Who read its plan before it acted? For anything bigger than a small fix, someone who knows the work reads the plan against the cases they know.
4. How will you know the result is right? Its own tests check only what it understood. This is the last 10 percent of [10-80-10](../../ai-worker-paradigm/the-10-80-10-operating-rhythm/one-rhythm.md). Ask it to show its working: how many items it used, and any rule it decided on its own. The first time, compare its result with work you have already done by hand.

## Why it matters

Derek runs operations for a small medical-supply distributor in Dayton, Ohio. On a Thursday afternoon he opens a coding agent for the first time and points it at his laptop's whole Documents folder. He types: "Build an app that shows my team what we owe each vendor, from the vendor spreadsheets." To save time, he turns on the setting that lets the agent run anything without asking.

The agent is good at this. It finds 14 spreadsheets across five folders, reads them and builds the app, and the app works. Then it cleans up after itself. One path in that delete command is wrong, and the vendor spreadsheets go too. Nothing asks Derek first. There is no git history in the Documents folder, so he cannot go back. He spends Friday rebuilding the files from email attachments.

Nothing in Derek's story was about intelligence. The agent was capable, and its app worked. One slip cost him a day because of how he set it up, and each of those choices is a setting or a habit that takes a minute. This chapter teaches them.


