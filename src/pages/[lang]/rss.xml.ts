import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { langCodes, type Lang } from '../../i18n/ui';
import { getPosts } from '../../lib/posts';
import { SITE } from '../../config';

export function getStaticPaths() {
  return langCodes.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const posts = await getPosts(lang);
  const base = import.meta.env.BASE_URL || '/';
  const baseUrl = new URL(base.endsWith('/') ? base : `${base}/`, context.site ?? SITE.url);

  return rss({
    title: lang === 'zh' ? `${SITE.title} · 中文` : `${SITE.title} · English`,
    description: SITE.title,
    site: baseUrl,
    customData: `<language>${lang === 'zh' ? 'zh-cn' : 'en'}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: new URL(`${lang}/blog/${post.id}/`, baseUrl).href,
    })),
  });
}
