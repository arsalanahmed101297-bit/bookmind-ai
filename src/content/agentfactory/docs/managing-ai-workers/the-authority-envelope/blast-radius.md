# 7.2 Make "can" match "may" (/managing-ai-workers/the-authority-envelope/blast-radius)

---
type: Document
title: "7.2 Make \"can\" match \"may\""
description: "Set the worker's tools so they can do no more than the envelope allows: the blast radius, the three routes into a system, and the checks before you turn on an add-on."
status: stable
order: 207.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "07"
part: II
expert_status: required
concepts: [ "7.2" ]
last_verified: 2026-10-07
sources:
  - id: anthropic-agent-skills
    title: "Agent Skills (Claude Docs, verified 2026-11-20)"
    resource: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You lend a friend your car to pick up groceries. But you also left your house keys and your garage door opener on the same key ring.

**Wednesday afternoon.** Now Maria sets what the AP Worker's tools can do ([7.1](envelope-brief-permissions.md) said what it may do).

The **blast radius** is everything an AI Worker could affect if it went wrong: every connector, tool, folder, signed-in site and person it can reach. Permissions set it, not the envelope. You met the reason in [What stays your responsibility](../../claude-and-chatgpt-2/new-way-of-working/what-stays-your-responsibility.md): a rule in a brief is something the worker will usually follow, and a permission that is switched off is a limit it cannot cross. So permissions decide the worst case.

## Three rules for the settings

Maria follows three rules, and each one is a setting.

**Grant what the task needs.** Turn on only the connectors this task uses. Read tools, which only look, can be on, and so can a tool that only saves a draft. Write tools, which change or send things, stay off until an action reaches execute. So Maria turns on the mailbox connector's tools for reading mail and saving drafts, and nothing else. Web search is off too, because the job needs nothing from the web.

**Make "can" no wider than "may."** Dave's envelope says draft for vendor replies, so the send tool is off, and Maria sends. A send tool that asks first would be execute with approval ([7.1](envelope-brief-permissions.md#four-rungs-set-for-each-action)), so Dave would have to change the envelope first. Where no setting can enforce a line, write it on a **gap list**, and keep that action yourself. A gap list is honest. A setting that only looks right is not.

**Know whose name it acts in.** In Part II the worker acts through your accounts, so other systems record its actions as yours. That is why Tuesday's change was logged under Maria's login. A production worker, one in real daily use, needs a login of its own.

**Settings that skip approvals,** such as a fully automatic mode or "always allow" on a write tool, widen the blast radius for every task, so who may switch them on is a company policy decision ([Chapter 10](../governance-and-responsible-use/organizational-policy.md)). Maria sets the conversation to ask before any action that changes or sends something.

![The title reads "Permissions set the blast radius." The line below it reads "Blast radius is everything the worker could affect if it went wrong." An example marked permissions too broad shows three boxes, one inside another. The outer dashed red box is what permissions grant, the actual reach in this setup. It holds send without asking, browser signed in as Maria, and unneeded connectors enabled. Inside it, a gold box shows what the envelope allows: read records, recommend, draft replies and proposals. Inside that, a white box shows what this task needs: read invoices, draft replies. The red space outside the gold box is labeled excess access, granted but outside the envelope. A line below says the full outer area is the current blast radius. Three numbered boxes sit on the right. One, grant only what the task needs. Enable needed tools and data only, and keep sending and record changes disabled for draft-only work. Two, make can no wider than may. Draft-only means a person sends, and a worker that sends after approval is at Execute. If a setting cannot enforce a limit, record the gap and keep the action with a person. Three, know whose account it uses. Actions through Maria's login appear as Maria's actions, and a production worker needs its own identity. A dark bar reads: reduce actual permissions to the task's needs, within the envelope. A footer reads: at Brightline, excess access enabled an external file transfer and a vendor-record change.](img/blast-radius.png)

*Figure 7.4. When permissions grant more than the envelope allows, the difference is blast radius nobody chose. Here the outer box is what the tools can do, unlike Figure 7.1.*

## Three routes into a system

**In everyday life.** To pay a bill, you can use the company's app, log in on its website, or hand someone your unlocked laptop.

An AI Worker can reach another system in three ways, and each needs its own settings.

**A connector** is a link to one system that offers named actions through the system's own interface. Each named action is a tool. Reading and writing are separate tools. Each call to a tool can be approved and recorded one by one.

**A browser** uses web pages the way a person does. It can reach any site. If it is signed in, its session, the time it stays signed in, carries the person's full rights: everything that person may do on the site. And its clicks are harder to review than named tool calls.

**Screen control** uses desktop apps by looking at the screen, moving the pointer and typing. Anthropic calls it computer use. It reaches anything visible, including windows you did not mean to show.

Choose by how narrow the reach is, how clear the record is, and how the permissions are enforced: use the narrowest well-controlled path. That usually means a connector, then the browser, but not always: a connector with every tool switched on can reach more than a browser signed in to an account with few rights. Use screen control only for a trusted app that has no other way in, with sensitive windows closed. Which path the AP Worker takes to the accounting system, and what happens to Maria's browser, is yours to decide in the lab.

Browser and screen actions skip a connector's own limits, such as which tools are on and which ask first. The application still checks the account's rights, but those are a person's, usually wider than the worker needs. So rebuild the limits yourself, with approval for each app or site and a record of what was done.

![The title reads "Choose the narrowest path with effective controls." The line below it reads "Usually: connector first, browser next, screen control last." A table compares three routes in four rows: reach, action record, permissions, and how to use it well. Connector, usually first: it reaches the named actions the connector exposes. Its action record is structured tool calls, and logging and approval depend on setup. Its permissions are tool restrictions plus the connected account's rights. To use it well, enable only the tools and data the task needs. Browser, when a connector cannot do the job: it reaches allowed sites and accessible signed-in sessions. Its record is page interactions and clicks, so inspect the available logs. Account and browser controls apply, but connector limits do not. To use it well, restrict sites, use a limited account and require needed approvals. Screen control, when no narrower route works: it reaches accessible apps, windows and desktop content. Its record is clicks, typing and screen observations, which are often harder to audit. Account, operating-system and app controls apply, but connector limits do not. To use it well, use trusted apps, close sensitive windows and record actions. A gold note says to compare the actual setup, because a broadly privileged connector can reach more than a tightly restricted browser account. A dark bar reads: check reach, action records and enforceable permissions before choosing.](img/tool-order.png)

*Figure 7.5. Three ways to reach a system, compared by reach, record and permissions.*

**When the worker picks the route.** In a conversation that decides for itself how to do the work ([1.2](../../ai-worker-paradigm/from-chatbots-to-ai-workers/same-text-box.md)), you ask for a result, and the worker may use a connector, then a browser when the connector cannot do a step, then screen control. So before the task, check every route the worker could reach against the envelope, not only the one you expect. Turn off the routes the job does not need, and set the rest to ask first.

## Check an add-on before you turn it on

A skill, a connector or a plugin, which is a package of several of these, made by someone else widens the blast radius as soon as it is on. Treat it like a new supplier. Before you turn it on, check six things: who published it, what it includes, what access it asks for, whether it carries scripts that run code, what it can send or change outside, and which of its actions will ask you first. Turn it on only if every answer fits the envelope. If it is useful but an answer is unclear, pass it to whoever manages your organization's AI tools or its security. A skill that asks for no access is not harmless: its steps can use whatever the worker can already reach.[^anthropic-agent-skills] A place in a vendor's catalog is not a review, since some add-ons are never checked by the vendor, and an organization's scan is one more check, never a replacement for these six. Today's details are in [10.2](../governance-and-responsible-use/can-this-data-go-in.md#the-way-in) and [8.4's product reference](../context-memory-knowledge-and-state/both-ai-vendors.md#product-reference).

[^anthropic-agent-skills]: Agent Skills, Claude Docs.


