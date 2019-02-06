---
path: '/dissecting-gatsby'
date: '2019-02-06'
title: 'Dissecting Gatsby'
lead: 'Exploring a "Hello World" Gatsby site.'
---

```bash
mkdir gatsby-hello-world && cd gatsby-hello-world && \
echo "{}" >> package.json && npm install gatsby react react-dom
```

`package.json`:
```json{2-4}
{
  "scripts": {
    "dist": "gatsby build"
  },
  "devDependencies": {
    "gatsby": "...",
    "react": "...",
    "react-dom": "..."
  }
}
```

```bash
mkdir -p src/pages && \
touch src/pages/index.js
```

```js
// src/pages/index.js

import React from 'react'

export default () => <h1>Hello World</h1>
```

```bash
npm run dist
```

```bash
cd public && tree
```
https://en.wikipedia.org/wiki/Tree_(command)

```
.
|-- app-225b3a09599c6d319ea2.js
|-- app-225b3a09599c6d319ea2.js.map
|-- chunk-map.json
|-- component---src-pages-index-js-3d506463652fd1a08b41.js
|-- component---src-pages-index-js-3d506463652fd1a08b41.js.map
|-- index.html
|-- pages-manifest-faaf77fdb64507a35315.js
|-- pages-manifest-faaf77fdb64507a35315.js.map
|-- static
|   `-- d
|       `-- 173
|           `-- path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json
|-- webpack-runtime-db5255beaef8da665f1b.js
|-- webpack-runtime-db5255beaef8da665f1b.js.map
`-- webpack.stats.json
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="generator" content="Gatsby 2.0.115" />
    <link
      as="script"
      rel="preload"
      href="/component---src-pages-index-js-3d506463652fd1a08b41.js"
    />
    <link as="script" rel="preload" href="/app-225b3a09599c6d319ea2.js" />
    <link
      as="script"
      rel="preload"
      href="/webpack-runtime-db5255beaef8da665f1b.js"
    />
    <link
      as="fetch"
      rel="preload"
      href="/static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json"
      crossorigin="use-credentials"
    />
  </head>
  <body>
    <noscript id="gatsby-noscript"
      >This app works best with JavaScript enabled.</noscript
    >
    <div id="___gatsby">
      <div style="outline:none" tabindex="-1" role="group">
        <h1>Hello World</h1>
      </div>
    </div>
    <script id="gatsby-script-loader">
      /*<![CDATA[*/ window.page = {
        componentChunkName: "component---src-pages-index-js",
        jsonName: "index",
        path: "/"
      };
      window.dataPath =
        "173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E"; /*]]>*/</script
    ><script id="gatsby-chunk-mapping">
      /*<![CDATA[*/ window.___chunkMapping = {
        app: ["/app-225b3a09599c6d319ea2.js"],
        "component---src-pages-index-js": [
          "/component---src-pages-index-js-3d506463652fd1a08b41.js"
        ],
        "pages-manifest": ["/pages-manifest-faaf77fdb64507a35315.js"]
      }; /*]]>*/</script
    ><script src="/webpack-runtime-db5255beaef8da665f1b.js" async=""></script
    ><script src="/app-225b3a09599c6d319ea2.js" async=""></script
    ><script
      src="/component---src-pages-index-js-3d506463652fd1a08b41.js"
      async=""
    ></script>
  </body>
</html>

```
