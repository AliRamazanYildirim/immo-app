"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocalizedHref, useTranslation } from "@/lib/i18n/TranslationProvider";
import { splitLocale } from "@/lib/i18n/routing";
import { buildNavigation, isNavItemActive } from "./navigationItems";

export default function Menu() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const pathname = usePathname() || "/";
  const { pathWithoutLocale } = splitLocale(pathname);

  const navigation = buildNavigation(t);

  return (
    <ul className="navigation">
      {navigation.map((item) => {
        const active = isNavItemActive(item, pathWithoutLocale);
        const classNames = [
          active ? "active" : "",
          item.children ? "menu-item-has-children" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={item.href} className={classNames || undefined}>
            <Link
              href={href(item.href)}
              aria-current={active && !item.children ? "page" : undefined}
            >
              {item.label}
            </Link>

            {item.children && (
              <ul className="sub-menu">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={href(child.href)}
                      aria-current={
                        child.href === pathWithoutLocale ? "page" : undefined
                      }
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
