# 0.2.4 Keep a page as a file in your app (/how-ai-works/markdown/both-ai-vendors)

---
type: Document
title: "0.2.4 Keep a page as a file in your app"
description: "How to see the marks and keep a page as a markdown file in Claude or ChatGPT, step by step, with where each lets you make a web page and turn formatting up or down as a dated reference."
status: stable
order: 13.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.2"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.2.4" ]
last_verified: 2026-10-16

sources:
  - id: anthropic-pricing
    resource: https://claude.com/pricing
    title: "Plans & pricing (Claude, verified 2026-11-18)"
  - id: anthropic-sonnet-prompt
    resource: https://platform.claude.com/docs/en/release-notes/system-prompts/claude-sonnet-5-5
    title: "Claude Sonnet 5.5 system prompts, entry of October 27, 2026 (Claude Platform Docs, verified 2026-11-18)"
  - id: openai-characteristics
    resource: https://help.openai.com/en/articles/20001038-characteristics-in-chatgpt
    title: "Characteristics in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
  - id: openai-intelligent-ui
    resource: https://help.openai.com/en/articles/20001598-intelligent-ui-in-chatgpt
    title: "Intelligent UI in ChatGPT (OpenAI Help Center, updated 2026-10-08, verified 2026-11-23)"
  - id: anthropic-visuals
    resource: https://support.claude.com/en/articles/13979539-custom-visuals-in-chat-and-cowork
    title: "Custom visuals in chat and Cowork (Claude Help Center, updated 2026-04-22, verified 2026-11-18)"
  - id: openai-blocks
    resource: https://help.openai.com/en/articles/20001246-working-with-writing-blocks-and-code-blocks-in-chatgpt
    title: "Working with writing blocks and code blocks in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
  - id: anthropic-docs
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
    title: "Get started with Claude Docs (Claude Help Center, verified 2026-11-23)"
  - id: anthropic-artifacts
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
    title: "What are artifacts and how do I use them? (Claude Help Center, updated 2026-11-13, verified 2026-11-18)"
  - id: openai-deep-research
    resource: https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt
    title: "Deep research in ChatGPT (OpenAI Help Center, updated 2026-09-21, verified 2026-11-23)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two phones show the same text message in different fonts and bubbles. The words are the same on both. Each phone shows them in its own way.

**What you will learn.** Where your app, Claude or ChatGPT, shows the marks behind a reply and lets you keep a page as a markdown file, so you can do it in Lab 0.2. Which differences change a step.

**Why it matters.** The marks are the same on both AI vendors. The buttons and settings around them have different names and places, and they change often. A page you keep as a file keeps its shape in any app.

## How to keep a page as a file in your app

You need your Claude or ChatGPT account, a page in a chat that you want to keep, and a plain text editor: TextEdit on a Mac, or Notepad on Windows.

Use a code block, not the copy button under a reply. As verified 23 November 2026, neither AI vendor's help pages say whether that button copies the finished page, the marks or plain text. If you use it, look at what you pasted. A code block shows the text just as it is written, marks included. Open your app beside this page and follow your tab.

### Claude

*As verified 23 November 2026.*

1. **Ask for the page in one code block.** Send:

   ```text
   Show the page as markdown, inside one code block.
   ```

2. **Copy the code block, and save it as a `.md` file.** Paste it into your text editor, and save it with `.md` at the end of the name.
3. **Or keep it as a Claude Doc,** Claude's own editable page. Start your request with /docs, or choose "Output", then "Docs", in the message box. Docs are on every plan. Click "Export" and choose Markdown (.md), or Word, PDF or Google Docs. If you keep the Doc, the Doc is the page you change. If no Doc appears, use the code block in steps 1 and 2.[^anthropic-docs]
4. **Check it worked.** Open the file in your text editor. A pass shows the marks: `#` before each heading and `-` before each item. Then attach the file to a new chat and ask a question it answers. A pass is an answer that names the line it came from.

### ChatGPT

*As verified 23 November 2026.*

1. **Ask for the page in a code block.** Send:

   ```text
   Show the page as markdown, inside one code block.
   ```

   You can copy a code block's text, marks included.[^openai-blocks]

2. **Copy the code block, and save it as a `.md` file.** Paste it into your text editor, and save it with `.md` at the end of the name.
3. **Turn formatting up or down, if you want.** Select your profile icon, then Personalization. Under Characteristics, the Headers & Lists setting chooses "Use more markdown" or "Use less markdown".[^openai-characteristics]
4. **Check it worked.** Open the file in your text editor. A pass shows the marks: `#` before each heading and `-` before each item. Then attach the file to a new chat and ask a question it answers. A pass is an answer that names the line it came from.

If the file saves as `.txt`: in Notepad, choose "All files" as the file type before you save, and type the whole name with `.md`. In TextEdit, choose Format > Make Plain Text first, or the marks will not be saved as plain text.

This page has no open-source tab, because Lab 0.2 runs in Claude or ChatGPT. The marks are the same in any tool.

You use these steps in [Lab 0.2, Steps 6 to 8](lab.md#step-6-fix-it-and-see-its-marks).

## What changes a step

One difference matters when you keep or share a page: where a web page opens. On Claude, it is an Artifact, as in [Build Something](../../claude-and-chatgpt-2/build-something/overview.md), and Claude keeps it in the Artifacts tab.[^anthropic-artifacts] On ChatGPT, ask for an HTML page, the code that web pages are written in. It comes in a code block, with a Preview.[^openai-blocks]

## What stays the same

The buttons will move, and the names will change. The marks stay the same ([0.2.1](markdown-going-in.md)), so a page you keep has the same shape on either AI vendor, and in any app that reads plain text ([0.2.2](what-comes-back.md)).

## Product reference

This is for looking things up, not for reading through. Each tab gives the date it was checked.

### Claude

*Anthropic, as verified 18 November 2026.*

*How replies are formatted.* You can ask for more formatting or less. Anthropic publishes the instructions its apps give Sonnet 5.5.[^anthropic-sonnet-prompt] Sonnet is a model on the Free plan.[^anthropic-pricing] Its instructions say it may use bullet points and markdown when they make a reply easier to read. It answers simple questions in plain sentences. When you ask for less formatting, it stops using headings, lists and bold. Formatting preferences go in your user preferences.[^anthropic-sonnet-prompt]

*Pieces that are not text.* Custom visuals, in beta, which means still being tested, for every user on the web and desktop apps: diagrams, charts and interactive visuals built inside the reply. A visual is not saved unless you copy it as an image, download it or save it as an Artifact.[^anthropic-visuals]

### ChatGPT

*OpenAI, as verified 23 November 2026.*

*How replies look.* With Intelligent UI, GPT-6, one of OpenAI's models, builds replies from text, visuals and interactive pieces, such as buttons, forms and charts, on free and paid plans. It still gives plain text when that is most useful. On the web, Personalization > Layout and Visuals > Simple reduces visual and interactive pieces, but some may still appear.[^openai-intelligent-ui]

*Other ways to keep a page.* A writing block, an editable draft inside a reply, can be copied, or saved to Library, where ChatGPT keeps your files, when that is available.[^openai-blocks] You can download a deep research report as Markdown, Word or PDF.[^openai-deep-research]

[^anthropic-sonnet-prompt]: Claude Sonnet 5.5 system prompts, Claude Platform Docs.
[^anthropic-docs]: Get started with Claude Docs, Claude Help Center.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^anthropic-visuals]: Custom visuals in chat and Cowork, Claude Help Center.
[^openai-characteristics]: Characteristics in ChatGPT, OpenAI Help Center.
[^openai-intelligent-ui]: Intelligent UI in ChatGPT, OpenAI Help Center.
[^openai-blocks]: Working with writing blocks and code blocks in ChatGPT, OpenAI Help Center.
[^openai-deep-research]: Deep research in ChatGPT, OpenAI Help Center.
[^anthropic-pricing]: Plans & pricing, Claude.


