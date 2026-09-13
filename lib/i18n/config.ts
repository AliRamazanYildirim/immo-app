/**
 * i18n Çekirdek Konfigürasyonu
 *
 * Desteklenen diller ve her dilin meta bilgileri burada tanımlanır.
 * Yeni dil eklemek için: `locales` dizisine kodu ekle, `localeMeta`ya
 * karşılığını yaz ve `lib/i18n/locales/` altına sözlük dosyasını koy.
 */

export const locales = ["de", "en", "fr", "tr"] as const;

export type Locale = (typeof locales)[number];

/** Prefix'siz istekler bu dile yönlendirilir. */
export const defaultLocale: Locale = "de";

export type LocaleMeta = {
  /** Dil butonunda görünen kısa kod — bayrak yerine kullanılır. */
  shortCode: string;
  /** Dilin kendi dilindeki adı (endonym). */
  nativeName: string;
  /** <html lang> değeri. */
  htmlLang: string;
  /** Open Graph locale değeri. */
  ogLocale: string;
  /** hreflang değeri. */
  hrefLang: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  de: {
    shortCode: "DE",
    nativeName: "Deutsch",
    htmlLang: "de",
    ogLocale: "de_DE",
    hrefLang: "de",
  },
  en: {
    shortCode: "EN",
    nativeName: "English",
    htmlLang: "en",
    ogLocale: "en_US",
    hrefLang: "en",
  },
  fr: {
    shortCode: "FR",
    nativeName: "Français",
    htmlLang: "fr",
    ogLocale: "fr_FR",
    hrefLang: "fr",
  },
  tr: {
    shortCode: "TR",
    nativeName: "Türkçe",
    htmlLang: "tr",
    ogLocale: "tr_TR",
    hrefLang: "tr",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return (locales as readonly string[]).includes(value);
}
