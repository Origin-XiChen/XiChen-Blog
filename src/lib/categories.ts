/**
 * 栏目定义
 * - charter      宪章：联邦根本文书
 * - proclamation 公告：联邦政府对外发布
 * - resolution   决议：联邦议会通过
 * - techlog      技术日志：联邦技术标准院归档的工程记录
 */
export const CATEGORY_ORDER = ['charter', 'proclamation', 'resolution', 'techlog'] as const;

export type Category = (typeof CATEGORY_ORDER)[number];

/** 官方文献（首页第一栏） */
export const DOCUMENT_CATEGORIES: Category[] = ['charter', 'proclamation', 'resolution'];

/** 技术日志（首页第二栏） */
export const TECHLOG_CATEGORY: Category = 'techlog';

export function isDocumentCategory(category: Category): boolean {
  return DOCUMENT_CATEGORIES.includes(category);
}
