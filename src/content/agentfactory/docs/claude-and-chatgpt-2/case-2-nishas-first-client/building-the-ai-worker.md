# Building the AI Worker (/claude-and-chatgpt-2/case-2-nishas-first-client/building-the-ai-worker)

---
type: Document
title: "Building the AI Worker"
description: "Nisha turns her brief into a project whose coordinator starts three area threads and a reviewer thread, adds a nightly scheduled run, and decides what the worker can and cannot reach."
status: stable
order: 0.62
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00D"
part: Front
expert_status: required
concepts: [ "Build the AI Worker" ]
last_verified: 2026-11-20
sources:
  - id: projects
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-where
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: standing
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: connectors
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: delete
    title: "Let Claude coordinate ongoing work with Projects (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: routines
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/routines
  - id: task-connectors
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/routines
  - id: environment
    title: "Configure cloud environments (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: blocked-host
    title: "Error reference, Host not allowed in a cloud session (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/errors#host-not-allowed-in-a-cloud-session
  - id: continue
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/routines
  - id: routines-identity
    title: "Automate work with scheduled tasks (Claude Code Docs, verified 2026-11-20)"
    resource: https://code.claude.com/docs/en/routines
  - id: run-sheet
    title: "Nisha's First Client: practical run sheet and record"
    resource: "../../appendices/instructors/case-2/appendix-practical-run-sheet.md"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

## Tuesday evening

On Tuesday evening, Nisha came home at seven. She gave herself two hours to build her AI Worker.

In Case 1, she had done all the work in her project's one conversation, with no threads. This time her project had a coordinator that starts threads, as in [the tour](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work). Each thread works at its own borrowed desk in Anthropic's cloud, which can be cleared.[^projects]

To create the project, she went to claude.ai/code. In the sidebar she selected **Projects > New project**. The same projects are also in the Code tab of the Claude desktop app.[^projects-where]

## The setup, in five steps

1. **The brief became the project instructions.** She pasted her whole four-part brief there, because project instructions reach every new thread exactly as written. She opened them from the menu in the project's header: **⋯ > Settings > Memory > Project instructions**.[^standing]
2. **The files went where they would last.** She opened the project's **Library**, a tab in the Overview pane beside the project conversation. Then she uploaded Sutlej's trial balance (the list of every account in its books, with its balance), its three notes and Mark's engagement letter (their agreement on the job, the fee and the deadline) with **Library > Add**. The Library sits outside every desk, so the files would still be there after a desk was cleared. Only deleting the whole project would remove them, together with its threads and its memory.[^delete]

   > **A Library is not a business record.** It is the right place for drafts and for learning. A business AI Worker keeps its progress, its approvals and its accepted results in governed business records, where each item has an owner and a history of every change ([From personal worker to business worker](../architecture/from-personal-worker-to-business-worker.md)).

3. **A first draft, one thread for each area.** Each of the three areas was one part of Mark's [bridge](a-paid-job.md#what-a-bridge-is). She did not start the threads herself. She told the coordinator, *"Start one thread for each area: inventory, development costs and leases. Each prepares its part of the bridge."* Claude started three threads, and each one appeared as a card under her message.[^projects] Within a few minutes, each thread had saved its part to the Library.
4. **A reviewer thread.** In the same message, she asked for a fourth thread with one job. It would read the three parts and grade them out of 10, as Claude had graded its own work in Case 1, and change nothing. It started when the three parts were saved. So by that evening Nisha would have three parts and a grade.
5. **A nightly run.** She wanted each morning to start with one dated bridge that held everything from the day before, without depending on her memory. So at 1 a.m. the worker would build one bridge from the files in the Library, save it with the date and list what had changed.

   She did not need another screen for this. She asked the coordinator, as before. When you ask a project for scheduled work, Claude creates a **scheduled task** ([Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md)), which here does its work in one thread of its own, not in the four threads above.[^projects] Claude first asked her one question: which time zone 1 a.m. was in. Then the task appeared in the project's list of scheduled tasks. To find that list, open the menu in the project's header: **⋯ > Scheduled tasks**.

![Nisha's AI Worker for the client job. Gold boxes are Nisha's work, and white boxes are AI work. At the top are her brief in gold, the coordinator and the nightly scheduled task. Below them are the four threads in white, with the Library beside them. Project memory sits in Project settings. At the bottom are Nisha's morning check in gold and the second signature, with a red border. The second signature is her own final yes before anything goes to the client, and that decision is hers alone. Dashed lines show email and file sharing, which are not connected.](img/nishas-ai-worker-for-the-client-job.png)

*The same picture is Exhibit 2.*

## A brief for a stranger

Writing the nightly instruction took longer than she expected. On this page, the task is the saved nightly job, and a run is one time the task does its work. Outside a project, every run starts a new conversation that remembers nothing, as [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md) showed. Inside a project, a run can go on in the task's own thread instead.[^continue] But that thread is not her Tuesday evening conversation with the coordinator. So the run would not know what she and the coordinator had said. And at 1 a.m., no one would be awake to answer its questions.[^routines] So her instruction had to stand alone. She wrote it for a stranger who would arrive at 1 a.m. with no one to ask.

She wrote: *"Using the project instructions and only the files in the Library, update the bridge. Save it to the Library as bridge with tonight's date. At the top, list what changed since the last version, and every assumption you made. Do not send, share or publish anything."*

Claude did not save her words alone. It wrote a longer instruction for the task that kept her words. It added which files to read, what to name the new file, and which earlier version to compare it with. Nisha opened the task and read every line. That text was what would run at 1 a.m., not her memory of the evening.

## What the worker could reach

Then Nisha did something she had not done in Case 1. She made a list of what her worker could reach, and what it could not.

The threads could read the files in the Library and save new files there. They could also look up rules on the web, but only on sites their network setting allowed. She checked two more things: email, and the internet.

### Could it send an email?

No.

She checked her **connectors**, the apps such as Gmail that you link to your Claude account. Every cloud thread can use all of them, and the coordinator has none, as [the tour](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work) says.[^connectors] So there was no setting to keep Gmail out of this one project. She could only remove it from her whole account.

A scheduled task she created herself would get all of her connectors, unless she removed them.[^task-connectors] But the task's list covers only the task's own runs. So emptying it would not stop the other threads.

She had a reason to worry about Gmail. Anything a scheduled task does through her connectors appears as her.[^routines-identity] An email sent at 1 a.m. by her AI Worker would look, to Mark, exactly like an email from Nisha.

So she disconnected Gmail from her account, and **no** app that could send an email or share a file was connected. When she opened the scheduled task to remove its connectors, the list under **Advanced settings** was already empty: "This task will not use any connectors." Claude had made the task without any.

### Which websites could it read?

Only a fixed list of sites, and probably not the ones her rules came from. One setting decides this. A **cloud environment** is the setup that each borrowed desk starts with. It decides which websites the desk can reach[^environment], and which tools are installed on it.[^projects] Nisha's threads ran in the environment called **Default**.

In Default, network access is **Limited**: a desk's own network can reach only a fixed list of websites, the **allowlist**, which holds common sites that programmers download tools from. Most other websites were closed to her worker.[^environment] Older screens called this setting **Trusted**. The network access setting does not limit connectors. Connectors reach their apps through Anthropic's servers, not through the desk's own network.[^environment]

Her three accounting rules came from KPMG's and Deloitte's websites, as [A paid job](a-paid-job.md) shows. Those sites are probably not on the allowlist. So a thread that tried to read them would likely be blocked with a "host not allowed" error.[^blocked-host] Nisha did not count on the web. She added a short summary of the three rules, with their sources, to the project instructions. She told the threads to work from that summary and from the Library files.

### A rule, a lock and a test

Her own rule was simple: *"Only I send things to the client."* She wrote it into the project instructions. But she had seen in Case 1 that "repeat until every area reaches 9.5" did not make Claude reach 9.5. A rule in a chat is only words. The lock was the missing apps.

Her list was still not complete. A test later found two openings it had missed: Artifacts and Claude Docs can publish private pages, and folder access was switched on in the project's environment ([Exhibit 6](exhibits.md#exhibit-6-the-permission-map)). Her cloud threads did not run on her computer, but with that switch on, a thread asked to [work locally](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work) could reach a folder there.

At nine, she closed her laptop. The first run would start at one.

Next, if you are doing the [lab](lab-run-nishas-first-client-job.md), do it now. Then read [Two nights of work](three-nights-of-work.md).

[^projects]: As verified on November 20, 2026, Anthropic says projects "are in public beta on Pro, Max, and Ultra plans and rolling out gradually". It says each thread is usually a cloud session, and each one clones its files "into its own cloud sandbox". Each thread starts with "A cloud environment that sets its network access, environment variables, network secrets, and installed tools". A sandbox "pauses between turns", and if it can't be resumed, "uncommitted changes can be lost". When you ask for scheduled work in a project, Claude creates a cloud scheduled task "that runs as threads in that project". Let Claude coordinate ongoing work with Projects, Anthropic.
[^projects-where]: As verified on November 20, 2026, Anthropic says to select Projects in the sidebar "at claude.ai/code or in the Code tab of the desktop app". Let Claude coordinate ongoing work with Projects, Anthropic.
[^standing]: As verified on November 20, 2026, Anthropic says project instructions are "Text sent to each new thread and to Claude in the project conversation, up to 16,000 characters". To set them, "Select Settings in the ⋯ menu in the project header to open Project settings, then go to Memory > Project instructions." Let Claude coordinate ongoing work with Projects, Anthropic.
[^connectors]: As verified on November 20, 2026, Anthropic says cloud threads get their tools from "the connectors on your claude.ai account". It says "Every cloud thread can use all of them with no per-project setup", and "The project conversation itself has no connectors". So "send work that needs one as a task for a cloud thread". Turning a connector off in a thread "saves that as your account default". Let Claude coordinate ongoing work with Projects, Anthropic.
[^task-connectors]: As verified on November 20, 2026, Anthropic says "When you create a scheduled task, all of your currently connected connectors are included by default. Remove any that aren't needed". Automate work with scheduled tasks, Anthropic.
[^environment]: As verified on November 20, 2026, Anthropic says "Each cloud session runs in a cloud environment". A new environment "starts at Limited with Allow package managers checked". So "its sessions reach package registries and other allowlisted domains". The default level "covers common package registries including npm, PyPI, RubyGems, and crates.io". An environment saved as Trusted "opens as Limited with Allow package managers checked". Connector traffic "travels through Anthropic's servers rather than the session's network". Configure cloud environments, Anthropic.
[^blocked-host]: As verified on November 20, 2026, Anthropic says that in a cloud session, "a `403` or a DNS error such as `ENOTFOUND` can mean that the requested host isn't on the cloud environment's allowlist". A `403` with the header `x-deny-reason: host_not_allowed` confirms the block. Error reference, Anthropic.
[^routines]: As verified on November 20, 2026, Anthropic says that for a scheduled task "the prompt must be self-contained and explicit about what to do and what success looks like". It also says the fired prompt "can't act as approval or consent for actions during the run". Automate work with scheduled tasks, Anthropic.
[^continue]: As verified on November 20, 2026, Anthropic says "In a project, a run can continue a thread rather than start a new session." Automate work with scheduled tasks, Anthropic.
[^routines-identity]: As verified on November 20, 2026, Anthropic says "Anything a scheduled task does through your connected GitHub identity or connectors appears as you." Automate work with scheduled tasks, Anthropic.
[^delete]: As verified on November 20, 2026, Anthropic says the Library holds "the files and folders you added and the files that threads produced". Deleting a project "permanently removes the project along with its threads, its memory, and its files". It also "turns off the project's scheduled tasks". "Branches and pull requests the threads pushed to GitHub aren't affected." Let Claude coordinate ongoing work with Projects, Anthropic.


