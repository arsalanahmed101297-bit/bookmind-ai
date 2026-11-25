# 8.4 Set up the project in your own app (/managing-ai-workers/context-memory-knowledge-and-state/both-ai-vendors)

---
type: Document
title: "8.4 Set up the project in your own app"
description: "Set up the AP Worker's project in Claude, ChatGPT or an open-source tool, step by step, then the two differences that change a step, and a dated product reference."
status: stable
order: 208.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "08"
part: II
expert_status: required
concepts: [ "8.4" ]
last_verified: 2026-10-23
review_by: 2026-12-21
sources:
  - id: anthropic-classic-projects
    title: "How can I create and manage projects? (Claude Help Center, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, updated 11 November 2026, verified 2026-11-19)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: anthropic-claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: openai-projects
    title: "Projects in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: anthropic-files
    title: "Create and edit files with Claude (Claude Help Center, updated 5 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
  - id: anthropic-use-skills
    title: "Use skills in Claude (Claude Help Center, updated 10 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12512180-use-skills-in-claude
  - id: openai-skills
    title: "Skills in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001066-skills-in-chatgpt
  - id: anthropic-plugins
    title: "Plugins (Claude Docs, verified 2026-11-18)"
    resource: https://claude.com/docs/plugins/overview
  - id: openai-plugins
    title: "Plugins in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - id: opencode-instructions
    title: "Instructions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/instructions/
  - id: anthropic-context-window
    title: "How large is the context window on paid Claude plans? (Claude Help Center, updated 9 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans
  - id: anthropic-usage-limits
    title: "How do usage and length limits work? (Claude Help Center, updated 4 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work
  - id: anthropic-personalization
    title: "Understanding Claude's personalization features (Claude Help Center, updated 23 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features
  - id: anthropic-org-instructions
    title: "Set organization instructions (Claude Help Center, updated 31 August 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/14546867-set-organization-instructions
  - id: anthropic-google-workspace
    title: "Use Google Workspace connectors (Claude Help Center, verified 2026-11-21)"
    resource: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
  - id: anthropic-incognito
    title: "Use incognito chats (Claude Help Center, updated 30 October 2026, verified 2026-11-19)"
    resource: https://support.claude.com/en/articles/12260368-use-incognito-chats
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: chatgpt-pricing
    title: "Pricing (ChatGPT, verified 2026-11-21)"
    resource: https://chatgpt.com/pricing
  - id: openai-custom-instructions
    title: "ChatGPT Custom Instructions (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions
  - id: openai-admin-sync
    title: "Admin controls, security, and compliance for plugins and apps, where app sync is retired (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps
  - id: openai-memory
    title: "Memory in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8590148-memory-in-chatgpt
  - id: openai-temporary-chat
    title: "Temporary chat in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt
  - id: openai-connected-apps
    title: "Connected apps in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt
  - id: openai-company-knowledge
    title: "Company knowledge in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/12628342-company-knowledge-in-chatgpt
  - id: anthropic-skills
    title: "What are skills? (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12512176-what-are-skills
  - id: anthropic-provision-skills
    title: "Provision and manage skills for your organization (Claude Help Center, updated 17 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13119606-provision-and-manage-skills-for-your-organization
  - id: anthropic-use-plugins
    title: "Use plugins in Claude (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - id: anthropic-marketplace
    title: "Claude Marketplace (Anthropic, verified 2026-11-18)"
    resource: https://claude.com/marketplace
  - id: anthropic-org-plugins
    title: "Manage plugins for your organization (Claude Help Center, updated 16 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization
  - id: openai-dots-faq
    title: "Dots privacy, security and safety FAQs (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs
  - id: opencode-mcp
    title: "MCP servers (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/mcp-servers/
  - id: opencode-providers
    title: "Providers (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/providers/
  - id: openclaw-memory
    title: "Memory (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/concepts/memory
  - id: openclaw-session
    title: "Session (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/concepts/session
  - id: omnara-machines
    title: "Machines overview (Omnara documentation, verified 2026-10-23)"
    resource: https://docs.omnara.com/machines/overview
  - id: omnara
    title: "Omnara README (Omnara, GitHub, Apache 2.0, verified 2026-10-23)"
    resource: https://github.com/omnara-ai/omnara/blob/main/README.md
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two phone companies both let you keep a contact list. One syncs it automatically, updating it by itself. The other makes you import it again after each change. The list is the same.

**What you will learn.** Where Claude, ChatGPT and an open-source tool keep a project's instructions, its knowledge files, its memory and its connectors, so you can set up the worker's project in Lab 8, Tasks 3, 10 and 13.

**Why it matters.** [8.3](configure-the-workspace.md#what-the-project-loads) decided what the project loads. Each app keeps those parts in different places, and two settings differ. Get them wrong, and a copy goes out of date, or memory from your other chats gets into the project.

## How to set up the project in your app

Keep this page open beside your app, and follow your tab. You use these steps in Lab 8, [Task 3](lab.md#task-3-what-memory-may-keep), [Task 10](lab.md#task-10-one-change-every-copy) and [Task 13](lab.md#task-13-nothing-but-the-records).

### Claude

**Plan.** The new kind of project, one conversation whose tasks run as **threads** (side conversations that share the project), is in public beta on the Pro, Max and Ultra plans.[^anthropic-claude-projects] On Free, or if you see no projects in the Code tab, use the classic steps below the list. On Team and Enterprise, an owner decides whether memory is available,[^anthropic-memory] and adds a connector for the organization before you can use it.[^anthropic-connectors]

1. **Create the project.** In the desktop app's **Code** tab, which is Claude Code inside the app, or at claude.ai/code, select **Projects**, then **New project**. That is where the app showed it on 18 and 19 November 2026.
2. **Paste the instructions.** Open **Project settings**, then **Memory**, then **Project instructions**, and paste your instructions. Project instructions apply to this project only, and every new thread starts from them.[^anthropic-claude-projects]
3. **Add only the approved knowledge.** Upload the approved files under **Context**, the project's files, and nothing that competes with them, such as old notes or a status list. Every thread starts with the project's files. A project holds up to 10 folders and Google Drive folders, and single files do not count toward that limit. An upload is a copy: a later change reaches the project only when you upload the file again. Anthropic's pages do not say whether a Google Drive file added to a project stays in sync, so treat it as a copy too, and add it again after an approved change.[^anthropic-claude-projects]
4. **Read the project's memory.** A Claude project's memory belongs to the project: a set of files Claude writes as it works, which every cloud thread reads through their index, MEMORY.md, when it starts. Read, edit and delete them under **Project settings**, then **Memory**, and leave the instructions in place.[^anthropic-claude-projects]
5. **Add only the job's connectors.** A **connector** links Claude to another app, such as a mailbox or a drive. You add one to your account, in **Customize**, and choose which ones each chat may use.[^anthropic-connectors]
6. **Turn off the rest.** Every thread in a project can use all the connectors on your account, and no setting keeps one out of a single project. To turn one off, open a thread, select **Connectors** in the **+** menu beside its message box, and turn it off. That also becomes your account's default: new threads and your other Claude chats start without it until you turn it back on.[^anthropic-claude-projects]
7. **Check it worked.** In the project, ask one question your approved files answer, and one they do not. A pass: the first answer names the file it came from and its approval date, and the second says the files do not cover it and names who decides, as your instructions say ([8.3](configure-the-workspace.md#what-the-project-loads)). If an answer comes from anything else, remove the file or the memory it came from.

**On a classic project,** from **Projects** in the Claude app: choose **Set project instructions** and paste your instructions. Add the approved files with the **+** button in the project knowledge, on the right of the project's page. Under **Memory** on the project's page, turn off **Use account memory**, so your other chats cannot answer for the worker; if you do not see that setting, go on. For a chat that must not use or add to the project's memory, turn off **Memory** in the **+** menu before its first message. Then check it worked as in step 7.[^anthropic-classic-projects]

### ChatGPT

**Plan.** Every plan has projects. The file limit is 5 per project on Free, 25 on Go and Plus, and 40 on Pro, Business, Enterprise and Edu (education).[^openai-projects]

1. **Create the project, and choose project-only memory as you create it.** A project holds chats, files and instructions. It uses your saved memories unless you choose **project-only memory**, which ignores your saved memories and your chats outside the project. Shared projects always use it.[^openai-projects]
2. **Paste the instructions.** Paste your instructions into the project's instructions. They apply only within the project and take priority over your **custom instructions**, the ones in your account for every chat.[^openai-projects]
3. **Add only the approved knowledge.** Upload the approved files. In a private project you can instead add a Google Drive file or folder by pasting its link. The Google Drive app inside a project fetches files when asked, and does not sync them in advance.[^openai-projects]
4. **Read memory.** Review, correct and delete your **saved memories**, the details ChatGPT keeps from your chats.[^openai-memory]
5. **Clear the project's own memory.** It shows no list: to stop it using a chat, delete the chat or move it to another project.[^openai-projects]
6. **Turn on only the job's apps.** ChatGPT calls a connector an **app**. Apps connect ChatGPT to services such as Google Drive or Slack, under **Settings**, then **Plugins**.[^openai-connected-apps]
7. **Check it worked.** Ask the same two kinds of question as in the Claude tab. A pass looks the same: the first names its file and approval date, and the second says the files do not cover it and names who decides. With files fetched from Google Drive, also check that the date is the newest approval.

### Open source

1. **Put the instructions in AGENTS.md.** OpenCode loads one global AGENTS.md for all your work, then each AGENTS.md in your working folder and the folders above it. Paste your instructions into the project folder's AGENTS.md.[^opencode-instructions]
2. **Reach sources through MCP.** **MCP** is the standard way to connect an AI tool to other systems. OpenCode connects to MCP servers, local or remote. KSoR's served route, which Part V builds, is an MCP server too.[^opencode-mcp]
3. **Read its memory files.** OpenClaw remembers by writing plain Markdown files in the agent's workspace folder, so read them as you would a project's memory.[^openclaw-memory]
4. **Keep sensitive facts out of memory.** Memory kept on your machine still goes to the model's provider when it enters the context, unless the model runs on your own computer.[^opencode-providers]
5. **Check it worked.** Ask the same two kinds of question. A pass names the file and its approval date, then says the files do not cover the second question.

Lab 8 runs in Claude or ChatGPT. Use these steps when you set up your own tool.

## What changes a step

- *Keeping copies current.* In a Claude project, uploads are copies. The Google Drive app inside a ChatGPT project fetches files when asked.
- *Memory scope.* A Claude project's memory belongs to the project. A ChatGPT project uses your saved memories unless you choose project-only memory.

## What stays the same

On either vendor or an open-source tool, an answer comes from the same five places ([8.1](five-places.md)), approved knowledge is written once with a named person keeping every copy current ([8.3](configure-the-workspace.md#monday-november-9-change-once-refresh-every-copy)), and current state is read from its own system. **Skills and plugins** sit outside any one project ([8.5](skills-and-plugins.md)). Both AI vendors show you the parts inside a plugin before you add it, so read every one.[^anthropic-plugins]

## Product reference

This is for looking things up, not for reading through. It holds only what the steps above do not use. Each line shows the date it was checked and its source. Products change every few weeks, so check the date before you rely on a line.

### Claude

*As verified 18 November 2026.*

- *Instructions.* Account-wide instructions in Settings apply to every conversation.[^anthropic-personalization] On Team and Enterprise, organization owners can set organization instructions, which take priority where they conflict with a member's own instructions.[^anthropic-org-instructions]
- *Synced sources.* Google Docs added from Google Drive to a chat stay synced to the latest version.[^anthropic-google-workspace]
- *Memory in Settings.* Claude saves memory as topics you can read, edit and delete in Settings. By default, memory does not keep personal or sensitive topics, unless you turn on Include sensitive topics in memory. Memory can be turned off for one chat before its first message, and on paid plans Search and reference chats lets Claude search past chats.[^anthropic-memory] Incognito chats, outside projects, are not saved to memory.[^anthropic-incognito]
- *Project memory.* You can also ask Claude in the project to remember or forget something.[^anthropic-claude-projects] On 18 and 19 November 2026, projects showed no setting that brings in memory from your other chats, and a new project's chat said it remembered nothing from outside the project.
- *Context window.* On paid plans, the newest models have a 1M-token (one million token) window. Near the limit, Claude summarizes earlier messages and keeps the full history to refer back to.[^anthropic-context-window] This needs *Create and edit files (code execution)* turned on.[^anthropic-files] Long chats use more of your usage limit, the amount of use your plan allows.[^anthropic-usage-limits]
- *Connectors.* Connectors reach other apps with your own permissions. If you cannot open a file, the connector cannot either, unless it was set up with one shared login.[^anthropic-connectors]
- *Sharing.* A project belongs to one person. You cannot share a project or its threads.[^anthropic-claude-projects]
- *Skills.* Skills work on every Claude plan, with *Create and edit files (code execution)* turned on.[^anthropic-use-skills] You turn them on under *Customize > Skills*. On Team and Enterprise, an owner can give a skill to everyone.[^anthropic-provision-skills] Partners such as Notion, Figma and Atlassian also publish skills. On Enterprise, an organization can turn on skill scanning, which checks uploaded skills and plugins for malicious content.[^anthropic-skills]
- *Plugins.* A plugin can hold skills, connectors, commands and agents. You add one at *Customize > Plugins*, on the *Discover* tab: select it to read what it contains, then select *Add*. Anthropic reviews the plugins listed in its directory, but not one you add from elsewhere or upload. Adding a plugin connects nothing: its *Connectors* tab shows each connector it uses, and whether it is connected on your account.[^anthropic-plugins] Plugins are for Pro, Max, Ultra, Team and Enterprise.[^anthropic-use-plugins] Anthropic also lists connectors and plugins on the Claude Marketplace.[^anthropic-marketplace] On Team and Enterprise, an owner makes each plugin available to install, installed by default, required, or hidden.[^anthropic-org-plugins]

### ChatGPT

*As verified 21 November 2026.*

- *Context window.* OpenAI lists context windows by plan and mode on its pricing page.[^chatgpt-pricing] Its help pages do not say how ChatGPT handles older messages when a chat grows long.
- *Instructions.* Custom instructions apply to every chat in your account.[^openai-custom-instructions]
- *Source syncing.* OpenAI says app sync, which indexed content for search, is no longer available.[^openai-admin-sync]
- *Memory.* Saved memories are details you ask ChatGPT to remember and, where available, details it saves as useful. A second setting, Reference chat history, uses past chats.[^openai-memory] Temporary chats do not create or update memories.[^openai-temporary-chat] A dot, OpenAI's always-on agent, shares memory with ChatGPT both ways, and for now you cannot view or change a dot's individual memories.[^openai-dots-faq]
- *Connectors.* On Business, Enterprise and Edu, the Company Knowledge plugin searches connected apps within each user's existing access, with citations you can open.[^openai-company-knowledge]
- *Sharing.* A shared project gives members edit access or chat access.[^openai-projects]
- *Skills.* Skills are under *Plugins*, on the *Skills* tab, on the Business, Enterprise, Healthcare and Edu plans.[^openai-skills]
- *Plugins.* Every plan has the plugin directory, under *Plugins* in the sidebar. Whether you can install one depends on your plan, workspace, role and region. A plugin can hold skills and apps, ChatGPT's name for connectors. Review its description, skills, apps and setup requirements before you select *Install plugin*. Installing cannot get around the provider's or the workspace's permissions, and in a workspace admins manage plugins in the Admin console.[^openai-plugins]

### Open source

*As verified 23 October 2026.*

- *Memory.* OpenClaw keeps session transcripts in a database file on the same machine as its memory files.[^openclaw-session] Omnara keeps each agent as an event log (a list of what happened, in order) it can resume from after a crash,[^omnara-machines] in your own database if you host it.[^omnara] None of this is the matter's case file.

[^anthropic-claude-projects]: Let Claude coordinate ongoing work with Projects, Claude Code Docs.
[^openai-projects]: Projects in ChatGPT, OpenAI Help Center.
[^opencode-instructions]: Instructions, OpenCode v2 documentation.
[^anthropic-plugins]: Plugins, Claude Docs.
[^openai-plugins]: Plugins in ChatGPT, OpenAI Help Center.
[^anthropic-personalization]: Understanding Claude's personalization features, Claude Help Center.
[^anthropic-org-instructions]: Set organization instructions, Claude Help Center.
[^anthropic-google-workspace]: Use Google Workspace connectors, Claude Help Center.
[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-context-window]: How large is the context window on paid Claude plans?, Claude Help Center.
[^anthropic-files]: Create and edit files with Claude, Claude Help Center.
[^anthropic-usage-limits]: How do usage and length limits work?, Claude Help Center.
[^anthropic-incognito]: Use incognito chats, Claude Help Center.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-use-skills]: Use skills in Claude, Claude Help Center.
[^anthropic-provision-skills]: Provision and manage skills for your organization, Claude Help Center.
[^anthropic-skills]: What are skills?, Claude Help Center.
[^anthropic-use-plugins]: Use plugins in Claude, Claude Help Center.
[^anthropic-marketplace]: Claude Marketplace, Anthropic.
[^anthropic-org-plugins]: Manage plugins for your organization, Claude Help Center.
[^chatgpt-pricing]: Pricing, ChatGPT.
[^openai-custom-instructions]: ChatGPT Custom Instructions, OpenAI Help Center.
[^openai-admin-sync]: Admin controls, security, and compliance for plugins and apps, OpenAI Help Center.
[^openai-memory]: Memory in ChatGPT, OpenAI Help Center.
[^openai-temporary-chat]: Temporary chat in ChatGPT, OpenAI Help Center.
[^openai-dots-faq]: Dots privacy, security and safety FAQs, OpenAI Help Center.
[^openai-connected-apps]: Connected apps in ChatGPT, OpenAI Help Center.
[^openai-company-knowledge]: Company knowledge in ChatGPT, OpenAI Help Center.
[^openai-skills]: Skills in ChatGPT, OpenAI Help Center.
[^openclaw-memory]: Memory, OpenClaw documentation.
[^openclaw-session]: Session, OpenClaw documentation.
[^omnara-machines]: Machines overview, Omnara documentation.
[^omnara]: Omnara, README on GitHub.
[^opencode-mcp]: MCP servers, OpenCode v2 documentation.
[^opencode-providers]: Providers, OpenCode v2 documentation.
[^anthropic-classic-projects]: As verified on November 23, 2026, Anthropic says you set a classic project's instructions with "Set project instructions", add files with the "+" button in the project knowledge base on the right side of the project's main page, can turn off "Use account memory" under Memory on the project's page, and can turn off "Memory" in the "+" menu before a chat's first message, so that the chat "doesn't use or add to the project's memory." How can I create and manage projects?, Anthropic.


