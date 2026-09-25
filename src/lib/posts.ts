import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { DOCUMENT_CATEGORIES, TECHLOG_CATEGORY, type Category } from './categories';

export type Post = CollectionEntry<'zh'> | CollectionEntry<'en'>;
export type { Category };
export { DOCUMENT_CATEGORIES, TECHLOG_CATEGORY };

const collectionsByLang = { zh: 'zh', en: 'en' } as const;

export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(collectionsByLang[lang], ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPost(lang: Lang, id: string): Promise<Post | undefined> {
  const posts = await getPosts(lang);
  return posts.find((post) => post.id === id);
}

/** 按栏目筛选，保持发布时间倒序 */
export async function getPostsInCategories(lang: Lang, categories: Category[]): Promise<Post[]> {
  const posts = await getPosts(lang);
  return posts.filter((post) => categories.includes(post.data.category));
}

/** 官方文献：宪章、公告、决议；按栏目次第排列（宪章在前），栏内按时间倒序 */
export async function getDocuments(lang: Lang): Promise<Post[]> {
  const posts = await getPostsInCategories(lang, DOCUMENT_CATEGORIES);
  return posts.sort(
    (a, b) =>
      DOCUMENT_CATEGORIES.indexOf(a.data.category) - DOCUMENT_CATEGORIES.indexOf(b.data.category),
  );
}

/** 技术日志 */
export async function getTechLogs(lang: Lang): Promise<Post[]> {
  return getPostsInCategories(lang, [TECHLOG_CATEGORY]);
}

/** 找出另一个语言里同一篇（同名文件）的文章，用于语言切换 */
export async function getTranslation(lang: Lang, id: string): Promise<Post | undefined> {
  const other: Lang = lang === 'zh' ? 'en' : 'zh';
  return getPost(other, id);
}

/** 粗略估算阅读时长：中文按字数、英文按单词数 */
export function readingTime(body: string | undefined, lang: Lang): number {
  if (!body) return 1;
  const text = body.replace(/```[\s\S]*?```/g, '');
  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = (text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) || []).length;
  const minutes = lang === 'zh' ? cjk / 350 + words / 200 : words / 220;
  return Math.max(1, Math.round(minutes));
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: lang === 'zh' ? 'long' : 'short',
    day: 'numeric',
  }).format(date);
}
