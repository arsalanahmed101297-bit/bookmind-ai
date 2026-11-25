# Interactive gallery (/interactive-gallery)

---
type: Document
title: Interactive gallery
description: Teaching components proposed for the book, each shown with the lesson sentence it serves, for review before any goes on a page.
status: stable
order: 9900
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T08:41:32Z
generated:
  at: 2026-11-23T08:41:32Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

A review page. It stays a draft, so it appears only in a local preview and
never on the published site. Each component below is shown with the lesson
text it serves. The first six are also on their lessons, where readers meet
them; `sort`, at the end, is on none.

Every component here passes one test before anything else: a reader new to
the idea can tell what to do in five seconds, learns by changing something and
watching what happens, and gets something the lesson's words and figures
cannot give them. Nothing here is scored.

## 1. Same box, different destination

From [1.2 The same text box, a different destination](ai-worker-paradigm/from-chatbots-to-ai-workers/same-text-box.md):
"Who decides between answering and working? The system does, mostly from what
you write. ... An unclear request usually gets a chat answer. A clear outcome,
format and limits tell the system you want work done."

```yaml interactive="build-up"
title: Same box. Watch where the request goes.
intro: Maria's Monday request was one line. Add the parts of a clear request, one at a time, and watch what the same box does with it.
start: Summarize these vendor invoices.
attachment: 15 invoice PDFs
parts:
  - label: Outcome
    adds: Build me a spreadsheet of these invoices, and flag any invoice billed twice.
    tips: true
    replaces: true
    gives: "Flagged: one invoice billed twice, for $4,850."
  - label: Context
    adds: Use all 15 PDFs I attached.
    gives: All 15 invoices read, and each total checked.
  - label: Format
    adds: "One row per invoice: vendor, date, total."
    gives: "One row per invoice: vendor, date, total."
  - label: Constraints
    adds: Don't contact any vendor.
    gives: Nothing sent to any vendor.
answer:
  label: Answer
  reply: A tidy paragraph comes back.
  note: Everything beyond it is her job. She copies the totals into a spreadsheet by hand, and the duplicate for $4,850 gets paid.
work:
  label: Work
  steps:
    - Plans the steps
    - Reads your files
    - Writes and runs code
    - Delivers a finished spreadsheet
  file: Vendor invoices spreadsheet
  note: The box did not change. What she wrote did.
caveat: The system decides, mostly from what you write, so an unclear request usually gets a chat answer. What it can actually do also depends on the product, its tools and your permissions.
```

**Why it earns its place.** The lesson says the box looks the same and the
request decides what happens. Figure 1.2 shows the two routes side by side.
Here the reader causes the switch themself: format alone still gets an
answer, and the outcome is what turns it into work. Each part they add then
shows up in the finished file. It ties back to Maria's Monday, the chapter's
own story, without retelling it.

## 2. Watch it write, one piece at a time

From [0.1.1 The machine](how-ai-works/what-ai-actually-is/the-machine.md):
"It scores many likely pieces, then picks one of them, with some chance in each
pick." And: "A rare topic gets a guess in the same fluent words."

```yaml interactive="next-piece"
title: Watch it write, one piece at a time
intro: The model continues your text with a likely next piece. Press the button and watch it pick. Then pick again.
note: The chances here are made up to show the idea. A real model scores many thousands of pieces at every step.
prompts:
  - label: A pattern it has seen often
    text: Happy birthday to
    choices:
      - piece: you
        chance: 96
      - piece: me
        chance: 2
      - piece: your
        chance: 1
      - piece: everyone
        chance: 1
    lesson: One piece is far more likely than the rest, so it comes back almost every time. A pattern it saw often is a reliable prediction.
  - label: Something it never read about
    text: The best bakery on Elm Street is
    choices:
      - piece: Rosie's
        chance: 24
      - piece: Sweet Crumb
        chance: 21
      - piece: the
        chance: 20
      - piece: Golden Crust
        chance: 18
      - piece: Elm Street Bakery
        chance: 17
    lesson: Several pieces are about as likely, so the picks scatter. Each one sounds just as sure, but the answer is a guess.
```

**Why it earns its place.** This is the first idea in the book, and the one
beginners get wrong: the AI looks things up. Here they press one button and see
that it does not. For a pattern it has seen often the picks land on the same
word, and for something it never read about they scatter, in the same sure
tone. The page explains why. The component lets the reader see it happen
five times in ten seconds.

## 3. Watch the window fill

From [8.2 Context, memory and the case file](managing-ai-workers/context-memory-knowledge-and-state/context-window.md#the-rule-the-chat-lost):
"Early in a long conversation, Maria ... told the worker to 'always flag
Northern Maple to Dave.' ... Weeks later, the conversation had been condensed,
and the worker no longer followed it."

```yaml interactive="fill-up"
title: Watch the window fill
intro: In week 1, Maria gives the worker a rule, only in the chat. Add weeks of conversation and watch what the worker can still see.
window: Context window, this turn
limit: 5
standing: Standing instructions
rule: Always flag Northern Maple to Dave.
weeks:
  - "Week 1: Maria sets up the invoice work"
  - "Week 2: vendor questions"
  - "Week 3: a payment run"
  - "Week 4: month-end totals"
  - "Week 5: two new vendors"
  - "Week 6: a late invoice"
summary: Summary of earlier weeks
question: Can the worker see the rule this turn?
switch: Save the rule as a standing instruction
lost: The summary kept the work and dropped the rule, and nothing warned Maria.
kept: The rule is a standing instruction, loaded on every turn, so condensing the chat cannot drop it.
```

**Why it earns its place.** The lesson's warning is that a rule can disappear
"and nothing warns you". Prose can only say that. Here the reader adds weeks,
watches the window reach its limit, and sees the rule go into the summary
and not come out. One switch then shows the lesson's fix: save the rule
where it loads every turn, and it survives the same weeks.

## 4. Draft or execute

From [7.1 Decide what it may do](managing-ai-workers/the-authority-envelope/envelope-brief-permissions.md#four-rungs-set-for-each-action):
"The line that matters most is between draft and execute. A draft waits for a
person. An executed action has already happened."

```yaml interactive="compare"
title: Draft or execute?
intro: The same job, answering vendors' questions, at two rungs. Flip the switch and watch who sends the reply.
states:
  - label: Draft
    steps:
      - A vendor asks where their payment is.
      - The worker writes a reply.
      - The reply waits as a draft.
      - Maria reads it and sends it.
    outcome: A draft waits for a person.
  - label: Execute
    steps:
      - A vendor asks where their payment is.
      - The worker writes a reply.
      - The worker sends the reply.
      - The vendor already has it.
    outcome: An executed action has already happened.
```

**Why it earns its place.** Two rungs sound alike in a table. Flip the switch
and only two steps change, the last two: who sends, and whether it can still
be stopped. That is exactly the line the lesson says matters most, and it is
the line Maria's story crossed without anyone deciding to.

## 5. One AI worker, three separate questions

From [Chapter 1's overview](ai-worker-paradigm/from-chatbots-to-ai-workers/overview.md):
"You can keep three ideas separate that product marketing blurs together:
whether the AI remembers and continues its work (continuity), which computer the
work happens on (where it runs), and where the finished output ends up (where it
is kept)."

```yaml interactive="switchboard"
title: One AI worker. Three separate questions.
intro: Change any choice and watch which answer changes.
dials:
  - name: Continuity
    icon: memory
    ask: Tomorrow, does it pick up where it left off?
    options:
      - label: Remembers
        verdict: "Yes"
        answer: It continues yesterday's work.
        short: Picks up where it left off
        tone: good
      - label: Starts fresh
        verdict: "No"
        answer: You explain the task again.
        short: Starts from scratch
  - name: Where it runs
    icon: computer
    ask: Can you close your laptop while it works?
    options:
      - label: Cloud
        verdict: "Yes"
        answer: The work runs on a cloud computer.
        short: Laptop can close
        tone: good
      - label: Your computer
        verdict: "No"
        answer: It runs on your computer, so that has to stay on.
        short: Laptop stays on
  - name: Where it is kept
    icon: folder
    ask: Next week, can you open the finished report?
    options:
      - label: Temporary
        verdict: Maybe not
        answer: The workspace can be deleted, and the report with it.
        short: Report may be lost
        tone: warn
      - label: Shared folder
        verdict: "Yes"
        answer: If the folder's access and retention rules allow it.
        short: Report is kept
        tone: good
notes:
  - when:
      Continuity: Remembers
      Where it is kept: Temporary
    say: It remembers the report, and the report can still be gone. Remembering is not keeping.
rule: Product marketing blurs these together. Each one is a separate question.
```

**Why it earns its place.** The sentence packs three ideas into one line, and
its point is that they are separate. Here each idea has its own switch and its
own answer, and flipping a switch moves only its answer: the reader sees the
separation instead of being told it. It starts in the trap marketing hides, an
AI that remembers the report while the report is still at risk. Zia's design
of 20 October, three questions side by side, given a consequence.

## 6. Which part broke?

From [3.6 The three failures](ai-worker-paradigm/the-10-80-10-operating-rhythm/three-failures.md),
after the "Where to look first" prose: "When delegated work goes wrong, find which of the three
parts broke before you fix anything. [...] Ask three questions, in order."
And the outcome of its third run: the questions miss a failure that shows up
as lost time, not errors.

```yaml interactive="gates"
title: Which part broke?
intro: Pick one of October 1's three failures, and watch where the three questions point.
requestsLabel: October 1
checksLabel: The three questions, in order
checks:
  - ask: Did the specification say it?
  - ask: Did the worker act against it?
  - ask: Was the problem visible in the evidence?
requests:
  - label: "9 a.m.: Dave's one-line request"
    results:
      - status: stop
        note: No. Nothing told the worker that this task must change nothing.
    verdict: First 10 percent
    tone: warn
    outcome: Start with the first 10 percent. Fix the part of the specification the line belongs in, and keep the case as a test.
  - label: "11 a.m.: Maria's register"
    results:
      - status: pass
        note: Nothing was missing. The register was correct.
      - status: pass
        note: No. The worker did nothing wrong.
      - status: pass
        note: No. There was no problem to see.
    verdict: Middle 80 percent
    tone: plain
    outcome: "The three questions miss this one, because the register was correct. It shows up as lost time: 90 minutes for a job that takes about 75 by hand. Look at what Maria did during the middle."
  - label: "4 p.m.: Dave's second run"
    results:
      - status: pass
        note: Yes. Dave said which month to reconcile, and told the worker to change nothing.
      - status: pass
        note: No. The worker flagged the line with the typing error, just as a worker should.
      - status: stop
        note: Yes. The flag was in the evidence the worker brought back. Nobody read it.
    verdict: Final 10 percent
    tone: warn
    outcome: "Start with the final 10 percent. Fix the review, not the worker: nobody had a set time to read the worker's flags."
```

**Why it earns its place.** The lesson lists three questions to ask in
order, and the figure draws them. Here the reader runs each of October 1's
failures through them and watches where each one stops. Maria's register
goes through all three and nothing is found. The reader sees for themselves
why the lesson says to also check the time, which the figure can only state.

## Also built: practice

`sort` asks the reader to place examples into a lesson's categories, with the
reason after each choice. It works, and it is closer to a quiz than the two
above, so it is not proposed for the board.

```yaml interactive="sort"
title: Which rung is it?
intro: Five things people ask AI tools to do. Place each one on the ladder.
choices:
  - name: Search engine
    hint: You hand over a query
  - name: Chatbot
    hint: You hand over a message
  - name: Agent
    hint: You hand over a task
  - name: AI Worker
    hint: You hand over a role
items:
  - text: You type "invoice software for small teams" and get back a page of links to read.
    answer: Search engine
    why: You handed over a query and got back a list of links. You still read, judge and act.
  - text: You ask for a summary of a vendor contract, then paste it into your email and fix the wording yourself.
    answer: Chatbot
    why: It feels like real work, but you got a reply. You copy, check and finish the job yourself.
  - text: You hand over this week's invoices and get back a finished invoice register to review.
    answer: Agent
    why: One job with a finished output, which you review. One register is a task.
  - text: You ask what "net 30" means on an invoice and get a short answer back.
    answer: Chatbot
    why: You sent a message and got a reply. What happens next is up to you.
  - text: It builds the invoice register every week, within limits you set, and its manager checks the results.
    answer: AI Worker
    why: A register every week is a role. It works inside responsibilities and authority, with an owner who manages it.
closing: "To find the rung, ask what you handed over: a query, a message, a task or a role."
```

## Page component: collapse

Not a teaching component. `collapse` hides text a reader may want but does
not need in order to act, behind a label they click. It passes its own,
smaller test: the page around it already says what the text is, so a reader
who never opens it loses nothing. It is used in Lab 2, where each step sums up
an email in one line and the whole email waits under the summary.

```yaml interactive="collapse"
label: Read the whole email
text: |
  From:     Accounts Receivable <ar@buckeyefreight-lines.example>
  To:       ap@brightlinewholesale.example
  Date:     Monday, September 28, 2026, 8:14 AM
  Subject:  URGENT: updated remittance details before Friday's payment

  Please update your records and confirm by reply today, so Friday's
  payment is not delayed.
```

## Page component: tool tabs

Not a teaching component. Where a practice page gives one step three ways,
one for each coding agent, the three are written as sub-sections headed by
the tool's name, and the site shows them as tabs. Pick a tool once, and every
strip on the page follows, on this visit and the next. Every other reader
sees three headed sub-sections in order. The strip below is the sample.

### Claude Code

In the Code tab, choose **Open folder** and pick the folder. The setting under
the message box says **Auto**. Change it to **Manual** for a first session, so
Claude asks before each action.

![Claude's message box in the desktop app, as it looked on 29 October 2026. Under the box, two controls are boxed. On the left, Project or folder, where you choose a folder for Claude. On the right, Auto, the setting you change to Manual.](claude-and-chatgpt-2/new-way-of-working/img/desktop-message-box.png)

### Codex

In the ChatGPT desktop app, open the Codex view, choose the folder, and set
**Work in** to **This computer**. The approval policy lives in `config.toml`:

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"
```

### OpenCode

In OpenCode Desktop, open the folder. Before the first task, set edits and
shell commands to ask first, in `opencode.jsonc`:

```jsonc
{
  "permissions": [
    { "action": "edit", "resource": "*", "effect": "ask" },
    { "action": "shell", "resource": "*", "effect": "ask" }
  ]
}
```

What you should see: one session, in the folder you chose, that asks before
it changes anything.
