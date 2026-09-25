/**
 * 和星联邦（PeaceStar Federation）官方文献馆 · 站点常量
 *
 * 说明：本站为虚构世界观设定（虚拟国）的官方文献存档站，
 * 全部机构名称、文献与人物均属虚构，与现实无关。
 */
export const SITE = {
  /** 站点名称，会显示在页头和浏览器标题里 */
  title: '和星联邦官方文献馆',
  /** 国名简称 */
  shortName: '和星联邦',
  /** 拉丁文／英文名，用作副标题 */
  latinName: 'PeaceStar Federation',
  /** 维护机关，显示在页脚 */
  author: '和星联邦文献总署',
  /** 国家格言 */
  motto: '以和为贵，众星共明',
  /** 格言拉丁文转写 */
  mottoLatin: 'Peace Above All, Stars Shine Together',
  /** 建国年份（星历） */
  foundedYear: 1,
  /** 官方旗帜资源，位于 public/ 目录 */
  flag: 'flag.png',
  /** 部署后的完整地址，仅用于 RSS / 站点地图兜底 */
  url: 'https://origin-xichen.github.io',
};

/** 国旗配色，与 public/flag.png 取样结果一致 */
export const FLAG_COLORS = {
  red: '#C10000',
  blue: '#0070C1',
  gold: '#FFCD00',
  white: '#FFFFFF',
} as const;
