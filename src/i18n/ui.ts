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
  'nav.properties': '联邦财产',
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
  'home.properties': '联邦财产',
  'home.propertiesHint': '联邦技术标准院建档、托管于 GitHub 的工程资产。',
  'home.propertiesAll': '财产名录',
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

  'prop.indexKicker': '联邦财产',
  'prop.indexTitle': '联邦财产名录',
  'prop.indexDesc':
    '下列工程资产由联邦技术标准院建档，源码与发行均托管于 GitHub。本馆只登记发布地址，不复制产物——下载链接直接指向最新一版 Release，故长期有效。',
  'prop.detailKicker': '财产档案',
  'prop.order': '序次',
  'prop.repo': '源码仓库',
  'prop.version': '当前版本',
  'prop.releasedAt': '发布日期',
  'prop.license': '许可证',
  'prop.platform': '运行平台',
  'prop.stack': '技术栈',
  'prop.highlights': '技术要点',
  'prop.downloads': '下载',
  'prop.latestNote':
    '以下地址指向 GitHub 的最新正式 Release，由 GitHub 在请求时重定向到当前版本，发版后无需更换链接。',
  'prop.download': '下载',
  'prop.repoLink': '查看仓库',
  'prop.releasesLink': '全部发行版',
  'prop.logLink': '技术日志',
  'prop.gplNote': '本财产以 GPL-3.0 授权，仅供个人学习与技术研究使用。',
  'prop.mitNote': '本财产以 MIT 授权发布。',
  'prop.fileSize': '文件体积',
  'prop.openSource': '开源托管于 GitHub',

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
  'nav.properties': 'Properties',
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
  'home.properties': 'Federation Properties',
  'home.propertiesHint': 'Engineering assets filed by the Federal Institute of Technical Standards and hosted on GitHub.',
  'home.propertiesAll': 'Property register',
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

  'prop.indexKicker': 'FEDERATION PROPERTIES',
  'prop.indexTitle': 'Federation Properties',
  'prop.indexDesc':
    'The engineering assets below are filed by the Federal Institute of Technical Standards and hosted, source and releases alike, on GitHub. This archive records the release address only and copies no artifacts — the download links point straight at the latest Release, so they stay valid.',
  'prop.detailKicker': 'PROPERTY RECORD',
  'prop.order': 'Order',
  'prop.repo': 'Source repository',
  'prop.version': 'Current version',
  'prop.releasedAt': 'Released',
  'prop.license': 'Licence',
  'prop.platform': 'Platform',
  'prop.stack': 'Stack',
  'prop.highlights': 'Technical notes',
  'prop.downloads': 'Downloads',
  'prop.latestNote':
    'The addresses below point at the latest published GitHub Release, which GitHub redirects to the current version on request, so no link needs replacing after a new release.',
  'prop.download': 'Download',
  'prop.repoLink': 'View repository',
  'prop.releasesLink': 'All releases',
  'prop.logLink': 'Technical log',
  'prop.gplNote': 'Released under GPL-3.0; for personal study and technical research only.',
  'prop.mitNote': 'Released under the MIT licence.',
  'prop.fileSize': 'File size',
  'prop.openSource': 'Open source, hosted on GitHub',

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
