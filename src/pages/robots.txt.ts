import type { APIRoute } from 'astro';

/** 动态生成 robots.txt：站点可能部署在子路径下，站点地图地址需按构建时的真实地址拼接 */
export const GET: APIRoute = ({ site, url }) => {
  const origin = site ?? new URL(url.origin);
  // BASE_URL 在子路径部署时形如「/repo」，不保证以斜杠结尾，需自行补齐
  const base = import.meta.env.BASE_URL.replace(/\/*$/, '/');
  const sitemap = new URL(`${base}sitemap-index.xml`, origin).href;

  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
