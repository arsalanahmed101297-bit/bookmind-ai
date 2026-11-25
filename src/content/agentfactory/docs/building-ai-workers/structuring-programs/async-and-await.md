# 14.8 Async and await (/building-ai-workers/structuring-programs/async-and-await)

---
type: Document
title: "14.8 Async and await"
description: "What await does, when slow calls can wait at the same time, and why every call needs a time limit."
status: stable
order: 314.07
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.8" ]
last_verified: 2026-10-30
sources:
  - id: node-globals
    title: "Globals (Node.js, accessed 2026-10-30)"
    resource: https://nodejs.org/api/globals.html
  - id: httpx-async
    title: "Async support (httpx, accessed 2026-10-30)"
    resource: https://www.python-httpx.org/async/
  - id: python-asyncio-tasks
    title: "Coroutines and tasks (Python, accessed 2026-10-30)"
    resource: https://docs.python.org/3/library/asyncio-task.html
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You have two errands: a suit at the dry cleaner and a prescription at the pharmacy. Each counter needs ten minutes. You can wait at one, then at the other. Or you can hand in both, take a ticket at each, and come back when both are ready. The waits overlap, so the total is the longest wait, not the two added up.

**What you will learn.** What `await` does, when slow calls can wait at the same time, and why every call needs a time limit.

**Why it matters.** Most of a program's time goes on waiting. And a call that hangs, which means it waits forever, stops the whole run when nobody is watching.

### What does `await` do?

It waits. Most of a program's slow work is waiting for somewhere else: a server, a file or a database. The sample API of [14.7](json-and-rest-apis.md#how-does-one-program-ask-another), for one, takes about 300 milliseconds to answer each request.

Here is one wait on its own, at one counter. `sleep` stands in for a slow call: it waits, and then hands back a word. A clock reads the time before and after.

```ts tab="TypeScript" tab-group="language"
// from Node's own timers, take
// setTimeout, and call it sleep
import { setTimeout as sleep } from "node:timers/promises";

// read the clock
const start = performance.now();
// wait here for 300 ms, then
// take what comes back
const first = await sleep(300, "vendors");
// the time it took, in ms,
// as a whole number
const ms = Math.round(performance.now() - start);
console.log(ms, first);
```

```python tab="Python" tab-group="language"
import asyncio
import time

async def main() -> None:
    # read the clock
    start = time.perf_counter()
    # wait here for 0.3 seconds,
    # then take what comes back
    first = await asyncio.sleep(0.3, "vendors")
    # the time it took, in ms,
    # as a whole number
    ms = round((time.perf_counter() - start) * 1000)
    print(ms, first)

asyncio.run(main())
```

Both print:

```text
303 vendors
```

Your times will differ by a few milliseconds. `await` means "pause here until the result is ready, then go on with it". The line after it waits too.

| Language | The marks in this code |
| --- | --- |
| TypeScript | You met `await` in 14.7, before `fetch`. At the top of a file, as here, Node lets you write it as it is. Inside a function, the function must be marked `async`, as in `async function main()`, or `await` is refused. |
| Python | In 14.7, `httpx.get` waited by itself, and nothing else could happen meanwhile. To overlap waits, Python needs another form: a function that uses `await` is marked `async def`, and `asyncio.run(main())` starts it. httpx has that form too, the same request with `await` in front, and the SDK in [14.9](reading-sdk-code.md) uses it. |

### How do two calls wait at the same time?

First, the slow way. Here are two waits, one after the other, like waiting at the first counter and then at the second. Predict the time.

```ts tab="TypeScript" tab-group="language"
import { setTimeout as sleep } from "node:timers/promises";

const start = performance.now();
// wait at the first counter,
// then at the second
const first = await sleep(300, "vendors");
const second = await sleep(300, "invoices");
const ms = Math.round(performance.now() - start);
console.log("one after the other", ms, first, second);
```

```python tab="Python" tab-group="language"
import asyncio
import time

async def main() -> None:
    start = time.perf_counter()
    # wait at the first counter,
    # then at the second
    first = await asyncio.sleep(0.3, "vendors")
    second = await asyncio.sleep(0.3, "invoices")
    print("one after the other", round((time.perf_counter() - start) * 1000), first, second)

asyncio.run(main())
```

```text tab="TypeScript" tab-group="language"
one after the other 605 vendors invoices
```

```text tab="Python" tab-group="language"
one after the other 604 vendors invoices
```

Two `await`s in a row wait one after the other. The second wait starts only when the first is over, so the times add up.

Now hand in both, and wait for both together. Predict the time.

```ts tab="TypeScript" tab-group="language"
import { setTimeout as sleep } from "node:timers/promises";

const start = performance.now();
// hand in both, then wait
// for both together
const both = await Promise.all([sleep(300, "vendors"), sleep(300, "invoices")]);
const ms = Math.round(performance.now() - start);
console.log("at the same time", ms, both);
```

```python tab="Python" tab-group="language"
import asyncio
import time

async def main() -> None:
    start = time.perf_counter()
    # hand in both, then wait
    # for both together
    both = await asyncio.gather(asyncio.sleep(0.3, "vendors"), asyncio.sleep(0.3, "invoices"))
    print("at the same time", round((time.perf_counter() - start) * 1000), both)

asyncio.run(main())
```

```text tab="TypeScript" tab-group="language"
at the same time 303 [ 'vendors', 'invoices' ]
```

```text tab="Python" tab-group="language"
at the same time 303 ['vendors', 'invoices']
```

The two waits overlapped, so the total is one wait, not two. Look inside the brackets: the two `sleep` calls have no `await` of their own. A call without `await` hands back a ticket at once, not the word. The one `await` at the front then waits for both tickets, and the words come back in the order you handed the calls in.

| Language | What the ticket is called |
| --- | --- |
| TypeScript | A **promise**: it stands for a result that is not ready yet. `Promise.all` takes a list of promises and waits for all of them. This is a new meaning of the word, not the promise a signature makes in [13.6](../programming-fundamentals/functions.md). |
| Python | A **coroutine**: it stands for a result that is not ready yet. `asyncio.gather` takes several and waits for all of them. |

Code written this way is called **async**, which is short for asynchronous. It can start a slow task, do other work while it waits, and pick the result up when it is ready.

### When can two calls run at the same time?

Only when neither needs the other's answer. Vendors and open invoices are independent. Page 1 of the invoices has to come first, because it says how many pages there are.

**At work.** The sample API's first answer to a vendors call is a `503`, on purpose. Ana's client tries a `503` once more, as 14.7 decided. So it makes five calls of 300 milliseconds each: vendors twice, and three pages of invoices. One after the other, they add up to 1.5 seconds. With the vendors fetched while the pages are fetched, the run takes about 0.9 seconds, the time of the three pages.

![Figure 14.8. Two timelines at 300 milliseconds per call. In sequence, a vendors call that gets 503, its retry and three invoice pages take 1.5 seconds. At the same time, the two vendor calls run beside the three pages, so the job takes 0.9 seconds, the time of the pages. Measured, it takes about one second.](img/sequence-vs-together.png)

*Figure 14.8. One after the other, or at the same time. In Brightline's client the pages run in turn, which is simpler. The vendors do not wait for them.*

### How long should a call wait?

Every call needs a **deadline**, which is a time limit on the whole call. A call with no limit can wait forever, and the program waits with it. Brightline's client gives every call a two-second deadline, in both languages.

Here is a deadline at work. The call takes 300 milliseconds, and the deadline is 200. Predict what it prints.

```ts tab="TypeScript" tab-group="language"
import { setTimeout as sleep } from "node:timers/promises";

try {
  // a call that takes 300 ms,
  // with a 200 ms deadline
  await sleep(300, "vendors", { signal: AbortSignal.timeout(200) });
  console.log("answered in time");
// the deadline came first
} catch {
  console.log("gave up at the deadline");
}
```

```python tab="Python" tab-group="language"
import asyncio

async def main() -> None:
    try:
        # a call that takes 0.3 s,
        # with a 0.2 s deadline
        async with asyncio.timeout(0.2):
            await asyncio.sleep(0.3, "vendors")
        print("answered in time")
    # the deadline came first
    except TimeoutError:
        print("gave up at the deadline")

asyncio.run(main())
```

Both print:

```text
gave up at the deadline
```

The wait stopped at the deadline with an error, and the `try` of [14.6](errors-as-design.md) caught it.

| Language | How the code sets the deadline |
| --- | --- |
| TypeScript | `AbortSignal.timeout(200)` makes a signal that goes off after 200 milliseconds. The call is given that signal as an extra, and stops with an error when it goes off. `catch` with no name after it catches any error. A real client gives the same `signal` to `fetch`. |
| Python | `async with asyncio.timeout(0.2):` sets a limit on every line indented under it. After 0.2 seconds, a wait that is still going there stops. A real client puts its request under the same line. |

### What if I forget `await`?

It depends on the language. Both mistakes are common in agent code. So look at each call to an async function. It needs `await` in front of it, unless it is handed to the line that waits for several.

| Language | What happens without `await` |
| --- | --- |
| TypeScript | The call starts as soon as you make it, and `await` only waits for it. Forget `await`, and the call happens, but nobody waits for its result or its error. You handed in the suit and never went back. |
| Python | A coroutine does nothing until it is awaited or handed to `asyncio.gather`. Forget `await`, and the call never happens. You only filled in the order. Python prints a warning that says the coroutine `was never awaited`. |

### Try it

The file in `14-8` holds the last two timing blocks together: two waits one after the other, then the same two at the same time. Run it and investigate, as in [13.1](../programming-fundamentals/you-read-the-agent-writes.md#try-it).

**Modify.** Send: "Add a third wait of the same length to both halves of the file. Don't run it yet." Predict both times. Then ask the agent to run it.

**Make.** Decide whether a client should try again after a 400, a 401, a 429 and a 503, from the table in [14.7](json-and-rest-apis.md#what-should-the-client-do-for-each-status-code). Then start the sample API, and send: "Make a new file in 14-8 called mine that asks the sample API for /vendors with the key from .env, tries again only as my rule says, gives every call a two-second deadline, and prints the status code of every try. Don't run it yet." Paste your rule. Find the lines that decide whether to try again. They will look like the function under 14.7's table. Then ask the agent to run it. Then ask it to stop the API.

**What you should see.** After your change, about 900 milliseconds one after the other, and still about 300 at the same time. In `mine`, a `503`, then a `200` if your rule tries a 503 again, because the API's first `/vendors` answer is a 503 on purpose.

**The operating rule:** run slow calls at the same time only when they do not depend on each other. Give every network call a deadline, and check that every async call is awaited.

**Next.** Companies publish code that makes these calls for you. [14.9](reading-sdk-code.md) shows how to use it, and what to ask of it.


