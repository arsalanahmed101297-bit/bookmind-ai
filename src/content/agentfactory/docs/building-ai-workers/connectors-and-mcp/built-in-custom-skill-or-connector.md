# 17.5 When to write your own connector (/building-ai-workers/connectors-and-mcp/built-in-custom-skill-or-connector)

---
type: Document
title: "17.5 When to write your own connector"
description: "When a connector is worth writing, and when a script or a skill is the cheaper piece."
status: stable
order: 317.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:25Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCDV-F.D8.S3, label: direct }
  - { id: OAI.2.5, label: direct }
concepts: [ "17.5" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-21T00:02:25Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** For dinner, you can cook with what you have (a built-in tool), follow a recipe card (a skill), or order in (a connector). Ordering in is worth it when the food is out of your reach. To order in, you can pick from a restaurant's menu (a ready-made connector), or hire a cook who makes exactly your dishes (your own connector). Neither is worth it for a sandwich you can make yourself.

**What you will learn.** When a job needs a connector, and when writing your own is worth the upkeep.

**Why it matters.** A connector is a service someone must keep running, so writing one for a job a script could do wastes time and money.

**Two jobs, start to finish.** Ana has two jobs she wants an AI to help with:

- **Policy search.** AP clerks use a chat app, the builder uses a coding agent, and finance tries a different AI app. All three need cited answers from the same AP policies.
- **The due-by-Friday list.** One person runs it, in one project folder, with one coding agent. A tested script already does it.

The first job becomes a tool in a connector Brightline writes. The second stays a script inside a skill. Why the difference?

### How do I decide where a job belongs?

[Chapter 16](../skills-and-plugins/choosing-the-right-piece.md) placed each job with six questions, stopping at the first yes. This chapter widens its connector question, and adds a second one.

### First question: does the job need a connector at all?

Yes, when at least one of these is true:

- **It is in another system** the AI cannot reach on its own, such as an accounting system, a database, or files behind a login.
- **Several AI apps need it.** One connector serves every AI app that speaks MCP. A script serves one agent in one project.
- **A rule must hold whichever app asks,** such as fields that must never leave. The connector applies the rule for every app.

The due-by-Friday list meets none of these. It reads only the weekly invoice export, which holds no bank details, in the one project folder its one user works in. So a tested script can read the file directly, and no connector is needed to guard it. A skill says when to run the script. Policy search meets the second: three AI apps need the same answers.

### Second question: a ready-made connector, or your own?

Look for a ready-made one first, and use it if it reaches your system and gives only the access you want. Write your own when:

- **None knows your system or your work,** such as Brightline's purchase orders and AP policies.
- **The ready-made one gives too much,** as [Chapter 16](../skills-and-plugins/what-a-plugin-bundles.md)'s did: it could change files, and it handed over whole files.
- **It cannot keep your rules,** such as fields that must never leave, or a password for the business system that the model must never see.

### What does a connector cost?

Every tool description is sent to the model each time it is asked anything. A connector is also a running service: it has a web address, an access key, a place it runs online, and someone who answers when it breaks. So when a tested script or a skill does the job, use that.

### What does a connector control, and what does it not?

A connector controls what can be asked and what data comes back. It cannot tell whether a person really wants an action done right now. That decision belongs to the AI app's settings and, for anything that changes data or moves money, to a person who approves it ([17.7](untrusted-output.md), Chapter 28).

**At work.** Ana and the builder settle both jobs as above. Policy search needs a connector, because three AI apps need it. Chapter 16's ready-made connector could open the policy files, but only as whole files. It could not search them or cite a line. So policy search becomes the `search_policy` tool in Brightline's own connector. The due-by-Friday list stays a tested script in a skill, because a connector would add upkeep without a single new user.

**The operating rule:** use a connector when the job is in another system, when several AI apps need it, or when a rule must hold whichever app asks. Use a ready-made one if it fits. Write your own when no ready-made one fits: none knows your system, it gives too much, or it cannot keep your rules. Otherwise, use a skill or a tested script.

![Chapter 16's questions, asked in order. Must it never happen: a hook or setting. Another system, several AI apps, or a rule for every app: a connector, highlighted. Must a number be exact: your own tested code. Can the agent already do it: a built-in tool. Side work that would crowd the session: a helper agent. Otherwise, a skill. Beside the connector, two choices: a ready-made one if it fits, or your own. Write your own when none knows your system, the ready-made one gives too much, or it cannot keep your rules.](img/ladder.png)

*Figure 17.10. Inside the connector step there are two choices: use a ready-made connector if one fits, or write your own when none knows your system or keeps your rules.*


