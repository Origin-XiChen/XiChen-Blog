---
title: Building a Bilingual Blog with Astro
description: From folder structure to automatic GitHub Pages deployment — how this blog was built.
pubDate: 2026-09-22
updatedDate: 2026-09-23
tags: ['astro', 'tutorial', 'blog']
---

This post documents how this very blog is built, so you can follow along or, more likely, so future me can look it up.

## Folder structure

Posts live in per-language folders, and routing is generated from dynamic params:

```text
src/
├── content/blog/
│   ├── zh/hello-world.md
│   └── en/hello-world.md
├── i18n/ui.ts          # UI strings
├── lib/posts.ts        # Querying & formatting helpers
└── pages/[lang]/
    ├── index.astro     # /zh/ and /en/
    └── blog/[slug].astro
```

Keeping the same filename in both languages links the two versions together, so switching languages can jump straight to the translated post.

## Content collections

Astro content collections validate the frontmatter, so a missing field or a bad type fails the build instead of shipping broken pages:

```ts
const postSchema = z.object({
  title: z.string(),
  description: z.string().default(''),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});
```

Posts marked `draft: true` only show up locally and never make it into a production build.

## Deploying to GitHub Pages

Drop a workflow file into the repo, and every push to `main` builds and publishes the site:

```yaml
- name: Configure Pages
  id: pages
  uses: actions/configure-pages@v5
- name: Build
  run: npm run build
  env:
    SITE_URL: ${{ steps.pages.outputs.origin }}
    BASE_PATH: ${{ steps.pages.outputs.base_path }}
```

`configure-pages` picks up the repository name automatically, so asset paths stay correct even when the site lives under a subpath like `username.github.io/repo/`.

> Tip: if you're using the special `username.github.io` repository, `base_path` is an empty string and links land at the domain root.

## Wrapping up

No database, no server — every page is generated at build time. Write a post, `git push`, and it's live about a minute later.
