# 21.11 Streaming (advanced path) (/building-ai-workers/agent-loop-by-hand/streaming)

---
type: Document
title: "21.11 Streaming (advanced path)"
description: "A response streamed in pieces: show text as it arrives, and join a tool call's input and parse it only when its block ends."
status: stable
order: 321.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:34Z
chapter: "21"
part: III
expert_status: builder-only
concepts: [ "21.11" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:34Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**Where this fits.** **Streaming** changes how step 1's response arrives. So far each response arrived all at once, at the end. Streaming delivers it in small pieces while it is being written, so a person can watch the answer appear.

**In everyday life.** A friend calls to invite you to their new home. You follow the chat sentence by sentence, and each sentence makes sense as soon as you hear it. Then they tell you the address. Half an address takes you to the wrong door, so you wait for the whole of it before you leave. In this concept, the chat is text arriving piece by piece, and the address is a tool call's input, which your code reads only when it is complete. Put simply: show words as they arrive, but wait until a tool's input is complete before you use it.

**What you will learn.** How a reply can arrive in small pieces while it is being written, and when each piece is safe to use.

**Why it matters.** People can watch the words appear, but a tool's input cannot be used until all of it has arrived.

**One request, start to finish.** Ana asks her usual question, with streaming on. The answer arrives as a series of small events:

```text
message start
block 0 starts    text
  text piece      "Let me check "
  ping            (an empty keep-alive event: ignore it)
  text piece      "this week's invoices."
block 0 stops
block 1 starts    tool call  toolu_01Lab20S2  list_open_invoices
  input piece     {"vendor_id": nu
  input piece     ll, "due_on_or_before": "2027-
  input piece     04-04", "page_size": 10, "page": null}
block 1 stops     -> now parse:  {"vendor_id": null, "due_on_or_before": "2027-04-04", "page_size": 10, "page": null}
message delta     stop reason: wants a tool
message stop
```

Ana's page shows "Let me check this week's invoices." as it arrives. The tool call's input arrives in three pieces that are not valid JSON on their own. Your code joins them and parses them only when block 1 stops.

### What is streaming?

**Streaming** sends a response in pieces while it is being written, instead of all at once at the end. Both APIs stream with **server-sent events**, a web standard (part of the HTML standard) for a server to send a series of small text messages over one open connection. Each event has a type. A **delta** is a piece of something: a few words of text, or a few characters of a tool call's input.

Three rules:

- **Show text as it arrives.** It is safe to show a person each text piece at once.
- **Join tool input, and parse it only at the end.** Each piece is part of a JSON string. Parse the joined string when its block stops, never before.
- **Expect an error in the middle.** A stream can start with success and later send an error event. Handle it, and do not run a tool from a half-finished call.

Streaming changes how the response arrives, not the loop. When the stream ends, the complete response holds the same content, the same tool calls and the same stop reason as without it, and the loop goes on as before, provided you keep the whole response, thinking blocks and their signatures included. The lab's small stream reader is for showing a stream, not for driving the loop: it keeps the text and the finished tool calls, and leaves the thinking out. If an error event arrives mid-stream, the SDK raises it as an exception, and the reader returns no half-finished tool call. A recorded test in each language proves that.

![One streamed response drawn as a row of small event cards, left to right: message start, block start text, two text pieces with a ping between them, block stop, block start tool call, three input pieces, block stop with a small parse icon, message delta with the stop reason, message stop. Above the text pieces, a screen showing the words as they arrive. Above the input pieces, a jar collecting them, labeled join, then parse at block stop.](img/chapter-20-one-stream.png)

*Figure 21.18. One streamed response, event by event. Show text at once. Parse tool input only when its block ends.*

**At work.** In [Lab 21](lab.md), Task 11, your coding agent runs the recorded streaming test, then `npm run stream:demo`, which prints each event's type as it arrives. You ask the agent to explain the stream reader in `src/loop/stream.ts` and its Python twin, and find the one line that parses the tool input (line 44 in TypeScript, line 45 in Python).

**The operating rule:** stream text to the person as it arrives, join a tool call's input and parse it only when its block ends, and handle an error at any point in the stream.


