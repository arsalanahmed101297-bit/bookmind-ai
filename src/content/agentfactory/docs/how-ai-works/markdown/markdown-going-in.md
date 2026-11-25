# 0.2.1 Markdown going in (/how-ai-works/markdown/markdown-going-in)

---
type: Document
title: "0.2.1 Markdown going in"
description: "Markdown is plain text with a few marks for a page's shape, which put that shape in front of the model, and a neat page is only as right as its lines."
status: stable
order: 13.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.2"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.2.1" ]
last_verified: 2026-10-16

sources:
  - id: anthropic-prompting
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
    title: "Prompting best practices, Structure prompts with XML tags, and Control the format of responses (Claude Platform Docs, verified 2026-10-16)"
  - id: openai-prompting
    resource: https://developers.openai.com/api/docs/guides/prompt-engineering
    title: "Prompt engineering, Message formatting with Markdown and XML (OpenAI API docs, verified 2026-10-16)"
  - id: openai-characteristics
    resource: https://help.openai.com/en/articles/20001038-characteristics-in-chatgpt
    title: "Characteristics in ChatGPT (OpenAI Help Center, updated 2026-08-30, verified 2026-10-16)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A recipe card has a title, a list of ingredients and numbered steps. A friend can cook from it without asking which line is an ingredient and which is a step. The shape does that work. But if the card says two cups of salt, your friend adds two cups of salt. The shape makes the mistake easy to see, and just as easy to follow.

**What you will learn.** What markdown is, when the AI writes it for you. Which shapes to give your notes, and why a neat page can still be wrong.

**Why it matters.** Notes with a clear shape get better answers, because the AI no longer guesses which line is which. Headings and lists organize information for the AI, and for you.

## Marks the app turns into a page

### What is markdown, if you never type it?

Markdown is plain text with a few marks that show a page's shape, such as # signs for a heading, a dash for a bullet point and stars for bold. A plain sentence is markdown too. It simply has no marks.

Both AI vendors' apps format their replies with these marks, and each app turns them into headings and lists. One AI vendor even names its setting for more headings, lists and tables "Use more markdown".[^openai-characteristics] To see the marks yourself, ask for the page in a code block. A code block is a box that shows text exactly as it is written, with the marks included.

![One page, two views: the same page, twice. On the left, under the label "What you see in the chat", the finished page: a bold heading "Rules" with two bullet points under it, a bold heading "Remarks" with one bullet point, and a bold heading "Open questions" with one bullet point. On the right, under the label "What the model wrote", the same page as plain text in a gray code block: a line "## Rules", two lines that start with "- ", a line "## Remarks", one line that starts with "- ", a line "## Open questions" and one line that starts with "- ". An arrow runs from the code block to the drawn page, labeled "the app draws the marks". Under the code block, a note reads "Ask for it in one code block to see the marks." A banner reads: "The model writes the marks. The app draws them."](img/two-views.png)

*Figure 0.2.1. One page, two views. The app turns the marks into a neat page, and a code block shows them.*

### Why give the AI your notes in a clear shape?

Because a paragraph hides which line is which. It does not say which line is a rule and which is a remark, or which number goes with which. Where the shape is missing, the model guesses it, from training. Headings, lists or plain labels such as "Rules:" put the shape into the text, where the model reads it. The marks reach the model as text, as tokens like the words around them, as [0.1.2](../what-ai-actually-is/why-it-behaves.md) showed.

The AI vendors' own guides say the same. One says that marking each part of a prompt helps the model read it with fewer mistakes.[^anthropic-prompting] The other says that headings and lists mark a prompt's sections, and other marks show where a document starts and ends.[^openai-prompting]

## The shapes you can ask for

### Which shape fits your notes, and what does each one let you check?

Ask for the shape that fits your notes. Each one shows the model which line is which, and each one gives you something to check.

| Shape | Ask for it when | What it lets you check |
| --- | --- | --- |
| Headings | your notes have parts, such as Rules and Remarks | that each line sits under the right heading |
| A list | you have several items, such as rules or steps | that each item says one thing |
| A table | facts go together, such as each invoice and its amount | that each value is in its own row and column |
| A quote, kept word for word | you need a source's exact words | that the quote matches its source |
| A source after each rule | a rule comes from a policy | that each rule names its line, such as "(policy 4.1)" |

Behind each shape is a mark, such as `##` in front of a heading or `-` in front of a list item. A quote kept word for word sits in a code block, so the model can tell where the quote ends and your request starts.

### Do you have to type the marks?

Rarely. Ask the AI to put your notes in markdown, under the headings you name, and it types the marks. Your part is to read the page and check it. Sometimes you need the marks themselves, to keep the page as a file or to give it to another AI. [0.2.4](both-ai-vendors.md) shows how each AI vendor lets you copy or save them.

## Neat is not checked

### Does a neat page make the answer right?

Only as right as its lines. The marks show the model which line is which, so it stops guessing the shape. They do not check the lines. A wrong rule in a neat bullet point is followed as surely as a right one. It also looks more like a rule than it did in a paragraph.

So the neat page is for you too. On it, you see what each line became: a rule, a remark or an open question. Check each rule against its source, and add the source's line to the rule, such as "(policy 4.1)". Put what nothing settles under "Open questions". Then the model sees the gap and can say that it is open, instead of filling it with a guess.

![The marks put the shape in front of the model. Two rows of boxes run left to right. In the top row, "the notes, as one paragraph" goes into "the context window", drawn as a row of word tokens, then into "the model", labeled "shape guessed, from training", then out to "the answer". In the bottom row, "the notes, as a page", under the headings "Rules", "Remarks" and "Open questions", goes into "the context window", drawn as a row of tokens with the marks "##" and "-" among the words, then into "the model", labeled "shape read from the marks", then out to "the answer". One line under "Rules" looks as neat as the others but carries a red tag, "wrong: policy 5.1". Below the page, a person with a document labeled "AP policy, version 3" checks the page, with a dotted arrow labeled "checked against its source". No arrow runs back into the model. A banner reads: "The marks show which line is which. Only you can check the lines."](img/shape-in-front.png)

*Figure 0.2.2. The marks put the shape in front of the model. Only you can check the lines.*

[^openai-characteristics]: Characteristics in ChatGPT, OpenAI Help Center.
[^anthropic-prompting]: Prompting best practices, Claude Platform Docs.
[^openai-prompting]: Prompt engineering, OpenAI API docs.


