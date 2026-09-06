# Linked lists

A singly linked list built from scratch as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) JavaScript curriculum.

This is a learning project. The goal was to understand how lists work when you do not have array indexes — only a `head` pointer and nodes that know their neighbour.

## What I set out to learn

- How a **node** stores a value and a link to the next node (`nextNode`)
- How a **factory function** can hide `head` and expose methods (`append`, `pop`, `insertAt`, …)
- How almost every list operation is the same idea: start at `head`, walk with `current = current.nextNode`
- The difference between **moving your finger** (`current = …`) and **rewiring the list** (`current.nextNode = …`)
- Test-driven development with Jest: write a failing test, implement the smallest behaviour, then cover edge cases

## What the list can do

| Method | Behaviour |
| --- | --- |
| `append(value)` | Add a node at the end |
| `prepend(value)` | Add a node at the front |
| `toString()` | `"( dog ) -> ( cat ) -> null"` |
| `size()` | Number of nodes |
| `head()` / `tail()` | First / last **value**, or `undefined` if empty |
| `at(index)` | Value at an index, or `undefined` if none |
| `pop()` | Remove the head and return its value |
| `contains(value)` | `true` / `false` |
| `findIndex(value)` | First matching index, or `-1` |
| `insertAt(index, ...values)` | Insert one or more nodes; `RangeError` if the index is out of bounds |
| `removeAt(index)` | Unlink the node at that index |

`head` is private to the factory. Callers only see values and the public methods.

## Challenges along the way

These were the problems that actually taught the structure — not the happy path.

**Walking vs returning.** `toString` and `size` look like `append`’s walk, but they collect a string or a count and must `return` it. Forgetting `return` produced `undefined` even when the walk was correct.

**Indexes are step counts, not “the middle.”** `at(1)` means “take one step from `head`,” not `length / 2`. A `for` loop that runs `index` times made that concrete.

**Infinite loops.** `findIndex` hung Jest when the loop never did `current = current.nextNode`. Debugging habit: log `current` each step, form one hypothesis, then fix.

**`pop` / `removeAt` — save, then rewire.** Returning the new head’s value instead of the old one; assigning `current = current.nextNode` instead of `current.nextNode = …`. The list only changes when a pointer **on a node** (or `head`) is updated.

**`insertAt` is two exclusive paths.** Index `0` moves `head`. Any other index finds the node *before* the gap and changes two links. Running both paths in one call inserted a node twice. Rest parameters (`...values`) needed a loop that moves `current` forward after each insert so order stayed `dog`, then `fox`, not the reverse.

**Empty tests look green.** A `test("…", () => {})` with no `expect` always passes. Same for `toBeDefined` without `()`.

**Errors as a contract.** Out-of-bounds `insertAt` / `removeAt` throw `RangeError` — same idea as `TypeError` in the earlier Testing Practice project, but for a number outside the allowed span. Jest: `expect(() => list.insertAt(99, "wolf")).toThrow(RangeError)`.

## Technologies

- **JavaScript (ES modules)** — factory functions, closures, rest parameters
- **Node.js** — run `main.js` and tests
- **Jest** — unit tests, `describe` / `test`, `toBe`, `toBeUndefined`, `toThrow`

No frameworks. The interesting part is the pointer logic and the tests, not the toolchain.

## Outcomes and feats

- Comfort with a core data structure instead of only using arrays
- Tests written alongside the implementation, including failure and empty-list cases
- Practice debugging from stack traces and `console.log` rather than guessing
- Clear split between public API and internal representation (`head` stays inside the factory)

## Run it

```bash
npm install
npm test
node main.js
```

`main.js` builds a short animal list and prints `toString()`.

## Project layout

```text
linked-lists.js       Factory + node helper
linked-lists.test.js  Jest specs for each method
main.js               Small manual demo
```
