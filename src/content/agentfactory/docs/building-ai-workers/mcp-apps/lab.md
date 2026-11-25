# Lab 20: Cedar Ridge's open-invoices screen (/building-ai-workers/mcp-apps/lab)

---
type: Document
title: "Lab 20: Cedar Ridge's open-invoices screen"
description: "Lab 20: a read-only screen for open invoices in TypeScript with Claude Code and in Python with Codex, a screen matrix from OpenCode that proves whose call each button makes, two skills served over MCP, and the same screen in a second AI app."
status: stable
order: 320.9
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:27Z
chapter: "20"
part: III
expert_status: co-build
concepts: []
last_verified: 2026-11-15
generated:
  at: 2026-11-21T00:02:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**What you will build.** A read-only screen for `list_open_invoices` on both connectors, one tool only the page may call, a screen matrix that proves whose call each button makes, and two skills served over MCP. As in Labs 17 to 19, Claude Code builds the TypeScript connector, Codex builds the Python one, and OpenCode writes the suite that proves both behave the same. Then the same screen opens in a second AI app.

**Time needed.** About 6 hours 10 minutes in three sittings, plus three optional tasks of about 1 hour 45 minutes. Claude's free plan allows the one custom connector Sitting 1 needs.

## Before you start

- The `brightline-ap` repository at the end of [Lab 19](../business-data-and-retrieval/lab.md), at its tag `ch19`: both connectors deployed to staging, signed in through [Chapter 18](../securing-connectors/overview.md)'s sign-in server, and reading [Chapter 19](../business-data-and-retrieval/overview.md)'s database. The sign-in matrix (`conformance`, from Lab 18's Task 10) and the data matrix (`npm run matrix:data`, from Lab 19's Task 8) both end `0 failed`.
- Everything Lab 19 needed: Node, uv, git, the GitHub CLI (`gh`), and the desktop apps of Claude Code, Codex and OpenCode, each signed in.
- Test people from Lab 18, and the script that signs them in: Luis (`owner`, Cedar Ridge), Marco (`auditor` since Lab 18's Task 11), Priya (`member` of both) and Ana (`owner`, Brightline).
- Cedar Ridge's data from Lab 19's Task 4: 16 open invoices, $21,329.00 in all.
- For Task 8, a second AI app that shows MCP Apps: ChatGPT on a plan that allows custom connectors, or Goose, which is free and open source.

**What this lab needs, as of November 15, 2026.** Check each line again before you start. [20.18](how-todays-tools-realize-it.md) has the details.

| Feature | Status | Needed for | If you do not have it |
| --- | --- | --- | --- |
| Screens in Claude (interactive connectors) | Available on all plans, web, desktop and phones | Tasks 3 to 8 | Use Goose or the MCP project's basic host, and note it |
| A second AI app that shows screens | ChatGPT on a plan with custom connectors, or Goose, free | Task 8 | Skip the second app, and run the rows in OpenCode as text |
| Skills served over MCP | Beta. Partial support in a few AI apps | Tasks 10 and 11 | The tests still run. Skip the approval check in an AI app |
| App tools | Public preview in Claude, few other AI apps | Task 15 | Skip Task 15, or note that Claude answered from text |
| Company sign-in and job sign-in | Stable extensions. Support depends on the AI app and the sign-in server | Tasks 13 and 14 | Skip them. Both are optional |

**The date in this lab** is Tuesday, March 30, 2027, the day after [Lab 19](../business-data-and-retrieval/lab.md).

**How every task runs.** Chapter 12's routine, as in Labs 17 to 19. Open a fresh session with the named agent and give it the prompt in the block. Then check the result before you go on. OpenCode shows no screens, so it works through the connectors' text answers and the test suite.

**If what you see differs** from a task, trust what you see, and write the difference in `docs/screen-spec.md`. The answer keys come with the lab's folder.

## Sitting 1: a screen, and whose call it makes (about 3 hours)

### Task 0. Set up (15 minutes, Claude Code)

**Goal:** the MCP Apps skills installed, and the extensions each connector declares written down.

**Predict:** will the section name any sign-in extension yet?

**In plain words.** Install the helper skills for building screens, then write down in the connector's spec which extension it uses and what happens in an AI app without screens.

> Read 20.1 and 20.3. Install the MCP Apps skills with `/plugin marketplace add modelcontextprotocol/ext-apps` and then `/plugin install mcp-apps@modelcontextprotocol-ext-apps`. Show me that the plugin is installed and name its skills. Then read `docs/connector-spec.md`, Lab 17's contract, and add a section, "Extensions": the screens extension, its stage, and the fallback when an AI app does not support it. Explain in five lines which tool gets a screen and why.

**What good looks like:** the plugin list shows `mcp-apps`, with a skill for creating an MCP App among its skills. The section names `io.modelcontextprotocol/ui`, Stable, and "text answer" as the fallback. It names no sign-in extension yet.

### Task 1. The screen contract, with the expert (20 minutes, Claude Code)

**Goal:** `docs/screen-spec.md`, agreed with Ana.

**Predict:** which of the four tools does the page call, and with which scopes?

> Interview me as if I were Ana Morales, one question at a time. Stop when you can write `docs/screen-spec.md`: the table's columns, the two buttons, what each button calls, what each refusal says on the screen, and what the screen must never show. Use 20.2's line between the screen and the chat.

**What good looks like:** columns are invoice number, vendor, amount and due date. The bank account ending is on the "never" list. *Vendor details* calls `find_vendor`, which needs `ap:vendors.read`. Typed questions stay in the chat.

### Task 2. Text first (20 minutes, Claude Code)

**Goal:** a test of the text answer, passing before any page exists.

**Predict:** will this test need to change when Task 3 adds the page?

> Write a test that calls `list_open_invoices` as Luis on the TypeScript connector and checks the text answer: five invoices, a handle, and the total of $21,329.00. Run it.

**What good looks like:** the test passes now, and keeps passing after Task 3.

### Task 3. The TypeScript page (40 minutes, Claude Code)

**Goal:** the screen on the TypeScript connector, in Claude.

**Predict:** what will Claude ask Luis before the screen appears for the first time?

**In plain words.** The coding agent adds a page to the TypeScript connector and points `list_open_invoices` at it. It also adds one small tool that only the page may call, for the next page of rows. The page carries all its own code and holds no key.

> Read 20.3 to 20.6 and `docs/screen-spec.md`. With `@modelcontextprotocol/ext-apps`, register the page with `registerAppResource()` and the pointer on `list_open_invoices` with `registerAppTool()`. Add `next_invoice_page`, with visibility `["app"]`. Bundle the page's code, declare no outside address, and set `ui.domain` for the staging address. Deploy to staging.

**What good looks like:** in Claude, signed in as Luis, "show my open invoices" draws five rows after *Allow*. *Inspect:* the page's resource declares no outside address, and the page holds no key.

### Task 4. The Python page (30 minutes, Codex)

**Goal:** the same screen on the Python connector.

**Predict:** will the Python page's HTML be the same file as the TypeScript one?

**In plain words.** Codex does the same for the Python connector, using the same page file, so both connectors show the same screen.

> Read 20.3, 20.9 and the TypeScript changes from Task 3. In the Python connector, use `mcp.server.apps` to serve the same `ui://brightline/open-invoices.html` and the same pointer, and add `next_invoice_page` with the same visibility. Reuse the page file. Do not change any tool's text answer.

**What good looks like:** the Python tests pass, and the page file is shared, not copied.

### Task 5. The screen matrix (55 minutes, OpenCode, then you)

**Goal:** `docs/screen-matrix.md`, with each row run as a test against both connectors.

**Predict** each row's answer before you run it.

**In plain words.** OpenCode writes a test for each row of the table below. Each test makes one click as one person, against both connectors, and checks the answer. You guess each answer first.

> Read 20.4 and 20.5. Write `docs/screen-matrix.md` and `scripts/screen-matrix.ts` (`npm run matrix:screen`), which sends each row's call to both connectors as the AI app would send it, with the row's person's test token:

| Row | Who | Does | Expects |
| --- | --- | --- | --- |
| C1 | Luis | Next page | Rows 6 to 10, Cedar Ridge's |
| C2 | Marco (`auditor`) | Vendor details on V102 | 403, and "Your role does not include vendor details." on the screen |
| C3 | Luis | The page asks for INV-8301 | "not found" |
| C4 | Priya, signed in for Cedar Ridge | Opens the screen | Cedar Ridge's 16 only |
| C5 | Luis | Next page with Ana's handle | Refused, start again from page one |
| C6 | Marco | `next_invoice_page` from a script, no AI app | Checked like any call: answered for Cedar Ridge |
| C7 | Luis, with the screen open | Next page after his token expired, or after Lab 18's `tenant:member` removed him | 401, and no rows reach the page. After he signs in again, Next page works, or he stays out if he was removed |
| C9 | Priya, now signed in for Cedar Ridge | Next page on a screen she opened while signed in for Brightline | Refused, because the handle was made for Brightline. Start again from page one, with Cedar Ridge's rows |

**What good looks like:** every row passes on both connectors. Then run C1 to C3 by hand in Claude, as Luis and Marco, and check that the screen shows what the matrix expects.

## Sitting 2: the page in its box (about 1 hour 30 minutes)

### Task 6. Untrusted text (20 minutes, Claude Code)

**Goal:** row C8 passes.

**Predict:** when the note's page code reaches the screen, what will Luis see?

**In plain words.** A test note with hidden page code is put on one vendor in Cedar Ridge's practice data. Then a new test row opens that vendor and checks that the code shows as plain characters and never runs.

> Read 20.7 and 17.7. If Cedar Ridge's vendor V102 has no note yet, put the lab's test note in V102's note in `data-cedar/`, then reload Cedar Ridge into `dev` only, with Lab 19's loader: `npm run tenant:load -- --env dev --company org_cedar --folder data-cedar --policies data-cedar/policies --replace`. Show me the counts, never the rows. Then add row C8 to the matrix: Luis opens V102's details. Check that the planted note appears as characters on the screen, that nothing ran, and that the browser's developer tools show no request from the page.

**What good looks like:** the note appears on the screen as characters, page code and all. Nothing runs: no pop-up, no change to the page. The browser's developer tools show no request from the page to any address. Row C8 passes on both connectors.

### Task 7. What the model knows (25 minutes, Claude Code)

**Goal:** the page sends what it shows, and the answers prove it matters.

**Predict:** before the change, which invoice will the answer be about?

**In plain words.** First you see what the model gets wrong when it does not know which page you are on. Then the page starts telling the AI app what is showing, and you ask again.

> Read 20.8. In Claude, page to page three and ask "Why is the second row late?". Record the answer. Then make the page send `ui/update-model-context` with the rows showing whenever the page changes, in both connectors' copies of the page, and log each update it sends to the browser's console. Ask again and record the answer.

**What good looks like:** check what the AI app was given, not only what the model said. Before the change, the page sends nothing about page three, so the model has no reliable picture of it. Its first answer may name page one's second row, ask which row you mean, or avoid naming one. Any of these is a pass. After the change, the page's console shows the update it sent, with the invoice numbers of rows 11 to 15. The second answer names the invoice in row 12.

### Task 8. A second AI app (30 minutes)

**Goal:** the same screen, the same answers, in a second AI app.

**Predict:** which rows could behave differently in the second AI app, and why?

> Connect the staging connector to ChatGPT or to Goose. Open the screen as Luis and run rows C1 to C3 by hand. Then open the same tool in OpenCode, which shows no screens, and check the text answer.

**What good looks like:** the same rows, the same refusals, and in OpenCode the five invoices as text. *Port:* note in `docs/screen-spec.md` what differed, such as how each AI app asked before showing the page.

### Task 9. Review (15 minutes, Codex reviews TypeScript, Claude Code reviews Python)

**Goal:** a reviewed pull request, merged only when every matrix row passes.

**Predict:** which of the three matrices could adding a screen break?

> Open the pull request with the template. Its checks must run all three matrices on both connectors: the sign-in matrix, the data matrix and the screen matrix. Ask Codex to review the TypeScript changes and Claude Code the Python ones, against 20.4, 20.5 and 18.11. I will merge.

**What good looks like:** all three matrices end `0 failed`. Adding a screen changed no row of the first two.

## Sitting 3: skills over MCP (about 1 hour 40 minutes)

### Task 10. Serve the skills (40 minutes, Claude Code for TypeScript, Codex for Python)

**Goal:** `invoice-triage` and `vendor-terms` served from both connectors, with manifests.

**Predict:** how many files will `invoice-triage`'s manifest list?

**In plain words.** Both connectors start offering Chapter 16's two skills to any AI app, each with a list of its files and their fingerprints. For AI apps that cannot load skills yet, each skill is also offered as a plain tool.

> Read 20.12 and 20.13. Declare `io.modelcontextprotocol/skills` and serve Chapter 16's `invoice-triage` and `vendor-terms`, from the files in `plugin/skills/` that Lab 16 wrote, with `skills/list`, `skills/get` and `resources/read`. Rename them `brightline-invoice-triage` and `brightline-vendor-terms`. Compute each manifest from the bytes served. Until AI apps load skills natively, also offer each skill as a tool that returns its instructions. Say in its description that it has no manifest check.

**What good looks like:** both connectors list the same skills with the same fingerprints, and OpenCode's conformance suite agrees.

### Task 11. A changed rule (25 minutes, OpenCode)

**Goal:** proof that a changed file changes the manifest.

**Predict:** how many fingerprints in the manifest will change?

> Read 20.13. Write a test that lists the skills, changes one line of `brightline-invoice-triage/references/rules.md`, lists them again, and checks that only that file's fingerprint changed.

**What good looks like:** one fingerprint changed, and the test names the file. The test proves what the connector does. Whether an AI app then asks again depends on that AI app: check it only in one that 20.18 lists as supporting skills, and write down what it did.

### Task 12. How the pieces fit (35 minutes, you, with Claude Code)

**Goal:** `docs/connector-spec.md` updated for every layer.

**Predict:** which mistake in 20.16's list is still open for Brightline after Task 11?

> Read 20.16. Add the four layers to `docs/connector-spec.md`, with Brightline's own example for each. Then go through 20.16's list of mistakes and mark each as "guarded" (name the test) or "open".

**What good looks like:** four layers, each with Brightline's example. They are the four tools, the two served skills, the open-invoices screen, and Chapter 18's sign-in. Each guarded mistake names its test, such as "Treating a hidden tool as protected" and row C6. "Linking accounts by email alone" stays open unless you did Task 13.

## Optional tasks

### Task 13. Cedar Ridge's identity provider (45 minutes, Claude Code)

**Goal:** Luis connects through Cedar Ridge's own identity provider, and removing him there stops him.

**Predict:** after Luis is disabled at the identity provider, how long will his last token keep working?

**In plain words.** You add a practice company login for Cedar Ridge, let it vouch for Luis, then switch him off there and time how long until his calls stop working.

> Read 20.14. Add a test identity provider for Cedar Ridge to the sign-in server, accept ID-JAGs from it, and link people by issuer and subject. Sign Luis in, then disable him at the test identity provider, and record how long his last call keeps working.

**What good looks like:** Luis connects with no consent screen, and the connector checks his token as in Chapter 18. After he is disabled, he gets no new pass at once, but his last access token works until it expires. The time you record is close to the token lifetime you set in Lab 18. Write it in `docs/connector-spec.md`.

### Task 14. The month-end report job (35 minutes, Codex)

**Goal:** the report job signs in as itself, with the least scope it needs.

**Predict:** what will `find_vendor` answer the job, and why?

**In plain words.** The month-end report job gets its own sign-in, with read-only access, and you check that its token names the job, not a person.

> Read 20.15. Give the report job its own client credentials with a signed assertion and the scope `ap:read` only, for Brightline as its company. Check that its token names the job, not a person, and that `find_vendor` refuses it.

**What good looks like:** no browser opens. The token names the job's client, not a person, with `ap:read` and Brightline. `list_open_invoices` answers. `find_vendor` answers 403, because the job has no `ap:vendors.read`.

### Task 15. Claude jumps to the overdue invoices (25 minutes, Claude Code)

**Goal:** an app tool, so Claude can change what the screen shows without a new screen.

**Predict:** when Luis asks "Jump to the overdue ones", which calls reach the connector?

**In plain words.** The page gets a small tool of its own that Claude can call. It changes what the screen shows and saves nothing.

> Read 20.3 and 20.4. In the page, register an app tool, `show_overdue`, with `app.registerTool()`. It needs version 1.7.0 or later of `@modelcontextprotocol/ext-apps`. When the model calls it, the page fetches the remaining pages with `next_invoice_page` and shows only the invoices due before March 30, 2027, oldest first. Invoices with no due date go in their own group at the end. The tool returns a short text answer with the number of overdue invoices and their total. Add nothing to the connector. Then I will open the screen in Claude as Luis and ask "Jump to the overdue ones."

**What good looks like:** the same screen changes, and no new screen appears. The connector's audit lines show only `next_invoice_page` calls, each with Luis's token. Nothing was saved anywhere. In an AI app without app tools, Claude answers from the text answer instead. Write down which AI apps called the app tool.

## Core and extensions

**What is optional:** Tasks 13, 14 and 15, and the whole of [Lab 20b](lab-review-workspace.md).

**Core, about 6 hours 10 minutes:** Tasks 0 to 12. Task 9, the review, is core: it is the only check that adding a screen changed no row of the sign-in and data matrices.

## Apply it to your vertical (optional)

Pick a business you know with at least two customers, such as a clinic group or a school district. Choose one tool that deserves a screen by 20.2's test, and one that should stay text. Write its `screen-spec.md`: the columns, the buttons, what each button calls, the words of each refusal, and the "never" list. Then write three rows of its screen matrix, one of them a button pressed by the wrong person.

## If something goes wrong

| What you see | Why | What to do |
| --- | --- | --- |
| The tool answers in Claude, but no screen appears | The page's type or address does not match the pointer | Check that the page's type is `text/html;profile=mcp-app` and that the pointer names the page's exact address. Then connect again |
| An empty box, and the console says an address was blocked | The page loads code from an address it did not declare | Bundle the code into the page ([20.6](the-sandbox.md)) |
| Claude reports a problem with `ui.domain` | The value was computed from another server address | Compute it again from the staging address ([20.18](how-todays-tools-realize-it.md)) |
| The page's call is refused before it reaches the connector | The tool is not marked for the page | Add `"app"` to its visibility ([20.5](hidden-is-not-protected.md)) |
| The screen still shows the old page after a deploy | The AI app kept an earlier copy of the page | Restart the desktop app, or open a new chat |
| Row C5 passes in TypeScript but fails in Python | The Python handle check skips the person | Ask Codex to check the company and the person in every handle, as 18.12's rule 4 says |
| The two connectors list different fingerprints | The fingerprints were made from different bytes, such as other line endings | Make each fingerprint from the bytes served, and compare file by file |
| In Task 7, the second answer is still about page one | The page sends its update only when it first loads | Send it on every page change |

## Exam notes

These notes are not part of the lab. No exam objective is assigned to this chapter, and none is claimed. It supports these, without covering any of them on its own:

- **CCDV-F, MCP server development (supporting).** An extension used only when both sides declare it, a page pointer on a tool, visibility, and a text answer behind every screen ([20.1](what-an-mcp-extension-is.md), [20.3](how-an-mcp-app-works.md), [20.5](hidden-is-not-protected.md), [20.9](a-text-answer-behind-every-screen.md)). Skills served with a manifest ([20.12](skills-that-travel-with-the-server.md)).
- **CCDV-F, injection, untrusted input and leakage (supporting).** The sandbox, data shown as text, and approving a skill from a server ([20.6](the-sandbox.md), [20.7](untrusted-text-on-the-screen.md), [20.13](approving-a-skill-from-a-server.md)).
- **CCDV-F, identity, secrets and keys (supporting).** A click acts as the person signed in, and a page never holds a key ([20.4](who-a-click-acts-as.md), [20.6](the-sandbox.md)). Company sign-in and a job's own sign-in go further ([20.14](employees-through-their-company.md), [20.15](machines-with-no-person.md)).
- **OpenAI map, building (supporting).** ChatGPT shows the same standard's screens ([20.9](a-text-answer-behind-every-screen.md), [20.18](how-todays-tools-realize-it.md)).
- CCDV-F asks about Claude's behavior. Where an AI app differs from the MCP specification, the exam follows Claude. The other products are not examined.

## Artifact checklist

- [ ] `docs/connector-spec.md` with its "Extensions" section and the four layers
- [ ] `docs/screen-spec.md`, agreed with Ana, with the differences between AI apps
- [ ] The page, `ui://brightline/open-invoices.html`, one file shared by both connectors
- [ ] `next_invoice_page` in both connectors, marked for the page only
- [ ] The text-answer test from Task 2, passing
- [ ] `docs/screen-matrix.md` and `scripts/screen-matrix.ts`, rows C1 to C9 passing on both connectors
- [ ] `brightline-invoice-triage` and `brightline-vendor-terms` served from both connectors, with the changed-rule test
- [ ] A merged, reviewed pull request, with all three matrices passing

**You are done when:** the text answer passes without the page, and every row of the screen matrix passes on both connectors. The page declares no outside address and holds no key. The second AI app gives the same answers. Both connectors serve the same two skills with the same manifests.

**Then, if you want the full app:** [Lab 20b](lab-review-workspace.md) builds a complete interactive app, an editor that Claude and the person use together.


