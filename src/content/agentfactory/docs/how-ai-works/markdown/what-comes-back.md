# 0.2.2 What comes back (/how-ai-works/markdown/what-comes-back)

---
type: Document
title: "0.2.2 What comes back"
description: "The app turns the marks into headings and lists, some replies are not text at all, and each copy you ask for suits its next reader, made from the page you change."
status: stable
order: 13.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.2"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.2.2" ]
last_verified: 2026-10-17

sources:
  - id: v1-markdown-html
    resource: https://agentfactory1.panaversity.org/docs/markdown-html-crash-course
    title: "Markdown In, HTML Out: A Crash Course (Panaversity, first edition, read 2026-10-16)"
  - id: anthropic-sonnet-prompt
    resource: https://platform.claude.com/docs/en/release-notes/system-prompts/claude-sonnet-5-5
    title: "Claude Sonnet 5.5 system prompts, entry of October 7, 2026 (Claude Platform Docs, verified 2026-10-16)"
  - id: openai-intelligent-ui
    resource: https://help.openai.com/en/articles/20001598-intelligent-ui-in-chatgpt
    title: "Intelligent UI in ChatGPT (OpenAI Help Center, updated 2026-10-08, verified 2026-10-16)"
  - id: anthropic-visuals
    resource: https://support.claude.com/en/articles/13979539-custom-visuals-in-chat-and-cowork
    title: "Custom visuals in chat and Cowork (Claude Help Center, updated 2026-04-22, verified 2026-10-16)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** An airline keeps one record of your trip. From it, the airline prints your boarding pass, shows the same pass on your phone and emails you a receipt. Each copy is made for its next reader: the gate scanner, the security officer and your manager. When your seat changes, the airline changes the record and makes new copies. Nobody fixes a boarding pass with a pen.

**What you will learn.** Why you see headings and never the marks, and which shape to ask for. What you get when you copy a reply, and which file to change when a fact changes.

**Why it matters.** The reply you see is laid out for your eyes, in this chat. Its next reader may be a person, a spreadsheet or another AI. Each one needs its own shape. A copy made for its next reader can also leave out a line, or turn a remark into a rule. So you check each copy against the page it was made from.

## The reply you see

### Why do you see headings and never the marks?

Because the app turns the marks into a page, as [0.2.1](markdown-going-in.md) showed. How many marks a reply uses depends on the model and its settings. One AI vendor tells one of its free models to answer simple questions in plain sentences. It also tells the model to use lists and formatting when they make a reply easier to read.[^anthropic-sonnet-prompt] You can always ask for more marks, or for fewer.

### Is every reply text with marks?

No. Both AI vendors' apps[^openai-intelligent-ui] can now build part of a reply as a chart, a diagram or buttons you can click.[^anthropic-visuals] These pieces are built in the app. They are not a page of text that you can check line by line, or give to another AI. When you need to keep an answer, ask for it as a page: "as a markdown page, in one code block".

## The shape for its next reader

### Which shape should you ask for?

The shape its next reader needs. You choose the output format by who or what reads it next.

| Its next reader | Ask for | Because |
| --- | --- | --- |
| An AI, or you later, to check it | a markdown page | it keeps its shape as plain text, in any app |
| A person who signs or files it | a document, in Word or PDF | it prints and files like any other document, and a PDF looks the same everywhere |
| A spreadsheet | a table, as a CSV file, which is plain text with commas between the values | it holds one row per record and one column per value |
| A person who reads it on a screen | a web page | it can show a styled table, a chart or a button |

Each one is a copy made from the checked page.

A page kept for an AI stays markdown. A web page or a Word file holds layout as well as words. To an AI, that layout is extra text. It takes room in the window and adds no fact.[^v1-markdown-html]

### What do you get when you copy a reply?

It depends on where you paste it. Paste a reply into an email or a document, and you usually get the finished page. Paste it into a plain text box, such as a form on a website or a text editor, and you get the marks, as Dave did in the payment run's note box. Some places give plain text that has lost its shape. So look at what you pasted before you send it.

**For a plain text box, ask for the reply as plain text, with no markdown.**

### When a fact changes, which file do you change?

The markdown page you keep ([0.2.4](both-ai-vendors.md) shows how). The web page, the Word file and the CSV are copies made from it. Check each copy against the page: every line is there, and says the same thing. When a fact changes, change the page, then make each copy again from it. A copy that you fix by hand no longer matches its page. Fix a rule only in the Word file, and the page and the web page still say the old rule.

![One page, many copies. In the middle, a file named "brightline-ap-notes.md", labeled "the page you change". Three arrows labeled "made from the page" run out to three copies: "a web page", labeled "to read", "Word or PDF", labeled "to sign or file", and "a CSV table", labeled "to load". On the left, a person holding a copy, with a two-way arrow to the page, labeled "compare each copy with the page". One arrow from "Word or PDF" back to the page is crossed out with a red X, labeled "never edit a copy". A banner reads: "When a fact changes, change the page, then make each copy again."](img/one-page-its-copies.png)

*Figure 0.2.3. One page, many copies. You change the page, never a copy.*

[^anthropic-sonnet-prompt]: Claude Sonnet 5.5 system prompts, Claude Platform Docs.
[^openai-intelligent-ui]: Intelligent UI in ChatGPT, OpenAI Help Center.
[^anthropic-visuals]: Custom visuals in chat and Cowork, Claude Help Center.
[^v1-markdown-html]: Markdown In, HTML Out: A Crash Course, Panaversity, first edition.


