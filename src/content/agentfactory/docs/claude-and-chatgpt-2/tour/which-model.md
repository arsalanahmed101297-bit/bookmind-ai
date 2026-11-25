# Which model for which job (/claude-and-chatgpt-2/tour/which-model)

---
type: Document
title: "Which model for which job"
description: "Which Claude or ChatGPT model to start with for each kind of job, and what matters more than the model."
status: stable
order: 0.25
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Which model" ]
last_verified: 2026-11-20
sources:
  - id: models-advice
    title: "Using GPT-5.6 (OpenAI API docs, verified 2026-11-20)"
    resource: https://developers.openai.com/api/docs/guides/gpt-5.6
  - id: fable
    title: "Claude Fable 5.2 (Anthropic, verified 2026-11-20)"
    resource: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - id: gpt6-plans
    title: "GPT-6 and other models in ChatGPT (OpenAI Help Center, verified 2026-11-20)"
    resource: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
  - id: openai-prompt-guidance
    title: "Prompt guidance (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/prompt-guidance-gpt-5p6
  - id: anthropic-models-overview
    title: "Models overview (Anthropic, verified 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/overview
  - id: anthropic-choosing-model
    title: "Choosing the right model (Anthropic, verified 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model
  - id: anthropic-fable-plans
    title: "Claude Fable models on your plan (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan
  - id: openai-model-selection
    title: "Model selection (OpenAI, verified 2026-11-20)"
    resource: https://learn.chatgpt.com/docs/model-selection
  - id: openai-gpt62
    title: "Introducing GPT-6.2 Astra and Sol (OpenAI, verified 2026-11-20)"
    resource: https://openai.com/index/introducing-gpt-6-2-astra-sol/
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*As verified on November 20, 2026.*

Both apps let you pick a model, and both vendors give the same advice about it: the brief and the effort setting usually matter more than the model. Start with the model the vendor recommends for most work. Try a different model only when a job keeps failing its "Done when" sentence at a higher effort setting, or when the job is routine, repeated often, or must be fast.[^models-advice],[^openai-prompt-guidance],[^anthropic-models-overview],[^anthropic-choosing-model]

Within each vendor, the models form tiers, from fast and low-cost to most capable ([Choosing a surface and a model](../../ai-worker-paradigm/what-is-an-ai-worker/surface-and-model.md)). A faster tier can still beat a stronger one at its own kind of job, so compare them on your own tasks. Three things are also easy to mix up:

- **The default:** the model an app uses unless you choose another.
- **What you can select:** the other models the app lets you pick.
- **What your plan includes:** some models are available only on some plans, or use your limits faster.

### Claude

| Model | Use it for | Notes |
| --- | --- | --- |
| **Opus 5.5** | Most delegated work: tasks that run for a while, reports and analysis, coding it carries out by itself, computer use, work with images and screens | Anthropic's recommended starting point for most work. Default effort is medium |
| **Sonnet 5.5** | Everyday work where speed matters: drafting, summaries, data analysis, routine coding, using tools | Fast and capable, and lighter on your plan's limits |
| **Haiku 5.5** | High-volume, simple, fast jobs: sorting and classifying, pulling fields out of documents, routing requests, helper sessions in a split job | The fastest and cheapest. It also judges `/goal` conditions by default |
| **Fable 5.2** | The hardest work: sessions that run for hours, deep research carried through to a finished document, spreadsheet or deck, and jobs where Opus 5.5 at higher effort still falls short | The most capable model you can choose. It uses your limits much faster, and on some plans it runs only on paid credits[^fable],[^anthropic-choosing-model],[^anthropic-fable-plans] |

### ChatGPT

Two pairs of names look alike. The newest models in Work and Codex are GPT-6.2 Sol and GPT-6.2 Astra. Chat still uses the older GPT-6 versions, and shows them simply as GPT-6.

| Model | Use it for | Notes |
| --- | --- | --- |
| **GPT-6 Luna** | Small, repeated tasks: editing files, pulling out fields, sorting routine requests, frequent automations | The fastest and cheapest. In Work and Codex |
| **GPT-6.1 Terra** | Screen work and computer use, visual reasoning, short summaries, small code fixes | A specialist for its kind of job. In Work and Codex only, not in Chat |
| **GPT-6.2 Sol** | Most work: code, clear documents, tasks in several steps across apps | OpenAI's recommended start in Work and Codex. In Chat on paid plans, the model called GPT-6 runs on GPT-6 Sol |
| **GPT-6.2 Astra** | The hardest projects: slides and spreadsheets that follow your templates, deep analysis, complex code changes | OpenAI's newest and most capable model, in Work and Codex on Plus, Pro, Enterprise and Edu. In Chat, the Pro level uses the older GPT-6 Astra[^gpt6-plans],[^openai-prompt-guidance],[^openai-model-selection],[^openai-gpt62] |

### By kind of job

| The job | Claude | ChatGPT | What matters more than the model |
| --- | --- | --- | --- |
| A quick answer, a short email, a summary | Sonnet 5.5 | GPT-6 in Chat | A clear question |
| Writing you will send as yourself | Opus 5.5 or Sonnet 5.5 | Work, with Sol | Examples of your own writing |
| Research and reports from many sources | Opus 5.5, or Fable 5.2 for the hardest | Work, with Astra where available | Named sources, and which one wins |
| Spreadsheets and numbers | Opus 5.5 | Work, with Astra where available | Calculations done by tested code or formulas, never by the model's own arithmetic |
| A long task you leave running | Opus 5.5, or Fable 5.2 for hours-long sessions | Work, with Astra where available | A "Done when" sentence the worker can check |
| A small, well-specified code fix | Sonnet 5.5 | Codex with Terra or Sol | A test that shows it works |
| A large change across many files | Opus 5.5, or Fable 5.2 | Codex, with Astra where available | Tests, and review of the change |
| Operating a browser or your screen | Opus 5.5 | Work, with Astra or Terra where available | Permission mode and approvals |
| Many small, repeated jobs, or helpers in a split job | Haiku 5.5 | Luna in Work or Codex | A checked sample of the results |
| A high-stakes decision | The strongest model you have | The strongest model you have | A person who reviews the evidence and signs off |

A stronger model does not replace a human review: it makes better drafts, not accountable decisions. When you switch models, test your briefs again ([What stays your responsibility](../new-way-of-working/what-stays-your-responsibility.md)).

**Try it yourself.** The [practice lab](../new-way-of-working/lab.md) in The New Way of Working has five short hands-on tasks that you can do with a free account.

[^models-advice]: Anthropic: "Tuning effort is often a better lever than switching models." OpenAI: compare settings "on representative tasks instead of assuming that the highest effort is always the best tradeoff." Using GPT-5.6, OpenAI.
[^openai-prompt-guidance]: Prompt guidance, OpenAI.
[^anthropic-models-overview]: Models overview, Anthropic.
[^anthropic-choosing-model]: Choosing the right model, Anthropic.
[^fable]: As of November 20, 2026, Fable 5.2 is Anthropic's newest Fable model. It is included on Max and Ultra plans and on premium Team and Enterprise seats, where it can use up to half of the weekly limits. On Pro and on standard seats, it runs only on paid usage credits. Fable has extra safeguards. When one blocks a request, Claude answers with a different model. Claude Fable 5.2, Anthropic.
[^anthropic-fable-plans]: Claude Fable models on your plan, Anthropic.
[^gpt6-plans]: As of November 20, 2026. In Chat, Plus, Pro, Business and Enterprise use GPT-6, which runs on GPT-6 Sol. OpenAI's pages disagree about Free and Go. The release notes of October 7 say GPT-6 Luna, and the models help page says GPT-5.6 Luna. The Pro level in Chat uses GPT-6 Pro, powered by GPT-6 Astra, on Pro, Business and Enterprise. GPT-6.2 Astra and GPT-6.2 Sol are in Work and Codex on Plus, Pro, Enterprise and Edu. GPT-6 and other models in ChatGPT, OpenAI.
[^openai-model-selection]: Model selection, OpenAI.
[^openai-gpt62]: Introducing GPT-6.2 Astra and Sol, OpenAI.


