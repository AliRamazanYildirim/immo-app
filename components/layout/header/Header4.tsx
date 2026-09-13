"use client";

import Link from "next/link";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";
import LanguageSwitcher from "@/components/elements/LanguageSwitcher";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import type { HeaderProps } from "./Header1";

const socialNetworks = [
  { key: "facebook", icon: "icon-facebook", label: "Facebook" },
  { key: "instagram", icon: "icon-instagram", label: "Instagram" },
  { key: "tiktok", icon: "icon-tik-tok", label: "TikTok" },
  { key: "youtube", icon: "icon-youtube", label: "YouTube" },
] as const;

export default function Header4({
  scroll,
  isMobileMenu: _isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}: HeaderProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();

  return (
    <>
      <header className="main-header main-header-one style4">
        <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
          {/* header-lower */}
          <div className="main-header-four__top">
            <div className="container">
              <div className="main-header-four__top-inner">
                <div className="header-contact-box">
                  <ul>
                    <li>
                      <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
                    </li>
                    <li>
                      <Link href={getMailtoLink()}>
                        {siteConfig.contact.email}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="header-social-links">
                  <ul>
                    {socialNetworks.map((network) => (
                      <li key={network.key}>
                        <Link
                          href={siteConfig.social[network.key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t.common.a11y.socialProfile.replace(
                            "{network}",
                            network.label,
                          )}
                        >
                          <span className={network.icon} aria-hidden="true"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-four__bottom">
            <div className="container">
              <div className="menu-area__inner">
                <button
                  type="button"
                  className="mobile-nav-toggler"
                  onClick={handleMobileMenu}
                  aria-label={t.common.a11y.openMenu}
                >
                  <i className="fas fa-bars" aria-hidden="true"></i>
                </button>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="main-header-one__inner">
                      <div className="main-header-one__left">
                        <div className="logo-box">
                          <Link href={href("/")}>
                            <img
                              src={siteConfig.logos.light}
                              alt={siteConfig.company.name}
                              width={459}
                              height={508}
                              fetchPriority="high"
                              loading="eager"
                              decoding="async"
                            />
                          </Link>
                        </div>
                      </div>

                      <div className="main-header-one__middle">
                        <div className="navbar-wrap main-menu">
                          <Menu />
                        </div>
                      </div>

                      <div className="main-header-one__right">
                        <div className="header-search-box">
                          <button
                            type="button"
                            className="main-menu__search search-toggler icon-search-interface-symbol"
                            onClick={handlePopup}
                            aria-label={t.common.a11y.openSearch}
                          ></button>
                        </div>

                        <LanguageSwitcher tone="dark" />
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isSidebar={isSidebar}
        handleSidebar={handleSidebar}
      />
    </>
  );
}
