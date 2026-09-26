export const languages = {
  zh: { label: '中文', htmlLang: 'zh-CN' },
  en: { label: 'English', htmlLang: 'en' },
} as const;

export type Lang = keyof typeof languages;

export const langCodes: Lang[] = Object.keys(languages) as Lang[];

export const defaultLang: Lang = 'zh';

const zh = {
  'site.title': '和星联邦官方文献馆',
  'site.description':
    '和星联邦官方文献馆，收藏联邦宪章、政府公告、议会决议与技术日志，供世界观存档与查阅。',
  'site.author': '和星联邦文献总署',
  'site.motto': '以和为贵，众星共明',
  'site.latinName': 'PeaceStar Federation',

  'nav.home': '文献馆',
  'nav.documents': '官方文献',
  'nav.techlogs': '技术日志',
  'nav.domains': '联邦五域',
  'nav.about': '关于本馆',
  'nav.rss': 'RSS 订阅',
  'nav.theme': '切换主题',
  'nav.lang': 'English',

  'home.latest': '最新发布',
  'home.documents': '官方文献',
  'home.documentsHint': '宪章、公告与决议，联邦的根本文书。',
  'home.techlogs': '技术日志',
  'home.techlogsHint': '联邦技术标准院归档的工程记录。',
  'home.domains': '联邦五域',
  'home.domainsHint': '联邦下辖五域，各立域旗、各承纹章，旗式同出一源。',
  'home.domainsAll': '州域总览',
  'home.empty': '暂无文献，敬请期待。',
  'home.stats.docs': '在册官方文献',
  'home.stats.techlogs': '技术日志',
  'home.stats.domains': '联邦州域',
  'home.stats.since': '星历元年建馆',
  'home.languageTitle': '选择语言',
  'home.languageHint': '正在根据你的浏览器语言自动跳转…',

  'domain.indexKicker': '联邦五域',
  'domain.indexTitle': '州域总览',
  'domain.indexDesc':
    '联邦以星域分治，下辖曦和、磐星、沧澜、长风、归元五域。五域各有域旗一面，旗式沿国旗之制，仅易其双色与本域纹章。',
  'domain.detailKicker': '州域档案',
  'domain.order': '序次',
  'domain.capital': '首府',
  'domain.terrain': '地貌',
  'domain.industry': '产业',
  'domain.seats': '议席',
  'domain.emblem': '纹章',
  'domain.colors': '旗色',
  'domain.blazonTitle': '旗帜释义',
  'domain.flagNote': '本旗为州域正式域旗，制式与国旗同源，仅换双色与本域纹章。',
  'domain.switch': '其余州域',
  'about.flags': '州域旗帜',
  'flag.download': '下载矢量图',

  'category.charter': '宪章',
  'category.proclamation': '公告',
  'category.resolution': '决议',
  'category.techlog': '技术日志',

  'post.published': '发布于',
  'post.updated': '更新于',
  'post.minutes': '分钟阅读',
  'post.tags': '标签',
  'post.backHome': '返回文献馆',
  'post.previous': '上一篇',
  'post.next': '下一篇',
  'post.notTranslated': '该文献暂无其他语言版本',
  'post.docInfo': '文献信息',
  'post.docNo': '文献编号',
  'post.issuedBy': '发布机关',
  'post.classification': '密级',
  'post.stellarDate': '星历日期',

  'about.title': '关于本馆',
  'about.description': '和星联邦官方文献馆概况、国旗释义与世界观设定说明。',

  '404.title': '页面走丢了',
  '404.description': '你访问的页面不存在或已被移动。',
  '404.back': '回到文献馆',

  'a11y.skip': '跳到正文',

  'footer.builtWith': '本站为虚构世界观设定，由联邦文献总署维护',
  'footer.disclaimer': '全部机构、文献与人物均属虚构，与现实无关。',
} as const;

export type UIKey = keyof typeof zh;

const en: Record<UIKey, string> = {
  'site.title': 'PeaceStar Federation Official Archives',
  'site.description':
    'The official archives of the PeaceStar Federation — charters, proclamations, resolutions and technical logs preserved for worldbuilding records.',
  'site.author': 'Federal Archives Administration',
  'site.motto': 'Peace Above All, Stars Shine Together',
  'site.latinName': 'PeaceStar Federation',

  'nav.home': 'Archives',
  'nav.documents': 'Documents',
  'nav.techlogs': 'Tech Logs',
  'nav.domains': 'Domains',
  'nav.about': 'About',
  'nav.rss': 'RSS feed',
  'nav.theme': 'Toggle theme',
  'nav.lang': '中文',

  'home.latest': 'Latest',
  'home.documents': 'Official Documents',
  'home.documentsHint': 'Charters, proclamations and resolutions — the founding papers.',
  'home.techlogs': 'Technical Logs',
  'home.techlogsHint': 'Engineering records filed by the Federal Institute of Technical Standards.',
  'home.domains': 'The Five Domains',
  'home.domainsHint':
    'Five domains under the Federation, each with its own standard and emblem, all drawn from one system.',
  'home.domainsAll': 'All domains',
  'home.empty': 'No records yet. Stay tuned.',
  'home.stats.docs': 'Documents on file',
  'home.stats.techlogs': 'Technical logs',
  'home.stats.domains': 'Federal domains',
  'home.stats.since': 'Established Stellar Year 1',
  'home.languageTitle': 'Choose a language',
  'home.languageHint': 'Redirecting based on your browser language…',

  'domain.indexKicker': 'THE FIVE DOMAINS',
  'domain.indexTitle': 'Domains',
  'domain.indexDesc':
    'The Federation governs by star territory and comprises five domains: Xihe, Panxing, Canglan, Changfeng and Guiyuan. Each flies its own standard, built on the national flag and differing only in its two colours and its emblem.',
  'domain.detailKicker': 'DOMAIN RECORD',
  'domain.order': 'Order',
  'domain.capital': 'Capital',
  'domain.terrain': 'Terrain',
  'domain.industry': 'Industry',
  'domain.seats': 'Seats',
  'domain.emblem': 'Emblem',
  'domain.colors': 'Colours',
  'domain.blazonTitle': 'Blazon',
  'domain.flagNote':
    'This is the domain’s official standard, built on the same system as the national flag and differing only in its two colours and its emblem.',
  'domain.switch': 'Other domains',
  'about.flags': 'Domain standards',
  'flag.download': 'Download SVG',

  'category.charter': 'Charter',
  'category.proclamation': 'Proclamation',
  'category.resolution': 'Resolution',
  'category.techlog': 'Technical Log',

  'post.published': 'Published',
  'post.updated': 'Updated',
  'post.minutes': 'min read',
  'post.tags': 'Tags',
  'post.backHome': 'Back to the archives',
  'post.previous': 'Previous',
  'post.next': 'Next',
  'post.notTranslated': 'This record is not available in another language yet',
  'post.docInfo': 'Document information',
  'post.docNo': 'Document no.',
  'post.issuedBy': 'Issued by',
  'post.classification': 'Classification',
  'post.stellarDate': 'Stellar date',

  'about.title': 'About the Archives',
  'about.description':
    'An overview of the PeaceStar Federation Archives, the national flag and the setting.',

  '404.title': 'Page not found',
  '404.description': 'The page you are looking for does not exist or has moved.',
  '404.back': 'Back to the archives',

  'a11y.skip': 'Skip to content',

  'footer.builtWith': 'A fictional worldbuilding archive, maintained by the Federal Archives Administration',
  'footer.disclaimer': 'All institutions, documents and persons are fictional.',
};

export const ui: Record<Lang, Record<UIKey, string>> = { zh, en };

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
