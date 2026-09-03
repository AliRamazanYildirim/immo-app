import Link from "next/link";
import siteConfig from "@/lib/siteConfig";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { HeaderProps } from "./Header1";

export default function Header4({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}: HeaderProps) {
  return (
    <>
      <header
        className={`main-header main-header-one style4 ${scroll ? "" : ""}`}
      >
        <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
          {/* header-lower */}
          <div className="main-header-four__top">
            <div className="container">
              <div className="main-header-four__top-inner">
                <div className="header-contact-box">
                  <ul>
                    <li>
                      <Link href={`tel:${siteConfig.contact.phoneRaw}`}>{siteConfig.contact.phone}</Link>
                    </li>
                    <li>
                      <Link href={`mailto:${siteConfig.contact.email}`}>
                        {siteConfig.contact.email}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="header-social-links">
                  <ul>
                    <li>
                      <Link href={siteConfig.social.facebook}>
                        <span className="icon-facebook"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href={siteConfig.social.instagram}>
                        <span className="icon-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href={siteConfig.social.tiktok}>
                        <span className="icon-tik-tok"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href={siteConfig.social.youtube}>
                        <span className="icon-youtube"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-four__bottom">
            <div className="container">
              <div className="menu-area__inner">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="main-header-one__inner">
                      <div className="main-header-one__left">
                        <div className="logo-box">
                          <Link href="/">
                            <img src={siteConfig.logos.light} alt="" />
                          </Link>
                        </div>
                      </div>

                      <div className="main-header-one__middle">
                        <div className="navbar-wrap main-menu">
                          <Menu />
                        </div>
                      </div>

                      <div className="main-header-one__right">
                        <div
                          className="header-search-box"
                          onClick={handlePopup}
                        >
                          <Link
                            href="#"
                            className="main-menu__search search-toggler icon-search-interface-symbol"
                          ></Link>
                        </div>
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

