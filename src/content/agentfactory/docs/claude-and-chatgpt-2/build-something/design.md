# Design (/claude-and-chatgpt-2/build-something/design)

---
type: Document
title: "Design"
description: "How to build visual work with Claude Design: mockups, prototypes, one-pagers and landing pages on a canvas of artboards, edited by chat, comment or hand, in your brand, then exported or handed to other tools, and how ChatGPT Sites does a similar job."
status: stable
order: 0.39935
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Design" ]
last_verified: 2026-11-17
sources:
  - id: claude-design
    title: "Get started with Claude Design (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/14604416-get-started-with-claude-design
  - id: anthropic-keyboard
    title: "Use artifacts with a keyboard or screen reader (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/17457950
  - id: claude-interactive
    title: "Use interactive connectors in Claude (Anthropic, verified 2026-11-17)"
    resource: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
  - id: claude-mcp-apps
    title: "Your favorite work tools are now interactive connectors inside Claude (Anthropic, January 26, 2026)"
    resource: https://claude.com/blog/interactive-tools-in-claude
  - id: claude-skills
    title: "How to create custom skills (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: claude-skill-conversation
    title: "How to create a skill with Claude through conversation (Anthropic, verified 2026-11-11)"
    resource: https://academy.claude.com/tutorials/how-to-create-a-skill-with-claude-through-conversation
  - id: openai-skills
    title: "Skills in ChatGPT (OpenAI Help Center, updated October 2026, verified 2026-11-20)"
    resource: https://help.openai.com/en/articles/20001066-skills-in-chatgpt
  - id: openai-sites
    title: "Creating and using ChatGPT Sites (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You judge a poster by looking at it, not by reading about it. Design work is like that. You need to see it, point at what is wrong, and move things around.

## What it is

**Claude Design** makes things people look at: posters, one-page handouts, **mockups** (pictures of how a screen or web page will look) and clickable **prototypes** (models you click through to test an idea). It is on every plan, including Free.[^claude-design]

A design has three parts:[^claude-design]

- The **canvas** is the whole work area.
- An **artboard** is one screen, page or poster on the canvas. A canvas can hold several.
- **Layers** are the parts on an artboard, such as a title, a picture or a box.

## Build one

In the Claude desktop app, ask for a design in any chat, or pick the Design tile in the Artifacts tab. Help Claude with two things:[^claude-design]

- **Your brand.** If your company has saved its colors and fonts (styles of letters) in Claude, Claude uses them by itself. This saved style is called a **design system**.
- **Examples.** Add screenshots, pictures or old slides that show what you like.

For Brightline:

> Design a printable one-page guide for Brightline's suppliers: how to send an invoice, what it must include, and when they will be paid. Make two versions: one plain, one with a simple diagram.

## Change it

There are three ways. Match the way to the size of the change:[^claude-design]

- **Chat** for big changes, such as a new layout.
- **A comment** for one part. Click the comment button, a speech bubble in the toolbar at the foot of the canvas. Then click the part and say what to change. Keep **Send to Claude** ticked when you send it, so Claude acts on it.[^anthropic-keyboard]
- **Do it yourself** for quick fixes. Drag, resize and line things up.

![A design: canvas, artboards and layers. Left, a canvas holds two artboards of the supplier guide, one plain and one with a diagram. Each artboard holds layers: a text layer for the title and a text layer for the steps. The plain guide also has a shape layer, a box. The other has an image layer, the diagram. Right, three ways to edit: chat for big changes such as a new layout, a comment for one part, and doing it yourself for quick fixes such as dragging and resizing. At the foot: an artboard is one screen, page or poster, and layers are the parts on it.](img/canvas-artboards-and-layers.png)

## Share it and save a copy

Click **Share** and choose whether each person can view it, comment on it or change it. To save a copy, export it as a PDF or PowerPoint file, among others. You can also send it to other design apps.[^claude-design]

Three things to know, because Design is still growing:[^claude-design]

- **It does not keep old versions yet.** Before a big change, save a copy as a PDF, so you can see how it looked. You cannot load the PDF back into Claude Design, so to go back you must redo the changes.
- **Two people editing at once may not work well.** Take turns.
- **A comment sometimes does not show** on the canvas. You can still find it in the list of comments. If Claude seems to miss it, check that **Send to Claude** was ticked, then type the request in the chat.

## Check it before you share it

- **Look at it at its real size.** Text that looks fine on screen may be too small on paper.
- **Read every word.** In a picture, it is easy to miss a wrong date or price.
- **Check the colors and fonts.** Are they really your company's?

## Or work in Canva

**Canva** is a design website with ready-made templates. If your team already keeps its templates and brand there, you can work in Canva without leaving Claude. Canva is an **interactive connector**: a connected app that opens as a live window inside your chat. You click and change things in the window, and you can keep typing to Claude at the same time. Anthropic says interactive connectors are for all users, so you do not need a paid Claude plan. You do need a Canva account.[^claude-interactive]

1. **Connect it.** In the Claude desktop app, open **Customize > Connectors** (or **Plugins**, as on the [Slides](slides.md#build-it-from-a-connected-app) page). Search for **Canva** and pick the connector made by Canva. Click **Connect** and sign in to Canva. Canva then lists what Claude will be able to do in your account, such as create designs and change or delete your uploads. Read the list before you allow it.
2. **Ask.** In a chat, ask for something Canva makes, such as a poster. A Canva box appears in the chat with the design. Click the expand button on the box, and Canva's editor opens beside the chat.
3. **Change it two ways.** Click a part in the Canva editor and change it yourself, or ask Claude in the chat.
4. **Read every word.** When this was run on November 17, 2026, the poster came back with two lines that nobody had asked for.

![Canva's editor open beside a chat in the Claude app, as it looked on November 17, 2026. On the left, the chat: a request for a poster about a handheld scanner pilot, and Claude's reply that the poster is ready in Canva. On the right, a panel titled Canva, with Canva's own tools (Templates, Elements, Text, Brand, Uploads) and the poster. One block of small text on the poster is selected, and a bar above it offers the font, the size and bold.](img/design-canva-editor-in-claude.png)

Which one should you use?

- **Claude Design** when you want Claude's canvas, your company's design system in Claude, and Claude's exports.
- **Canva** when your templates are already in Canva, or the finished work must stay in Canva for your team.

You can also start in Claude Design and send the design to Canva later.[^claude-design] Later in the book, [Chapter 20](../../building-ai-workers/mcp-apps/overview.md) shows how an interactive connector is built.[^claude-mcp-apps]

To stop Claude using your Canva account, open the connector's page again, click the three dots beside **Connected**, and choose **Disconnect**.

## In ChatGPT: Sites

OpenAI's help pages do not mention a design canvas like this one. Its closest tool is **Sites**, but it makes something different:[^openai-sites]

- **A Claude design shows how something should look.** You use it to look, discuss and decide. Even a clickable prototype, or a design exported as a web page, is a model. It does not save what people type or connect to your company's systems.
- **A ChatGPT Site is a working web page.** People use it: they click, fill in forms and see live information.

So use a design to agree how something should look. Use a site when people need to use it.

1. **Make one.** In the ChatGPT desktop app, choose **ChatGPT**, then **Work**. Describe the web page you want. Use the word "website". ChatGPT shows you a private preview.
2. **Change it.** Ask for changes. Check the new preview each time.
3. **Publish it carefully.** When you publish (the button says **Deploy**), people can see the change right away. So save a version first, check it, and only then publish. Remove anything private before you share.

Sites is on ChatGPT's Plus, Pro, Business and Enterprise plans. It is not in the older desktop app, now called ChatGPT Classic.[^openai-sites]

## Save your method as a skill

A design system saves how your work **looks**. A **skill** saves how you **do** a job: the steps and rules for Claude to follow.

Take Brightline's supplier guides. The colors and fonts come from the design system. The rules are a skill, for example:

> Every supplier guide gives the payment day, says how to send an invoice and lists what an invoice must include. It never shows a bank account number.

To make the skill, tell Claude in a chat that you want a skill for supplier guides, answer its questions, save it and turn it on in Settings.[^claude-skill-conversation] Skills are on every plan, when **Create and edit files** is turned on in Settings, under Capabilities.[^claude-skills]

Still read the first design made with the skill: look for the payment day, and make sure there is no bank account number.

**In ChatGPT:** skills work in a similar way. ChatGPT uses an installed skill by itself when the skill fits the task. Typing "@" names a plugin, not a skill.[^openai-skills]

## Try it (any plan)

Download [q3_review_notes.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/q3_review_notes.txt) and [brand_note.txt](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brand_note.txt), which gives Brightline's colors and fonts.

1. **Build it.** In the Artifacts tab, pick **Design**. Attach both files and type:

   > Design a one-page update for Brightline's staff about the third quarter. It will be printed and pinned up in the warehouse. Show three results, two changes that are coming (the scanner pilot and the hiring pause), and a thank-you to the warehouse team. Use the colors and fonts in the brand note. Leave out every dollar figure. Make two versions: one mostly text, one with icons.

2. **Comment on it.** Click the comment button at the foot of the canvas, click the results on the text version, and write "Turn these into three icons with one short line each". Keep **Send to Claude** ticked, and send it.
3. **Save a copy, then ask for a new layout.** Design does not keep old versions. So click the arrow beside the design's name, choose **Export**, and save a PDF. Then type in the chat: "Show me a different layout with one large headline."
4. **Check it** against the answers below.

**The answers.** The headings are deep teal, with one amber highlight and an off-white background, as the brand note says. There are no dollar figures. The scanner pilot starts on November 1 and runs for six weeks. The hiring pause covers admin roles only.

[^claude-design]: As verified on November 17, 2026. Export formats are .zip, PDF, PowerPoint, Google Slides and web page (HTML), and Claude can send a design to tools such as Canva or Miro. The old standalone site, claude.ai/design, closes on December 14, 2026. Get started with Claude Design, Anthropic.
[^anthropic-keyboard]: As verified on November 17, 2026. Anthropic says a "Send to Claude" checkbox "sets whether the comment also goes to Claude as a request", for decks and designs. In the app on November 17, 2026, it started ticked. Use artifacts with a keyboard or screen reader, Anthropic. Anthropic's Design page also says comments sometimes do not show on the canvas, but you can see them in the comments view. Get started with Claude Design, Anthropic.
[^claude-interactive]: As verified on November 17, 2026. Anthropic says interactive connectors are available to all users, in Claude, Claude Desktop and the phone apps. It lists Canva with others, such as Asana, Box, Figma and Slack. They carry an "Interactive" badge in the Connectors Directory. In one account on November 17, 2026, the Canva connector showed no such badge, and a search for Canva returned two entries with that name. Team and Enterprise owners can turn off the interactive part of a connector. Use interactive connectors in Claude, Anthropic.
[^claude-mcp-apps]: Anthropic says it brought interactive connectors to Claude "with MCP Apps", an extension to MCP that other AI products can use too. Your favorite work tools are now interactive connectors inside Claude, Anthropic.
[^openai-sites]: As verified on November 11, 2026, OpenAI says Sites "is available to ChatGPT Plus and Pro accounts, as well as Business and Enterprise workspaces", that deploying a change updates the live Site, so you save a version and deploy it after you review it, and that "Sites is not available in the ChatGPT Classic app." Building or editing a Site counts toward your Codex usage. Creating and using ChatGPT Sites, OpenAI.
[^claude-skill-conversation]: As verified on November 11, 2026. Anthropic's tutorial says to describe the skill in a new chat, answer Claude's questions, save the skill and turn it on under Settings, Capabilities, Skills. Claude reads each skill's name and description to decide when to use it. How to create a skill with Claude through conversation, Anthropic.
[^claude-skills]: As verified on November 11, 2026. Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". In the updated Settings layout, the code execution switch is called Create and edit files. How to create custom skills, Anthropic.
[^openai-skills]: OpenAI: "After a skill is created and installed, ChatGPT can automatically use one or more skills when they are helpful." As verified on November 20, 2026. Skills in ChatGPT, OpenAI Help Center.


