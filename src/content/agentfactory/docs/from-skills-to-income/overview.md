# From Skills to Income (/from-skills-to-income/overview)

---
type: Document
title: "From Skills to Income"
description: "How the skills in this book become income, through a job, an FDE role, client work or a product many customers pay for, what each route needs first, how a product built on an AI assistant earns, and which parts of the book teach each route."
status: stable
order: 4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T09:29:32Z
chapter: "F4"
part: Front
expert_status: required
objectives: []
word_budget: 2700
prerequisites: [ "F3" ]
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: []
last_verified: 2026-10-29
review_by: 2026-11-29
sources:
  - id: gallup-ai-at-work
    title: "AI Benefits at Work Unevenly Distributed (Gallup, 6 October 2026, verified 2026-10-29)"
    resource: https://news.gallup.com/poll/714602/benefits-work-unevenly-distributed.aspx
  - id: mcp-skills
    title: "Skills, Model Context Protocol (verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/skills/overview
generated:
  at: 2026-11-21T09:29:32Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Income comes from solving a problem someone values enough to pay for. This book teaches you to manage AI Workers and to build your own. Those skills earn money when they produce work people rely on: work that is correct, saves time, reduces errors or improves a decision.

A certification is evidence that you passed an assessment of these skills. A portfolio is evidence that you have done real work with them. Customers and employers pay for the results.

## Four ways to earn

The four routes overlap. Many people move between them, or follow two at once.

| Route | What you do | Who pays you | A good first milestone |
| --- | --- | --- | --- |
| **A job** | Manage or build the AI Workers of the company that employs you | Your employer, as salary | A job application backed by portfolio work |
| **Forward Deployed Engineer (FDE)** | Work inside a client's operations, as an employee or a contractor, and build AI Workers that fit how that client works | The client, directly or through the firm that places you | A pilot inside one client's team |
| **Client work** | Build AI Workers for clients as projects, then support and improve them, often on a retainer | Each client, per project, per deliverable or per month | One paid project, delivered and reviewed by the client |
| **Founder with a product** | Turn what you know into a product that many customers use without you in the room | Many customers, by subscription, by use, or through an organization license | A pilot with one paying customer |

## What each route needs first

**A job** needs evidence. A certification gets your application read. Portfolio work that shows a real task, the AI Worker you built or managed for it, and how you checked the result gets you hired.

**An FDE** needs to work well inside someone else's business. You learn how the client's work really runs, find the step worth automating, and ship a small pilot their team trusts. Knowing the client's process matters as much as knowing the platform. An FDE also learns, inside real organizations, which problems are worth a product.

**Client work** needs a clear scope and a fair price. A project can be priced by its deliverables or by the value it creates, not only by the hour. Plan for the support that follows, because AI Workers need maintenance as models and tools change. The cases in [Claude and ChatGPT 2.0](../claude-and-chatgpt-2/overview.md) show this route at small scale: Nisha's first paid client in Case 2, and three ways to price the same work in Case 4.

**A founder** needs a problem that many people share and will pay to solve. The product needs maintenance too, but one maintained product can serve many customers. You do not need every skill yourself. A domain expert who knows the problem and an AI builder who knows the platform can build it together.

The first three depend more directly on your own involvement, and they are where most readers will start earning. The roadmaps on the previous page lead to them. The rest of this page explains how a product built on an AI assistant works, because it is the newest route. If you will not build a product, skip the rest of this page and the next three. Go on to [Where the book teaches this](where-the-book-teaches-this.md).

## The idea in one line

The interface is the storefront, your server is the cash register, and the AI does the reasoning.

Here is what that means. Many people already use an AI assistant at work.[^gallup-ai-at-work] That assistant can be connected to outside tools. If you build one of those tools, you can charge for it.

What you sell is the part the AI does not have: your knowledge, your method or your data. The AI reads what your tool returns and does the thinking.

You can build four kinds of things to sell. Most products combine them:

| What you build | What it gives the customer | Where it runs |
| --- | --- | --- |
| **A skill** | A method: the steps an expert follows to do one job well | Inside the customer's AI app |
| **A plugin** | Skills and the setup for your connector, installed in one step | Inside the customer's AI app. The connector it sets up runs on your server |
| **A connector** | Your knowledge, method or data, through an MCP server that checks who has paid | On your server |
| **An MCP App** | Your connector with its own screens inside the chat, such as a table with a button beside each row | The screen in the customer's AI app, the work on your server |

Anyone who installs a skill or a plugin can read it. A skill can also be sent from your server, through the Skills over MCP extension, but once the AI app loads it, the customer can read it too.[^mcp-skills] So charge on the connector. An MCP App is a connector with screens, so the same check of who has paid covers it. A typical product is a plugin that sets up your connector, with screens for customers who would rather click than type.

![A customer uses an interface, a plugin or an app, which calls your server. Your server checks that the customer has paid, and only then returns your knowledge, method or data. The AI reasons over what the server returns. The customer pays you through your payment page, and your server records who has paid.](img/skills-to-income.png)

Read the figure from left to right. Copying the interface does not get anyone past your server, and only your server hands over the part worth paying for.

[^mcp-skills]: Skills, Model Context Protocol, accessed 15 November 2026.
[^gallup-ai-at-work]: AI Benefits at Work Unevenly Distributed, Gallup, 6 October 2026. In a survey of U.S. employees from January to March 2026, 28 percent used AI at work at least weekly, and 54 percent had not used it in their role.


