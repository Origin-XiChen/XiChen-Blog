---
title: Hello, World
description: The very first post — why I started this blog and what it will look like.
pubDate: 2026-09-20
tags: ['note', 'blog']
---

Welcome to my blog.

There are three things I want to write about here: **code I've written, problems I've figured out, and the occasional random thought**. Most ideas stay vague until I actually write them down — that's when they become clear.

## Why a blog in 2026?

Knowledge you scroll past in a feed disappears quickly. Writing it down forces you to straighten out the logic and fill in the details. So this blog serves me first — it's my public notebook.

If it happens to help you too, even better.

## About the stack

This site is built with [Astro](https://astro.build) and deployed on GitHub Pages. The reasons are simple:

- It outputs plain static pages by default — fast, with almost no runtime overhead
- Posts are written in Markdown, so I can focus on the content
- Chinese and English live in separate folders, which keeps the bilingual setup natural

Here's a snippet of code to show off the syntax highlighting:

```ts
type Post = {
  title: string;
  tags: string[];
};

export function collectTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) tags.add(tag);
  }
  return [...tags].sort();
}
```

## What's next

I'll gradually migrate my old notes here, covering front-end engineering, AI applications and developer tooling. Subscribe via RSS if any of that sounds interesting.

See you in the next post.
