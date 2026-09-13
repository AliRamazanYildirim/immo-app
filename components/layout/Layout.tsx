/**
 * Sayfa iskeleti.
 *
 * Neden Server Component? Breadcrumb, sayfa içeriği ve footer statik;
 * etkileşimli parçalar (header, yukarı dön butonu, wow animasyonları) kendi
 * client bileşenlerinde. Böylece footer ve breadcrumb metinleri JS'e girmez.
 */

import type { ReactNode } from "react";
import BackToTop from "../elements/BackToTop";
import WowAnimations from "../elements/WowAnimations";
import Breadcrumb from "./Breadcrumb";
import SiteHeader, { type HeaderStyle } from "./SiteHeader";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";

export type LayoutProps = {
  headerStyle?: HeaderStyle;
  footerStyle?: 1 | 2;
  breadcrumbTitle?: string;
  breadcrumbBg?: string;
  children: ReactNode;
  wrapperCls?: string;
};

export default function Layout({
  headerStyle = 1,
  footerStyle = 1,
  breadcrumbTitle,
  breadcrumbBg,
  children,
  wrapperCls,
}: LayoutProps) {
  return (
    <>
      <div className={`body-dark-bg ${wrapperCls ?? ""}`} id="top">
        <SiteHeader headerStyle={headerStyle} />

        {breadcrumbTitle && (
          <Breadcrumb
            breadcrumbTitle={breadcrumbTitle}
            breadcrumbBg={breadcrumbBg}
          />
        )}

        {children}

        {footerStyle === 2 ? <Footer2 /> : <Footer1 />}
      </div>
      <BackToTop />
      <WowAnimations />
    </>
  );
}
