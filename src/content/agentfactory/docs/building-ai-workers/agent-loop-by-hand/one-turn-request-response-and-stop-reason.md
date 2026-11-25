# 21.3 One turn: request, response and stop reason (/building-ai-workers/agent-loop-by-hand/one-turn-request-response-and-stop-reason)

---
type: Document
title: "21.3 One turn: request, response and stop reason"
description: "One turn of the loop: what a request carries, what a response holds, and how its stop reason decides what happens next."
status: stable
order: 321.03
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:23Z
chapter: "21"
part: III
expert_status: builder-only
concepts: [ "21.3" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-21T00:02:23Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**Where this fits.** This is step 3 of the loop, check. A response has come back. How does your program know whether the model is finished, or wants a tool?

**In everyday life.** A courier brings back your package with a slip stapled to it: "Delivered", "Recipient asked for a signature form", "Address incomplete", or "Declined". You do not open the box to find out what happened. You read the slip first, and it tells you what to do next. In this concept, the box is the response's content, and the slip is its **stop reason**.

**What you will learn.** What one round trip to the model carries each way, and how a single label on each reply tells your program what to do next.

**Why it matters.** Your program decides whether to go round again from that label alone. Read it wrong, and a loop stops too early or never stops.

**One request, start to finish.** The lab sends three questions to the first API. Here are the three responses, as neutral sketches. Each response is a list of **content blocks**, pieces of the answer, each with a type.

**Response 1.** "Which invoices are due this week?"

```text
content
  thinking     (the model's working notes. You need not read them, but they go back unchanged, 21.5)
  tool call    id A1   list_open_invoices   {"vendor_id": null, "due_on_or_before": "2027-04-04", "page_size": 10, "page": null}
stop reason    ?
```

*Predict:* why did it stop?

```text
stop reason    wants a tool        (the first API writes it as tool_use)
```

**Response 2.** "List every open invoice with its purchase order and its policy line", sent with a very small limit on output length.

```text
content
  text         "Here is every open invoice with its purchase order and policy line. INV-8301, Midwest
                Packaging Co., $4,825.00, matched to PO-7001 for $4,825.00, which"
stop reason    ?
```

*Predict:* the text stops mid-sentence. Why?

```text
stop reason    out of tokens       (max_tokens)
```

**Response 3.** A question the model will not answer.

```text
content        (usually little or none)
stop reason    declined            (refusal), with a short category and explanation
```

These responses follow the first API's documented shapes, with ids shortened to labels such as A1. They are illustrative, not from a live run, and your own run in [Sitting 1](lab.md#sitting-1-the-loop-on-the-first-api-about-2-hours) gives you real ones to compare.

### What does one turn carry?

Every call in the loop is one **turn**: one request, one response. A request carries three things: the **instructions** (what the worker is, set once and sent every time), the **conversation**, and the **tools**. A response carries the model's content and a **stop reason**, the reason the model stopped writing. One of those reasons needs a word you will use all chapter. A **token** is a small piece of text, often part of a word: "invoices" might be two tokens. You set a limit on how many tokens the model may write, and both APIs count and price everything in tokens ([21.12](tokens-caching-and-what-a-call-costs.md)). This is not the connector's sign-in token from [Start here](overview.md#start-here-what-an-agent-is), which proves who is asking.

The loop's step 3 reads the stop reason and nothing else to decide what to do. Learn the first four rows. The other three are rare, and the loop handles them the same way, by ending:

| Stop reason (in plain words) | What it means | What your loop does |
| --- | --- | --- |
| Finished | The model gave its answer | End the loop. Show the answer |
| Wants a tool | The content holds one or more tool calls | Run them, return the results, call again ([21.4](running-the-tools-and-sending-back-the-results.md)) |
| Out of tokens | It hit the output limit you set, in tokens, mid-answer | End the loop and say the answer was cut short, or raise the limit and ask again |
| Declined | The model would not do what was asked. This is a normal response, not an error | End the loop and show what it said, or send the request to another model. Never retry it unchanged on the same model, as if it were a fault |
| Paused | Tools the provider runs on its own servers (such as a web search it runs for you) ran out of rounds, the number of times it may call them in one response | Only for tools the provider runs itself, which this chapter does not use |
| Hit a stop sequence | It wrote a string you asked it to stop at | This chapter sets none |
| Context window full | While writing, the model reached the most it can hold (its context window). A conversation already too long gets a 400 instead | End the loop. Chapter 26 covers long conversations |

The rule in the first API's own documentation is short: repeat while the stop reason is "wants a tool", and exit on any other. The lab's loop does exactly that (Task 3), so a stop reason it has never heard of still ends the loop safely.

### Declines, rejects or refuses: which is which?

Three words, three meanings. In this chapter, the model **declines** (its stop reason is "declined", a normal answer). The API **rejects** a request that is wrong, with an error such as a 400. And your code **refuses** a tool it should not run. Only the first is the model's choice.

### Is "declined" an error?

A declined request is not an error. The call succeeded. The response arrived with a normal status. Only its stop reason says the model declined. A loop that treats it as a fault and retries will pay to be declined again and again.

![A response drawn as a box labeled content, holding three stacked blocks: thinking, text, tool call. Below the box, and a tag: stop reason. From the tag, seven short arrows fan out to seven endings. Finished: show the answer. Wants a tool: run and return, go round. Out of tokens: cut short. Declined: show it, do not retry. Paused: the provider's own tools only. Stop sequence: none set here. Context full: end the loop. Only wants a tool loops back.](img/chapter-20-stop-reasons.png)

*Figure 21.6. One response, one stop reason. Only "wants a tool" goes round again.*

**At work.** In [Lab 21](lab.md), Task 1, your coding agent sends one question with the tools attached but no need for them, "What is 2 + 2?", shows you the request, and waits before showing the response. You write your prediction in `ports/ch20.md`, your lab notes file. In Task 3, you find the one line that handles all three responses above: line 77 in TypeScript, or 83 in Python, which goes round again only on "wants a tool".

**The operating rule:** read the stop reason before anything else in a response. Loop only on "wants a tool", and treat every other reason as an end.


