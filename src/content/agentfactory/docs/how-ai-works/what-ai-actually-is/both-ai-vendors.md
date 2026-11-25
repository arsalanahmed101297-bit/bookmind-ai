# 0.1.4 Choose a model in your app (/how-ai-works/what-ai-actually-is/both-ai-vendors)

---
type: Document
title: "0.1.4 Choose a model in your app"
description: "How to choose a model and how much it thinks before it answers, in Claude or ChatGPT, step by step, with each AI vendor's models, plans, thinking settings and knowledge cutoffs as a dated reference."
status: stable
order: 11.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.1"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.1.4" ]
last_verified: 2026-10-16
review_by: 2026-11-16

sources:
  - id: anthropic-models-overview
    resource: https://platform.claude.com/docs/en/models/overview
    title: "Models overview (Claude Platform Docs, verified 2026-11-18)"
  - id: anthropic-pricing
    resource: https://claude.com/pricing
    title: "Plans & pricing (Claude, verified 2026-11-18)"
  - id: anthropic-usage-credits
    resource: https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans
    title: "Manage usage credits for paid Claude plans (Claude Help Center, updated 2026-11-10, verified 2026-11-18)"
  - id: anthropic-academy-models
    resource: https://academy.claude.com/tutorials/choosing-the-right-claude-model
    title: "Choosing a Claude model for knowledge workers (Claude Academy, verified 2026-11-18)"
  - id: anthropic-model-settings
    resource: https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
    title: "Change the model, effort, and thinking settings (Claude Help Center, verified 2026-11-23)"
  - id: anthropic-system-prompts
    resource: https://platform.claude.com/docs/en/release-notes/system-prompts/claude-sonnet-5-5
    title: "Claude Sonnet 5.5 system prompts, and the Claude Haiku 5.5 page beside it (Claude Platform Docs, latest entries of 2026-10-27 and 2026-10-26, verified 2026-11-18)"
  - id: openai-gpt6
    resource: https://openai.com/index/gpt-6-for-everyone/
    title: "GPT-6 and Intelligent UI for everyone (OpenAI, 2026-10-07, verified 2026-10-16)"
  - id: openai-models-help
    resource: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    title: "GPT-6 and other models in ChatGPT (OpenAI Help Center, verified 2026-11-23)"
  - id: openai-free-faq
    resource: https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq
    title: "ChatGPT Free Tier FAQ (OpenAI Help Center, updated 2026-08-13, verified 2026-10-16)"
  - id: openai-pricing
    resource: https://chatgpt.com/pricing
    title: "Plans and Pricing (ChatGPT, verified 2026-10-16)"
  - id: openai-sol
    resource: https://developers.openai.com/api/docs/models/gpt-6-sol
    title: "GPT-6 Sol model page (OpenAI API docs, verified 2026-10-16)"
  - id: openai-astra
    resource: https://developers.openai.com/api/docs/models/gpt-6-astra
    title: "GPT-6 Astra model page (OpenAI API docs, verified 2026-10-16)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Two coffee shops both sell small, medium and large cups, but each shop uses its own names. To compare them, you look at how much each cup holds, not at what it is called.

**What you will learn.** Where your app, Claude or ChatGPT, lets you choose a model and how much it thinks before it answers, so you can use them in Lab 0.1. You also learn the one thing no setting changes.

**Why it matters.** When you open the model menu, you see these names. A bigger model or more thinking costs time and usage, and it still cannot know what is not in its training or its window.

## Where to choose a model in your app

Each AI vendor offers several models at once, grouped into model families, from fast and low-cost to the most capable. Most models also have a setting for how much working they write before they answer. Choosing among the models for real work is [Chapter 2](../../ai-worker-paradigm/what-is-an-ai-worker/surface-and-model.md)'s subject.

You need a Claude or ChatGPT account. A free one is enough, and [Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md) shows how to open one. Open your app beside this page and follow your tab.

### Claude

*As verified 23 November 2026.* On the Free plan you choose between Haiku and Sonnet. The paid plans add Opus.[^anthropic-academy-models]

1. **Click the model name next to the send button.** This one menu sets the model and the effort level, and shows the ones you are on. Click "More models" to see the rest.[^anthropic-model-settings]
2. **Choose a model.** The current versions are Haiku 5.5, Sonnet 5.5, Opus 5.5 and Fable 5.2. Haiku is for fast work at high volume, and Sonnet gives the best mix of speed and intelligence. Opus is for long-running coding and knowledge work, and Fable is for demanding reasoning and the longest agent work.[^anthropic-models-overview]
3. **Click "Effort", and choose a level.** Levels run from Low to Max, and the model's recommended level is marked "Default". Higher effort gives a more thorough reply, takes longer and uses more tokens, so the usage limit runs out sooner. Anthropic's pages do not say whether the Free plan shows this setting. If your menu has no "Effort", go on: the model works at its own level.[^anthropic-model-settings]
4. **Open the "Thinking" section above a reply.** Click it to read a summary of how Claude worked. On Haiku 5.5, Sonnet 5.5, Opus 5.5 and Fable 5.2, thinking cannot be turned off. To make Claude think less, choose a lower effort.[^anthropic-model-settings]
5. **Check it worked.** Send a question about an invented shop, which no training can hold:

   ```text
   At Sunrise Bakery on Hill Road, what time does the shop open on Sundays?
   ```

   A pass is an answer that says it cannot know, or asks you for the bakery's hours. A fail is a sure opening time: that is a guess, at any effort level.

### ChatGPT

*As verified 23 November 2026.* The Thinking slider is on paid plans. The Free plan has no slider: a Free user chooses Think for harder questions, in step 2.[^openai-models-help]

1. **Open the model menu.** On paid plans, it holds the Thinking slider.[^openai-models-help]
2. **Choose how much it thinks.** On a paid plan, move the slider. It starts at Instant and goes up to Pro, and the levels you get depend on your plan. On the Free plan, choose Think for a harder question.[^openai-models-help]
3. **Check it worked.** Ask the same question twice, once with thinking and once without, and compare the answers. Then send a question about an invented shop:

   ```text
   At Sunrise Bakery on Hill Road, what time does the shop open on Sundays?
   ```

   A pass is an answer that says it cannot know, or asks for the hours. A fail is a sure opening time.

This page has no open-source tab, because Lab 0.1 runs in Claude or ChatGPT. [0.4.7](../critical-thinking/both-ai-vendors.md) shows how to run an open-source model on your own computer.

You use these steps in [Lab 0.1, Steps 1 and 2](lab.md#step-1-ask-what-it-cannot-know), whichever model and setting you choose.

## What changes a step

Three differences change what you do.

1. **Thinking on and off.** Claude's current models always think, and you set how much with the effort level. ChatGPT lets you think or not, so you can compare an answer with and without thinking on ChatGPT, but not on Claude's current models.
2. **Stated cutoffs.** Anthropic puts its cutoff date in the standing instructions of Haiku 5.5 and Sonnet 5.5, so those chats can quote it from the window. OpenAI does not say whether a ChatGPT window holds the date, so a cutoff that ChatGPT gives you may come from training alone.
3. **Family names.** The two AI vendors name their model families differently, so compare models by the job each AI vendor gives them, not by name.

## What stays the same

The names, the settings and the dates will change. What a model works from will not change, and that is the invariant. Every model on either AI vendor works from what it learned in training, which stops at its knowledge cutoff, and from its context window ([0.1.1](the-machine.md)). Anything that happened after the cutoff reaches the model only through the window. It comes from a tool, such as web search, or from what you paste in ([0.1.3](from-predictor-to-worker.md)).

## Product reference

This is for looking things up, not for reading through. Each tab gives the date it was checked.

### Claude

*Anthropic, as verified 18 November 2026.*

- **The families.** Anthropic's families are its tiers, such as Sonnet, each released in new versions.
- **The plans.** The plans page lists Opus on Pro, Max and Ultra. It includes Fable on Max and Ultra, and on Pro, Fable is paid with usage credits.[^anthropic-pricing] Usage credits are pay-as-you-go.[^anthropic-usage-credits]
- **The cutoffs.** Anthropic states a reliable knowledge cutoff of June 2026 for all four current models.[^anthropic-models-overview] It also publishes the system prompts of its apps, which are their standing instructions. The system prompts for Haiku 5.5 and Sonnet 5.5 give the model the same date. They also tell it to point to web search for later events.[^anthropic-system-prompts]

### ChatGPT

*OpenAI, as verified 16 October 2026.*

- **The families.** OpenAI's model families are its generations, such as the GPT-6 family,[^openai-gpt6] with tiers, or levels, inside each, such as Luna and Sol.[^openai-models-help] The names in this tab are as checked on October 16. For the model names OpenAI uses today, and which job each is for, see [Which model for which job](../../claude-and-chatgpt-2/tour/which-model.md), checked on November 20, 2026.
- **The Free plan.** OpenAI's own pages disagree about which model the Free plan runs. Its announcement[^openai-gpt6] and its pricing page[^openai-pricing] say GPT-6 Luna, and its model help page[^openai-models-help] and its Free Tier FAQ[^openai-free-faq] say GPT-5.6 Luna. So this page calls it the free plan's model.
- **The cutoffs.** OpenAI states knowledge cutoffs on its developer model pages, for example April 20, 2026 for GPT-6 Sol[^openai-sol] and April 30, 2026 for GPT-6 Astra.[^openai-astra] Its ChatGPT pages state no cutoff for the versions in ChatGPT.

[^anthropic-models-overview]: Models overview, Claude Platform Docs.
[^anthropic-pricing]: Plans & pricing, Claude.
[^anthropic-usage-credits]: Manage usage credits for paid Claude plans, Claude Help Center, updated 10 November 2026.
[^anthropic-academy-models]: Choosing a Claude model for knowledge workers, Claude Academy.
[^anthropic-model-settings]: Change the model, effort, and thinking settings, Claude Help Center, verified 23 November 2026.
[^anthropic-system-prompts]: Claude Sonnet 5.5 system prompts and Claude Haiku 5.5 system prompts, Claude Platform Docs, latest entries of 27 October 2026 and 26 October 2026.
[^openai-models-help]: GPT-6 and other models in ChatGPT, OpenAI Help Center, verified 23 November 2026.
[^openai-astra]: GPT-6 Astra model page, OpenAI API docs.
[^openai-gpt6]: OpenAI's announcement of GPT-6, 7 October 2026.
[^openai-pricing]: Plans and Pricing, ChatGPT.
[^openai-free-faq]: ChatGPT Free Tier FAQ, OpenAI Help Center, updated 13 August 2026.
[^openai-sol]: GPT-6 Sol model page, OpenAI API docs.


