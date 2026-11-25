# 22.4 Tools: which the worker can see, and where each call runs (/building-ai-workers/agent-sdks/tools-and-where-each-call-runs)

---
type: Document
title: "22.4 Tools: which the worker can see, and where each call runs"
description: "The four kinds of tool and who runs each call, why a worker gets only the tools its job needs, and the four boundaries around a tool call."
status: stable
order: 322.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:36Z
chapter: "22"
part: III
expert_status: builder-only
concepts: [ "22.4" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A new accounts clerk gets a laptop set up for developers, full of apps. The manager has it wiped back to two things: the payments system and the policy manual. In this concept, the developer apps are an SDK's built-in tools, and the two things are the tools you choose.

**What you will learn.** Which tools a worker can see, who runs each call, and why turning tools off is only one of the checks that keep a worker in bounds.

**Why it matters.** A tool the job does not need can still be called, by the model or by text hidden in a tool's output.

**One request, start to finish.** Ana asks: "What is today's exchange rate for the euro?" The worker has no reason to know. On the first SDK with its built-in tools on, the worker saw dozens of tools, among them a shell, and the model asked for it. The permission rule ([22.5](who-may-run-a-tool.md)) denied it. With the built-in tools off, the worker saw its five tools, and said at once it could only work with Brightline's records. The second SDK has no built-in tools on by default.

### What kinds of tool can a worker see?

A worker sees one list of tools. Each tool is one of four kinds, and for each you must know who runs the call:

| Kind of tool | Where it comes from | Who runs the call |
| --- | --- | --- |
| **Built-in tool** | The SDK itself, because it was built for something else, such as coding | The SDK, on your computer |
| **Your own tool** | A function in your program, with a name, a description and a schema (Chapter 21.2). A harness may serve it through an **in-process server**, a small MCP server inside your own program | Your program |
| **An MCP server your process connects to** | You name its address and its token | Your process, over MCP, as in Chapter 21 |
| **A hosted tool** | You name it, such as your connector, and the provider's service calls it | The provider, out of your sight |

### Does an AP worker need the built-in tools?

Give a worker only the tools its job needs. An AP worker needs none of the built-in tools. Each one is a way for an injected instruction in tool output ([Chapter 17](../connectors-and-mcp/untrusted-output.md)) to reach your computer. Turn them all off, then read the tool list the run reports, to check.

### Is the tool list the only boundary?

The tool list is one boundary, not the only one. Four separate checks keep a worker in bounds, and each stops a different bad call. The tool list decides what the model can ask for. The permission check decides whether this call may run (22.5). The connector's own check decides whether the token allows it ([Chapter 19](../business-data-and-retrieval/one-company-per-transaction.md)). A **sandbox**, a place a program runs with limited reach, decides what a running call can touch ([22.9](what-an-sdk-still-leaves-to-you.md)). Turning the built-in tools off shrinks only the first.

![Four nested boxes around one tool call, drawn in gold at the center, from inside out: the tool list, what can the model ask for. The permission check, may this call run. The connector's check, is this token allowed. The sandbox, in production a container, what can a running call reach. Beside the boxes, outlined in red-orange, four bad calls, each stopped at a different box: run the shell, by the tool list. flag_invoice for ALL, by the permission check. Another company's invoices, by the connector. A call that tries to read your files, by the sandbox when the worker runs in a container.](img/chapter-21-boundaries.png)

*Figure 22.4. Four boundaries, not one. Each stops a different bad call.*

### Where should each tool call run?

Keep tool calls in your own process unless you have a reason. Then Step 4 of your loop stays where you can see it, trace it and test it. A hosted tool is faster, but the call and its result happen on the provider's side, the connector must be reachable from the internet, and the provider holds the token. The lab keeps every call in your process, with the test token in a header, as in Chapter 21.

![Two panels. Left panel, labeled what the model sees: three groups feed one list of tools. Built-in tools, with a switch set to off. Your own tool, flag_invoice. The connector, over MCP with the token in a header, offering four tools. The list, in gold, shows five names. Right panel, labeled who runs the call: two lanes. Top lane, your process connects to the connector, labeled you see each call and result. Bottom lane, the provider's service connects to it, labeled faster, and out of your sight.](img/chapter-21-tools.png)

*Figure 22.5. One list of tools, and who runs each call. In this lab, your process does.*

### What are agents as tools, and handoffs?

One agent can be offered to another as a tool, and only its answer comes back. A **handoff** passes the whole conversation to another agent: the model sees it as one more tool, and the SDK switches agents when it is called. This worker uses neither. Chapter 27 designs systems of agents.

**At work.** [Lab 22](lab.md), Task 5: the same question with the built-in tools on, then off.

**The operating rule:** give a worker only the tools its job needs, and read the tool list each run reports. Say in writing who runs each tool call and who holds its token, and keep the calls in your own process unless you have a reason to move them.


