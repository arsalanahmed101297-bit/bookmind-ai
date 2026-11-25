# 12.8 How today's tools realize it (/building-ai-workers/agentic-coding/both-ai-vendors)

---
type: Document
title: "12.8 How today's tools realize it"
description: "How Claude Code, Codex and OpenCode each apply this chapter's ideas, a short practice for each lesson in tabs, and the differences that change a decision."
status: stable
order: 312.8
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T04:19:26Z
chapter: "12"
part: III
expert_status: manager
concepts: [ "12.8" ]
last_verified: 2026-11-03
sources:
  - id: openai-usage-limits
    title: "Understanding ChatGPT and Codex usage limits (OpenAI Help Center, verified 2026-11-04)"
    resource: https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits
  - id: agents-md
    title: "AGENTS.md (the open format's own site, verified 2026-11-01)"
    resource: https://agents.md/
  - id: anthropic-desktop
    title: "Desktop application (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/desktop
  - id: anthropic-desktop-quickstart
    title: "Get started with the desktop app (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/desktop-quickstart
  - id: anthropic-permission-modes
    title: "Choose a permission mode (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/permission-modes
  - id: anthropic-permission-modes-start
    title: "Choose a permission mode, which mode a session starts in (Anthropic, verified 2026-10-31)"
    resource: https://code.claude.com/docs/en/permission-modes
  - id: anthropic-settings
    title: "Settings files and precedence (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/settings
  - id: anthropic-permissions
    title: "Configure permissions (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/permissions
  - id: anthropic-memory
    title: "How Claude remembers your project (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/memory
  - id: anthropic-skills
    title: "Skills (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/skills
  - id: anthropic-subagents
    title: "Subagents (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/sub-agents
  - id: anthropic-apps-changelog
    title: "Changelog (Anthropic, verified 2026-10-30)"
    resource: https://claude.com/docs/cowork/changelog
  - id: anthropic-projects
    title: "Projects in Claude Code (Anthropic, verified 2026-10-31)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: anthropic-cross-session
    title: "Cross-session messaging (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
  - id: anthropic-ios-simulator
    title: "iOS Simulator pane (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/desktop-ios-simulator
  - id: anthropic-commands
    title: "Commands (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/commands
  - id: anthropic-output-styles
    title: "Output styles (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/output-styles
  - id: anthropic-advisor
    title: "Advisor (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/advisor
  - id: anthropic-mods
    title: "Mods (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/plugins/mods/overview
  - id: anthropic-create-mod
    title: "Create a mod (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/plugins/mods/create
  - id: anthropic-mod-events
    title: "Mod events (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/plugins/mods/events
  - id: anthropic-model-config
    title: "Model configuration (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/model-config
  - id: anthropic-checkpointing
    title: "Checkpointing (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/checkpointing
  - id: anthropic-code-review-local
    title: "Review locally with /code-review (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/code-review-local
  - id: anthropic-setup
    title: "Advanced setup (installing the command-line version) (Anthropic, verified 2026-10-31)"
    resource: https://code.claude.com/docs/en/setup
  - id: anthropic-headless
    title: "Run Claude Code programmatically (Anthropic, verified 2026-10-30)"
    resource: https://code.claude.com/docs/en/headless
  - id: anthropic-code-changelog
    title: "Claude Code changelog, versions 2.1.283 and 2.1.284 (Anthropic, verified 2026-11-03)"
    resource: https://code.claude.com/docs/en/changelog
  - id: anthropic-goal
    title: "Keep Claude working toward a goal (Anthropic, verified 2026-11-03)"
    resource: https://code.claude.com/docs/en/goal
  - id: anthropic-pro-max
    title: "Use Claude Code with your Pro, Max, or Ultra plan (Anthropic, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan
  - id: openai-codex-whats-new
    title: "What's new in Codex (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/whats-new
  - id: openai-desktop-app
    title: "The ChatGPT desktop app (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/app
  - id: openai-codex-modes
    title: "Codex environments (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/environments/modes
  - id: openai-permission-modes
    title: "Permissions (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: openai-sandboxing
    title: "Sandbox (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: openai-agents-md
    title: "AGENTS.md (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/agent-configuration/agents-md
  - id: openai-long-running
    title: "Long-running work (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/long-running-work
  - id: openai-slash-commands
    title: "Slash commands (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/reference/slash-commands
  - id: openai-subagents
    title: "Subagents (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/agent-configuration/subagents
  - id: openai-codex-models
    title: "Codex models (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/models
  - id: openai-build-skills
    title: "Build skills (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/build-skills
  - id: openai-plugins
    title: "Plugins (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/plugins
  - id: openai-hooks
    title: "Hooks (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/hooks
  - id: openai-browser
    title: "Browser (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/browser
  - id: openai-computer-use
    title: "Computer Use (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/computer-use
  - id: openai-model-selection
    title: "Model selection (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/model-selection
  - id: openai-code-review
    title: "Code review (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/code-review
  - id: openai-codex-github
    title: "Codex on GitHub (OpenAI, verified 2026-10-30)"
    resource: https://github.com/openai/codex
  - id: openai-noninteractive
    title: "Non-interactive mode (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/non-interactive-mode
  - id: openai-codex-pricing
    title: "Codex pricing (OpenAI, verified 2026-10-30)"
    resource: https://learn.chatgpt.com/docs/pricing
  - id: opencode-readme
    title: "README (OpenCode, verified 2026-10-30)"
    resource: https://github.com/anomalyco/opencode
  - id: opencode-cli-server
    title: "CLI and server (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/cli/
  - id: opencode-providers
    title: "Providers, version 2 (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/providers/
  - id: opencode-go
    title: "OpenCode Go (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/go
  - id: opencode-agents
    title: "Agents (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/agents/
  - id: opencode-permissions
    title: "Permissions (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: opencode-instructions
    title: "Instructions (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/instructions/
  - id: opencode-tools
    title: "Tools (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/tools/
  - id: opencode-changelog
    title: "Changelog (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/changelog
  - id: opencode-commands
    title: "Commands (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/commands/
  - id: opencode-skills
    title: "Skills (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/skills/
  - id: opencode-plugins
    title: "Plugins (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/build/plugins/
  - id: opencode-server-plugins
    title: "Server plugins (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/build/plugins/server/
  - id: opencode-compaction
    title: "Compaction (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/compaction/
  - id: opencode-snapshots
    title: "Snapshots (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/snapshots/
  - id: opencode-web
    title: "Web (OpenCode, verified 2026-10-30)"
    resource: https://opencode.ai/v2/docs/cli/web/
  - id: opencode-security
    title: "Security policy and advisories (OpenCode, verified 2026-10-30)"
    resource: https://github.com/anomalyco/opencode/security
  - id: anthropic-overview
    title: "Overview (Anthropic, verified 2026-10-31)"
    resource: https://code.claude.com/docs/en/overview
  - id: anthropic-cowork
    title: "Get started with Claude Cowork (Anthropic, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: openai-work-codex
    title: "ChatGPT Work and Codex (OpenAI, verified 2026-10-31)"
    resource: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
  - id: openai-permission-profiles
    title: "Permissions, permission profiles (OpenAI, beta, verified 2026-11-03)"
    resource: https://learn.chatgpt.com/docs/permissions
  - id: opencode-cli-commands
    title: "CLI commands, version 2 (OpenCode, verified 2026-11-03)"
    resource: https://opencode.ai/v2/docs/cli/commands/
  - id: opencode-tui
    title: "Terminal interface, version 2 (OpenCode, verified 2026-11-03)"
    resource: https://opencode.ai/v2/docs/cli/tui/
  - id: openai-approvals-security
    title: "Agent approvals and security (OpenAI, verified 2026-11-03)"
    resource: https://learn.chatgpt.com/docs/agent-approvals-security
  - id: opencode-source
    title: "Source code at version 2.2.5 (OpenCode, read 2026-11-03)"
    resource: https://github.com/anomalyco/opencode/tree/v2.2.5
generated:
  at: 2026-11-21T04:19:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Three hardware stores sell the same kind of drill. The motor, the bit and the trigger work the same way in each. Each store keeps the drill in a different aisle, the safety catch sits in a different place, and one store sells only the drill, so you bring your own battery. Concepts [12.1](from-chat-to-coding-agent.md) to [12.7](outside-the-app.md) taught the drill. This page shows how each store sells it, as of November 3, 2026, and then you pick one up.

**What the vendors say each tool is for.** Anthropic calls Claude Code an agentic coding tool that reads your codebase, edits files, runs commands and works with your development tools, git included.[^anthropic-overview] The conversation you used in Part II runs code and works in your folders too, and Anthropic says the same agentic capabilities now run in any conversation, for knowledge work beyond coding.[^anthropic-cowork],[^anthropic-one-claude] OpenAI says it is bringing Work, its agent for longer, multi-step work and finished deliverables, into the main ChatGPT experience,[^openai-usage-limits] and that Codex stays dedicated to software development, with local folders, repositories, terminals and developer tools.[^openai-work-codex] So in both apps the coding agent sits one switch from the conversation, Claude's *Code* tab and ChatGPT's *Codex* view, and the difference is the job, not the box.

**How to use this page.** Each section below takes one lesson. In your tool's tab, you first read how that tool applies the idea. Then you try it, in ten to twenty minutes, and check the result. If you did each practice after its lesson, go straight to [the differences that change a decision](#the-differences-that-change-a-decision).

- **The practice folder.** Download [brightline-practice-ch12.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-practice-ch12.zip) and unzip it. It is separate from the lab, which has its own zip, so you can change anything in it. Open only its `brightline-ap` folder.
- **What you need.** One of the three tools. Claude Code needs a paid Claude plan, or the Claude app set up on another company's model, as [the Claude app without a Claude plan](../../appendices/claude-and-chatgpt-2/appendix-the-claude-app-without-a-claude-plan.md) shows. Codex runs on any ChatGPT plan, and OpenCode is free but needs a model. The tests need Node.js 24 or later, which [the lab's list](lab.md#what-you-need) links.
- **The tabs.** Pick your tool in the first strip, and every strip on this page follows. Do Claude Code first if you can, because the lab and the Developer exam, CCDV-F, are on Claude Code. Then try one step in a second tool, to see what changes and what does not.
- **The details.** Version numbers, settings files and the facts the exam asks about are in [the details, tool by tool](#the-details-tool-by-tool). You do not need them for the steps.

## Practice: the workspace

From Concept [12.2](the-workspace.md): which folder, which session, which machine. You make all three choices here, and nothing in the folder changes. Ten minutes.

**Decide first.** Which folder, which session, which machine? Then compare with this: `brightline-ap`, not the folder above it, because that one also holds `live-export/`, and whatever the agent reads goes to the model's provider. A new session, for this one task. This computer, so you can watch.

### Claude Code

**How Claude Code does it.** Claude Code is the *Code* tab in the Claude desktop app. A session is one conversation tied to a folder, on your computer (*Local*) or on Anthropic's machines (*Cloud*), where it keeps going after you close the app.[^anthropic-desktop]

1. Open the Claude desktop app and choose the *Code* tab. If you do not have the app yet, [download it](https://claude.com/download), and [Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md) shows how to set it up.
2. Choose *Open folder…* and pick `brightline-ap`.
3. In the row under the message box, look at the environment selector, and keep *Local*.
4. Send: "What does this folder hold, and how is it tested? Do not change anything." Then read the cards beside the chat.

   ![The cards beside the chat in Claude's Code tab, as they looked on 31 October 2026. The Environment card lists the environment, which is boxed, then the folder, the GitHub repository, the branch and a Remote Control switch. Under it, the Context card reads 97 percent, with a red bar.](img/practice-workspace.png)

5. Ask: "Is there a folder next to this one called live-export? Tell me if you could not check."
6. Click *+ New*. Your first session is still in the sidebar, and clicking it resumes it.

**What you should see.** A session in `brightline-ap`, on your computer, that describes the folder and changes nothing, and both sessions in the sidebar. If the agent looks next door, or asks to, you have seen that the folder is not a wall.

### Codex

**How Codex does it.** Codex is a mode of the ChatGPT desktop app. A chat runs in the folder you open, on this computer, in a git worktree on this computer, or in the cloud, from an environment you set up once.[^openai-codex-modes]

1. Open the ChatGPT desktop app, open the ChatGPT dropdown, and select *Codex*. If you do not have the app yet, [download it](https://chatgpt.com/download/), and [Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md) shows how to set it up.
2. Choose *Open folder* and pick `brightline-ap`. Set *Work in* to *This computer*.
3. Send: "What does this folder hold, and how is it tested? Do not change anything."
4. Ask: "Is there a folder next to this one called live-export? Tell me if you could not check."
5. Choose *New chat*. Your first chat is still in the sidebar, and opening it lets you continue.

**What you should see.** A chat in `brightline-ap`, on this computer, that describes the folder and changes nothing, and both chats in the sidebar. If it looks next door, you have seen that the folder is not a wall.

### OpenCode

**How OpenCode does it.** You open a folder as a project, and a background server on your computer runs the session there, with no vendor cloud and no sandbox.[^opencode-cli-server] You pick the model and set the safety rules yourself. By default almost everything is allowed, so this first section only asks questions, and the next one sets the rules.

1. [Download OpenCode Desktop](https://opencode.ai/download), install it and open it.
2. Choose *Add project* and pick `brightline-ap`.
3. Type `/connect` in the message box, and connect a model. One of OpenCode's free models is enough.[^opencode-go]
4. Send: "What does this folder hold, and how is it tested? Do not change anything."
5. Ask: "Is there a folder next to this one called live-export? Tell me if you could not check."
6. Start a new session with `/new`. Your first session is still on the home screen, and clicking it resumes it.

**What you should see.** A session in `brightline-ap` that describes the folder and changes nothing. If it asks to look next door, you have seen that the folder is not a wall.

## Practice: permissions, and a plan

From Concept [12.3](permissions-and-plan.md): what the agent may do alone, how you read a command, and how you read a plan. Twenty minutes.

**Decide first.** By how hard a mistake would be to undo, which of these may run alone: adding a line to a README under git, deleting a file that is not under git, and sending your work online? Only the first. The other two should ask.

**Two messages this section uses.** The first puts the folder under git:

> Check that git is installed. If it is missing, tell me the official way to install it, and wait. If it is there, put this folder under git, with a main branch, and make a first commit of everything here.

If a command has `--global`, it changes git for the whole computer. Say no, and ask the agent to set the name and email for this project only. The second is a job that touches several files, which is when a plan earns its minute:

> Add a script that counts the vendors, with a test, and add a line to the README that says how to run it. Show me the plan and wait.

**Your check for the plan.** It names the script, the test and the README, and nothing in `data/`.

### Claude Code

**How Claude Code does it.** A mode sets what Claude may do without asking, and you can change it at any time. *Manual* asks before edits and commands. *Accept edits* edits files and runs common file commands inside the folder, even deleting a file. *Plan* reads and proposes, and edits nothing.[^anthropic-permission-modes]

1. Find the mode selector under the message box, read the modes, and set *Manual*, the ladder's "Ask before acting".

   ![Claude's mode menu, as it looked on 31 October 2026, opened from the control under the message box, which is boxed. It lists Auto, marked Recommended, Manual, Accept edits, Plan and Bypass permissions, each with one line on what it does. Bypass permissions is ticked here, and this step sets Manual.](img/practice-permissions.png)

2. Send the git message. Before your first yes, ask: "What does this command do?" Approve each command when you agree with what it does.
3. Switch to *Plan* and send the second message. Read the plan against your check, and correct what is off.
4. Switch to *Accept edits* and tell it to go ahead. Then ask it to run the tests and commit.

**What you should see.** A first commit, a command you asked about before you approved it, a plan you read before any file changed, and passing tests.

*For the exam.* The modes, the three settings files and their order, and that a deny rule beats an allow rule, all in [the details](#the-details-tool-by-tool).

### Codex

**How Codex does it.** Two controls work together. The sandbox sets what commands can reach, and approvals set when Codex stops to ask.[^openai-sandboxing] This sandbox is a limit on the commands, not the throwaway machine of 12.3. Under *Ask for approval*, it reads, edits and runs commands inside the project without asking, and it asks before it edits files outside or uses the internet.[^openai-permission-modes] So it will not stop before each edit, which is one more reason to put the folder under git first. `/plan` has it propose an approach before editing.[^openai-slash-commands]

1. Open the permissions control under the message box, and choose *Ask for approval*.
2. Send the git message. Commands that stay inside the project may run without asking, so read each one in the chat, and ask: "What does that command do?"
3. Run `/plan` to turn plan mode on, and send the second message. Read the plan against your check, and correct what is off.
4. Run `/plan` again to turn it off, and tell it to go ahead. Then ask it to run the tests and commit.

**What you should see.** A first commit, a command you asked about, a plan you read before any file changed, and passing tests.

### OpenCode

**How OpenCode does it.** Ordered rules allow, ask or deny each action, and the last matching rule wins.[^opencode-permissions] By default almost everything is allowed, so you write the rules first, in a file called `opencode.jsonc`. The *build* agent works, and the *plan* agent explores and proposes.[^opencode-agents]

1. Write the rules before anything changes. Ask the agent to create `opencode.jsonc` in the folder with this, and to tell you in plain words what each rule does. They set edits, shell commands and folders outside the project to ask.

   ```jsonc
   {
     "permissions": [
       { "action": "edit", "resource": "*", "effect": "ask" },
       { "action": "shell", "resource": "*", "effect": "ask" },
       { "action": "external_directory", "resource": "*", "effect": "ask" }
     ]
   }
   ```

2. In the *build* agent, send the git message. Before your first yes, ask: "What does this command do?" Approve each command when you agree with what it does.
3. Switch to the *plan* agent with `/agent` and send the second message. If it asks to edit a file while it plans, say no. Read the plan against your check, and correct what is off.
4. Switch back to *build* and tell it to go ahead. Then ask it to run the tests and commit.

**What you should see.** A first commit, a command you asked about before you approved it, a plan you read before any file changed, and passing tests.

## Practice: the rules file

From Concept [12.4](rules-the-agent-reads.md): one `AGENTS.md` that every tool reads, and a setting behind a rule that must never break. Twenty minutes. Use the folder from the last section, already under git.

### Claude Code

**How Claude Code does it.** Claude Code reads `AGENTS.md` when a session starts, as long as there is no `CLAUDE.md`. A `CLAUDE.md` replaces it, and the line `@AGENTS.md` pulls it back in.[^anthropic-memory] These files are context, not enforcement, so a rule that must never break also goes in a settings file, where a deny rule holds in every mode.[^anthropic-permissions]

1. In *Manual*, ask Claude to read the project and draft a short `AGENTS.md` that says never to write to `data/`. Read the draft, and keep only what is true and what the agent cannot guess.
2. Click *+ New* and ask: "Without opening any file, what must you never do in this project? Name the file that told you." It should name your rule and `AGENTS.md`.
3. See what a `CLAUDE.md` changes. Ask Claude to create a `CLAUDE.md` that holds one line of notes. Start a fresh session and ask the same question. It should no longer know your rule.
4. Bring the rule back. Ask Claude to replace everything in `CLAUDE.md` with the one line `@AGENTS.md`. Ask again in a fresh session.

   ![The Files pane in Claude's Code tab, as it looked on 31 October 2026, open on CLAUDE.md. Its one line, @AGENTS.md, is boxed.](img/practice-rules-file.png)

5. Back the rule with a setting. Ask Claude to create the project's settings file, `.claude/settings.json`. Settings files are written in **JSON**, a fixed text format that programs read:

   ```json
   {
     "permissions": {
       "deny": ["Edit(/data/**)"]
     }
   }
   ```

6. Test it. Switch to *Accept edits* and ask Claude to change one value in a file under `data/`. If it refuses because of `AGENTS.md`, say: "Try the edit anyway, to test the setting." If the edit goes through, ask Claude to undo it and to check the settings file. Switch back to *Manual*.
7. Add a saved prompt. Ask Claude for a skill that runs your tests and reports the count. Run it by typing `/` and its name.
8. Ask Claude to commit everything, so the next section starts clean.

**What you should see.** A fresh session that names your rule, loses it when a `CLAUDE.md` appears, and has it again after the import. An edit under `data/` that Claude says a permission rule denied, not one it chose not to make.

*For the exam.* The four levels of `CLAUDE.md`, imports up to four levels deep, when `AGENTS.md` is read, `/init`, and where skills and subagents live, all in [the details](#the-details-tool-by-tool).

### Codex

**How Codex does it.** Codex reads your `AGENTS.md` before it does any work, from your home folder and then from each folder from the project's top down.[^openai-agents-md] The words guide it. In the default setup nothing else guards a file inside the project, because the sandbox allows writes there. A beta setting can now protect one path, which [the details](#the-details-tool-by-tool) describe.[^openai-permission-profiles]

1. Run `/init` in the message box, and read the `AGENTS.md` it drafts. Ask Codex to add the line "Never write to `data/`."
2. Start a *New chat* and ask: "Without opening any file, what must you never do in this project? Name the file that told you." It should name your rule and `AGENTS.md`.
3. Ask Codex to change one value in a file under `data/`. Watch what it does. If it refuses, its reading of your words stopped it, and nothing else did. If it makes the change, ask it to put the file back.
4. Add a saved prompt. Ask Codex for a skill that runs your tests and reports the count.
5. Ask Codex to commit everything, so the next section starts clean.

**What you should see.** A fresh chat that names your rule. In the default setup, only the words guard `data/`, so if Codex refused the edit, the words are what stopped it.

### OpenCode

**How OpenCode does it.** OpenCode reads `AGENTS.md` and not `CLAUDE.md`, from your global file and from the folders above where you work.[^opencode-instructions] The words guide it, and a `deny` rule in `opencode.jsonc` enforces them.[^opencode-permissions]

1. Run `/init`, or ask the *build* agent to draft `AGENTS.md`. Make sure it says never to write to `data/`, then read and trim it.
2. Start a new session with `/new` and ask: "Without opening any file, what must you never do in this project? Name the file that told you." It should name your rule and `AGENTS.md`.
3. Back the rule with a setting. Ask the agent to add this as the last rule in `opencode.jsonc`, because the last matching rule wins, and approve the edit:

   ```jsonc
   { "action": "edit", "resource": "data/*", "effect": "deny" }
   ```

4. Test it. In the *build* agent, ask for one change to a file under `data/`. If it tries a shell command instead, that falls under the rule that asks, so say no. If the edit goes through, ask it to undo the edit and to check `opencode.jsonc`.
5. Add a saved prompt. Ask the agent for a skill that runs your tests and reports the count.
6. Ask the agent to commit everything, so the next section starts clean.

**What you should see.** A fresh session that names your rule, and an edit under `data/` refused without asking you.

## Practice: context and sessions

From Concept [12.5](context-sessions-effort.md): watch the context fill, take a change back, choose the effort, and hand over to a clean session. Fifteen minutes.

**Decide first.** Which move fits when your last step went wrong? Which fits when you are starting a new task? Then compare with this: rewind for the first, and for the second, a written handover and a fresh session.

### Claude Code

**How Claude Code does it.** Each session starts with fresh context, which fills with the conversation, the files read and the commands' output. Claude summarizes on its own when it is full, and `/compact` lets you choose when.[^anthropic-desktop] Checkpoints, which `/rewind` restores, undo Claude's own edits, and git keeps the lasting history.[^anthropic-checkpointing]

1. Choose the effort for the job. This job is small, so open the model picker under the message box and set *Effort* to low. Set it back when you finish.

   ![The row under Claude's message box, as it looked on October 31, 2026. On the left is the mode, Auto. On the right, boxed, is the model picker, set then to Fable 5.1 with effort at Max. A note under the row reads: Screenshot of October 31, 2026. The model names change: your picker lists today's models.](img/practice-context.png)

2. Type `/context` in the message box. Ask it to add one line to the README that says where the data files are. Then type `/context` again, and see what grew.
3. Take the change back. Run `/rewind`, select the message you sent, and choose *Restore code*.
4. Run `/compact`, then ask what the task was.
5. Hand over. Send: "Write what is done and what is left into NOTES.md, and commit." Click *+ New* and send: "Read NOTES.md. What is left to do?"

**What you should see.** A context that grows, a change taken back, a compacted session that still knows the task, and a clean session that knows what is left because it was written down.

*For the exam.* `/context`, `/compact`, `/rewind` and what it cannot take back, the default model and the effort levels, all in [the details](#the-details-tool-by-tool).

### Codex

**How Codex does it.** Each chat keeps its own context. `/status` shows how full it is, and `/compact` summarizes it.[^openai-slash-commands] There is no `/undo`. You take a change back in the review pane, or with git.[^openai-code-review]

1. Choose the effort for the job. This job is small, so open the model and reasoning control under the message box and move it toward *Faster*. Set it back when you finish.
2. Run `/status`. Ask it to add one line to the README that says where the data files are. Run `/status` again, and see what grew.
3. Take the change back. Open the review pane and choose *Revert all*. It holds every uncommitted change, so check that this line is the only one.
4. Run `/compact`, then ask what the task was.
5. Hand over. Send: "Write what is done and what is left into NOTES.md, and commit." Start a *New chat* and send: "Read NOTES.md. What is left to do?"

**What you should see.** A context that grows, a change taken back, a compacted chat that still knows the task, and a clean chat that knows what is left because it was written down.

### OpenCode

**How OpenCode does it.** A circle in the session header shows how full the context is.[^opencode-source] OpenCode summarizes on its own near the limit, and `/compact` does it when you ask.[^opencode-compaction] `/undo` restores files from snapshots, which are not a backup, so commit anything you want to keep.[^opencode-snapshots]

1. Choose the effort for the job. `/model` shows the models you can use. This job is small and needs no stronger model, so keep the one you have.
2. Ask it to add one line to the README that says where the data files are. Watch the circle in the session header, and see what grew.
3. Take the change back with `/undo`. `/redo` cancels the undo before you send your next message.
4. Run `/compact`, then ask what the task was.
5. Hand over. Send: "Write what is done and what is left into NOTES.md, and commit." Start a new session with `/new` and send: "Read NOTES.md. What is left to do?"

**What you should see.** A context that grows, a change taken back, a compacted session that still knows the task, and a clean session that knows what is left because it was written down.

## Practice: many sessions

From Concept [12.6](many-sessions.md): split a job into parts that can run alone, give each a real brief and its own copy of the folder, and review each one before you merge it. Twenty minutes. Use the same folder.

**Decide first.** Could these two jobs run at the same time? Look at the files each one changes: a new test file, and the README. They do not overlap, so yes. The worktrees keep them apart in any case.

**Two briefs, one for each session.** The first:

> *Outcome.* A new test file that fails if any invoice names a vendor that is not in `data/vendors.csv`.
>
> *Context.* `data/invoices.csv` and `data/vendors.csv`.
>
> *Format.* `tests/invoice-vendors.test.ts`.
>
> *Constraints.* Do not change `data/`. Run the tests before you finish, and commit.

The second:

> *Outcome.* A short section in the README that says what each column in `data/invoices.csv` means.
>
> *Context.* `data/invoices.csv`.
>
> *Format.* A list in `README.md`.
>
> *Constraints.* Change only `README.md`, and commit.

### Claude Code

**How Claude Code does it.** Each session has its own context and its own changes, and a worktree gives it its own copy of the project.[^anthropic-desktop] A subagent does a side task in its own context and hands back a summary, using the same usage limits.[^anthropic-subagents] A side chat can read the session and adds nothing back to it.

1. Click *+ New*, turn on *Worktree* in the row under the message box, and send the first brief.
2. Do the same again, and send the second brief.
3. While one works, open a side chat (Cmd+semicolon on macOS, Ctrl+semicolon on Windows) and ask how far along it is.
4. When the first is done, hand a check to a helper. Ask: "Use a subagent to check this change against `AGENTS.md` and report only rule breaks"

   ![The sidebar of Claude's Code tab, as it looked on 31 October 2026. At the top are New, Search, Artifacts, Scheduled and Customize. Below them, sessions are listed under the folder each runs in, here agentfactory, agentfactory-v2, brightline-lab-ch04 and dsor, and a folder's row folds shut. A session row shows its title and a number.](img/practice-many-sessions.png)

5. Review each one against its brief. Read the *Changes* card and run `/code-review`.
6. Start a session in the main folder, with *Worktree* off, and send: "Merge each worktree's branch into main, one at a time. Tell me each branch name first, and run the tests after each merge."

**What you should see.** Two sessions that never touched each other's files, a side chat that added nothing to the session, a helper's summary, and a main branch that holds both changes with passing tests.

*For the exam.* Subagents, their file and built-in kinds, forks, nested sessions, projects and what a cloud thread loads, and that messages between sessions carry text only, all in [the details](#the-details-tool-by-tool).

### Codex

**How Codex does it.** Parallel chats use worktrees so they do not change the same files.[^openai-codex-modes] Subagents work in their own threads, inherit the parent's sandbox, return summaries and use more tokens, the units in which model use is measured and billed.[^openai-subagents] `/side` opens a side chat.[^openai-slash-commands]

1. Start a *New chat*, select *Worktree* under the message box, and send the first brief. A worktree chat starts with no branch, so add: "Commit on a new branch."
2. Do the same again, and send the second brief.
3. While one works, run `/side` and ask how far along it is.
4. When the first is done, ask: "Spawn an agent to check this change against `AGENTS.md` and report only rule breaks"
5. Review each one against its brief. Run `/review`, which reports findings and changes nothing.
6. Start a chat in the main folder, without a worktree, and send: "Merge each worktree's branch into main, one at a time. Tell me each branch name first, and run the tests after each merge."

**What you should see.** Two chats that never touched each other's files, a side chat that added nothing to the chat, a helper's summary, and a main branch that holds both changes with passing tests.

### OpenCode

**How OpenCode does it.** You keep parallel work apart with worktrees, because a session can run in its own copy of the folder.[^opencode-tools] Inside a session, subagents do side tasks in child sessions with fresh context,[^opencode-agents] and `/btw` asks a side question without adding it to the conversation.[^opencode-tui]

1. On the new-session screen, click the git branch, choose *New worktree*, and send the first brief.
2. Do the same again, and send the second brief.
3. While one works, ask a side question with `/btw`: how far along is it?
4. When the first is done, ask: "Ask the explore subagent to check this change against `AGENTS.md` and report only rule breaks"
5. Review each one against its brief, in the *Review* tab.
6. Start a session in the main folder, not a worktree, and send: "Merge each worktree's branch into main, one at a time. Tell me each branch name first, and run the tests after each merge."

**What you should see.** Two sessions that never touched each other's files, a side question that added nothing to the conversation, a helper's summary, and a main branch that holds both changes with passing tests.

## Practice: outside the app

From Concept [12.7](outside-the-app.md): run the same agent with nobody watching, once with what it needs allowed and once without. Ten minutes, plus the command-line install.

**Opening a terminal.** A terminal is the window where you type commands: Terminal on macOS, PowerShell on Windows. To put it in your folder, type `cd` and a space, drag the `brightline-ap` folder into the window, and press Enter.

### Claude Code

**How Claude Code does it.** `claude -p` runs one task **headless**, from a command with nobody watching. Nobody is there to answer a prompt, so what it may do is granted before it starts.[^anthropic-headless] The desktop app cannot do this, so scripts use the command-line version, which you install separately.[^anthropic-setup]

1. Install the command-line version with [Anthropic's steps](https://code.claude.com/docs/en/setup).
2. Click *Terminal* in the session's title bar. It opens in your folder. Type `claude` and log in, then leave it by typing `/exit`. Paste this whole command, press Enter, and it runs one task with nobody watching:

   ```bash
   claude -p "Run the tests and report whether every test passed, and how many ran." \
     --allowedTools "Bash(npm test),Bash(npm test *)" \
     --output-format json \
     --json-schema '{"type":"object","properties":{"passed":{"type":"boolean"},"tests":{"type":"integer"}},"required":["passed","tests"]}'
   ```

   ![The terminal pane in Claude's Code tab, as it looked on 31 October 2026, after the command above ran. It shows the end of the JSON output. The part that reads structured_output, passed true, tests 2, is boxed.](img/practice-outside-the-app.png)

3. Run it without its `--allowedTools` line, by pasting this:

   ```bash
   claude -p "Run the tests and report whether every test passed, and how many ran." \
     --output-format json \
     --json-schema '{"type":"object","properties":{"passed":{"type":"boolean"},"tests":{"type":"integer"}},"required":["passed","tests"]}'
   ```

   Write down why the test command was refused.

**What you should see.** A JSON result with `passed` true. Then a second one with `passed` false, because the test command was denied with nobody there to approve it. If your settings make *Auto* your default, the second run can go through instead.

*For the exam.* `claude -p`, the three output formats, `--json-schema` and `structured_output`, `--allowedTools`, and `--bare`, all in [the details](#the-details-tool-by-tool).

### Codex

**How Codex does it.** `codex exec` runs one task from a script, read-only unless you tell it otherwise, and prints only its final message. `--json` streams each event, and `--output-schema` shapes the answer.[^openai-noninteractive]

1. Install the [Codex command-line tool](https://learn.chatgpt.com/docs/codex/cli). In a terminal in your folder, type `codex` and sign in, then leave it by typing `/quit`.
2. Run one task with nobody watching:

   ```bash
   codex exec "Run the tests and report whether every test passed, and how many ran."
   ```

3. Ask for something the read-only default does not allow:

   ```bash
   codex exec "Add one line to the README that says where the data files are."
   ```

4. Allow what it needs, and run it again:

   ```bash
   codex exec --sandbox workspace-write "Add one line to the README that says where the data files are."
   ```

**What you should see.** An answer about the tests, or a report that the read-only default stopped it running them. Then a run that could not write, with the README unchanged, because nobody was there to widen its limits. Then a run that added the line, because you allowed it before it started.

### OpenCode

**How OpenCode does it.** `opencode run` sends one task and prints the reply, as JSON if you ask. Nobody can approve anything, so a rule that says ask becomes a refusal.[^opencode-cli-commands] The `opencode` command is the same agent as the desktop app, connected to the same background server.[^opencode-cli-server]

1. Open a terminal and install the command-line version: `curl -fsSL https://opencode.ai/v2/install | bash`.
2. In your folder, run one task with nobody watching:

   ```bash
   opencode run --format json "Run the tests and report whether every test passed, and how many ran."
   ```

   The rules in `opencode.jsonc` set shell commands to ask, so this run is refused.

3. Allow only the tests. In the desktop app, ask the agent to add this rule to `opencode.jsonc`, after the rule for shell commands, and approve the edit. Then run the same command again:

   ```jsonc
   { "action": "shell", "resource": "npm test*", "effect": "allow" }
   ```

**What you should see.** A first run refused, with a line saying the permission request was rejected. Then a second run that ran the tests, with its reply in JSON events.

## The details, tool by tool

You do not need these for the steps. They hold the version numbers, the settings files and the facts the exam asks about.

### Claude Code

*The workspace.*

- Claude Code is the *Code* tab in the Claude desktop app, on macOS, Windows and Linux (beta).[^anthropic-desktop-quickstart]
- Before the first message you pick an environment, a folder, a permission mode and a model.[^anthropic-desktop]
- Each session runs *Local*, in the *Cloud*, over *SSH* (on another computer you reach over the network), or in *WSL* (Linux inside Windows), and a Cloud session keeps going after you close the app. A *Worktree* setting gives a session its own git worktree. You can save a setup you reuse as an environment.[^anthropic-desktop]
- A panel beside the chat shows where the session runs, what it is running, what it changed and how full its context is.[^anthropic-desktop]
- A *Browser* pane lets Claude start your app, open it and check its own changes.[^anthropic-desktop] On macOS, an *iOS Simulator* pane, in public beta, does the same for a phone app, in local sessions only.[^anthropic-ios-simulator]
- If your project has a web page, you can ask Claude to open it in the *Browser* pane.

*Permissions and plans.*

- The desktop app shows five modes, and the command line adds `dontAsk`. *Manual* asks before edits and commands. *Accept edits* edits files and runs common file commands without asking: `mkdir`, `touch`, `rm`, `rmdir`, `mv`, `cp` and `sed`, inside the folder. *Plan* proposes a plan and edits nothing. *Auto* lets a background check review each action and block risky ones.[^anthropic-permission-modes]
- *Bypass permissions* is for sandboxed containers or virtual machines only, and on Pro, Max and Ultra it appears only after you turn it on in the app's settings.[^anthropic-permission-modes]
- Auto is the starting mode for new command-line sessions on every plan. Anthropic's permission-modes page dates this from version 2.1.283.[^anthropic-permission-modes-start] Its changelog says 2.1.283 started only third-party providers and sessions with telemetry off in Auto, and 2.1.284 every plan.[^anthropic-code-changelog] The desktop app reads the same settings and remembers the mode you pick for each folder, except *Plan*, which lasts for the current session only.[^anthropic-desktop]
- Rules live in settings files: `~/.claude/settings.json` (you, every project), `.claude/settings.json` (the project, committed for the team) and `.claude/settings.local.json` (you, this project, kept out of git), with your organization's settings above all three. The order, highest first, is managed, then command line, then local, then project, then user, and lists such as `permissions.allow` are merged.[^anthropic-settings]
- A rule names a tool and a pattern, such as `"Edit(/data/**)"` in `deny`. Rules are checked deny, then ask, then allow, so an allow rule never overrides a deny rule. A committed file's deny rules apply at once, and its allow rules wait until you trust the folder. Edit deny rules also cover shell file commands Claude Code recognizes, such as `sed`, but not a script that opens the file itself.[^anthropic-permissions]

*Rules files.*

- From version 2.1.277, Claude Code reads `AGENTS.md` with nothing else to set up, as long as there is no `CLAUDE.md` or `CLAUDE.local.md` in the folder or above it.[^anthropic-memory] By default, a `CLAUDE.md`, `.claude/CLAUDE.md` or `CLAUDE.local.md` replaces `AGENTS.md` for Claude Code.[^anthropic-memory]
- `/init` drafts a `CLAUDE.md`,[^anthropic-memory] and when we tried it on 1 November 2026, in version 2.1.314, it still wrote one beside an existing `AGENTS.md`, with no import. Keep your rules in one place with a `CLAUDE.md` that holds `@AGENTS.md`, with any lines for Claude Code alone below it.[^anthropic-memory]
- `/memory` lists your instruction files and opens them for editing. It lists a project `CLAUDE.md` row even when no such file exists, so that row proves nothing.[^anthropic-memory] `/context` shows what loaded at launch, under *Memory files*,[^anthropic-memory] and works in the Code tab too.[^anthropic-desktop] The **Project instructions** setting in `/config` can make Claude Code read both files.[^anthropic-memory]
- `CLAUDE.md` has four levels: your organization's managed file, `~/.claude/CLAUDE.md` for you in every project, `./CLAUDE.md` or `./.claude/CLAUDE.md` for the project, and `./CLAUDE.local.md` for you in this project only. Files in the folders above where you start load at launch, and those in subfolders load when Claude works there. All of them are joined, from the top folder down. `@path` imports another file, relative to the file that imports it, up to four levels deep.[^anthropic-memory]
- A skill is a folder with a `SKILL.md` file in `.claude/skills/` or `~/.claude/skills/`. `/<name>` runs it, with `$ARGUMENTS` for what you type after the name, and Claude can load it on its own unless the file says `disable-model-invocation: true`. Custom commands were merged into skills, and old `.claude/commands/` files still work.[^anthropic-skills]
- Auto memory is the notes Claude writes for itself, per repository, and its start loads into every session.[^anthropic-memory] `/doctor prompt-audit` reports problems such as instructions written for older models, references to files or commands that do not exist, and files that contradict each other. It changes nothing until you ask.[^anthropic-memory] `/skill-doctor` shows what each skill costs in context.[^anthropic-commands] `/output-style` sets how answers are written.[^anthropic-output-styles]
- A mod is a plugin made of small JavaScript or TypeScript functions, called hooks, that run inside Claude Code. Each hook reacts to an event, such as a tool call, a prompt or part of the screen being drawn.[^anthropic-mod-events] It can watch the event, change it, or answer it, for example by refusing a command. So a mod can add a pane or a band above the prompt, add a command, hold a risky command until you decide, or send one step to a different model. Some of Claude Code's own features, such as `/diff`, are mods.[^anthropic-mods] You can ask Claude to write one. It saves the files outside your repository, asks before each one in Manual and Accept edits modes, and loads the mod only in that session.[^anthropic-create-mod] Anthropic says mods are not sandboxed. A mod can read your files and secrets, see every prompt, and approve a tool call before you are asked. So install mods only from authors and marketplaces you trust, and before you enable one, run `claude plugin validate`, which lists the events it handles and what it asks Claude Code to do.[^anthropic-mods]
- In a terminal in your folder, `claude` then `/memory` lists the instruction files loaded. `/doctor prompt-audit` is worth running every few weeks.

*Context and sessions.*

- The default model on paid plans is Opus 5.5, and effort runs from low to max.[^anthropic-model-config]
- `/context` shows what fills the context and `/compact` summarizes it.[^anthropic-desktop]
- `/rewind` takes back files Claude edited with its own tools, but not a file that only shell commands changed.[^anthropic-checkpointing] It can also leave behind files that only a subagent edited.[^anthropic-checkpointing] Git is still the record of what changed, as far as you committed it.
- A cheaper session can still get a stronger second opinion. `/advisor opus` lets a cheaper model consult Opus at key moments. It is experimental, and on a subscription its use counts toward your plan's usage limits.[^anthropic-advisor]

*Many sessions.*

- Claude automatically uses built-in subagents when appropriate, and each one's requests count toward the same usage limits as your main conversation. A `deny` rule such as `Agent(Explore)` in your settings stops Claude from using that subagent.[^anthropic-subagents]
- Two sessions can sit side by side. A side chat reads the main session and adds nothing back, and you cannot return to it after you close the app.[^anthropic-desktop]
- A subagent is a file in `.claude/agents/` with a name, a description, its tools and its model, and it runs in its own context. It can also run as a fork, a copy of the conversation so far. Explore, Plan and general-purpose are built in. Explore and Plan start without your project instructions, so put any rule they need in the brief.[^anthropic-subagents]
- In local and SSH sessions, Claude can start a task in a nested session that reports back, and can suggest a side task you start with one click.[^anthropic-apps-changelog]
- On the Pro, Max and Ultra plans, *Projects*, in public beta and rolling out gradually, so you may not see them yet, run a coordinator that starts threads in the cloud. Cloud threads load the repository's `CLAUDE.md` but not its skills or its permission rules.[^anthropic-projects] Anthropic's page does not mention `AGENTS.md` there, so a repository used this way keeps a `CLAUDE.md` that imports it.
- Messages between sessions carry text only, never history.[^anthropic-cross-session] Put what a worker needs in its brief.
- The *Changes* card shows the diff, and `/code-review` reviews your branch and uncommitted changes and reports findings.[^anthropic-code-review-local]

*Outside the app.*

- `claude -p "<task>"` runs one task headless, from a command with nobody watching. Concept [12.7](outside-the-app.md) explains headless runs. `--output-format` returns `text`, `json` or `stream-json`, which streams each event as a line of JSON, and `--json-schema` puts a matching answer in a `structured_output` field.[^anthropic-headless]
- A headless run starts in Manual mode, unless a setting chooses another mode, and denies what needs approval, so list what it may do with `--allowedTools`.[^anthropic-headless] In a folder you have never trusted, a headless run shows no trust prompt: the project's hooks still run and its MCP servers connect, while its allow rules are ignored.[^anthropic-headless]
- For a script that must behave the same on every machine, use bare mode. Anthropic recommends `--bare` for scripts, which skips your `CLAUDE.md`, skills, hooks and memory. It does not use your subscription login, so it needs an API key, and Anthropic says it will become the default for `-p`, so a script that relies on your login may need a change later.[^anthropic-headless]
- `/goal` sets a condition, such as "all tests in `test/auth` pass". Claude keeps working until the condition is met, the checking model judges it impossible, or an error you must fix clears the goal. After each turn, a small fast model reads the conversation and judges the condition. It does not run commands or read files itself, and a goal does not change the permission mode.[^anthropic-goal] Concept [12.7](outside-the-app.md) explains why its "done" is a second opinion.

### Codex

*The workspace.*

- Since July 9, 2026, Codex is a view inside the *ChatGPT desktop app*[^openai-desktop-app] for macOS and Windows, with Linux in preview.[^openai-codex-whats-new]
- A chat runs on your computer, in a git worktree, or in the cloud, from a cloud environment you set up and publish once. A cloud chat does not automatically get your computer's local files, running processes, browser sign-ins or VPN access.[^openai-codex-modes]
- A built-in *Browser* lets Codex open your local web app, take screenshots and check its work.[^openai-browser] There is no iOS simulator pane, but the Computer Use plugin can operate other apps.[^openai-computer-use]
- If your project has a web page, you can ask Codex to open it in its *Browser*.

*Permissions and plans.*

- *Ask for approval* is OpenAI's recommendation. *Approve for me* asks only about actions it detects as potentially unsafe, *Full access* gives unrestricted access to the internet and any file on your computer, and *Custom (config.toml)* uses the permissions set in `config.toml`. Without asking, *Ask for approval* lets it read files, make edits and run commands in the working folder. Even so, `.git`, `.agents` and `.codex` stay read-only, so a commit or a new skill may ask first.[^openai-approvals-security],[^openai-permission-modes]
- Behind them sit a sandbox (read-only, workspace-write or full access) and an approval policy, set in `config.toml`.[^openai-sandboxing] The two lines that set them:

  ```toml
  sandbox_mode = "workspace-write"
  approval_policy = "on-request"
  ```

- A beta setting can now protect one path. Permission profiles in `config.toml` can mark a path `read` or `deny`, and a narrower rule stays in force even when a broader path is writable.[^openai-permission-profiles] They may change, and any `sandbox_mode` in a loaded config replaces them, so the two lines above would cancel a profile.
- `/plan` turns plan mode on or off.[^openai-slash-commands]

*Rules files.*

- `/init` in the message box drafts an `AGENTS.md`.[^openai-slash-commands] Codex reads `AGENTS.md` from its home folder, `~/.codex` by default, then from each folder from the repository's root down to the one you start in, joined root first.[^openai-agents-md] It builds that list when the session starts, so a rule in a subfolder counts only if you start there or below. An `AGENTS.override.md` wins over `AGENTS.md` in the same folder, and Claude Code does not read it.[^anthropic-memory]
- Skills use a `SKILL.md` folder in `.agents/skills/`.[^openai-build-skills] Plugins[^openai-plugins] bundle skills, MCP servers (connectors to other tools, [Chapter 17](../connectors-and-mcp/overview.md)) and hooks.[^openai-hooks]
- We found no advisor and no audit of your instruction files in OpenAI's documentation. The nearest thing to mods is *Plugin Extensions*, which add interfaces to ChatGPT.[^openai-codex-whats-new]

*Context and sessions.*

- GPT-6 Astra is the most capable model. GPT-6.1 Sol comes near it at a lower cost, GPT-6.1 Terra is fast and efficient, and GPT-6 Luna is the most efficient.[^openai-codex-models] You choose the model, and we found no automatic routing to a cheaper one,[^openai-model-selection] though Codex cloud selects its model automatically.[^openai-codex-whats-new]

*Many sessions.*

- `/goal` sets what done looks like and shows progress,[^openai-long-running] and `/side` opens a side chat.[^openai-slash-commands]
- The app shows each subagent's work and the summary it returns. A subagent takes the parent's model and effort unless set, and always the parent's sandbox.[^openai-subagents] *Ultra*, on supported models, splits a complex task across subagents that work in parallel.[^openai-codex-models] Subagent work uses more tokens, the units in which model use is measured and billed.[^openai-subagents]
- `/review` checks your uncommitted changes or your branch and reports findings by priority without changing files.[^openai-code-review]

*Outside the app.*

- The open-source Codex command-line tool runs `codex exec` headless, read-only by default, and can return JSON that matches a schema.[^openai-noninteractive]
- For every change, a pipeline can run it. OpenAI offers a GitHub Action for **CI**, the system that runs checks on every change.[^openai-codex-github]

### OpenCode

*The workspace.*

- OpenCode is a free coding agent under the MIT license.[^opencode-readme] You install it, pick a model[^opencode-providers] and set its safety rules yourself.[^opencode-permissions] *OpenCode Desktop*, still labeled beta, talks to a background server on your computer.[^opencode-cli-server] It runs locally on your machine, with no vendor sandbox.[^opencode-security]
- For a model, bring your own API key, sign in with a ChatGPT Plus or Pro plan, run a local model,[^opencode-providers] or buy OpenCode's Go plan ($10 a month).[^opencode-go] Since version 2.2.3, released October 30, 2026, a built-in *Claude Agent* provider uses your Claude Code login and models: install Claude Code, run `claude auth login`, then choose Claude Agent in `/connect`.[^opencode-changelog]
- Desktop has tabs, a browser pane the agent drives with screenshots,[^opencode-tools] and a Timeline setting, *Changed files*, that shows each turn's changed files and diffs once you turn it on. You can fork a session from any message.[^opencode-changelog]

*Permissions and plans.*

- Permission rules allow, ask or deny an action, set in `opencode.jsonc` or `opencode.json`. By default it can reach files outside the project, unless a rule says ask.[^opencode-permissions]
- OpenCode does not sandbox the agent. Its security policy says permission prompts are not isolation, and recommends a container such as Docker, or a virtual machine.[^opencode-security] The default rules allow almost everything,[^opencode-permissions] browser actions do not ask one by one,[^opencode-tools] and OpenCode's web page says its local server is password-protected by default,[^opencode-web] while its security policy says server mode is unauthenticated without a password.[^opencode-security],[^opencode-web]
- Before your first task, set edits and shell commands to ask, keep OpenCode updated, treat plugins as code you choose to run, and never expose its server to a network.

*Rules files.*

- OpenCode reads `AGENTS.md`, and version 2 does not read `CLAUDE.md`.[^opencode-instructions] The version 2 documentation lists no `/init`, but version 2.2.5 ships one, for guided `AGENTS.md` setup.[^opencode-source]
- Commands are markdown files in `.opencode/commands/`.[^opencode-commands] Skills use `SKILL.md` in `.opencode/skills/`, and OpenCode also reads `.claude/skills/` and `.agents/skills/`.[^opencode-skills] Plugins can hook into tool calls[^opencode-server-plugins] and add Desktop panels, which is still experimental.[^opencode-plugins]

*Context and sessions.*

- OpenCode compacts on its own near the limit.[^opencode-compaction] Snapshots are not a backup.[^opencode-snapshots]

*Many sessions.*

- The built-in *general* and *explore* subagents run in child sessions with fresh context, not the parent's conversation, and custom agents can each have their own model.[^opencode-agents] The *Changed files* timeline, or `git diff`, also shows what changed.[^opencode-web]

*Outside the app.*

- `--auto` approves everything not explicitly denied, and `deny` always holds. `opencode run` has no schema flag, so the answer is in its `text` events.[^opencode-cli-commands]

## The differences that change a decision

1. **Which rules file it reads.** All three read `AGENTS.md`, the open format,[^agents-md] so one file can serve all three. The one to watch is Claude Code: a `CLAUDE.md` or `CLAUDE.local.md` replaces `AGENTS.md` for it by default. So if a project keeps a `CLAUDE.md`, that file imports `AGENTS.md`.
2. **How rules are enforced.** Claude Code enforces permission rules from settings files you can commit. Codex enforces a sandbox and an approval policy from `config.toml`, and a beta permission profile can protect one path. OpenCode enforces its rules from `opencode.json`, with no sandbox behind them. Put the "never" rules in each product's settings, not only in `AGENTS.md`.
3. **How safe it is by default.** New Claude Code sessions you type into in the command line start in Auto, with a background check, and a headless run starts in Manual. OpenAI recommends Ask for approval, with a sandbox that writes only inside the project. OpenCode starts with almost everything allowed, so you set its rules before the first task.
4. **Where it can run, and who sees your code.** Claude Code and Codex can run a session on the AI vendor's machines. In any session, local or cloud, what the agent reads is sent to the model's provider under its terms. OpenCode with a local model is the only option here where the model stays on your computer, though its default rules still allow web fetches and searches unless you deny them.
5. **What it costs to start.** Claude Code needs a paid Claude plan or a Console account. Codex starts on the free ChatGPT plan, in the desktop app, subject to rollout. OpenCode is free, plus whatever the model costs.
6. **How work splits, and what a worker knows.** All three hand side tasks to subagents. Claude Code also has nested sessions and, on the Pro, Max and Ultra plans, projects with threads you can open. Codex adds Ultra, which splits a task across subagents on its own. OpenCode's subagents start with fresh context, and a Claude Code subagent can be a fork that inherits the conversation. Every extra agent costs context, so put what each one needs in its brief.
7. **Where skills live.** All three use a `SKILL.md` folder: `.claude/skills/`, `.agents/skills/` and `.opencode/skills/`. OpenCode also reads the other two, so one skill can serve OpenCode and one other agent.
8. **Extending it, and seeing the app.** All three have plugins and hooks. Claude Code also has mods, plugins that change how Claude Code itself looks and behaves. OpenCode's Desktop plugins and Codex's Plugin Extensions can add panels. All three can look at your app through a browser pane, and only Claude Code has an iOS simulator. Plugins are code that runs with your rights, and a screenshot is not a test.

## Which agent for which job

- **Learning, and the CCDV-F exam:** Claude Code, because the exam is about Claude.
- **A team that already works in ChatGPT:** Codex, from the same app.
- **Code that must never leave the company:** OpenCode with a local model, on a machine you have secured.

## What it costs

### Claude Code

Claude Code needs a Pro, Max, Ultra, Team, Enterprise or Console account, and the free plan does not include it.[^anthropic-setup] On Pro, Max and Ultra it shares usage limits with Claude chat.[^anthropic-pro-max]

### Codex

Codex is on every ChatGPT plan, including Free, where it uses GPT-6 Luna. Plus is $20 a month. Pro plans are $100, $200 or $500 a month, and currently have no five-hour limit.[^openai-codex-pricing]

### OpenCode

The software is free.[^opencode-readme] You pay your model provider or OpenCode's plan, unless you run a local model[^opencode-providers] or one of OpenCode's free models.[^opencode-go]

## What stays the same

1. The folder you give a coding agent sets its scope, so choose the smallest folder that holds the task, and keep it under git. Settings, not the folder, stop it reaching further.
2. Permissions are set by how hard a mistake would be to undo, whatever the product calls its modes.
3. The rules travel with the repository, in a file every agent you use can read. You check that each place you run the agent loads them, and the "never" rules are also enforced by a setting.
4. Git, not the agent's own undo, is the record of what changed, as far as you committed it.
5. Done means the result matches the check you wrote first. Passing tests are the agent's evidence, and its report that it is done is a claim.
6. Work is split only where the parts run on their own, and each part is reviewed before it merges.
7. Tests check rules and numbers. They cannot show that a button is cut off or a page is blank. Where the agent can open what it built and look at the screen, it fixes what it sees before it reports back. A screenshot shows what the agent saw once, so your own check still decides.

[^agents-md]: AGENTS.md, agents.md.
[^anthropic-desktop-quickstart]: Get started with the desktop app, Anthropic.
[^anthropic-desktop]: Desktop application, Anthropic.
[^anthropic-permission-modes]: Choose a permission mode, Anthropic.
[^anthropic-permission-modes-start]: Choose a permission mode, which mode a session starts in, Anthropic.
[^anthropic-settings]: Settings files and precedence, Anthropic.
[^anthropic-permissions]: Configure permissions, Anthropic.
[^anthropic-memory]: How Claude remembers your project, Anthropic.
[^anthropic-skills]: Skills, Anthropic.
[^anthropic-subagents]: Subagents, Anthropic.
[^anthropic-apps-changelog]: Changelog, Anthropic.
[^anthropic-projects]: Projects in Claude Code, Anthropic.
[^anthropic-cross-session]: Cross-session messaging, Anthropic.
[^anthropic-ios-simulator]: iOS Simulator pane, Anthropic.
[^anthropic-commands]: Commands, Anthropic.
[^anthropic-output-styles]: Output styles, Anthropic.
[^anthropic-advisor]: Advisor, Anthropic.
[^anthropic-mod-events]: Mod events, Anthropic.
[^anthropic-mods]: Mods, Anthropic.
[^anthropic-create-mod]: Create a mod, Anthropic.
[^anthropic-model-config]: Model configuration, Anthropic.
[^anthropic-checkpointing]: Checkpointing, Anthropic.
[^anthropic-code-review-local]: Review locally with /code-review, Anthropic.
[^anthropic-setup]: Advanced setup (installing the command-line version), Anthropic.
[^anthropic-headless]: Run Claude Code programmatically, Anthropic.
[^anthropic-goal]: Keep Claude working toward a goal, Anthropic.
[^anthropic-code-changelog]: Claude Code changelog, Anthropic.
[^anthropic-pro-max]: Use Claude Code with your Pro, Max, or Ultra plan, Anthropic.
[^openai-desktop-app]: The ChatGPT desktop app, OpenAI.
[^openai-codex-whats-new]: What's new in Codex, OpenAI.
[^openai-codex-modes]: Codex environments, OpenAI.
[^openai-permission-modes]: Permissions, OpenAI.
[^openai-sandboxing]: Sandbox, OpenAI.
[^openai-agents-md]: AGENTS.md, OpenAI.
[^openai-slash-commands]: Slash commands, OpenAI.
[^openai-long-running]: Long-running work, OpenAI.
[^openai-subagents]: Subagents, OpenAI.
[^openai-codex-models]: Codex models, OpenAI.
[^openai-build-skills]: Build skills, OpenAI.
[^openai-plugins]: Plugins, OpenAI.
[^openai-hooks]: Hooks, OpenAI.
[^openai-browser]: Browser, OpenAI.
[^openai-computer-use]: Computer Use, OpenAI.
[^openai-model-selection]: Model selection, OpenAI.
[^openai-code-review]: Code review, OpenAI.
[^openai-codex-github]: Codex on GitHub, OpenAI.
[^openai-noninteractive]: Non-interactive mode, OpenAI.
[^openai-codex-pricing]: Codex pricing, OpenAI.
[^opencode-readme]: README, OpenCode.
[^opencode-providers]: Providers, version 2, OpenCode.
[^opencode-permissions]: Permissions, OpenCode.
[^opencode-cli-server]: CLI and server, OpenCode.
[^opencode-security]: Security policy and advisories, OpenCode.
[^opencode-go]: OpenCode Go, OpenCode.
[^opencode-changelog]: Changelog, OpenCode.
[^opencode-agents]: Agents, OpenCode.
[^opencode-instructions]: Instructions, OpenCode.
[^opencode-tools]: Tools, OpenCode.
[^opencode-commands]: Commands, OpenCode.
[^opencode-skills]: Skills, OpenCode.
[^opencode-server-plugins]: Server plugins, OpenCode.
[^opencode-plugins]: Plugins, OpenCode.
[^opencode-compaction]: Compaction, OpenCode.
[^opencode-snapshots]: Snapshots, OpenCode.
[^opencode-web]: Web, OpenCode.
[^anthropic-overview]: Overview, Anthropic.
[^anthropic-cowork]: Get started with Claude Cowork, Anthropic.
[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Anthropic.
[^openai-work-codex]: ChatGPT Work and Codex, OpenAI.
[^openai-permission-profiles]: Permissions, permission profiles, OpenAI.
[^opencode-cli-commands]: CLI commands, version 2, OpenCode.
[^opencode-tui]: Terminal interface, version 2, OpenCode.
[^opencode-source]: Source code at version 2.2.5, OpenCode.
[^openai-approvals-security]: Agent approvals and security, OpenAI.
[^openai-usage-limits]: Understanding ChatGPT and Codex usage limits, OpenAI Help Center.


