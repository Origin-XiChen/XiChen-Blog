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
  /** 国旗的标准制式（矢量重绘用参数，见 src/lib/flags.ts） */
  flagRatio: 604 / 340,
  /** 联邦首都 */
  capital: { zh: '中枢星·和都', en: 'Hedu, the Central Star' },
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

/** 纹章元素（绘制逻辑见 src/lib/flags.ts 的 emblemMarkup） */
export type EmblemKey = 'peace' | 'sun' | 'stone' | 'wave' | 'wind' | 'origin';

export interface Domain {
  /** 路由与资源名 */
  id: string;
  /** 序列号，用于官方排序「一、二、三」 */
  order: number;
  name: { zh: string; en: string };
  latin: string;
  /** 域之雅称 */
  epithet: { zh: string; en: string };
  /** 首府 */
  capital: { zh: string; en: string };
  /** 主要地貌 */
  terrain: { zh: string; en: string };
  /** 主导产业 */
  industry: { zh: string; en: string };
  /** 议事会席位 */
  seats: number;
  /** 旗面双色：[靠旗杆一侧, 外侧] */
  colors: readonly [string, string];
  /** 两色的官方色名 */
  colorNames: readonly [{ zh: string; en: string }, { zh: string; en: string }];
  /** 星心圆盘上的纹章元素 */
  emblem: EmblemKey;
  emblemName: { zh: string; en: string };
  /** 旗式说明（纹章式描述） */
  blazon: { zh: string; en: string };
}

/**
 * 联邦五域。
 *
 * 旗式统一沿用国旗制式：纵向双色旗面、中置鎏金五角星、
 * 星心嵌素白圆盘，盘上改绘本域纹章，以别于国旗之和平符号。
 */
export const DOMAINS: readonly Domain[] = [
  {
    id: 'xihe',
    order: 1,
    name: { zh: '曦和', en: 'Xihe' },
    latin: 'Xihe',
    epithet: { zh: '日出之域', en: 'Where the Sun Rises' },
    capital: { zh: '昭明', en: 'Zhaoming' },
    terrain: { zh: '向阳高台与赤色原野', en: 'Sunward plateaus and crimson plains' },
    industry: { zh: '光能、农产与气象', en: 'Solar power, agriculture and meteorology' },
    seats: 78,
    colors: ['#C10000', '#1A1C26'],
    colorNames: [
      { zh: '绯红', en: 'Crimson' },
      { zh: '玄墨', en: 'Ink Black' },
    ],
    emblem: 'sun',
    emblemName: { zh: '旭日纹', en: 'Rising Sun' },
    blazon: {
      zh: '纵向双色旗，左绯红、右玄墨；旗心置鎏金五角星，星心嵌素白圆盘，盘上绘金色旭日纹，以示光启万物。',
      en: 'A vertical bicolour, crimson at the hoist and ink black at the fly, charged at its heart with a gilded five-pointed star; within the star a plain white disc bears a golden rising sun.',
    },
  },
  {
    id: 'panxing',
    order: 2,
    name: { zh: '磐星', en: 'Panxing' },
    latin: 'Panxing',
    epithet: { zh: '磐石之域', en: 'The Bedrock Realm' },
    capital: { zh: '磐京', en: 'Panjing' },
    terrain: { zh: '厚层岩壳与深成矿脉', en: 'Thick rock crust and deep ore veins' },
    industry: { zh: '冶炼、重工与航材', en: 'Smelting, heavy industry and hull materials' },
    seats: 72,
    colors: ['#0B4F8A', '#9A5B22'],
    colorNames: [
      { zh: '岩蓝', en: 'Rock Blue' },
      { zh: '赭石', en: 'Ochre' },
    ],
    emblem: 'stone',
    emblemName: { zh: '磐石纹', en: 'Bedrock' },
    blazon: {
      zh: '纵向双色旗，左岩蓝、右赭石；旗心置鎏金五角星，星心嵌素白圆盘，盘上绘金色磐石纹，以示厚土载物、根基不摇。',
      en: 'A vertical bicolour, rock blue at the hoist and ochre at the fly, charged at its heart with a gilded five-pointed star; within the star a plain white disc bears a golden faceted stone.',
    },
  },
  {
    id: 'canglan',
    order: 3,
    name: { zh: '沧澜', en: 'Canglan' },
    latin: 'Canglan',
    epithet: { zh: '沧溟之域', en: 'The Vast Waters' },
    capital: { zh: '沧屿', en: 'Cangyu' },
    terrain: { zh: '万顷海面与环礁群岛', en: 'Open oceans and ringed archipelagos' },
    industry: { zh: '航运、养殖与潮汐能', en: 'Shipping, mariculture and tidal power' },
    seats: 62,
    colors: ['#00385E', '#0E7C6B'],
    colorNames: [
      { zh: '深海', en: 'Deep Sea' },
      { zh: '青碧', en: 'Jade Green' },
    ],
    emblem: 'wave',
    emblemName: { zh: '沧浪纹', en: 'Great Waves' },
    blazon: {
      zh: '纵向双色旗，左深海、右青碧；旗心置鎏金五角星，星心嵌素白圆盘，盘上绘金色沧浪纹，以示潮汐有信、载舟通远。',
      en: 'A vertical bicolour, deep sea at the hoist and jade green at the fly, charged at its heart with a gilded five-pointed star; within the star a plain white disc bears three golden waves.',
    },
  },
  {
    id: 'changfeng',
    order: 4,
    name: { zh: '长风', en: 'Changfeng' },
    latin: 'Changfeng',
    epithet: { zh: '长风之域', en: 'The Endless Wind' },
    capital: { zh: '云台', en: 'Yuntai' },
    terrain: { zh: '高空气域与浮空台站', en: 'Upper airspace and floating platforms' },
    industry: { zh: '通信、观测与航行调度', en: 'Communications, observation and traffic control' },
    seats: 54,
    colors: ['#3F86B0', '#56456E'],
    colorNames: [
      { zh: '天青', en: 'Sky Blue' },
      { zh: '黛紫', en: 'Violet Grey' },
    ],
    emblem: 'wind',
    emblemName: { zh: '长风纹', en: 'Long Wind' },
    blazon: {
      zh: '纵向双色旗，左天青、右黛紫；旗心置鎏金五角星，星心嵌素白圆盘，盘上绘金色长风纹，以示气行不息、消息通达。',
      en: 'A vertical bicolour, sky blue at the hoist and violet grey at the fly, charged at its heart with a gilded five-pointed star; within the star a plain white disc bears three golden wind strokes.',
    },
  },
  {
    id: 'guiyuan',
    order: 5,
    name: { zh: '归元', en: 'Guiyuan' },
    latin: 'Guiyuan',
    epithet: { zh: '元枢之域', en: 'The Origin Seat' },
    capital: { zh: '元枢', en: 'Yuanshu' },
    terrain: { zh: '中枢星和都与环城台原', en: 'Hedu, the central star, and its ring plateaus' },
    industry: { zh: '司法、档案与礼制', en: 'Justice, archives and ceremonial affairs' },
    seats: 54,
    colors: ['#4A6076', '#1A1C26'],
    colorNames: [
      { zh: '苍青', en: 'Slate Blue' },
      { zh: '玄墨', en: 'Ink Black' },
    ],
    emblem: 'origin',
    emblemName: { zh: '天圆地方纹', en: 'Square within the Circle' },
    blazon: {
      zh: '纵向双色旗，左苍青、右玄墨；旗心置鎏金五角星，星心嵌素白圆盘，盘上绘金色天圆地方纹，以示法度有常、万流归元。',
      en: 'A vertical bicolour, slate blue at the hoist and ink black at the fly, charged at its heart with a gilded five-pointed star; within the star a plain white disc bears a golden square set within a circle.',
    },
  },
] as const;

/** 按 id 取域 */
export function getDomain(id: string): Domain | undefined {
  return DOMAINS.find((domain) => domain.id === id);
}
