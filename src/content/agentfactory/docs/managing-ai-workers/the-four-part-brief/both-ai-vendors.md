# 5.4 Run the brief in your own app (/managing-ai-workers/the-four-part-brief/both-ai-vendors)

---
type: Document
title: "5.4 Run the brief in your own app"
description: "How to run your Four-Part Brief in Claude, ChatGPT or OpenCode, step by step, the differences that change what the brief must say, and the vendors' own words for the four parts."
status: stable
order: 205.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "05"
part: II
expert_status: required
concepts: [ "5.4" ]
last_verified: 2026-10-16
review_by: 2026-12-21
sources:
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-claude-docs
    title: "Get started with Claude Docs (Claude Help Center, updated 12 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: anthropic-google-workspace
    title: "Use Google Workspace connectors (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
  - id: openai-prompting
    title: "Prompting (OpenAI, ChatGPT Learn, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/prompting
  - id: openai-work-files
    title: "Creating and editing documents, spreadsheets, and presentations with ChatGPT Work (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
  - id: openai-permissions
    title: "Permissions (OpenAI, ChatGPT Learn, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: anthropic-associate-course
    title: "Claude Certified Associate - Foundations Prep Course, Module 2: Prompting and Task Execution (Anthropic Partner Academy, verified 2026-10-28)"
    resource: "Anthropic Partner Academy, anthropic-partners.skilljar.com, sign-in required: the course has no public URL"
  - id: opencode-agents
    title: "Agents (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/agents/
  - id: anthropic-cowork-start
    title: "Get started with Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: openai-subagents
    title: "Subagents (OpenAI, ChatGPT Learn, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/agent-configuration/subagents?surface=app
  - id: openai-blocks
    title: "Working with writing blocks and code blocks in ChatGPT (OpenAI Help Center, updated 2026-10-06, verified 2026-10-16)"
    resource: https://help.openai.com/en/articles/20001246-working-with-writing-blocks-and-code-blocks-in-chatgpt
  - id: anthropic-one-claude-plans
    title: "Claude Cowork and chat are one Claude, the plans it reaches first (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: openai-work-codex
    title: "ChatGPT Work and Codex (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
  - id: opencode-cli
    title: "CLI (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/cli/
  - id: opencode-instructions
    title: "Instructions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/instructions/
  - id: opencode-mcp
    title: "MCP servers (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
  - id: opencode-permissions
    title: "Permissions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, updated 11 November 2026, verified 2026-11-19)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: openai-temporary-chat
    title: "Temporary chat in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** The same shopping list works in two supermarkets, as long as it says "the small bag" rather than "the usual."

**What you will learn.** Where Claude, ChatGPT and an open-source tool keep the controls a brief depends on: memory, attachments, where the file is created, permissions and helpers.

**Why it matters.** The brief is the same on every app. What changes is where you attach files, where the result is created, and how far the app lets the worker go alone.

## How to run the brief in your app

These are the steps for running a brief in a fresh chat that has only the brief and its files ([5.1](four-parts.md)). Keep this page open beside your app while you run one, and follow your tab.

### Claude

These steps work in any Claude conversation. If your account does not have the one conversation, which both chats and runs tasks, yet, you still see Chat and Cowork. Use Cowork: it is where a task runs, and Anthropic's pages still call a task Cowork ([the Tour](../../claude-and-chatgpt-2/tour/claude-conversations.md)).[^anthropic-one-claude-plans]

1. **Open a new conversation, and set it to Manual.** The permission setting in the message box, not a project setting, covers the whole conversation. Manual asks before Claude takes an action. Auto keeps working while automated safety checks run before most of its actions, and it is rolling out as the default on several plans, so read what your own message box shows.[^anthropic-one-claude]
2. **Turn memory off for this chat, before the first message,** in the "+" menu by the message box. You cannot change it once the chat starts. If you do not see it, memory is already off. A chat with no memory has only what you give it.[^anthropic-memory]
3. **Attach the brief and the files,** or name a connected app such as Google Drive. Google Docs sync, so Claude reads the latest version.[^anthropic-google-workspace]
4. **Send the brief, with its destination named.** The destination you name decides where the file is created, for example a Claude Doc, a document Claude creates and keeps in your account:[^anthropic-claude-docs]

   ```text
   Send back a packing list for the school trip, one item per line,
   as a Claude Doc.
   ```

5. **Say whether you want helpers** ([5.3](decompose.md)). Claude may start them on its own for a complex task, so if you do not want them, say so: "Do the whole job yourself."[^anthropic-cowork-start]
6. **Check it worked.** A pass meets the brief's "Done when" line, and nothing the brief says must wait for you happened without you. If something did, a constraint line is missing. Add it, and run the brief again in a new conversation.

You use these steps in Lab 5, [Task 11](lab.md#task-11-the-same-brief-a-fresh-chat).

### ChatGPT

Work, where ChatGPT does longer jobs, needs an eligible paid plan. Without it, follow the same steps in an ordinary chat, and skip step 1.[^openai-work-codex]

1. **Open Work** from the Chat and Work toggle.
2. **Start a Temporary Chat,** a chat that does not create or update memories, and set it to Unpersonalized, so it reads no saved memories, before the first message.[^openai-temporary-chat]
3. **Attach the brief and the files,** or name connected sources and what to take from each.[^openai-prompting]
4. **Send the brief, with its destination named,** for example a Google file or a file to download.[^openai-work-files]
5. **Write the stops in the brief.** In the desktop app, Ask for approval in the permissions control still lets ChatGPT read and edit files in its workspace, the folder it works in, without asking. So the brief must say which actions wait for you:[^openai-permissions]

   ```text
   Draft the reply freely. Send nothing, and ask before you delete
   any file.
   ```

6. **Ask for helpers if you want parallel work,** because ChatGPT usually starts them only when you ask: "Compare the three hotels in parallel, with one helper each."[^openai-subagents]
7. **Check it worked.** A pass meets the brief's "Done when" line, and nothing the brief says must wait for you happened without you. If something did, add the missing constraint line, and run the brief again in a new Temporary Chat.

You use these steps in Lab 5, [Task 11](lab.md#task-11-the-same-brief-a-fresh-chat).

### Open source

OpenCode, an open-source coding agent, runs on your own computer, with no plan to buy.

1. **Open OpenCode in the job's folder,** in its terminal (a window for typed commands), desktop or web app.[^opencode-cli]
2. **Put standing rules in an AGENTS.md file in that folder,** a plain text file of standing instructions that OpenCode loads for you. Rules for one job stay in the brief.[^opencode-instructions]
3. **Read what its default agent may do.** It may use every tool, and asks first only before reading a file of sensitive settings.[^opencode-agents]
4. **Set every action that can change or send something to ask, for helpers too, before the first brief.**[^opencode-permissions]
5. **Send the brief, with the folder and file name it writes to.** Other apps connect through MCP servers, small programs that connect an AI tool to another system, much like connectors.[^opencode-mcp]
6. **Check it worked,** as on the other tabs: the brief's "Done when" line is met, and nothing that must wait for you happened.

Lab 5 runs in Claude or ChatGPT. Use these steps when you run a brief in your own tool.

## What changes a step

On every product, write in the brief which actions must wait for you. On ChatGPT the destination can also be a Writing block, a document ChatGPT writes and edits in the chat, or a page in Space, ChatGPT's shared area for pages and decks.[^openai-blocks][^openai-space]

![A table under the title One briefing framework, two vendors, marked as updated on 4 November 2026. Three columns: the Four-Part Brief, Claude from Anthropic, and ChatGPT from OpenAI. Outcome, what should exist: on Claude, the desired outcome, so describe the result and Claude works through the steps. On ChatGPT, the goal, so start with the result, not a detailed recipe. Context, who for and which sources: on Claude, files, links and connected apps, such as Drive and synced Docs. On ChatGPT, context: the source material and what to take from each. Format, outlined in gold, what shape and destination: on Claude, files, Docs, Slides and Designs, or Google files when requested, so name the type and destination. On ChatGPT, files, Space pages or Google files, so name where each output goes. Constraints, outlined in gold, which rules and when to stop: on Claude, written limits plus the permission setting, Auto or Manual, which applies to the whole conversation. On ChatGPT, written boundaries plus controls, where desktop permissions govern local actions. A note says to make the gold rows explicit on both: state where each output goes and which actions must wait for you. A footer reads: the same outcome, governing rules and acceptance criteria, while delivery, input access and permission setup may differ.](img/both-ai-vendors.png)

## What stays the same

The outcome and the rules ([5.1](four-parts.md)). If moving a brief means changing either, it was describing a tool, not a job.

## Product reference

This is for looking things up, not for reading through. The vendors' guides use other words for the four parts. Anthropic's course for the Claude Certified Associate exam lists five parts.[^anthropic-associate-course] OpenAI's prompting guide lists four.[^openai-prompting]

| What the brief says | This book | Anthropic's Associate course | OpenAI's prompting guide |
| --- | --- | --- | --- |
| What is asked | Outcome | Task: one main action, such as "summarize" | Goal |
| Who it is for, and what to work from | Context | Context | Context |
| The shape of the result | Format | Output format | Output |
| Length and tone | Constraints, as content rules | Constraints | Output |
| What to keep, leave out or avoid | Constraints, as content rules | Constraints | Boundaries |
| What it may do alone | Constraints, as autonomy | Not covered | Boundaries |
| Who the AI is | The worker's definition, not the brief | Role | Not covered |

[^anthropic-one-claude-plans]: Claude Cowork and chat are one Claude, Claude Help Center, accessed 18 November 2026.
[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Claude Help Center.
[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-google-workspace]: Use Google Workspace connectors, Claude Help Center.
[^anthropic-claude-docs]: Get started with Claude Docs, Claude Help Center.
[^anthropic-cowork-start]: Get started with Claude Cowork, Claude Help Center.
[^openai-work-codex]: ChatGPT Work and Codex, OpenAI Help Center.
[^openai-temporary-chat]: Temporary chat in ChatGPT, OpenAI Help Center.
[^openai-prompting]: Prompting, ChatGPT Learn, OpenAI.
[^openai-work-files]: Creating and editing documents, spreadsheets, and presentations with ChatGPT Work, OpenAI Help Center.
[^openai-permissions]: Permissions, ChatGPT Learn, OpenAI.
[^openai-subagents]: Subagents, ChatGPT Learn, OpenAI.
[^opencode-cli]: CLI, OpenCode v2 documentation.
[^opencode-instructions]: Instructions, OpenCode v2 documentation.
[^opencode-agents]: Agents, OpenCode v2 documentation.
[^opencode-permissions]: Permissions, OpenCode v2 documentation.
[^opencode-mcp]: MCP servers, OpenCode v2 documentation.
[^openai-blocks]: Working with writing blocks and code blocks in ChatGPT, OpenAI Help Center.
[^openai-space]: Getting started with Space in ChatGPT, OpenAI Help Center.
[^anthropic-associate-course]: Claude Certified Associate - Foundations Prep Course, Module 2, Anthropic Partner Academy.


