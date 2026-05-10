/* At its core, a **generator function** is a special type of function that can pause its execution mid-way and resume exactly where it left off. 

Unlike a standard function that follows a "run-to-completion" model—where it returns a single value and then disappears from memory—a generator produces a sequence of values over time, one by one.

---

## How They Work
In most languages (like JavaScript or Python), you identify a generator by two things:
1.  **The Syntax:** Usually defined with an asterisk (e.g., `function*`) or simply by including the `yield` keyword.
2.  **The `yield` Keyword:** This is the "pause button." When the function hits a `yield`, it sends a value out to the caller and freezes its state (variables, stack, etc.).



### The Lifecycle of a Generator
1.  **Initialization:** Calling the function doesn't actually run the code; it returns an **iterator object**.
2.  **The Request:** You ask the iterator for the next value (often using a `.next()` method).
3.  **Execution:** The function runs until it hits `yield`.
4.  **The Pause:** The function pauses, "yielding" the value. It stays in memory, waiting for the next request.
5.  **Completion:** Once there are no more `yield` statements, the generator finishes.

---

## Why Use Them?
Generators are incredibly efficient for specific programming challenges:

* **Memory Efficiency:** Imagine you need to process a list of 10 million items. A normal function would create that entire list in memory first. A generator creates only **one item at a time**, saving massive amounts of RAM.
* **Infinite Sequences:** You can write a generator that counts to infinity. Since it only produces the "next" number when asked, it will never crash your program.
* **Lazy Evaluation:** It only does the work when you actually need the result.

### A Simple Comparison

| Feature | Standard Function | Generator Function |
| :--- | :--- | :--- |
| **Execution** | Runs to completion. | Pauses and resumes. |
| **Return Value** | Returns one value (or an array). | Returns an iterator (yields many values). |
| **Memory** | High (stores full results). | Low (computes on the fly). |
| **State** | Lost after execution. | Maintained between yields. |

---

## Code Example (JavaScript)
```javascript
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countToThree();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
// The function is currently "frozen" right after 'yield 2'
*/
