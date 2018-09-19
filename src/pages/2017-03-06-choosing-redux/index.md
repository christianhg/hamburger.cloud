---
path: '/choosing-redux'
date: '2017-03-06'
title: 'Choosing Redux'
lead: 'Choosing Redux to manage state in an AngularJS application'
---

Redux is not as much a library as it is a programming pattern. And it is a powerful pattern. With an API of only 5 functions, a footprint of 2kB, and written in a some 200 lines of source code, Redux can enlighten the path to better state management. State management does not have to be a dreadful, unpredictable bug-magnet. It can be both fun and predictable.

## Predictable state management

Redux encourages the entire state of the application to be a single source of truth persisted in a **global store**. This results in dump components that are truly dump. The only way for components to modify the state is to **dispatch an action** to the store. In turn, the components **subscribe to state changes**, and can update themselves upon getting these. In other words: state management is unidirectional and thus predictable.

## Testable state transitions

Because each state transition is triggered by an action on the view layer, the real transition of state is handled in **reducers** hooked into the store. A reducer is a middleware, that each action passes through. If the action is meaningful to a particular reducer (i.e. it has the correct **type**), the reducer will manipulate the state using that action.

A reducer is a function just like one passed to the higher-order [`Array.prototype.reduce`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). It takes an accumulator (the `state`), a value (the `action`) and returns the new accumulated value (the new `state`):

```js
reducer(state, action) => state
```

Redux requires reducers to be [pure functions](https://en.wikipedia.org/wiki/Pure_function), meaning that any state transition can be easily provided mock data and unit tested.

## The state is read-only

The most evident source of bugs in AngularJS applications is by far directives manipulating state [citation needed]. Directives become big classes that use internal state and tangled methods to manipulate some data that is two-way data bound with other directives. It is hard to reason about, it is hard to test and often the problem just keeps growing. A read-only state will eliminate the need for two-way data-binding and thus, as explained earlier, keep the views free from state transition logic.

## More boilerplate, but worth it

Redux requires some boilerplate to enforce predictable, testable state management. And in some cases it would even require more code than if the state change was done in an ordinary “Angular way”.

The simplest example (unfair to Redux) is a panel that is toggled using a button. In an ordinary implementation, the flipping of a `panelShown` boolean could be done using a single expression inside an `ngClick` directive on the button. The panel would then have an `ngShow` directive responsible for showing and hiding it.

In a Redux implementation, these two directives would still be in place, but instead of flipping a boolean, the `ngClick` needs to dispatch a `‘TOGGLE_PANEL’` action that runs through a reducer. The controller would then need to subscribe to the new state and apply that to the view. That’s at least three new functions added to the code base.

A larger codebase is usually harder to read and reason about, generates more bugs and so on. But naive code generates bugs too. The three extra functions are simple, pure functions. The fact that the state transition is now unidirectional, testable and predictable is arguably worth it.

## Enables super powers

When each state transition is described using a actions applied to the prior state, a lot of doors suddenly open. Ideas like adding “undo” functionality to an editor or saving the panel toggle state on browser refresh are not even far fetched - they are implementable. Saving state transitions in LocalStorage and having the ability to “replay” them when needed is just too cool to grasp.
