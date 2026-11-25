# Check yourself (/building-ai-workers/agent-sdks/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: the flashcards, sixteen questions with outline answers, and a final quiz round."
status: stable
order: 322.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:35Z
chapter: "22"
part: III
expert_status: builder-only
concepts: [ "22.1", "22.2", "22.3", "22.4", "22.5", "22.6", "22.7", "22.8", "22.9", "22.10" ]
chapter_quiz: true
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:35Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Each question is tagged with the concept it tests. An outline answer follows each one. For a scored check, take the quiz below. It mixes the questions from this chapter's pages and asks 10 at a time. Zia Tutor AI holds a larger bank for practice.

1. **[22.1](from-your-loop-to-a-library.md)** Name the four rungs, and what each takes over. *Your loop (nothing) and a tool runner (the loop). Then an agent SDK (the loop, the tools, the conversation, in your process), and a hosted runtime (all three, on the provider's servers).*
2. **[22.2](the-map.md)** What three kinds of answer go in an SDK column of the mapping table? *It does it (with the option), it does it differently (with the difference), or still yours.*
3. **[22.3](one-run-start-to-finish.md)** Name the four things to collect about every run. *What the run was given, each model reply, each tool call and result, and how it ended and what it cost. Check which ones your SDK reports, and write the rest yourself.*
4. **[22.4](tools-and-where-each-call-runs.md)** Why turn off every built-in tool for an AP worker? *It needs none of them, and each is a way for an injected instruction to reach the computer.*
5. **[22.4](tools-and-where-each-call-runs.md)** Who runs a tool call when your process connects to the server, and when a hosted tool is used? *Your process, and the provider's service, out of your sight.*
6. **[22.5](who-may-run-a-tool.md)** Name the layers a tool call passes, in order. *Code around every call, fixed rules, the general setting, the allow list, then your rule.*
7. **[22.5](who-may-run-a-tool.md)** How does an approval differ from a permission callback? *A callback is asked, answers, and the run carries on at once. With an approval the run pauses and hands the call back to your code. Your code can decide now or later and then resume the run from its saved state.*
8. **[22.5](who-may-run-a-tool.md)** A hook throws an error. Does the tool still run? *On the first SDK, by default yes. A hook that must block must be set to block on failure.*
9. **[22.6](what-counts-as-done.md)** Can a guardrail check that a citation is the right line? *No. It checks the shape of the answer, not its truth.*
10. **[22.6](what-counts-as-done.md)** Which limit does neither SDK keep for you? *The time limit.*
11. **[22.7](where-the-conversation-lives.md)** Name the places a conversation can live, from yours to theirs. *In your program, a file or store on your side, a conversation on the provider's side, a chain of replies on the provider's side, or nowhere after the run.*
12. **[22.7](where-the-conversation-lives.md)** Your program restarts. With session files off, what is left of the conversation, and with the history kept in your program? *With session files off, nothing. With the history in your program, only what your code saved.*
13. **[22.8](where-traces-go.md)** You point an SDK at a model on your own computer, with its tracing on by default. Where can the traces go? *Still to the provider. The SDK's default trace address does not change when the model's does. Turn tracing off, or send traces through a processor you choose.*
14. **[22.9](what-an-sdk-still-leaves-to-you.md)** Name four things an SDK in your own process still leaves to you. *Any four of: the process and, for some, a disk, the sandbox, what it inherits, credentials, where transcripts and traces live, cost and time, upgrades, what counts as done.*
15. **[22.9](what-an-sdk-still-leaves-to-you.md)** Name the five verbs of harness engineering, and one place you used each in this chapter. *Constrain (the tool list, your rule, the limits), inform (instructions and tool descriptions), verify (the answer check), correct (the denial message), escalate (the approval that hands the call back).*
16. **[22.10](how-todays-tools-realize-it.md)** State the invariant in one sentence. *An SDK may supply defaults for tools, limits, state and what counts as done, but the owner still chooses, checks and enforces the rules the business needs.*


