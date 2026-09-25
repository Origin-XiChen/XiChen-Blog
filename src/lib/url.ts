/** 给站内链接拼接 base 前缀，保证部署在子路径（如 /blog/）时依然可用 */
export function url(path = ''): string {
  // Astro 的 BASE_URL 可能是 '/'、'' 或 '/blog'（不一定带结尾斜杠），这里统一处理
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');

  if (!clean) return `${base}/`;
  return `${base}/${clean}`;
}
