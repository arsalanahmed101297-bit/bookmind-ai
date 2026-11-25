# 10.4 Before it leaves: who signs, and who can open it (/managing-ai-workers/governance-and-responsible-use/when-a-human-must-sign)

---
type: Document
title: "10.4 Before it leaves: who signs, and who can open it"
description: "Which outputs a person must sign, how to name who checks what and when, and how to stop a worker from sending what only a person may release, then why a result can go out without anyone sending it, and how to decide who may open it, keep it from changing and take the access back."
status: stable
order: 210.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-23T17:13:29Z
chapter: "10"
part: II
expert_status: required
concepts: [ "10.4" ]
last_verified: 2026-10-08
sources:
  - id: v1-governance
    title: "Governance, Risk & Responsible Use: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/governance-risk-responsible-use-crash-course
  - id: v1-code-you-never-write
    title: "Code You Never Write: A Crash Course (Panaversity, first edition, verified 2026-10-08)"
    resource: https://agentfactory1.panaversity.org/docs/code-you-never-write-crash-course
generated:
  at: 2026-11-23T17:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A school sends home a permission slip, a form for a parent to sign. A parent's signature means the parent read it. If the child signs the parent's name, the school has no permission, no matter how neat the signature is.

**What you will learn.** Which work a person must sign, how to name who checks what and when, and how to make sure only the approved result reaches only the approved people, for only as long as needed. You practice it in Tasks 8 and 10 of the lab.

**Friday, December 11, 1:00 p.m.** Dave reads the schedule the auditors received on December 3, for the first time.

## Who signs

A signature says that a named person read this, checked what it is based on, and takes responsibility for it. An AI Worker can prepare the work. It cannot sign, because **accountability does not move to a tool**. The auditors relied on Dave's name, and nothing marked the schedule as one only Dave could sign. Sending it unread under his name was a lapse in deployment diligence: standing behind what you use.

### What does a real check name?

"A human will review it" is an intention, not a control. A **defined gate**, a check that must happen before work goes out, names three things:

- *Who* reviews: the person who holds the responsibility.
- *What* they check: the specific risk the review exists to catch.
- *When* they check: before the output becomes hard to undo.

For the auditors' schedule: "Dave checks every balance against the register, including currency, before the schedule leaves Brightline, and sends it himself." If you cannot write the gate that way, the workflow is not ready.[^v1-governance]

### Which outputs must a person sign?

A person must sign, using their own identity, when an output:

- commits the company to money above a set limit, such as $5,000.00 at Brightline
- changes an official record, such as a vendor's bank details
- goes to auditors, regulators, tax authorities or courts
- states balances, amounts owed or a position in a dispute to someone outside the company
- decides something about a person: hiring, pay, discipline, access
- is a legal commitment
- is in a high-risk area under an AI vendor's usage policy ([10.1](appropriate-use.md#the-outer-edge))

You can trust a signature only as much as the review behind it: the source in front of the reviewer, time, a named risk to look for, and the authority to reject.[^v1-governance] It is fine not to read every line when checks were built first, such as totals checked against the source.[^v1-code-you-never-write] It is never fine just because of a deadline.

![The title reads "Make human review an enforced gate." The line below it reads "Name who checks what, and when. Then prevent unapproved release." A panel, "A defined gate," for Brightline's schedule for the auditors, has three rows. Who: Dave, the controller, using his own identity. What: every balance against the source register, including currency. When: before the schedule is released to the auditors. Below them, a line reads "Brightline's baseline: Dave sends it himself, the worker cannot send." A second panel, "An intention is not a gate," crosses out four phrases. They are "A human will review it," "Someone will check," "It gets looked at" and "With appropriate oversight." Its note reads "No named reviewer, specific check or release condition." Below, "Approval must control release" shows three steps. Step 1, prepare: the worker drafts the output. Step 2, approve: the signer approves the exact output and recipient. Step 3, release: only the approved version goes to the approved recipient. A warning under steps 2 and 3 reads "If the content or recipient changes, obtain approval again." A list, "Brightline requires named approval for," names six kinds of output. They are money above a threshold, submissions to auditors or officials, external balances or disputes, decisions about people, legal commitments, and high-risk uses under usage policy. A banner at the bottom reads "The worker prepares. The person remains accountable."](img/defined-gate.png)

*Figure 10.4. A defined gate for the auditors' schedule. The page's list adds a seventh kind of output: changing an official record, such as a vendor's bank details.*

## Release only what was approved

The gate ends in a release. The principle is: **the accountable person approves the exact output before it is released, and nothing can release it unapproved, change it after approval, or show it to anyone it was not approved for.** There are two ways to build that.

- **Baseline.** The worker cannot send at all. It drafts, and the signer sends.[^v1-code-you-never-write] Brightline uses this: Maria reads each vendor reply and sends it herself.
- **Advanced.** An approval step releases only the exact approved output, to the approved recipient. The system enforces it, and it is tested before anyone relies on it.

"Needs approval" on a send tool is a gate only when the person who clicks approve is the person who must sign. When Maria approves a send in her session, that is not Dave signing the schedule. And the tool controls on both AI vendors work for each tool, not for each recipient: blocking send blocks every send ([10.6](both-ai-vendors.md#where-to-set-the-policy-in-your-app), step 3). So a rule such as "vendors yes, auditors never" needs the advanced way.

An approved result must also stay the one that was approved. A link to a working document hands over a place, not a copy. If Dave approved the corrected schedule and sent the auditors a link to the working document, Maria's connector could still edit it, and the auditors could read a version Dave never approved. So an approved result leaves as a fixed copy, such as a PDF, or as a share nobody can edit.

## Who can open the result

A result also leaves when more people can open it, with nobody pressing send. Monday, December 14, the first day the worker ran again, shows why Dave's terms cover that side too.

### What happened on Monday, December 14?

Maria ran the duplicate check again with the redacted file ([10.2](can-this-data-go-in.md)), in her own chat in the company's AI workspace. At 9:20 a.m. the worker returned nine candidate pairs. At 9:35 it saved them, through Maria's connector, "where Dave can see it": the shared drive's Year-end folder, which the whole finance team can open. At 9:40 Maria saved a copy in the AP shared folder, which Jordan can open. At 10:05 Dave could not open the drive on his phone, so she set the link to "anyone with the link" and texted it. At 11:30 Dave asked, "Who can open this?" Nothing had been sent, yet three audiences could open it.

### What test does a result get before it is shared?

A result goes out when its **audience**, the people who can open it, grows. So it gets the same test as data going in:

1. **Classify the result.** A result carries the highest tier of what went into it, unless the task removed that data. Maria's December 6 results listed full tax IDs, so they were red. This list kept only the last four digits, so it is yellow.
2. **Name its audience,** with the data's owner. Dave decided on two people, Maria and himself, because they confirm each pair.
3. **Check who can open it now.** A file takes the sharing of the folder it is saved in, including people added later. A link open to "anyone with the link" has no list of names, and can be forwarded. And a worker saves through a connector with the access of the person who connected it, so the list was Maria's file, and she answers for it. A sent folder shows none of this. Only the places' own settings do.
4. **Check that it cannot change** after approval (above).
5. **Give each share an end, and check it ended.** Jordan still needed both folders for the January close, so the list moved, not Jordan. Maria moved it to a folder only she and Dave can open, set the link back to invited people only, and removed the copy from the AP folder. At 11:50 Jordan tried the old link from his own account, and it did not open. Removing a link does not reach a copy someone already downloaded, which is why the audience is decided before the share. Maria wrote the audience and its end in the workflow's Governance Record ([10.5](organizational-policy.md#the-governance-record)).

![The title reads "Nobody sent it. Who can open it?" The line below it reads "Monday, December 14. By 11:30 a.m., Maria's list had gone out three times. No one had pressed send." On the left, a card, "The duplicate list," reads "Nine candidate pairs, returned at 9:20 a.m. in Maria's own chat." A label reads "Yellow," and the card reads "Names, addresses, and the last four digits of the tax ID." At the bottom of the card, "The AP inbox: nothing had been sent." Three arrows go out from the card to three rows, under two headings, "How its audience grew" and "Who could open it." In row 1, at 9:35 a.m., the list was saved by a connector, as Maria. "Save it where Dave can see it." The file went into the shared drive's Year-end folder and took its sharing. Through the folder, the whole finance team could open it. In row 2, at 9:40 a.m., a copy was saved in the AP shared folder, with the AP Worker's results. A folder gives its files to everyone it is shared with, even those added later. Through the shared folder, everyone it is shared with could open it, Jordan included. Row 3 is in red. At 10:05 a.m., it got a link for anyone who has it. Dave could not open the drive on his phone, so Maria set the link to "anyone with the link" and texted it. Through the link, anyone who holds it could open it, with no list of names. Below, a strip reads "Give a result the same test as data going in," with five numbered steps. Step 1 is "Classify the result." This list is yellow, like the redacted file it came from. Step 2 is "Name its audience." Dave decided on two people, Maria and himself. Step 3 is "Check who can open it now." Read the places' own settings, because a sent folder shows none of this. Step 4 is "Check whether it can still change." An approved result leaves as a fixed copy, or a share nobody can edit. Step 5, in red, is "Give each share an end." Take it back, then try to open it. At 11:50, at Maria's request, Jordan tried the old link. It failed. A red band at the bottom reads "A result goes out when its audience grows, not only when it is sent."](img/who-can-open.png)

*Figure 10.5. Three ways Maria's list went out on December 14, with no send, and the five-step test a result gets.*

Dave's term has two sides. Whatever goes to the auditors, he checks against the register and sends himself, from his own account. And every result gets a named audience and an end before it is shared, written in its Governance Record.

[^v1-governance]: Governance, Risk & Responsible Use: A Crash Course, Panaversity, first edition.
[^v1-code-you-never-write]: Code You Never Write: A Crash Course, Panaversity, first edition.


