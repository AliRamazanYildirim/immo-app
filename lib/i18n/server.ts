/**
 * Server Component'ler için istek kapsamlı çeviri erişimi.
 *
 * Neden prop yerine istek kapsamı? Bölümler sayfalara derin iç içe yerleşiyor;
 * locale'i her bileşene prop olarak taşımak onlarca imzayı kirletirdi.
 * React `cache()` her sunucu isteği için ayrı bir depo verir: layout ve sayfa
 * locale'i bir kez yazar, altındaki bileşenler okur.
 *
 * Neden hem layout hem sayfa yazar? İstemci tarafı navigasyonda layout yeniden
 * render edilmez, yalnızca sayfa edilir. not-found.tsx ise params almaz ve
 * layout'un yazdığı değeri okur.
 */

import { cache } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";
import { getDictionary } from "./dictionary";
import { localizedHref } from "./routing";
import type { Dictionary } from "./types";

export type LocaleParams = Promise<{ locale: string }>;

export type LocalePageProps = Readonly<{
  params: LocaleParams;
}>;

export type ServerTranslations = {
  locale: Locale;
  t: Dictionary;
  /** Aktif dile göre iç link üretir: href("/about") -> "/de/about" */
  href: (path: string) => string;
};

const requestLocale = cache((): { current: Locale | null } => ({
  current: null,
}));

export function setRequestLocale(locale: Locale): void {
  requestLocale().current = locale;
}

/** Route param'ını doğrular ve isteğin locale'ini ayarlar; geçersizse 404. */
export async function initRequestLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);
  return locale;
}

export async function getTranslations(): Promise<ServerTranslations> {
  const locale = requestLocale().current;
  // Neden throw? Programlama hatası: sayfa locale'i ayarlamadan bileşen
  // render edilmiş. Statik üretimde build anında görünür hale gelir.
  if (!locale) {
    throw new Error(
      "getTranslations() requires initRequestLocale() in the current page or layout",
    );
  }

  const t = await getDictionary(locale);
  return { locale, t, href: (path) => localizedHref(locale, path) };
}
