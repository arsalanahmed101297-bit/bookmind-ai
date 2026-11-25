# 12.4 Rules the agent reads (/building-ai-workers/agentic-coding/rules-the-agent-reads)

---
type: Document
title: "12.4 Rules the agent reads"
description: "How to write the AGENTS.md every session reads, what adding a CLAUDE.md changes, how to back the rules that must never break with a setting, and how to keep instructions lean."
status: stable
order: 312.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:24Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.4" ]
last_verified: 2026-11-01
sources:
  - id: agents-md
    title: "AGENTS.md (the open format's own site, verified 2026-11-01)"
    resource: https://agents.md/
  - id: anthropic-memory
    title: "How Claude remembers your project (Anthropic, verified 2026-11-01)"
    resource: https://code.claude.com/docs/en/memory
generated:
  at: 2026-11-21T00:02:24Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A good restaurant keeps a notebook by the back door for new cooks. It says where the knives go, which sauces are made fresh each morning, which supplier never to call, and the one rule that gets you fired. Nobody reads all of it each day. But every new cook reads it once, and the head chef updates it whenever someone makes the same mistake twice.

**What you will learn.** How to write one short `AGENTS.md` that every agent reads, what adding a `CLAUDE.md` changes, and how to back a rule that must never break with a setting.

**Why it matters.** The agent cannot see your company's unwritten rules. What you write down, it reads in every session, and what a setting enforces, it cannot skip.

### What is a rules file?

A coding agent is a new cook every session. It starts knowing nothing about your project, and the **rules file** is its notebook: a plain markdown file at the top of the repository that the agent reads at the start of each session. It tells the agent what the project is, how to build and test it, and the rules your team cares about.

The usual name for this file is `AGENTS.md`. It is an open format, a README for coding agents.[^agents-md] Codex, OpenCode, Cursor and GitHub Copilot's coding agent are among the tools that read it,[^agents-md] and Claude Code reads it too.[^anthropic-memory] No AI vendor owns it: the Agentic AI Foundation, under the Linux Foundation, looks after it.[^agents-md] So start simple, with one `AGENTS.md`, and every agent you use gets the same rules.

### What goes in it?

Keep it short and specific. A good rules file answers five questions:

| Question | Example from Brightline |
| --- | --- |
| What is this project? | "Scripts the AP team runs on invoice exports, written in TypeScript, a programming language." |
| How do I build and test it? | "`npm install` sets up the tools, and `npm test` runs the tests. Every change needs a passing test." |
| What are the house rules? | "Dates are ISO, such as 2027-03-05, in code and output. Amounts are whole cents, never decimals such as 10.5." |
| What must never happen? | "Never write to `data/`. The scripts read it and the tests depend on it. Never print bank account numbers." |
| Where do things go? | "Scripts in `src/`, tests in `tests/`, one script per file." |

Write rules the agent can follow and you can check. "Write good code" is not a rule. "Run `npm test` before you say you are done" is.

You do not have to start from nothing. Most coding agents can draft the file: ask in plain words, or run the tool's setup command, often `/init`. Read the draft, correct what it guessed wrong, and add the rules only your team knows.

### What if the project also has a `CLAUDE.md`?

Claude Code also has a file of its own, `CLAUDE.md`. When a project has one, or a personal `CLAUDE.local.md`, Claude Code reads that **instead of** `AGENTS.md`.[^anthropic-memory] So one team can have two sets of rules without anyone choosing that, and Claude Code's `/init` command writes a `CLAUDE.md`, so it is easy to do by accident. The fix is one line. Make `@AGENTS.md` the top line of `CLAUDE.md`, which pulls the whole file in, and add lines below it only for rules that apply to Claude Code alone.[^anthropic-memory] [12.8](both-ai-vendors.md#practice-the-rules-file) shows the steps in each tool.

### Can rules live in more than one place?

Yes, at three levels, and agents combine them.

- **Personal rules** in your home folder apply to every project you open. "Explain commands before running them" is a personal rule.
- **Project rules** at the top of the repository apply to everyone who works on it. They belong in git, so the whole team shares and reviews them.
- **Folder rules** inside a subfolder apply only when the agent works there. "Tests in this folder use the fixed sample file" is a folder rule.

If two levels disagree, the `AGENTS.md` format says the file closest to the work wins, and what you type in the chat overrides every file.[^agents-md] Products do not all keep to that: Anthropic warns that Claude may pick either of two rules that contradict each other.[^anthropic-memory] So keep the levels consistent. Settings have levels too, and in many products a rule that forbids an action wins over a rule that allows it, whatever level each is at.

![The title reads "Rules in layers." The line below it reads "Personal, project, and folder instructions guide the same agent." Three stacked boxes feed one arrow into a dark box, "Agent: uses the instructions loaded for this task". Folder, "Instructions for a specific part of the project", has the example "Use fixed sample data in these tests." Project, "Shared instructions stored in the repository", has the example "Run the tests before reporting completion." Personal, "Your preferences across projects", has the example "Explain changes in plain English." A red note reads "Keep the layers consistent. Resolve conflicting instructions. Check what your tool loads." The footer reads "Written rules guide behavior. Permissions enforce access limits. Loading order and timing vary by tool, and folder rules may load when needed."](img/rules-layers.png)

*Figure 12.4. Rules in layers. The agent combines them, and folder rules may load only when it works there. Layers that disagree make it unpredictable, so keep them consistent. Permission settings have their own order.*

### Can a rules file stop a mistake?

Not on its own. The notebook can tell a cook never to call that supplier, but it cannot take away the phone. A rules file is advice the agent reads, not a lock. An agent follows it most of the time, but in a long session it gets less attention ([12.5](context-sessions-effort.md)). What a long session loses first is a rule you only typed in the chat, so move those into the file.[^anthropic-memory]

So anything that must never happen gets two guards: a line in the rules file, which explains the rule, and a setting, which enforces it. A permission rule that denies edits to `data/`, or reading a file, blocks it even when the agent forgets the line. Settings files can live in the repository too, so the whole team gets them, though some products apply a repository's settings only after you confirm you trust the folder. Git stays the third guard, because no rule covers every way a file can change.

### How do I keep it useful?

Do what the head chef does. Each time the agent makes a mistake that a sentence would have prevented, add the sentence. Each time a rule stops being true, delete it. A rules file that is long, vague or out of date is worse than a short true one, because the agent does what it says.

Keep it lean too. Everything the agent reads at the start costs context, even the parts it never uses. Every few weeks, check what it loads, and remove rules that are out of date or that contradict each other. After a model change, also look for lines written for the older model.

### What else can the agent read?

A few other kinds of saved instruction, each a plain file in the repository or your home folder. You do not need them yet, and later chapters build them.

| Kind | What it is | Brightline example |
| --- | --- | --- |
| Command | A saved prompt you run by name, often with an extra detail such as a date | `/due-by-friday 2027-03-05` runs the script and reports the count and the total |
| Skill | A folder of instructions the agent loads when a task needs it, or when you call it by name | "How we format a payment-run report" |
| Subagent | A helper agent with its own context and its own tools, for a side task | A read-only reviewer that checks a change against the rules file |
| Memory | Notes the agent keeps between sessions, separate from the rules you write | "Ana prefers amounts in dollars in output" |
| Answer style | Personal instructions for how answers are written, not what the agent does | "Short answers, plain English, no jargon" |
| Plugin | A bundle of skills, commands and connectors with one version, installed as one. Some also run code, such as hooks | `brightline-ap`, the AP team's skills and connector in one install |

You can make one in [12.8's practice](both-ai-vendors.md#practice-the-rules-file). Some products save a command as a skill. [Chapter 16](../skills-and-plugins/overview.md) builds skills and commands into a plugin, and Chapter 27 builds subagents.

Code in a plugin, such as a hook, is a program, not advice. It runs with the same rights as you: it can do anything you can do on this computer. Install only plugins you would be happy to run yourself, from a source you trust, and read what a new one does before you turn it on.

**At work.** Ana asked the agent for a first draft of Brightline's rules file. It listed the folders and the test command correctly. It could not know the rule that mattered most, because no file says it: the files in `data/` must never be changed, because every script and test depends on them. So she added one line, "Never write to `data/`.", and a setting that denies those edits.

**The operating rule:** keep one short, true `AGENTS.md` in the repository, shared by every agent you use, and add a line each time a mistake could have been prevented by one.

**Practice it.** [Practice: the rules file](both-ai-vendors.md#practice-the-rules-file), in your own tool, twenty minutes.

[^agents-md]: AGENTS.md, agents.md.
[^anthropic-memory]: How Claude remembers your project, Anthropic.


