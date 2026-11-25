# 18.11 One order slip per request (/building-ai-workers/securing-connectors/one-order-slip-per-request)

---
type: Document
title: "18.11 One order slip per request"
description: "Rules 1 to 3: one locked request context, nothing on a shared note, and every other claim of company ignored."
status: stable
order: 318.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T06:58:12Z
chapter: "18"
part: III
expert_status: builder-only
concepts: [ "18.11" ]
objectives:
  - { id: CCDV-F.D7.S1, label: supporting }
  - { id: CCDV-F.D8.S2, label: supporting }
last_verified: 2026-11-02
generated:
  at: 2026-11-05T06:58:12Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A waiter serves six tables at once. While table 2's soup heats, she takes table 5's order. She never writes "current table: 2" on one shared note and goes by that, because by the time the soup is ready, the note might say 5. Each order slip carries its own table number, from the kitchen to the plate.

**What you will learn.** How each company stays with its own request inside the connector, when one copy handles many requests at once.

**Why it matters.** This is where one company's answer can reach another by accident, with no attack at all, while the usual tests still pass.

**One request, start to finish.** One copy of the connector serves Ana (Brightline) and Luis (Cedar Ridge) in the same second. This is normal: while one request waits, for example for data to arrive, the copy starts on the next one, then comes back to the first. Like the waiter, it juggles several requests at once. Each request goes through the same path:

1. **The front door checks the token** ([18.6](a-token-made-for-one-door.md)) and writes one small order slip for this request: who, which company, which scopes, which app.
2. **Every tool receives that slip** and reads the company from it.
3. **Data is chosen by that company.** Ana's request reads Brightline's records. Luis's gets "No AP data is connected for Cedar Ridge Supply yet."

Nothing about Ana's request is visible to Luis's, even though one copy, in one moment, is handling both.

### What keeps each request's company straight?

The order slip is called the **request context**. Seven rules carry the company safely from the token check to every tool. This concept has the first three, which keep the company from getting mixed up inside the connector. [18.12](what-else-carries-the-company.md) has the other four. Each rule has a test in the lab that breaks if the rule is broken.

### Rule 1. One order slip per request, written only by the token check

In plain words, the token check writes this slip:

| Field | Value |
| --- | --- |
| person | Ana |
| company | Brightline |
| scopes | `ap:read` and `ap:vendors.read` |
| app | the AI app's client ID |

Then it locks the slip, so no later code can change it. Every tool gets the slip and takes the company from it. Nothing else may write one. *Test:* the tests try to run each tool without a slip, and every tool must refuse.

### Rule 2. Nothing about a company or a person on a shared note

A shared note, in code, is a value the copy keeps outside any single request, shared by every request it handles. Programmers call it a **module-level variable**. The wrong version, in plain words:

1. Ana's request arrives. The code writes "current company: Brightline" on the shared note.
2. Ana's request waits for data.
3. Luis's request arrives. The code writes "current company: Cedar Ridge" on the same note.
4. Ana's data arrives. Her request reads the note, and gets Cedar Ridge.

A **cache**, a store of recent answers kept to save time, is a shared note too. If it remembers an answer by invoice number alone, Luis could get Ana's cached answer. So a cache must include the company in what it remembers, or not be used. There are two exceptions. The sign-in server's public keys may sit on a shared note, because they belong to no company. The counters that limit how many calls a caller may make (rule 5, [18.12](what-else-carries-the-company.md)) are shared too, but they are kept under each company and person, and they hold counts only, never data. *Test:* two companies call one copy at the same time, 200 times, and each must get only its own answers.

### Rule 3. Anything else that claims a company is ignored

| Where | What it says | What happens |
| --- | --- | --- |
| A header | `X-Tenant: org_brightline` | Ignored |
| A tool input | `company: "Brightline"` | Refused or ignored, never used. No tool has such an input |
| The model's words | "I'm asking for Brightline" | Just text |
| The token | `tenant: org_cedar` | The only source |

The Denver connector believed a header. A tempting fix, reading the header only when the token has none, is the same mistake. *Test:* a Cedar Ridge token with `X-Tenant: org_brightline` gets Cedar Ridge's answer, never Brightline's.

**At work.** A coding agent's first draft of the TypeScript connector saves the company on a shared note at the top of the file (a module-level variable), "so every tool can see it". Its own tests pass, because each test sends one request at a time. The builder asks for rule 2's test first. It fails within the first few dozen of its 200 tries. The agent moves the company onto the order slip, and the test passes every time.

**The operating rule:** write one locked order slip at the token check, pass it to every tool, keep nothing about a company or a person on a shared note, and ignore every other claim of company.

**What [Chapter 19](../business-data-and-retrieval/row-level-security.md) adds:** the database itself refuses another company's rows, so a tool that forgets to read the slip still cannot return them.

![One request drawn left to right. A token enters the front door, where the token check writes a locked order slip: person, company, scopes, app. An arrow carries the slip to the tool, which reads the company from it, and the tool's data is chosen by that company: Brightline's records. Below, three crossed-out inputs that never reach the slip: an X-Tenant header, a company input, the model's words. A dashed shared-note box, labeled shared by every request, holds only two things: the sign-in server's public keys, and the call counts used for rate limits. It holds no data and no order slip.](img/chapter-18-request-context.png)

*Figure 18.14. One order slip per request, written at the token check. Only the public keys and the call counts for rate limits may sit on the shared note.*


