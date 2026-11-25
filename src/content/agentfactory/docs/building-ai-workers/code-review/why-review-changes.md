# 15.3 Layers of trust: tests, types and review (/building-ai-workers/code-review/why-review-changes)

---
type: Document
title: "15.3 Layers of trust: tests, types and review"
description: "Trust in agent-written code comes in layers, and for each problem a change could have, you name the check that should catch it."
status: stable
order: 315.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.3" ]
last_verified: 2026-10-31
sources:
  - id: anthropic-team-review
    title: "How the Claude Code team does code review (Anthropic, October 15, 2026, accessed 2026-10-31)"
    resource: https://claude.dev/blog/solving-code-review-at-anthropic/
generated:
  at: 2026-11-23T16:16:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** An airport does not ask one guard to inspect every passenger, bag and aircraft. A scanner checks the bags. A gate agent checks the boarding passes. A mechanic checks the engines. Each check catches a different kind of problem. Nobody asks "did one person look at everything?" They ask "which check catches this kind of problem?"

**What you will learn.** How to name, for each problem a change could have, the check that should catch it.

**Why it matters.** Agents write changes faster than anyone can read them, so you have to choose what a person reads.

### What is a review for?

A **code review**, or review, is a check on a proposed change before it joins `main`. It has two goals:

1. **Catch problems before they ship.** A wrong total, a leaked key, a broken rule. Each problem a review reports is called a **finding**.
2. **Keep a shared understanding.** After the merge, someone besides the author knows what changed and why.

When a person wrote every line, a second person could read every line, and that met both goals. When agents write most of the code, nobody can keep up. Either the queue of waiting changes grows without end, or people start approving without reading. The second is worse, because it looks like review.

Cutting review is not the answer either. Time saved in review comes back as time spent fixing what the review missed. So the aim is the least review time that does not raise the number of merged changes you have to undo. The Claude Code team measures that number, the share of merged changes that had to be reverted. If review time drops but reverts rise, the team has cut too far.[^anthropic-team-review]

### What earns trust in code I did not write?

Four checks, each catching what the others miss.

| Layer | What it gives you |
| --- | --- |
| Tests written first | A definition of "correct" that existed before the agent wrote a line ([13.11](../programming-fundamentals/tests-first.md)) |
| Strict types | A check, before anything runs, that each value is the kind the code says ([13.2](../programming-fundamentals/the-workbench.md)) |
| Review | A judgment on what tests and types cannot see: what the change is for, and what else it touches |
| Checks on every change | A promise that the tests and the type checker run every time, and that a failure stops the merge ([15.7](checks-that-block.md)) |

![Four layers stacked. At the bottom, tests written first define expected behavior from approved requirements and fail for the intended reason. Above it, strict type checking catches type errors before the code runs, while outside data is validated at runtime. Above that, human review judges intent, policy, risk and effects elsewhere. On top, required checks run the tests and type checks on each new version. Beside the stack, three steps of test-first evidence: the new test fails for the right reason, the change is made, all the tests pass. A note says commit order alone is not proof.](img/layers-of-trust.png)

*Figure 15.8. Layers of trust. Each layer catches what the others miss. The history shows the tests came first, and their expected values say where they came from.*

### Why must the tests come first?

Because tests written after the code describe what the code does, not what it should do ([13.11](../programming-fundamentals/tests-first.md)). When the agent writes the code and then its tests, both come from one reading of the request, so both can agree and both be wrong.

The history shows the order. These are the two commits of Brightline's weekend change, newest on top:

```text
b1c6d2f Add the weekend rule behind PAY_WEEKEND_RULE, off by default
bfc668f Failing tests for the weekend rule
```

The tests came first, and they failed for the right reason: they call `payBy`, a new function that moves a Saturday or Sunday due date back to Friday, and it did not exist yet. A commit message that says "tests written first" is a claim. The order of the commits is evidence. Then ask where each expected value came from. Here, 10 invoices and $33,109.53 came from AP's proposal, worked out by hand.

### What do types catch that tests miss?

A value of the wrong kind, such as a due date that became a number by mistake. The type checker in strict mode catches that on every change, before anything runs, even in lines no test reaches ([13.2](../programming-fundamentals/the-workbench.md)).

### Which check should catch this?

Ask it of every change: **what could go wrong here, and which check, a machine or a person, should catch it?** This is the airport's question. "Did someone read it?" was only a stand-in for it. Each kind of problem has a check that is best at it.

| Problem | The check that should catch it |
| --- | --- |
| A wrong total or date | A test with an agreed expected value |
| A value of the wrong type | The type checker |
| An existing test weakened | A comparison of the tests with `main`, on every change |
| A key printed or committed | A check that searches every change for keys and passwords |
| A bug in code nobody tested | A review by an AI reviewer that reads the whole change ([15.6](ai-review-on-every-pr.md)) |
| A rule nobody agreed | A person who owns that rule |

A person still reviews, but only what a person can judge. Whether `payBy` moves a Saturday back one day is a question for a test. Whether Brightline wants to pay weekend dates on Friday is a question for a person. Everything a machine can check every time, a machine should check every time.

**At work.** Ana writes this table for her own weekend change.

| What could go wrong | Her check |
| --- | --- |
| A date moved to the wrong day | The four `payBy` tests |
| A wrong total with the rule on | The test for 10 invoices and $33,109.53 |
| The rule switched on by accident | A test that the list is unchanged with the rule off |
| Something else that uses due dates | Nothing yet |

That empty row is why the change also gets a review by an AI reviewer. It is where the bug in [15.6](ai-review-on-every-pr.md) hides.

### Try it

**Predict, then do it in [Lab 15, Task 9](lab.md#task-9-the-agents-change-20-minutes).** The branch `agent-speedup` has three problems: it drops every invoice due exactly on the cutoff day, it edits a test, and it prints a key. Which of them will the type check catch, which will the tests catch, and which will neither? Write your answer, then run every check on that branch in Task 9.

**The operating rule:** for each thing that could go wrong with a change, name the check that should catch it. Give a machine everything a machine can check every time, and give a person only the questions a machine cannot answer.

**Next.** [15.4](evidence-before-the-pr.md) asks the agent for proof that those checks ran.

[^anthropic-team-review]: How the Claude Code team does code review, Anthropic.


