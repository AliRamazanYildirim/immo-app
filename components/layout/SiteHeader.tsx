"use client";

/**
 * Header'ın etkileşimli kabuğu: yapışkan menü, mobil menü ve arama popup'ı.
 *
 * Neden Layout'tan ayrı? Bu state yalnızca header'ı ilgilendiriyor; Layout
 * Server Component kalınca breadcrumb, sayfa içeriği ve footer sunucuda render edilir.
 */

import { useEffect, useState } from "react";
import { useScrolled } from "@/lib/hooks/useScrolled";
import SearchPopup from "./SearchPopup";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";

const MOBILE_MENU_BODY_CLASS = "mobile-menu-visible";

const headers = {
  1: Header1,
  2: Header2,
  3: Header3,
  4: Header4,
} as const;

export type HeaderStyle = keyof typeof headers;

export type SiteHeaderProps = {
  headerStyle: HeaderStyle;
};

export default function SiteHeader({ headerStyle }: SiteHeaderProps) {
  const scroll = useScrolled();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const [isSidebar, setSidebar] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    document.body.classList.toggle(MOBILE_MENU_BODY_CLASS, !isMobileMenu);
  };
  const handlePopup = () => setPopup(!isPopup);
  const handleSidebar = () => setSidebar(!isSidebar);

  // Neden? Her sayfa kendi header'ını mount eder; menü açıkken navigasyon
  // olursa state sıfırlanır ama <body> sınıfı kalırdı.
  useEffect(() => {
    return () => document.body.classList.remove(MOBILE_MENU_BODY_CLASS);
  }, []);

  const Header = headers[headerStyle];

  return (
    <>
      <Header
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        handlePopup={handlePopup}
        isSidebar={isSidebar}
        handleSidebar={handleSidebar}
      />
      <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
    </>
  );
}
