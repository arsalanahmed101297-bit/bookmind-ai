# Docs (/claude-and-chatgpt-2/build-something/docs)

---
type: Document
title: "Docs"
description: "How to build a document with Claude Docs: start one, edit it yourself or with Claude, ask Claude in a comment, share and export it, check it, and do the same job with pages in ChatGPT's Space."
status: stable
order: 0.3992
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Docs" ]
last_verified: 2026-11-11
sources:
  - id: claude-docs
    title: "Get started with Claude Docs (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A report sent around by email soon has many copies: "final", "final 2", "final final". Nobody knows which one is right. A shared document fixes this. There is one copy, and everyone works on it.

## What it is

**Claude Docs** is a document that you, your colleagues and Claude write together. Use it for a report, a plan or a letter. It is on every plan, including Free.[^claude-docs]

## Build one

In the Claude desktop app, ask for a doc in any chat. You can also pick the Docs tile in the Artifacts tab. Claude may ask you a few questions first. Then it writes a draft. It can use your files and your connected apps.[^claude-docs]

Here is an example from **Brightline**'s Friday **payment run**, which you met in [One job, start to finish](../new-way-of-working/one-job.md).

> Write a one-page doc for Dave, who approves this Friday's payment run. Decide each invoice by the rules in the two files I attached. List the invoices that need a person, and give the reason for each. Use only the two files.

To try it, download [invoices.csv](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/invoices.csv) and [payment_run_rules.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/payment_run_rules.txt), and attach both to your message.

## Change it

There are four ways. Pick the one that fits the change:

- **Type in it yourself.** Best for a small fix, like a wrong date.
- **Ask Claude in the chat.** Best for a big change. Claude tells you what it changed.
- **Select some words, then click Ask Claude.** A box opens. Type the change, and Claude changes only those words.[^anthropic-artifacts]
- **Write a comment that mentions @Claude.** Select some words and click **Comment**, the first button in the small toolbar that appears. The comment box already holds @Claude, and its **Send to Claude** tick starts ticked. Leave both as they are, and Claude answers, makes the change and says why.[^claude-docs]

The doc shows who made each change: a person or Claude.[^claude-docs]

## Share it and save a copy

To let others in, click **Share**. On the Free plan, you may not be able to share at all, or only by link. Check what your Share button shows before you promise anyone a link.[^claude-docs]

- A **Viewer** can read it.
- A **Commenter** can also comment on it.
- An **Editor** can also change it and export it.[^claude-docs]
- Only **you, the owner,** can rename or delete it. Deleting is forever. There is no trash.

Anyone who opens your doc needs a Claude account. To save a copy, click the arrow beside the doc's name at the top and choose **Export**. You can export it as a Word, PDF or Markdown file, or send it to Google Docs. Claude can also turn a doc into slides.[^claude-docs]

## Check it before you share it

- **Charts do not update by themselves.** Ask Claude to get the latest numbers first.[^claude-docs]
- **Check each fact** against what you gave Claude.
- **Read it as a stranger would.** Does it make sense without your chat?

## In ChatGPT: pages

ChatGPT has **pages**. A page is a document, like a Claude doc. Pages live in **Space**, which the [overview](overview.md) introduced. You make and change them in the ChatGPT desktop app, or on the web.[^openai-space]

1. **Make one.** Ask, for example: "Make a page from this chat with our goals, decisions and next steps."
2. **Change it.** Type in it yourself, or ask ChatGPT to change one part.
3. **Share it.** Click **Share**. Choose who can view it and who can edit it. Editors can work on it at the same time.

Space needs the Pro, Business or Enterprise plan. It is not on Free or Plus. On a phone, you can read pages but not change them.[^openai-space]

> [!WARNING]
> **What you copy onto a page, everyone can read.** Imagine ChatGPT copies a number from a private file onto a shared page. Now everyone who can read the page can read that number, even if they cannot open the file.[^openai-space] Claude docs work the same way. Check what was copied in before you share.

## Try it (any plan)

Download [q3_review_notes.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/q3_review_notes.txt): untidy notes from a managers' meeting at Brightline.

1. **Build it.** In a new chat, attach the file and type:

   > Turn these meeting notes into a one-page review for Brightline's managers. Cover the results, the three biggest problems, and the actions with their owners and dates. Use only the notes. If something is not in the notes, write "not in the notes".

2. **Change one part.** Select the problems, click **Ask Claude**, and ask for a table with three columns: problem, effect and owner.
3. **Change the whole doc.** Type in the chat: "Add a section at the end called Risks, with the two risks from the notes."
4. **Check it** against the answers below.

**The answers.**

- Sales are $4.82m against a budget of $4.65m. The m means million.
- Logistics cost $127,440 against a budget of $108,000.
- Your three problems are Claude's choice. The notes hold at least four: logistics over budget, the margin under its budget, supplier invoices paid late, and the odd IT figure.
- There are five actions. Four have a date: October 16, 23, 30 and 31. Ivan's has none, because the notes only say "before the scanner pilot".
- The two risks: a new chain of stores pays after 60 days, not 30, and the second carrier has no signed contract.

[^claude-docs]: As verified on November 11, 2026. Anthropic's pages differ on sharing. The Docs page says the Free plan can share a doc with anyone who has the link. The general sharing page says new artifacts cannot be shared on Free. Check what your own Share button offers. The Docs page also says "There's no comment-only access level yet", but in the Claude app on November 11, 2026, a doc's Share menu offered Editor, Commenter and Viewer. If yours has no Commenter, someone who must comment needs Editor. The page also says a "Send to Claude" checkbox comes before a comment's send button, and "It starts selected". In the app on November 17, 2026, the comment box also held @Claude already. Get started with Claude Docs, Anthropic.
[^anthropic-artifacts]: Anthropic's page calls this button "Edit with Claude". In the app on November 17, 2026, it was labeled **Ask Claude**, in the toolbar at the foot of the doc. What are artifacts and how do I use them?, Anthropic.
[^openai-space]: As verified on November 11, 2026, OpenAI says you can create and edit content in Space "with ChatGPT Pro, Business, or Enterprise", and that "Mobile does not support editing pages." Getting started with Space in ChatGPT, OpenAI.


