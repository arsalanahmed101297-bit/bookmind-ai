# 17.6 Specify, generate, verify (/building-ai-workers/connectors-and-mcp/specify-generate-verify)

---
type: Document
title: "17.6 Specify, generate, verify"
description: "The expert writes the specification and the expected answers, coding agents write the servers, and checks prove they agree."
status: stable
order: 317.06
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T06:58:11Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCDV-F.D8.S1, label: direct }
  - { id: CCDV-F.D8.S2, label: direct }
concepts: [ "17.6" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-05T06:58:11Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Before a kitchen is built, the homeowner and the carpenter agree on drawings, sizes and materials, and on how the work will be checked: doors that close, drawers that run, a level counter. Then anyone qualified can build it, and anyone can check it.

**What you will learn.** How to specify a connector with the person who owns the data, have agents write it, and check it by what it does.

**Why it matters.** An agent writes working code quickly, but only the expert knows what correct means for this data.

**One request, start to finish.** Before any code exists, Ana writes down one question and the answer she expects: "Does INV-8303 match its PO?" Expected answer: no, PO-7003 is $12,000.00 and the invoice is $12,900.00, so it is $900.00 over. A coding agent then writes the connector. At the end, a test does what Ana's app would do: it calls `get_purchase_order` with `INV-8303` and checks that the reply says $12,000.00, $12,900.00 and $900.00 over. Later, you also type Ana's question into a real AI app and read its answer. Now there are two answers to compare, the connector's reply and the app's answer, and each can be right or wrong:

- **The connector's reply is wrong:** fix the code, or talk to Ana again if the contract was unclear.
- **The reply is right but the app's answer is wrong:** the model picked or read badly, so improve the tool's description or the reply's wording.
- **Both are right:** the check passes.

The code never decides what is right.

### Who does which part of the work?

A coding agent can write a connector in minutes. It uses the official MCP code library for its language, ready-made code that handles the messages from [17.1](mcp-in-one-picture.md). What it cannot know is what the connector must say, refuse, and never return. Only the expert knows that. So the work has three steps, in this order:

1. **Specify, with the expert.** The contract is a short document. For each tool it says: its job, its inputs, its outputs, the exact words of each error, and what it must never return. Above the tools, it lists rules for the whole connector, such as "read-only" and "only the last four digits of a bank account". With it come the **acceptance checks**: real questions and the answers the expert expects. The builder adds the exact tool call that should answer each one, so each can run as a test. Brightline has eight, named A1 to A8. Ana's INV-8303 question is A5.
2. **Generate.** A coding agent writes the tests first, from the contract. They fail at the start, because no connector exists yet. Then it writes the connector until they pass. Have the agent commit the tests before it writes any code. When it finishes, compare the test files with that commit, using the diff from [Chapter 15](../code-review/git-through-the-agent.md). If a test changed, ask why. Changing a test to make it pass, instead of fixing the code, is cheating.
3. **Verify, by what it does.** You trust the code because it gives Ana's answers, not because it looks right. Three checks do this. You call the connector yourself, with a small app called an **inspector** that sends one request and shows the raw reply. Each version runs its own tests. And a **conformance suite**, one shared set of tests that a third coding agent writes from the contract, runs against every version and every copy, and fails on any difference. On your computer it starts two copies of each version, each at its own port, and sends page two to the copy that did not answer page one.

After the checks pass, a reviewer reads the code as in Chapter 15.

### Why build it twice?

A second coding agent writes a second version, in Python, from the same contract. As the overview said, two versions that agree show the contract was clear, and the acceptance checks show the answers are Ana's. Two languages mean the agents cannot copy each other's code. They also mean two different MCP code libraries, so a quirk in either one shows up. Brightline's AI apps use the TypeScript version. The Python version stays as the check, and can be put online too. For a small connector you build once, one version plus the acceptance checks is enough. A second version is worth the work when many people depend on the answers, as Brightline's AP team does.

### Which differences between the two versions are harmless?

The two languages' MCP libraries sometimes write the same thing in two ways, the way one person writes "1,000" and another "1000". The conformance suite ignores such differences, and each one it ignores is written down with a reason. Brightline has four main kinds, plus a few smaller ones. None changes what a tool accepts in practice or what it answers. Everything else must match exactly: tool names, the order of the tools in the list, descriptions, input names, and answers. Field guide [F8](field-guide-connectors.md#f8-the-protocol-in-detail) lists the four main kinds and why each is harmless. The smaller ones are listed in a comment in the suite's code.

**At work.** The first conformance run fails on those four kinds of difference. The builder has the agent write down each one, with its reason. The next run on your computer passes all 78 tests in the suite. They include Ana's eight acceptance checks, run on both versions, each page of a list sent to a different copy, the refusals from [17.8](securing-a-remote-server.md), and the two tool lists compared name by name. Then the builder changes one word in one Python description, and the suite fails. That proves it really catches differences.

**The operating rule:** write the contract and the acceptance checks with the expert before any code. Let agents write the tests and then the code. Accept a version only when it gives the expert's answers.

![Three columns. With the expert: the contract, with each tool's job, inputs, outputs, exact errors and never-returns, and eight acceptance checks, each a question and an expected answer with its call. In the middle, three kinds of evidence: an inspector for one call by hand, each version's own tests, and a conformance suite that runs both versions, two copies each, and fails on any difference. By coding agents: tests first, then a TypeScript version and a Python version, then code review in a fresh context.](img/specify-verify.png)

*Figure 17.11. The expert's documents on one side, the agents' code on the other, and three kinds of checks between them.*


