import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Footer2() {
  return (
    <>
      <footer className="main-footer alternat-2">
        <div className="widget-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src={siteConfig.logos.main} alt={siteConfig.company.name} loading="lazy" decoding="async" width={459} height={508} style={{ maxHeight: "70px", width: "auto" }} />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      {siteConfig.company.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_50">
                  <div className="widget-title">
                    <h3>Quick Link</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_30">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/impressum">Impressum</Link>
                      </li>
                      <li>
                        <Link href="/datenschutz">Datenschutz</Link>
                      </li>
                      <li>
                        <Link href="/faq">Faq</Link>
                      </li>
                      <li>
                        <Link href="/contact">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="contact-widget footer-widget">
                  <div className="widget-title">
                    <h3>Contact</h3>
                  </div>
                  <div className="widget-content">
                    <p>{siteConfig.company.slogan}</p>
                    <ul className="info-list clearfix">
                      <li>
                        <i className="icon-pin"></i>{siteConfig.address.full}
                      </li>
                      <li>
                        <i className="icon-envelope"></i>
                        <Link href={`mailto:${siteConfig.contact.email}`}>
                          {siteConfig.contact.email}
                        </Link>
                      </li>
                      <li>
                        <i className="icon-phone"></i>
                        <Link href={`tel:${siteConfig.contact.phoneRaw}`}>{siteConfig.contact.phone}</Link>
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
                Copyright © {siteConfig.company.copyrightYear}{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dev-portfolio-eight-khaki.vercel.app/"
                >
                  by {siteConfig.company.name}
                </a>{" "}
                All Rights Reserved | <Link href="/impressum">Impressum</Link> | <Link href="/datenschutz">Datenschutz</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
