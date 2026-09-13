"use client";

import Link from "next/link";
import siteConfig from "@/lib/siteConfig";
import LanguageSwitcher from "@/components/elements/LanguageSwitcher";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import type { HeaderProps } from "./Header1";

export default function Header2({
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
    <header className="main-header main-header-one style2">
      <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
        {/* header-lower */}
        <div className="auto-container">
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

                  <div className="main-header-two__middle">
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

                    <div className="btn-box">
                      <Link className="thm-btn" href={href("/about")}>
                        <span className="txt">
                          {t.common.actions.discoverMore}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isSidebar={isSidebar}
        handleSidebar={handleSidebar}
      />
    </header>
  );
}
