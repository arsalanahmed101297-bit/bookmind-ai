# Appendix: the Claude app without a Claude plan (/appendices/claude-and-chatgpt-2/appendix-the-claude-app-without-a-claude-plan)

---
type: Document
title: "Appendix: the Claude app without a Claude plan"
description: "An optional page: how the Claude desktop app can run on a model from another company, what you give up, and the setup steps for OpenRouter, DeepSeek and Ollama, as checked on 29 October 2026."
status: stable
order: 904.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T08:18:37Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "No Claude plan" ]
last_verified: 2026-10-29
steps_run: [] # Still to run (the editor approved the page on 11 November 2026 with this open): each company's steps, once, by a person with their own key, on a computer that is not running an agent's session.
sources:
  - id: anthropic-3p-overview
    title: "Overview, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/overview
  - id: anthropic-3p-features
    title: "Features, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/feature-matrix
  - id: anthropic-3p-install
    title: "Installation and setup, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/installation
  - id: anthropic-3p-gateway
    title: "Deploy Claude Desktop on 3P with an LLM gateway (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/gateway
  - id: anthropic-3p-in-app
    title: "In-app configuration, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/third-party/claude-desktop/in-app-configuration
  - id: openrouter-claude-desktop
    title: "Claude Desktop integration (OpenRouter documentation, verified 2026-11-11)"
    resource: https://openrouter.ai/docs/cookbook/coding-agents/claude-desktop-integration
  - id: openrouter-providers
    title: "Provider selection (OpenRouter documentation, verified 2026-10-29)"
    resource: https://openrouter.ai/docs/guides/routing/provider-selection
  - id: deepseek-api-docs
    title: "Your first API call (DeepSeek API documentation, verified 2026-10-29)"
    resource: https://api-docs.deepseek.com/
  - id: deepseek-pricing
    title: "Models & Pricing (DeepSeek API documentation, verified 2026-10-29)"
    resource: https://api-docs.deepseek.com/quick_start/pricing
  - id: deepseek-anthropic-api
    title: "Anthropic API (DeepSeek API documentation, verified 2026-10-28)"
    resource: https://api-docs.deepseek.com/guides/anthropic_api/
  - id: ollama-claude-desktop
    title: "Use Ollama models in Claude on macOS (Ollama documentation, verified 2026-10-28)"
    resource: https://docs.ollama.com/integrations/claude-desktop
  - id: ollama-pricing
    title: "Pricing (Ollama, verified 2026-10-28)"
    resource: https://ollama.com/pricing
generated:
  at: 2026-11-11T08:18:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

You can skip this page. It is for readers who want the Claude app's folders, browser or Claude Code without paying for a Claude plan.

The Claude app can run on a model from another company. You then need no Claude plan, and you pay that company for what you use.[^anthropic-3p-install] Anthropic's list for this mode includes the folders, the built-in browser and Claude Code.[^anthropic-3p-features]

This page covers three companies, in alphabetical order.

| Company | What it is | What you need first |
| --- | --- | --- |
| DeepSeek | Makes its own models | An account, credit and an API key |
| Ollama | An app that runs a model on your own Mac | Ollama, on a Mac. A model on your own Mac costs nothing[^ollama-pricing] |
| OpenRouter | Passes your messages on to many companies' models | An account, credit and an API key |

An API key is a secret code that lets the Claude app use your account at that company.

> [!WARNING]
> Keep your API key private. Never paste it into a chat, a screenshot or a group message. Anyone who has it can spend your credit.

## What do you give up?

- **What you type goes to that company,** under its terms.[^anthropic-3p-overview] So the two choices you made in [Set up the apps](../../claude-and-chatgpt-2/new-way-of-working/set-up-the-apps.md#step-2-make-two-choices-before-your-first-message) no longer cover it.
- **The app works on this computer only.** There is no claude.ai and no phone app with it, no sharing and no voice. Your chat history is saved on this computer only.[^anthropic-3p-features]
- **Some features may fail.** Anthropic built this mode for organizations, and describes it with Claude models.[^anthropic-3p-overview] DeepSeek does not support attached documents.[^deepseek-anthropic-api] So do the [practice lab](../../claude-and-chatgpt-2/new-way-of-working/lab.md) on your free account.

## Set up DeepSeek or OpenRouter

**First, get your API key.**

- For DeepSeek, sign up on the [DeepSeek Platform](https://platform.deepseek.com/), and create a key on its [API keys page](https://platform.deepseek.com/api_keys).[^deepseek-api-docs] Top up your balance there. DeepSeek takes what you use from it, at the prices on its [pricing page](https://api-docs.deepseek.com/quick_start/pricing).[^deepseek-pricing]
- For OpenRouter, add credit at [openrouter.ai/credits](https://openrouter.ai/credits), then create a key at [openrouter.ai/keys](https://openrouter.ai/keys). OpenRouter says this setup is only guaranteed to work when Anthropic itself runs the model.[^openrouter-claude-desktop] So in its [privacy settings](https://openrouter.ai/settings/privacy), allow only Anthropic as a provider.[^openrouter-providers] You then use Claude's models, and you pay OpenRouter.

**Then connect the app.** The steps are the same on Windows and macOS.

1. Open the Claude app. Do not sign in.
2. Turn on Developer Mode. On a Mac, in the menu bar at the top of the screen, open *Help*, then *Troubleshooting*, and click *Enable Developer Mode*. On Windows, open the ☰ menu at the top left of the sign-in screen first, then do the same.[^anthropic-3p-in-app] A new menu called *Developer* appears.
3. Open *Developer*, and click *Configure Third-Party Inference*. A settings window opens on its Connection page.

   ![The Developer menu of the Claude app, as it looked on 29 October 2026. The menu's name, Developer, is boxed in the menu bar. In the open menu, the item Configure Third-Party Inference is boxed.](../../claude-and-chatgpt-2/new-way-of-working/img/desktop-developer-menu.png)

4. In the first box on the Connection page, choose *Gateway*. A gateway is a service that passes your messages on to a model.
5. Under *Gateway credentials*, fill in these four boxes. Leave every other box as it is.[^anthropic-3p-gateway]

   | Box | DeepSeek[^deepseek-anthropic-api] | OpenRouter[^openrouter-claude-desktop] |
   | --- | --- | --- |
   | Credential kind | Static API key | Static API key |
   | Gateway base URL | `https://api.deepseek.com/anthropic` | `https://openrouter.ai/api` |
   | Gateway API key | Your key | Your key, which starts with `sk-or-v1-` |
   | Gateway auth scheme | x-api-key | Bearer |

   ![The Connection page of the Claude app's settings window, as it looked on 29 October 2026, part of the way through a DeepSeek setup. Above, three parts are boxed. The first box is set to Gateway. Credential kind is still empty. Gateway base URL holds https://api.deepseek.com/anthropic. Below is the bar at the bottom of the same window, where two parts are boxed, the message "Connection needs Credential kind" and the Apply Changes button.](../../claude-and-chatgpt-2/new-way-of-working/img/desktop-gateway-settings.png)

6. Look at the bar at the bottom of the window. If it names a box, as in "Connection needs Credential kind", that box is still empty, so fill it in. Then click *Apply Changes*. The app restarts.[^anthropic-3p-in-app]
7. On the start screen, choose *Continue with Gateway*. If you do not see it, quit the app fully, not just its window, and open it again.[^openrouter-claude-desktop]
8. Pick a model from the model menu, and send a short message, such as "Hello".

With DeepSeek, the model menu may show Claude's names. Then Opus means DeepSeek V4 Pro, and Sonnet and Haiku mean DeepSeek Flash.[^deepseek-anthropic-api]

## Set up Ollama

Ollama connects the Claude app for you, on a Mac only. Ollama says Windows support is coming.[^ollama-claude-desktop]

1. [Install Ollama](https://ollama.com/download/), and download a model to your Mac. For a cloud model instead, one that runs on Ollama's computers, sign in to Ollama and turn on cloud models. Some cloud models need a paid Ollama plan.
2. In Ollama, open *Apps*, and choose *Connect Claude*.
3. Follow the prompts. They install Claude if you need it, and ask you to restart it.
4. To change the model later, open Ollama's *Settings*, then *Apps*, choose your models, and click *Restart Claude*.

## Check it, change it, or go back

- **To check it worked,** send one short message, then find its charge on the company's usage page. With a model on your own Mac there is no charge, so the reply is your check.
- **To change a setting,** such as a wrong key, you need the Developer menu back. It goes away when the app restarts into this mode. Turn on Developer Mode again, as in step 2, and this time the menu stays.[^anthropic-3p-in-app]
- **To go back to your Claude account,** choose the Anthropic sign-in on the start screen.[^anthropic-3p-install] With Ollama, disconnect Claude in Ollama's Apps, or quit Ollama.[^ollama-claude-desktop]

[^anthropic-3p-overview]: Overview, Claude Desktop on third-party platforms, Claude documentation.
[^anthropic-3p-features]: Features, Claude Desktop on third-party platforms, Claude documentation.
[^anthropic-3p-install]: Installation and setup, Claude Desktop on third-party platforms, Claude documentation.
[^anthropic-3p-gateway]: Deploy Claude Desktop on 3P with an LLM gateway, Claude documentation.
[^anthropic-3p-in-app]: In-app configuration, Claude Desktop on third-party platforms, Claude documentation.
[^openrouter-claude-desktop]: Claude Desktop integration, OpenRouter documentation.
[^openrouter-providers]: Provider selection, OpenRouter documentation.
[^deepseek-api-docs]: Your first API call, DeepSeek API documentation.
[^deepseek-pricing]: Models & Pricing, DeepSeek API documentation.
[^deepseek-anthropic-api]: Anthropic API, DeepSeek API documentation.
[^ollama-claude-desktop]: Use Ollama models in Claude on macOS, Ollama documentation.
[^ollama-pricing]: Pricing, Ollama.


