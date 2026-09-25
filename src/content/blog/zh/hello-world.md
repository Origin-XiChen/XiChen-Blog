---
title: 你好，世界
description: 联邦技术标准院归档：本站建站之初的技术备忘，记述开站缘由、技术选型与后续计划，为文献总署最早登录的工程记录之一。
pubDate: 2026-09-20
tags: ['随笔', '博客']
category: techlog
docNo: 'FT-0001-0011'
issuedBy: '联邦技术标准院'
classification: '对内公开'
stellarDate: '星历元年九月二十日'
---

> 本文为工程记录，非联邦正式文书。文中「我」为撰者自称，记录在建站之初的原始思虑，登录取其原貌，不作官样改写。

欢迎来到我的博客。

在这里我想记录三件事：**写过的代码、想明白的问题、以及偶尔的胡思乱想**。很多内容在写下来之前都只是一团模糊的感觉，落笔之后才会变得清晰。

## 为什么还要写博客

在信息流里刷到的知识，来得快去得也快。而自己动手写一遍，会逼着你把逻辑理顺、把细节补全。所以这个博客首先是为我自己服务的——它是我的公开笔记。

如果这些文字恰好也能帮到你，那就更好了。

## 关于技术选型

这个站点用 [Astro](https://astro.build) 搭建，部署在 GitHub Pages 上。选择它的理由很简单：

- 默认输出纯静态页面，加载快，几乎没有运行时开销
- 用 Markdown 写文章，专注内容本身
- 中英文双语可以通过目录结构自然地区分

下面是一段示例代码，用来测试代码高亮的效果：

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

## 接下来

我会陆续把之前的笔记整理上来，覆盖前端工程、AI 应用和一些工具的使用心得。如果你对某个话题感兴趣，欢迎通过 RSS 订阅。

我们下一篇文章见。
