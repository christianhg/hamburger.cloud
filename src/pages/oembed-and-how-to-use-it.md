---
path: '/oembed-and-how-to-use-it'
date: '2019-02-17'
title: 'oEmbed and How to Use It'
---

It's common to see third-party content like [Twitter](https://twitter.com) cards, [YouTube](https://youtube.com) videos and [Instagram](https://instagram.com) images incorporated (embedded) into web pages. An embedded Twitter card is an interactive representation of a tweet which looks and feels like it comes from Twitter, i.e., it has the right design and functionality. Similarly, an embedded YouTube video _feels_ like a video from YouTube - not just any generic video player.

Take a look at the [tweet](https://twitter.com/dan_abramov/status/1083472984252260352) embedded below:

https://twitter.com/dan_abramov/status/1083472984252260352

It would be possible to construct this representation of a tweet by hand, but how would that scale? What happens when the author of the tweet changes their avatar or display name? Or when Twitter decides to rebrand and leave `#00ACEE` behind? Then every web page that had a hand-crafted representation of this tweet would need to update said representation.

There is a reason that hard-coding has a bad reputation in programming, and the above example demonstrates how doing this to an embedded Twitter card leaves a web page that is harder to maintain and more likely to become stagnant.

---

[oEmbed](https://oembed.com) mitigates this problem. It's a widely used formalization of how to provide and consume embeddable content on the Web. What's great about that is that it relieves the consumer of the burden of figuring out how to display embedded content.

Every tweet can be identified by a URL which, by definition, is unique: https://twitter.com/dan_abramov/status/1083472984252260352. Instead of hard-coding the representation of the tweet, a consuming web page merely stores the URL of the tweet and fetches the representation when needed, either at build time or at run time.

In a nutshell, oEmbed is a specification that defines:

- How a consumer (like this web page) should request oEmbed data from a provider.
- How a provider (like Twitter) should expose oEmbed data to its consumers.
- What parameters oEmbed data should include.

As a provider of the oEmbed format, you need to expose an API endpoint that can be used to consume your content in the standardized oEmbed fashion. In the example of Twitter, that endpoint is https://publish.twitter.com/oembed. Requesting that endpoint, though, results in an error: [400 Bad Request](https://httpstatuses.com/400). This is because because it's required to include a `url` query parameter which specifies what piece of content from the provider to use: https://publish.twitter.com/oembed?url=https://twitter.com/dan_abramov/status/1083472984252260352

Now the resulting [200 OK](https://httpstatuses.com/200) response is a bit more useful. In it's payload (body) we find the following piece of JSON, the oEmbed data:

```json
{
  "url": "https://twitter.com/dan_abramov/status/1083472984252260352",
  "author_name": "Dan Abramov",
  "author_url": "https://twitter.com/dan_abramov",
  "html": "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Top two mistakes in documentation:<br><br>• Assuming people know everything<br>• Assuming people are stupid</p>&mdash; Dan Abramov (@dan_abramov) <a href=\"https://twitter.com/dan_abramov/status/1083472984252260352?ref_src=twsrc%5Etfw\">January 10, 2019</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
  "width": 550,
  "height": null,
  "type": "rich",
  "cache_age": "3153600000",
  "provider_name": "Twitter",
  "provider_url": "https://twitter.com",
  "version": "1.0"
}
```

---

How does a consumer know what endpoint to use for a given provider?
