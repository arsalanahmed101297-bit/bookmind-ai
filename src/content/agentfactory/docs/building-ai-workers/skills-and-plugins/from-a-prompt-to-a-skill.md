# 16.1 From a prompt you repeat to a skill (/building-ai-workers/skills-and-plugins/from-a-prompt-to-a-skill)

---
type: Document
title: "16.1 From a prompt you repeat to a skill"
description: "Work you keep explaining becomes a skill: a folder with a SKILL.md that an agent reads when it has that work to do, written by your agent and read by you."
status: stable
order: 316.01
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-14T13:56:24Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.1" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-14T13:56:24Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A restaurant does not explain its salad dressing to every new cook. It keeps a recipe card in a notebook. The notebook's tabs say what each card is for, so a cook finds the right one in seconds without reading them all.

**What you will learn.** What a skill is, how an agent decides to read one, and how to have your agent write your first one.

**Why it matters.** A procedure kept in private prompts drifts, and nothing says which copy is current. A skill is one copy, in one place, that every teammate's agent reads.

### What is a skill?

A **skill** is a recipe card for an agent. It is a folder with one file in it, `SKILL.md`, that says how to do one job. Here is a whole skill:

```markdown
---
name: vendor-terms
description: Lists Brightline's vendors and their payment terms from the tested script. Use when someone asks about a vendor's terms.
---

Run `npm run vendors`. Report what it prints exactly, never from memory.
```

The top part, between the two `---` lines, is called the **frontmatter**. It is the card's tab: a `name` and a `description`. The rest is the steps, in plain words. You do not type this file. You tell your agent the job, the agent writes the file, and you read it.

### How does the agent know when to use it?

From the description. The agent reads a skill in three stages:

1. *Always:* every skill's name and description, about 100 tokens each. This is how the agent knows the skill exists.
2. *When the work matches:* the steps in `SKILL.md`.
3. *When a step needs it:* any other file in the folder. A script is run, not read, so its code stays out of the agent's context.

So fifty skills cost fifty short descriptions until one is needed. That is why the description matters more than any other line, and [16.3](writing-a-skill-with-the-expert.md) shows how to write a good one.

![Three stages of loading. On the left, a column of skill names and one-line descriptions marked always visible, about 100 tokens each. In the middle, one skill's full instructions marked loaded when used. On the right, a references file and a script, marked read or run only when needed.](img/progressive-disclosure.png)

*Figure 16.3. An agent sees every skill's name and description. It loads a skill's body only when the work matches, and its files only when a step needs them.*

### Can I start a skill myself?

Yes. A skill starts in two ways: the agent picks it because the work matches, or you type its name. [16.4](commands-and-who-may-start-them.md) is about choosing between the two.

### What else can the folder hold?

Anything too long for the card:

```text
invoice-triage/
├── SKILL.md          the card: name, description, steps
├── scripts/          code the agent runs
├── references/       documents it reads when a step needs them
└── assets/           templates and data files
```

### Where do I keep it?

In the project's skills folder, when the team should have it. Everyone who works on the project gets it through git. Claude Code and Codex also read a skills folder of your own, for skills only you use. Each tool names its folder differently, and [16.10](both-ai-vendors.md#practice-from-a-prompt-to-a-skill) lists them.

### Is a skill the same as the rules file?

No. The rules file from [Chapter 12](../agentic-coding/rules-the-agent-reads.md) holds what is always true here: how to run the tests, never edit `data/`. A skill says how to do one job, and loads only for that job. If a section of your rules file has become a procedure, move it to a skill.

### Can a skill do anything by itself?

No. A skill is plain text. It can tell the agent to run a script, but what the agent may do is set by your tool's permissions, not by the skill's words ([16.9](installing-is-a-trust-decision.md)).

### Why does one skill work in more than one tool?

Because the folder follows an **open standard**, a public rule that any product may build in. It is called **Agent Skills** (agentskills.io, checked November 2, 2026). The standard asks for two fields, `name` and `description`. The name is lowercase letters, digits and hyphens, and it matches the folder's name. Four more fields are allowed: `license`, `compatibility`, `metadata` and `allowed-tools`. Most skills need none of them.

**At work.** Every Monday, Brightline's AP clerk pastes the same paragraph into a chat: "Here are this week's invoices. Flag any vendor we don't know, any duplicate, any terms that don't match, anything over the controller's limit, and anything due this week." Each clerk's paragraph is a little different, and one still says the limit is $10,000, the limit before September's policy. Ana asks for one skill instead. Its description says when to use it, and its body holds the steps. Her rules sheet goes in `references/`, and the script that sorts, or triages, the invoices goes in `scripts/`.

### Try it

**Set up once.** Every Try it in this chapter uses one practice folder.

1. Download [brightline-lab-ch16.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch16.zip), and unzip it. Make a copy of its `brightline-ap` folder beside it, and name the copy `practice-16`. Keep `brightline-ap` as it is for the lab.
2. Open `practice-16` in your agent, and set the agent to ask before it acts: *Manual* in Claude Code, *Ask for approval* in Codex. For OpenCode, add the rules in [its tab](both-ai-vendors.md#practice-from-a-prompt-to-a-skill).
3. Send: "Put this folder under git, with a main branch and one first commit. Then install the packages with npm ci."

**Make.** Send: "Run npm run vendors, and show me what it prints." The agent asks before it runs the command. Approve it. It prints eight vendors with their terms, such as Net 30, which means payment is due 30 days after the invoice date. Then send, with your tool's folder in place of `<folder>` (`.claude/skills` in Claude Code, `.agents/skills` in Codex, `.opencode/skills` in OpenCode):

"Make a skill named vendor-terms, at `<folder>/vendor-terms/SKILL.md`. Use only two frontmatter fields, name and description. The description says it lists Brightline's vendors and their payment terms from the tested script, and to use it when someone asks about a vendor's terms. The body says to run npm run vendors, and to report what it prints exactly, never from memory. Show me the file when it is written."

The agent asks before it writes into its own skills folder. Approve it.

**Predict.** Read the file. Then decide what each of these messages will load, before you send it. Start a new session for each one.

- "What terms do we have with Great Lakes Freight?"
- "Write one polite sentence thanking a vendor for a fast delivery."

**What you should see.** For the first message, the agent uses `vendor-terms`, runs `npm run vendors`, and answers Net 30, from the line `V003  Great Lakes Freight  (Net 30)`. For the second, it loads no skill and runs no command. It only writes the sentence.

**How to tell that a skill loaded.** Claude Code shows a `Skill` step with the skill's name. In any tool, you can also ask: "Which skill did you use?"

**The operating rule:** when you paste the same instructions a third time, ask your agent to write them as a skill. Keep the description short and specific, the steps in the body, and anything long in a file beside it.


