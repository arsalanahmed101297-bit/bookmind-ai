# Chapter 16. Building Skills and Plugins with Coding Agents (/building-ai-workers/skills-and-plugins/overview)

---
type: Document
title: "Chapter 16. Building Skills and Plugins with Coding Agents"
description: "Package professional work as skills, written with the person who owns the rules, and ship them as an installable plugin. Taught through the open standards for skills, plugins and telemetry, then built with Claude Code and ported with Codex and OpenCode to six places where people use AI."
status: stable
order: 316
chapter: "16"
part: III
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-24T03:57:30Z
expert_status: co-build
objectives:
  - { id: CCDV-F.D8.S3, label: direct }
  - { id: CCAR-F.D3.T2, label: direct }
  - { id: OAI.3.5, label: direct }
  - { id: OAI.3.6, label: direct }
  - { id: CCDV-F.D2.S5, label: supporting }
  - { id: CCDV-F.D2.S6, label: supporting }
  - { id: CCAR-F.D2.T4, label: supporting }
  - { id: CCAR-P.D2.T5, label: supporting }
word_budget: 4000
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15" ]
build_step: "The Brightline AP plugin v0.1.0: an invoice-triage skill co-authored with the AP lead, a Monday report started by name, the due-by-Friday skill, and a pinned, read-only data connector, built with Claude Code and merged as a reviewed pull request, then packaged for OpenAI with Codex and for OpenCode with OpenCode, and used in six places"
artifact: "brightline-ap with plugin/ (three skills, plugin.json, mcp.json, .claude-plugin/plugin.json, .mcp.json, CHANGELOG.md), src/triage.ts and its tests, py/brightline_ap/triage.py, the catalogs .claude-plugin/marketplace.json and .agents/plugins/marketplace.json, .codex/config.toml, opencode.jsonc, the plugin-valid check, NOTES.md and ports/ch16.md, tag ch16"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch16.zip"
field_guides: []
delta_entries: [ "D-022" ]
concepts: [ "16.1", "16.2", "16.3", "16.4", "16.5", "16.6", "16.7", "16.8", "16.9", "16.10" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-24T03:57:30Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

In the last four chapters you worked on code with a coding agent. But much of what a team knows is not in its code. It is in how the team does its work.

Take Brightline's accounts payable (AP) team, the people who pay the company's bills. Ana Morales, the AP analyst, knows which checks to run on every new invoice, and that any invoice over $5,000 needs the controller's approval. None of this is written where an AI tool can find it. Some is in Ana's head. Some is in a policy file nobody opens. The rest is in prompts that each person wrote for themselves, each a little different, and one of them out of date.

This chapter fixes that in two steps.

1. You write the job down once, as a **skill**: a short set of instructions, in a folder, that an AI tool reads when it has that job to do.
2. You package the team's skills as a **plugin**: one bundle with a version number that everyone installs, so everyone's AI follows the same instructions.

You will not type these files. Your coding agent writes them, and your part is the part an agent cannot do: deciding what the job is, who owns its rules, and whether the result is right.

![Where a team's know-how lives, and where this chapter puts it. On the left, three dashed boxes for today: in people's heads, in a policy file nobody opens, and in private prompts, each a little different. Arrows lead to the middle: one skill, written with the person who owns the rules, with every number from tested code below it. An arrow leads right to one versioned plugin the whole team installs, which reaches three AI tools, labeled any tool that follows the open standards.](img/know-how.png)

*Figure 16.1. From know-how scattered in heads and private prompts, to one skill written with its owner, to one plugin the whole team installs.*

## The point

**Write once how your team does a job, as a skill, with the person who owns its rules. Keep every number in tested code. Then release it as a versioned plugin.**

After this chapter you can:

- **Turn work you keep explaining into a skill** your agent loads only when it has that work to do ([16.1](from-a-prompt-to-a-skill.md)).
- **Decide what goes in the skill** and what goes in code or a setting ([16.2](choosing-the-right-piece.md)).
- **Build a skill with the person who knows the work**, test it against no skill at all, and fix it when it is wrong ([16.3](writing-a-skill-with-the-expert.md)).
- **Choose who starts each skill**, you or the agent ([16.4](commands-and-who-may-start-them.md)).
- **Package skills as a plugin** and release it with a version ([16.5](what-a-plugin-bundles.md), [16.6](shipping-a-version.md)).
- **Use one skill in more than one AI tool** ([16.7](one-skill-three-bundles.md)).
- **See what a plugin did when it ran**, and know what that record cannot prove ([16.8](watching-it-run.md)).
- **Decide whether to trust someone else's plugin** before you install it ([16.9](installing-is-a-trust-decision.md)).

## How this chapter works

Each lesson teaches one idea and ends with a **Try it**, where your agent does the work and you predict and check the result. All of them use one small practice folder, set up in [16.1](from-a-prompt-to-a-skill.md#try-it), and each one builds on the one before. [16.10](both-ai-vendors.md) is not a lesson. It is the reference for the steps that differ in Claude Code, Codex and OpenCode, and a Try it links to it when you need one.

The [lab](lab.md) comes after the lessons. There you build Brightline's real plugin, the one every later chapter of Part III adds to. Chapters 17 to 20 grow it into a product. [Chapter 17](../connectors-and-mcp/overview.md) adds a connector of Brightline's own, [Chapter 18](../securing-connectors/overview.md) adds sign-in, and [Chapter 19](../business-data-and-retrieval/overview.md) adds a database. [Chapter 20](../mcp-apps/overview.md) gives the connector its own screens and serves these skills from it.

This is a **co-build** chapter: a domain expert, who knows the work, gives a skill its rules, and a **builder** makes and packages it. If you are the expert, read this page, [16.1](from-a-prompt-to-a-skill.md) to [16.6](shipping-a-version.md) and [16.9](installing-is-a-trust-decision.md). If you are the builder, read everything and do the lab.

## Why it matters

Grace runs month-end close, the work of finishing a month's accounts, at a 30-person accounting firm in Madison, Wisconsin. Over two years, the firm's staff each saved their own copy of a "month-end close" prompt in a notes app. The prompts looked alike, so nobody compared them. One copy was six months old. It still said partners approve payments "over $20,000", from before the firm cut the limit to $10,000.

In March a new hire used that copy. The AI did what it said. A $14,000 invoice was paid without a partner's approval. A criminal had changed that vendor's bank details the week before. The bank recovered part of the money. The firm's insurance company asked one question the partners could not answer: which version of the procedure was the new hire told to use?

Nobody in Grace's story was careless. Three things failed, and each needs its own fix.

- The procedure was kept in a dozen private copies, and nothing said which one was current. Copies like these **drift**, which means they slowly stop matching. One shared, versioned skill fixes that.
- The limit was a word in a paragraph. Kept in tested code, a test proves it, and one reviewed change moves it.
- Nothing stopped the payment itself. No instruction can do that, however current it is. Only a control where the money moves can.

This chapter builds the first two fixes. Chapter 28 builds the third.

![Three failures, three different fixes. Three rows, each reading left to right. First row: a dozen private copies, and no way to tell which is current, fixed by one shared, versioned skill, built in this chapter. Second row: the approval limit was a word in a sentence, fixed by the limit in tested code, with a test that proves it, built in this chapter. Third row: nothing stopped the payment itself, or the changed bank details, fixed by a control where the money moves that checks who asks, the limit and the approval, built later in the book. A line at the bottom says no instruction, however current, can stop a payment, only a control at the action can.](img/three-fixes.png)

*Figure 16.2. Grace's three failures. A skill and tested code fix the first two. Only a control at the action fixes the third.*

Brightline's limit will change one day too. On that day, what carries the change into every installed copy, and how would anyone know which version ran? [16.6](shipping-a-version.md) answers both.


