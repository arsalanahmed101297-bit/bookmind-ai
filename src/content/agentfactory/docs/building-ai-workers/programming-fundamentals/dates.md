# 13.9 Dates (/building-ai-workers/programming-fundamentals/dates)

---
type: Document
title: "13.9 Dates"
description: "How code compares two dates, where adding days goes wrong, and why the same date code can give a different day on two computers."
status: stable
order: 313.075
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:20Z
chapter: "13"
part: III
expert_status: builder-only
concepts: [ "13.9" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:20Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** To find the day 15 days after October 20, you put a finger on a wall calendar and count forward. When October runs out, you turn the page.

**What you will learn.** How code compares two dates, why the same date code can give a different day on two computers, and how it adds days.

**Why it matters.** A date can come out one day wrong, and no error says so.

### How does code compare two dates?

As text, when the dates are written year first. A wall calendar is in order because the year is on the cover, the month is on the page, and the day is in the square. Brightline writes every date in that order, as **ISO** text: year, then month, then day, such as `2026-11-06`. Every ISO date has the same length, zeros included.

Code compares text one character at a time from the left, so the year decides first, then the month, then the day. The text's order is the calendar's order. Predict both lines.

```ts tab="TypeScript" tab-group="language"
const due = "2027-03-03";
const cutoff = "2027-03-05";
// ISO text: is March 3 on or
// before March 5?
console.log(due <= cutoff);
// the same question about
// March 10, written another way
console.log("3/10/2027" <= "3/5/2027");
```

```python tab="Python" tab-group="language"
due = "2027-03-03"
cutoff = "2027-03-05"
# ISO text: is March 3 on or
# before March 5?
print(due <= cutoff)
# the same question about
# March 10, written another way
print("3/10/2027" <= "3/5/2027")
```

```text tab="TypeScript" tab-group="language"
true
true
```

```text tab="Python" tab-group="language"
True
True
```

The first answer is right. The second is wrong: March 10 is not on or before March 5, but as text `3/1` comes before `3/5`. The program gave no error. So a script can compare `due <= cutoff` directly, as long as every date is ISO text.

### Why can the same code give a different day on two computers?

Because some code holds a moment where it should hold a date.

| | On the wall | The same everywhere? |
| --- | --- | --- |
| A date | One square on the calendar, such as October 20 | Yes |
| A moment | One tick of the clock | No. The same tick falls in Monday's square in Columbus, at 9 p.m., and in Tuesday's square in Tokyo, where it is morning |

Code that holds a square cannot slip. Code that holds a tick has to decide which square the tick falls in, and that depends on where the computer is.

**UTC** is one clock that reads the same everywhere. Each time zone is some hours ahead of it or behind it. Code that asks UTC for the square gets the same answer on every computer.

**At work.** The agent's first due-date function held each date as a moment, and wrote the result in the computer's local time. Ana's tests passed on a shared computer set to UTC, and failed on her own. Here is one date on both.

| Computer | The moment the code holds | The day it writes |
| --- | --- | --- |
| Set to UTC | Midnight UTC, at the start of October 20 | October 20 |
| Ana's, in Columbus, four hours behind UTC in October | The same tick, which is 8 p.m. on October 19 there | October 19, one day early |

The fix was to do every date step in UTC.

| Language | What to check in date code |
| --- | --- |
| TypeScript | `Date` holds a moment, not a calendar day. Ask the agent to show you the date lines, and look for the letters UTC in each: `getUTCDate`, not `getDate`. Without those letters, a line uses the computer's local time. |
| Python | `date` is a calendar day, so it cannot slip this way. `datetime` holds a time of day too, and it can. Check which of the two a line uses. |

### How does code add days?

The way your finger does: it counts forward, and turns the page when the month runs out. Turning the page is where a wrong answer hides, so these are the three cases to check.

| The page that turns | Example | Result |
| --- | --- | --- |
| A month end | `2026-10-20` plus 15 days | `2026-11-04` |
| A year end | `2026-12-20` plus 30 days | `2027-01-19` |
| A leap year | `2028-02-15` plus 15 days | `2028-03-01`, because February 2028 has 29 days |

You do not need every line of the function below. Find the one line that its comment calls the rule. In TypeScript, that line can give a day past the month's end, such as day 35 of October. That is on purpose, and the next line turns the page. The last line runs the three cases of the table.

```ts tab="TypeScript" tab-group="language"
function addDays(isoDate: string, days: number): string {
  // make a moment from the text:
  // that day, at midnight UTC
  const date = new Date(isoDate);
  // the rule: count forward
  const newDay = date.getUTCDate() + days;
  // past the month's end,
  // turn the page
  date.setUTCDate(newDay);
  // back to text
  const fullText = date.toISOString();
  // keep the date part
  return fullText.slice(0, 10);
}

console.log(addDays("2026-10-20", 15), addDays("2026-12-20", 30), addDays("2028-02-15", 15));
```

```python tab="Python" tab-group="language"
# two ready-made date tools
from datetime import date, timedelta


def add_days(iso_date: str, days: int) -> str:
    # make a calendar day
    # from the text
    start = date.fromisoformat(iso_date)
    # the rule: count forward
    end = start + timedelta(days=days)
    # back to text
    return end.isoformat()


print(add_days("2026-10-20", 15), add_days("2026-12-20", 30), add_days("2028-02-15", 15))
```

Both print:

```text
2026-11-04 2027-01-19 2028-03-01
```

| Language | The rule line |
| --- | --- |
| TypeScript | `date.getUTCDate() + days` takes the day of the month and adds the days: 20 plus 15 is 35. The next line sets the day to 35, and the calendar turns the page: October has 31 days, so day 35 is November 4. Both lines say UTC. |
| Python | `start + timedelta(days=days)` adds 15 days to the calendar day. The calendar day knows where each month ends, so October 20 becomes November 4. |

Both languages turn the page for you. Your part is to check that the three cases were tried. The other lines turn text into a date and back. If one of them puzzles you, ask the agent what it is for.

### Try it

The file in `13-9` adds 15 days to a date. Run it and investigate, as in [13.1](you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Change the date in the file to 2028-02-20. Don't run it yet." Work out the new date on a calendar. February 2028 has 29 days. Then ask the agent to run it.

**Make.** Send: "Make a new file in 13-9 called mine that adds 30 days to [a date of yours, across a year end]. Don't run it yet." Work out the answer yourself, and then ask the agent to run it.

**What you should see.** `2026-11-04` at first, and `2028-03-06` after your change.

**The operating rule:** keep dates as ISO text, do date math in UTC or with a calendar-day type, and test the three pages that turn: a month end, a year end and a leap day.

![Figure 13.8. A calendar strip crossing a month end: October 20 plus 15 days lands on November 4, and February 15, 2028 plus 15 days lands on March 1 because of the leap day.](img/calendar-strip.png)

*Figure 13.8. Date math crosses edges. The edges are where the bugs are, so they are where the tests go.*

**Next.** [13.10](reading-an-error.md) shows how to read what a program says when it breaks.


