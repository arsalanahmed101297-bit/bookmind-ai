# Why the value stays on your server (/from-skills-to-income/why-the-value-stays-on-your-server)

---
type: Document
title: "Why the value stays on your server"
description: "Why the check on who has paid and the material worth paying for stay on your server, and who pays for the AI's reasoning on each platform."
status: stable
order: 4.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:42Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
generated:
  at: 2026-11-15T11:19:42Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

Anything that runs on the customer's side can be read and copied. That includes a skill's steps, a plugin's instructions and an app's code. An MCP App's screen is a web page that your server sends to the customer's AI app, so its code can be read too. A paywall written into any of them can simply be deleted.

So the check that decides who has paid, and the material worth paying for, both stay on your server. Customers pay on your own website, through a card processor such as Stripe or a local payment gateway, and your server records who has paid. The plugin and the app never handle card details.

When a customer uses the product, they sign in, your server checks their subscription, and only then does it send the next lesson, rubric or result. This is why **you sell access to your server, not the skill, the plugin or the app's screens.**

A server stops casual copying, but it does not make your material leak-proof. A paying customer can read everything you send them, and could collect it piece by piece. So send only what each step needs: one lesson, one rubric or one result at a time, with a limit on how much one customer can ask for. Protect the material, not the page.

## Who pays for what

Who pays for the AI's reasoning depends on the platform and on where the reasoning happens. On Claude, when someone uses an Artifact that calls Claude's built-in AI, the usage counts against that person's own plan, not the creator's.[^anthropic-artifacts]

That covers only the AI inside the Artifact. Any model your own server calls is billed to you. For an AI that you run yourself, such as an open-source model, you pay for the computers it runs on.

Where the customer's plan does pay, the customer pays twice: once for the AI and once for you. Organizations that already pay for an AI workspace may accept this more easily than individuals do, but that is a guess to test with real customers.

There is a catch. Some of your material may be too valuable to send to the customer at all, such as a scoring method that is your whole advantage. Then your server has to do that work itself and return only the answer. If that work needs an AI model, you pay for it.

**Keeping something completely secret and having the customer pay for its reasoning do not go together.** Decide which material is worth protecting at your own cost.

Your other costs are real too: hosting, security, sign-in, payment fees, support and keeping your material up to date. And where your product uses the customer's AI limits, a careless design can use them up. Customers will blame you, not the AI vendor.

[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.


