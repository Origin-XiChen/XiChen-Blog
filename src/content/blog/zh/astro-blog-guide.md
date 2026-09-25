---
title: 用 Astro 写一个双语博客
description: 联邦技术标准院归档：从目录结构、内容集合到 GitHub Pages 自动部署，完整记录本馆站点的搭建规程，可作为同类文献站的技术底本。
pubDate: 2026-09-22
updatedDate: 2026-09-23
tags: ['Astro', '教程', '博客']
category: techlog
docNo: 'FT-0001-0012'
issuedBy: '联邦技术标准院'
classification: '对内公开'
stellarDate: '星历元年九月二十二日'
---

> 本文为工程记录，非联邦正式文书。所述步骤已在本馆站点实际施行，命令与配置均可直接复用。

这篇文章记录这个博客本身的实现方式，方便你照着搭一个，也方便我以后回头查阅。

## 目录结构

文章按语言分目录存放，路由则由动态参数生成：

```text
src/
├── content/blog/
│   ├── zh/hello-world.md
│   └── en/hello-world.md
├── i18n/ui.ts          # 界面文案
├── lib/posts.ts        # 文章查询与格式化
└── pages/[lang]/
    ├── index.astro     # /zh/ 与 /en/
    └── blog/[slug].astro
```

同一个文件名在两种语言下各放一份，就能自动建立对应关系，切换语言时可以直接跳到翻译版本。

## 内容集合

Astro 的内容集合负责校验文章 Frontmatter，少写字段或格式不对都会在构建时报错：

```ts
const postSchema = z.object({
  title: z.string(),
  description: z.string().default(''),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});
```

`draft: true` 的文章只会在本地出现，不会进入线上构建。

## 部署到 GitHub Pages

在仓库里放一个工作流文件，推送 `main` 分支就会自动构建并发布：

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

`configure-pages` 会自动识别仓库名，因此部署在 `用户名.github.io/仓库名/` 这类子路径下时，资源路径也不会出错。

> 小提示：如果你使用的是 `用户名.github.io` 这个特殊仓库，`base_path` 会是空字符串，链接会直接落在根目录上。

## 小结

整套方案没有数据库、没有服务端，所有页面在构建时就生成好了。写完文章 `git push`，一分钟左右就能在线上看到更新。
