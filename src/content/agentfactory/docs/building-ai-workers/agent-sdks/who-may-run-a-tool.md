# 22.5 Who may run a tool (/building-ai-workers/agent-sdks/who-may-run-a-tool)

---
type: Document
title: "22.5 Who may run a tool"
description: "Authorization in layers, and one rule you write in two shapes: a permission callback that answers at once, and an approval that hands the call back to resume later."
status: stable
order: 322.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-20T11:28:25Z
chapter: "22"
part: III
expert_status: builder-only
concepts: [ "22.5" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-20T11:28:25Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A company's expense rules work in layers. Some claims are allowed in advance, such as a taxi from the airport. Everything else goes to the finance team, which either decides on the spot or puts the claim in a tray for later. Either way, it applies the same rule. In this concept, the allowed list is the allow list, deciding on the spot is a permission callback, and the tray is an approval: the claim leaves the desk and comes back later.

**What you will learn.** How every tool call is checked in layers, and how one rule you write can decide a call at once, or later, after the run has stopped.

**Why it matters.** A tool that changes something must be decided by your rule, not by a setting an SDK picked for you.

**One request, start to finish.** Ana asks: "Flag every invoice for review." The model asks for `flag_invoice` with the invoice number `ALL`. One rule decides on both SDKs: `flag_invoice` may run only for one invoice, named as INV- and four digits, with a reason of at least ten characters. `ALL` fails.

1. **The first SDK asks at once.** It calls your function, a permission callback, which applies the rule and denies the call with a message. The run carries on at once.
2. **The second SDK hands it back.** The tool needs an approval, so the run pauses and returns the pending call to your code. Your code applies the same rule, rejects the call, and starts the run again from where it stopped. It could do that tomorrow.
3. On both, the model reads the message, and nothing is flagged. "Please flag INV-8316 for review" is allowed on both.

### What decides whether a tool may run?

**Authorization** is deciding, by rules, whether a tool call may run. An approval is one way to do it later: the run pauses and hands the call back, and **resuming** starts it again from where it stopped. Either way the same rule decides.

### In what order is a tool call checked?

Every tool call is checked before it runs, in layers. Not every SDK has all five. The first SDK has all of them. The second SDK has no permission modes: it has your tool list, approvals, and checks on each tool's input (code that checks a call's arguments before it runs).

| Layer | What it does | In this lab |
| --- | --- | --- |
| **Code around every call** | A **hook**: your code, run at a set moment, such as before every tool call. It may watch, change the input, or decide | One hook on the first SDK, which only logs |
| **Fixed rules** | Tools that are always denied, or always sent to your rule | None set |
| **A general setting** | The SDK's **permission mode**: its general answer for calls nothing else has decided | The lab names the mode `default`. Despite its name, this mode decides nothing itself: it passes every undecided call on, so your rule gets the final say |
| **The allow list** | Tools that run without asking. Chapter 21's allow list, of every tool that may run, is now the tool list ([22.4](tools-and-where-each-call-runs.md)) | The connector's four read-only tools |
| **Your rule, for everything else** | A callback that answers at once, or an approval that hands the call back | Rule 1, `decideTool()`, used by both SDKs |

The layers decide in turn, and a deny ends it. An allow from a hook is not the last word: the call still meets the fixed rules, so a tool that is always denied stays denied. The read-only tools stop at the allow list, so your rule never sees them. Only the tool with an effect reaches your rule, which is what the lab wants. The allow list also keeps out tools you did not name, such as `next_invoice_page`, which [Chapter 20](../mcp-apps/hidden-is-not-protected.md) marked for its screen only. An agent SDK may offer the model every tool a connector lists, so name the tools you want.

### When should the run hand the call back?

A callback suits a decision your code can make at once. An approval suits a decision a person must make, though the lab's second SDK uses one for its rule too, the shape that SDK is built for ([22.10](how-todays-tools-realize-it.md)). The run pauses and hands you the pending call, called an **interruption**, and its **run state**, a record of where it stopped. You can save the run state as text, so a manager can approve tomorrow, even after your program restarts. Resuming sends back approve or reject, and starts the run again from its saved state. Keep a saved run state as carefully as the conversation inside it ([22.7](where-the-conversation-lives.md)).

Write the rule once, as a plain function with tests, and call it from either shape.

### Which three defaults should you say out loud?

- **Name the setting yourself.** If you leave it out, some SDKs take it from the settings files on the computer, or use a mode where a second model judges each call for you. Either way, your rule might not be the one deciding.
- **Never use a setting that skips every check.** The lab's `AGENTS.md`, the rules file your coding agents follow, forbids it.
- **A hook that fails may let the action go ahead.** On the first SDK, a hook that throws an error does not stop the tool by default. A hook that must block has to be set to block on failure.

![One tool call entering at the top, flag_invoice with ALL. It passes down through layers in order: code around every call, which logs it and passes it on. Fixed rules, none, pass. The general setting, no decision, pass on. The allow list, not listed, pass on to your rule. Your rule, in red-orange, asks one invoice with a reason, and says no. An arrow labeled denied, with a message, goes to a box: to the model, an error result. A note at the side: the four read-only tools stop at the allow list and never reach your rule.](img/chapter-21-order-of-checks.png)

*Figure 22.6. The layers of checks for one tool call. A deny ends it, and a hook's allow still meets the fixed rules.*

![Two lanes for the same rule. Top lane, labeled answers at once: a run reaches a tool call to flag_invoice, a box labeled your rule decides, and the run goes on at once. Bottom lane, labeled hands the call back: the run reaches the same tool call and stops at a box labeled run paused, state saved. An arrow down to a box labeled your rule, approve or reject, now or later. The lane continues, labeled started again from the saved state. Beside the lanes, one box labeled one rule, one test, used by both.](img/chapter-21-two-shapes.png)

*Figure 22.7. One rule, two shapes: a callback that answers at once, and an approval that hands the call back.*

**At work.** [Lab 22](lab.md), Tasks 6 and 7: you write rule 1 in plain words, then watch both SDKs use it. The optional Task 8 shows the hook.

**The operating rule:** let only read-only tools run without asking. Send every tool with an effect through one rule you wrote in words and tested in code, called from a callback or an approval. Name the permission setting yourself, and never use one that skips the checks.

**Part B in one minute.** Collect four things about every run, whichever way the SDK reports them ([22.3](one-run-start-to-finish.md)). Keep only the tools the job needs, and remember the tool list is one boundary of four (22.4). Authorization decides each tool call in layers. One rule you wrote decides, as a callback that answers at once, or as an approval that hands the call back (22.5). Now do Sitting 2.

**Now do Lab 22, Sitting 2** on the lab page: Tasks 3 to 7 (about 2 hours 5 minutes), and the optional Task 8 (15 minutes more). Then come back for Part C.

**Checkpoint 2: what it can do without asking.** Before Part C, check that you can do these without looking back.

- Name what a run reports, as a stream and as a result with history, and which line of your loop each part replaces (22.3).
- Say what turning the built-in tools off does, why a worker should not carry a shell, and who runs a hosted tool's call (22.4).
- Give the layers of checks in order, say why the read-only tools never reach your rule, and say how a callback and an approval differ (22.5).


