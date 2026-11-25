# 23.12 The portal's own pages (/building-ai-workers/hosted-agents/the-portals-own-pages)

---
type: Document
title: "23.12 The portal's own pages"
description: "Two rules for the portal's pages: a session belongs to the person who started it, and nothing from a session runs in the page."
status: stable
order: 323.12
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T02:22:38Z
chapter: "23"
part: III
expert_status: builder-only
concepts: [ "23.12" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-16T02:22:38Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A dry cleaner gives you a numbered ticket for your coat. When you come back, the clerk checks the ticket against the name on the order, because anyone could read a number off a ticket left on a counter. A request to release your coat counts only on the shop's own stamped slip, not on a letter someone else sent in your name. And a note pinned to your coat by a stranger is read as a note. The clerk does not follow its instructions. In this concept, the ticket is a session id, the stamped slip is a form token, and the pinned note is text a stranger put into a session.

**What you will learn.** Two rules for the portal's own web pages: who may see or change a run, and why nothing a run returns is ever treated as page code.

**Why it matters.** A web site can leak in ways a server cannot. Without these rules, anyone who learns a run's id could watch it, and a stranger's note could act as the person reading it.

### Which four web words does this concept use?

The portal is a web site, and web sites have their own ways to leak.

- A **cookie** is a small value the browser keeps for a site and sends back with every request. The portal's sign-in cookie says who is signed in.
- A form token is a one-time value the portal puts into its own page, and checks when the page sends something back. Another web site cannot know it.
- A **script** is code inside a web page that the browser runs.
- A **content security policy** is a rule the portal sends with its pages: "run only the scripts I shipped, nothing else."

**One request, start to finish.** Ana has heard the id of Luis's session from a colleague. She types it into the portal's address bar to watch his events. And at the same time, Cedar Ridge's vendor V102 has a note in its record that contains a piece of web page code, a script.

1. **The portal receives Ana's request** for that session's events.
2. **It looks up its own record** of who started the session: Luis, at Cedar Ridge.
3. **It refuses,** because the signed-in person is Ana. She sees "not found", which tells her nothing about whether the session exists.
4. **That evening, Luis opens a web page from a stranger.** Hidden in it is a request to the portal: "approve the waiting tool call in Luis's session". His browser would send his cookie with it, so it looks as if Luis sent it. The portal refuses it, because the request carries no form token, the portal's own stamp, from the portal's own page.
5. **Later, Luis asks about V102.** The worker's answer quotes the vendor note, script and all.
6. **The portal shows the note as plain text.** The script appears as characters on the screen. It never runs.

Nothing about the session's id, or the text inside it, gave anyone more than the signed-in person already had.

### What are the two page rules?

Two rules use those four words:

1. **A session belongs to the person who started it.** The portal records each session it starts, with its person, company and vault. Every later request about that session, to stream its events, answer a confirmation or interrupt it, is checked against that record. The requests that change something also need a form token from the portal's own page. Without the first check, Ana could watch or approve Luis's work by guessing an id. Without the second, another web site Ana visits could make her browser send those requests for her, using her cookie.
2. **Nothing from a session is trusted by the page.** Model answers, tool inputs and tool results can carry text a stranger wrote, such as a vendor note. The portal shows all of it as plain text, never as web page code, and its content security policy forbids running any script it did not ship. Otherwise a note containing a script could run in Ana's browser and act as her. It is the same rule as a connector's own screen inside someone else's AI app ([20.7](../mcp-apps/untrusted-text-on-the-screen.md)), now on a page you host yourself.

**At work.** In [Lab 23](lab.md), Task 10c, Claude Code builds the portal's session pages with both rules. In Task 12, the session matrix tests them: row S8 asks for Luis's session as Ana, and row S7 shows a vendor note holding a script and checks that it appears as plain text.

### Which rows of the session matrix prove these rules?

Rows S7 and S8 of [23.11](one-session-one-person-one-company.md)'s table prove this concept's rules. S7 checks that no sign-in token appears in any event, and that nothing from a session runs in the page. S8 checks that a session belongs to the person who started it.

**The operating rule:** check every request about a session against the person who started it. Show everything from a session as plain text.

![Two panels split by a dotted line. Left, headed a session belongs to its owner, a box reads Ana's browser asks for the events of session S-Luis, with an arrow to a box that reads the portal looks up its record: S-Luis is Luis, at Cedar Ridge. A red-orange arrow leads down to a box reading not found. Right, headed its text is only text: a box edged in red-orange, vendor note with a script inside it, with an arrow to a box, the portal page shows it as plain characters. A red-orange arrow leads down to a box reading shown, never run. Below: check every request against the person who started the session. Show everything from it as plain text.](img/chapter-22-portal-pages.png)

*Figure 23.18. Two page rules: a session belongs to its owner, and nothing from it runs in the page.*

### Part C in one minute

Three identities, never one: your product, the worker, and the person it acts for ([23.9](three-identities-never-one.md)). Each person's token lives in their own vault, where the model never sees it ([23.10](a-vault-per-person-and-company.md)). Your server, never the page or the model, picks exactly one vault per session, and a test proves every rule (23.11). And the portal's pages show only a person's own sessions, as plain text (23.12).

**Now do Lab 23, Sitting 3a** on the lab page: Tasks 9 to 11 (about 2 hours 45 minutes). It ends Milestone 1. Then come back for Part D, when you are ready to make the worker safe to sell.


