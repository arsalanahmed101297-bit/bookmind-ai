# 16.9 Installing is a trust decision (/building-ai-workers/skills-and-plugins/installing-is-a-trust-decision)

---
type: Document
title: "16.9 Installing is a trust decision"
description: "A plugin runs as you. Have your agent read what it runs, what it reads and where it sends data before you install it."
status: stable
order: 316.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:41Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.9" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-15T11:19:41Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You would not give a stranger a key to your house because their flyer, a small printed ad, says "We water plants!". You would want to know who they are, what they will do inside, and whether they make copies of your mail. The flyer is not the person.

**What you will learn.** What somebody else's plugin can do on your computer. How to have your agent read one with you before you install it.

**Why it matters.** A plugin's description is written to sell it. What decides whether you can trust it is in the files that run.

### What does a plugin do once it is installed?

It runs as you. Its skills tell your agent what to do, with your permissions. Its connectors are programs started on your computer, with your files and your network. Its hooks run code at fixed moments, and one that runs when a session starts runs before you have typed anything. Most of this runs with no **sandbox**, which means nothing limits what it can reach.

A plugin you turned on and never use still costs context on every turn, and can still run.

So installing a plugin is a decision to trust its author with everything you can reach. A description that says "faster AP lookups" is a flyer.

### How do I read a plugin before I install it?

Like a pull request ([Chapter 15](../code-review/overview.md)). You do not read every line yourself. You ask your agent to read every file and report what runs, and you check the lines that matter.

| Look in | Ask |
| --- | --- |
| The manifest | Who made it? Which version? |
| Hooks | When does each one run, and what command does it run? |
| Scripts | What do they read? Where do they send anything? |
| Connectors | What program, which version, which folders or addresses? Does it need its write tools? |
| Skills | Do the steps match the description? Do they tell the agent to send, upload or delete anything? |

Two things need an explanation before anything else: a network address in a script, and any file read outside the plugin's own folder, such as `.env`, where keys are often kept.

### Does a reviewed catalog make a plugin safe?

It helps, and it does not replace reading. A catalog whose owners review what they list lowers the risk. It cannot tell you whether a plugin should reach your data. You still decide that.

### What can an organization control?

Which plugins people may install. In most tools an administrator can allow none, a reviewed list, or a set installed for everyone. In a company, the safe choice is a reviewed list, where someone responsible has read every plugin on it. Turning a plugin off for everyone is also how a bad version is removed quickly.

### Can I keep something valuable in a plugin?

No. Anyone who installs a plugin can read its files. If your value is in logic or data, keep it on a server you control, behind a connector that checks who is calling. Chapters [17](../connectors-and-mcp/overview.md) and [18](../securing-connectors/overview.md) teach how. The same holds for a skill a connector serves and for a connector's screens ([Chapter 20](../mcp-apps/overview.md)): the person can read both.

**At work.** A colleague forwards Ana an "AP helper" plugin that promises instant answers. The builder has the agent read it before anyone installs it. Its manifest and skill look harmless. Its hook runs a script at the start of every session. The script sends every file in `data/`, and `.env`, to an outside address. Nothing in the description mentions it. The answer is "do not install". The hook, the script's line and the address are written down, so the next person who is sent it knows why.

### Try it

You read a plugin a stranger sent. Install nothing, and run nothing in it.

**Predict.** The practice folder holds one, in `exercises/ap-helper-plugin`. Open its `README.md`. It promises instant answers with no setup. Would you install it?

**Run.** In `practice-16`, send: "Read every file in `exercises/ap-helper-plugin`, and change nothing. Run nothing in it. Make a table with one row each for the manifest, hooks, scripts, connectors and skills. In each row, say what is there, what runs and when, what it reads, and where it sends anything. If a row has nothing, say so."

**Check.** One row runs code. Open `exercises/ap-helper-plugin/scripts/sync.sh` yourself, and find the line that sends something.

**Decide.** Install it or not? Write down the file and the line that decided it.

**What you should see.** The hook runs `scripts/sync.sh` at the start of every session. The script sends every `.csv` file in `data/`, and `.env`, to `https://ap-helper.example/collect`. Nothing in the README says so. The address is a practice one that reaches no real server, but the lines are what a real one looks like.

**Then yours.** List the plugins you already have, as [your tool's tab](both-ai-vendors.md#practice-installing-is-a-trust-decision) says. Choose one you did not write, and send the same request for its folder.

**The operating rule:** before you install a plugin, have your agent read what it runs, where it sends data and what it can reach. Install only what you would let run as you.

![A table of a plugin's files. plugin.json and skills/ap-helper/SKILL.md are marked plain text. hooks/hooks.json runs scripts/sync.sh, marked runs at session start. scripts/sync.sh posts data/*.csv and .env, marked runs as you, no sandbox, with an arrow to an outside address, not in the description.](img/read-before-install.png)

*Figure 16.13. Read a plugin before you install it. The lines that run code, and the addresses they send to, decide whether you can trust it.*


