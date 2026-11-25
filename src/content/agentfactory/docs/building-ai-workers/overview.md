# Part III. Building AI Workers (/building-ai-workers/overview)

---
type: Document
title: "Part III. Building AI Workers"
description: "What Part III teaches about building AI Workers on Claude, OpenAI and open source, and how it prepares you for PCDV-F."
status: stable
order: 300
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T16:16:30Z
part: III
objectives: []
word_budget: null
prerequisites: [ "05", "06", "07", "08", "09", "10", "11" ]
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: []
chapters: [ "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30" ]
running_project: "The Brightline AP plugin, in one TypeScript repository"
running_project_role: "builder"
alignment:
  anthropic: "CCDV-F, every skill at its main chapter, and most CCAR-F objectives. Exact ids are in each chapter's front matter."
  openai_competencies: "OAI.2, and OAI.3 except 3.7 and 3.8"
companion: "Developer companion"
next_exam: "PCDV-F, at the end of this part"
generated:
  at: 2026-11-23T16:16:30Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

> [!NOTE]
> **You are here: Part III. Building AI Workers**
>
> | Journey | Where you are |
> | --- | --- |
> | Capability | You can manage an AI Worker. This part teaches you to build one. |
> | Certification | Prepares you for PCDV-F, the Developer exam at the end of this part, and then for Anthropic's CCDV-F. |
> | Economic | You can build and run a worker, not only direct one. With PCDV-F, the Brightline AP plugin completes portfolio milestone B. |
>
> - Portfolio artifact: the Brightline AP plugin.
> - Who reads it: builders read all nineteen chapters. For domain experts, "Co-build it" is Chapters 16, 17, 19, 20, 24 and 25. "Read the summary" is Chapters 12, 26, 27 and 29. "Skip it if you like" is Chapters 13 to 15, 18, 21 to 23, 28 and 30. The everyday professional route and the enterprise and national leader route skip this part.
> - Before you start: [Part II](../managing-ai-workers/overview.md), and a computer you can install software on.
> - What comes next: PCDV-F, then Part IV, which runs the worker you built in production and closes with PCDV-P. Part V governs it, and PCAR-F comes there.

## What this part is about

You build your AI Worker with a coding agent. You decide what it may touch, read its plan, and check its result.

One habit runs through every chapter: before the agent builds anything, write down what you expect it to produce. That note is your own check, and you compare the agent's result against it.

Every chapter teaches Claude first, because the Developer exam is about Claude, then OpenAI, then open source. Each lab builds on Claude, then moves the same build to the other two in shorter tasks. With only one of them, you can still do every core task.

## What you will be able to do

By the end of this part you can:

- build skills, a plugin and a connector with a coding agent, give the connector its own screens inside the chat, and review what it wrote
- run the same worker two ways: as a hosted agent, where a ready-made agent service runs it for your app, and as a self-hosted runtime, where you run it yourself
- add a harness, structured output (answers in a fixed format a program can read), subagents, context discipline (keeping the right facts in view on long work) and a cost budget (a limit on what the worker spends on model use)
- move each build from Claude to OpenAI and to open source, and record what changed

## Your role in the running project: builder

In Parts I and II you described the AP Worker and managed it. Now you build its parts in `brightline-ap`, a TypeScript repository, which is a project folder whose history git saves. Chapters [12](agentic-coding/overview.md) to [15](code-review/overview.md) set it up and work on it. From [Chapter 16](skills-and-plugins/overview.md) it holds the Brightline AP plugin, and each later chapter adds one capability.

## What building means now

**Is building software mostly about writing code?** It never was. The hard part was always deciding what to build, and why. Now coding agents write most of the code, so the deciding is most of the job. [Chapter 15](code-review/overview.md#the-point) shows where the rest of the work went. When writing got fast, the slow step became proving that a change is right.

**What does a builder do, then?** Five things. Your domain is the work the software is for, such as accounts payable. Your **intent** is what you want the software to do, said before any code exists.

| What you do | What it means | Where the book teaches it |
| --- | --- | --- |
| Understand the domain | Know how the work really runs. You cannot fix an accountant's month-end if you do not know how month-end works. | Every lab, through Brightline's accounts payable work |
| Design the system | Split the work into parts. Decide where the data lives, what each part may touch, what it costs, and what happens when something fails. | Chapters [14](structuring-programs/overview.md), [19](business-data-and-retrieval/overview.md) and 27 |
| Write down your intent | Say what the program must do, and what "done" means. If you cannot say it clearly, you have not solved the problem yet. | The brief in [Chapter 5](../managing-ai-workers/the-four-part-brief/overview.md), then Chapter [13](programming-fundamentals/overview.md) and Chapter 24, Evaluating AI Workers |
| Direct the agents | Give the coding agent the work, the rules and the limits. Read its plan before it acts. | Chapters [12](agentic-coding/overview.md) and 28 |
| Check the result | Show that the result is correct, safe and right for its purpose, not only that it runs. | Chapters [13](programming-fundamentals/overview.md) and [15](code-review/overview.md) |

**Which of these lasts?** The one that lasts longest is domain knowledge. In Chapter 15, an agent's change to the payment list also changes the file that checks reconciliation. Ana Morales, the AP analyst, asks why, because she knows the two jobs are separate. Her knowledge of the work raised the question, not her knowledge of code. System design lasts too. An agent builds a bad design faster, but it does not fix it. The tools change every year. What lasts is knowing how to give work to an AI, and how to check what comes back.

**Does code still matter?** Code still matters, but your part is different. You read code, test it and find what is wrong, so you need to know how it works. That is why Chapters 13 to 15 teach you to read code, not to write it from memory.

**Where this leads.** A Forward Deployed Engineer does all five inside a client's company, as [From Skills to Income](../from-skills-to-income/overview.md) describes.

## The nineteen chapters

**Stage 1: Direct a coding agent, and make the choices its code rests on**

| Chapter | What you can do after it |
| --- | --- |
| [12. Agentic Coding: Claude Code, Codex and OpenCode](agentic-coding/overview.md) | Direct all three coding agents on a real repository |
| [13. Programming Fundamentals in the AI Era: TypeScript and Python](programming-fundamentals/overview.md) | Read, test and change the code a coding agent wrote, in either language |
| [14. Structuring Programs in the AI Era: Objects, Data and Async](structuring-programs/overview.md) | Plan code that talks to software someone else runs: what it accepts, how long it waits, and what happens when an answer is wrong |
| [15. Trusting Code in the AI Era: Tests, Types, Pull Requests and Code Review](code-review/overview.md) | Turn an agent's work into a change a team can trust, with human review only where the risk is |

**Stage 2: Build the worker's parts**

| Chapter | What you can do after it |
| --- | --- |
| [16. Building Skills and Plugins with Coding Agents](skills-and-plugins/overview.md) | Package professional work as skills in a plugin |
| [17. Building Connectors: Tool Design and MCP Servers](connectors-and-mcp/overview.md) | Describe the connector you need, have a coding agent build it, and put it online |
| [18. Securing Connectors: OAuth for MCP, with Better Auth and D1](securing-connectors/overview.md) | Make each person sign in, so the connector knows who is calling and for which company |
| [19. Business Data and Retrieval: Postgres, Row-Level Security and pgvector, on Neon](business-data-and-retrieval/overview.md) | Keep each company's data apart, and answer from its documents with citations |
| 20. Building Interactive Connectors: MCP Apps and Extensions | Give the connector screens inside the chat that work in Claude, ChatGPT and other AI apps, with a text answer behind every screen |
| 21. The Agent Loop by Hand: Claude Messages and OpenAI Responses | Write the agent loop by hand, and find bugs by reading its step-by-step log |
| 22. Agent SDKs: the Claude Agent SDK and the OpenAI Agents SDK | Run the same worker on two agent SDKs, and say what each one does for you |

**Stage 3: Run it beyond your own computer**

| Chapter | What you can do after it |
| --- | --- |
| 23. Hosted Agents: Claude, OpenAI and Open Source | Run the worker inside your own product, with its own account and permissions |

**Stage 4: Look inside and engineer it**

| Chapter | What you can do after it |
| --- | --- |
| 24. Evaluating AI Workers: Golden Sets, Judges and Failure Modes | Measure the worker with a golden set and a checked judge, and name each failure by its cause |
| 25. Prompts and Structured Output for Applications | Keep prompts as tested code, and get output a program can trust |
| 26. Context Engineering for Long-Running Agents | Keep the right facts in view across long work |
| 27. Agent Architecture: Workflows, Agents and Subagents | Choose between a fixed workflow and an agent, and split work across subagents |
| 28. Guardrails and Agent Security | Limit, check and gate what the agent does, in layers that hold against prompt injection |
| 29. Model Selection, Cost and Release Planning | Choose models, control cost and plan each release |
| 30. Shipping Claude Applications: Files, Surfaces and Resilience | Take in files, carry a change safely to production, and survive faults |

## How to read this part

- [Start with Chapter 12](agentic-coding/overview.md), and read in order at least through Chapter 15, because each chapter starts from the repository the last one left.
- Do each lab when you reach it, and repeat it on OpenAI and open source where you can, because the plugin is built from them.
- If you get stuck, ask Zia Tutor AI. It is built on this book, and it can explain this part and quiz you on it.


