---
path: '/conversations-in-code'
date: '2019-01-20'
title: 'Conversations in Code'
lead: "When engaging in conversations we make assumptions about the vocabulary of those whom we converse with. Most of the time we're right, but other times we fail even in our most noble efforts to communicate clearly."
---

Recently I talked to my father-in-law (a man, much smarter than myself) about the benefits of a [Chromebook](https://en.wikipedia.org/wiki/Chromebook). Since a Chromebook barely has local storage I was quick to mention "the cloud" only to realise that this name meant nothing to him. In order for my father-in-law to get an idea of what Chromebooks are, I had to start with explaining "the cloud".

In the end I managed to recommend him a new laptop, but later that night it hit me: Names are just abstractions, and every conversation is built upon layers of layers of abstraction. Before we can even begin to have a meaningful, effective conversation we need a baseline of names in our common vocabulary.

---

In my job as a front-end developer I communicate with product owners, sales people, back-end developers, etc., through a variety of channels. However, the majority of my time is spent communicating with my team of fellow front-end developers through the code we produce. Our common languages include HTML, CSS, JavaScript and English, but our vocabularies differ and it's easy for an individual to misstep and take a certain name, abstraction or concept for given.

The team that I'm a part of is an inspiring mix of nationalities, backgrounds, educations and favourite programming paradigms where everyone brings something of their own to the table. Like with most things, this is a double-edged sword: On the positive side, we explore solutions that would otherwise not have been thought of in isolation. On the other hand, every one of these solutions needs to be reverse-engineered and re-understood by someone else later in the never-ending, asynchronous conversation that is code.

---

Programming is not only about problem-solving and shipping features - it's a conversation through names, patterns and paradigms. There is usually an immediate conversation that occurs during code review, but perhaps more important are all the future conversations when existing code needs to be extended, used or fixed.

In the same way that we have little control over the audience of our apps (their resolution, network connection, etc.), we have little control over the audience of our code. People come and go, and products and projects live on after the departure of their founding programmers. New people will eventually come along, and they'll be left without your guidance, trying to piece together the remains of your abstractions (or lack thereof.) Hopefully they read English along with the given programming language, but chances are that they are nothing like yourself.

---

Great code is code created with emphasis. It's created not only with a focus on how it fixes the problem at hand, but — perhaps more importantly — with a focus on how it communicates to its audience.

I remember when I first got a grasp on [point-free programming](https://en.wikipedia.org/wiki/Tacit_programming): I went overboard and [curried](https://en.wikipedia.org/wiki/Currying) every new function in order to be able to apply it in a point-free style. I undoubtedly felt smart in the process, but the result was code that was unnecessarily hard to read. In my quest to strengthen my functional programming skills I had left a trail of code that stuck out as being inhomogeneous because no-one else on the team was practicing the point-free style.

Programming is a young and exciting profession and it's easy to get carried away when we get inspired or make new discoveries. The choices we make can have more impact than we think — both short-term and long-term — and when creating or applying abstractions, it should be done with a level of care and understanding for the audience.

When engaging in conversations we make assumptions about the vocabulary of those whom we converse with. Most of the time we're right, but other times we fail even in our most noble efforts to communicate clearly.
