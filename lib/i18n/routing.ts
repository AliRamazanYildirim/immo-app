/**
 * Locale-aware routing yardımcıları.
 *
 * Tüm iç linkler `localizedHref` üzerinden geçer; böylece dil prefix'i
 * tek bir yerde yönetilir ve component'lerde string birleştirme kalmaz.
 */

import { defaultLocale, isLocale, type Locale } from "./config";

/**
 * Locale prefix'i ekler: ("de", "/about") -> "/de/about"
 * Dış linkler (http, mailto:, tel:, #) olduğu gibi bırakılır.
 */
export function localizedHref(locale: Locale, path: string): string {
  if (isExternalHref(path)) return path;

  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

/** Pathname'den locale prefix'ini ayırır. */
export function splitLocale(pathname: string): {
  locale: Locale;
  pathWithoutLocale: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const [maybeLocale, ...rest] = segments;

  if (isLocale(maybeLocale)) {
    return {
      locale: maybeLocale,
      pathWithoutLocale: rest.length > 0 ? `/${rest.join("/")}` : "/",
    };
  }

  return { locale: defaultLocale, pathWithoutLocale: pathname || "/" };
}

/** Aynı sayfanın başka bir dildeki karşılığını üretir — dil değiştirici kullanır. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const { pathWithoutLocale } = splitLocale(pathname);
  return localizedHref(target, pathWithoutLocale);
}

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}
