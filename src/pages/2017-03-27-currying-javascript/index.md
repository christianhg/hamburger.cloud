---
path: '/currying-javascript'
date: '2017-03-27'
title: 'Currying JavaScript 🍛'
---

[Currying](https://en.wikipedia.org/wiki/Currying) is the useful technique of transforming a function that takes multiple arguments into a sequence of functions that all take a single argument.

Have a look at this simple function that returns the slice of an Array:

```js
function slice(from, to, xs) {
  return xs.slice(from, to)
}

slice(0, 2, [0, 1, 2, 3, 4])
// => [0, 1]
```

A curried version could look like this:

```js
function sliceCurried(from) {
  return function(to) {
    return function(xs) {
      return xs.slice(from, to)
    }
  }
}

slice(0)(2)([0, 1, 2, 3, 4])
// => [0, 1]
```

Let's write it more succinctly using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```js
const sliceCurried = from => to => xs => xs.slice(from, to)
```

As you can see, the function has been transformed into taking its arguments one by one and returning a new function until the end result is reached.

It first takes the `from` argument, then returns a function that expects the `to` argument, then a function that expects the `xs` argument.

## When to add Curry 🥄

The motivations for currying functions vary. One reason is the ability to pass a function **some** of its arguments at one point, and then pass the **rest** later. This can e.g. lead to reusability by being able to preset a function. Another reason is the ability to write expressive code.

Consider this example of using the curried function to implement a whole new `take` function:

```js
const take = sliceCurried(0)

take(2)([0, 1, 2, 3, 4])
// => [0, 1]

take(2)(['a', 'b', 'c', 'd', 'e'])
// => ['a', 'b']
```

Or even more specific and expressive, a `takeTwo` function:

```js
const takeTwo = take(2)

takeTwo([0, 1, 2, 3, 4])
// => [0, 1]

takeTwo(['a', 'b', 'c', 'd', 'e'])
// => ['a', 'b']
```

The fact that a function can easily be repurposed in an expressive way is a powerful feature. Remember, code is for humans to read. It's merely a side effect if the computers understand it too.

Jokes aside, which one is easiest to read an reason about?

```js
slice(0, 2, [0, 1, 2, 3, 4])

takeTwo([0, 1, 2, 3, 4])
```

I'd go for the latter of the two anytime.

## Implementing a `curry` function 🔨

In reality it's impractical and unnecessary to pre-curry each function manually. It's often more suitable to use a utility function to curry functions when needed. Both [lodash](https://github.com/lodash/lodash), [Ramda](https://github.com/ramda/ramda) and my own library [bukk](https://github.com/christianhg/bukk) provide functions like this.

It turns out, it is not too difficult to implement a simple curry function. The one in bukk looks like this:

```js
const curry = (f, recieved = [], arity = f.length) =>
  arity <= 0
    ? f.apply(undefined, recieved)
    : (...args) => curry(f, [...recieved, ...args], arity - args.length)
```

And is used like this:

```js
const sliceCurried = B.curry(slice)
```

The implementation utilizes recursion to gradually collect the passed arguments until the function's [arity](https://en.wikipedia.org/wiki/Arity) reaches zero. At that point it terminates the recursion and [applies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) the arguments to the function.

Notice that the implementation also allows for using the function in an uncurried way or in a partially curried way:

```js
const add3 = (a, b, c) => a + b + c
const add3Curried = B.curry(add3)

add3Curried(1)(3)(7)
// => 11

add3Curried(1, 3)(7)
// => 11

add3Curried(1)(3, 7)
// => 11

add3Curried(1, 3, 7)
// => 11
```

## A note on argument order 🔀

One of the reasons our curried `slice` function is particularly reusable is that is "data last", e.i. the data that the function transforms is passed as the last argument.

It would not have been possible to implement a generic `takeTwo` function if the Array was passed as the first argument:

```js
const sliceCurried = xs => from => to => xs.slice(from, to)
```
