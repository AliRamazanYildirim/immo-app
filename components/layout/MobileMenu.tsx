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
import LanguageSwitcherInline from "@/components/elements/LanguageSwitcherInline";
import SocialLink, { socialIconSets } from "@/components/elements/SocialLink";
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
              {socialIconSets.fontAwesome.map((item) => (
                <li key={item.network}>
                  <SocialLink
                    {...item}
                    iconTag="i"
                    ariaLabelTemplate={t.common.a11y.socialProfile}
                  />
                </li>
              ))}
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
