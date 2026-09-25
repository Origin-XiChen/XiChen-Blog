export const languages = {
  zh: { label: '中文', htmlLang: 'zh-CN' },
  en: { label: 'English', htmlLang: 'en' },
} as const;

export type Lang = keyof typeof languages;
export const langCodes: Lang[] = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'zh';

const zh = {
  'site.title': "XiChen's Blog",
  'site.description': '记录编程、人工智能与日常思考的个人博客。',
  'site.author': 'XiChen',

  'nav.home': '首页',
  'nav.about': '关于',
  'nav.rss': 'RSS',
  'nav.theme': '切换主题',
  'nav.lang': 'English',

  'home.latest': '最新文章',
  'home.allPosts': '全部文章',
  'home.readMore': '阅读全文',
  'home.empty': '还没有文章，敬请期待。',
  'home.languageTitle': '选择语言',
  'home.languageHint': '正在根据你的浏览器语言自动跳转…',

  'post.published': '发布于',
  'post.updated': '更新于',
  'post.minutes': '分钟阅读',
  'post.tags': '标签',
  'post.backHome': '返回首页',
  'post.previous': '上一篇',
  'post.next': '下一篇',
  'post.notTranslated': '该文章暂无其他语言版本',

  'about.title': '关于',
  'about.description': '关于这个博客和作者。',

  '404.title': '页面走丢了',
  '404.description': '你访问的页面不存在或已被移动。',
  '404.back': '回到首页',

  'footer.builtWith': '使用 Astro 构建，由 GitHub Pages 托管',
} as const;

export type UIKey = keyof typeof zh;

const en: Record<UIKey, string> = {
  'site.title': "XiChen's Blog",
  'site.description': 'A personal blog about programming, AI and everyday thoughts.',
  'site.author': 'XiChen',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.rss': 'RSS',
  'nav.theme': 'Toggle theme',
  'nav.lang': '中文',

  'home.latest': 'Latest posts',
  'home.allPosts': 'All posts',
  'home.readMore': 'Read more',
  'home.empty': 'No posts yet. Stay tuned.',
  'home.languageTitle': 'Choose a language',
  'home.languageHint': 'Redirecting based on your browser language…',

  'post.published': 'Published',
  'post.updated': 'Updated',
  'post.minutes': 'min read',
  'post.tags': 'Tags',
  'post.backHome': 'Back to home',
  'post.previous': 'Previous',
  'post.next': 'Next',
  'post.notTranslated': 'This post is not available in another language yet',

  'about.title': 'About',
  'about.description': 'About this blog and its author.',

  '404.title': 'Page not found',
  '404.description': 'The page you are looking for does not exist or has moved.',
  '404.back': 'Back to home',

  'footer.builtWith': 'Built with Astro, hosted on GitHub Pages',
};

export const ui: Record<Lang, Record<UIKey, string>> = { zh, en };

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
