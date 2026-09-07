"use client";

import { useEffect, useState, type ReactNode } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import SearchPopup from "./SearchPopup";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";

export interface LayoutProps {
  headerStyle?: number;
  footerStyle?: number;
  headTitle?: string;
  breadcrumbTitle?: string;
  breadcrumbBg?: string;
  children: ReactNode;
  wrapperCls?: string;
}

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle: _headTitle,
  breadcrumbTitle,
  breadcrumbBg,
  children,
  wrapperCls,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  // Popup
  const [isPopup, setPopup] = useState<boolean>(false);
  const handlePopup = () => setPopup(!isPopup);

  // Sidebar
  const [isSidebar, setSidebar] = useState<boolean>(false);
  const handleSidebar = () => setSidebar(!isSidebar);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow?.init();

    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      setScroll(scrollCheck);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`body-dark-bg ${wrapperCls ? wrapperCls : ""}`} id="top">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle === 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle === 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle === 3 ? (
          <Header3
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle === 4 ? (
          <Header4
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}

        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

        {breadcrumbTitle && (
          <Breadcrumb
            breadcrumbTitle={breadcrumbTitle}
            breadcrumbBg={breadcrumbBg}
          />
        )}

        {children}

        {(!footerStyle || footerStyle === 1) && <Footer1 />}
        {footerStyle === 2 && <Footer2 />}
      </div>
      <BackToTop scroll={scroll} />
    </>
  );
}
