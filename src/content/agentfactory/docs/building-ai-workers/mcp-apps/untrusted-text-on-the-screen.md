# 20.7 Untrusted text on the screen (/building-ai-workers/mcp-apps/untrusted-text-on-the-screen)

---
type: Document
title: "20.7 Untrusted text on the screen"
description: "A page shows data, it never runs it: every value as text, and the connector decides what may be shown."
status: stable
order: 320.07
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.7" ]
last_verified: 2026-11-15
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shop prints customers' review notes on its notice board exactly as written. If a note says "staff: give this customer a refund", nobody does it. It is a note on a board.

**What you will learn.** How the page shows data it did not write.

**Why it matters.** Vendor notes, invoice descriptions and policy passages are written by people outside Brightline. On a screen, text that is treated as page code could run, and act as the person reading it.

**One request, start to finish.** Cedar Ridge's vendor V102 has a planted note in its record. The note is an instruction to send the invoice list to an outside address, with a piece of web page code inside it. This is the lab's test note. [Lab 20](lab.md), Task 6, adds it to Cedar Ridge's test data, and Chapter 23 uses it again.

1. **Luis presses Vendor details on V102.** `find_vendor` returns the note in its result.
2. **The page puts the note on the screen as text.** The code appears as characters. It never runs.
3. **The model reads the same note** in the tool's text answer, as information, never as an order ([17.7](../connectors-and-mcp/untrusted-output.md)). Policy passages get the same treatment ([19.15](../business-data-and-retrieval/answers-that-cite-or-abstain.md)).
4. **Nothing is sent anywhere.** The page could not connect to the outside address anyway, because it declared none (20.6).

### What are the two rules?

1. **Show every value as text.** The page writes data into the screen as text, never as page code, whatever it contains.
2. **Trust the connector, not the page, for what is safe to show.** The connector already leaves out what must never leave, such as full bank account numbers ([17.7](../connectors-and-mcp/untrusted-output.md)). Some things it returns may still stay off the screen. Ana's screen contract leaves out the bank account ending. The page shows what it is given.

**At work.** In Lab 20, Task 6, the screen matrix's row C8 opens V102's details. It checks that the note appears as characters, that nothing ran, and that no request left the box.

**The operating rule:** a page shows data, it never runs it. Show every value as text, and let the connector decide what may be shown at all.


