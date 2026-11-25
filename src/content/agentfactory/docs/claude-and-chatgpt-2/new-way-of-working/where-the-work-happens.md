# Where the work happens (/claude-and-chatgpt-2/new-way-of-working/where-the-work-happens)

---
type: Document
title: "Where the work happens"
description: "Where Claude or ChatGPT runs a job on the company's computers, what is kept when it ends, and how Claude reaches your own folders."
status: stable
order: 0.12
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Where work happens" ]
last_verified: 2026-11-20
sources:
  - id: sandbox-claude
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: sandbox-openai
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web.md
  - id: cowork-web
    title: "Use Claude Cowork on web, desktop, and mobile (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
  - id: cowork-team
    title: "Use Claude Cowork on Team and Enterprise plans (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13455879
  - id: cowork-safely
    title: "Use Claude Cowork safely (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/13364135-use-cowork-safely
  - id: network-access
    title: "Network access for shell commands (Anthropic, verified 2026-11-20)"
    resource: https://claude.com/docs/cowork/guide/network-access
  - id: one-claude
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: cowork-cloud
    title: "What to expect with Claude Cowork in the cloud (Anthropic, verified 2026-11-20)"
    resource: https://support.claude.com/en/articles/15811196-what-to-expect-with-claude-cowork-in-the-cloud
  - id: two-desks-inspection
    title: "Panaversity's inspection of a Claude conversation linked to a Mac, November 16, 2026"
    resource: "../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

When a job runs on Anthropic's or OpenAI's computers, it does not use your laptop. It uses a separate, isolated computer on the company's servers, set up just for your work. Usually this is a virtual machine: a complete computer simulated in software. Think of it as a borrowed desk in someone else's office: you can work there, but it is not your own.

> **The rule to keep:** anything you want to keep must come back to you as a saved file. Do not expect it to stay on the borrowed computer.

- **Claude** gives each cloud work session (one stretch of work on Anthropic's computers) its own new, temporary computer. Nobody else uses it. When the session ends, that computer is deleted. (In the Code tab, a session left idle is paused first, and its computer is taken back later.) Your conversation and the files Claude saved to your account are kept. Anything else left on that computer is gone. It is a clean desk every time.[^sandbox-claude],[^anthropic-claude-code-cloud],[^cowork-safely]
- **ChatGPT** also runs this work on separate, protected computers. It may reuse the same computer from one task to the next, or replace it but keep the saved work, so it can pick up unfinished work later.[^sandbox-openai]

![Where cloud work happens: temporary workspaces, saved results, controlled access to your files. Left, Claude, a separate workspace for each cloud session: session 1 and session 2 each get a temporary workspace, and the conversation and files saved to your account are kept. Each temporary workspace is removed when its session ends. Right, ChatGPT, a cloud workspace may be reused: task 1 and task 2 go to a workspace that may be reused or replaced, and eligible saved state can support continued work. A new task does not always mean a new workspace. A band says cloud workspaces are isolated computing environments, not dedicated physical computers. Two boxes: files only on your laptop need your computer online, an approved connection and permission, while copies uploaded to the cloud can stay available after you close your laptop. At the foot: save important results to your account or download them, and do not rely on temporary workspace files.](img/where-work-happens.png)

The borrowed computer cannot reach your laptop by itself. Files you attach or upload are copied to the company's servers, so the work can use them after you close your laptop.

## What this means for you

- **Closing your laptop.** Tasks in the cloud keep running. Some steps need your computer: your folders, your browser, apps on your screen and tools installed there. These need the desktop app open. While it is closed, the task cannot reach them.[^cowork-cloud],[^one-claude]
- **Privacy.** Claude reaches only the folders you connect in the desktop app ([Set up the apps](set-up-the-apps.md#optional-give-it-a-folder-and-let-it-use-a-browser) shows how), but a file it opens there is processed on Anthropic's servers, not only on your computer. So connect only the folder a job needs, and only if your company's rules let you share what is in it. Anthropic advises extra care with sensitive files, such as financial documents, passwords and personal records. For a weekly payment run, for example, connect that week's invoice folder, not your whole drive. Keep backups of anything important.[^cowork-safely]
- **Checking what you connected.** Settings lists your connected folders under **Trusted folders**.[^one-claude]

## Where Claude's work runs, and how it reaches your folders

This part is detail to look up: which plan runs a task where, and what Panaversity saw on one Mac. On a first read, you can go on to [The two apps](the-two-apps.md), and come back when you connect a folder.

Which computer runs a task in a Claude conversation depends on your plan. Claude's paid plans for one person are Pro, Max and Ultra, and its plans for companies are Team and Enterprise.

- **Pro, Max and Ultra plans.** Since October 6, 2026, every new task runs in the cloud, on the borrowed desk. There is no setting to change this.[^cowork-web]
- **Team and Enterprise plans.** A task can run in the cloud or on your own computer. On your computer, Claude's code runs in an isolated virtual machine. A setting for the whole organization decides. Cloud is on by default for Team plans and off by default for Enterprise plans.[^cowork-team]
- **Tasks started on your computer before October 6.** On Pro, Max and Ultra, these stay on your computer until they are done. Each one shows a banner saying it runs only on this computer.[^cowork-web]

Your folders always stay on your computer. A cloud task reaches the ones you connected, also when it is a scheduled task. When it needs a file in the cloud, Claude fetches a copy of just that file.[^cowork-web] Anthropic does not say how the task's edits reach your folder.

### What Panaversity saw on a Mac

On November 16, 2026, Panaversity watched Claude work on one Mac with one connected folder. Claude used two desks: the borrowed desk in the cloud, and a small virtual machine that the desktop app ran on the Mac. Read this as what was seen that day, not as a promise: Anthropic's pages now describe a desk on your own computer only for the cases in the list above, so your app may have only the cloud desk.[^two-desks-inspection]

![A diagram titled "Two workspaces: one in the cloud, one on your computer". At the top, a gold box says you ask in one conversation. Two arrows lead down to two panels, with a note: Claude chooses the desk for each job, and you can also tell it which one to use. A second note, above the right panel, dates the desk on your computer: since October 6, 2026, Anthropic describes it only for Team and Enterprise local sessions, and for tasks started before then. New Pro, Max and Ultra tasks run in the cloud. Left, the cloud desk, a fresh Linux computer on the company's servers: it researches, builds Word, Excel and PDF files, runs code and looks at images and PDF pages. It keeps working if you close your laptop. It reaches only allowed websites, never your home or office network. It is removed when the session ends. Right, the desk on your computer, a Linux VM the desktop app runs on your Mac or PC: it sees only the folders you connect, and changes land in your real folder. It works only while the desktop app is open and the computer is awake. It asks before it deletes any file. It renames, sorts, searches and edits in place. Between the panels, an arrow labeled Stage carries a copy up from your computer to the cloud desk, and an arrow labeled Commit brings the result back. At the foot: the two desks share no disk, so keep what matters in a connected folder, a file Claude hands you, or an artifact.](img/two-workspaces.png)

*The two desks Panaversity saw on one Mac on November 16, 2026.*

### How a file crossed between the two desks

A file crossed between the two desks only on purpose: Claude copied it up, worked on it, and wrote the result back. If the file had changed in the meantime, the write was refused, so a person's own edit was not overwritten.[^two-desks-inspection]

Whatever your plan, naming the folder and the job in your request removes the guesswork. For example: *"In my connected Invoices folder, rename every PDF to the client's name and the date."*

### Two safety rules for your folders

- **Deleting needs your yes.** Claude asks before it permanently deletes a file, except when it uses your screen through computer use.[^cowork-safely],[^one-claude]
- **A limited internet, for tasks on your computer.** When a task runs on your computer, your settings decide which websites its commands can reach. Unless you allow all websites, it can download from the usual sites that store software and code, such as GitHub, but it cannot upload to them. You upload from your own computer.[^network-access]

[^sandbox-claude]: As verified on November 5, 2026, Anthropic says each cloud session gets its own sandbox, "created when the session starts and destroyed when it ends", that sandboxes do not share anything, and that a Code tab cloud session left idle has its computer taken back and gets a fresh one when reopened. Anthropic does not say whether each new task inside the same conversation starts a new session. As verified on November 16, 2026, the same page says that on your computer "code execution runs in an isolated virtual machine (VM)", kept apart by Apple Virtualization on macOS or Hyper-V on Windows, that "local file access is limited to folders the member has connected on the desktop", and that "if the desktop app is offline, a session in the cloud can't reach the device". By November 20, 2026, this address redirected to a page that needs a sign-in, so these readings could not be checked again. Claude Cowork architecture overview, Anthropic.
[^anthropic-claude-code-cloud]: Use Claude Code in the cloud, Anthropic.
[^cowork-web]: As verified on November 20, 2026, Anthropic says "On October 6, 2026, new Cowork tasks on Pro, Max, and Ultra plans run in the cloud", and "There's no setting to choose where a task runs on Pro, Max, and Ultra plans." Tasks already started on your computer "stay there, and you can keep working on them until they're done", and "Each one shows a banner saying it runs only on this computer." It says "Your folders stay on your computer", that "Claude reaches only the folders you've connected", through the desktop app and only while it is open, and that a cloud session "can read and write files in folders you've connected on your computer" if it was started on the desktop or is a scheduled task. It says "Claude fetches a copy of just that file" when a task needs one in the cloud. The page does not mention a virtual machine on your computer, and it does not say how a task's edits reach your folder. Use Claude Cowork on web, desktop, and mobile, Anthropic.
[^cowork-team]: As verified on November 20, 2026, Anthropic says sessions on Team and Enterprise plans "can run in two places". On your computer, "Claude's work runs on the user's computer, with code in an isolated virtual machine." In the cloud, it runs on Anthropic's infrastructure. An organization-wide setting, "Run Cowork in the cloud", is on by default for Team plans and off by default for Enterprise plans. Use Claude Cowork on Team and Enterprise plans, Anthropic.
[^cowork-safely]: As verified on November 16, 2026, Anthropic says Claude "reaches your files, browser, and apps through the Claude Desktop app", and that Cowork "requires your explicit permission before permanently deleting any files". As verified on November 17, 2026, the same page says a cloud session's work, "including any local files it opens through the desktop app, is processed on Anthropic's servers", and advises you to avoid granting access to sensitive files and to keep backups. As verified on November 20, 2026, it says "Each session gets its own environment, which is removed when the session ends." Use Claude Cowork safely, Anthropic.
[^one-claude]: As verified on November 17, 2026, Anthropic says Claude reaches your local files, the built-in browser and computer use "only while Claude Desktop is open", and that connected folders are listed under Trusted folders in Settings. As verified on November 20, 2026, it says "More involved tasks keep running in the cloud even if you close your laptop", and "Tasks that use files or apps on your computer need Claude Desktop open." As verified on November 23, 2026, it says "By default, Claude asks before permanently deleting files, but that protection doesn't cover computer use." Claude Cowork and chat are one Claude, Anthropic.
[^cowork-cloud]: As verified on November 17, 2026, Anthropic says local MCP servers need the desktop app running, even for cloud sessions. As verified on November 20, 2026, it says that with the desktop app closed, "sessions in the cloud keep running but can't reach your computer". What to expect with Claude Cowork in the cloud, Anthropic.
[^network-access]: As verified on November 16, 2026, Anthropic says that on `github.com`, `git clone`, `git fetch` and `git pull` work while `git push` is blocked, unless the domain allowlist is set to all domains. As verified on November 20, 2026, the page covers tasks on your computer only: "When a Cowork task runs on your computer, Claude runs its shell commands in a virtual machine (VM)." Network access for shell commands, Anthropic.
[^two-desks-inspection]: Observed on November 16, 2026, in a Claude conversation linked to a Mac with one connected folder. The method and the limits seen are in the [appendix](../../appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations.md), which does not name the plan. Anthropic does not publish these details, and they can change.
[^sandbox-openai]: As verified on November 5, 2026, OpenAI says Work's cloud tasks run in "VM-backed sandboxes" and that Work "can reuse an environment across tasks or replace it while preserving eligible state", which "doesn't mean every task receives a new container". ChatGPT Work cloud security, OpenAI.


