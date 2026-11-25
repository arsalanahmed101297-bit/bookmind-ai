# 14.9 Reading SDK-shaped code (/building-ai-workers/structuring-programs/reading-sdk-code)

---
type: Document
title: "14.9 Reading SDK-shaped code"
description: "How to recognize the shapes in the code a company publishes for its service, and find what that code checks for you and what it leaves to you."
status: stable
order: 314.08
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-16T05:56:21Z
chapter: "14"
part: III
expert_status: builder-only
concepts: [ "14.9" ]
last_verified: 2026-10-30
generated:
  at: 2026-11-16T05:56:21Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You can drive a rental car you have never seen before. You recognize the shapes: the pedals, the wheel, the lights. You do not need to know how the engine was built. But before you drive off, you check what the company left to you, such as the fuel and the spare tire.

**What you will learn.** How to recognize the shapes in the code a company publishes for its service, then find what that code checks for you and what it leaves to you.

**Why it matters.** From [Chapter 17](../connectors-and-mcp/overview.md) on, much of the code at your [edges](data-models-and-schemas.md#why-check-at-the-edge) is someone else's, built from a few shapes.

### What is an SDK?

An **SDK**, a software development kit, is a package a company publishes so programs can use its service: an AI model, a payment system, a database. It makes the requests of [14.7](json-and-rest-apis.md) and the waits of [14.8](async-and-await.md) for you, so your own code is a few short lines.

**At work.** Brightline's practice folder has a small made-up "AP SDK" for the [sample API](json-and-rest-apis.md#how-does-one-program-ask-another), shaped like the ones companies publish. The file in `14-9` holds the SDK, and the lines at its end use it. Here are those lines. They ask for the vendors, and then for every open invoice.

```ts tab="TypeScript" tab-group="language"
// async: main waits inside.
// Promise<void>: it hands
// back nothing, later
async function main(apiKey: string): Promise<void> {
  // make a client, with the
  // address and the key
  await using client = new ApClient("http://localhost:4010", apiKey);
  // ask for the vendors: the
  // answer holds a list of them
  const answer = await client.vendors();
  const vendors = answer.vendors;
  console.log(vendors.length, "vendors");
  // loop over the open invoices
  for await (const invoice of client.openInvoices()) {
    console.log(invoice.number, invoice.amountCents);
  }
}

// run main, with the key
await main(process.env.AP_API_KEY || "");
```

```python tab="Python" tab-group="language"
async def main() -> None:
    # make a client, with the
    # address and the key
    async with ApClient("http://localhost:4010", os.environ["AP_API_KEY"]) as client:
        # ask for the vendors: a
        # list of them
        vendors = await client.vendors()
        print(len(vendors), "vendors")
        # loop over the open invoices
        async for invoice in client.open_invoices():
            print(invoice["number"], invoice["amountCents"])

asyncio.run(main())
```

Both print:

```text
8 vendors
INV-8301 482500
INV-8302 61875
...
client closed
```

The dots stand for eleven more invoices. A few marks in these lines are new.

| Language | The marks in this code |
| --- | --- |
| TypeScript | `await using` makes the client, and closes its connection when `main` ends. `for await` is a loop in which each turn may wait. |
| Python | `async with ... as client` makes the client, names it `client`, and closes its connection when the lines indented under it end. `async for` is a loop in which each turn may wait. |

Now compare these lines with the requests you read in 14.7. They never check a status code, though the sample API's first answer to a vendors call is a `503`. They never ask for page 2, though the 13 invoices come on three pages. And they never close anything, though the last line says `client closed`. The SDK did all three for you, inside.

### Which shapes will I meet?

Five. Two you know: a class, as in [14.3](classes-and-objects.md), and a function that waits, as in 14.8. Three are new, and each has a section below. You only need to recognize each shape, and say what it does for you.

| Shape | What it does for you | In the TypeScript lines above | In the Python lines above |
| --- | --- | --- | --- |
| Client class | One object that holds the connection and its settings. Every call goes through it | `new ApClient(...)` | `ApClient(...)` |
| Async method | Makes one request, and you `await` the answer | `await client.vendors()` | `await client.vendors()` |
| **Generator** | Hands out results one at a time, as a loop asks for them | The `for await` loop | The `async for` loop |
| **Context manager** | Closes what it opened when your lines end | `await using` | `async with` |
| Wrapper | Adds a step inside a call, such as one more try | Nowhere: it is inside the SDK | Nowhere: it is inside the SDK |

### How does a generator hand out results?

One at a time, when it is asked. A generator is like a waiter who brings one dish, and goes back to the kitchen only when you have finished it. Here is a small one that prints as it works. It runs only as far as its next `yield`, hands out one value, and waits to be asked for another. Predict the order of the four lines.

```ts tab="TypeScript" tab-group="language"
// the star after function
// marks a generator. It runs
// only as far as the next yield
function* pages() {
  console.log("fetching page 1");
  yield 1;
  console.log("fetching page 2");
  yield 2;
}

for (const page of pages()) {
  console.log("using page", page);
}
```

```python tab="Python" tab-group="language"
# a generator: it runs only as
# far as the next yield
def pages():
    print("fetching page 1")
    yield 1
    print("fetching page 2")
    yield 2

for page in pages():
    print("using page", page)
```

Both print:

```text
fetching page 1
using page 1
fetching page 2
using page 2
```

Page 2 was fetched only after page 1 was used. The SDK's generator works the same way. It asks the sample API for the next page only when the loop has used up the page it has. That is why the loop above never names a page.

| Language | How to spot a generator |
| --- | --- |
| TypeScript | The word `yield` inside a function, and a star in its first line. In code that uses one, a `for await` loop. |
| Python | The word `yield` inside a function. In code that uses one, an `async for` loop. |

### How does a context manager close what it opens?

On the way out, however the code leaves. A context manager is like a door on a spring, which closes behind you whichever way you go. It runs one step on the way in and one on the way out, even after an error. An SDK uses one to close its connection.

Look again at the lines that use the SDK. Nobody wrote a line that says "close". `main` reached its end, the way-out step ran, and that is where `client closed` came from.

| Language | How to spot a context manager |
| --- | --- |
| TypeScript | `using` or `await using` before a name. The way out is the end of the block the line is in. |
| Python | `with` or `async with`, then an indented block. The way out is the end of that block. The time limit in 14.8 was one too. |

### How does a wrapper add a retry?

A wrapper is like an assistant who places your call and, if the line is busy, dials once more. It goes around a method and adds a step. You cannot see it in the lines that use the SDK: they ask for the vendors once, and the wrapper, inside the SDK, tries again. That is how those lines got 8 vendors though the first answer was a `503`.

Here is the one place in the SDK's file where the wrapper goes around the vendors method. You only need to spot it.

```ts tab="TypeScript" tab-group="language"
// vendors is made by handing a
// small function to withRetry.
// That function is the request
vendors = withRetry(() => this.#get("/vendors"));
```

```python tab="Python" tab-group="language"
# the @ line hands the method
# below it to retry_once
@retry_once
# Any: a type to ignore here
async def vendors(self) -> list[dict[str, Any]]:
    # the request of 14.7, in the
    # form that can wait. _http is
    # the client's connection
    response = await self._http.get("/vendors")
    # an error status becomes
    # an error
    return response.raise_for_status().json()["vendors"]
```

| Language | How to spot a wrapper |
| --- | --- |
| TypeScript | A function's name around the request, here `withRetry(...)`. |
| Python | A line that starts with `@` above a function, here `@retry_once`. It is called a **decorator**. `@dataclass` in [14.2](types-you-write-down.md) is one too. |

What a wrapper adds is written inside it, so ask the agent: "What does this wrapper do, for which errors, and how many times?"

Figure 14.9 marks the shapes in the SDK's own file.

![Figure 14.9. Annotated excerpts from the made-up AP client. In Python: the class, the async context manager methods __aenter__ and __aexit__, the @retry_once decorator, an async method, and async with. In TypeScript: an async generator method, yield*, await using, and a for await loop.](img/annotated-sdk.png)

*Figure 14.9. Name the shapes first.*

### What does it check for me, and what does it leave to me?

An SDK sits at your edge, because it is someone else's code between your program and the service. So ask it what [14.4](data-models-and-schemas.md) to 14.8 taught you to ask of your own client. Ana asks the agent about this SDK: "Does it check the shape of each answer, or hand us whatever arrived? Which status codes does it retry, and how many times? Does every call have a deadline, and does it close what it opens?" Whatever it does not do, your code does at the edge, with a schema on what it returns and a deadline on each call.

Take the second question. The agent reads the wrapper and answers: the SDK tries twice at most, and it tries again after any failed answer, not only a `503`. A `401` will fail again, as 14.7's table says, so this SDK spends a call on nothing. The wrapper is also only on the vendors method: nothing wraps the invoice pages. If your rule is "a `503` only, on every call", that part is left to you. The other questions work the same way, and they are yours in Try it.

### Try it

The file in `14-9` is the whole made-up SDK, with the lines that use it at the end. Start the sample API, as in [14.7](json-and-rest-apis.md#try-it). Then send: "Run the file in 14-9 and show me what it prints. Don't explain it yet."

**Investigate.** Open the file in a text editor. Find the generator, the context manager and the wrapper by the marks in the tables above, and say in one line what each does for the caller. Then ask the agent: "Which methods does the wrapper go around?"

**Modify.** Send: "Stop the invoice loop after the first invoice, with break. Don't run it yet." How many pages will it fetch? Will `client closed` print? Then restart the API and ask the agent to run it.

**Make.** Ask: "Does this SDK check the shape of each answer? Does every call have a time limit?" Write down what you would ask its authors to change. Then ask the agent to stop the API.

**What you should see.** After your change, `8 vendors`, one invoice, then `client closed`. It fetched one page only, because the generator fetches a page only when the loop asks for more. And the client closes even after `break`. For your two questions, the answer is no: the SDK hands back whatever arrived, and the file sets no time limit of its own. So a schema and a deadline are yours to add.

**The operating rule:** before you read the details, name the shapes in SDK code, and say in one line what each does for the caller. Then find what it checks for you, and do the rest at your edge.

**Next.** [Lab 14](lab.md) puts it all together, and gives you the chance to set the rules Marcus's agent set for him. [14.10](both-ai-vendors.md) shows where your agent differs from the others.


