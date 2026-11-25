# 20.17 Charging and the screen (/building-ai-workers/mcp-apps/charging-and-the-screen)

---
type: Document
title: "20.17 Charging and the screen"
description: "Going further. The check of who has paid stays on the connector, on every call, and no screen holds a checkout."
status: stable
order: 320.17
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.17" ]
last_verified: 2026-11-15
sources:
  - id: claude-interactive-connectors
    title: "Use interactive connectors in Claude (Claude Help Center, verified 2026-11-15)"
    resource: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Going further. You can build Brightline's screen without this section. Read it if you plan to sell a connector with screens.*

**In everyday life.** A gym's new app shows your classes. Your card is still checked at the door.

**What you will learn.** Where the check of who has paid goes when a connector has screens.

**Why it matters.** A screen makes a product easier to sell. It must not become a way around paying.

**One request, start to finish.** A firm whose plan has ended opens the screen.

1. **The page asks for the first page of invoices.**
2. **The connector checks the token, then the firm's plan,** as in [17.9](../connectors-and-mcp/charging-for-a-connector.md). The plan check fails.
3. **The tool returns its usual short error,** with a link to the plans page.
4. **The page shows that message and link.** It shows no checkout.

### Where does the plan check go?

On the connector, on every call, after the token check, exactly as in 17.9. A screen's calls take the same path, so they get the same check (20.4). Nothing in the page decides who has paid, because the page can be read by anyone who uses it.

Payment stays on your own website. As of November 15, 2026, Claude does not support purchases through interactive connectors from other companies.[^claude-interactive-connectors] ChatGPT's rules on selling inside an app are in [How it works on Claude and on OpenAI](../../from-skills-to-income/how-it-works-on-claude-and-openai.md).

**The operating rule:** check the plan on the connector, on every call, and send a customer without one to your plans page, never to a checkout on the screen.

[^claude-interactive-connectors]: Use interactive connectors in Claude, Claude Help Center, accessed 15 November 2026.


