---
path: '/git-and-how-we-commit'
date: '2018-01-07'
title: 'Git (and how we Commit)'
lead: 'When developing software, collaboration and communication is key. And Git is our tool for achieving this at code level.'
image: './git-and-how-we-commit.jpg'
---

Most of us work asynchronously, as a distributed team, on a shared body of work, and when not sharing our wisdom in Slack and in various meetings, we speak to each other through the code we produce. Luckily Git allows us to annotate and separate this code into semantic pieces that heighten this communication.

But Git is only the tool, and it really comes down to how we use it. Clear-cut commits can enhance communication with little overhead. On the other hand, unstructured commits with poorly written commit messages can be incredibly wasteful when it comes to future readability and maintenance. The quality of a commit can in that sense [reveal whether a programmer is a good collaborator](http://who-t.blogspot.no/2009/12/on-commit-messages.html). Ouch.

This is a motivational page that hopefully will help us fall into the category of good collaborators.

## What is a Commit?

One way to look at it would be to say that a commit can be a bugfix, a part of a larger feature or perhaps a bit of refactoring. Another way to look at it would be to say that a commit is **a changeset that takes our project from one version to another.**

This mindset will simply force us to question our assumptions about how the changes we make work and help us refrain from "coding by coincidence". Commits are not the CTRL+S of programming, and when changing a line of code or even the name of a file, we are changing the state of the project.

A feature can be a potpourri of unstructured commits, or it can be a string of well-planned commits that all have their very specific role in bringing the feature to completion. Each commit should be a logically separate changeset that on its own represents the project in a safe state. Before doing a commit, ask yourself why the change is necessary or how it addresses the issue at hand. Be honest. If you are unsure what effects a change has, do everything you can to find out. If you fail to reach an understanding, consider throwing the work away and start over.

## Writing Commit Messages

Commit messages annotate our commits. The commit itself is really just a `diff` of what has changed: it is the related commit message that provides the context and helps us get in the mindset of the developer who produced the code. Spend those extra five minutes to craft an even better commit message. Take pride in doing spellcheck and ensuring a consistent (and short) line length to heighten the legibility.

A commit message consists of a summary line followed by a blank line followed by a description. It is widely considered good practice to start the summary line with a verb in imperative mode ("Add", "Fix", "Remove", ...) as it can help keep the summaries concise and consistent. If a commit is difficult to summarise, or in other ways reason about, perhaps it should be split up?

Use the description mainly to describe why the change was needed. This ensures that programmers - you or others, now or in the future - are in the know. Our code is not always self-explanatory and often when you stumble upon a confusing block of code you would want to know why it's there.

## Grooming the Commit History

If the commit history is an elevator ride through the life of a project, each commit resembles a button allowing us to get off at the right floor. An unsafe commit would in this scenario resemble stepping out of the elevator and finding oneself floating in mid air.

Properly annotated commits of contained changesets will make the elevator ride more pleasant by:

- Making it easier to revert one of the changesets later.
- Speeding up reviewing processes.
- Helping future developers (including oneself) answer questions like: "What were we thinking when this was added?"

## In Conclusion

When commiting code it might be helpful to:

- Make each commit a logically separate changeset.
- Keep the summary of the commit message concise.
- Follow the summary with a detailed explanation if necessary.

Commiting code is easy - but not very useful - if a programmer approaches the tool as the equivalent of CTRL+S. But commiting code should be much more than that: it should be about communication, reflection and honesty. When developing software, collaboration and communication is key. And Git is our tool for achieving this at code level.

Note that the above-mentioned rigorousness mainly should be applied when preparing pull requests or working directly on shared branches. Being "in the zone" and not switching context too often is important. Thus, structuring and authoring commits can easily be an afterthought to what's really at stake: getting the job done.

And don't forget to `git commit -m "WIP" && git push` before you leave the office.
