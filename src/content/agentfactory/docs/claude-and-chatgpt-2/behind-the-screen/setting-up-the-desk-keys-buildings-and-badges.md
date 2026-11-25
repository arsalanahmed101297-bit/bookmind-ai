# Setting up the desk: keys, buildings and badges (/claude-and-chatgpt-2/behind-the-screen/setting-up-the-desk-keys-buildings-and-badges)

---
type: Document
title: "Setting up the desk: keys, buildings and badges"
description: "Three newer Claude features that shape the borrowed desk itself: keys held at reception, a desk inside your own building, and a team worker with its own badge."
status: stable
order: 0.37
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Setting up the desk" ]
last_verified: 2026-11-09
sources:
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: claude-tag
    title: "Work with Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/overview
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

So far, the borrowed desk has been the same for everyone: a temporary computer on the company's servers. Claude now lets a company shape that desk in three ways. An administrator sets them up, so you need only know what each one protects. [Cloud environments and self-hosted runners](../architecture/cloud-environments-and-self-hosted-runners.md) gives the details.

![Keys, buildings and badges: how the desk is set up decides what it can reach and who it acts as. Three panels. Keys, network secrets: the borrowed desk never sees the key, and reception, the proxy, adds the key on the way out. Building, where the desk stands: Anthropic's building is the usual cloud desk, and your own building means self-hosted, where files and secrets stay on your machines, while the conversation still goes to Anthropic. Badge, Claude Tag in Slack: the team tags Claude in a shared channel, and it works under its own service accounts, not as you, on Team and Enterprise plans in public beta. A band below says network secrets and Claude Tag keys stay at reception. The rule at the bottom: the setup decides what the desk can reach, and approvals still decide what it may do.](img/keys-buildings-and-badges.png)

## Keys held at reception

Reception already holds the keys to your connected apps ([the team](overview.md)). It can hold a second kind of key too: for a service the desk calls directly, not an app connector. A **network secret** is a password for another service, such as an API key (a password one program uses to call another). You store it once in the desk's settings, called the **cloud environment**. The desk never sees the key. Anthropic's proxy (reception: a gate that every request passes through on its way out) adds it to a request after the request leaves the desk, so "the key itself stays outside the VM".[^cloud-environments] For Brightline, the accounting system's key could be kept this way, as an illustration.

## A desk in your own building

Usually, the borrowed desk stands in Anthropic's building. With **self-hosted environments**, a company runs the same desks on its own computers, inside its own network. These are the company's servers, not the desk on your own computer from [Why the borrowed desk gets cleared](why-the-borrowed-desk-gets-cleared.md). The files, the work and the secrets stay on machines the company controls. The conversation itself still goes to Anthropic, and Anthropic says it "never connects into your network". This is in public beta, an early version open for testing, for Team and Enterprise plans, and it is off by default.[^self-hosted]

## A worker with its own badge

A project belongs to one person. **Claude Tag** puts Claude in a team's Slack channels (Slack is a team chat app), where anyone can tag `@Claude` and hand it work.[^claude-tag] In a channel, Claude acts with **its own service accounts**, "rather than as a specific user". A service account is an account made for a program, like a staff badge. An organization Owner or a Claude Tag admin sets up the keys for the team's tools, and they still stay at reception: the proxy adds them on the way out. In a one-to-one message with Claude, it works differently: Claude works as you, with your own connectors.[^claude-tag-identity] Claude Tag is in public beta for Team and Enterprise plans.[^claude-tag]


[^cloud-environments]: As verified on November 9, 2026, Anthropic says a network secret lets Claude "call that API from any session in the environment without seeing the key", and that the proxy adds it "after each request leaves the session's VM, so the key itself stays outside the VM". Configure cloud environments, Anthropic.
[^self-hosted]: As verified on November 9, 2026, Anthropic says self-hosted environments run cloud sessions "on infrastructure your organization operates", that "Repository checkouts, build artifacts, secrets, and any files a session creates or modifies stay on the machines you provision", that "The conversation itself, including prompts, responses, and tool results, goes to api.anthropic.com", and that "Anthropic never connects into your network". It is in public beta on Team and Enterprise plans and off by default. Self-hosted environments, Anthropic.
[^claude-tag]: As verified on November 9, 2026, Anthropic says "Anyone in a Slack channel can tag Claude into a problem and hand it work", that Claude Tag "is available on Team and Enterprise plans", and that "Claude Tag is in public beta." Work with Claude Tag, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026, Anthropic says that in channels "Claude acts with its own service accounts, rather than as a specific user", and that the credentials "are not placed in the sandbox". How agent identity works, Claude Tag, Anthropic.


