import type { APIRoute, GetStaticPaths } from 'astro';
import { FLAG_DEFS, flagDocument, type FlagDef } from '../../lib/flags';

/**
 * 输出六面旗帜的标准 SVG：联邦国旗与五域域旗。
 * 制式与纹章统一取自 src/lib/flags.ts，页面内联图与此处文件同源。
 */
export const getStaticPaths: GetStaticPaths = () =>
  FLAG_DEFS.map((flag) => ({ params: { id: flag.id }, props: { flag } }));

export const GET: APIRoute = ({ props }) => {
  const { flag } = props as { flag: FlagDef };
  return new Response(flagDocument(flag), {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
};
