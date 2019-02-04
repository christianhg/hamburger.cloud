---
path: '/typescript-maybe'
date: '2019-02-05'
title: 'How to Write a Maybe Monad in TypeScript'
image: './gaustatoppen.jpg'
---

A Maybe represents a wrapper around any value - commonly values that might be nullable. Having this wrapper is useful because it guards against `null` and `undefined` when doing computations on the value. The idea is that the Maybe deals with nullables internally, thus allowing one to write simpler code with fewer conditionals. Not until the very end when it's needed to unwrap the value again, is it necessary to deal with the fact that it was or somehow became nullable.

```typescript
const value = Maybe.fromNullable(getNullableValue())
  .map(doSomething)
  .map(doAnotherThing)
  .map(doFinalThing)
  .getOrElse(defaultValue)
```

Even though they can't be constructed individually, the `Maybe` consists of two classes: `Just` and `Nothing`. The `Maybe` is a `Just` if it holds a value and a `Nothing` if it doesn't.

```typescript
const toUpper = a => a.toUpperCase()

Maybe.fromNullable(['foo', 'bar', 'baz'][2]) // Just('baz')
  .map(toUpper) // Just('BAZ')
  .getOrElse('No value here')
// => 'BAZ'

Maybe.fromNullable(['foo', 'bar', 'baz'][3]) // Nothing
  .map(toUpper) // Nothing
  .getOrElse('No value here')
// => 'No value here'
```

There exists a number of great resources on Maybe monads - including
[The Marvellously Mysterious JavaScript Maybe Monad](https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/) by [@jrsinclair](https://twitter.com/jrsinclair) and [Professor Frisby's Mostly Adequate Guide to Function Programming](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch8.md#schr%C3%B6dingers-maybe) by [@drboolean](https://twitter.com/drboolean) - that one might want to get familiar with. If you are used to Promises, you are essentially already familiar with monads.
