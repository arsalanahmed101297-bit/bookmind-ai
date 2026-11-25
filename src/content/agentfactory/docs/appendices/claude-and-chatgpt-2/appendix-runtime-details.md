# Appendix: runtime details (/appendices/claude-and-chatgpt-2/appendix-runtime-details)

---
type: Document
title: "Appendix: runtime details"
description: "The details behind several Architecture lessons: where sessions run, cloud environments and self-hosted runners, the desktop workspace's network rules, projects, an organization's controls, and how ChatGPT and Codex run work."
status: stable
order: 904.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-20T22:29:24Z
chapter: "F00A"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-20
sources:
  - id: cloud-environments
    title: "Configure cloud environments (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
  - id: cmek
    title: "What are customer-managed encryption keys (CMEK)? (Claude Help Center, updated 15 June 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15505325-what-are-customer-managed-encryption-keys-cmek
  - id: monitoring
    title: "Monitoring (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/monitoring-usage
  - id: claude-security
    title: "Scan your codebase for vulnerabilities (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-security
  - id: code-review
    title: "Code Review (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/code-review
  - id: security-guide
    title: "Unified Claude Security Best Practices, version 1.3.6 (Anthropic Trust Center, dated November 7, 2026, verified 2026-11-20)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
  - id: cowork-team
    title: "Use Claude Cowork on Team and Enterprise plans (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13455879
  - id: cowork-cloud
    title: "What to expect with Claude Cowork in the cloud (Claude Help Center, updated November 17, 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15811196-what-to-expect-with-claude-cowork-in-the-cloud
  - id: code-tab
    title: "Desktop application (Claude Code Docs, no page date, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: cowork-surfaces
    title: "Use Claude Cowork on web, desktop, and mobile (Claude Help Center, updated November 19, 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: code-desktop
    title: "Use Claude Code Desktop (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop
  - id: network-access
    title: "Network access for shell commands (Anthropic, verified 2026-11-20)"
    resource: https://claude.com/docs/cowork/guide/network-access
  - id: cowork-safely
    title: "Use Claude Cowork safely (Claude Help Center, updated November 19, 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
  - id: desktop-inspection
    title: "Panaversity's inspection of a Claude conversation linked to a Mac with one connected folder, November 16, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cross-session
    title: "Message your other Claude Code sessions (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
  - id: run-agents-in-parallel
    title: "Run agents in parallel (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/agents
  - id: chatgpt-agent
    title: "Introducing ChatGPT agent (OpenAI, July 17, 2025, now marked by OpenAI as outdated, verified 2026-11-20)"
    resource: https://openai.com/index/introducing-chatgpt-agent/
  - id: codex-harness
    title: "Unlocking the Codex harness: how we built the App Server (OpenAI, February 4, 2026, verified 2026-11-20)"
    resource: https://openai.com/index/unlocking-the-codex-harness/
  - id: openai-sandboxing
    title: "Sandbox (ChatGPT Learn, OpenAI, no page date shown, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (ChatGPT Learn, OpenAI, no page date shown, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: whats-new
    title: "What's new, entry for July 13 to 17, 2026 (ChatGPT Learn, OpenAI, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/whats-new
generated:
  at: 2026-11-20T22:29:24Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### What this appendix is for

This appendix holds the technical details behind several Architecture lessons. Each part names the lesson it backs, and the last three parts back [Cloud environments and self-hosted runners](../../claude-and-chatgpt-2/architecture/cloud-environments-and-self-hosted-runners.md). You do not need them to follow the rest of the section.

A **self-hosted environment** lets Claude Code cloud sessions run on computers that your organization operates, instead of on Anthropic's. It is in public beta on Team and Enterprise plans, and it is off by default.[^self-hosted]

Each part first says what a detail means for the person who sets things up. Then it gives the technical name.

### Where sessions run

These details back the [overview](../../claude-and-chatgpt-2/architecture/overview.md), [The sandbox and its state](../../claude-and-chatgpt-2/architecture/the-sandbox-and-its-state.md) and [ChatGPT and Codex](../../claude-and-chatgpt-2/architecture/chatgpt-and-codex.md). In the desktop app or on the web, a Claude session runs in the cloud by default. Some run on your own computer instead, such as the Code tab's Local environment, or Cowork on the desktop in Enterprise organizations.[^security-guide] Team organizations can run Cowork tasks on the computer too, if they turn their cloud setting off.[^cowork-team]

**[Vendor-documented]** Availability depends on the product and plan. Cowork in the cloud is available on Pro, Max, Ultra and Team plans, in beta on Team. On Enterprise, it is available when an owner turns it on.[^cowork-cloud] Claude Code cloud sessions are available on Pro, Max, Ultra and Team plans. They are also available for Enterprise users with premium seats or Chat + Claude Code seats.[^cloud-environments] In the desktop app's Code tab, you choose Local, Cloud, SSH or WSL for each session.[^code-tab]

**[Vendor-documented]** The security guide says a cloud task that runs a command on your computer uses the local VM.[^security-guide] Anthropic's page for Pro, Max and Ultra does not say so. **[Observed]** Panaversity saw a local VM in use on a Mac on November 16, 2026.[^desktop-inspection]

Claude can work on your own computer in three cases:

- **Tasks in a conversation.** This depends on your plan and on when the task started, as [Where the work happens](../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md) explains. On Pro, Max and Ultra, only tasks started before October 6, 2026 run on your computer (documented).[^cowork-surfaces]
- **Cowork on the desktop in Enterprise organizations.** Cowork is Claude's tool for tasks, which the new experience merges with chat. Enterprise is Claude's plan for large companies. There, Cowork on the desktop still runs on the user's computer, and it is on by default (documented).[^security-guide]
- **The Code tab and the CLI.** They run Claude Code on your machine. The Code tab can also run a session on another machine over SSH, or in WSL (documented).[^code-desktop]

### Where environments apply

These details back [Cloud environments and self-hosted runners](../../claude-and-chatgpt-2/architecture/cloud-environments-and-self-hosted-runners.md). Each Claude Code cloud session "runs in a cloud environment." The same environments apply to the desktop app, the mobile app, claude.ai/code, `claude --cloud`, cloud scheduled tasks and Claude Tag. Project threads use the environment set in the project.[^cloud-environments],[^claude-projects]

#### Network access levels, as they changed

On November 9, 2026, Anthropic's page listed two levels in place of Limited: Trusted and Custom. An environment saved as Trusted opens as Limited. One saved as Custom opens as Limited with its own list of allowed domains, or as Full if that list was a bare `*`.[^cloud-environments]

### Self-hosted plans and limits

Self-hosted environments are in public beta for Team and Enterprise. They are off by default. They are not available with Zero Data Retention or the HIPAA configuration. They have no network secrets, so your deployment provides the keys.[^self-hosted],[^cloud-environments]

### The desktop workspace's network and files

These details back [The sandbox and its state](../../claude-and-chatgpt-2/architecture/the-sandbox-and-its-state.md) and [Choosing where to run work](../../claude-and-chatgpt-2/architecture/choosing-where-to-run-work.md).

**[Vendor-documented]** You set the desktop workspace's network in **Settings > Capabilities**. On Team and Enterprise, an admin sets it for everyone in **Organization settings > Capabilities**. **Egress** means traffic going out to the internet. With network egress off, commands reach only `anthropic.com` and `claude.com` hosts. A **package registry** is a website that hands out software packages, such as npm. The **Package managers only** setting also allows the common package registries and `github.com`. The **All domains** setting allows any host. Unless all domains are allowed, registries and GitHub are download-only. So `git clone`, `git fetch` and `git pull` over HTTPS work. But `git push`, Git LFS (storage for large files) and SSH remotes (a second way to connect to GitHub) are blocked. Anthropic adds that "these limits aren't a security boundary." So do not rely on them alone to keep data inside the VM.[^network-access]

Deleting a file needs your explicit permission.[^cowork-safely] **[Observed]** Until it was granted, `rm` (the command that deletes files) failed in a connected folder with "Operation not permitted". So did git, because git deletes its own lock files, the small files it uses while it works.[^desktop-inspection] The security guide now documents the reason. By default a connected folder can be read and written, but deletes are blocked at the file system.[^security-guide]

[Where the work happens](../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md) shows which jobs went to which desk. This table adds the technical cases.

| You want to | Use | Example request |
| --- | --- | --- |
| Reach a host on your office network or VPN | The desktop workspace, only with **All domains** allowed and no blocking device policy | "From my computer, check that the staging server answers." |
| Look at an image or a PDF page | The cloud workspace, after staging | "Stage slide 3 of the deck and tell me what is wrong with it." |
| Push code to GitHub or publish a package | Neither, unless **All domains** is allowed. Use a terminal on your own computer | "Make the changes in my connected folder. I will push them." |

The last row follows from the network rules for the desktop workspace.[^network-access]

### Chat, Cowork and the combined experience

These details back [How a request flows](../../claude-and-chatgpt-2/architecture/how-a-request-flows.md).

**[Vendor-documented]** Anthropic's security guide now describes this. Anthropic plans to join chat and Cowork into one experience, which the guide calls Unified Claude. In this combined experience, a chat "can upgrade itself to require a VM when a task needs agentic work". It can also "downgrade back to no-VM mode when it doesn't". In plain words, a chat gets a VM when a task needs many steps, and gives the VM up when it does not. Anthropic's service makes that decision. The user does nothing, and the model cannot start it. When it happens, "the chat history, files and referenced project files are copied into the cloud hosted VM." Code that a plain chat runs also goes into a Firecracker microVM, one for each conversation.[^security-guide]

**[Unknown]** Whether every account already has the combined experience. It has been rolling out to personal accounts since September 2026. It is off by default for organizations on the Claude Enterprise plan, Anthropic's plan for large companies. The desktop documentation still describes the Code tab as a separate part of the app, beside chat and Cowork.[^code-tab] The Tour describes the [Code tab and its environments](../../claude-and-chatgpt-2/tour/claude-code-tab.md) in detail.

### Projects in detail

These details back [Projects: coordination on top of sessions](../../claude-and-chatgpt-2/architecture/projects-coordination-on-top-of-sessions.md).

**[Vendor-documented]** A cloud thread loads each repository's `CLAUDE.md`. It also loads the skills, connectors and plugins on your account and project. It does not load a repository's own skills, `.mcp.json` or `.claude/settings.json`. Changes "reach new threads, not threads already running."[^claude-projects]

A project thread can also run on your own computer, through Remote Control. It needs Claude Code v2.1.280 or later on that computer. In the project, you choose **Work locally** from the **+** menu and click **Allow once** on the folder card.[^claude-projects]

A thread that stops at your plan's usage limit "waits and by default continues on its own when the limit resets."[^claude-projects] On November 9, 2026, the same page still said that a thread started by a scheduled task did not wait.

#### Sessions that message each other

**[Vendor-documented]** Claude Code has **cross-session messaging** for sessions you run yourself. One session can send another a plain-text message, such as a finding. It is "never the sender's conversation history or files." Messages between sessions on one machine stay on that machine. Messages to your cloud sessions or other machines go through Anthropic's servers. Claude finds those sessions only while the sending session is connected to Remote Control. Without that connection, the receiver cannot reply.[^cross-session],[^run-agents-in-parallel]

**[Vendor-documented]** A message is information, not your voice. "It can't approve anything." "It can't change configuration." Commands in it never run. Permission prompts still fire in the receiving session. The `crossSessionInbound` setting can accept, hold or refuse messages. `isolatePeerMachines` makes Claude ask before a message leaves the machine.[^cross-session]

### The controls an organization adds

These details back [Security boundaries](../../claude-and-chatgpt-2/architecture/security-boundaries.md). In an Enterprise organization, administrators set further controls around every session.[^security-guide]

| Control | What it does |
| --- | --- |
| Compliance API | The server-side record of session content and activity, which a company can feed into its security tools. Anthropic's own network logs for cloud sandboxes are internal. Customers cannot read or export them |
| OpenTelemetry export | A live stream of each user's actions and costs to the company's own collector. From the cloud VM, it sends metadata only, not prompt text |
| Inference hooks | The company's own filter can allow or deny every prompt and tool call before it runs |
| Network egress setting | Decides what code in the sandbox can reach. Traffic leaves from Anthropic's network, so the company's own proxy and firewall do not see it |
| Remote Control and trusted devices | Remote Control lets web and phone sessions use a linked computer. It is on by default once cloud sessions are on. Anthropic recommends requiring trusted devices |
| Data handling | Data is stored in US regions, with no EU option today. The organization's custom retention window does not yet apply to Cowork cloud sessions. Cloud sessions are not available with Zero Data Retention or customer-managed keys, and they are off by default for HIPAA-ready organizations |

### ChatGPT's four tiers

These details back [ChatGPT and Codex](../../claude-and-chatgpt-2/architecture/chatgpt-and-codex.md).

Each row is one way to use ChatGPT. A **sandbox** is a closed-off space where code can run without reaching the rest of the system. The columns ask four questions:

- **Where the harness runs.** Which program runs the agent loop, and on which machine.
- **Compute environment.** Where the tools run, and what they can use there.
- **Persistence.** What is kept after the work stops.
- **Basis.** The evidence for the row. "Not published" means OpenAI has not said, so we do not know.

In the table, Code Interpreter is OpenAI's name for the tool that lets chat write and run Python code. **MCP** (Model Context Protocol) is a standard way to connect an AI to outside tools. **Skills** are saved instructions that an agent loads when a task needs them.

| Tier | Where the harness runs | Compute environment | Persistence | Basis |
| --- | --- | --- | --- | --- |
| Regular ChatGPT chat | Not published | A Python sandbox that chat calls as a tool. OpenAI calls it Code Interpreter | Not published | Not published |
| ChatGPT agent[^chatgpt-agent] | Not published | "Its own virtual computer", with browsers, a terminal and API access | It keeps the context for the task. You can pause it and resume it | Vendor-documented, in a 2025 post that OpenAI now marks as outdated |
| Codex (in the ChatGPT app) | The Codex harness. For cloud tasks it runs in a cloud container. For local tasks it runs on your machine | A workspace, a shell, files, MCP and skills | Threads (conversations) are stored on the server | Vendor-documented[^codex-harness],[^openai-sandboxing] |
| ChatGPT Work | The Codex task-execution harness, for cloud tasks | Work tasks run in the cloud or on your computer | Cloud Work conversations sync across devices. Local ones stay on your computer | Vendor-documented[^work-cloud-security],[^whats-new] |

### How the Codex harness is built

OpenAI's write-up describes a setup close to the Claude Code one in this section.[^codex-harness]

- **The harness** is, in OpenAI's words, "the agent loop and logic that underlies all Codex experiences." A part called Codex core runs the loop. It saves each **thread**, which is one conversation, and it runs tools in a sandbox.
- **App Server** wraps Codex core in a program that keeps running. An app talks to it through a two-way **JSON-RPC** connection. JSON-RPC is a simple way to send requests and replies as short text messages. Because the connection works in both directions, the App Server can pause a turn and ask your app for approval.
- **Cloud (Codex Web).** OpenAI writes, "A worker provisions a container with the checked-out workspace, launches the App Server binary inside it." In plain words, a server program sets up a container with your project's files. Then it starts the App Server inside it. "Keeping state and progress on the server means work continues even if the tab disappears." OpenAI does not say whether Work uses exactly this container path.[^work-cloud-security]
- **Local (desktop app and code editors).** The App Server runs on your own machine. Codex keeps the commands it runs inside a sandbox, which decides which files they can change and whether they can use the network. Each operating system supplies its own sandbox. On a Mac, Codex uses Apple's Seatbelt. On Linux, it uses a tool called bubblewrap. On Windows, it uses the native Windows sandbox. **WSL2** is a way to run Linux inside Windows, and there Codex uses bubblewrap too.[^openai-sandboxing]

### Network secrets

A **network secret** is an API key or token that you store on a cloud environment. Claude can then call that API from any session in the environment, but it never sees the key. Each session runs on its own **virtual machine (VM)**, a separate computer made in software. A **proxy** is a go-between that requests pass through. Anthropic's **agent proxy** is the proxy for requests that leave the VM. It adds the key to each request after the request leaves. So the key stays outside the session.[^cloud-environments]

A few words in the table below need a plain meaning first:

- An **Owner** is a role in a Team or Enterprise organization on claude.ai. On these plans, Owners count as organization admins. Admins, despite the name, do not.[^cloud-environments]
- A **shared environment** is one that an Owner makes for every member of the organization.[^cloud-environments]
- A **host** is the name of the server an API runs on, such as `api.example.com`.
- A **setup script** is a script that runs in a new session before Claude starts work.[^cloud-environments]
- **Telemetry export** is the usage and cost data that Claude Code can send to your organization's own monitoring tools.[^monitoring]
- **Customer-managed encryption keys** let an organization keep its own key, and Anthropic uses that key to encrypt some of its data in Claude.[^cmek]

| Fact about network secrets | Detail |
| --- | --- |
| Plans | Pro, Max, Ultra, Team and Enterprise |
| Who can add one | Anyone, on their own environment, on any of these plans. On Team and Enterprise, non-Owners get a shorter **Add secret** form. It is in the environment's own window at claude.ai/code. It takes one secret. That secret covers one host. On a shared environment, only an Owner can add one |
| Never attached to | GitHub, the Anthropic API, public package registries, setup script requests and telemetry export |
| Not available | In a self-hosted environment, and for organizations that use customer-managed encryption keys |
| Reachability | The API must accept traffic from the internet, because requests leave from Anthropic's network |

**Basis:** vendor-documented.[^cloud-environments]

The list of requests that never get a secret has reasons. GitHub has its own proxy, described next. A setup script runs before Claude Code connects to the agent proxy. Claude Code sends its telemetry export itself, so that request does not go through the agent proxy.[^cloud-environments]

In an Anthropic-hosted environment, every GitHub request goes through a separate GitHub proxy. It keeps your real GitHub login outside the session. The proxy refuses two things. A **branch** is a separate line of work in a repository. The proxy rejects deleting a branch, and it rejects pushing anything other than a branch, such as a **tag**. A tag is a fixed label on one version of the code. The proxy does not limit which branches a push can update. For that, Anthropic points to branch protection rules or rulesets. Both are settings on GitHub that limit who can change a branch.[^cloud-environments]

### How a runner handles a session

In a self-hosted environment, a **runner** is the program on your computers that does the work. A session is one Claude Code task that someone started.[^self-hosted]

**[Vendor-documented]**[^self-hosted]

1. Anthropic's **control plane**, the service that organizes sessions, places the session on the environment's queue. The queue is a waiting line of sessions.
2. A runner with free capacity claims it and holds a **lease**, a time-limited claim on the session.
3. The runner clones the repository and starts a Claude Code **process** for the session. A process is a running program.
4. The session streams its events to Anthropic over HTTPS. Meanwhile, the runner keeps polling, which means it checks in with Anthropic again and again. Each check-in renews the lease and shows the runner is still alive.
5. If the runner stops polling, its lease lapses after about 60 seconds. Then Anthropic's server puts the session back on the queue for another runner. That step can take a few minutes, and sometimes longer.

A runner serves one **owner** at a time. The owner is the account that a session belongs to. The first session a runner claims locks it to that owner. As a result, checked-out code never mixes between owners. When a person starts a session, the owner is that person's account.[^self-hosted]

**Claude Tag** is Claude working in Slack channels as your organization's shared identity, not as any one member.[^cloud-environments] For Claude Tag channel sessions, the owner is the Claude Tag agent, not a person.[^self-hosted]

Two kinds of session cannot use a self-hosted environment yet. **Claude Security** sessions scan your code for security weaknesses.[^claude-security] **Code Review** sessions review the pull requests in your GitHub repositories.[^code-review] Neither one routes to self-hosted environments yet.[^self-hosted]

### The self-hosted session token

Your own services inside your network may get requests from a session. Each service needs to know two things. Did the request really come from a Claude Code session in your environment? And who started that session?[^self-hosted-identity]

So every self-hosted session gets a token in `CLAUDE_CODE_SESSION_ACCESS_TOKEN`. It is a **JWT** (JSON Web Token), a short piece of text that a service can check. It is **signed**, which means Anthropic adds a mark that shows the token came from Anthropic. Your service checks that mark with keys. These keys are different from API keys. Anyone may read them, because they can only check the mark. They cannot make one. Anthropic lists them at a public **JWKS** endpoint. An endpoint is a web address that a program calls, and JWKS means JSON Web Key Set.[^self-hosted-identity]

Inside the token are **fields**, which are named values. The **issuer** is the field that says who made the token. The **audience** is the field that says who the token is for.[^self-hosted-identity]

A token cannot be canceled early. It stops working only when it expires. In technical terms, Anthropic publishes no **revocation** feed. That would be a published list of tokens canceled before their expiry time.[^self-hosted-identity]

| The token | Detail |
| --- | --- |
| Proves | Anthropic issued it for one session in one environment. It also names who created the session, as described below the checks |
| Does not prove | Which process presents it. To present the token is to show it to your service. "Any code Claude runs, and any tool or MCP server the session starts, can read and present it" |
| Checks | Six checks, with their values, in the numbered list below |
| Lifetime | Four hours by default, eight at most. The runner gets a fresh token before the old one expires. There is no revocation feed |

**Basis:** vendor-documented.[^self-hosted-identity]

Here is what each check in the table means for your service:

1. The token starts with `sk-ant-cc-`. Tokens for sessions on Anthropic's own machines start with `sk-ant-si-` instead. They are signed with different keys, so your service rejects them.
2. The signature is real. `ES256` is the signing method, and your service checks the signature with Anthropic's published keys.
3. The issuer must be exactly `ccr`, the value Anthropic always writes there.
4. The audience must contain your environment ID. Token fields call an environment a pool, so the ID starts with `ccpool_`. You can see it with your environment on the Cloud environments admin page. This check rejects tokens made for another organization's environment.
5. The role must be exactly `session_worker`. Other tokens signed with the same keys carry other roles.
6. The token must not have expired.

The token's `act` field records who created the session, and `act.sub` holds that creator's ID. A value that starts with `user:` means a person did. A value that starts with `agent:` means your organization's service identity did. That is the account Claude Tag channel sessions start from.[^self-hosted-identity]

Anthropic says not to treat the token as the creator signing in, because any code in the session can use it. Your service may trade the token for its own credentials, such as a key to an internal system. If so, limit them to what one coding session needs. Make them expire no later than the token. Record the session ID and the token ID with the creator's identity, so you can trace each action back to one session.[^self-hosted-identity]

[^cloud-environments]: As verified on November 20, 2026. Configure cloud environments, Claude Code Docs.
[^self-hosted]: As verified on November 20, 2026. Self-hosted environments, Claude Code Docs.
[^self-hosted-identity]: As verified on November 20, 2026. Verify session identity in self-hosted environments, Claude Code Docs.
[^cmek]: As verified on November 20, 2026. What are customer-managed encryption keys (CMEK)?, Claude Help Center, updated June 15, 2026.
[^monitoring]: As verified on November 20, 2026. Monitoring, Claude Code Docs.
[^claude-security]: As verified on November 20, 2026. Scan your codebase for vulnerabilities, Claude Code Docs.
[^code-review]: As verified on November 20, 2026. Code Review, Claude Code Docs.
[^security-guide]: As verified on November 20, 2026. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators. Its idle rule is in the part that covers cloud sessions for both Cowork in the cloud and the combined chat and Cowork experience.
[^cowork-team]: As verified on November 20, 2026, Anthropic says sessions on Team and Enterprise plans "can run in two places": on the user's computer, "with code in an isolated virtual machine", or in the cloud. The organization's "Run Cowork in the cloud" setting is on by default for Team plans and off by default for Enterprise plans. Use Claude Cowork on Team and Enterprise plans, Anthropic.
[^cowork-cloud]: As verified on November 20, 2026, Anthropic says "Claude Cowork can now run your tasks in the cloud" and describes "the new Claude experience, which combines chat and Cowork". What to expect with Claude Cowork in the cloud, Claude Help Center, updated November 17, 2026.
[^code-tab]: Claude Code Docs, Desktop application, as verified on November 20, 2026. The page lists Local, Cloud, SSH and WSL, and says Cloud "runs on Anthropic-managed infrastructure by default".
[^cowork-surfaces]: As verified on November 20, 2026. Anthropic says "your sessions and files are saved to your Claude account", and that tasks started on your computer before October 6 stay there. It says "On October 6, 2026, new Cowork tasks on Pro, Max, and Ultra plans run in the cloud." The page does not mention a virtual machine on your computer. Use Claude Cowork on web, desktop, and mobile, Claude Help Center, updated November 19, 2026.
[^code-desktop]: As verified on November 20, 2026. The page says a Code tab session can "Run on your machine, in the cloud, or over SSH", and it describes WSL sessions. Use Claude Code Desktop, Claude Code Docs.
[^network-access]: As verified on November 16, 2026, Anthropic says registries and `github.com` are download-only unless the domain allowlist is set to all domains, and that to push or publish you should "use a terminal on your own computer". As verified on November 20, 2026, the page says "When a Cowork task runs on your computer, Claude runs its shell commands in a virtual machine (VM)." Network access for shell commands, Anthropic.
[^cowork-safely]: As verified on November 20, 2026, Anthropic says Cowork "requires your explicit permission before permanently deleting any files". The same page says the cloud environment "is created for that one session" and "is removed when the session ends". Use Claude Cowork safely, Claude Help Center, updated November 19, 2026.
[^desktop-inspection]: Panaversity's inspection of a Claude conversation linked to a Mac with one connected folder, November 16, 2026. The commands are in the appendix. Anthropic does not publish machine sizes, folder paths, tool names or staging limits, and they can change without notice.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic. The plan list and the usage-limit rule were checked again on November 16, 2026, and the thread limit on November 16, 2026, after the page changed. Projects are in public beta on Pro, Max and Ultra plans and rolling out gradually, as checked again on November 21, 2026. The steps for a thread on your computer, and the Claude Code v2.1.280 requirement, were checked on November 16, 2026.
[^cross-session]: As verified on November 9, 2026. Message your other Claude Code sessions, Anthropic.
[^run-agents-in-parallel]: As verified on November 9, 2026. Run agents in parallel, Anthropic.
[^chatgpt-agent]: As verified on November 20, 2026. Introducing ChatGPT agent, OpenAI, July 17, 2025. The post now says "This launch post is outdated" and points readers to Workspace agents and ChatGPT Work.
[^codex-harness]: As verified on November 20, 2026. Unlocking the Codex harness: how we built the App Server, OpenAI, February 4, 2026.
[^openai-sandboxing]: As verified on November 20, 2026. The page says Codex uses Seatbelt on macOS, bubblewrap on Linux and WSL2, and the native Windows sandbox in PowerShell. Sandbox, ChatGPT Learn, OpenAI.
[^work-cloud-security]: As verified on November 20, 2026. The page says "Work Cloud uses the Codex task-execution harness", that Work and Codex "share core execution and isolation mechanisms", and that Work Cloud "manages its own execution environment". ChatGPT Work cloud security, OpenAI.
[^whats-new]: As verified on November 20, 2026. The entry for July 13 to 17, 2026 says cloud Work conversations sync across web, mobile and desktop, and local ones stay on your computer. What's new, ChatGPT Learn, OpenAI.


