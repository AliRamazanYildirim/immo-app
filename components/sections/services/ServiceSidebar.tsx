/** Hizmet detay kenar çubuğu: kategoriler, destek kutusu ve telefon. */

import Link from "next/link";
import siteConfig, { getTelLink } from "@/lib/siteConfig";
import type { ServiceSlug } from "@/lib/i18n/locales/de/services";
import { getTranslations } from "@/lib/i18n/server";

/** Kenar çubuğundaki kategori sırası. */
const categorySlugs: ServiceSlug[] = [
  "architecture",
  "interior-design",
  "building-renovation",
  "construction-site",
];

export type ServiceSidebarProps = {
  activeSlug: ServiceSlug;
};

export default async function ServiceSidebar({ activeSlug }: ServiceSidebarProps) {
  const { t, href } = await getTranslations();
  const { details, sidebar } = t.services;

  return (
    <div className="sidebar">
      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">{sidebar.categoriesTitle}</h3>

        <ul className="sidebar__category-list">
          {categorySlugs.map((categorySlug) => {
            const isActive = categorySlug === activeSlug;

            return (
              <li key={categorySlug}>
                <Link
                  className={isActive ? "active" : undefined}
                  href={href(`/${categorySlug}`)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {details[categorySlug].breadcrumbTitle}{" "}
                  <span className="icon-left-arrow" aria-hidden="true"></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/*End Sidebar Single */}

      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__support">
        <div
          className="sidebar__support-bg"
          style={{
            backgroundImage: "url(/assets/img/service/sidebar-support-bg.webp)",
          }}
        ></div>
        <div className="sidebar__support__inner text-center">
          <h2>
            {sidebar.supportTitleLine1} <br />
            {sidebar.supportTitleLine2}
          </h2>
          <div className="btn-box">
            <Link className="thm-btn" href={href("/contact")}>
              <span className="txt">{sidebar.supportCta}</span>
            </Link>
          </div>
        </div>
      </div>
      {/*End Sidebar Single */}

      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__contact">
        <div className="sidebar__contact-inner">
          <div className="icon-box">
            <span className="icon-phone" aria-hidden="true"></span>
          </div>

          <div className="text-box">
            <p>{sidebar.contactNote}</p>
            <h4>
              {sidebar.contactFreeLabel}{" "}
              <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
            </h4>
          </div>
        </div>
      </div>
      {/*End Sidebar Single */}
    </div>
  );
}
