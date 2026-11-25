# 5.2 Iterate: change the part that failed (/managing-ai-workers/the-four-part-brief/iterate)

---
type: Document
title: "5.2 Iterate: change the part that failed"
description: "How to read a weak result, find the part of the brief that caused it, change only that part, choose to iterate, restart or change approach, and set each part as tight as the task type needs."
status: stable
order: 205.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "05"
part: II
expert_status: required
concepts: [ "5.2" ]
last_verified: 2026-10-06
sources:
  - id: anthropic-opus5
    title: "Prompting Claude Opus 5 (Claude Docs, Anthropic, verified 2026-11-21)"
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5
  - id: v1-ai-prompting
    title: "AI Prompting in 2026 (Panaversity, first edition, verified 2026-10-06)"
    resource: https://agentfactory1.panaversity.org/docs/ai-prompting-2026
  - id: mdn-working-with-json
    title: "Working with JSON (MDN Web Docs, Mozilla, verified 2026-11-05)"
    resource: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A recipe came out too salty. You cut the salt next time, not every ingredient.

To iterate is to improve a brief round by round. Read each result as a test of your brief: find its biggest problem, and ask which part of the brief should have prevented it.

| What you see | The part to change |
| --- | --- |
| It made the wrong thing, or too much of it | Outcome |
| A wrong fact, an old rule, a source it should not have used, or the wrong reader | Context |
| The content is right, but the shape or the destination is wrong | Format |
| It said something it must not say, decided something it should have asked about, or kept asking about small things | Constraints |
| It answered a question you did not mean, because a line could be read two ways, such as "get the run ready" | Outcome |
| Ideas all alike, or extracted values that look invented | How tight the brief is ([below](#set-each-part-as-tight-as-the-task-needs)) |

Each row is a **specification gap**: a difference between what the brief said and what the work needed. Test each line as a new colleague would read it, for a second meaning. Then change that one part, run the brief again, and compare. Changing everything at once hides what worked.[^v1-ai-prompting]

## Every failure has a part

**Tuesday, October 20.** At 9:00, Maria asks the AP Worker to draft a note to Lakeshore Janitorial about invoice 5131, due on October 15. Her brief names the outcome, the reader, an email draft, and two constraints: "Under 150 words, polite and plain" and "Save it as a draft and send nothing."

At 9:10 the draft says Lakeshore "will be paid on Friday, October 23," and that the terms "are Net 45." The outcome and format were met, and nothing was sent. But the payment date waits for Dave's approval on Thursday, so the note said something it must not say. A rule about what a result may say is a content rule, in the constraints. And "Net 45" is a wrong fact taken from the invoice, so it is a context failure.

Maria changes one part at a time. At 9:15 she adds to the constraints: quote the invoice number and amount exactly as recorded, and say the invoice is under review, without a payment date. At 9:25 she adds to the context: payment terms come from the vendor record. The third draft is right, and at 10:00 Dave approves it.

**Change the layer that failed.** A failure may come from the brief, the worker's definition, a skill, a source or a setting. If a file was wrong, fix the file, not the brief.

## Iterate, restart or change approach

After each round, choose one of three.

| Choose | When | What to do |
| --- | --- | --- |
| Iterate | The result is close, and one part of the brief explains the gap | Change that part and run again |
| Restart | The chat is long, an early wrong turn keeps coming back, or the brief has had many small fixes | Start a new chat from the corrected brief, so the work starts from the brief and not from the history |
| Change approach | Two rounds changed little, or the cause is not in the brief | Fix the source, split the work ([5.3](decompose.md)), use another feature such as code execution, raise the effort (how hard it thinks) or the model, or finish it yourself |

You can also correct a worker while it runs. This is **steering**: name the part that changed, such as "New constraint: hold both Tri-County invoices until Maria has called them," instead of sending the whole brief again.

Save a brief that works, and write each lesson into it. When the model changes, run each saved brief again before you trust it ([rule 4](../../claude-and-chatgpt-2/new-way-of-working/what-stays-your-responsibility.md)), because a line written for an older model can make a newer one do too much.[^anthropic-opus5] Remove only such lines, and keep every rule a policy set. Stop iterating when another round changes little and finishing by hand would be faster.

## Set each part as tight as the task needs

**In everyday life.** Asking friends for vacation ideas is different from booking the flight you chose.

The four parts never change. What changes is how tightly you set each one for the task. Every task still gets the context and constraints it needs.

| Task type | Tighten | Leave open | If you do the opposite |
| --- | --- | --- | --- |
| Research | Scope, source types, dates | The answer | Your own assumptions, handed back to you |
| Analysis | The data, the definitions, the exact question | The conclusion | An analysis that just agrees with the question |
| Drafting | Audience, length, structure, facts, voice | Wording and order | A well-written draft of the wrong thing |
| Extraction | Every field, its type, how to mark a missing value | Nothing | Invented values that look real |
| Brainstorming | The problem, the audience, what to avoid | Structure, tone, length | Five rewordings of one idea |

For research and analysis, never present the conclusion you hope for as already true, because a worker that sees it tends to find it. State a hypothesis, a guess of your own, as something to test, and ask for evidence for and against.[^v1-ai-prompting] For extraction, tell the worker to leave a missing field blank and flag it, because a guessed invoice number looks exactly like a real one.

That same week, Maria needs two more things. Ideas for avoiding late fees are brainstorming, so her brief stays loose: "Suggest five different ways a small AP team that pays weekly could avoid late fees. Avoid anything that needs new software." Her first try had said each idea must be a way to ask vendors for more time, and all five came back as one idea in other words. It was too tight for ideas. This week's invoices as JSON records[^mdn-working-with-json] for the accounting system's import are extraction, so every part is tight. The brief names the **schema**, the fields the system expects and the type of each (vendor, invoice number, invoice date as YYYY-MM-DD, total with two decimals, currency), and what to do when an invoice does not show a field.

[^v1-ai-prompting]: AI Prompting in 2026, Panaversity, first edition.
[^anthropic-opus5]: Prompting Claude Opus 5, Claude Docs, Anthropic.
[^mdn-working-with-json]: Working with JSON, MDN Web Docs, Mozilla.


