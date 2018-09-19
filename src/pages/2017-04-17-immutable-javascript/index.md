---
path: '/immutable-javascript'
date: '2017-04-17'
title: 'Immutable JavaScript'
lead: 'What is immutability, how can it be achieved in JavaScript and why should you care?'
---

> **immutable**<br>
> Unchanging over time or unable to be changed.<br>
> -- [Oxford Dictionaries](https://en.oxforddictionaries.com/definition/immutable)

There is a rising trend in the JavaScript community to strive for immutability, and for a good reason. Functional programming (as opposed to e.g. object-oriented programming) is [on the rise](https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c) in an effort to create programs that are simpler and easier to reason about. While object-oriented programming embraces mutability through stateful objects, functional programming embraces immutability through stateless [pure functions](https://en.wikipedia.org/wiki/Pure_function). Knowing that data can't be mutated after it's creation can remove a lot of cognitive load from a program.

## The mutable JavaScript

One of the most common array operations is **push** - the operation that appends a new entry to an array. In the following example we declare an array of natural numbers and add `4` to it using [`Array.prototype.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push):

```js
const natural = [0, 1, 2, 3]

natural.push(4)
// => 5
```

You might be wondering why the expression `natural.push(4)` resulted in the value `5`. `Array.prototype.push` is a **stateful method** that doesn't return a new array. Instead it modifies the original array in-place and returns the new length of the array.

Arrays in JavaScript are **mutable** and inspecting the original `natural` array reveals that it has in fact been mutated:

```js
natural
// => [0, 1, 2, 3, 4]
```

In JavaScript the six primitive types - Boolean, Null, Number, String, Symbol and Undefined - are **immutable**. All other values (including arrays) derive from the Object type which is mutable.

When working with primitive types, it is impossible to change their values. Instead you create new values from them:

```js
const alphabet = 'abcd'

alphabet.concat('e')
// => "abcde"

alphabet
// => "abcd"
```

As for objects, nothing is stopping you from overwriting their properties. In the following example a `player` object with `damage` and `health` is created. Afterwards the object is mutated using a property assignment statement:

```js
const player = {
  damage: 50,
  health: 80,
}

player.health = 70

player
// => { damage: 50, health: 70 }
```

## Achieving immutability

As it happens, it is possible to do any array operation in an immutable fashion using native JavaScript. In the case of appending an entry to an array, this can be obtained using my favorite ES2015 feature, the [spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator):

<!-- prettier-ignore -->
```js
const odd = [1, 3, 5, 7]; // <-- eew, necessary ; before [

[...odd, 9]
// => [1, 3, 5, 7, 9]

odd
// => [1, 3, 5, 7]
```

The spread operator, when used inside an array literal, "spreads out" the `odd` array and copies its entries into the new array. Not only did this result in a smaller amount of code than using `Array.prototype.push`, it's arguably more expressive too.

What about decreasing the `health` of the `player` object?

It turns out, it's possible to "freeze" an object using [`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). Below a `player` object is created and immediately frozen to protect it against mutation. The succeeding property assignment doesn't alter the object and amounts to nothing:

```js
const player = {
  damage: 50,
  health: 80,
}

Object.freeze(player)

player.health = 70

player
// => { damage: 50, health: 80 }
```

Normally you might not need the overhead of `Object.freeze`, but it's a handy function to pull in when writing unit tests for functions that should preserve immutability.

To decrease the `health` of the `player` in an immutable fashion, a new object has to be created. Here [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) can be of help. It allows us to copy the properties of `player` to a new object literal and afterwards overwriting the `health` property using yet another object literal with only that property:

```js
const player = {
  damage: 50,
  health: 80,
}

Object.assign({}, player, { health: 70 })
// => { damage: 50, health: 70 }

player
// => { damage: 50, health: 80 }
```

The original object remains untouched!

Please note that `Object.freeze` doesn't deep freeze objects and `Object.assign` doesn't deep clone objects either. To achieve the same results with nested data structures [various](https://www.npmjs.com/package/deep-freeze) [npm modules](https://www.npmjs.com/package/clone) might be able to assist.

## Wrap-up

Unfortunately, preserving immutable data is not a simple task. A common gotcha is the fact that passing references to a function can cause unwanted side effects.

Consider the following function that returns the tail of an array:

```js
function tail(arr) {
  return arr.splice(1)
}

const even = [2, 4, 6, 8]

tail(even)
// => [4, 6, 8]
```

As expected, the function returns the tail of `even`, but let's inspect the original array for good measure. It shouldn't have changed, right?

```js
even
// => [2]
```

Because [`Array.prototype.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) is a stateful method, and because `even` is passed to `tail` by reference, the value of `even` has been modified!

It becomes apparent that `tail` can be referred to what is normally known as an **impure function**. It's concern should be to take an array as it's input and return the tail of that array. But as a bonus it has the side-effect of modifying the original array too.

Some (unfortunately crafted) stateful programs may rely on side-effects like this, but to maintain sanity it should be avoided. Writing `tail` as a **pure function**, the stateless [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) can be put to use:

```js
function tailPure(arr) {
  return arr.slice(1)
}

const prime = [2, 3, 5, 7]

tailPure(prime)
// => [3, 5, 7]

prime
// => [2, 3, 5, 7]
```

Immutability is the backbone of functional programming, but even with new features of ES2015 it's not trivial to achieve in JavaScript. There are even many more pitfalls to be aware of than the ones described above. It is however valuable to learn about immutability. Implementing it's principles even in non-functional codebases can lead to more declarative programs with less unwanted side-effects.
