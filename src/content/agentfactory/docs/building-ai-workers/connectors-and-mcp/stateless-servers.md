# 17.4 Stateless servers (/building-ai-workers/connectors-and-mcp/stateless-servers)

---
type: Document
title: "17.4 Stateless servers"
description: "Any copy of the server can answer any request, and a sealed handle carries what must cross calls."
status: stable
order: 317.04
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
concepts: [ "17.4" ]
last_verified: 2026-11-01
generated:
  at: 2026-11-15T11:19:38Z
  by: esl-rewrite/1.2.0+ksor.1
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** At a bakery with a ticket machine, your number is printed on your ticket, not kept in one clerk's head. Any clerk can serve you. When one clerk goes on break, nothing is lost.

**What you will learn.** How a connector keeps working when the service that runs it starts and stops it at will.

**Why it matters.** A connector that keeps notes in its own memory can pass its own tests and still fail online.

**One request, start to finish.** Ana asks for all open invoices. There are 13, and the connector returns five at a time, so the model asks for three pages, one call each, and the app sends them. Returning a few at a time keeps each answer short. With 500 open invoices, one reply would flood the model.

Online, Brightline's connector may run as several **copies** at once. The hosting service starts and stops copies by itself as requests come in, so many requests can be answered together and one failed copy changes nothing. So page one may be answered by copy A, and page two by copy B. Copy B never saw the first call. How does it know where page two starts?

### What does stateless mean?

A **stateless** server keeps nothing in its own memory between requests. Everything it needs must arrive with the request, or come from a shared place every copy can read. In this lab that place is the data files it was set up with. Later it is a database. Then any copy can answer any request, and copies can be added, restarted or replaced without breaking anything.

### How does another copy know where page two starts?

From a sealed ticket. With page one, the server also returns a small value called a **handle**, like the bakery ticket. It says, in effect: "Next page starts at the sixth invoice, for this caller, valid for 15 minutes." The caller is whoever sent the request. For now the server knows the caller only by the access key the request carries ([17.8](securing-a-remote-server.md)). The model copies the handle into its next call to the same tool, as an input named `page`, and the app sends that call. Whichever copy receives it continues from there. Because the model and the person can see the handle, it must be sealed.

### What keeps a handle safe?

The server seals the handle with the **handle key**, a secret that only the server's copies hold. It is not the access key that AI apps send ([17.8](securing-a-remote-server.md)). Sealing means encrypting: the server scrambles the handle with the handle key, using a standard method that also detects any change. Sealing does two things: nobody else can read what is inside, and any change makes the handle fail to open. Without the seal, a caller could edit the handle to reach a list they may not see. Every copy holds the same handle key, because the hosting service gives it to each copy when it starts ([17.8](securing-a-remote-server.md)). So every copy can open every handle.

The server refuses three kinds of handle: one that was changed, one that belongs to another caller, and one more than 15 minutes old. Each refusal says to start again from page one.

### Can a long list still skip or repeat an invoice?

Yes, when the data changes between pages. A handle remembers a position in the list, such as "start at the sixth invoice". It does not remember which invoices you already saw. With live data the list can shift. If an earlier invoice is paid between pages, the next page skips one. If a new invoice arrives, the next page repeats one. The 15-minute limit makes that less likely, but it can still happen. When a list must be complete, such as before a payment run, ask for it again from page one. In the lab this cannot happen, because the data files are packed in with the code and change only when you put new code online, called a deploy ([17.8](securing-a-remote-server.md)).

### What does the caller check do in this lab?

Not much yet. In this lab every AI app sends the same access key, so the server sees them all as one caller, and the caller check cannot catch anything yet. In [Chapter 18](../securing-connectors/overview.md) each person signs in and each company has its own data. Then the seal and the caller check keep one company out of another's list. In [Chapter 20](../mcp-apps/who-a-click-acts-as.md), a *Next page* button on the connector's own screen brings this same handle back.

### How do all the copies give the same answer?

The connector decides which data files it reads when it starts. A request names an invoice or a vendor, never a file. So every copy reads the same files and gives the same answer, and no request can trick the connector into opening another file on the machine, such as a password file.

**At work.** A coding agent writes the first draft of paging ([17.6](specify-generate-verify.md) shows how). It keeps "where the next page starts" in the server's own short-term memory. Its own tests pass, because they talk to one copy. Then a test that starts two copies of the connector ([17.6](specify-generate-verify.md) builds it) sends page two to the second copy. It gets page one again. The builder gives the agent the failing test, and the agent moves "where the next page starts" into the handle.

**The operating rule:** answer every request from the request itself and the data the server was set up with. When something must carry over to the next call, put it in a sealed handle that the caller brings back.

![Two copies of one connector behind one address. The AI app makes three calls. Call 1 goes to copy A and returns page 1 and a sealed handle. Call 2 carries the handle to copy B, which opens it and returns page 2 and a new handle. Call 3 carries that handle to copy A sixteen minutes later and gets an error: this page handle has expired, call again without page. Neither copy has any memory box.](img/stateless.png)

*Figure 17.9. The handle carries what must carry over, so any copy can serve any call. An expired handle gets an error that says how to start again.*


