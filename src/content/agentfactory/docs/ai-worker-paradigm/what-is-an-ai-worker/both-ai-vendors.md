# 2.5 Choose what runs it, in your own app (/ai-worker-paradigm/what-is-an-ai-worker/both-ai-vendors)

---
type: Document
title: "2.5 Choose what runs it, in your own app"
description: "Choose, in Claude, ChatGPT or an open-source tool, where the model is set, which model and effort, how the worker keeps going, its project, where its output is kept and whose name it works in, then write them in Runtime needs."
status: stable
order: 102.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "02"
part: I
expert_status: required
concepts: [ "2.5" ]
last_verified: 2026-10-17
review_by: 2026-11-17
sources:
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-scheduled-tasks
    title: "Schedule recurring tasks in Claude Cowork (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
  - id: anthropic-code-scheduled-tasks
    title: "Automate work with scheduled tasks, formerly routines (Claude Code Docs, verified 2026-11-18)"
    resource: https://code.claude.com/docs/en/routines
  - id: anthropic-claude-tag
    title: "What is Claude Tag? (Claude Help Center, updated 24 September 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/15594475-what-is-claude-tag
  - id: anthropic-claude-tag-identity
    title: "How agent identity works (Claude Tag, verified 2026-11-18)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: anthropic-claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, updated 11 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: anthropic-google-workspace
    title: "Use Google Workspace connectors (Claude Help Center, updated 18 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
  - id: anthropic-skills
    title: "What are skills? (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12512176-what-are-skills
  - id: anthropic-files
    title: "Create and edit files with Claude (Claude Help Center, updated 5 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
  - id: anthropic-research
    title: "Use research on Claude (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11088861-use-research-on-claude
  - id: anthropic-research-post
    title: "Claude takes research to new places (Anthropic, 15 April 2025, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/research
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, updated 13 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-docs-every-plan
    title: "Claude Docs, Slides and Design out of beta on every plan (Claude on X, 8 October 2026, verified 2026-11-18)"
    resource: https://x.com/claudeai/status/2108271559928389679
  - id: anthropic-claude-docs
    title: "Get started with Claude Docs (Claude Help Center, updated 12 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: anthropic-choosing-model
    title: "Choosing the right model (Anthropic platform documentation, verified 2026-11-18)"
    resource: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model
  - id: anthropic-models-overview
    title: "Models overview (Anthropic platform documentation, verified 2026-11-18)"
    resource: https://platform.claude.com/docs/en/models/overview
  - id: anthropic-model-settings
    title: "Change the model, effort, and thinking settings (Claude Help Center, updated 9 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
  - id: openai-work-and-codex
    title: "ChatGPT Work and Codex (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
  - id: openai-projects
    title: "Projects in ChatGPT (OpenAI Help Center, verified 2026-10-06)"
    resource: https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt
  - id: openai-memory
    title: "Memory in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/8590148-memory-in-chatgpt
  - id: openai-connected-apps
    title: "Connected apps in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt
  - id: openai-skills
    title: "Build skills (OpenAI, ChatGPT Learn, verified 2026-11-23)"
    resource: https://learn.chatgpt.com/docs/build-skills
  - id: openai-deep-research
    title: "Deep research in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt
  - id: openai-release-notes
    title: "ChatGPT release notes, entry for 29 September 2026 (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
  - id: openai-chatgpt-slack-teams
    title: "Using @ChatGPT in Slack and Microsoft Teams (OpenAI Help Center, verified 2026-11-23)"
    resource: https://help.openai.com/en/articles/20001537-using-chatgpt-in-slack-and-microsoft-teams
  - id: openai-business-models
    title: "ChatGPT Business models and limits (OpenAI Help Center, verified 2026-10-06)"
    resource: https://help.openai.com/en/articles/12003714-chatgpt-business-models-and-limits
  - id: anthropic-duet
    title: "Claude Duet (Anthropic, 21 October 2026, verified 2026-11-18)"
    resource: https://claude.com/resources/articles/claude-duet
  - id: anthropic-duet-help
    title: "Get started with Claude Duet (Claude Help Center, updated 12 November 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/17631495-get-started-with-claude-duet
  - id: openai-dots
    title: "Introducing dots (OpenAI, 29 September 2026, verified 2026-11-23)"
    resource: https://openai.com/index/introducing-dots/
  - id: openai-team-tasks
    title: "Creating and managing team tasks in ChatGPT (OpenAI Help Center, verified 2026-11-02)"
    resource: https://help.openai.com/en/articles/20001540-creating-and-managing-team-tasks-in-chatgpt
  - id: opencode-cli
    title: "CLI (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/cli/
  - id: opencode-providers
    title: "Providers (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/providers
  - id: opencode-permissions
    title: "Permissions (OpenCode v2 documentation, verified 2026-10-23)"
    resource: https://opencode.ai/v2/docs/permissions/
  - id: openclaw
    title: "OpenClaw README (OpenClaw Foundation, GitHub, MIT, verified 2026-10-23)"
    resource: https://github.com/openclaw/openclaw
  - id: openclaw-automations
    title: "Automations (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/automation/cron-jobs
  - id: openclaw-memory
    title: "Memory (OpenClaw documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/concepts/memory
  - id: openclaw-security
    title: "Secrets and storage (OpenClaw security documentation, verified 2026-10-23)"
    resource: https://docs.openclaw.ai/gateway/security/secrets-and-storage
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two phone companies both sell small, medium and
large plans, but the names and limits differ. You compare what each plan
does for you, not what it is called.

**What you will learn.** Where your own app sets what runs a worker: the
model and its effort, how the worker keeps going between runs, its
project, where its output is kept and whose name it works in. You use
these steps when you write Runtime needs in Task 5 of the lab.

**Why it matters.** A choice nobody wrote down, with its date, cannot be
checked or moved to another AI vendor. [2.4](surface-and-model.md) gave
the rules for choosing a surface and a model, and each app puts those
choices in a different place.

## Where to choose what runs it in your app

**Before you start,** open your app beside this page. The lab says what to
decide; these steps say where each choice sits in the app. What you find
goes under Runtime needs and Identity, the fields [2.6](role-contract.md)
describes. For example, for a different worker, a library's weekly
reminder of overdue books, the two lines might read:

```text
Identity:      Today it runs under the librarian's login.
               Target: an account of its own.
Runtime needs: <the app>, in the library's reminders project. Each run
               reads the loans list first.
               <the model> at <the effort>, chosen <today's date>.
```

Follow your tab.

### Claude

*Scheduled tasks and the Sheets template need a paid plan. On Free, the
worker runs only when you run it in a conversation, so write "run by
hand" for how it keeps going.*

1. **Open one conversation for the worker, and check where its model is
   set.** If your app still shows Chat and Cowork
   ([1.5](../from-chatbots-to-ai-workers/both-ai-vendors.md)), set the
   model in each.[^anthropic-one-claude]
2. **Set the model and effort in the one model menu next to the send
   button.** It sets the model and its effort level, and you can change
   both at any point. There are five effort levels: Low, Medium, High,
   Extra high and Max. Extra high is offered only on newer models, from
   Opus 4.7 on.
   Each model has a recommended level, marked Default, and a change
   applies from Claude's next response. Start from the model and the
   Default effort the menu shows.[^anthropic-model-settings]
3. **Choose by the job, and tune the effort before you switch models.**
   Tier names do not match one to one, so compare models by the job each
   AI vendor gives them, from fastest and cheapest to most capable, and by
   your own tests, never by name. Anthropic advises that tuning effort
   often works better than switching models. For a simple step that runs
   often, such as sorting each new email, try
   a lower effort or a faster model, and keep it if it passes your cases.
   The Product reference lists Claude's models and their
   jobs.[^anthropic-choosing-model]
4. **Choose how it keeps going between runs.** For recurring work,
   schedule a task. Scheduled tasks run remotely. They work with your
   connectors and the files saved to your Claude account. Each run starts fresh and picks up from the records, the second
   way to continuity in Figure 2.5. If the worker must stay on between
   runs instead, Claude Duet, Anthropic's always-on agent, is the first
   way ([1.5's product reference](../from-chatbots-to-ai-workers/both-ai-vendors.md#product-reference)
   describes it).[^anthropic-duet]
   [Chapter 9](../../managing-ai-workers/work-that-runs-without-you/both-ai-vendors.md)
   sets up scheduled tasks in full.[^anthropic-scheduled-tasks]
5. **Decide whether it needs a project, and open it.** Use [2.4's
   table](surface-and-model.md#tell-close-choices-apart). A project holds
   instructions, files and memory for one area of work. Claude runs
   related tasks in it as threads, and every thread shares them. An
   uploaded file is a copy: a later change reaches the project only when
   you upload the file again. A Claude project belongs to one person and
   cannot be shared.[^anthropic-claude-projects]
6. **Choose where its output is kept, before the first run.** Say the
   output is a spreadsheet. An artifact, a piece of work that
   opens beside the conversation, made from the Sheets template, in beta
   on paid plans, is a spreadsheet you and Claude both edit. Without it,
   it comes back as a file (Chapter 1): decide where that file
   is kept, such as a shared drive reached through a connector, and who
   can see it.[^anthropic-artifacts]
7. **Write whose name it works in, on the Identity line.** Most of
   today's products work through your own account, so other systems
   record the worker's actions as yours. If yours does, write today's
   account and the target, as in the example above. The [differences below](#the-differences-that-change-a-decision) name
   the products that give a worker an account of its own.
8. **Write Runtime needs, then check it.** Write the app, the model and
   the effort with today's date, how it keeps going and the project, as in
   the example. Then read the whole contract. A pass looks like this: the
   AI vendor and the model appear only under Runtime needs, with a date,
   and the Identity line names today's account and the target. If either
   name appears in another field, move it, so that a move to another AI
   vendor changes one field.

You use these steps in Lab 2, [Task 5](lab.md#task-5-how-it-runs-and-is-reached).

### ChatGPT

*Space needs Pro, Business or Enterprise, and team tasks need Business or
Enterprise. Without them, keep the output as a file, and the work under
your own account.*

1. **Find where the model is chosen.** OpenAI is bringing quick questions
   and longer tasks together in one conversation. Until that reaches you,
   choose Chat or Work from the toggle
   ([1.5](../from-chatbots-to-ai-workers/both-ai-vendors.md)). An
   app that still shows Chat and Work has a model picker for each, so the
   model you tried in chat may not be the one that runs the task. Work and
   Codex, OpenAI's coding agent, use their own models, with a Default
   option that sets the model and reasoning level
   together.[^openai-work-and-codex]
2. **Set the model and its reasoning level in each picker.** On Business
   plans, you choose a reasoning level in chat, from Instant to Extra
   High, or Pro. OpenAI's page on ChatGPT Business models and limits lists
   the models and their usage limits.[^openai-business-models]
3. **Choose by the job, starting from the default.** Compare models by the
   job each AI vendor gives them and by your own tests, never by name.
   For a step that runs often, try a lower reasoning level first, and keep
   it if it passes your cases.
4. **Choose how it keeps going between runs.** For recurring work,
   schedule a task
   ([1.5](../from-chatbots-to-ai-workers/both-ai-vendors.md) shows
   where). Each run starts fresh and picks up from the records, the second
   way to continuity in Figure 2.5. If the worker must stay on between
   runs instead, a dot, OpenAI's always-on agent, keeps working between
   conversations, with its own computer: the always-on way in Figure
   2.5.[^openai-dots] [1.5's product
   reference](../from-chatbots-to-ai-workers/both-ai-vendors.md#product-reference)
   lists the plans that have dots.
5. **Decide whether it needs a project, and open it.** Use [2.4's
   table](surface-and-model.md#tell-close-choices-apart). Projects keep
   related chats, files and instructions together, and can be shared with
   a team.[^openai-projects]
6. **Choose where its output is kept, before the first run.** If the team
   edits the output together, use Space (see Space in the Product
   reference). Otherwise it comes back as a file: decide where
   it is kept, such as a shared drive reached through an app, and who can
   see it.
7. **Write whose name it works in, on the Identity line.** Your own dot,
   like most of today's products, works on your behalf, so other systems
   record its actions as yours. If yours does, write today's account and
   the target, as in the example above. The
   [differences below](#the-differences-that-change-a-decision) name the
   products that give a worker an account of its own.
8. **Write Runtime needs, then check it.** Write the app, the model and
   the reasoning level with today's date, how it keeps going and the
   project. A pass looks like this: the AI vendor and
   the model appear only under Runtime needs, with a date, and the
   Identity line names today's account and the target. If either name
   appears in another field, move it.

You use these steps in Lab 2, [Task 5](lab.md#task-5-how-it-runs-and-is-reached).

### Open source

1. **Choose the provider as well as the model.** You choose the model.
   OpenCode works with many providers, the companies that run models, and
   with models on your own computer, run by a program such as Ollama, LM
   Studio or vLLM. A
   provider's model runs at that provider, so the conversation goes
   there.[^opencode-providers]
2. **For one task at a time, use OpenCode.** OpenCode is an open-source
   coding agent. It runs on your own computer, and so do its tools. It is
   an agent that works on its own: you brief one task, it runs, and it
   ends. A Delegated AI Worker can do each of its jobs this
   way.[^opencode-cli]
3. **For ongoing work, set up OpenClaw on a computer you control.**
   OpenClaw is an open-source assistant that runs on a separate computer
   you control ([1.5](../from-chatbots-to-ai-workers/both-ai-vendors.md)).
   The Product reference says how it wakes and where it keeps its
   memory.[^openclaw]
4. **Set what it may do before the first run.** OpenCode's agents start
   out allowed to use every tool. Only reading a file of sensitive
   settings asks first. So until you set each tool to allow, ask or deny,
   what it can call is what it may do.[^opencode-permissions]
5. **Write Runtime needs, then check it.** Write the provider, the model
   and the computer it runs on, with today's date. A pass looks like this:
   the provider and the model appear only under Runtime needs, with a
   date.

Lab 2 runs in Claude or ChatGPT. Use these steps when you set up your own
tool.

## The differences that change a decision

Two differences change what you write in Runtime needs.

1. **Where the model is chosen.** Claude sets the model once; an OpenAI
   app that still shows Chat and Work sets it twice. Record it for each
   surface the worker uses.
2. **Whose name the work runs in.** The everyday products work through
   your own account (step 7). In Claude
   Code, anything a scheduled task (once called a routine there) does
   through your connectors appears as you.[^anthropic-code-scheduled-tasks]
   Claude Duet runs on your Claude account, and with your approval it
   sends email from the accounts you connect.[^anthropic-duet-help] Two
   products can act under a **service account**: an account that belongs
   to the team, not to the creator. Claude Tag, in beta on Team and
   Enterprise, is one shared Claude in a team's Slack channel. It takes on
   work when someone tags it in a team conversation, and remembers context
   across days.[^anthropic-claude-tag] It uses its own service accounts in
   a Slack channel. In a one-to-one direct message, or with a member's
   personal connector, the work is recorded under that member's name. In a
   group message, Claude Tag uses its service
   accounts.[^anthropic-claude-tag-identity] ChatGPT's team tasks,
   recurring work a team owns on Business and Enterprise, run under the
   team's service account. Each connection still uses a designated
   account, with its permissions.[^openai-team-tasks] A specialist dot
   gets its own identity, so far only in enterprise pilots.[^openai-dots]
   So every way to give a worker its own identity needs a team or company
   plan, or a pilot.

**Open source changes who keeps the machine and who supplies the model.**
OpenClaw takes the always-on way on a computer you control, so what
survives is what you keep on that computer and back up. OpenCode lets you
choose the provider as well as the model, so write the provider in the
Role Contract's runtime needs too.

## The invariant

The product names differ, but the way you decide
([2.4](surface-and-model.md)) does not. Write the surface and the model in
the Role Contract as runtime needs: then you can change either one without
changing the role or what it may do, and you retest the new setup.

## Product reference

This is for looking things up, not for reading through. Each tab gives
the date its lines were checked, and each line names its source. If the
date is old, open the line's source.

The same idea often goes by different names on the two AI vendors:

| The idea | Anthropic | OpenAI |
| --- | --- | --- |
| A link to another app | Connector | App, also called a plugin |
| Many sources, checked and cited | Research | Deep research |
| A document the team edits together | Claude Docs | Space |
| Work that continues between conversations | Scheduled tasks, Claude Duet | Scheduled tasks, a dot |
| The AI in a team channel | Claude Tag in Slack | @ChatGPT in Slack and Teams |

### Four Claude features that later lessons build on

*As verified 18 November 2026.* Every reader sees these four here,
whichever tool you use.

**Connectors and skills.** Connectors link Claude to other apps. The
Google Workspace connectors reach Gmail, Google Calendar and Google
Drive. Outside Auto mode, Claude asks you before it sends an email or
shares a file. In Auto mode, such an action can go ahead without asking,
unless an automated check marks it as risky or your organization
requires approval. Anthropic warns that the check can miss a risky
action.[^anthropic-google-workspace] Skills are folders of instructions,
scripts and resources that Claude loads when a task needs them.
Anthropic provides some, such as skills for Word and Excel files, and
you can add your own. Skills follow an open standard, so they are not
only for Claude.[^anthropic-skills]

**Code execution and research.** Code execution and file creation is a
setting that lets Claude write and run code in a sandbox. It is on by
default, except in older Enterprise organizations. It works out numbers
and builds spreadsheets, documents and other files. The updated Settings
call it Create and edit files.[^anthropic-files] Anthropic warns that
hidden instructions in a file or a website can trick Claude into running
untrusted code or sending information out. File work also uses more of
your usage limit.[^anthropic-files] Skills need this setting turned
on.[^anthropic-skills] Research, on paid plans, runs several searches
that build on each other, across the web and connected
apps.[^anthropic-research] Anthropic's launch post says its answers come
with citations you can check.[^anthropic-research-post] Research uses
your connectors without asking each time, and research started in the
mobile app searches only the web.[^anthropic-research]

**Artifacts and Claude Docs.** Artifacts open beside the conversation as
documents, slide decks, spreadsheets, designs, dashboards, whiteboards or
small tools that you can edit, return to and share. You can ask for one in
any chat, or start one from a template. The Docs, Slides and Design
templates are on every plan, including Free.[^anthropic-docs-every-plan],[^anthropic-artifacts]
The Data template, for dashboards, is on paid plans, and the
Whiteboards template is in beta on paid plans. Motion, for animations,
is in beta on Team and Enterprise.[^anthropic-artifacts] Artifacts need
the Create and edit files setting turned on. An artifact made from a
template can be exported: a doc to Word or PDF, a deck to PowerPoint or
PDF, an animation to MP4.[^anthropic-artifacts] In Claude Docs, a
team writes a document together with Claude in real time. On Team and
Enterprise plans, a Claude doc can be shared outside the organization
only if an Owner, the organization's top admin, allows
it.[^anthropic-claude-docs]

**Models.** Claude's models each have a
job.[^anthropic-choosing-model]

- **Haiku**, the fastest and lowest-cost, for high-volume steps, such as
  sorting documents or pulling data out of
  them.[^anthropic-models-overview]
- **Sonnet**, for speed and capability in everyday work, such as
  writing and data analysis.
- **Opus**, for complex agent work and enterprise work. Anthropic's
  guide for developers says most workloads start with it.
- **Fable**, the most capable model open to all customers, for work
  that runs for hours, such as research that ends in a finished report.

The current versions are Haiku 5.5, Sonnet 5.5, Opus 5.5 and Fable 5.2.
Anthropic's models overview lists every model, with its price for
developers.[^anthropic-models-overview] Set the model and its effort in
the model menu (step 2 above).

For the AP Worker, that could mean Haiku to sort each night's incoming
invoices, Sonnet to draft replies to vendor questions, and Opus for the
weekly payment-run proposal. Fable comes in only if a long job, such as
checking every vendor contract at year end, still falls short on Opus
at a higher effort.[^anthropic-models-overview] Test each choice on the
worker's own cases first (2.4).

### Claude

*As verified 18 November 2026.*

**Claude Tag and code.** One exception to the third difference above:
when work under a member's name ends in a pull request, a proposed
change to shared code, Claude's GitHub app writes
it.[^anthropic-claude-tag-identity]

**Chat and tasks.** [10.6](../../managing-ai-workers/governance-and-responsible-use/both-ai-vendors.md#product-reference)
says when the setting "Chat and Cowork unified" turns on by default.

**Memory.** A project's memory holds notes
Claude writes as it works, which you can read, edit and delete in the
project's settings.[^anthropic-claude-projects] Your account's memory saves
facts as topics you can read, edit or delete in Settings.
[8.2](../../managing-ai-workers/context-memory-knowledge-and-state/context-window.md#the-limit-memory-kept)
teaches memory in full.
Memory is on by default on Free, Pro, Max and Ultra. On Team and
Enterprise, owners decide.[^anthropic-memory]

### ChatGPT

*As verified 23 November 2026.*

**Team channels.** A team can also reach ChatGPT in its own channels, as
@ChatGPT in Slack and Microsoft Teams.[^openai-chatgpt-slack-teams]

**Specialist dots, verified 23 November 2026.** A specialist dot takes on dedicated responsibilities inside a
company. The company sets up each one with its own identity, its own
logins and access to the systems it needs. OpenAI is starting with
focused enterprise pilots, which are early trials with companies. In each
one, its engineers work with the company to define the dot's
responsibilities, its tools, and how people review and approve its
work.[^openai-dots] With its own identity and dedicated
responsibilities, it is the nearest thing in this section to a Standing
AI Worker built with a vendor's help.

**Projects and memory.** From a project you can start a task that uses the project's
context.[^openai-work-and-codex] Memory keeps saved memories that you
can review, correct and delete, and a second setting uses past
chats.[^openai-memory]

**Apps and skills.** In ChatGPT, connectors are called
apps.[^openai-connected-apps] A skill packages instructions, resources
and optional scripts, so ChatGPT or Codex can follow a workflow
reliably. Skills follow the same open standard as
Claude's.[^openai-skills]

**Deep research.** Chosen from the tools menu, it proposes a research
plan you can edit, then returns a report with
citations.[^openai-deep-research]

**Space.** Space is a home for pages and files.[^openai-release-notes]
Collaborators edit the same page, each with their own ChatGPT. Sharing a
page does not give other people access to your private chats or memory,
but anything written on the page is visible to everyone who can view
it. Space is on Pro, Business and Enterprise plans, and is rolling out to
eligible Plus accounts.[^openai-space]

### Open source

*As verified 23 October 2026.*

**OpenClaw, for ongoing work.** Its scheduler, Automations, wakes
the agent at set times or on events, such as a trigger from
Gmail.[^openclaw-automations] It keeps its memory as plain text files on
that computer.[^openclaw-memory] That is the always-on way to continuity
in Figure 2.5, on hardware you control.

**Running it safely.** OpenClaw runs its tools on the
computer itself unless you set up a sandbox.[^openclaw] For an agent a
company shares, its security guide says to run it on a dedicated
machine.[^openclaw-security]

[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Claude Help Center.
[^anthropic-scheduled-tasks]: Schedule recurring tasks in Claude Cowork, Claude Help Center.
[^anthropic-code-scheduled-tasks]: Automate work with scheduled tasks, Claude Code Docs.
[^anthropic-claude-tag]: What is Claude Tag?, Claude Help Center.
[^anthropic-claude-tag-identity]: How agent identity works, Claude Tag documentation.
[^anthropic-claude-projects]: Let Claude coordinate ongoing work with Projects, Claude Code Docs.
[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-google-workspace]: Use Google Workspace connectors, Claude Help Center.
[^anthropic-skills]: What are skills?, Claude Help Center.
[^anthropic-files]: Create and edit files with Claude, Claude Help Center.
[^anthropic-research]: Use research on Claude, Claude Help Center.
[^anthropic-research-post]: Claude takes research to new places, Anthropic, 15 April 2025.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^anthropic-docs-every-plan]: Claude Docs, Slides and Design out of beta on every plan, Claude on X, 8 October 2026.
[^anthropic-claude-docs]: Get started with Claude Docs, Claude Help Center.
[^anthropic-choosing-model]: Choosing the right model, Anthropic platform documentation.
[^anthropic-models-overview]: Models overview, Anthropic platform documentation.
[^anthropic-model-settings]: Change the model, effort, and thinking settings, Claude Help Center.
[^openai-work-and-codex]: ChatGPT Work and Codex, OpenAI Help Center.
[^openai-projects]: Projects in ChatGPT, OpenAI Help Center.
[^openai-memory]: Memory in ChatGPT, OpenAI Help Center.
[^openai-connected-apps]: Connected apps in ChatGPT, OpenAI Help Center.
[^openai-skills]: Build skills, OpenAI, ChatGPT Learn.
[^openai-deep-research]: Deep research in ChatGPT, OpenAI Help Center.
[^openai-release-notes]: ChatGPT release notes, entry for 29 September 2026, OpenAI Help Center.
[^openai-space]: Getting started with Space in ChatGPT, OpenAI Help Center.
[^openai-chatgpt-slack-teams]: Using @ChatGPT in Slack and Microsoft Teams, OpenAI Help Center.
[^openai-business-models]: ChatGPT Business models and limits, OpenAI Help Center.
[^anthropic-duet]: Claude Duet, Anthropic, 21 October 2026.
[^anthropic-duet-help]: Get started with Claude Duet, Claude Help Center.
[^openai-dots]: Introducing dots, OpenAI, 29 September 2026.
[^openai-team-tasks]: Creating and managing team tasks in ChatGPT, OpenAI Help Center.
[^opencode-cli]: CLI, OpenCode v2 documentation.
[^opencode-providers]: Providers, OpenCode v2 documentation.
[^opencode-permissions]: Permissions, OpenCode v2 documentation.
[^openclaw]: OpenClaw, OpenClaw Foundation, README on GitHub.
[^openclaw-automations]: Automations, OpenClaw documentation.
[^openclaw-memory]: Memory, OpenClaw documentation.
[^openclaw-security]: Secrets and storage, OpenClaw security documentation.

