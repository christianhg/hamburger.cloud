---
path: '/parsing-data'
date: '2019-12-08'
title: 'Parsing Data'
lead: 'foo bar baz'
---

When passing JSON back and forth between server and client,

Here is a TypeScript type representing the JSON served from the backend:

```ts
type BackendData = {
  id: string;
  self: string;
  inheritedFrom?: string;
  branchedFrom?: string;
  // ...
};
```

The type represents a data resource that can be "inherited from" or "branched from" another resource.

The data has the following properties:

- `id`
- `self` (URI that can be used to address the resource)
- `inheritedFrom` (optional URI pointing to the resource it's inherited from)
- `branchedFrom` (optional URI pointing to the resource it's branched from)

When parsing the data on the frontend,

```ts
type FrontendData = {
  id: string;
  self: URI;
  inheritedFrom?: URI;
  branchedFrom?: URI;
};
```

Pros:

- Easy to convert back and forth

```ts
type FrontendData = {
  id: string;
  self: URI;
  inheritance: 'master' | 'inherited' | 'branched';
} & Inherited;

type Inherited =
  | {
      inheritance: 'master';
    }
  | {
      inheritance: 'inherited';
      inheritedFrom: URI;
    }
  | {
      inheritance: 'branched';
      branchedFrom: URI;
    };
```
