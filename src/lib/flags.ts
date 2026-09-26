/**
 * 和星联邦 · 旗帜制式与纹章库
 *
 * 本文件是全站旗帜（联邦国旗与五域域旗）的唯一绘制来源：
 *   · 几何制式（旗幅、双色分界、鎏金五角星、星心素白圆盘）量自官方旗帜 public/flag.png；
 *   · 纹章元素在素白圆盘内以「纹章金」绘制，五域各改绘本域纹章，以别于国旗之和平符号。
 *
 * 同一套逻辑既用于内联渲染（components/FlagMark.astro），
 * 也用于导出为独立 SVG 文件（pages/flags/[id].svg.ts）。
 */
import { DOMAINS, FLAG_COLORS, type Domain, type EmblemKey } from '../config';

/**
 * 国旗标准制式。单位与 public/flag.png 的像素一致，旗幅 604×340。
 *
 * · 纵向双色分界恰在幅宽之半（x = 302），左绯红、右星蓝；
 * · 鎏金五角星为正五角星、顶点朝上，外接圆半径 148，
 *   内接圆半径比 0.382，星心略低于旗心，使星形上下留白相等；
 * · 星心素白圆盘半径 40（约为星外接圆之 0.27），圆心略低于星心。
 */
export const FLAG = {
  width: 604,
  height: 340,
  split: 302,
  star: { cx: 302, cy: 183, outer: 148, inner: 56.5 },
  disc: { cx: 302, cy: 182, r: 40 },
} as const;

/** 旗幅比 604 : 340 */
export const FLAG_ASPECT: number = FLAG.width / FLAG.height;

/** 纹章金：较星体鎏金略深，以保证素白盘上的辨识度 */
export const EMBLEM_GOLD = '#E9A900';

/** 纹章名目（含国旗之和平符号） */
export const EMBLEM_NAMES: Record<EmblemKey, { zh: string; en: string }> = {
  peace: { zh: '和平符', en: 'Peace Symbol' },
  sun: { zh: '旭日纹', en: 'Rising Sun' },
  stone: { zh: '磐石纹', en: 'Bedrock' },
  wave: { zh: '沧浪纹', en: 'Great Waves' },
  wind: { zh: '长风纹', en: 'Long Wind' },
  origin: { zh: '天圆地方纹', en: 'Square within the Circle' },
};

/** 数值取三位小数后去零，避免导出的路径过长 */
function n(value: number): string {
  return Number(value.toFixed(3)).toString();
}

/**
 * 正五角星的轮廓路径（顶点朝上）。
 * 十个顶点由外接圆与内接圆交替取点构成，夹角 36°。
 */
export function starPath(cx: number, cy: number, outer: number, inner: number): string {
  const points: string[] = [];
  for (let i = 0; i < 5; i += 1) {
    const aOuter = ((-90 + i * 72) * Math.PI) / 180;
    const aInner = ((-90 + 36 + i * 72) * Math.PI) / 180;
    points.push(`${n(cx + outer * Math.cos(aOuter))} ${n(cy + outer * Math.sin(aOuter))}`);
    points.push(`${n(cx + inner * Math.cos(aInner))} ${n(cy + inner * Math.sin(aInner))}`);
  }
  return `M ${points.join(' L ')} Z`;
}

/** 纹章在单位圆内的图样（坐标范围约 ±1，描边宽度以单位计） */
function emblemContent(key: EmblemKey, color: string): string {
  const ink = color;
  const paper = FLAG_COLORS.white;

  switch (key) {
    /* 和平符：竖笔贯通盘心，两臂斜向左右下方，盘缘即为外环 */
    case 'peace':
      return [
        '<path d="M 0 -0.96 L 0 0.96"/>',
        '<path d="M 0 0 L -0.68 0.68"/>',
        '<path d="M 0 0 L 0.68 0.68"/>',
      ].join('');

    /* 旭日纹：地平线上半轮朝日，光芒五道 */
    case 'sun': {
      const rays = [18, 54, 90, 126, 162]
        .map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x0 = 0.62 * Math.cos(a);
          const y0 = 0.46 - 0.62 * Math.sin(a);
          const x1 = 0.99 * Math.cos(a);
          const y1 = 0.46 - 0.99 * Math.sin(a);
          return `<path d="M ${n(x0)} ${n(y0)} L ${n(x1)} ${n(y1)}"/>`;
        })
        .join('');
      return (
        `<path d="M -0.88 0.46 L 0.88 0.46"/>` +
        `<path d="M -0.5 0.46 A 0.5 0.5 0 0 1 0.5 0.46 Z" fill="${ink}" stroke="none"/>` +
        rays
      );
    }

    /* 磐石纹：石体一面，白线劈作三面，取厚重不摇之意 */
    case 'stone':
      return (
        `<path d="M -0.93 0.58 L -0.50 -0.42 L 0.02 -0.78 L 0.54 -0.34 L 0.93 0.58 Z" fill="${ink}" stroke="none"/>` +
        `<path d="M -0.50 -0.42 L -0.26 0.58" stroke="${paper}" stroke-width="0.085" stroke-linecap="butt"/>` +
        `<path d="M 0.02 -0.78 L 0.00 0.58" stroke="${paper}" stroke-width="0.085" stroke-linecap="butt"/>` +
        `<path d="M 0.54 -0.34 L 0.30 0.58" stroke="${paper}" stroke-width="0.085" stroke-linecap="butt"/>`
      );

    /* 沧浪纹：三道叠浪，取潮汐有信之意 */
    case 'wave':
      return [-0.55, 0, 0.55]
        .map(
          (y) =>
            `<path d="M -0.95 ${n(y)} q 0.2375 -0.52 0.475 0 t 0.475 0 t 0.475 0 t 0.475 0"/>`,
        )
        .join('');

    /* 长风纹：三道流风，右端回勾，取气行不息之意 */
    case 'wind':
      return [
        '<path d="M -0.94 -0.52 C -0.34 -0.70 0.30 -0.68 0.72 -0.44 C 0.96 -0.30 0.90 -0.06 0.68 -0.12"/>',
        '<path d="M -0.94 0.02 C -0.34 -0.16 0.32 -0.14 0.76 0.10 C 1.00 0.24 0.94 0.48 0.72 0.42"/>',
        '<path d="M -0.74 0.56 C -0.24 0.40 0.26 0.42 0.60 0.60"/>',
      ].join('');

    /* 天圆地方纹：外圆为天、内方为地，中心一点为元枢 */
    case 'origin':
      return (
        `<circle r="0.92"/>` +
        `<rect x="-0.56" y="-0.56" width="1.12" height="1.12"/>` +
        `<rect x="-0.15" y="-0.15" width="0.3" height="0.3" fill="${ink}" stroke="none"/>`
      );
  }
}

/**
 * 绘制一枚纹章。
 * 以 (cx, cy) 为盘心，r 为可用半径；图样按单位圆缩放后铺满盘面。
 */
export function emblemMarkup(
  key: EmblemKey,
  cx: number,
  cy: number,
  r: number,
  color: string = EMBLEM_GOLD,
): string {
  /* 和平符以盘缘为环，故近于满盘；余者留白一圈，取庄重 */
  const unit = key === 'peace' ? r * 0.94 : r * 0.76;
  const width = key === 'peace' ? 0.13 : 0.105;
  return [
    `<g transform="translate(${n(cx)} ${n(cy)}) scale(${n(unit)})"`,
    ` fill="none" stroke="${color}" stroke-width="${n(width)}"`,
    ` stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">`,
    emblemContent(key, color),
    '</g>',
  ].join('');
}

/** 旗面内容（不含 svg 外壳），供内联与导出共用 */
export function flagBody(opts: {
  hoist: string;
  fly: string;
  emblem: EmblemKey;
  color?: string;
}): string {
  const { hoist, fly, emblem, color = EMBLEM_GOLD } = opts;
  return [
    `<rect width="${FLAG.width}" height="${FLAG.height}" fill="${hoist}"/>`,
    `<rect x="${FLAG.split}" width="${FLAG.width - FLAG.split}" height="${FLAG.height}" fill="${fly}"/>`,
    `<path d="${starPath(FLAG.star.cx, FLAG.star.cy, FLAG.star.outer, FLAG.star.inner)}" fill="${FLAG_COLORS.gold}"/>`,
    `<circle cx="${FLAG.disc.cx}" cy="${FLAG.disc.cy}" r="${FLAG.disc.r}" fill="${FLAG_COLORS.white}"/>`,
    emblemMarkup(emblem, FLAG.disc.cx, FLAG.disc.cy, FLAG.disc.r, color),
  ].join('');
}

/** 一纸旗的完整定义 */
export interface FlagDef {
  /** 路由与文件名 */
  id: string;
  zh: string;
  en: string;
  /** 靠旗杆一侧 */
  hoist: string;
  /** 外侧 */
  fly: string;
  emblem: EmblemKey;
}

/** 联邦国旗 */
export const FEDERAL_FLAG: FlagDef = {
  id: 'federal',
  zh: '和星联邦国旗',
  en: 'National Flag of the PeaceStar Federation',
  hoist: FLAG_COLORS.red,
  fly: FLAG_COLORS.blue,
  emblem: 'peace',
};

/** 取某域之域旗定义（旗式沿用国旗制式，仅换双色与本域纹章） */
export function domainFlag(domain: Domain): FlagDef {
  return {
    id: domain.id,
    zh: `${domain.name.zh}域旗`,
    en: `Standard of the ${domain.name.en} Domain`,
    hoist: domain.colors[0],
    fly: domain.colors[1],
    emblem: domain.emblem,
  };
}

/** 六面旗：联邦国旗在前，五域依序列后 */
export const FLAG_DEFS: FlagDef[] = [FEDERAL_FLAG, ...DOMAINS.map(domainFlag)];

/** 独立 SVG 文件内容（可直接写入 public/ 或经路由输出） */
export function flagDocument(flag: FlagDef, options: { lang?: 'zh' | 'en' } = {}): string {
  const lang = options.lang ?? 'zh';
  const title = lang === 'en' ? flag.en : flag.zh;
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${FLAG.width} ${FLAG.height}" width="${FLAG.width}" height="${FLAG.height}" role="img" aria-label="${title}">`,
    `  <title>${title}</title>`,
    `  ${flagBody({ hoist: flag.hoist, fly: flag.fly, emblem: flag.emblem })}`,
    '</svg>',
    '',
  ].join('\n');
}
