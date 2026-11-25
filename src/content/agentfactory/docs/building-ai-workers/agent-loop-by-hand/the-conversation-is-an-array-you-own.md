# 21.5 The conversation is an array you own (/building-ai-workers/agent-loop-by-hand/the-conversation-is-an-array-you-own)

---
type: Document
title: "21.5 The conversation is an array you own"
description: "Why a stateless API leaves the whole conversation in your program, and why everything the model produced goes back unchanged."
status: stable
order: 321.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-20T11:28:25Z
chapter: "21"
part: III
expert_status: builder-only
concepts: [ "21.5" ]
last_verified: 2026-11-05
sources:
  - id: claude-preserved-thinking
    title: "Preserved thinking (Anthropic, accessed 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/preserved-thinking
generated:
  at: 2026-11-20T11:28:25Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**Where this fits.** This is step 2, keep. The model remembers nothing from one call to the next, so your program keeps the whole conversation and sends all of it every time. (The advisor from [Start here](overview.md#start-here-what-an-agent-is) forgets each note as soon as she answers it, so you slide the whole pile back under the door each time.)

**In everyday life.** A family doctor's practice brings in a fill-in doctor for one day. The fill-in doctor has never met the patient and will never see the file again after today. Everything the fill-in doctor needs is in the folder the clinic hands over: every note, every test, in order. If the clinic tears out a page, the fill-in doctor does not know it is missing, but the treatment may be wrong. In this concept, the fill-in doctor is the model, and the folder is the **conversation array**.

**What you will learn.** Why the model remembers nothing between calls, so your program keeps every message and sends all of them each time, unchanged.

**Why it matters.** Owning the whole history means you can print, test and replay exactly what the model saw. Editing it breaks the next call.

**One request, start to finish.** Ana's first question runs, and her loop makes two calls. Here is the conversation your code sends, call by call:

```text
call 1   [ person: "Which invoices are due this week?" ]

call 2   [ person: "Which invoices are due this week?",
           model:  thinking (unchanged) + tool call A1 list_open_invoices,
           you:    tool result A1, ten invoices ]
```

Then, to see what breaks, your coding agent runs a broken copy that cuts short the signature, a sealed code, of the model's thinking block before the second call. The second call is rejected with an error: the thinking that went with that tool call was changed.

### What does a stateless API mean for the conversation?

The first API is **stateless**: it keeps nothing between calls. Each request must carry the whole history, and the model reads only what that request holds. So the conversation lives in your program, as a **conversation array**, a list of entries in order. Each entry has a role (the person, or the model) and content. The loop adds two entries on each turn that uses a tool: the model's content, then your results. On the last turn it adds only one, the model's answer. Your tool results go in an entry with the person's role, `user`, because the first API has no role of its own for tool results.

Three rules follow:

- **Everything the model produced goes back unchanged.** That includes text, tool calls and **thinking blocks**: the model's reasoning before it answers, which the first API returns as content blocks with a signature, a sealed code that proves the block was not changed. With tool use, the thinking that came with a tool call is sent back with that call, complete and unmodified. Rebuild the entry or edit a block, and the next request is rejected: a signature that was cut short or changed always gets a 400 error.[^claude-preserved-thinking] Drop every thinking block and nothing fails, but the model loses its earlier reasoning.[^claude-preserved-thinking]
- **Keep the same thinking setting for the whole loop.** The thinking setting says how the model thinks. With adaptive thinking, which the lab uses, the model decides for each request whether to reason and how much. The documentation says it cannot change in the middle of a tool-use loop.
- **You may add, but do not rewrite the past.** You can add a new question at the end. Changing what the model said earlier makes the history untrue, and some of it, like thinking, the API checks.

![A conversation array drawn growing over three calls, as three stacked strips, each longer than the last. Call 1: one entry, the question. Call 2: the question, the model's entry with thinking and a tool call, your results. Call 3, only if the model asks for another tool: the same plus the model's next entry, with thinking and tool call A2, and your result A2. A note says each call sends every entry, unchanged. A fourth strip, labeled edited in red: the question, the model's entry drawn with a dashed red edge, its thinking signature cut short, and result A1, beside a red box, rejected with a 400.](img/chapter-20-array-grows.png)

*Figure 21.8. The array grows by two entries on each tool turn (one on the last), and every one goes back unchanged.*

### Why is a stateless API good news?

A stateless API means the whole conversation is in your hands, on your computer, in a variable you can print. You can log it, test it, replay it and see exactly what the model saw. Your tests in this lab do just that: they replay recorded responses and check, entry by entry, what the loop sent. Nothing is hidden on a server. [21.7](what-a-stateful-mode-hides.md) shows what changes when it is.

### What does sending the whole history cost?

Sending the whole history every time means every turn pays again for everything before it, in tokens and in time. A loop of six turns sends the instructions and tools six times. [21.12](tokens-caching-and-what-a-call-costs.md) shows how caching makes the repeated part cheap.

**At work.** In [Lab 21](lab.md), Task 5, your coding agent runs `npm run break -- cut-signature`, a command that runs one of the lab's scripts. It makes one normal call, cuts short the signature of the thinking block in the model's entry, and sends the second call. You predict what comes back. Then you ask the agent to explain line 73 of the first API's loop file (`messages.push({ role: "assistant", content: response.content })`, where `assistant` is the model's role), or line 79 in Python, and say why the real loop never has this problem: it pushes the content exactly as it arrived.

**The operating rule:** keep the whole conversation in your own array, send all of it on every call, and send back everything the model produced exactly as it came, thinking included.

**Part A in one minute.** An agent in code is a loop: call the model, keep its reply, check why it stopped, run the tools it asked for, return the results ([21.1](what-an-agent-is-in-code.md)). Each tool is a name, a description and a JSON Schema, and strict guarantees only the shape ([21.2](a-tool-is-a-name-a-description-and-a-schema.md)). The stop reason decides what happens next, and only "wants a tool" goes round again ([21.3](one-turn-request-response-and-stop-reason.md)). Every call gets one result, matched by id, failures included ([21.4](running-the-tools-and-sending-back-the-results.md)). And the conversation is an array you own, sent whole every time, with the model's content unchanged (21.5). Now set up the lab and do [Sitting 1](lab.md#sitting-1-the-loop-on-the-first-api-about-2-hours).

[^claude-preserved-thinking]: Preserved thinking, Anthropic.


