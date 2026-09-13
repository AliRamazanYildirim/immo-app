"use client";

/**
 * Dil değiştirici — mobil menü varyantı.
 * Dropdown yerine 4 dil de görünür; tek dokunuşla dil değişir, menü içinde
 * iç içe açılır katman olmaz.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/routing";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export type LanguageSwitcherInlineProps = {
  className?: string;
};

export default function LanguageSwitcherInline({
  className,
}: LanguageSwitcherInlineProps) {
  const { locale, t } = useTranslation();
  const pathname = usePathname() || "/";

  return (
    <nav
      className={`lang-inline ${className ?? ""}`}
      aria-label={t.common.language.switcherLabel}
    >
      <span className="lang-inline__label">{t.common.language.switcherLabel}</span>
      <ul className="lang-inline__list">
        {locales.map((item) => {
          const meta = localeMeta[item];
          const isActive = item === locale;

          return (
            <li key={item}>
              <Link
                href={switchLocalePath(pathname, item)}
                hrefLang={meta.hrefLang}
                lang={meta.htmlLang}
                aria-current={isActive ? "true" : undefined}
                className={`lang-inline__item ${isActive ? "is-active" : ""}`}
              >
                <span aria-hidden="true">{meta.shortCode}</span>
                <span className="sr-only">{meta.nativeName}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
