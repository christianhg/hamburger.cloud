---
path: "/immutability"
date: "2018-04-08"
title: "Immutability"
lead: "Cache invalidation and naming things are not the hardest parts of programming. Managing state is."
image: "./immutability.png"
---

What's cool about the version control system [Git](https://git-scm.com/)? It's **immutable**! Every state change made to a project through Git preserves the previous state in history. Why is this cool? For starters it allows a distributed team to work on the same project without messing up each other's work. Unless [rebases](https://git-scm.com/docs/git-rebase) on shared branches commonly occur in your team, the immutable Git history means that you can check out a commit and have absolute certainty that nobody can change that state of the project from under your feet.

The exact same argument can be made from the perspective of code itself. In functional programming values are (preferably) immutable. This means that the name associated with a value, the variable, can't be associated with another value, and that the value itself can't change. This provides certainty and transparency in the same sense that the Git workflow does. As soon as a part of the program obtains a value to work on, it can do that with a guarantee that the value doesn't suddenly change.

Some languages, like [Haskell](https://www.haskell.org/), enforce immutability, while others do no such thing. In the case of JavaScript, immutability can indeed be a very hard thing to strive for. Because the language does not enforce immutability, it's a constraint you'll have to put on yourself.

In JavaScript you still get some help in the sense that the six primitive types - Boolean, Null, Number, String, Symbol and Undefined - are immutable. All other values (including arrays) derive from the Object type which is mutable.

Primitive values being immutable should makes sense for the most part. It's hard to imagine a language that would allow the number `5` to mean anything but that. Strings are indeed mutable in some languages, but fortunately in JavaScript they're not. Once a string has been created, it can't be changed:

```js
const s = "can't touch me"

s.toUpperCase()
// => "CAN'T TOUCH ME"

s
// => "can't touch me"

s + "!"
// => "can't touch me!"

s
// => "can't touch me"
```
