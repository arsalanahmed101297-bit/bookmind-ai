# Two nights of work (/claude-and-chatgpt-2/case-2-nishas-first-client/three-nights-of-work)

---
type: Document
title: "Two nights of work"
description: "What the AI Worker did while Nisha slept, what she checked each morning, and a second opinion from ChatGPT."
status: stable
order: 0.63
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00D"
part: Front
expert_status: required
concepts: [ "While she sleeps" ]
last_verified: 2026-11-09
sources:
  - id: memory
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: new-threads
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: limit
    title: "Anthropic, Let Claude coordinate ongoing work with Projects"
    resource: https://code.claude.com/docs/en/claude-projects
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

![One night in the AI Worker's life. The subtitle says the desk forgets, the Library remembers, and a stopped run waits, then continues. Two rows of boxes. Night 1, Tuesday to Wednesday: at 9 p.m. Nisha closes her laptop. At 1:00 a.m. the scheduled task starts a run from its written instruction. Threads work at their desks from the Library. Bridge version 1 is saved to the Library. The desk is cleared but the Library still holds version 1. At 6:00 a.m. Nisha checks on her phone. Night 2 and Thursday: at 1:00 a.m. the run starts as planned. The usage limit is hit, and the thread stops and waits (a dashed box, for stopped). In the morning there is no new version and version 1 is still there. The limit resets and the thread continues on its own. At lunch there is no version 2 yet, so Nisha edits the task and clicks Run now, and version 2 follows. A band says every run reads its task's instruction, project memory and the Library, and web lookups reach only allowlisted sites. Gold boxes are Nisha's steps and white boxes are AI work. A callout says a run knows only its instruction and what was saved outside the desk.](img/one-night-in-the-ai-workers-life.png)

## Wednesday morning

Nisha woke at six and opened the project's **Library** on her phone. The first run had finished in the night ([Exhibit 3](exhibits.md#exhibit-3-the-nightly-run-log)). A new file was in the Library: the bridge, version 1, with the date. It was the first file that put the three parts into one table with a total.

She read it with her coffee. The bridge started with Sutlej's IFRS profit before tax (its profit before income tax is taken off), Rs 120.0 million, and ended with a US GAAP figure of Rs 103.2 million ([Exhibit 4](exhibits.md#exhibit-4-the-us-gaap-bridge)). A line under it said the figure would be Rs 102.0 million if the warehouse lease turned out to be a different kind of lease. The inventory thread had found the reversed write-down. The development thread had found the costs recorded as an asset this year, and the Rs 3.0 million charged this year for costs from earlier years. The lease thread had worked out the difference in lease cost.

Under the table was a list of open questions. It repeated what the reviewer thread had said on Tuesday evening: two things in the files did not agree. The engagement letter gave the warehouse rent as Rs 12.0 million a year, but Sutlej's lease note said Rs 10.0 million. One of them was wrong. And the total in Sutlej's inventory note was Rs 2.0 million higher than the inventory in the trial balance. The bridge used the trial balance figure.

The worker had found both problems, but it could not say which figures were right. The answers were with Sutlej, and only Nisha could ask.

She wrote both points in her notes, to raise with Sutlej. It was 6:25. She had to leave for work at seven.

## Wednesday evening

That evening she did three things.

First, she wrote to Sutlej's accountant. She asked which rent figure was right, why the two inventory figures differed, and for a copy of the warehouse lease contract. The lease note gave the interest rate, 8%, but not what happened at the end of the lease. Under US GAAP that decides whether the lease is an operating lease or a finance lease. The lease thread had assumed an operating lease and listed this as an assumption, as the brief asked. The answer was in the contract.

Second, she asked for a second opinion. As in Case 1, she gave the bridge to ChatGPT and asked for a strict review, without saying who had prepared it. ChatGPT agreed with the arithmetic ([Exhibit 5](exhibits.md#exhibit-5-who-caught-what)). But its list of problems was long. It had seen only the bridge, not Sutlej's files, so it also listed what it could not check. One of its main points was about the lease. Nobody had read the contract, so the kind of lease was not settled. Until it was, Rs 103.2 million was one possible answer, not a final figure.

Third, she filtered the points before passing them on, as she had in Case 1. Many of the points needed Sutlej's documents, so they had to wait. She kept two and added them to the project instructions, because instructions reach every new thread exactly as she writes them. One said to show the two lease answers side by side and to call neither one the result. The other said to explain the accounting words in the lease line in plain English for the board.

Then she wrote a short progress note to Mark herself. It listed the three areas, the lines she had checked so far and the questions open with Sutlej. She read it twice and sent it from her own email.

She used **project memory** for something smaller. She told the coordinator: *"Remember: check rent against the lease note, not the engagement letter."* Claude saved the note to project memory, and every cloud thread reads it when it starts. But memory is notes Claude writes in its own words, and Anthropic calls such notes "instructions Claude keeps to, not enforced settings".[^memory]

## Thursday morning

On Thursday morning, the Library had no new version.

The run had started at one, as planned. It had stopped partway through with a limit error. Her plan's usage limit had been reached, and a thread that stops at the plan's limit waits. By default, it continues on its own when the limit resets.[^limit] Nothing had been lost. Version 1 was still in the Library. But nothing new had been made either.

At lunch, after the limit had reset, Nisha opened the **Library** again. The thread had continued on its own and finished. But its note said that nothing had changed, and the two points she had added on Wednesday were not in the bridge.

She saw why. Changes to instructions reach new threads, not threads already running.[^new-threads] The nightly run was not a new thread. The task's page said it "continues in the same session across runs".[^run-sheet] Her new instructions had reached no one.

So she opened the scheduled task and added the two points to its own instruction, the text that runs each night. Then she clicked **Run now**, the button that starts a run without waiting for 1 a.m. A few minutes later, version 2 was in the Library. It showed the two lease answers side by side and explained the lease line's accounting words in plain English. No amount had changed ([Exhibit 4](exhibits.md#exhibit-4-the-us-gaap-bridge)).

She checked the inventory and development lines against Sutlej's notes and the rules, one by one. They held. The lease line she could not check yet.

Next, [Thursday night](thursday-night.md).

[^memory]: As verified on November 9, 2026, Anthropic says project memory is "Notes Claude keeps about the project ... stored as files", that "Every cloud thread reads the index file MEMORY.md when it starts", and that preferences Claude saves this way are "instructions Claude keeps to, not enforced settings". Let Claude coordinate ongoing work with Projects, Anthropic.
[^new-threads]: As verified on November 9, 2026, Anthropic says "Changes to instructions, repositories, plugins, and environment in Project settings reach new threads, not threads already running." Let Claude coordinate ongoing work with Projects, Anthropic.
[^limit]: As verified on November 10, 2026, Anthropic says "A thread that stops at your plan's limit waits and by default continues on its own when the limit resets", that to keep it from continuing you "turn off Auto-continue when usage limits reset in Project settings > General", and that, with the setting off, you "send the thread or conversation a message after the reset" to continue it. Let Claude coordinate ongoing work with Projects, Anthropic.
[^run-sheet]: In the recorded practical, a change to the project instructions did not reach the next nightly run, which reported that nothing had changed. The same words, added to the task's own instruction, reached the run after that. Nisha's First Client: practical run sheet and record.


