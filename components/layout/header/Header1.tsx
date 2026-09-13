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

export interface HeaderProps {
  scroll?: boolean;
  isMobileMenu?: boolean;
  handleMobileMenu?: () => void;
  isSidebar?: boolean;
  handlePopup?: () => void;
  handleSidebar?: () => void;
}

export default function Header1({
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
    <header className="main-header main-header-one">
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
                          src={siteConfig.logos.main}
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

                    <LanguageSwitcher tone="light" />
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
