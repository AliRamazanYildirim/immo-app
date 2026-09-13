import type { Metadata } from "next";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dM_Sans } from "@/lib/font";
import siteConfig from "@/lib/siteConfig";
import { getDictionary } from "@/lib/i18n/dictionary";
import { initRequestLocale } from "@/lib/i18n/server";
import { TranslationProvider } from "@/lib/i18n/TranslationProvider";
import { isLocale, locales, localeMeta, type Locale } from "@/lib/i18n/config";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale }));
}

/**
 * Yalnızca site geneli varsayılanlar.
 * Canonical ve hreflang burada TANIMLANMAZ — layout metadata'sı alt sayfalara
 * miras kaldığı için her sayfa anasayfayı canonical gösterirdi. Sayfa bazlı
 * değerler lib/i18n/metadata.ts üzerinden her route'ta üretilir.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);
  const { meta } = dictionary.pages;

  return {
    metadataBase: new URL(siteConfig.seo.siteUrl),
    title: {
      default: meta.defaultTitle,
      template: meta.titleTemplate,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: siteConfig.company.name }],
    creator: siteConfig.company.name,
    publisher: siteConfig.company.name,
    icons: {
      icon: siteConfig.logos.favicon,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = await initRequestLocale(params);
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={`${dM_Sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning={true}>
        {/* Neden yalnızca common? Sayfa metinleri sunucuda kalır; bkz. TranslationProvider */}
        <TranslationProvider locale={locale} dictionary={{ common: dictionary.common }}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
