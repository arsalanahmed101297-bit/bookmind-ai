# Chapter 14. Structuring Programs in the AI Era: Objects, Data and Async (/building-ai-workers/structuring-programs/overview)

---
type: Document
title: "Chapter 14. Structuring Programs in the AI Era: Objects, Data and Async"
description: "How your code talks to software someone else runs, in TypeScript and Python: modules, types you write down, classes and objects, schemas, errors as design, JSON and REST APIs, async and await, and SDK-shaped code."
status: stable
order: 314
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T08:41:32Z
chapter: "14"
part: III
expert_status: builder-only
objectives:
  - { id: CCDV-F.D2.S4, label: supporting }
  - { id: CCDV-F.D5.S2, label: supporting }
word_budget: 10000
prerequisites: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13" ]
build_step: "Invoice and Vendor models with schema validation, a loader that reports every bad row, and a small async client for a local sample AP API, in TypeScript and in Python, each with tests, then one tests-first change ported to Codex and OpenCode"
artifact: "brightline-ap with src/schemas.ts and py/brightline_ap/schemas.py, the loaders, the API clients and their tests, the zod, pydantic and httpx dependencies with lock files, NOTES.md and ports/ch14.md, branches remit-tests, port14-codex and port14-opencode, tag ch14"
lab_data: "https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-ch14.zip"
field_guides: [ "E.code-toolchain" ]
delta_entries: []
concepts: [ "14.1", "14.2", "14.3", "14.4", "14.5", "14.6", "14.7", "14.8", "14.9", "14.10" ]
last_verified: 2026-10-30
sources:
  - id: panaversity-python-crash-course
    title: "Python in the AI Era (the first edition's course) (Panaversity, accessed 2026-10-30)"
    resource: https://agentfactory1.panaversity.org/docs/python-crash-course
generated:
  at: 2026-11-23T08:41:32Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## The point

**What does the code from Chapter 13 not do yet?** Talk to other software. Its scripts read a file you saved and print a list on your screen. An AI Worker talks to other software all day: it asks an AI model for an answer, and it gets invoices from a vendor's website. Each time, it sends a request, waits, and gets an answer back, written in JSON. Often it talks through code that the other company publishes for its service. From [Chapter 17](../connectors-and-mcp/overview.md) on, everything you build works this way. This chapter is where it starts.

**How does this chapter get me there?** In three steps. First, how code is put together, in files, types, and classes with their objects ([14.1](modules.md) to [14.3](classes-and-objects.md)). A company's code comes in the same shapes. Then what comes in from outside, and what happens when it is wrong ([14.4](data-models-and-schemas.md) to [14.6](errors-as-design.md)). Last comes the talking itself ([14.7](json-and-rest-apis.md) to [14.9](reading-sdk-code.md)). That means requests and answers in JSON, the waiting, and a company's own code for its service.

**What is mine to decide?** The other side is not yours. Its owner can change it without telling you. It can be slow, and some days it does not answer. So you decide what your code accepts, what it does when an answer is wrong or late, and who is told. You also decide whose code you let into your project. Agents often write these rules without being asked, from the first day's data. As in [Chapter 13](../programming-fundamentals/overview.md), you make them in your brief and its "Done when", or the agent makes them for you.

After this chapter you can plan with a coding agent how your code talks to another company's service. You can say what to send, what a good answer holds, how long to wait, and when to try again. You can decide what your code accepts, and what one bad record does to the rest. You can tell what a company's own code checks for you, and what it leaves to you. And you can find your way around a project an agent split into files.

This chapter needs Chapters [12](../agentic-coding/overview.md) and [13](../programming-fundamentals/overview.md), and the tools you set up there. Its lessons follow Ana at Brightline, as Chapter 13 did. Use the tabs to pick one language, TypeScript or Python, and follow it through the lessons.

The [lab](lab.md) runs in one coding agent and in the one language you chose.

## Why it matters

Marcus runs accounts payable for a restaurant-supply distributor in Fort Wayne, Indiana. Every Thursday a script downloads about 2,000 approved invoices from a vendor portal and builds the payment file for the bank: 40 vendors, about $6 million in all. An agent wrote the script in an afternoon and, without being asked, added a check on what came in: each amount must be a whole number of cents, such as `482500` for $4,825.00, and more than zero. The script ran without trouble for months.

One Thursday a poultry supplier sent a credit for $450.00, money it owed back for a short delivery. The portal listed it among the week's invoices, as an amount of `-45000`. The check refused it and stopped the run: "amount -45000 is not a positive whole number of cents". No payment file was written. About $6 million waited on a $450.00 credit, while Marcus worked out what the script should do with it.

The agent had chosen "more than zero" from the first week's data, which held no credits. Marcus knew what a credit means: it lowers what his company owes that vendor. But the invoices came from a portal he did not run, sent by 40 vendors he did not control. Nothing in the script said what to do when one of them sent something new. So how do you decide what your code accepts from software someone else runs, and what it does when that software surprises it?


