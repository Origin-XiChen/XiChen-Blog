import type { APIRoute } from 'astro';

/** 动态生成 robots.txt：站点可能部署在子路径下，站点地图地址需按构建时的真实地址拼接 */
export const GET: APIRoute = ({ site, url }) => {
  const origin = site ?? new URL(url.origin);
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, origin).href;

  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
