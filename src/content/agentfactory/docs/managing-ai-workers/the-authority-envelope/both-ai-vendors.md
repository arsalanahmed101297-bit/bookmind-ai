# 7.4 Set the envelope in your own app (/managing-ai-workers/the-authority-envelope/both-ai-vendors)

---
type: Document
title: "7.4 Set the envelope in your own app"
description: "Set the Authority Envelope in Claude, ChatGPT or an open-source tool, step by step, then the differences that change a step, and a dated product reference."
status: stable
order: 207.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "07"
part: II
expert_status: required
concepts: [ "7.4" ]
last_verified: 2026-10-23
review_by: 2026-12-21
sources:
  - id: anthropic-cowork-modes
    title: "Get started with Claude Cowork, its table of connector tool permissions in each mode (Claude Help Center, verified 2026-11-23)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: openai-app-permissions-policy
    title: "Managing app permissions in ChatGPT, its permission options (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/20001495-managing-app-permissions-in-chatgpt
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-cowork
    title: "Get started with Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: anthropic-connectors-docs
    title: "Get started with connectors (Claude documentation, verified 2026-11-18)"
    resource: https://claude.com/docs/connectors/getting-started
  - id: anthropic-prompt-injection-research
    title: "Mitigating the risk of prompt injections in browser use (Anthropic, 24 November 2025, verified 2026-11-18)"
    resource: https://www.anthropic.com/research/prompt-injection-defenses
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: openai-app-permissions
    title: "Managing app permissions in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001495-managing-app-permissions-in-chatgpt
  - id: openai-admin-apps
    title: "Admin controls, security, and compliance for plugins and apps (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: opencode-permissions
    title: "Permissions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: omnara-permissions
    title: "Tool permissions (Omnara documentation, verified 2026-10-23)"
    resource: https://docs.omnara.com/tools/permissions
  - id: anthropic-cowork-safely
    title: "Use Claude Cowork safely (Claude Help Center, updated 16 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: anthropic-cowork-team
    title: "Use Claude Cowork on Team and Enterprise plans (Claude Help Center, updated 16 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans
  - id: anthropic-unified-enterprise
    title: "Set up and manage the new unified Claude experience for your Enterprise organization (Claude Help Center, updated 17 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization
  - id: anthropic-chrome-permissions
    title: "Claude in Chrome permissions guide (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide
  - id: anthropic-computer-use
    title: "Let Claude use your computer in Cowork (Claude Help Center, updated 20 November 2026, verified 2026-11-21)"
    resource: https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork
  - id: anthropic-routines
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-18)"
    resource: https://code.claude.com/docs/en/routines
  - id: anthropic-custom-roles
    title: "Manage custom roles on Enterprise plans (Claude Help Center, updated 12 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans
  - id: openai-permissions
    title: "Permissions (OpenAI, ChatGPT Learn, verified 2026-11-21)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: openai-cloud-browser
    title: "Using cloud browser in ChatGPT (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
  - id: openai-resist-injection
    title: "Designing AI agents to resist prompt injection (OpenAI, verified 2026-11-21)"
    resource: https://openai.com/index/designing-agents-to-resist-prompt-injection/
  - id: openai-lockdown
    title: "Lockdown Mode (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001061-lockdown-mode
  - id: openai-workspace-agents
    title: "ChatGPT Workspace Agents for Enterprise and Business (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business
  - id: anthropic-duet
    title: "Introducing Claude Duet (Anthropic, 21 October 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/claude-duet
  - id: anthropic-duet-help
    title: "Get started with Claude Duet (Claude Help Center, updated 12 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17631495-get-started-with-claude-duet
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-11-21)"
    resource: https://openai.com/index/introducing-dots/
  - id: openai-dots-faq
    title: "Dots privacy, security and safety FAQs (OpenAI Help Center, verified 2026-11-21)"
    resource: https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs
  - id: omnara-integrations
    title: "Integrations overview (Omnara documentation, verified 2026-10-23)"
    resource: https://docs.omnara.com/integrations/overview
  - id: openclaw
    title: "OpenClaw README (OpenClaw Foundation, GitHub, MIT, verified 2026-10-23)"
    resource: https://github.com/openclaw/openclaw
  - id: openclaw-access-control
    title: "Access control (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/access-control
  - id: openclaw-prompt-injection
    title: "Prompt injection (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/prompt-injection
  - id: openclaw-heartbeat
    title: "Heartbeat (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/heartbeat
  - id: openclaw-sandboxing
    title: "Sandboxing: modes, scope and backend (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/sandboxing/modes-scope-and-backend
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two banks both let you set limits on your card. One puts the setting in its app. The other makes you call. Your budget is the same either way.

**What you will learn.** Where Claude, ChatGPT and an open-source tool keep the settings that can hold an envelope's lines ([7.1](envelope-brief-permissions.md)), and which lines no setting holds.

**Why it matters.** [7.2](blast-radius.md) showed that a setting, not a rule in a brief, decides the worst case. Each app hides those settings in different places, and a few of them let the product decide for you.

## Where to set the envelope in your app

These are the steps for putting each line of an envelope where a setting can hold it, and the rest on the gap list. Keep this page open beside your app while you set one, and follow your tab.

> [!TIP]
> **The safe setting on each app.**
>
> - **Claude:** Manual, with each tool that sends or changes something on Blocked, Needs approval or Always ask.
> - **ChatGPT:** Ask for approval for local actions, and Always ask or Allow read actions for each app.
> - **Open source:** an ask or deny rule for each limit, because most tools start allowed.
>
> Do not count on a setting where the product decides (Claude's Auto, ChatGPT's Approve for me and Allow low-risk actions) to ask you first.

### Claude

These steps were checked on 18 November 2026.

1. **Choose the conversation's setting.** The permission setting in the message box covers the whole conversation. Manual (Claude pauses and asks you to approve its actions) is the cautious choice. Auto (an automated check reviews actions instead of you) is the other.[^anthropic-one-claude][^anthropic-cowork]
2. **Turn on only the connectors the job uses,** such as only the calendar for a job that plans meetings.
3. **Set each tool in the connector's settings.** Each tool, or group of tools, can be Always allow, Needs approval or Blocked, and on paid plans also Always ask. For example, for a job that tidies a shared folder, set reading files to Always allow and deleting files to Blocked. The table shows what each setting does in each mode.[^anthropic-connectors-docs][^anthropic-cowork]

| Tool setting | In Manual | In Auto |
| --- | --- | --- |
| Always allow | Runs | Runs without asking or the automated check, except a tool marked destructive |
| Needs approval | Asks you | Runs, unless the automated check flags it as risky |
| Always ask | Asks you | Asks you |
| Blocked | Never runs | Never runs |

The tool's own setting wins, except Needs approval, which follows the mode. Your organization may also require approval for tools that can write, so an Always allow you chose may not apply.[^anthropic-cowork-modes]

4. **Use Always ask for a tool that must ask every time,** where your plan offers it. On Team and Enterprise plans, an organization owner may already have set these choices, and members cannot loosen them.[^anthropic-connectors]
5. **Keep the browser and computer use off for this job.** Anthropic puts connectors first, then the browser, then the screen, and computer use asks before each app. Never choose Skip all approvals, which runs no safety check before Claude acts.[^anthropic-computer-use][^anthropic-cowork-safely]
6. **Choose the approval mode when you schedule a task.** A task that meets a tool set to Always ask may wait for you, or finish without it. Do not schedule a task that sends messages or is hard to undo.[^anthropic-scheduled-tasks][^anthropic-cowork-safely]
7. **Check an add-on before you turn it on,** with [7.2](blast-radius.md#check-an-add-on-before-you-turn-it-on)'s six checks. Then set its tools as in step 3.
8. **Check it worked.** Send the worker a request it must not do, such as "Send this draft now." Address the draft to yourself, so a mistake reaches no one. Expect it to stop and say it may not, or to ask you. If it acts, the setting that let it through is the one to change.

You use these steps in Lab 7, [Task 6](lab.md#task-6-two-add-ons), [Task 8](lab.md#task-8-can-no-wider-than-may) and [Task 11](lab.md#task-11-on-todays-tools).

### ChatGPT

These steps were checked on 21 November 2026.

1. **Set local actions, the actions on your own computer, to Ask for approval.** In the desktop app, the permissions control offers Ask for approval, Approve for me and Full access. Approve for me sends a request to an automatic review instead of to you. Which choices you see depends on your app version and your organization.[^openai-permissions]
2. **Turn on only the apps the job uses.** OpenAI calls a connector an app.
3. **Set the app's level.** Each app has one of four levels: Always ask, Allow read actions, Allow low-risk actions or Allow all actions. Allow read actions reads without asking and asks before any change. None of the four levels blocks a single action, so at best sending asks first. Write "never send" on your gap list, or ask your admin, who chooses which write actions each app may use.[^openai-app-permissions][^openai-admin-apps]
4. **Do not use Allow low-risk actions for a line a person must approve.** At that level the product decides which actions count as low risk.[^openai-app-permissions]
5. **Prefer the app to the cloud browser,** a browser on a separate computer in the cloud. OpenAI advises a connected app when it can do the task, and ChatGPT may choose for itself.[^openai-cloud-browser]
6. **Expect a scheduled task to pause.** An action that needs approval may pause the task until you answer.[^openai-scheduled-tasks]
7. **Check an add-on before you turn it on,** with [7.2](blast-radius.md#check-an-add-on-before-you-turn-it-on)'s six checks. Then set its level as in step 3.
8. **Check it worked.** Send the worker a request it must not do, such as "Send this draft now." Address the draft to yourself, so a mistake reaches no one. Expect it to ask you first. If it acts, the setting that let it through is the one to change.

**Which setting wins.** The permissions control covers files and the internet, and the app level covers each app unless a workspace policy overrides it. OpenAI does not say which wins when both apply, so set both to the cautious value.[^openai-permissions][^openai-app-permissions-policy]

You use these steps in Lab 7, [Task 6](lab.md#task-6-two-add-ons), [Task 8](lab.md#task-8-can-no-wider-than-may) and [Task 11](lab.md#task-11-on-todays-tools).

### Open source

These steps were checked on 23 October 2026. Steps 1 and 2 are for OpenCode or Omnara, and steps 3 and 4 are for OpenClaw.

1. **Write a rule for each limit before the first run.** Open-source tools start with their settings open. In OpenCode, a rule sets a tool to allow, ask or deny, and the last rule that matches wins. Every agent starts from a rule that allows everything, and only reading a file of sensitive settings asks first. In Omnara, each tool is always allow, always ask or always deny. Tools reached through MCP start at always ask, but built-in tools and your own start at always allow, so set those yourself.[^opencode-permissions][^omnara-permissions]
2. **Match each rule to a line of the envelope.** Allow what the worker may do alone, set ask for what waits for a person, and deny what it never does.
3. **Switch the sandbox on.** OpenClaw is an open-source assistant that runs on your own computer. Its sandbox, a closed-off space for its tools, is off by default, so its tools run on the computer itself.[^openclaw-sandboxing]
4. **Check who may message it.** OpenClaw sends an unknown sender a pairing code, a one-time code, and ignores them until you approve it.[^openclaw-access-control]
5. **Check it worked.** Send the worker a request a deny rule covers, such as "Send this draft now," addressed to yourself. Expect it to refuse. If it acts, the rule that let it through, often the starting rule that allows everything, is the one to change.

Lab 7 runs in Claude or ChatGPT. Use these steps when you set up your own tool.

## What changes a step

One difference between the two AI vendors changes what you do. Claude can block a single tool. ChatGPT's app levels cannot, so write "never send" on your gap list.

## What stays the same

The envelope, its rungs and its limits are written once, by the owner, for any tool ([7.1](envelope-brief-permissions.md)). Settings only come close to them ([7.2](blast-radius.md)). A line no setting can enforce stays on the gap list, with a person, until a system such as DSoR enforces it ([7.3](untrusted-input.md#the-control-that-checks-for-itself)).

## Product reference

This is for looking things up, not for reading through. The steps above hold each setting, and these lines add what no step carries. Each line says how a product is meant to behave, not a guarantee. Products change every few weeks, and availability varies by plan and workspace, so recheck your own settings before use.

### Claude

*As verified 18 November 2026.*

- *The conversation setting.* It offers only Manual and Auto, which Anthropic's other pages call Manually approve and Automatically approve.[^anthropic-cowork][^anthropic-chrome-permissions] Auto is rolling out as the default on Pro, Max, Ultra and Team. Manual is the default on Enterprise, except in the Cowork side panel in Chrome.[^anthropic-one-claude] A third mode, Skip all approvals, does not pause to ask, and no safety check runs before Claude acts.[^anthropic-cowork-safely] Claude in Chrome offers it,[^anthropic-chrome-permissions] and Anthropic's admin page says it applies to scheduled tasks and the built-in browser, and an organization setting can turn it off.[^anthropic-unified-enterprise] Even in this mode, Claude asks before each use of a tool set to Always ask.[^anthropic-cowork]
- *Per-tool control on Team and Enterprise ([7.2](blast-radius.md)).* Where owners set the tool choices, read tools are grouped apart from write and delete tools.[^anthropic-connectors] Do not count on Auto to ask you first on those plans, because two of Anthropic's pages differ. One says members approve connector tools that can write, in every task, unless an organization owner allows Always allow for them.[^anthropic-cowork-team] Its guide to tasks says that in Auto, Claude decides for those tools.[^anthropic-cowork]
- *Consequential actions ([7.1](envelope-brief-permissions.md#four-rungs-set-for-each-action)).* Claude asks before permanently deleting files, in any mode.[^anthropic-cowork-safely] Anthropic says Claude in Chrome is built not to make purchases, create accounts or follow instructions found in emails or web pages. Anthropic also says it asks before deleting anything permanently, changing permissions or entering sensitive information.[^anthropic-chrome-permissions]
- *Computer use ([7.2](blast-radius.md#three-routes-into-a-system)).* Computer use is available on the Pro, Max and Ultra plans. On Team and Enterprise plans, it is in beta. It blocks investment and cryptocurrency apps by default. It has no sandbox, or closed-off space, between Claude and your apps.[^anthropic-computer-use]
- *Prompt injection ([7.3](untrusted-input.md)).* Anthropic's safety page says an attack needs two things at once. Claude reads information from outside your trusted boundary, and Claude can take actions that could harm you.[^anthropic-cowork-safely] Its research says no browser agent is immune, or fully protected.[^anthropic-prompt-injection-research]
- *Runs no one watches.* You choose the approval mode when you set up a scheduled task by hand, and the help page says what happens in only one case, a tool set to Always ask.[^anthropic-scheduled-tasks] Claude Code has scheduled tasks of its own, a tool for developers, which it called routines until recently. A run starts in auto mode, can stop to wait for an answer, and acts as you.[^anthropic-routines]
- *Admin policy ([7.2](blast-radius.md)).* Owners choose which connectors members may use,[^anthropic-connectors] and on Enterprise, custom roles can make tool permissions stricter, never looser.[^anthropic-custom-roles]
- *Always-on agent, verified 18 November 2026.* Claude Duet, in research preview, keeps working after you close its app. Before it sends a message, makes a payment, signs a document or deletes anything, it shows exactly what it will do. Then it waits for your approval.[^anthropic-duet] If you cannot approve at once, it finishes the rest of the task and brings the approval back to you later. Some actions are refused even with approval, such as trading securities or moving money between accounts.[^anthropic-duet-help]

### ChatGPT

*As verified 21 November 2026.*

- *Consequential actions ([7.1](envelope-brief-permissions.md#four-rungs-set-for-each-action)).* ChatGPT is designed to ask you before actions that are hard to undo or that create a real-world commitment, such as a payment. When it works in its cloud browser, it asks in the chat.[^openai-cloud-browser] OpenAI lists sending messages, changing records, changing access, payments and sharing sensitive data as higher-risk actions.[^openai-app-permissions]
- *Prompt injection ([7.3](untrusted-input.md)).* OpenAI says an attack needs a source, a way to influence the system, and a sink, a capability that becomes dangerous in the wrong context. It says dangerous actions, or sending sensitive data, should not happen silently or without appropriate safeguards.[^openai-resist-injection] Lockdown Mode, an optional security setting, limits outgoing requests.[^openai-lockdown] OpenAI says its app safeguards do not remove prompt-injection risk.[^openai-admin-apps]
- *Admin policy ([7.2](blast-radius.md)).* Admins choose which read or write actions each app may use, and how new actions are treated.[^openai-admin-apps] In workspace agents, agents a team shares in ChatGPT, write actions are set to Always ask by default.[^openai-workspace-agents]
- *Always-on agent, verified 21 November 2026.* A dot, OpenAI's always-on agent, starts with built-in rules for when to act alone and when to ask. Its Custom Rules let you allow an action, require approval for it or block it. A check called auto-review looks at actions that could affect your accounts or share information. It checks them against your instructions, your Custom Rules and OpenAI's safety requirements.[^openai-dots] Custom Rules cannot turn off the core safety requirements. The most sensitive actions, such as changing a password or moving money, need you to take over and finish them yourself. Approving one message gives the dot no ongoing permission. An approval given in advance covers only what you authorized.[^openai-dots-faq]

### Open source

*As verified 23 October 2026.*

- *Prompt injection ([7.3](untrusted-input.md)).* OpenClaw's README, its front-page guide, says to treat incoming messages as untrusted input.[^openclaw] Its security guide adds that the content itself is a threat, not just the sender.[^openclaw-prompt-injection]
- *Runs no one watches.* OpenClaw's first setup creates a Proactive check, a scheduled job that runs every 30 minutes by default.[^openclaw-heartbeat] Omnara can send its approval requests to Slack or Discord.[^omnara-integrations]

[^anthropic-prompt-injection-research]: Mitigating the risk of prompt injections in browser use, Anthropic.
[^openai-admin-apps]: Admin controls, security, and compliance for plugins and apps, OpenAI Help Center.
[^anthropic-connectors-docs]: Get started with connectors, Claude documentation.
[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Claude Help Center.
[^anthropic-cowork]: Get started with Claude Cowork, Claude Help Center.
[^openai-app-permissions]: Managing app permissions in ChatGPT, OpenAI Help Center.
[^openai-scheduled-tasks]: Scheduled tasks in ChatGPT, OpenAI Help Center.
[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^opencode-permissions]: Permissions, OpenCode v2 documentation.
[^omnara-permissions]: Tool permissions, Omnara documentation.
[^anthropic-cowork-safely]: Use Claude Cowork safely, Claude Help Center.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-cowork-team]: Use Claude Cowork on Team and Enterprise plans, Claude Help Center.
[^anthropic-unified-enterprise]: Set up and manage the new unified Claude experience for your Enterprise organization, Claude Help Center.
[^anthropic-chrome-permissions]: Claude in Chrome permissions guide, Claude Help Center.
[^anthropic-computer-use]: Let Claude use your computer in Cowork, Claude Help Center.
[^anthropic-routines]: Automate work with scheduled tasks, Claude Code Docs.
[^anthropic-custom-roles]: Manage custom roles on Enterprise plans, Claude Help Center.
[^openai-permissions]: Permissions, ChatGPT Learn, OpenAI.
[^openai-cloud-browser]: Using cloud browser in ChatGPT, OpenAI Help Center.
[^openai-resist-injection]: Designing AI agents to resist prompt injection, OpenAI.
[^openai-lockdown]: Lockdown Mode, OpenAI Help Center.
[^openai-workspace-agents]: ChatGPT Workspace Agents for Enterprise and Business, OpenAI Help Center.
[^anthropic-duet]: Introducing Claude Duet, Anthropic, 21 October 2026.
[^anthropic-duet-help]: Get started with Claude Duet, Claude Help Center.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^openai-dots-faq]: Dots privacy, security and safety FAQs, OpenAI Help Center.
[^openclaw]: OpenClaw, OpenClaw Foundation, README on GitHub.
[^openclaw-access-control]: Access control, OpenClaw documentation.
[^openclaw-prompt-injection]: Prompt injection, OpenClaw documentation.
[^openclaw-heartbeat]: Heartbeat, OpenClaw documentation.
[^omnara-integrations]: Integrations overview, Omnara documentation.
[^openclaw-sandboxing]: Sandboxing: modes, scope and backend, OpenClaw documentation.
[^anthropic-cowork-modes]: Get started with Claude Cowork, the table of connector tool permissions in each mode, Claude Help Center.
[^openai-app-permissions-policy]: Managing app permissions in ChatGPT, its permission options, OpenAI Help Center.


