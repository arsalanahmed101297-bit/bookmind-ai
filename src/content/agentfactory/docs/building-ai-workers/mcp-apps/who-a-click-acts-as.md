# 20.4 Who a click acts as (/building-ai-workers/mcp-apps/who-a-click-acts-as)

---
type: Document
title: "20.4 Who a click acts as"
description: "A button press acts as the signed-in person, for the company in their token, because the AI app sends it with their token and the connector checks it like any call."
status: stable
order: 320.04
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-21T00:02:27Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.4" ]
last_verified: 2026-11-15
generated:
  at: 2026-11-21T00:02:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** In the hotel, the menu board cannot charge anyone. When a guest points at a dish, the clerk writes the order on that guest's room, after checking the room key. A board that tried to order for room 412 from the lobby would fail, because the clerk checks the key of the guest standing there.

**What you will learn.** Whose authority a button press carries, and why the connector checks it the same way as every other call.

**Why it matters.** This is the chapter's question. If a click carried more than the person's own rights, a screen would be a way around sign-in. If it carried less, the screen would break for people who are allowed.

**One request, start to finish.** At 10:16, Luis presses *Next page*.

1. **The page holds a handle,** the sealed ticket from [17.4](../connectors-and-mcp/stateless-servers.md) that says where page two starts. Since [18.12](../securing-connectors/what-else-carries-the-company.md), rule 4, it also names the company and the person it was made for. It holds no token, no key and no password.
2. **The page asks the AI app** to call `next_invoice_page` with that handle.
3. **The AI app checks the request.** Is this a tool a page may call? Does it come from this connector's page? It may also ask Luis first.
4. **The AI app sends the call** on its own connection to the connector, with the sign-in token Luis gave it in [Chapter 18](../securing-connectors/overview.md). The token was made for this connector's address only ([18.6](../securing-connectors/a-token-made-for-one-door.md)).
5. **The connector checks it like any call.** The token is valid and carries `ap:read` ([18.7](../securing-connectors/permission-per-tool.md)). The company is Cedar Ridge, taken from the token and nowhere else, on one order slip for this request ([18.11](../securing-connectors/one-order-slip-per-request.md)). The connector sets Cedar Ridge for one transaction ([19.9](../business-data-and-retrieval/one-company-per-transaction.md)). It opens the handle: made for Luis at Cedar Ridge, and less than 15 minutes old, the most a handle lasts ([17.4](../connectors-and-mcp/stateless-servers.md)). It returns rows 6 to 10, and writes the same audit line as for any call: company, person, app, tool and outcome ([18.16](../securing-connectors/watching-who-did-what.md)).

The model chose nothing. The call still acted as Luis, for Cedar Ridge, with Luis's permissions, because those came from his token, not from the page.

### Can the connector tell a click from the model's choice?

It should not need to. The call it receives carries the same token either way, and nothing in it is a promise that a person clicked. So the connector asks the same questions of every call, and a click gets no more and no less than the person behind it.

### Could the page show Luis one of Brightline's invoices?

Only by getting past the connector's checks, and it cannot. Suppose the page were changed to ask for Brightline's INV-8301. The call still goes out with Luis's token, which names Cedar Ridge. The database, set to Cedar Ridge for this transaction, answers "not found", exactly as it would if Luis had typed the request. Row-level security ([19.8](../business-data-and-retrieval/row-level-security.md)) hides Brightline's rows, and every "not found" is the same, so the reply does not even say the invoice exists ([19.10](../business-data-and-retrieval/where-the-guarantee-stops.md)). A handle copied from Ana's screen fails too, because a handle is sealed for the caller who received it.

Priya Shah, the outside bookkeeper, belongs to both companies. Signed in for Cedar Ridge, her screen shows Cedar Ridge's rows only. Her token names the company she picked at sign-in ([18.10](../securing-connectors/where-the-tenant-comes-from.md)). To see Brightline's, she signs in for Brightline, and gets a new token.

![Two callers, one door. On the left, two boxes, the model's call, chosen by the model, and the page's call, a button press. Both arrows meet at the AI app, which adds the person's token. From there one arrow passes through four checks in a row. Token, valid and made for this door. Scope, the role allows it. Company, from the token only, in gold. Handle, made for this person. A green tick ends the row. Above, a note says the same four checks run in the same order for every call. Below, a note says the door does not ask who pressed what, and a click gets no more and no less than the person behind it.](img/chapter-20-two-callers.png)

*Figure 20.6. Two callers, one door. Every call meets the same four checks, whoever pressed what.*

### What if the model edits the screen?

The same rule holds. With app tools ([20.3](how-an-mcp-app-works.md)), the model can change what is on the screen, such as filling in a field. That change stays in the page until something saves it. Saving is a call to the connector, sent by the AI app with the person's token. So whether Luis types, clicks or lets the model edit, the connector checks the same token, company and scope.

### Is a click an approval?

No. A click is a person's act, but not an approval. Every Brightline tool reads, so here it does not matter. When Chapter 28 adds the first tool that acts, an approval is a separate, recorded step that the connector checks, not a button that sent a call.

**At work.** In Lab 20, Task 5, the screen matrix runs these clicks as tests. Row C1 is Luis's next page. Row C3 has the page ask for INV-8301 and expects "not found". Row C5 replays Ana's handle under Luis's token and expects a refusal that says to start again from page one.

**The operating rule:** a click acts as the person who is signed in, for the company in their token, with the scopes their role gives, and never more. Check every call the same way, wherever it started.


