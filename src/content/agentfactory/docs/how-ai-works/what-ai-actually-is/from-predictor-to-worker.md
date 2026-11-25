# 0.1.3 From predictor to worker (/how-ai-works/what-ai-actually-is/from-predictor-to-worker)

---
type: Document
title: "0.1.3 From predictor to worker"
description: "How the same model acts in steps through tools and a loop, and what writing out its working first does and does not change."
status: stable
order: 11.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.1"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.1.3" ]
last_verified: 2026-10-16

sources:
  - id: v1-what-ai-actually-is
    resource: https://agentfactory1.panaversity.org/docs/what-ai-actually-is-crash-course
    title: "What AI Actually Is: A Crash Course (Panaversity, first edition, read in full 2026-10-16)"
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You are cooking soup from a recipe. You can think hard about whether it needs more salt, but your head cannot tell you. So you taste it, add a little, and taste again. The spoon tells you what your head cannot, though you still judge what you taste.

**What you will learn.** How a text predictor becomes an agent that uses tools. Why a tool's result is still not proof, and what the model does when it thinks.

**Why it matters.** Part I of this book is about AI that carries out whole tasks. Inside a task, a wrong guess can become a wrong action, not only a wrong sentence.

## Tools and the loop

### What turns a text predictor into an agent?

Tools and a loop. On its own, the model can only write text. A **tool** is an action the app lets the model use, such as a web search, reading a file or running a small program. The model cannot run a tool itself. Instead, it predicts a request, such as "search for this", and the app's [organizer](../../claude-and-chatgpt-2/behind-the-screen/what-happens-when-you-send-a-message.md) runs the tool. Then the app puts the result into the context window, and the model continues from there.

An **agent** is a model in a loop with tools, working toward a goal. First, the model predicts its next step. Next, the app acts by running the tool. Then the model observes the result, which is now in its window, and it predicts again. It is the same predictor, with tools and a loop.[^v1-what-ai-actually-is]

### Does a tool make the answer true?

No. A tool brings more of the world into the window, or it acts and reports back into the window. Either way, it adds no third source. The model still works from what it learned in training and from its window, which now holds the tool's result. The result can still be wrong, and the model still predicts from it. But it is evidence that you can read too.

Part I describes the same loop: an agent "plans, acts, checks the result and acts again". Its check is reading what the tool sent back, the one check from outside the model.

![How a model becomes an agent: an agent is a model in a loop with tools. Three boxes run clockwise. "Predict": the model writes the next step. "Act": a tool runs, such as a search, a file read or code. "Observe": the result goes into the context window, and the loop returns to Predict. The arrow from Act to Observe is labeled "the only check from outside the model: a tool's result". A side note reads "Part I's words for the same loop: plans, acts, checks the result, acts again". A banner reads: "Each result goes back into the window before the next step."](img/the-loop.png)

*Figure 0.1.8. Predict, act, observe. Inside the loop, a tool's result is the only check from outside the model.*

## "Thinking"

### What is the model doing when it "thinks"?

It is writing out its working before it answers. This working is called **thinking**, and apps often show it under that label. What an app shows there may be a summary of the working, not all of it.[^v1-what-ai-actually-is] Thinking is more predicted text. The model writes its working into the context window first, and then it continues from that working to the answer. On a hard problem, an answer that continues from good working is often better, just as a person does better after working a problem out on paper.

Thinking draws on the same two sources, what the model learned in training and the window. It improves results but adds no truth-checker. When the model seems to check its working, it is only predicting again, with the same process that can be wrong. So a long, careful chain of working can still end in a sure, wrong answer.

**Effort**, also called reasoning effort, is a setting for how much working the model writes before it answers. More effort means more working, which takes more time and more tokens. It adds no source and no checker.

**For reference.** [Behind the Screen](../../claude-and-chatgpt-2/behind-the-screen/overview.md) introduced connectors, skills and plugins. Here is where each one sits around the model. The model writes text. The app runs the tools the model asks for on a computer, such as a temporary machine in the AI vendor's cloud. A *connector* is a tool that links the app to one of your other apps. It reaches only what you allow, and what it fetches lands in the window as text, like any tool's result. A *skill* is a saved procedure that the app loads when a task needs it, and a *plugin* is a package of skills and connectors. Each one you add lets the AI do more, so each one is a choice.

[^v1-what-ai-actually-is]: What AI Actually Is: A Crash Course, Panaversity, first edition.


