# Claude 2.0: conversations and artifacts (/claude-and-chatgpt-2/tour/claude-conversations)

---
type: Document
title: "Claude 2.0: conversations and artifacts"
description: "What one Claude conversation can now do, the Auto and Manual settings, the Code tab, projects, and the new kinds of artifacts."
status: stable
order: 0.21
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Claude conversations" ]
last_verified: 2026-11-20
sources:
  - id: anthropic-research
    title: "Use research on Claude (Claude Help Center, updated 30 October 2026, verified 2026-11-18)"
    resource: https://support.claude.com/en/articles/11088861-use-research-on-claude
  - id: unified
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: plans-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: defaults
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: artifacts
    title: "Claude Cowork and chat are one Claude (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: cowork-blog
    title: "Claude Cowork and chat are now one Claude (Anthropic, 16 September 2026, verified 2026-11-20)"
    resource: https://claude.com/resources/articles/cowork-is-now-claude
  - id: anthropic-unified-enterprise
    title: "Set up and manage the new unified Claude experience for your Enterprise organization (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization
  - id: cowork-cloud
    title: "What to expect with Claude Cowork in the cloud (Claude Help Center, updated 17 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15811196-what-to-expect-with-claude-cowork-in-the-cloud
  - id: cowork-web
    title: "Use Claude Cowork on web, desktop, and mobile (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: cowork-safely
    title: "Use Claude Cowork safely (Claude Help Center, updated 19 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13364135-use-cowork-safely
  - id: claude-code-desktop
    title: "Use Claude Code Desktop (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/desktop
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, updated 13 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: claude-data
    title: "Get started with Claude Data (Claude Help Center, updated 13 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/17454700-get-started-with-claude-data
  - id: claude-sheets
    title: "Get started with Claude Sheets (Claude Help Center, updated 16 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: claude-whiteboards
    title: "Get started with Claude Whiteboards (Claude Help Center, updated 10 November 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/18324319-get-started-with-claude-whiteboards
  - id: projects-chat
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-21)"
    resource: https://code.claude.com/docs/en/claude-projects.md
  - id: projects-help
    title: "What are projects? (Claude Help Center, updated 30 October 2026, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*As verified on November 20, 2026.*

### Two places to work

The Claude desktop app has two main places to work.

**Conversations.** A **conversation** is the chat you have with Claude, and one conversation now does everything. You no longer choose between chatting and handing off work. You describe what you want. Claude then decides whether a quick answer is enough, or whether the request needs real work. Anthropic used to offer that working mode as a separate product called **Cowork**. Now it happens inside any conversation, so this book calls it simply a **task**: work that Claude carries out step by step.[^unified],[^cowork-blog],[^anthropic-unified-enterprise] A request for research, a report, a spreadsheet or a presentation becomes a task. The task searches the web, reads files and runs code. Then it returns files you can edit, in the same conversation. Several tasks can run at once.

### What Claude can do in a conversation

In a conversation Claude can:

- **Work with your files.** To let Claude read, organize and create files on your computer, you give it a folder. It sees only the folders you connect. Claude reaches your folder through the desktop app, so the app must be open.[^cowork-cloud],[^cowork-safely],[^cowork-web] [Where the work happens](../new-way-of-working/where-the-work-happens.md) says where a task runs and how it reaches your folders.
- **Use a browser.** To have Claude look things up on websites, let it use a browser. It can open pages, read them, click and fill in forms. It uses the app's built-in browser, or your own Chrome through an add-on called Claude in Chrome.
- **Use your computer.** With **computer use**, Claude works your screen the way you do. It clicks, types and moves between apps.[^plans-claude]
- **Use your apps.** A connector lets Claude read and act in another app you use. Connectors to apps such as Google Drive, Gmail, Microsoft 365 and Slack work during tasks. Skills and plugins teach it how you want a job done.
- **Research.** Claude's **Research** runs several searches and returns a report with citations. Click **+** at the bottom left of the message box, then choose **Research**. It needs a paid plan, with web search turned on.[^anthropic-research]
- **Draw in the conversation.** Charts, diagrams and small interactive visuals appear inside the reply.
- **Keep going without you.** Recurring tasks can run in the cloud on a schedule. [Where the work happens](../new-way-of-working/where-the-work-happens.md#what-this-means-for-you) says what keeps running when you close your laptop.
- **Follow you to your phone.** Tasks you start on the desktop also appear in the mobile app. There you can answer Claude's questions, redirect the work or start something new.

### Auto or Manual: how freely Claude acts

One setting controls how freely Claude acts in the whole conversation. **Auto** lets Claude keep working while automated safety checks run before most of its actions, and **Manual** makes it ask before it uses a new tool or opens a new site ([Set up the apps](../new-way-of-working/set-up-the-apps.md#step-3-make-it-ask-before-it-acts)). You can change the setting at any time. You can also stop or redirect Claude while it works. By default, Claude asks before it permanently deletes files ([Two safety rules for your folders](../new-way-of-working/where-the-work-happens.md#two-safety-rules-for-your-folders) gives the one exception).[^defaults],[^claude-code-desktop]

One request can start a task that uses a connector, then a browser, then your screen. Chapter 7, [The Authority Envelope](../../managing-ai-workers/the-authority-envelope/overview.md), teaches how to match each permission to what a worker may do.

### The Code tab and projects

**The Code tab.** This tab is Claude Code inside the desktop app. Claude Code is Anthropic's tool for building software. Despite its name, it is not only for programmers. You talk to it in plain language, and many people who use it never read the code it writes. Many of the newest features appear here. [The Code tab](claude-code-tab.md) describes it, and Part III teaches it properly.

**Projects** keep ongoing work in one conversation. Every new job in a project starts with the **project instructions**, which you write once. [The Code tab](claude-code-tab.md#projects-one-conversation-that-runs-the-work) explains projects, and says where to write the instructions.[^projects-chat],[^projects-help]

### New artifacts: documents, slides, sheets, designs, data, whiteboards and motion

An **artifact** is a piece of finished work that opens in its own window beside the conversation. It is something you keep, edit, present or share, not something you read once. Artifacts work in conversations and in the Code tab. Seven new kinds join the familiar pages, diagrams and small tools:

| Artifact | What it is | You can export it as |
| --- | --- | --- |
| **Docs** | A living document you and your team write with Claude, like a shared document you can chat with | Word, PDF, Markdown (plain text with simple marks for headings and lists) or Google Docs |
| **Slides** | A presentation built from notes, reports or the conversation. Edit the slides directly and present from Claude | PowerPoint, PDF or Google Slides |
| **Design** | Visuals, mockups, prototypes, one-pagers and landing pages. A design system can give them your colors and fonts | PDF, PowerPoint, HTML, a .zip, or a transfer to other tools |
| **Sheets** | A spreadsheet you, your team and Claude edit in the same cells, with formulas across tabs | Excel (.xlsx) or CSV |
| **Data** | Dashboards, data stories, short videos and letters, built from your company's data or connected apps. Each chart shows its query, the question Claude asked the data. It also shows when the data was last refreshed. It used to be called Dashboards | Shared as a link |
| **Whiteboards** | A shared board where your team and Claude lay out and group ideas | A PNG picture, or sent to another whiteboard app: Lucid, Miro or Zoho Vani |
| **Motion** | Animated explainers, charts and walkthroughs. Change a word, a number or a timing without redoing the rest | MP4 video |

Docs, Slides and Design are on every plan, including the free plan. Sheets, Data and Whiteboards need a paid plan, and Sheets and Whiteboards are in beta. Motion is in beta on Team and Enterprise.[^artifacts],[^claude-data],[^claude-sheets],[^claude-whiteboards] [Build Something](../build-something/overview.md) teaches you to use six of them, each beside the ChatGPT tool that does the same job.

Everything you make is kept in one place, the Artifacts tab in the sidebar. You can find your work there from any conversation, and start something new from a template. To change part of a document, highlight the text, click **Ask Claude** and say what you want. When Claude drafts several Markdown files at once, such as a skill, you can leave requests in several files. Then you send them together, and Claude makes all the changes in one pass.[^anthropic-artifacts]

Three properties make artifacts more than files:

- **They start private.** You decide whom to share them with.
- **They can be live.** On paid plans, an artifact can read from and write to your connected apps. It can also keep its own data between visits. Each person who opens it connects their own apps.
- **They can think.** An artifact can call Claude itself, so a shared tool can answer questions or coach the people who use it. Each person's use counts against that person's own plan, not the creator's. The [From Skills to Income](../../from-skills-to-income/overview.md) page shows why that matters if you want to sell what you build.

[^unified]: As of November 20, 2026, Anthropic is moving Pro, Max and Ultra accounts to the single conversation in stages. Two accounts on the same plan can get it at different times. On Team and Enterprise, an organization has it when its setting called Chat and Cowork unified is on. An account that moves cannot switch back. The model picker and the Code tab stay where they were. Claude Cowork and chat are one Claude, Anthropic.
[^cowork-blog]: Anthropic announced the single conversation on September 16, 2026, starting with Pro, Max and Ultra. Claude Cowork and chat are now one Claude, Anthropic.
[^anthropic-unified-enterprise]: Set up and manage the new unified Claude experience for your Enterprise organization, Anthropic. On Enterprise, the Chat and Cowork unified setting is off by default in existing organizations. It turns on by itself on November 16, 2026, unless an owner has already turned it on or off.
[^cowork-cloud]: As of November 20, 2026, Anthropic says that in the new single conversation on Pro, Max and Ultra plans, tasks run in the cloud, and there is no option to run them locally. Reaching files on your computer needs the desktop app open and connected. What to expect with Claude Cowork in the cloud, Anthropic.
[^cowork-safely]: The cloud environment is created for one session and removed when it ends. It cannot reach your home or company network. Local files Claude opens through the desktop app are processed on Anthropic's servers. Use Claude Cowork safely, Anthropic.
[^anthropic-research]: Use research on Claude, Claude Help Center.
[^plans-claude]: Computer use is on Pro, Max and Ultra plans, as of November 20, 2026. On Team and Enterprise, it is rolling out in beta and works once an owner turns it on. Claude Cowork and chat are one Claude, Anthropic.
[^defaults]: Auto is rolling out as the default on Pro, Max, Ultra and Team plans, as of November 20, 2026. Manual is the default on Enterprise, except in the Cowork side panel in Chrome. The Code tab has its own, wider set of permission modes, including Plan, Accept edits and Auto. Claude Cowork and chat are one Claude, Anthropic.
[^cowork-web]: As verified on November 20, 2026, Anthropic says "On October 6, 2026, new Cowork tasks on Pro, Max, and Ultra plans run in the cloud", and "There's no setting to choose where a task runs on Pro, Max, and Ultra plans." Claude reaches only the folders you've connected, through the desktop app, "only while it's open". Use Claude Cowork on web, desktop, and mobile, Anthropic.
[^claude-code-desktop]: Use Claude Code Desktop, Anthropic.
[^artifacts]: As verified on November 20, 2026, Anthropic's artifacts page says the Docs, Slides and Design templates "are available on all plans and are on by default". Its page on the single conversation says you can ask for a design, deck or doc "on paid plans". The two pages differ. This page follows the artifacts page, because it lists each plan. On Enterprise, Docs, Slides and Design turned on by default on October 15, 2026. Motion is in beta on Team and Enterprise. Connecting apps to artifacts and storing artifact data need Pro or above. Artifacts also need a setting turned on, called Create and edit files in the newer Settings layout. Its older name is code execution and file creation. What are artifacts and how do I use them?, Anthropic.
[^claude-data]: Data is on Pro, Max, Ultra, Team and Enterprise. It was previously called Dashboards. On Enterprise, it turns on by default on November 20, 2026. Get started with Claude Data, Anthropic.
[^claude-sheets]: Sheets is in beta on Pro, Max, Ultra, Team and Enterprise. Get started with Claude Sheets, Anthropic.
[^claude-whiteboards]: Whiteboards is in beta on Pro, Max, Ultra, Team and Enterprise. Get started with Claude Whiteboards, Anthropic.
[^anthropic-artifacts]: Anthropic's page calls this button "Edit with Claude". In the app on November 17, 2026, it was labeled **Ask Claude**. What are artifacts and how do I use them?, Anthropic.
[^projects-help]: What are projects?, Anthropic.
[^projects-chat]: As verified on November 21, 2026, Anthropic documents projects at claude.ai/code, in the Code tab of the desktop app and in the Claude mobile app. It says "every new thread starts with the project's instructions, so a rule you state once ... reaches all of them." You write them in Project settings, under Memory, then Project instructions, where Claude also keeps its project memory. The bakery example is this book's, not Anthropic's. Let Claude coordinate ongoing work with Projects, Anthropic.


