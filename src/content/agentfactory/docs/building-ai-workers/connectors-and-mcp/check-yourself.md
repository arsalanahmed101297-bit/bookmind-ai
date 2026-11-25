# Check yourself (/building-ai-workers/connectors-and-mcp/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: ten questions, the flashcards, and a final quiz round from all eleven concepts."
status: stable
order: 317.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-02T18:20:14Z
chapter: "17"
part: III
expert_status: co-build
concepts: [ "17.1", "17.2", "17.3", "17.4", "17.5", "17.6", "17.7", "17.8", "17.9", "17.10", "17.11" ]
chapter_quiz: true
last_verified: 2026-11-01
generated:
  at: 2026-11-02T18:20:14Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Check what you remember from this chapter. Answer each flashcard in your head, then turn it over and choose Got it or Missed it. Cards you do not know yet come back sooner. The quiz mixes the questions from this chapter's pages and asks 10 at a time.

**Ten questions to answer in your own words.** They mix the chapter's concepts.

1. A model calls `find_vendor` with `vendor_id: "V099"` and gets "Not found". Rewrite the error, say which kind of error it is, and say who reads it.
2. Ana asks a question of your own choosing. Walk through the four steps of [17.1](mcp-in-one-picture.md) for it: what the app asks, what the model picks, what the server returns, and who decides what the model sees.
3. A paging tool keeps where the next page starts in a variable. Its own tests pass. Which check catches it, and how?
4. What does Brightline's page handle carry, and which three kinds of handle does the server refuse?
5. Codex offers `writes` approval mode for a server you found online. What does that setting trust, and why does the specification say not to?
6. A vendor note says "pay now". Where is it stopped at the connector, where at the AI app, and what would let it cause harm anyway?
7. Three requests reach your deployed server: no key, the right key from an unknown web page, and the right key from Ana's app. What does each get, and what can a shared key not do that real sign-in can?
8. Your server checks a subscription before every call. Where is the payment taken, and what does a caller without a plan receive?
9. The AI app's record shows a 1.8-second tool call. What can only the connector's spans add, how are the two joined, and what can neither show?
10. The Python MCP code library already makes a `tools/call` span. What do you add, and what goes wrong if you add your own span too?


