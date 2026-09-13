"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import siteConfig, { getTelLink } from "@/lib/siteConfig";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";
import { splitLocale } from "@/lib/i18n/routing";
import { LanguageSwitcherInline } from "@/components/elements/LanguageSwitcher";
import { buildNavigation, isNavItemActive } from "./navigationItems";

export interface MobileMenuProps {
  isSidebar?: boolean;
  handleMobileMenu?: () => void;
  handleSidebar?: () => void;
}

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}: MobileMenuProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const pathname = usePathname() || "/";
  const { pathWithoutLocale } = splitLocale(pathname);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const navigation = buildNavigation(t);

  return (
    <>
      {/*Mobile Menu */}
      <div className="mobile-menu">
        <nav className="menu-box">
          <button
            type="button"
            className="close-btn"
            onClick={handleMobileMenu}
            aria-label={t.common.a11y.closeMenu}
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
          <div className="nav-logo">
            <Link href={href("/")}>
              <img
                src={siteConfig.logos.light}
                alt={siteConfig.company.name}
                loading="lazy"
                decoding="async"
                width={459}
                height={508}
              />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">
              {navigation.map((item, index) => {
                const isOpen = openIndex === index;
                const active = isNavItemActive(item, pathWithoutLocale);

                return (
                  <li
                    key={item.href}
                    className={
                      [
                        active ? "active" : "",
                        item.children ? "menu-item-has-children" : "",
                      ]
                        .filter(Boolean)
                        .join(" ") || undefined
                    }
                  >
                    <Link href={href(item.href)} onClick={handleMobileMenu}>
                      {item.label}
                    </Link>

                    {item.children && (
                      <>
                        <ul
                          className="sub-menu"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={href(child.href)}
                                onClick={handleMobileMenu}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          className={isOpen ? "dropdown-btn open" : "dropdown-btn"}
                          onClick={() => handleToggle(index)}
                          aria-expanded={isOpen}
                          aria-label={t.common.a11y.toggleSubmenu}
                        >
                          <span className="fa fa-angle-right" aria-hidden="true" />
                        </button>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobilde dil seçimi dropdown yerine doğrudan görünür */}
          <LanguageSwitcherInline />

          <div className="contact-info">
            <div className="icon-box">
              <span className="icon-call" aria-hidden="true"></span>
            </div>
            <p>
              <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
            </p>
          </div>
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li>
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.a11y.socialProfile.replace(
                    "{network}",
                    "Facebook",
                  )}
                >
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.a11y.socialProfile.replace(
                    "{network}",
                    "X",
                  )}
                >
                  <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.a11y.socialProfile.replace(
                    "{network}",
                    "Instagram",
                  )}
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.a11y.socialProfile.replace(
                    "{network}",
                    "LinkedIn",
                  )}
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.a11y.socialProfile.replace(
                    "{network}",
                    "YouTube",
                  )}
                >
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
}
