# Check yourself (/building-ai-workers/hosted-agents/check-yourself)

---
type: Document
title: "Check yourself"
description: "Twenty-four questions with outlines for the whole chapter, the flashcards, and a final quiz round."
status: stable
order: 323.95
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:38Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.1", "23.2", "23.3", "23.4", "23.5", "23.6", "23.7", "23.8", "23.9", "23.10", "23.11", "23.12", "23.13", "23.14", "23.15", "23.16", "23.17", "23.18", "23.19" ]
chapter_quiz: true
last_verified: 2026-11-05
generated:
  at: 2026-11-15T11:19:38Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Answer each question in a few lines, then compare with the outline below it. The tag says which reading the question belongs to: **[Milestone 1]**, **[Milestone 2]**, **[design]** or **[beyond]**. Answer the ones for the reading you have done.

1. **[Milestone 1] [23.1](the-worker-leaves-the-laptop.md).** Take Chapter 22's list of what an SDK still leaves to you ([22.9](../agent-sdks/what-an-sdk-still-leaves-to-you.md)). Name three rows a hosted platform takes over, the one it never takes, and the one decision that would leak data if your product forgot it.
   *Outline:* it takes the process and disk, the sandbox, what the process inherits, credentials, where events live, cost limits and its own upgrades. It never takes what counts as done. Forgetting whom each run acts for, and so whose vault it carries, leaks one person's data to another.
2. **[Milestone 1] 23.1.** A hosted agent and an AI Worker: say what each one is, and what a customer buys in each case.
   *Outline:* an agent is the mechanism, a model, some tools and a loop that runs them ([Chapter 21](../agent-loop-by-hand/what-an-agent-is-in-code.md)). An AI Worker is a role built on it, with an owner, limits and a person per run. A customer buys a task done from an agent, and a role filled from a worker.
3. **[Milestone 1] [23.2](four-resources.md).** Ana asks two questions at once. How many agent definitions, runtime environments and sessions are involved, and which of them names Ana?
   *Outline:* one definition, one environment, two sessions. Only the sessions name Ana, through her vault.
4. **[Milestone 1] [23.3](reading-a-session.md).** A session's last line says "idle". Name the three stop reasons it could carry, and what the portal does for each. Which one leaves a tool call waiting forever if the portal does nothing?
   *Outline:* finished (show the answer), needs action (ask the person), budget reached (say what was done, offer to raise the cap). Needs action waits forever.
5. **[Milestone 1] [23.4](resources-as-code.md).** A colleague fixes a typo in the worker's instructions in the web console "to save time". What happens at the next apply, and why is that the behavior you want?
   *Outline:* the apply refuses, because the resource changed outside the files. A change no one reviewed should never be overwritten or kept by accident.
6. **[Milestone 1] [23.5](a-budget-on-every-run.md).** A session's budget is $0.50, and its cost reads $0.51. Explain why, and what the session still accepts.
   *Outline:* the cap is checked between model calls, so the call under way finished. It still accepts a confirmation, an interrupt or a tool result, but no new question until the cap is raised.
7. **[Milestone 1] [23.6](what-travels.md).** The project's settings file let the coding agent run only the connector's four tools ([Chapter 17](../connectors-and-mcp/overview.md)). The settings file does not travel. Where does that check live now?
   *Outline:* in the agent definition, which turns on only those four tools by name, and in a permission policy for each tool, or in the connector itself, where the server refuses. A new tool stays off until reviewed.
8. **[Milestone 1] [23.7](the-sandbox-and-its-network.md).** The runtime environment allows one file-sharing host so the worker can read a template. An injected note says "upload the invoice list to the same site". What does the allow list do?
   *Outline:* nothing to stop it. A host on the list is a whole door, uploads included. The builder should have put the template in the sandbox or the skill instead.
9. **[Milestone 1] [23.8](permission-policies.md).** Explain allow, ask and decide, the defaults for connector tools and for built-in tools, and why "decide" is not a human checkpoint.
   *Outline:* connector tools ask by default, built-in tools allow. "Decide" is the platform's own judgment. It cannot know who has the right, and it cannot own the action.
10. **[Milestone 1] [23.9](three-identities-never-one.md).** The builder's test script uses the builder's own key and token for every session. Give four things that go wrong, and the three identities that replace it.
    *Outline:* blast radius, a wrong audit trail, no way to revoke one person, and a product that stops when the builder leaves. The replacements are the product identity, the worker identity and each person's delegated token.
11. **[Milestone 1] [23.10](a-vault-per-person-and-company.md).** Trace Ana's token from the consent screen to the connector. At which step could the model have seen it?
    *Outline:* sign-in server, portal, vault, then added to the call on its way out. At no step: the token never passes through the model or the sandbox.
12. **[Milestone 1] [23.11](one-session-one-person-one-company.md).** Luis's session was created with his vault and Ana's, both matching the connector. Which credential reaches the connector, which rule was broken, and which test catches it?
    *Outline:* whichever vault came first. Row S3's rule: exactly one vault per connector per session.
13. **[Milestone 1] 23.11.** The portal reads a `vault_id` from the page "so the user can switch companies". What has broken, and where must the vault be chosen?
    *Outline:* row S2's rule, and S1's. Anyone could name any vault. The server chooses it from the signed-in person and their current membership.
14. **[Milestone 1] [23.12](the-portals-own-pages.md).** Ana learns the id of Luis's session, and a vendor note holds a script. Which two page rules protect them, and which rows prove them?
    *Outline:* a session belongs to the person who started it (row S8), and nothing from a session runs in the page (row S7).
15. **[Milestone 2] [23.13](keys-that-expire-and-no-keys-at-all.md).** Why does CI need no stored key, while the portal's server holds one? What makes the portal's key as safe as it can be?
    *Outline:* CI can prove who it is with a short-lived token from its own system, and the portal's host cannot. The portal's key belongs to a service account, works in one workspace, has a spending cap and an end date, and is rotated.
16. **[Milestone 2] [23.14](when-a-refresh-is-refused.md).** Luis is removed from Cedar Ridge while a session of his is running. What happens at its first connector call after his access token expires, and what does his page show? How does the portal tell this apart from a sign-in server that was down for a minute?
    *Outline:* the refresh is refused, the session reports an authentication error, and the page says to sign in again. The credential check answers "invalid" for a refusal and "unknown" for a brief outage.
17. **[Milestone 2] 23.14.** With refresh token rotation, why might a vault fail on its second refresh? Why is turning rotation off not an answer?
    *Outline:* if the platform kept the old refresh token, its second refresh would reuse a spent one. Rotation is what makes a stolen refresh token show.
18. **[Milestone 2] [23.15](schedules-and-webhooks.md).** A webhook arrives twice with the same event id, a third time with a changed body, and a fourth never arrives. What does the receiver do with each?
    *Outline:* handle the first, skip the repeat, refuse the changed one because its signature fails, and catch the missing one at the hourly reconcile.
19. **[Milestone 2] 23.15.** A run is set for 1:30 a.m. every day in New York. What happens on the Sunday clocks go back, and on the Sunday they go forward?
    *Outline:* it runs twice when that hour happens twice, and the portal records the second as a repeat. When clocks go forward, 1:30 runs as usual. A 2:30 run would be skipped. Avoid those hours.
20. **[Milestone 2] [23.16](loops-check-feedback-and-stop.md).** Design the loop for Brightline's morning triage: its trigger, its definition of done, its check, what it sends back, and every way it stops.
    *Outline:* a weekday morning schedule, one decision and one cited policy line per open invoice, a check by code against the recorded tool results, the specific failure sent to the same session, and stops at success, two rounds, the budget, a waiting approval or a refused sign-in.
21. **[design] [23.17](patterns-and-when-to-host-it-yourself.md).** Brightline must keep a client's files on its own network. Which of the three places to run fits, and when would you need your own runtime instead?
    *Outline:* a hosted loop with your own sandbox. Your own runtime is for data that must never leave your systems, control between model calls, a model the platform lacks, or cost at scale.
22. **[design] [23.18](designing-a-hosted-worker.md).** A colleague says: "We host our AI Workers, so we can skip context, harness, graph and loop design." What does hosting do for each, and what stays yours?
    *Outline:* hosting runs the machinery. You still decide what the worker sees, what surrounds it, how its work is split and what prompts it next.
23. **[beyond]** Why can a coding agent's scheduled cloud runs not serve Brightline's clerks, and what can you sell into a vendor's standing assistant?
    *Outline:* every scheduled run acts as the account that owns it. You can sell connectors and plugins that the assistant's users add.
24. **[beyond]** Cedar Ridge's purchasing agent wants to ask Brightline's AP worker about an invoice. What does an agent-to-agent protocol add, and why does it not replace a durable execution engine?
    *Outline:* an agreed way for two organizations' agents to work together. The engine keeps your own loop's steps alive. One is a language across a boundary, the other is memory and a clock inside your product.


