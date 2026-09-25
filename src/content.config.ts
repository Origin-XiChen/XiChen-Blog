import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';
import { CATEGORY_ORDER } from './lib/categories';

const postSchema = z.object({
  title: z.string(),
  description: z.string().default(''),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  /** 所属栏目，决定首页归类与卡片标签 */
  category: z.enum(CATEGORY_ORDER).default('techlog'),
  /** 文献编号，如「和政公字第一号」 */
  docNo: z.string().optional(),
  /** 发布机关 */
  issuedBy: z.string().optional(),
  /** 密级，如「公开发布」 */
  classification: z.string().optional(),
  /** 星历日期文本，如「星历 1 年 1 月 1 日」 */
  stellarDate: z.string().optional(),
});

const zh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/zh' }),
  schema: postSchema,
});

const en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/en' }),
  schema: postSchema,
});

export const collections = { zh, en };
