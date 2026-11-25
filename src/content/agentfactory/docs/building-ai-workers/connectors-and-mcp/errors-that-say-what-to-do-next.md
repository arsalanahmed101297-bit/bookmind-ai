# 17.3 Errors that say what to do next (/building-ai-workers/connectors-and-mcp/errors-that-say-what-to-do-next)

---
type: Document
title: "17.3 Errors that say what to do next"
description: "Errors written for the model: what failed, why, and what to try next. Never an empty answer."
status: stable
order: 317.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:38Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCAR-F.D2.T2, label: direct }
concepts: [ "17.3" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-15T11:19:38Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A parking machine that flashes "ERROR 7" leaves you stuck. One that says "Card not read. Insert the chip end first, or pay with cash" gets you out of the garage.

**What you will learn.** How to write an error that tells the model what failed, why, and what to try next.

**Why it matters.** A vague error sends the model guessing, and an empty answer can look like good news.

**One request, start to finish.** Ana asks about vendor V099. There is no such vendor. The model calls `find_vendor` with `V099`, and the connector must say so. Compare two replies:

- "Not found." The model has nothing to go on. It may try V100, then V101.
- "No vendor V099. Known vendor ids are V001 to V008. To search by name, call find_vendor with name." The model now knows the valid range and the next step. It asks Ana for the vendor's name, or searches by name.

### Who reads an error?

The model does. When a call fails, the model usually tries something else, and what it tries depends on the error. So an error is written for the model, like a tool description. A good error says what failed, why, and what to try instead.

### What kinds of failure are there?

MCP names two kinds of failure. A third happens before MCP is involved (below).

- **The message itself was broken,** for example it was garbled, or it named a tool that does not exist. That is a **protocol error**. The app treats the whole request as broken, and the model usually gets nothing that helps it try again.
- **The tool ran but could not do the job,** for example the vendor does not exist. That is a **tool error**. The connector still replies in the usual way, with a flag that says "this is an error". So the model reads it like any other answer, and can correct itself.

Every error Brightline's tools return is a tool error. Refusals at the door, such as a missing access key, happen before any tool runs. They are HTTP refusals, with a status code such as 401 ([17.8](securing-a-remote-server.md)), not MCP errors.

### Why must a tool never answer with nothing?

Ana asks about INV-8310, which has no purchase order. An empty reply would look like "nothing to worry about". But a missing purchase order is a finding: the AP policy says to hold the invoice. So the error says so, and quotes the policy line: "No purchase order for INV-8310. Policy: an invoice with no PO is held until the buyer raises one (docs/policies/po-matching.md, line 9). Tell the AP lead. Do not treat it as ready." It is still a tool error, because the tool could not do its job: there is no PO to compare. The words make clear it is a finding to report, not a glitch to retry.

A tool with its own screen still owes this text answer, and the screen shows the same words ([Chapter 20](../mcp-apps/a-text-answer-behind-every-screen.md)).

### Who decides an error's exact words?

The contract does. Every error's wording is written in the contract before any code exists. Brightline's connector is built twice, in two languages ([17.6](specify-generate-verify.md)), and both versions must return exactly these words. Tests check them.

**At work.** Ana reads the list of errors before any code is written. She changes one line: the missing-PO error must say "Tell the AP lead", because the AP lead is the one who chases buyers. From then on, a test checks her exact words.

**The operating rule:** every failure the model could fix comes back as a tool error that says what failed and what to do next. Nothing important comes back as an empty answer.

![Two failed calls, side by side. Left: a call with vendor V099 returns Not found, and the model's next call is V100, then V101. Right: the same call returns No vendor V099, known vendor ids V001 to V008, to search by name call find_vendor with name. The model's next call is find_vendor with name Hocking, which succeeds.](img/errors.png)

*Figure 17.8. An error that names the next step turns a dead end into a second, successful call.*


