# 16.7 One skill, three bundles (/building-ai-workers/skills-and-plugins/one-skill-three-bundles)

---
type: Document
title: "16.7 One skill, three bundles"
description: "One copy of each skill serves many AI tools: what moves from one tool to another, what does not, and how to test in every place you promise."
status: stable
order: 316.07
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:28Z
chapter: "16"
part: III
expert_status: co-build
concepts: [ "16.7" ]
last_verified: 2026-11-02
generated:
  at: 2026-11-21T00:02:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A recipe written in plain English works in any kitchen. The way you deliver a meal kit does not. One grocer wants a box with its own label, another wants a bag with a barcode, and a third wants you to bring the ingredients yourself. The recipe card goes in all three unchanged. Only the packaging differs.

**What you will learn.** What moves from one AI tool to another and what does not. How to keep one copy of each skill for all of them. How to test it in every place you promise.

**Why it matters.** A team rarely uses one AI tool. If each tool needs its own copy of a skill, the copies drift, which is Grace's problem from the overview again.

### Which three words do I need?

- A **host** is the product that loads a skill or a plugin.
- A **place** is where a host runs: a chat in a browser, a task on your desktop, a coding agent in a folder.
- A **building agent** is the coding agent that writes the files.

A plugin is only files, so any building agent can write any host's files. You can build a plugin for one company's products with another company's coding agent.

### What moves, and what does not?

| Part | Moves? | Why |
| --- | --- | --- |
| A skill | Yes, to every host in this chapter | All of them follow the Agent Skills standard ([16.1](from-a-prompt-to-a-skill.md)) |
| The plugin's label and layout | Only to hosts that follow Agent Plugins | Some hosts read only a manifest of their own |
| A connector that runs on your computer | Only to places that can start a program there | A chat in a browser cannot run a program on your laptop |
| A hook | Least of all | Each host has its own format |

### How do I serve many hosts with one plugin?

Keep one copy of each skill, and add each host's own label beside it. Never copy a skill into a second folder, because two copies drift. A connector can also serve the same skill to any AI app that connects, with a list of its files that the AI app checks ([Chapter 20](../mcp-apps/skills-that-travel-with-the-server.md)). It is still one copy, served from one place.

```text
plugin/
├── plugin.json          the standard label, for hosts that read it
├── mcp.json
├── skills/              one copy, shared by every host
└── .host-a/plugin.json  one host's own label, pointing at the same skills/
```

A host that reads no plugin at all, only a skills folder named in its settings, is served too: its settings point at the same `skills/`. If a host starts to follow the standard later, you delete its own label, and nothing else changes. Your coding agent writes each host's label, and the checks from [16.6](shipping-a-version.md) prove each one is well formed.

### Does a skill behave the same everywhere?

No, because places differ. A coding agent in a folder has your repository. A chat in a browser does not. So a skill that says "run the repository's triage command" works in the first and fails in the second.

That is why Brightline's triage skill carries a small script of its own in `scripts/`. A test proves the script gives the same answer as the repository's tested code, and the skill names both routes.

### How far do I test?

In every place you promise. Send the same request in each one, and write down three things, kept apart: did the skill load, did it run, and did its answer match the script.

**At work.** Brightline wants the triage skill in all six places its staff use AI: three from one company, two from another, and an open-source coding agent. The builder writes the skills once, and they ship as three bundles. The first company's hosts read their own manifest, beside the standard one. The second company's read the standard one. The open-source agent's settings point at the shared skills folder. The data connector works in the coding agents and the desktop task. In the browser chats it is skipped, and people attach the files instead. The skill handles both: if the connector is there, it reads the folder, and if not, it asks for the files.

### Try it

You take the `vendor-terms` skill to a second place. You need the plugin from [16.5](what-a-plugin-bundles.md#try-it).

**Make.** On paper, draw this table, with one row for each place you try:

| Place | Loaded | Ran | Answer matched |
| --- | --- | --- | --- |

**Predict.** Choose a place you have not used yet from [the tabs in 16.10](both-ai-vendors.md#practice-one-skill-three-bundles), and follow its steps. If you have only one agent, use the Claude or ChatGPT tab, in a browser or the desktop app. Before you send anything, decide which of the three columns this place will fill.

**Run.** In a new chat or session, send the same request as before: "What terms do we have with Great Lakes Freight?" Fill in the row.

**What you should see.** In a coding agent in the folder, all three, and Net 30. In a chat with no repository, the skill loads, but `npm run vendors` has nothing to run in. A skill that loaded but could not run has moved only part of the way. Write it down as that.

**Modify.** Now do what Brightline did. In `practice-16`, send: "Give the vendor-terms skill a script of its own, at practice-plugin/skills/vendor-terms/scripts/vendors.py, with a copy of the vendor list beside it and no dependencies. It prints the same lines as npm run vendors. Change the skill's body to name both routes: npm run vendors in this repository, and the script anywhere else. Then run both, and show me that they print the same lines."

Take the plugin to the second place again, and send the same request. The row should now fill all three columns.

**The operating rule:** write one copy of each skill, and put each host's own label beside it. Never copy a skill. Test the same request in every place you promise.

![A grid. Three coding agents down the left side, each able to write any host's files, all pointing to one shared skills folder. Six places across the top. Each cell shows what loads: skills everywhere, the local connector only on places that run on your computer, hooks only on some, with the bundle format each host reads.](img/three-bundles.png)

*Figure 16.11. Any building agent can write any host's files. The skills travel everywhere. The bundle around them is read in different ways, and each place loads a different part.*


