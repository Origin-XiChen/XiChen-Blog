/**
 * 联邦财产名录（Federation Properties）
 *
 * 「联邦财产」指由联邦技术标准院建档、并以开源方式托管于 GitHub 的工程资产。
 * 与世界观文献不同，这些条目是真实可下载的软件，其发布与分发均以 GitHub
 * Release 为准。本站只登记地址、不复制产物，因此链接永远指向最新版本。
 *
 * ── 实时链接的取法 ───────────────────────────────────────────────
 * GitHub 提供了一条与版本号解耦的固定地址：
 *
 *   https://github.com/<owner>/<repo>/releases/latest/download/<asset>
 *
 * 该地址会在请求时由 GitHub 重定向到「最新一个正式 Release」的对应资产，
 * 所以本站不需要在每次发版后回来改链接——贴一次即可长期有效。
 */

/** 托管账户 */
export const OWNER = 'Origin-XiChen';

/** 可下载资产（发布产物） */
export interface PropertyAsset {
  /** 资产文件名，必须与 Release 中上传的文件名逐字一致 */
  file: string;
  /** 体积，字节；用于在页面上如实标注 */
  bytes: number;
  /** 说明 */
  note: { zh: string; en: string };
}

export interface Property {
  /** 路由与资源名 */
  id: string;
  /** 序列号 */
  order: number;
  /** 项目名 */
  name: string;
  /** 仓库名 */
  repo: string;
  /** 一句话定位 */
  tagline: { zh: string; en: string };
  /** 版本号，仅作展示；下载地址不依赖它 */
  version: string;
  /** 版本发布日期 */
  releasedAt: string;
  /** 许可证 */
  license: string;
  /** 运行平台 */
  platform: { zh: string; en: string };
  /** 技术栈标签 */
  stack: readonly string[];
  /** 技术要点，取 README 中已确证的条目 */
  highlights: readonly { zh: string; en: string }[];
  /** 可下载资产 */
  assets: readonly PropertyAsset[];
  /** 归档技术日志的 slug（与 src/content/blog 下文件名一致） */
  logSlug: string;
  /** 文献编号 */
  logDocNo: string;
}

export const PROPERTIES: readonly Property[] = [
  {
    id: 'campusnetauth',
    order: 1,
    name: 'CampusNetAuth',
    repo: 'campus-net-auth',
    tagline: {
      zh: '校园网无感认证工具，把每天重复的登录交给后台守护进程',
      en: 'Seamless campus-network authentication — the daily login handed to a background daemon',
    },
    version: 'V0.5.1',
    releasedAt: '2026-09-25',
    license: 'GPL-3.0',
    platform: {
      zh: 'Windows 10 / 11 x64（需 WebView2 运行时）',
      en: 'Windows 10 / 11 x64 (requires the WebView2 runtime)',
    },
    stack: ['Python', 'Win32 API', 'WebView2', 'DPAPI', 'PyInstaller'],
    highlights: [
      {
        zh: '无感认证：监听系统网络地址变更通知，接入即自动登录，秒级响应',
        en: 'Seamless auth: subscribes to system address-change notifications and logs in the moment the link comes up',
      },
      {
        zh: '异常自愈：假成功复核与门户残留会话主动下线，状态不会悄悄跑偏',
        en: 'Self-healing: re-verifies suspected false successes and clears stale portal sessions',
      },
      {
        zh: '凭据安全：密码经 Windows DPAPI 加密落盘，不以明文存放',
        en: 'Credential safety: the password is sealed at rest with Windows DPAPI, never stored in plaintext',
      },
      {
        zh: '单文件交付：PyInstaller 打包为单个 exe，绿色免安装，删目录即卸载',
        en: 'Single-file delivery: packaged by PyInstaller into one green, install-free exe',
      },
      {
        zh: '升级自愈：目录搬迁或注册表自启项失效时，启动即自动接回',
        en: 'Upgrade and self-repair: a moved folder or a stale Run-key entry is re-linked on next launch',
      },
    ],
    assets: [
      {
        file: 'CampusNetAuth.exe',
        bytes: 18951126,
        note: { zh: '免安装单文件程序', en: 'Install-free single-file program' },
      },
    ],
    logSlug: 'campusnetauth',
    logDocNo: 'FT-0001-0013',
  },
  {
    id: 'novelcrawler',
    order: 2,
    name: 'NovelCrawler',
    repo: 'NovelCrawler',
    tagline: {
      zh: '多源小说与漫画聚合下载器，自建书源、自持数据、零云端依赖',
      en: 'A multi-source novel and comic aggregator — your own sources, your own data, no cloud dependency',
    },
    version: 'V0.19.2',
    releasedAt: '2026-09-07',
    license: 'GPL-3.0',
    platform: {
      zh: 'Windows 10 / 11（免安装）或 Python 3.9+ 源码运行',
      en: 'Windows 10 / 11 (install-free), or run from source on Python 3.9+',
    },
    stack: ['Python', 'WebView2', 'pdf.js', 'WebRTC', 'MQTT', 'EPUB'],
    highlights: [
      {
        zh: '多源聚合：10 个内置小说书源，并支持订阅社区书源仓库批量扩充',
        en: 'Aggregation: 10 built-in novel sources, plus community source-repo subscriptions',
      },
      {
        zh: '模糊检索：支持拼音与中英文名映射，不必记准书名',
        en: 'Fuzzy search: pinyin and CN/EN title mapping, so the exact title is not required',
      },
      {
        zh: '大 PDF 治理：三档图片压缩、按章节拆分、pdf.js 分段按需加载',
        en: 'Large-PDF handling: three compression tiers, per-chapter splitting and segmented pdf.js loading',
      },
      {
        zh: '手机远程：局域网、热点接力、公网隧道与 WebRTC 直连四种通路',
        en: 'Phone access: LAN, hotspot relay, public tunnel and direct WebRTC',
      },
      {
        zh: '数据自持：书架、进度、笔记与订阅全部存于本地，不上传云端',
        en: 'Data sovereignty: shelves, progress, notes and subscriptions stay entirely local',
      },
    ],
    assets: [
      {
        file: 'NovelCrawler.exe',
        bytes: 156286715,
        note: { zh: '免安装单文件程序', en: 'Install-free single-file program' },
      },
      {
        file: 'usage.txt',
        bytes: 669,
        note: { zh: '使用说明', en: 'Usage notes' },
      },
    ],
    logSlug: 'novelcrawler',
    logDocNo: 'FT-0001-0014',
  },
] as const;

/** 仓库主页 */
export function repoUrl(property: Property): string {
  return `https://github.com/${OWNER}/${property.repo}`;
}

/** Release 列表页 */
export function releasesUrl(property: Property): string {
  return `${repoUrl(property)}/releases`;
}

/** 某一版本的 Release 页 */
export function releaseTagUrl(property: Property): string {
  return `${repoUrl(property)}/releases/tag/${property.version}`;
}

/**
 * 实时下载地址：始终指向最新正式 Release 的资产。
 * GitHub 侧作 302 重定向，因此发版后本站无需改动。
 */
export function downloadUrl(property: Property, asset: PropertyAsset): string {
  return `${repoUrl(property)}/releases/latest/download/${asset.file}`;
}

/** shields.io 徽章 */
export function badge(property: Property, kind: 'release' | 'license' | 'stars'): string {
  return `https://img.shields.io/github/${kind}/${OWNER}/${property.repo}`;
}

/** 把字节数写成便于阅读的形式 */
export function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

/** 按 id 取财产 */
export function getProperty(id: string): Property | undefined {
  return PROPERTIES.find((property) => property.id === id);
}
