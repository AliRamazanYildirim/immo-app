/**
 * Locale yönlendirme proxy'si (Next.js 16'da middleware -> proxy).
 *
 * Prefix'siz gelen istekler (örn. /about) kullanıcının tarayıcı diline,
 * yoksa varsayılan dile yönlendirilir: /de/about
 */

import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export default function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocalePrefix) {
    const locale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();

    // Seçilen dili hatırla. Neden yalnızca değiştiğinde? Her yanıta
    // Set-Cookie eklemek CDN önbelleğini devre dışı bırakır.
    if (request.cookies.get(LOCALE_COOKIE)?.value !== locale) {
      response.cookies.set(LOCALE_COOKIE, locale, {
        path: "/",
        maxAge: COOKIE_MAX_AGE,
        sameSite: "lax",
      });
    }
    return response;
  }

  const locale = resolveLocale(request);
  const redirectUrl = new URL(request.nextUrl);
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(redirectUrl);
}

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  const headerLocale = matchAcceptLanguage(
    request.headers.get("accept-language"),
  );
  if (headerLocale) return headerLocale;

  return defaultLocale;
}

/** Accept-Language başlığını q-değerine göre sıralayıp ilk desteklenen dili seçer. */
function matchAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const quality = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      return {
        tag: tag.trim().toLowerCase(),
        quality: quality ? Number.parseFloat(quality.slice(2)) || 0 : 1,
      };
    })
    // RFC 9110: q=0 "kabul edilmez" demektir, aday olamaz
    .filter((entry) => entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    // "de-CH" gibi bölgesel etiketlerde ana dil kodunu kullan
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return undefined;
}

export const config = {
  /**
   * Statik dosyalar, API route'ları ve Next.js dahili yolları hariç her istek.
   * public/assets ve public/img altındaki varlıklar yönlendirilmemeli.
   */
  matcher: [
    "/((?!api|_next/static|_next/image|assets|img|favicon.ico|robots.txt|sitemap.xml|.*\\.[^/]*$).*)",
  ],
};
