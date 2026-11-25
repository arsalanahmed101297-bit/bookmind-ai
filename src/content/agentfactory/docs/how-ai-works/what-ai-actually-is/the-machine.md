# 0.1.1 The machine (/how-ai-works/what-ai-actually-is/the-machine)

---
type: Document
title: "0.1.1 The machine"
description: "What an AI chat does when you press send, the only two things it works from, and why nothing inside it checks an answer."
status: stable
order: 11.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "0.1"
part: "0"
expert_status: null # as the Part 0 overview: Part 0 is optional on every route, after the skip quiz
concepts: [ "0.1.1" ]
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

**In everyday life.** A friend starts to sing "Happy birthday to", and you know the next word is "you". You did not look it up. You continued a pattern you learned long ago. Now try to finish a line from a song you have never heard. You still think of a word that fits. It sounds just as right, but it is a guess.

**What you will learn.** Where the AI's answers come from, and why the same question can get a different answer. Why it seems to remember you, and why it makes things up.

**Why it matters.** The same tidy answer can come from a fact or from a guess. When you know what the AI works from, you know which one to suspect and what to look at.

## Prediction, not lookup

Every AI chat has a **model** inside it. The model is the trained engine that turns the text in front of it into a reply. A **large language model (LLM)** is the kind of model inside today's AI chats. When you send a message, the model does one thing. It continues the text in front of it with the most likely next pieces of text, one small piece at a time.

The model works from exactly two things. The first is what it learned in **training**, the long process that made it before it was released. What it learned is stored inside it as a huge set of numbers, called its **weights**. Here a weight is simply a number the model learned, not a weight in kilos. The second is the context window, everything the app puts in front of it for this one reply. Nothing else exists for the model.

### Does the AI look facts up?

No. It is natural to imagine a librarian who finds the fact in a huge book and reads it back, but that picture is wrong. A lookup points to a source. A prediction has no source to point to. Ask for the capital of France, and "Paris" comes back because those words appeared together very often in the text the model learned from. Ask about a small business it never read about, and a reply still comes back, the one that sounds most likely. When neither of its two sources holds the fact, the answer is a guess. So the more often a fact appeared in its training text, the more reliable the prediction. A rare topic gets a guess in the same fluent words.

Some apps also search the web, and a search does look things up. The model still only predicts, now from what the search put in its window, as [0.1.3](from-predictor-to-worker.md) shows.

### Why does the same question get a different answer each time?

The model does not pick one fixed next piece. It scores many likely pieces, then picks one of them, with some chance in each pick.[^v1-what-ai-actually-is] So the same question can come back in different words, or even with a different answer. A different answer does not mean the model changed its mind.

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

![It continues, it never looks up: the model predicts one piece at a time. Four boxes run down the page. The first holds "Your message + everything in the context window". An arrow leads to "Frozen weights predict the next piece", then to "One piece is chosen and added to the answer", then to "That piece is fed back in with everything else". An arrow labeled "repeat, piece by piece" runs from the last box back up to the second. A banner reads: "No database is ever opened. It predicts a likely next piece, then does it again."](img/prediction-loop.png)

*Figure 0.1.1. The model writes its answer one piece at a time, and each piece is picked from the likely ones.*

## Trained once, then frozen

### How was the model made, and why does it answer you instead of just continuing your text?

Before release, the AI vendor, the company that makes the model, trained it in three stages.[^v1-what-ai-actually-is] First, the model read a huge amount of text, such as public web pages, books and code. Again and again, it guessed the next piece of a passage, and it was adjusted to guess a little better. Next, it learned from examples of instructions paired with good answers, so the most likely text after a question became an answer. Last, people rated its answers, which shaped its manner, as [0.1.2](why-it-behaves.md) shows.

When training ends, its weights are frozen, which means they never change again. The date when its training text stops is the model's **knowledge cutoff**. Nothing that happened after that date is in what it learned.

### Why can't it learn from you as you talk?

Because the weights are frozen, and that is a choice, not a fault.[^v1-what-ai-actually-is] Training takes months of computing and costs a great deal, while answering you is fast and cheap. A frozen model can be tested once, and then it behaves the same way for millions of people. A model that changed with every chat could drift, and people could push it off course on purpose. So the model keeps nothing of its own from one reply to the next.

If you correct it, it may reply "You're right." But it has only predicted the words that usually follow a correction. Inside this chat the correction helps, because it is now in the context window. In a new chat, the model starts again from the same frozen weights. A separate setting decides whether the AI vendor may use your chats to train a later model, and [Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md#step-2-make-two-choices-before-your-first-message) shows where it is.

Brightline's AP policy is the company's own document, so it was never in any training text. With nothing about Brightline in the window, whatever the model says about Brightline's approval limit comes from what it learned about other companies.

### Then why did yesterday's chat seem to remember you?

The app did the remembering, not the model. The app remembers in two ways.

- *Continuing a chat.* The app stores each chat. When you continue one, it puts the conversation so far back into the context window before every reply.
- *A memory feature.* Some apps save short notes about you from your chats. If the feature is on, the app puts those notes into the window of a new chat.

In both cases, the model learned nothing. Open a new chat with memory off, and the "memory" is gone. So keep two things apart: frozen weights, which no chat changes, and saved notes, which are text that the app puts back into a window.

![What the model works from: two sources only, and nothing else exists for it. An arrow runs into "The model" from "What it learned in training", which is fixed at the knowledge cutoff. Another arrow runs in from "The context window", which is built for this one reply. The window holds six tiles: your message, standing instructions, files you attached, saved memory notes, tool results, and the conversation so far. One arrow runs out, to "The next pieces of text". A dashed arrow from "Your chats" toward training is crossed out with a red X and labeled "does not change what it learned". A banner reads: "When it seems to remember you, the app put your old text back in."](img/two-sources.png)

*Figure 0.1.2. The model's two sources. Nothing you type goes back into what it learned.*

## No truth-checker

### What is a hallucination, and why does it happen?

A **hallucination** is invented or false content presented as fact. It happens because nothing inside the model checks its answers. A careful person has a second voice in their head that asks, "Am I sure? Where did I learn that?" The model has no part like that.[^v1-what-ai-actually-is] Nothing inside it compares a prediction with what it learned, with the context window or with the world. So when neither source holds the fact, the model fills the gap in the only way it can, by predicting. The guess comes out in the same tidy sentences as a fact.

Hallucination is a normal result of the model's design, not a fault in one app.

To see it, open a new chat, ask about Brightline's approval limit, and then ask where the answer came from. If the reply names a Brightline document, that document was never in front of the model, so the citation is invented.

The model does not check its own answers. Checking is your job. You compare the answer with the record, the document that really holds the fact. For Brightline's limit, the record is the policy itself. [Chapter 6](../../managing-ai-workers/the-review-contract/overview.md) teaches how to check.

![A guess and a fact look the same: nothing inside the model checks the answer. Two answer cards are drawn the same way. The left card is labeled "from training: a guess" and says "Invoices over $10,000 need approval." The right card is labeled "from the context window: the policy" and says "Invoices over $5,000 need the controller's approval." A tag between them reads "nothing inside checks". A document panel below both cards shows AP policy version 3, approved September 1. It reads "over $5,000: the controller's approval", and a "compare" arrow runs from it to each card. Beside a magnifying glass, a label reads "you check the answer against the record". A banner reads: "A sure tone is a style, not a source."](img/same-style.png)

*Figure 0.1.3. A guess and a fact come out in the same form. The difference is outside the model.*

[^v1-what-ai-actually-is]: What AI Actually Is: A Crash Course, Panaversity, first edition.


