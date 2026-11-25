# Check yourself (/building-ai-workers/agent-loop-by-hand/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for the whole chapter: the flashcards, twenty-one questions with outline answers, and a final quiz round."
status: stable
order: 321.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:23Z
chapter: "21"
part: III
expert_status: builder-only
concepts: [ "21.1", "21.2", "21.3", "21.4", "21.5", "21.6", "21.7", "21.8", "21.9", "21.10", "21.11", "21.12", "21.13", "21.14" ]
chapter_quiz: true
last_verified: 2026-11-05
generated:
  at: 2026-11-21T00:02:23Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Each question is tagged with the concept it tests. An outline answer follows each one.

1. **\[[21.1](what-an-agent-is-in-code.md)\]** Ana's question needs one tool call. How many model calls does the loop make, and why not one? *Two: one that asks for the tool, and one that reads the result and answers. The model cannot run the tool in between.*
2. **[21.1]** Name the three decisions that belong only to your code. *Whether each tool runs, what the conversation contains, and when the loop stops.*
3. **\[[21.2](a-tool-is-a-name-a-description-and-a-schema.md)\]** A strict schema accepts `{"po_number": null, "invoice_number": "INV-8330"}`. Is the input correct? *Its shape is. Whether INV-8330 exists, and whether this person may see it, is for the handler and the connector to check.*
4. **[21.2]** Why is an optional filter written as a required field that may be null? *So the model always says, explicitly, "no filter".*
5. **\[[21.3](one-turn-request-response-and-stop-reason.md)\]** A response stops with "declined" and status 200. What does the loop do? *Ends, and shows what the model said, or sends the request to another model. It is an answer, not an error, so it is never retried unchanged on the same model.*
6. **[21.3]** Why does the loop check for "wants a tool" rather than for "finished"? *Because any other reason, including one it has never heard of, should end the loop safely.*
7. **\[[21.4](running-the-tools-and-sending-back-the-results.md)\]** The model asked for two tools and one threw an exception. What goes back? *Two results, matched by id, all together and first, the second marked as an error with the message.*
8. **\[[21.5](the-conversation-is-an-array-you-own.md)\]** Why does changing a thinking block break the next call? *With tool use, the thinking that came with a call must go back complete and unmodified. The API checks it.*
9. **[21.5]** What does statelessness give you that is worth its cost? *The whole conversation is in your program, so you can print, log, test and replay exactly what the model saw.*
10. **\[[21.6](the-same-loop-different-shapes.md)\]** Name four differences in how the second API carries a tool call. *The call is an item of its own, the arguments are a JSON string to parse, the result is an item of its own with no error flag, and results are added after the calls rather than together in one entry (the rows marked ★ in 21.6).*
11. **[21.6]** Why are the arguments parsed inside the `try`? *So broken JSON becomes an error result the model hears about, not a crash.*
12. **\[[21.7](what-a-stateful-mode-hides.md)\]** What does a stateful mode save, and what does it not? *It saves resending the history. It does not save paying for it, on the second API. And it hides what the model saw.*
13. **\[[21.8](the-stops-you-add-yourself.md)\]** Name the three stops your loop adds, and why each is checked before the call. *Turn limit, cost cap, time limit. Before the call, so a new call never starts past a limit, though the call under way can cross the cap.*
14. **\[[21.9](when-the-loop-goes-wrong.md)\]** A call fails with 400. Should it be retried? *No. The request itself is wrong. Read the message, fix it, and record the request id.*
15. **[21.9]** Which failures does the SDK retry for you? *Connection errors, 408, 409, 429 and 500 and above, twice by default, with backoff.*
16. **\[[21.10](reading-a-trace.md)\]** A trace shows every span succeeded. Is the answer right? *Not necessarily. A trace proves what ran, not that the answer was right.*
17. **[21.10]** An answer cites a policy line, and its trace has no `execute_tool search_policy` span. What do you conclude? *The worker never searched the policy, so the citation did not come from a search.*
18. **\[[21.11](streaming.md)\]** When may a streamed tool call's input be parsed? *Only when its block stops, after the pieces are joined.*
19. **\[[21.12](tokens-caching-and-what-a-call-costs.md)\]** Why does caching suit the loop so well? *Every turn resends the same instructions, tools and earlier conversation, so the repeated start can be read from the cache.*
20. **\[[21.13](versions-models-and-keys.md)\]** After an upgrade, a sample fails with a 400 about `temperature`. What changed, and how would pinning have shown it? *The SDK's new major sent a newer API version that rejects `temperature`. In typed code, the new SDK has no such option, so the type check fails before any call. The pinned versions in the lock file show the jump.*
21. **\[[21.14](how-todays-tools-realize-it.md)\]** State the invariant in one sentence. *The model only asks. Your code decides whether to run each tool, owns the whole conversation, and decides when the loop stops.*


