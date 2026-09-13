/**
 * Sunucu tarafı sözlük yükleyici.
 *
 * Dinamik import kullanılır: istemciye yalnızca aktif dilin sözlüğü gider,
 * dört dilin tamamı bundle'a girmez.
 */

import type { Locale } from "./config";
import type { Dictionary } from "./types";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  de: () => import("./locales/de"),
  en: () => import("./locales/en"),
  fr: () => import("./locales/fr"),
  tr: () => import("./locales/tr"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const { default: dictionary } = await loaders[locale]();
  return dictionary;
}
