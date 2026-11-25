# 20.10 Screens the AI designs (/building-ai-workers/mcp-apps/screens-the-ai-designs)

---
type: Document
title: "20.10 Screens the AI designs"
description: "Going further. Fixed screens, screens from approved parts, and open screens, and why approved parts are usually the right choice."
status: stable
order: 320.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T03:50:51Z
chapter: "20"
part: III
expert_status: co-build
concepts: [ "20.10" ]
last_verified: 2026-11-15
generated:
  at: 2026-11-16T03:50:51Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

*Going further. Named, not built.*

**In everyday life.** A restaurant can print a fixed menu, let the chef pick from a list of approved dishes each day, or let the chef cook anything. Each gives more freedom and less control.

**What you will learn.** Three ways an AI can shape a screen, and the one most teams choose.

**Why it matters.** Someone will ask for "a screen the AI builds itself". You should know what that costs.

### What are the three ways?

| Way | How it works | Freedom | Control |
| --- | --- | --- | --- |
| Fixed | You build the screen. The AI fills in the data, as in this chapter | Low | Highest |
| From approved parts | You list the parts the AI may use, such as a table, a card and a button. The AI writes a short description of which parts to show, and the page draws only those | Medium | High |
| Open | The AI writes the page itself, and the AI app shows it in the sandbox | Highest | Lowest |

The middle way is usually the right one. Brightline could approve five parts: an invoice card, a vendor card, a due-date list, a total, and a button that calls a tool. When Hannah asks for "the overdue ones, by vendor", the AI builds that screen from those five parts only.

![Three boxes in a row. Fixed, where you build the screen and the AI fills in the data. From approved parts, in gold, where the AI picks parts you listed, such as a table, a card and a button, and the page draws only those. Open, where the AI writes the page itself and the AI app shows it in the box. Below, one arrow points right for more freedom for the AI, and one points left for more control for you. Above, a note says the middle way is usually right, such as A2UI drawn inside the page.](img/chapter-20-three-ways.png)

*Figure 20.11. Three ways an AI can shape a screen, from most control to most freedom.*

### How does the middle way work?

In four parts:

1. **A catalog.** You list the parts the AI may use, and what each part can do.
2. **A description.** The AI writes a short description that uses only parts from the catalog, and sends it as a tool's input.
3. **Streaming, if the AI app sends it.** Some AI apps send the description while the AI is still writing it, so the screen fills in live. The page must also work without it.
4. **A registry.** The page maps each part's name to real code, and draws it.

An open standard for this, A2UI, is the next lesson. The same rule holds for all three ways: every call the screen makes is checked like any other.

**The operating rule:** if the AI must shape the screen, let it choose from parts you approved, never write the page.


