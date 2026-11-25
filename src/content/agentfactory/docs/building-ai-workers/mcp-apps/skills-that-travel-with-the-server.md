# 20.12 Skills that travel with the server (/building-ai-workers/mcp-apps/skills-that-travel-with-the-server)

---
type: Document
title: "20.12 Skills that travel with the server"
description: "Skills over MCP lets a connector share its skills with any AI app that connects: listed with a file manifest, read only when needed, and checked against the manifest before use."
status: stable
order: 320.12
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.12" ]
last_verified: 2026-11-15
sources:
  - id: mcp-skills
    title: "Skills (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/skills/overview
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A franchise sends each new shop the same recipe binder, with a numbered list of pages on the cover. When a shop opens the binder, it checks the page count against the cover, so a missing or swapped page is caught.

**What you will learn.** How a connector shares a skill with any AI app that connects, and how the AI app checks it got exactly what the connector sent.

**Why it matters.** In Chapter 16, the `invoice-triage` skill lived in a plugin each person installed ([16.5](../skills-and-plugins/what-a-plugin-bundles.md)). [16.7](../skills-and-plugins/one-skill-three-bundles.md) carried it to three AI tools, one label at a time. Cedar Ridge's people use other AI apps, and some never install plugins. If the skill travels with the connector, the method reaches everyone who connects. The method is the same for every company. Each company's own rules, such as Cedar Ridge's $2,500.00 approval threshold, stay in its settings row ([19.11](../business-data-and-retrieval/each-companys-own-rules-and-data.md)), and the tools read them.

**One request, start to finish.** Luis asks, "Which invoices should I look at first today?"

1. **The AI app asks the connector which skills it has,** with `skills/list`. For each skill it gets the address of its `SKILL.md`, its name and description, and a manifest: every file, with its size and a fingerprint.
2. **The model reads the descriptions** and picks `invoice-triage`. The AI app may ask Luis first.
3. **The AI app reads `skill://invoice-triage/SKILL.md`** with the ordinary `resources/read`, and checks its size and fingerprint against the manifest.
4. **It loads the instructions,** tagged with the connector they came from, and the model follows them, calling `list_open_invoices` as the skill says.

![Left, in gold, the connector, holding the invoice-triage skill with its SKILL.md and references/rules.md files, and a manifest that lists each file's size and fingerprint. Right, the AI app. Arrow 1, skills/list, brings the names, descriptions and each manifest to the AI app. Step 2, the model picks invoice-triage. Arrow 3, resources/read, brings SKILL.md, checked against the manifest. Step 4, the AI app loads it, tagged with the connector it came from. Below, a file that does not match the manifest is not used, and a loaded skill can still be read, so it is not secret.](img/chapter-20-skill-flow.png)

*Figure 20.12. A skill travels with the connector, and the AI app checks every file against the manifest.*

### What is Skills over MCP?

It is the extension `io.modelcontextprotocol/skills`. A skill is the same folder you met in [16.1](../skills-and-plugins/from-a-prompt-to-a-skill.md): a `SKILL.md` with a name and description, and supporting files. The extension adds two requests and reuses one:[^mcp-skills]

- **`skills/list`** returns every skill: its `SKILL.md` address, its header fields, and a complete manifest of its files, each with a SHA-256 fingerprint and size. A fingerprint changes if one letter of the file changes.
- **`skills/get`** returns one skill's entry, when the AI app has only its address.
- **`resources/read`** reads `SKILL.md` and any supporting file, from addresses such as `skill://invoice-triage/references/rules.md`, only when it is needed.

Reading `SKILL.md` does not by itself turn the skill on. The AI app loads it through its own skill path, which checks the content and asks for any approval first.[^mcp-skills]

### What does the AI app check?

While it uses a skill, the AI app keeps the entry it loaded. It reads only files named in that manifest, checks each file's size and fingerprint before use, and compares the `SKILL.md` header with the listed one. Content that fails any check is not used.[^mcp-skills]

### Is a skill on the server protected from copying?

No. Once the AI app loads it, the person can read it, as with a plugin ([16.9](../skills-and-plugins/installing-is-a-trust-decision.md)). Its numbers still belong in tested code ([16.2](../skills-and-plugins/choosing-the-right-piece.md)), and a served skill's scripts run only after the person approves them (20.13). A skill served from the connector is easier to keep up to date, not secret. Keep the value in the tools the skill calls, behind the plan check (20.17).

**At work.** In Lab 20, Task 10, Claude Code serves `invoice-triage` and `vendor-terms` from the TypeScript connector, and Codex does the same in Python.

**The operating rule:** serve a skill with a complete manifest, let the AI app read each file only when it needs it, and keep anything worth paying for in the tools, not in the skill.

[^mcp-skills]: Skills, Model Context Protocol, accessed 15 November 2026.


