"use client";

import Link from "next/link";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export default function Footer2() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { footer, company } = t.common;

  const quickLinks = [
    { label: footer.links.aboutUs, path: "/about" },
    { label: footer.links.services, path: "/service" },
    { label: footer.links.projects, path: "/projects" },
    { label: footer.links.contactUs, path: "/contact" },
  ];

  const usefulLinks = [
    { label: footer.links.impressum, path: "/impressum" },
    { label: footer.links.datenschutz, path: "/datenschutz" },
    { label: footer.links.faq, path: "/faq" },
    { label: footer.links.support, path: "/contact" },
  ];

  return (
    <footer className="main-footer alternat-2">
      <div className="widget-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="logo-widget footer-widget">
                <figure className="footer-logo">
                  <Link href={href("/")}>
                    <img
                      src={siteConfig.logos.main}
                      alt={siteConfig.company.name}
                      loading="lazy"
                      decoding="async"
                      width={459}
                      height={508}
                      style={{ maxHeight: "70px", width: "auto" }}
                    />
                  </Link>
                </figure>
                <div className="text">
                  <p>{company.description}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="links-widget footer-widget ml_50">
                <div className="widget-title">
                  <h3>{footer.quickLinkTitle}</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    {quickLinks.map((link) => (
                      <li key={link.path}>
                        <Link href={href(link.path)}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="links-widget footer-widget ml_30">
                <div className="widget-title">
                  <h3>{footer.usefulLinksTitle}</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    {usefulLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={href(link.path)}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="contact-widget footer-widget">
                <div className="widget-title">
                  <h3>{footer.contactTitle}</h3>
                </div>
                <div className="widget-content">
                  <p>{company.slogan}</p>
                  <ul className="info-list clearfix">
                    <li>
                      <i className="icon-pin" aria-hidden="true"></i>
                      {siteConfig.address.full}
                    </li>
                    <li>
                      <i className="icon-envelope" aria-hidden="true"></i>
                      <Link href={getMailtoLink()}>
                        {siteConfig.contact.email}
                      </Link>
                    </li>
                    <li>
                      <i className="icon-phone" aria-hidden="true"></i>
                      <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom centred">
        <div className="auto-container">
          <div className="copyright">
            <p>
              {footer.copyright} {siteConfig.company.copyrightYear}{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev-portfolio-eight-khaki.vercel.app/"
              >
                {footer.by} {siteConfig.company.name}
              </a>{" "}
              {footer.allRightsReserved} |{" "}
              <Link href={href("/impressum")}>{footer.links.impressum}</Link> |{" "}
              <Link href={href("/datenschutz")}>
                {footer.links.datenschutz}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
