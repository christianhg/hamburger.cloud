---
path: '/why'
date: '2018-10-06'
title: 'Why?'
lead: "Why?, and why it's important"
---

I work at a software company, but admittedly it sometimes feels more like a feature factory. An assembly line cluttered with people who - individually - might not know what the end-product is or why it is.

Recently I had an experience at work that reminded me of one of the most valuable and challenging questions we can ask in our daily jobs: "**why?**".

Previously, in [Git (and how we Commit)](/git-and-how-we-commit), I wrote:

> Before doing a commit, ask yourself why the change is necessary or how it addresses the issue at hand. Be honest. If you are unsure what effects a change has, do everything you can to find out. If you fail to reach an understanding, consider throwing the work away and start over.

I'd like to draw attention to "**why the change is necessary**" because I feel like answering this question is often overlooked. We frequently hear how it's important to know why the code we write works and not just blindly copy/paste from documentation or StackOverflow. Otherwise, how can we know that it **truly** works if we don't understand it?

But there is a difference between knowing why something works and knowing why something needed to work in the first place.

My experience at work wasn't adverse in any way. No programmers nor end-users were harmed. But it still resonated with me. Someone implemented a feature and nobody knew why. The story goes something like this:

1. A year ago I, `P1`, created a feature ticket only containing a headline. No description or reasoning was added.
2. A year later another programmer, `P2`, picked up the ticket and implemented the feature.
3. The corresponding commit message only contained the ticket headline, thus no extra clues.
4. The commit was approved in code review by another programmer, `P3`, and a designer, `D1`. `P2` and `P3` did question the feature in code review, seeking clarity from `D1` who gave

It's so easy to get caught up in work and forget to question why we do the work in the first place. In the case of programmers this could mean that - when being approached with a feature request - we focus too much on answering **what** the feature should do, and to little on answering **why** it should do it.

A common trade among codebases is that they only grow larger over time. There is always demand for new features, but rarely a demand for features being removed again. This means that everybody involved in contribution to the codebase has a responsibility to ask why they are doing so.

Most of the time there is probably a reason why a programmer would be working on a particular feature at a particular time, and **somebody** will know this reason. But that doesn't mean the programmer shouldn't care themselves. It doesn't even mean that those are the right reasons.
