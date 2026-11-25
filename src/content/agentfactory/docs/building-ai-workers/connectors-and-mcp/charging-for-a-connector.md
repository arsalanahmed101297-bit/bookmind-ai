# 17.9 Charging for a connector (/building-ai-workers/connectors-and-mcp/charging-for-a-connector)

---
type: Document
title: "17.9 Charging for a connector"
description: "Going further. Value on the server, a plan check on every call, and payment outside the AI."
status: stable
order: 317.09
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:38Z
chapter: "17"
part: III
expert_status: co-build
concepts: [ "17.9" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-15T11:19:38Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A gym checks your card at the door on every visit. You pay at the front desk, not on the treadmill. Day passes, monthly plans and company memberships are all read by the same card reader.

**What you will learn.** How a connector you sell checks who has paid, on every call.

**Why it matters.** The server is the one place a customer cannot read or change, so that is where value and charging belong.

*Going further. You can build and put online Brightline's connector without this section. Read it if you plan to sell a connector.*

**One request, start to finish.** Suppose you, the builder, later sell a connector of your own to small accounting firms: a policy checker that answers questions about a firm's own payment policies, with citations. It uses the same design as Brightline's connector. Each firm has its own access key, or, after [Chapter 18](../securing-connectors/overview.md), its own sign-in. Two firms call it on the same morning:

1. **Firm A has paid.** Its request carries its key. The server checks the key, then checks that Firm A's plan is active. Both pass, so the tool runs.
2. **Firm B's plan has lapsed.** Its key is still valid, so the server knows which firm it is. But the plan check fails. The tool's work is skipped. The server still answers the call in the usual way, as a tool error: "Your firm has no active plan. See policy-checker.example/plans". It is a tool error on purpose, not an HTTP 403, so the model reads it and can give the person the link.

Firm B renews on that web page, not in the chat. Its next request passes.

### Where does a connector's value live?

On the server. Anything valuable, such as your rules and methods, your data, or a model your server calls, belongs on a server you control. A plugin is a poor place for it, because everyone who installs a plugin can read its files ([Chapter 16](../skills-and-plugins/installing-is-a-trust-decision.md)). The server is also where you charge. Five principles:

1. **The server checks who has paid, on every call.** After the key check, it checks the customer's **entitlement**: does this customer have the right to this tool today? Never put that check in a skill or a description, which a customer can read or change.
2. **Payment happens outside the AI.** The customer pays on a payment page run by a card processor or a local payment gateway. The payment service tells your server when a firm pays, by sending a web request to an address on your server. The server writes the firm's plan, and each customer's call count, to a database outside the server ([Chapter 19](../business-data-and-retrieval/a-database-behind-a-stateless-server.md)), and every copy reads them from there. Stateless means no copy keeps anything in its own memory. It does not mean nothing is stored anywhere. The connector and the chat never see card details.
3. **Pick a price, then count.** Per person, per company, a monthly plan, or per use. Charging per use needs **metering**: the server counts each customer's calls, and limits how fast any one customer can call, so one customer cannot run up costs for others or for you. If the server calls a model itself, each call costs you, so count it and build it into your price.
4. **Return the answer, not the recipe.** A tool returns its result, not the rules or data behind it.
5. **One server, two ways in.** Some customers use the connector in their AI app. Others want buttons. You can add a simple web app on the same server, or give the connector its own screens inside the chat (Chapter 20). Every way in goes through the same plan check.

### What else does selling a connector take?

Selling a connector also means helping each customer set it up, get approval from their company's IT administrator, and receive updates. Because the server is online, one update reaches every customer at once, which is one more reason to keep value there.

**At work.** Brightline's own connector is internal and not sold. The builder's policy checker reuses its design: real sign-in (Chapter 18), a plan check on every call against the plan records, a limit per firm, and the plans-page error above.

**The operating rule:** keep anything valuable on the server, check the customer's plan on every call after the key, take payment outside the AI, and answer a customer without a plan with a link to your plans page.

![Your server in the middle, with two checks on every call: first the key check, then the plan check. On the left, a customer reaches it two ways: conversation in any AI app, or a web app with buttons. At the top right, a payment page outside the AI records the plan the plan check reads. A failed plan check returns a short error with a link to a plans page. Below, a meter counts calls per customer, with a rate limit.](img/charging.png)

*Figure 17.16. Two checks on every call: the key, then the plan. Payment happens outside the AI, and value stays on the server.*


