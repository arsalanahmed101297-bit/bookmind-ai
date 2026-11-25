# 20.5 Hidden is not protected (/building-ai-workers/mcp-apps/hidden-is-not-protected)

---
type: Document
title: "20.5 Hidden is not protected"
description: "Tool visibility decides who is offered a tool, never who may call it, and a hidden button is not a permission."
status: stable
order: 320.05
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.5" ]
last_verified: 2026-11-15
sources:
  - id: mcp-apps-spec
    title: "MCP Apps specification, revision 2026-01-26 (Model Context Protocol, verified 2026-11-15)"
    resource: https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A staff door with no sign on it is still a door. Anyone who finds it can try to open it. What keeps them out is the lock, not the missing sign.

**What you will learn.** What tool visibility does, and the one thing it never does.

**Why it matters.** Builders often want to give the page "special" tools and think the model, or a person, cannot reach them. Anyone who holds a token can call any tool the connector offers.

**One request, start to finish.** The builder adds `next_invoice_page`, a tool only the page should use.

1. **The builder marks it for the page only.** Its visibility is `["app"]`.
2. **The AI app leaves it out of the model's tool list.** The model never sees it, so it never picks it by mistake.
3. **A tester sends it straight to the connector** from a script, with Marco's token. The AI app is not involved at all.
4. **The connector checks the call like any other:** a valid token, `ap:read`, Cedar Ridge, a handle made for Marco. It answers, because Marco may read Cedar Ridge's invoices. Visibility changed nothing about that.

### What does visibility do?

Each tool has a visibility setting (`_meta.ui.visibility`). It says whether the tool is offered to the model, callable by the page, or both. The values are `"model"` and `"app"`, and a tool without the setting is both. An AI app must leave a tool without `"model"` out of the model's list, and must refuse a page's call to a tool without `"app"`.[^mcp-apps-spec] That keeps the model's list short and stops the page from calling tools it was not built for.

It decides who is *offered* a tool. It never decides who *may* call it. That is the connector's job, on every call.

![Hidden is not protected. On the left, three callers, the model, the page and a script with a token. A red-orange curtain, labeled visibility page only, stops the model's arrow, marked with a cross. The page's arrow reaches a box for next_invoice_page, marked for the page only. The script's dashed arrow walks around the curtain to the same box. From there one arrow goes to the connector's door, in gold, which checks the token, the scope and the company on every call. A note says a hidden button is not a permission either, and someone whose role does not include vendor details still gets 403 for Vendor details. Below, visibility decides who is offered a tool, never who may call it, and the door is the security.](img/chapter-20-hidden-not-protected.png)

*Figure 20.7. Hidden is not protected. Visibility decides who is offered a tool. The connector's checks decide who may call it.*

### Is a hidden button a permission?

No. In [Lab 18](../securing-connectors/lab.md), Task 11, Marco became an `auditor` ([18.14](../securing-connectors/a-companys-life.md)). His role gives `ap:read`, not `ap:vendors.read`. Suppose his screen was opened before the change and still shows *Vendor details*. At 10:20 he presses it on V102.

1. The page asks the AI app to call `find_vendor`.
2. The connector sees a token without `ap:vendors.read` and answers 403, naming the scope the call needs ([18.7](../securing-connectors/permission-per-tool.md)).
3. **The page shows the refusal plainly:** "Your role does not include vendor details." It does not show an empty box, and it does not retry.

A page may hide the button for roles that cannot use it. That is polite, but it is not security. The 403 is the security, and it is Chapter 18's check, unchanged. Chapter 18's sign-in matrix already proves it for a direct call. The screen matrix proves it for a click.

**At work.** In Lab 20, Task 5, row C2 presses *Vendor details* as Marco and expects the 403 and its message. Row C6 calls `next_invoice_page` from a script, with no AI app at all, and expects it to be checked like any other call.

**The operating rule:** use visibility to keep the model's tool list short and the page's calls narrow. Put every rule about who may do what in the connector, because anyone with a token can call any tool.

[^mcp-apps-spec]: MCP Apps specification, revision 2026-01-26, Model Context Protocol, accessed 15 November 2026.


