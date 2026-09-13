/**
 * Sayfa bazlı, dile duyarlı metadata üretici.
 *
 * Canonical ve hreflang layout'ta tanımlanamaz: layout metadata'sı tüm alt
 * sayfalara miras kaldığı için her sayfa kendini anasayfanın kopyası ilan
 * ederdi. Bu yüzden her route kendi metadata'sını buradan üretir.
 */

import type { Metadata } from "next";
import siteConfig from "@/lib/siteConfig";
import { defaultLocale, isLocale, locales, localeMeta } from "./config";
import { getDictionary } from "./dictionary";
import type { Dictionary } from "./types";

type CreateMetadataOptions = {
  locale: string;
  /** Locale prefix'i olmadan yol: "/" , "/about" , "/service" … */
  path: string;
  /** Sözlükten sayfa başlığını seçer; verilmezse site varsayılanı kullanılır. */
  title?: (dictionary: Dictionary) => string;
  /** Sözlükten sayfa açıklamasını seçer. */
  description?: (dictionary: Dictionary) => string;
};

export async function createMetadata({
  locale,
  path,
  title,
  description,
}: CreateMetadataOptions): Promise<Metadata> {
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);
  const { meta } = dictionary.pages;
  const current = localeMeta[locale];

  const suffix = path === "/" ? "" : path;
  const pageTitle = title ? title(dictionary) : meta.defaultTitle;
  const pageDescription = description
    ? description(dictionary)
    : meta.description;

  return {
    // Neden? Varsayılan başlık zaten marka adını içerir; layout'taki
    // "%s | Marka" şablonu uygulanırsa marka iki kez görünür.
    title: title ? pageTitle : { absolute: pageTitle },
    description: pageDescription,
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: Object.fromEntries([
        ...locales.map((item) => [localeMeta[item].hrefLang, `/${item}${suffix}`]),
        ["x-default", `/${defaultLocale}${suffix}`],
      ]),
    },
    openGraph: {
      type: "website",
      locale: current.ogLocale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeMeta[item].ogLocale),
      url: `${siteConfig.seo.siteUrl}/${locale}${suffix}`,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.company.name,
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
  };
}
