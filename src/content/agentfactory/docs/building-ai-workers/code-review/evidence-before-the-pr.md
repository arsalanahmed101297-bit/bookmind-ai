# 15.4 Before the pull request: evidence, not "done" (/building-ai-workers/code-review/evidence-before-the-pr)

---
type: Document
title: "15.4 Before the pull request: evidence, not \"done\""
description: "Before a change goes to anyone else, ask the agent for output you can run again, a comparison of the tests with main, a review by a reader with fresh context, and a short change brief when the risk needs one."
status: stable
order: 315.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:29Z
chapter: "15"
part: III
expert_status: builder-only
concepts: [ "15.4" ]
last_verified: 2026-10-31
sources:
  - id: anthropic-desktop
    title: "Use Claude Code Desktop (Anthropic, accessed 2026-11-02)"
    resource: https://code.claude.com/docs/en/desktop
  - id: openai-code-review
    title: "Code review (OpenAI, accessed 2026-10-31)"
    resource: https://learn.chatgpt.com/codex/code-review
  - id: opencode-commands
    title: "Commands (OpenCode, accessed 2026-10-31)"
    resource: https://opencode.ai/v2/docs/commands/
generated:
  at: 2026-11-23T16:16:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A mechanic who says "the brakes are fixed" gives you a claim. A mechanic who hands you the printout from the brake test, with the measured stopping distance, gives you evidence. And a careful garage has a second mechanic, who did not do the repair, look at the car before you drive away.

**What you will learn.** How to get a second reader for an agent's change, and how to ask for evidence, before the change goes to anyone else.

**Why it matters.** The agent that wrote a change cannot easily see its own mistakes, and nobody can check a claim.

### Who should read the change first?

A second reader who has not seen the work, like the second mechanic. The agent that wrote a change cannot easily see its own mistakes. So before the pull request exists, open a new session and ask it to read the diff. A reviewer that has not seen the session that built the change has **fresh context**: it does not share that session's mistakes.

- **Who it is.** A new session, opened in the same folder. It is not a question in the chat that built the change.
- **What it knows.** The request, and the conditions the change must meet. It does not know the builder's reasoning.
- **What it cannot do.** Edit the files it judges. A reviewer that can change what it reviews is no longer independent.

These words start one:

> You are reviewing a change you did not write. The request: [the request, in one or two sentences]. Review the diff between main and weekend-rule. Report each finding with a file and a line. Change nothing.

### What counts as evidence?

Real output from a check that anyone can run again: the command, what went in, and what it printed. So ask for the printout, not the mechanic's "fixed": "Run the tests. Show me what they print, not a summary." A count of changed lines is not evidence either. A diff shows which lines changed ([15.1](git-through-the-agent.md#how-do-i-read-a-diff)), and only a run shows what the program now does. Tanya saw 31 changed lines. One run of the payment list would have shown her the shorter list.

Real output can still be weak evidence, in three ways:

- **It is not scoped.** It does not say which outputs were run, and which are only assumed to be unaffected. When an agent says "all outputs verified", ask which reports or totals it ran.
- **It is not sourced.** The expected results came from the agent, not from an agreed rule, a calculation by hand or a person's answer ([13.11](../programming-fundamentals/tests-first.md#who-owns-the-expected-results)). If one agent writes the code and its tests from one wrong reading, both agree and both are wrong.
- **It is not current.** Output belongs to the commit it ran on. If a later commit changes the code, the old output is **stale**, out of date, until the checks run again.

### How do I know the tests were not changed?

In [13.11](../programming-fundamentals/tests-first.md#who-owns-the-expected-results) you compared the tests with the commit where you saved them. Before a pull request, ask the agent to compare them with `main`.

Ana asks: "Compare the tests on weekend-rule with the tests on main." The agent's output:

```text
 py/tests/test_weekend.py | 11 +++++++++++
 tests/weekend.test.ts    | 21 +++++++++++++++++++++
 2 files changed, 32 insertions(+)
```

Two new test files, and every `+` is an added line. No test that `main` already had lost or changed a line. That is the answer you want, unless you agreed to a test change.

**At work.** Ana asks for the evidence on `weekend-rule`. The agent shows the tests and the type check passing. The due list for Friday, March 5 prints `8 invoices, total $19,229.53` with the weekend rule off, and `10 invoices, total $33,109.53` with it on. Ana checks the difference against AP's proposal, worked out by hand: two invoices, for $12,900.00 and $980.00, fall due on Saturday, March 6, and the rule moves them to Friday. The comparison of the tests lists only the two new files. Then she opens a new session as the reviewer. Its first finding is in a file the request never mentioned.


### Try it

**Predict, then do it in [Lab 15, Task 7](lab.md#task-7-review-before-the-pull-request-25-minutes).** You will review `weekend-rule` twice: with a fresh-context reviewer in a new session, and with your tool's own review command in the session that built it. Which do you expect to find more, and why? Write your answer, then ask for the evidence and run both reviews in Task 7.

**The operating rule:** accept output you can run again, not a claim. Give the diff to a reader with fresh context before anyone else sees it, and keep a short brief for any change that moves money.

![Two panels. On the left, the claim "Done. All tests pass.", with the questions which version, which checks, and where are the results. On the right, an evidence record for commit b1c6d2f. It says npm test 41 passed, npm run typecheck no errors, and npm run test:py 27 passed. The due list shows 8 invoices and $19,229.53 with the flag off, and 10 invoices and $33,109.53 with the flag on. A note asks for the exact commands, inputs, flags and run logs that make it repeatable.](img/claim-and-evidence.png)

*Figure 15.10. A claim and evidence. Only the right side can be checked by someone else, and only for the commit it names.*

### When does a change need a written brief?

When it moves money, touches data or changes a rule. For such a change, ask the agent to keep a short job sheet in the repository, such as `changes/weekend-rule.md`. This is a **change brief**. It says what the change is for, what it must leave alone, and how to undo it. Tanya asked her agent to "speed up the payment list". That said what should change, but not what must stay the same: the list itself.

A brief also keeps any question the builder cannot answer as an open decision. Whether AP pays weekend due dates on the Friday before is a policy. It belongs to the person who owns the policy, here Dave Kowalski, the controller, not to the agent or the builder.

The brief gives each claim with its command, where the expected result came from, and the commit it ran on. A typo fix needs a one-line description and no brief.

A well-written brief has one danger: reviewers start to trust it and stop checking it. So every claim in it points to a command anyone can run again. Nobody updates the brief after the merge. What lasts is the tests and the history. Never paste a key or private data into it.

### Other words you will meet

| Word | What it means |
| --- | --- |
| `git diff main...weekend-rule -- tests/ py/tests/` | The command the agent runs to compare the tests on the branch with the tests on `main` |
| `PAY_WEEKEND_RULE=on` | The setting that turns the weekend rule on for one run. A setting like this is called a flag ([15.9](after-the-merge.md)) |
| Subagent | A helper that an agent starts with its own fresh context |

### In your tool: the details

Each tool has a second way to start a reviewer with fresh context.

#### Claude Code

*+ New* starts a new session, and you choose the same folder. Or run `/code-review`, which runs in a subagent and shows a *Code review* card.[^anthropic-desktop]

#### Codex

Start a new chat. Or set reviews to *Detached* (Settings, General, Code review), so `/review` runs in its own chat.[^openai-code-review]

#### OpenCode

Start a new session. Or use a command file with `subagent: true`, which runs in a child session.[^opencode-commands]

---

**Next.** [15.5](rules-the-reviewer-reads.md) writes the rules that your fresh reader follows.

[^anthropic-desktop]: Use Claude Code Desktop, Anthropic.
[^openai-code-review]: Code review, OpenAI.
[^opencode-commands]: Commands, OpenCode.


