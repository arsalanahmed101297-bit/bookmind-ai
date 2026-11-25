# 17.1 MCP in one picture (/building-ai-workers/connectors-and-mcp/mcp-in-one-picture)

---
type: Document
title: "17.1 MCP in one picture"
description: "One question from Ana, in four steps: the app asks the connector what it can do, the model picks a tool, the app sends the call, and the model uses the reply."
status: stable
order: 317.01
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:38Z
chapter: "17"
part: III
expert_status: co-build
objectives:
  - { id: CCDV-F.D8.S2, label: direct }
concepts: [ "17.1" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-15T11:19:38Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A hotel guest wants dinner, a taxi and theater tickets. The guest does not call three businesses. The guest asks the concierge, and the concierge calls each one. In this chapter, Ana is the guest, her AI app is the concierge, and each connector is one of the businesses.

**What you will learn.** How an AI app asks a connector for help, step by step, and what travels between them.

**Why it matters.** Every later idea in this chapter, from tool descriptions to locked doors, acts on one of these steps.

**One request, start to finish.** Ana types into her AI app: "Is INV-8303 over its purchase order?" The model inside the app cannot open Brightline's files. But someone has added Brightline's connector to the app's settings, by its web address. So four things happen:

1. **The app asks the connector what it can do.** The connector answers with a short list of **tools**, the jobs it can do. Each tool has a name and a sentence or two about it, such as `get_purchase_order`: "Find the purchase order (PO) for an invoice ... and compare the amounts." The app usually asks once, when it starts, and keeps the list.
2. **The model reads the list and picks a tool.** It chooses `get_purchase_order`, with the input `INV-8303`. The model cannot send anything itself. It writes down which tool and which input, and the app does the sending.
3. **The app sends that call to the connector.** The connector reads Brightline's files and replies: PO-7003 is $12,000.00, INV-8303 is $12,900.00, so the invoice is $900.00 over.
4. **The model uses the reply to answer Ana.**

That is MCP. Concepts [17.2](a-tool-is-its-description.md) to [17.4](stateless-servers.md) look closer at these steps, and the rest of the chapter builds and protects the connector.

![A sequence of messages between four columns: Ana, the AI app, the model, and Brightline's connector. Ana asks the app whether INV-8303 is over its PO. Step 1: the app asks the connector what it can do, with tools/list, and gets four tools with descriptions. The app passes the question and the tool list to the model. Step 2: the model picks get_purchase_order with INV-8303. Step 3: the app sends tools/call to the connector, which replies that PO-7003 is $12,000.00, the invoice is $12,900.00, and it is $900.00 over. The app passes the reply to the model. Step 4: the model answers Ana. Steps 1 and 3 travel to the connector. Steps 2 and 4 stay between the app and its model.](img/four-steps.png)

*Figure 17.4. Ana's question in four steps. Only steps 1 and 3 reach the connector.*


### What does MCP call each part?

MCP gives each part a name. You will see these names in settings and error messages:

- The AI app is the **host**. It decides what the model sees, and which calls may run.
- Brightline's connector is an **MCP server**. A server is a program that waits for requests and answers them.
- Inside the app, one small piece handles each connector. MCP calls it a **client**. You rarely need the word. It matters only when an app's settings or errors list one connection per connector.

MCP has a few other features, such as files a server offers for reading. This chapter uses only tools.

### How do the messages travel?

Steps 2 and 4 are between the AI app and its model. MCP is not involved in them. Steps 1 and 3 are ordinary web requests. Web requests follow rules called **HTTP**. Each request and reply carries a few labeled lines, called **headers**, like the fields on an envelope, before its contents. Each reply also carries a **status code**, such as 200 for OK.

A `POST` is the kind of request a browser sends when you submit a form, and steps 1 and 3 are each a `POST`. (If you have called a web API, this will look familiar.) The contents of each request and reply are written in **JSON**, a standard text layout of labels and values, like a filled-in form.

### Where do the messages go?

Every message goes to one web address that ends in `/mcp`, such as `https://ap.example.com/mcp` once the connector is online. In the lab, the address is on your own computer: `http://127.0.0.1:8717/mcp`. `127.0.0.1` means "this computer", and `8717` is the numbered door, the **port**, the connector waits at. An address that starts with `https` scrambles each message on its way, so nobody in between can read it. The lab address uses plain `http`, because the message never leaves your computer.

### What does one message look like?

Step 3, trimmed to its essentials, is this message:

```json
{"method": "tools/call",
 "params": {"name": "get_purchase_order",
            "arguments": {"invoice_number": "INV-8303"}}}
```

And the connector's reply, also trimmed:

```json
{"result": {"content": [{"type": "text",
  "text": "{\"po_number\":\"PO-7003\",\"match\":\"over_po\",\"difference_cents\":90000, ...}"}]}}
```

The reply is a form with a form inside it. The outer form is for the AI app. The inner one, packed into a single piece of text, is the answer the model reads. The backslashes just mark quotation marks inside that text. You can skip the code and follow the prose. Amounts travel in whole cents, so `90000` means $900.00. Amounts with decimals, such as 0.10, can round wrongly inside a program. Whole cents cannot.

![One call, drawn as two cards. Left, the request for step 3. It is a POST to https://ap.example.com/mcp, then headers like the fields on an envelope, one with the access key and one saying the contents are JSON, then the contents in JSON, a tools/call for get_purchase_order with invoice_number INV-8303. Right, the reply: status code 200 OK, then the contents in JSON, a text block holding the answer with PO-7003, over_po and difference_cents 90000. A note: 90000 cents is $900.00, and other codes are 401, who are you, and 403, not from there.](img/web-request.png)

*Figure 17.5. A request is an envelope: an address, headers, and contents. The reply starts with a status code.*


Step 1 uses a message called `tools/list`. Before step 1, the app usually sends one more message, asking which revisions and features the connector supports. The connector does not need to remember that exchange, because every later message names its revision again. Step 3 uses `tools/call`. Every message carries everything the server needs, so the server does not need to remember the last one ([17.4](stateless-servers.md)). Field guide [F8](field-guide-connectors.md#f8-the-protocol-in-detail) has the full messages. It starts with "HTTP in one minute", which explains web requests from zero.

### Does every connector have a web address?

No. Some connectors work another way. The AI app starts them itself, as a program on your computer, and talks to them without any web address. This chapter builds the web kind. It has a web address, even while it runs on your own computer in the lab, and that lets many AI apps and many people reach it.

### What if the app and the connector use different revisions?

Every message also says which revision of MCP it uses. The trimmed samples above leave that out. If the AI app uses a revision the connector does not support, the connector answers with the revisions it does support, instead of failing in a confusing way. MCP also has optional extensions, such as screens inside the chat. Both sides must say they support one before it is used ([Chapter 20](../mcp-apps/what-an-mcp-extension-is.md)).

**At work.** Brightline's connector is one server, at one address, with four tools: find a vendor, list open invoices, match an invoice to its purchase order, and search the AP policies. Any AI app that speaks MCP can use it.

**The operating rule:** a web connector is one server at one address. The AI app asks what it can do, the model picks a tool, the app sends the call, and the server answers. Any app that speaks MCP can use it.

![One AI app and its connectors. On the left, the AI app, the host, with the model inside it, which picks a tool and answers Ana, and three clients. Client 1 sends tools/list, then tools/call, to the Brightline AP connector on the right, an MCP server at one address ending in /mcp, and the replies come back. The connector offers tools, and other features this chapter does not use. Clients 2 and 3 each reach another connector. Every message is an HTTP POST in JSON, naming revision 2026-07-28.](img/mcp-picture.png)

*Figure 17.6. One AI app, one client per connector, one address per connector. Every message names its revision.*


