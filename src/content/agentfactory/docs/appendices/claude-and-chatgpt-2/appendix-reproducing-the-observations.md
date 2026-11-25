# Appendix: reproducing the observations (/appendices/claude-and-chatgpt-2/appendix-reproducing-the-observations)

---
type: Document
title: "Appendix: reproducing the observations"
description: "The five commands behind the observations, the evidence and results in full, a reset test you can run, and the sources for the whole section."
status: stable
order: 904.3
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
last_verified: 2026-11-09
sources:
  - id: code-tab
    title: "Claude Desktop: Code tab docs (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "appendix-reproducing-the-observations.md"
  - id: chatgpt-inspection
    title: "ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity"
    resource: "Reported to Panaversity by ChatGPT, November 9, 2026"
  - id: agents-api
    title: "Agents API architecture (OpenAI, verified 2026-11-09)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/architecture
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, verified 2026-11-09)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: neon-better-auth
    title: "Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2, 2026, verified 2026-11-09)"
    resource: https://neon.com/blog/managed-better-auth-oauth-provider-mcp
  - id: better-auth-mcp
    title: "Better Auth MCP plugin (Better Auth, verified 2026-11-09)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: codex-harness
    title: "Unlocking the Codex harness: how we built the App Server (OpenAI, February 2026, verified 2026-11-09)"
    resource: https://openai.com/index/unlocking-the-codex-harness/
  - id: chatgpt-agent
    title: "Introducing ChatGPT agent (OpenAI, July 2025, verified 2026-11-09)"
    resource: https://openai.com/index/introducing-chatgpt-agent/
  - id: whats-new
    title: "ChatGPT: What's new (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/whats-new
  - id: openai-sandboxing
    title: "ChatGPT sandbox docs (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: new-stack
    title: "OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026, verified 2026-11-09)"
    resource: https://thenewstack.io/openai-codex-work-atlas/
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic blog, September 17, 2026, verified 2026-11-09)"
    resource: https://claude.com/blog/projects-redesigned
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
  - id: cross-session
    title: "Message your other Claude Code sessions (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: claude-tag-security
    title: "Security and data handling, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web
  - id: security-guide
    title: "Unified Claude Security Best Practices, version 1.3.6 (Anthropic Trust Center, dated November 7, 2026, verified 2026-11-20)"
    resource: "https://trust.anthropic.com/resources?s=3puokpm2aa1nn24nbcp0l&name=unified-claude-security-best-practices"
  - id: desktop-inspection
    title: "Panaversity's inspection of a Claude conversation linked to a Mac with one connected folder, November 16, 2026"
    resource: "appendix-reproducing-the-observations.md"
generated:
  at: 2026-11-20T22:29:24Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

### The commands

Run these commands in the Bash tool of a cloud Claude session. Print only the variables listed. Never print values whose names contain TOKEN, KEY or SECRET, because those are credentials. The run date for this section was November 9, 2026, at 02:45 UTC. Version strings and variable names are a snapshot from that date, and they will change.

```
# 1. Init process and VM uptime
ps -o pid,etime,args -p 1
# 2. Process ancestry of the shell
p=$$; while [ "$p" -gt 1 ]; do ps -o pid=,ppid=,args= -p $p | cut -c1-160; p=$(ps -o ppid= -p $p | tr -d ' '); done
# 3. Claude Code binary and version
which claude; readlink -f "$(which claude)"; claude --version
# 4. Selected environment variables
env | grep -E '^(CLAUDE_CODE_(REMOTE|ENTRYPOINT|SESSION_ORIGIN|VERSION|EXECPATH)|ANTHROPIC_BASE_URL)='
# 5. Working transcript location
ls ~/.claude/projects
```

Here is what each command does, in plain words:

1. Shows the first program the computer started (PID 1) and how long it has been running (its uptime).
2. Follows the chain of programs that started the shell, one parent at a time (its process ancestry).
3. Finds the `claude` program, follows any link to the real file, and prints its version.
4. Prints only the selected environment variables.
5. Lists the folder where Claude Code keeps its working transcripts.

### What each step showed

| Step | Signal seen on November 9 | What it supports | Limit |
| --- | --- | --- | --- |
| 1 | `/process_api --firecracker-init`. Uptime about 19 minutes | A Firecracker microVM. Inferred: started that morning | One VM at one time. Uptime may not count time spent paused |
| 2 | The shell is a child of `/opt/claude-code/bin/claude`, launched by `environment-manager task-run --session-mode resume` | The harness is Claude Code, started for each session | It does not show what other surfaces use |
| 3 | The `claude` command on the PATH reports 2.1.319 | A Claude Code install is present | It is the same file as the running program, `/opt/claude-code/bin/claude` (checked with `readlink -f`) |
| 4 | `REMOTE=true`, `ENTRYPOINT=remote_cowork`, `SESSION_ORIGIN=claude_ai_chat`, `VERSION=2.1.42`, API base `api.anthropic.com` | A remote session started from chat. Model requests go to the configured endpoint | Variable names may change between releases |
| 5 | A `-home-claude` project folder | The transcript is kept in the VM | It is not the durable record |

### The November 9 evidence, row by row

These details back [How a request flows](../../claude-and-chatgpt-2/architecture/how-a-request-flows.md).

A few terms help with the table. A **process** is a running program. Each process has a number, its **PID** (process ID). PID 1 is the first program a computer starts. A **child process** is a program that another program started. An **environment variable** is a named setting that programs can read, such as `CLAUDE_CODE_REMOTE=true`.

Two more terms help with the PID 1 row. A **microVM** is a very small, light VM. **KVM** is a part of Linux that lets one real computer run many VMs and keep each one apart from the others.

Each row below gives one piece of evidence on the left, as we saw it. The right side says in plain words what it shows. **[Inferred]** Together, the rows show that Claude Code was running inside a small cloud computer for this one session.[^author-inspection] Notes after the table explain four of the rows.

| Evidence | What it shows |
| --- | --- |
| `/opt/claude-code/bin/claude` is a running process (PID 92) | The Claude Code program itself runs in the VM |
| Shell commands run as its child processes | That Claude Code process starts every Bash tool call |
| It was launched by `environment-manager task-run --session cse_… --session-mode resume` | A session manager starts it for each chat session and resumes it |
| `CLAUDE_CODE_REMOTE=true`, `CLAUDE_CODE_ENTRYPOINT=remote_cowork`, `CLAUDE_CODE_SESSION_ORIGIN=claude_ai_chat` | This is a remote Claude Code session, started from a claude.ai chat |
| `ANTHROPIC_BASE_URL=https://api.anthropic.com` | The environment is configured to send Anthropic API requests to this endpoint. This does not prove where the model physically runs |
| PID 1 is `/process_api --firecracker-init …` | The VM is a Firecracker microVM. Firecracker is the VM technology behind AWS Lambda, an Amazon cloud service. Anthropic now documents this too[^security-guide] |
| PID 1 had been up for about 19 minutes, which puts its start at about 02:26 UTC | Inferred: a new VM since the day before. A VM started again from a saved copy may not count stopped time. So this is not proof. See [The sandbox and its state](../../claude-and-chatgpt-2/architecture/the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced) |

- The launch command. A program called the environment manager started Claude Code for this chat session. The words `--session-mode resume` told it to continue the session where it had stopped.
- The three settings. In plain words, they say three things. The session is remote, so it runs in the cloud, not on your computer. It was started as Cowork. And it came from a chat on claude.ai.
- The web address. This setting says where requests are sent. It does not show which computers answer them, so it does not prove where the model runs.
- The uptime. PID 1 starts when the VM starts, so its running time is roughly the VM's age. The same chat had also been used the day before.[^author-inspection] So a short uptime suggests a new VM since then. But Anthropic can save a copy of an idle VM and start it again later.[^security-guide] A VM started again this way may not count the time it was stopped. So the uptime is not proof. UTC is world standard time, the time zone that clocks around the world are set from.

Anthropic's own words for the Firecracker row are these. Each cloud session "runs in its own Firecracker microVM (KVM) with its own guest kernel".[^security-guide] A guest kernel is the VM's own core operating system, separate from the real computer's.

**[Observed]** This Claude Code is set up in a special way for these sessions. The **CLI** (command-line interface) is the version of Claude Code you type into in a terminal. This one is not the plain CLI. Environment variables set its feature flags, the switches that turn features on or off. **Auto-compaction** means the harness shortens the context by itself when the context is full to a set level. The settings turn on artifacts, memory, background tasks and auto-compaction at 80%. So the harness shortens the context when it is 80% full.

**[Observed]** The program also gave two different version numbers, and we do not know why. The running program reports version 2.1.319, and the `claude` command is a link to that program. But the variable `CLAUDE_CODE_VERSION=2.1.42` does not match. **[Inferred]** So one setting alone does not tell you which version runs.

### The two VMs, side by side

On November 16, 2026, Panaversity ran a second inspection, in a Claude conversation linked to a Mac with one connected folder. The cloud workspace uses the `Bash` tool. The desktop workspace uses the `device_bash` tool, which works only once a folder is connected. Ask Claude to run the same commands with each tool and show you the output.

```
# Identity, operating system and kernel
whoami; uname -a; cat /etc/os-release | head -3
# CPU, memory and disk
nproc; free -h; df -h $HOME
# Connected folders (desktop workspace only)
ls $HOME/mnt/
# The first running processes
ps aux | head -12
# Common tools
which python3 node git ffmpeg pandoc soffice
```

| Signal | Cloud workspace | Desktop workspace |
| --- | --- | --- |
| User and host | `root` on host `vm` | A per-session user, `rcw-` and the session id, on host `claude` |
| Operating system | Ubuntu 24.04, x86_64, kernel 6.18 built for Firecracker | Ubuntu 22.04.5, arm64 (aarch64), kernel 6.8 |
| CPU, memory, free disk | 2, 7.8 GiB, about 31 GB | 4, 3.8 GiB, about 8 GB |
| First process | `/process_api --firecracker-init` (seen on November 9) | `bwrap --new-session --unshare-net`, with `socat` relays to a local proxy |
| Tools found | Python, Node, Git, FFmpeg, LibreOffice and Pandoc, among others | Python 3.10, Node, Git, FFmpeg, Pandoc and LibreOffice |
| Network test | `pypi.org` answered with HTTP 200 | `pypi.org` answered with HTTP 200. A news site did not answer, under the **Package managers only** setting |

Three more signals came from the desktop workspace's own tools on the same day. Staging allowed at most 50 files, 400 MB per file and 500 MB per call. A commit was refused when the file on the computer had changed since it was staged. Deleting in the connected folder failed with "Operation not permitted" until deletion was approved for that folder, which also blocked git until then.

| Signal | What it supports | Limit |
| --- | --- | --- |
| Different OS, architecture and size | Two separate machines with no shared disk | One account, one Mac, one day |
| `bwrap` with `--unshare-net` as the first process | Each session's commands run in their own sandbox inside the local VM, with network only through a proxy | The VM's own design is described in Anthropic's security guide, version 1.3.6 |
| Staging and commit limits | Files cross between the two only through named steps | Tool limits are not published and can change |

### How the two VMs differ for your work

These details back [The sandbox and its state](../../claude-and-chatgpt-2/architecture/the-sandbox-and-its-state.md).

**[Observed]** In the session examined, the two machines looked like this. The record of the inspection does not name the plan.[^desktop-inspection]

| Aspect | Cloud workspace | Desktop workspace |
| --- | --- | --- |
| Where it runs | Anthropic's servers, a Firecracker microVM | A Linux VM the desktop app runs on your computer (a Mac with Apple Silicon in the test) |
| The tool Claude uses | `Bash` | `device_bash` |
| What we saw | Ubuntu 24.04, x86_64, 2 vCPU, 7.8 GiB RAM, about 31 GB free, user `root` | Ubuntu 22.04, arm64, 4 vCPU, 3.8 GiB RAM, about 8 GB free. A separate user for each session. Each command runs inside `bwrap` |
| Your files | Only what you attach, or what Claude stages in | Only connected folders, mounted at `~/mnt/<folder>` |
| Needs | Nothing. It starts with the session | The desktop app open and online, and at least one connected folder |
| Each command | Runs in a persistent shell for the session | A fresh `bash -c`: no working directory or variables carry over, only files. 120 seconds by default, 180 at most |
| Lifetime | Removed when the session ends. Files handed back to you are kept | Scratch space outside `~/mnt/` is removed with the session. Changes in connected folders are already in your real folder |

Some names in the table need a word. Ubuntu is a kind of Linux. x86_64 and arm64 are two kinds of processor chip. A vCPU is a virtual processor, and a GiB is about 1.07 GB. `root` is the user with full rights. `bwrap` is a tool that walls a program off from the rest of the system. `bash -c` runs one command in a new shell. So the folder you were in and any variables you set are gone by the next command.

**[Observed]** The two VMs share no disk. Files cross only in the Stage and Commit steps that [Where the work happens](../../claude-and-chatgpt-2/new-way-of-working/where-the-work-happens.md) describes. Here are the technical details seen.[^desktop-inspection]

- **Stage (desktop to cloud)** copies a file into the cloud workspace, under `/mnt/user-data/uploads/<folder>/`. The limits seen were 50 files, 400 MB per file and 500 MB per call.
- **Commit (cloud to desktop)** writes a result from `/mnt/user-data/outputs/` back into the connected folder.

### Background programs in the cloud workspace

`nohup` and `&` are two shell ways to keep a program running after its command returns.

| Aspect | How it works | Basis |
| --- | --- | --- |
| Background work | A program left running in the background (started with `nohup` or `&`) usually stops a few minutes after a reply ends. The harness's own background jobs run until their time limit | Tool-documented (the session's environment notes) |

### The Python demo's output

**[Observed]** On November 8, 2026, a script named `hello_vm.py` was created, saved and run inside the session workspace.[^author-inspection] It printed:

```
Hello from the session VM!
Python: 3.13.18
OS: Linux-6.18.44-fc-v310-x86_64-with-glibc2.39
Working dir: /home/claude
Time (UTC): 2026-11-08 04:34
Squares 1-10: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] sum = 385
```

### Which idle rule the examined chat followed

**[Observed]** The session examined was a chat started on claude.ai. Its harness reported `ENTRYPOINT=remote_cowork`, a value that names Cowork.[^author-inspection] **[Inferred]** So the chat most likely ran on Cowork in the cloud, and the second rule, the Cowork rule, applied to it. If so, after any break longer than about five minutes, it got a fresh VM. The harness in that VM was Claude Code. Even so, the product was most likely not a Claude Code cloud session, so the first rule did not apply.

**[Observed]** Two observations fit the Cowork rule. The first is about **PID 1**, the first program a computer starts. Its running time shows how long the machine has been up. On November 9, after a long idle gap, PID 1 had been running for only about 19 minutes. The second is the demo. There, the file came back from the conversation, not from the old VM.

These observations support the Cowork rule, but they do not prove it alone. A paused VM's clock may stop while it is paused. Then a restored VM could also show a short running time. So 19 minutes alone does not prove a fresh VM. **[Unknown]** This page cannot prove which rule this chat followed. "Most likely" rests on the `remote_cowork` value and the two observations. One more question is still open. The Cowork rule says the files are restored, but the demo's file came back only as a read-only copy. Anthropic does not explain why. It also does not say how long a paused Claude Code VM is kept before it is reclaimed.

### ChatGPT's reported environment, in detail

These details back [ChatGPT and Codex](../../claude-and-chatgpt-2/architecture/chatgpt-and-codex.md). On November 9, 2026, at our request, ChatGPT ran commands in its own tools and reported the results. Nobody independently checked the raw output.[^chatgpt-inspection]

- **[Reported by ChatGPT]** These details are clues to what kind of machine ChatGPT's tools ran on, and whether it was a VM or a container. The environment ran Linux on x86_64, the common chip type of PCs and servers, with Python 3.13.5. Its **kernel**, the core of the operating system, was version 6.18.57. **PID 1** is the first program to start in a system. Here it was `supervisord`, a program that starts and watches other programs. The root file system, the top folder that holds all other files, was an overlay. An overlay is a file system made of stacked layers. Its paths referred to Kata Containers, a container technology.

| Question | Claude (session examined) | ChatGPT (inspection reported) |
| --- | --- | --- |
| Harness process visible? | Yes: Claude Code | No |
| Evidence of a VM or container | A Firecracker microVM. PID 1 is `/process_api --firecracker-init` | An overlay file system with paths that name Kata Containers. PID 1 is `supervisord` |
| Files survive a replaced VM? | Yes, as copies. The files came back from copies kept with the conversation (observed) | Not tested |

### Where results land

On November 17, 2026, we looked at how one Claude desktop session, on a paid plan with one connected folder, decides where a result goes. The instructions Claude was following in that session set this order: a folder you name, then a file format you name, then the folder whose files the job works on (the result saved next to them, as a new file), then an artifact of the matching kind for anything to keep, and a normal reply for a one-time question. Connecting a folder did not change this on its own. The same instructions named the usual formats when none is asked for: .docx for a document, .pptx for a presentation, .xlsx for a spreadsheet and PDF for a design. We also saw Claude edit .md and .csv files in the connected folder from the desk on your computer, without staging them to the cloud desk.

| Signal | What it supports | Limit |
| --- | --- | --- |
| The order in Claude's instructions | The order in [Where your work is saved](../../claude-and-chatgpt-2/build-something/where-your-work-is-saved.md) | One session, one day. A summary of instructions, not a test of every case. Anthropic does not document it |
| Usual formats in Claude's instructions | Claude's usual choices, not fixed rules | Not tested one by one. Name the format to be sure |
| Editing .md and .csv in place | Plain-text files need no trip to the cloud desk | Seen, not documented |

### A reset experiment

Run step 1 at the start of two turns, with an idle gap between them, and write down both times. In the first turn, also write a small marker file to the VM's own disk, for example `date > /tmp/marker.txt`.

- If the marker is still there in the second turn, the same VM was restored. [The sandbox and its state](../../claude-and-chatgpt-2/architecture/the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced) quotes the documented pause and restore.
- If the marker is gone, the VM was reclaimed and a fresh one started.
- Do not rely on uptime alone. A restored VM may not count the time it spent paused, so a short uptime does not prove a new machine.

On November 8 and 9, the uptime was short and the demo file came back only as a copy from the conversation. The marker test was not run then. How long a paused VM is kept is still unknown.

### Caveats

Claims in this section carry the labels Observed, Reported by ChatGPT, Tool-documented, Vendor-documented, Inferred or Unknown. The [overview](../../claude-and-chatgpt-2/architecture/overview.md) explains each one.

The observations come from one cloud Claude chat session on November 8 and 9, 2026, from one conversation linked to a Mac on November 16, 2026, and from one Claude desktop session on November 17, 2026. They may not hold for every plan, account or surface. Beyond Anthropic's published overview, the internal architecture cannot be seen from inside a session. Vendor behavior, feature flags and availability may change.

### Sources

The full details of each source are in this page's source list.

- Claude Desktop, Code tab docs (Anthropic): the environments Local, Cloud, SSH and WSL.
- Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026. The method is on this page.
- Panaversity's inspection of both VMs in a Claude conversation linked to a Mac, November 16, 2026. The method is on this page.
- Panaversity's observation of where results land, in a Claude desktop session, November 17, 2026. What was seen is on this page.
- ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity.
- Agents API architecture (OpenAI API docs): the hosted harness, the environment and the application server as separate parts.
- ChatGPT Work cloud security (ChatGPT docs): Work Cloud's own execution environment.
- Claude Managed Agents overview (Claude Platform docs): the hosted harness and sandbox, sessions, events and beta status.
- Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2026).
- Better Auth MCP plugin (Better Auth docs).
- Schedule recurring tasks in Claude Code Desktop (Claude Code docs): local, cloud and `/loop` tasks, missed runs, permissions and `requiresUserInteraction`.
- Let Claude coordinate ongoing work with Projects (Claude Code docs): the coordinator, threads, standing context, sandbox resume, local threads, limits and beta status.
- Projects redesigned: from folder to conversation (Anthropic blog, September 17, 2026).
- Use Claude Code in the cloud (Claude Code docs): idle sessions, reclaimed VMs and what is restored.
- Configure cloud environments (Claude Code docs): idle VMs pausing and being restored, network access levels, setup scripts and the environment cache, environment variables, network secrets, the GitHub proxy and shared environments.
- Self-hosted environments (Claude Code docs): environments, runners and sessions, leases, what stays on your machines, model routing, availability and limits.
- Verify session identity in self-hosted environments (Claude Code docs): the session token, its claims, what it proves and how to check it.
- Message your other Claude Code sessions (Claude Code docs): how messages travel, what a message can and cannot do, inbound controls and limits.
- How agent identity works, and Security and data handling (Claude Tag docs): service accounts, the credential store, access scope, sandboxes for each thread and availability.
- Automate work with scheduled tasks (Claude Code docs): cloud runs as full Claude Code cloud sessions, fresh copies of repositories, auto mode and limits.
- Unified Claude Security Best Practices, version 1.3.6 (Anthropic): the sandbox for each session, the local VM, the egress proxy and credentials.
- Unlocking the Codex harness: how we built the App Server (OpenAI, February 2026).
- Introducing ChatGPT agent (OpenAI, July 2025).
- ChatGPT: What's new (OpenAI).
- ChatGPT sandbox docs (OpenAI).
- OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026).
- Work with Claude Tag, overview (Claude Tag docs): Claude in team Slack channels, plans and availability.
- Run agents in parallel (Claude Code docs): subagents, agent view, agent teams, dynamic workflows and projects compared.
- Linux Foundation launches the Agent2Agent protocol project (Linux Foundation, June 23, 2025).
- [Tour of the Apps](../../claude-and-chatgpt-2/tour/overview.md): the product features this section builds on.
[^author-inspection]: Panaversity's inspection of one cloud Claude session: a test run on November 8, 2026, and a look at its programs and settings on November 9, 2026. The method is in the appendix.
[^security-guide]: As verified on November 20, 2026. Unified Claude Security Best Practices, version 1.3.6, November 7, 2026, Anthropic. The guide is written for Claude Enterprise administrators. Its idle rule is in the part that covers cloud sessions for both Cowork in the cloud and the combined chat and Cowork experience.
[^desktop-inspection]: Panaversity's inspection of a Claude conversation linked to a Mac with one connected folder, November 16, 2026. The commands are in the appendix. Anthropic does not publish machine sizes, folder paths, tool names or staging limits, and they can change without notice.
[^chatgpt-inspection]: ChatGPT's inspection of its own Python and terminal environment, as reported to Panaversity. The raw output was not independently reviewed.


