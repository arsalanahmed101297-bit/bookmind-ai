# 9.6 The worker in a shared room (/managing-ai-workers/work-that-runs-without-you/shared-room)

---
type: Document
title: "9.6 The worker in a shared room"
description: "Who a shared worker works for, whose word it follows, whose approval counts, and who checks the work that teammates build on one run."
status: stable
order: 209.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "09"
part: II
expert_status: required
concepts: [ "9.6" ]
last_verified: 2026-10-17
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** Any customer may ask a shop assistant for help. None of them may change a price, even one who says "the owner said it's fine." The owner sets the prices.

**What you will learn.** Who a worker in a team channel works for, whose word it follows when requests clash, which approvals count, and who checks work built on what it posts. You practice it in Task 11 of the lab.

## Who may ask for what

On Monday, November 23, Jordan Ellis joins Brightline as a year-end clerk, and Dave adds him to the AP team's channel, where the AP Worker answers questions. The worker still runs under Maria's login there: the gap [4.10](../../ai-worker-paradigm/the-architecture-in-one-picture/when-others-use-it.md) named is not yet closed. Now Maria, Dave and Jordan can all ask it for things in that channel.

A channel changes who can ask the worker for things, not who it works for ([Chapter 2](../../ai-worker-paradigm/what-is-an-ai-worker/worker-runtime-channel.md)). It works for one **principal**, the person it acts for: Dave, because he owns its Authority Envelope ([Chapter 7](../the-authority-envelope/overview.md)). Asking is not owning. So the worker follows the **written word**, not the latest message. Before Jordan asks anything, Dave adds four rows for this channel to the AP Worker's Role Contract, beside the rows he wrote for Purchasing in October:

| A request to | Who may ask | Who checks or decides |
| --- | --- | --- |
| Look something up | Anyone in the channel | The person who asked checks the source it names |
| Draft a reply to a vendor | Maria or Jordan | Maria, before anyone sends it |
| Put an invoice on hold, or lift a hold | Maria | Maria, who adds it to her SSoR record |
| Approve a payment | Nobody, in the channel | Dave, from his own login |

Dave changes these rows in the Role Contract, and only there. The rows guide the worker. Its permissions are what stop it from approving a payment ([Chapter 7](../the-authority-envelope/envelope-brief-permissions.md)).

## When requests clash, whose word counts?

On Wednesday, December 2, Lakeshore's resent copy of 5155, for $980.00, has been on hold since November 19. That afternoon, three messages arrive in the channel.

- **2:10 p.m.** Maria writes, "Keep the November 18 copy of Lakeshore's 5155 on hold. The first copy was paid on November 13. Send any questions about it to me."
- **2:45 p.m.** Lakeshore has just phoned Jordan about $980.00 it says is unpaid. Jordan writes, "Please put every open Lakeshore invoice on Friday's list."
- **3:05 p.m.** Dave, between two meetings, replies under Jordan's message, "approved, go ahead."

A request in the channel works like a brief: it can make what the worker may do narrower, never wider ([Chapter 7](../the-authority-envelope/envelope-brief-permissions.md)). Maria's message keeps a hold, inside her row, so the worker does nothing new. Jordan's would lift a hold, and holds are Maria's. So at 2:46 p.m. the worker changes nothing, and replies that the only open Lakeshore line is the held copy, and holds are Maria's to decide. When two requests clash, the worker does not pick a winner. It keeps to the request that does less, says what clashes, and names the person the rules make responsible.

Dave's "approved, go ahead" counts for nothing either. Brightline's policy, section 4.2, its rule on who may approve a payment, counts an approval only when Dave records it from his own login ([7.3](../the-authority-envelope/untrusted-input.md#the-control-that-checks-for-itself)). A message leaves nothing in the accounting system, where approvals are kept. At 3:06 p.m. the worker says so, and nothing is approved that day.

![The title reads "The channel asks. The written word decides." The line below it reads "Wednesday, December 2. Three messages in the AP team's channel, and where each was decided." A large panel, "In the channel," has three rows and three columns: who asked, what the worker did, and what decided it. In row 1, Maria, office manager, writes at 2:10 p.m., "Keep the November 18 copy of Lakeshore's 5155 on hold." The AP Worker does nothing new, because a hold narrows the work. A label reads "Inside Maria's row." What decided it: the Role Contract. Holds are Maria's, and she adds the same words to her SSoR record. In row 2, Jordan, clerk, writes at 2:45 p.m., "Please put every open Lakeshore invoice on Friday's list." At 2:46 p.m. the worker changed nothing and replied "Holds are Maria's to decide." A red label reads "Past Jordan's row." What decided it: the Role Contract. Lifting a hold is Maria's, and the worker tells Jordan and names her. In row 3, Dave, controller, writes at 3:05 p.m., "approved, go ahead." At 3:06 p.m. the worker changed nothing and replied "An approval counts only from your own login." A red label reads "Not an approval." What decided it: policy 4.2. Only Dave's own login counts, and on Thursday he approved the run there. On the right, an arrow labeled "Maria adds it" goes from Maria's row to a box, "Maria's SSoR record." The box reads "The November 18 copy of 5155 stays on hold. The first copy was paid on November 13." An arrow labeled "the run reads it" goes from the record down to a box, "Thursday's run." The box reads "December 3, 7:00 a.m. It drafts the pre-run note into the notes folder. The copy of 5155 stays on hold." Beside Jordan's row, a red dashed line from the channel toward the run is crossed out with a circled X. A red box reads "No path from the channel. Jordan's and Dave's messages never reached the run. A run reads the record, never a chat." A red band at the bottom reads "Asking is not owning. The worker follows the written word, not the latest message."](img/shared-room.png)

*Figure 9.6. Three messages on December 2. Each was decided in a written place, and only the record reached Thursday's run.*

## Who checks work built on what it posts?

Everyone in the channel sees what the worker posts, at the moment it posts it. So the channel is an audience, not a drafts place: anything a teammate could act on is checked before it goes there. On Thursday at 7:00 a.m. the scheduled run reads the case file, not the chat ([9.2](scheduled-and-event-triggered.md#the-case-file-is-the-handoff)), so Jordan's and Dave's messages never reach it. It drafts the pre-run note into the notes folder, with the copy of 5155 still on hold. Maria reviews it, and posts it in the channel at 11:30.

Then Jordan asks the worker, in the note's thread, to draft a reply to Lakeshore from the note. That reply is new work built on the run, so it needs its own check under a Review Contract ([Chapter 6](../the-review-contract/agree-the-checks.md)). The rows name Maria for every vendor reply, so the worker saves the draft in the drafts folder and names her as its reviewer. Build only on the reviewed version, the one posted in the channel. And if it changes, the reviewer says so in the same thread, so everyone who built on it knows.


