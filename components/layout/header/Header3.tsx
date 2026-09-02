import Link from "next/link";
import siteConfig from "@/lib/siteConfig";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { HeaderProps } from "./Header1";

export default function Header3({
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
        className={`main-header main-header-one style2 style3 ${scroll ? "" : ""}`}
      >
        <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
          {/* header-lower */}
          <div className="auto-container">
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

                    <div className="main-header-three__middle">
                      <div className="navbar-wrap main-menu">
                        <Menu />
                      </div>
                    </div>

                    <div className="main-header-one__right">
                      <div className="header-search-box" onClick={handlePopup}>
                        <a
                          href="#"
                          className="main-menu__search search-toggler icon-search-interface-symbol"
                        ></a>
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
    </>
  );
}

