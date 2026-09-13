import Link from "next/link";
import siteConfig, { getTelLink } from "@/lib/siteConfig";
import { SocialLinks } from "@/components/elements/ContactInfo";
import { getTranslations } from "@/lib/i18n/server";

export default async function Footer1() {
  const { t, href } = await getTranslations();
  const { footer } = t.common;

  const navigationLinks = [
    { label: footer.links.home, path: "/" },
    { label: footer.links.aboutUs, path: "/about" },
    { label: footer.links.services, path: "/service" },
    { label: footer.links.contactUs, path: "/contact" },
  ];

  const quickLinks = [
    { label: footer.links.support, path: "/contact" },
    { label: footer.links.portfolio, path: "/projects" },
    { label: footer.links.impressum, path: "/impressum" },
    { label: footer.links.datenschutz, path: "/datenschutz" },
  ];

  return (
    <footer className="footer-one">
      <div className="shape1">
        <img
          className="float-bob-y"
          src="/assets/img/shape/footer-v1-shape1.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width={601}
          height={310}
        />
      </div>
      {/*Start Footer Main */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/*Start Single Footer Widget */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="single-footer-widget footer-widget__about">
                <div className="logo-box">
                  <Link href={href("/")}>
                    <img
                      src={siteConfig.logos.main}
                      alt={siteConfig.company.name}
                      loading="lazy"
                      decoding="async"
                      width={459}
                      height={508}
                    />
                  </Link>
                </div>

                <div className="footer-widget__about-inner">
                  <div className="text-box">
                    <p>
                      {siteConfig.address.street},
                      <br />
                      {siteConfig.address.zipCode} {siteConfig.address.city}{" "}
                      {siteConfig.address.country}
                    </p>
                  </div>
                  <div className="number-box">
                    <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
                  </div>
                  <SocialLinks
                    className="footer-social-link"
                    ariaLabelTemplate={t.common.a11y.socialProfile}
                  />
                </div>
              </div>
            </div>
            {/*End Single Footer Widget */}

            {/*Start Single Footer Widget */}
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget footer-widget__links">
                <div className="title">
                  <h2>{footer.navigationTitle}</h2>
                </div>

                <div className="footer-widget__links-box">
                  <ul>
                    {navigationLinks.map((link) => (
                      <li key={link.path}>
                        <Link href={href(link.path)}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Footer Widget */}

            {/*Start Single Footer Widget */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget footer-widget__links quick-link">
                <div className="title">
                  <h2>{footer.quickLinkTitle}</h2>
                </div>

                <div className="footer-widget__links-box">
                  <ul>
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={href(link.path)}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Footer Widget */}

            {/*Start Single Footer Widget */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget footer-widget__newsletter">
                <div className="title">
                  <h2>{footer.newsletterTitle}</h2>
                </div>

                <div className="footer-widget__newsletter-box">
                  <div className="footer-widget__newsletter-text">
                    <p>{footer.newsletterText}</p>
                  </div>

                  <form action="#" className="footer-widget__newsletter-form">
                    <div className="input-box">
                      <label htmlFor="footer-newsletter-email" className="sr-only">
                        {t.common.newsletter.placeholder}
                      </label>
                      <input
                        id="footer-newsletter-email"
                        type="email"
                        placeholder={footer.emailPlaceholder}
                        name="email"
                        autoComplete="email"
                        suppressHydrationWarning
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-form-btn"
                        aria-label={t.common.newsletter.submit}
                      >
                        <i className="icon-telegram" aria-hidden="true"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*End Single Footer Widget */}
          </div>
        </div>
      </div>
      {/*End Footer Main */}

      {/*Start Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="footer-bottom__text text-center">
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
      </div>
      {/*End Footer Bottom */}
    </footer>
  );
}
