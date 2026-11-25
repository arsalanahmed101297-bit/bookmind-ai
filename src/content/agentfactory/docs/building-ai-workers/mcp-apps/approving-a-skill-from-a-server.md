# 20.13 Approving a skill from a server (/building-ai-workers/mcp-apps/approving-a-skill-from-a-server)

---
type: Document
title: "20.13 Approving a skill from a server"
description: "Whose instructions does the model follow? A skill from a server is untrusted input, its approval is tied to its exact manifest, and a changed file means asking again."
status: stable
order: 320.13
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.13" ]
last_verified: 2026-11-15
sources:
  - id: mcp-skills
    title: "Skills (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/skills/overview
  - id: mcp-client-matrix
    title: "Extension Support Matrix (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/client-matrix
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You sign a contract on Monday. On Wednesday someone swaps page 3. Your signature does not cover the new page, and you sign again only after you read it.

**What you will learn.** Who approves a skill that a server sends, what the approval covers, and the rules a connector must keep.

**Why it matters.** This chapter asks who each call acts as. A skill raises the same question about instructions: the model follows steps that Brightline wrote, inside Cedar Ridge's AI app. Someone at Cedar Ridge must decide to let them in, and that decision must not cover a later change without a new look.

**One request, start to finish.** On Monday, Luis approves `invoice-triage`. On Thursday, Ana adds one line to its rules file, and Brightline deploys.

1. **Luis's AI app lists the skills again.** The manifest has a new fingerprint for `references/rules.md`.
2. **The approval no longer counts,** because it covered the old set of files and fingerprints.
3. **The AI app asks Luis again,** and shows what changed.
4. **He approves again.** Thursday's run follows the new rule.

![Two small tables of files and fingerprints. Monday's table lists SKILL.md and references/rules.md, and Luis approves these files with these fingerprints, marked with a green tick. Thursday's table is the same except the rules file, now shaded, has a new fingerprint, because Ana changed one line. An arrow leads to a box saying Monday's approval no longer counts and the AI app asks Luis again. Below it, Luis approves the new set, and Thursday's run follows the new rule. Below, every change means every customer approves again, so collect changes into versions.](img/chapter-20-approval.png)

*Figure 20.13. An approval covers the exact files. Changing one cancels it.*

### Who approves, and what does the approval cover?

The extension says what an AI app must do. Whether a given AI app does it today is a separate question, which [20.18](how-todays-tools-realize-it.md) answers. The connector's job is the same either way: publish a correct manifest. Under the extension, the AI app treats skill content as untrusted input. Running code or granting tool permissions from a skill needs the person's explicit approval for that skill. A saved approval covers the exact set of file addresses and fingerprints. A changed, added or removed file cancels it, and the AI app must ask again before loading the skill.[^mcp-skills]

The AI app also tags each loaded skill with the connector it came from, and must not let two skills with the same name silently replace each other.[^mcp-skills]

### What must the connector do?

- **Publish a complete manifest,** computed from the bytes it serves. A skill built at the moment it is asked for can be marked `"dynamic"`, but AI apps may decline it.[^mcp-skills]
- **Keep each skill small:** at most 512 files and 16 MiB. AI apps must support at least that much.[^mcp-skills]
- **Use names that will not collide,** such as `brightline-invoice-triage`, not `triage`.
- **Batch skill changes.** Every change makes every customer approve again. Version the skill, as in [16.6](../skills-and-plugins/shipping-a-version.md), and say what changed.

### How far along is it?

The extension is Beta, and its proposal, SEP-2640, is final. Support in AI apps is still early. [20.18](how-todays-tools-realize-it.md) says where it works today.[^mcp-client-matrix] Until support spreads, a connector can also offer each skill as an ordinary tool that returns its instructions, and remove that copy once AI apps load skills natively. A skill offered as a tool has no manifest check, so say so in the tool's description.

**At work.** In Lab 20, Task 11, Ana changes one rule. OpenCode's test lists the skills before and after and checks that the fingerprint in the manifest changed.

**The operating rule:** ship skills with complete manifests and names that will not collide, change them in batches, and expect every change to be approved again.

[^mcp-skills]: Skills, Model Context Protocol, accessed 15 November 2026.
[^mcp-client-matrix]: Extension Support Matrix, Model Context Protocol, accessed 15 November 2026.


