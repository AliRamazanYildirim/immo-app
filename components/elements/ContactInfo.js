/**
 * Zentrale Kontaktinformationskomponente
 * Diese Komponente zeigt die Kontaktinformationen auf allen Seiten konsistent an.
 */
import Link from "next/link";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";

/**
 * Kompakte Kontaktinformationen für Slider und Banner
 */
export function SliderContactInfo() {
  return (
    <div className="contact-info">
      <ul>
        <li>
          <div className="icon-box">
            <span className="icon-pin"></span>
          </div>
          <div className="text-box">
            <p>{siteConfig.address.full}</p>
          </div>
        </li>

        <li>
          <div className="icon-box">
            <span className="icon-envelope"></span>
          </div>
          <div className="text-box">
            <p>
              <Link href={getMailtoLink()}>{siteConfig.contact.email}</Link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

/**
 * Soziale Medien Links
 */
export function SocialLinks({ className = "social-links" }) {
  return (
    <div className={className}>
      <Link href={siteConfig.social.facebook}>
        <span className="icon-facebook"></span>
      </Link>
      <Link href={siteConfig.social.instagram}>
        <span className="icon-instagram"></span>
      </Link>
      <Link href={siteConfig.social.tiktok}>
        <span className="icon-tik-tok"></span>
      </Link>
      <Link href={siteConfig.social.youtube}>
        <span className="icon-youtube"></span>
      </Link>
    </div>
  );
}

/**
 * Sozialen Medien Links für Footer (kurzes Textformat)
 */
export function FooterSocialLinks({ className = "footer-social-link" }) {
  return (
    <div className={className}>
      <Link href={siteConfig.social.twitter}>tw</Link>
      <Link href={siteConfig.social.instagram}>in</Link>
      <Link href={siteConfig.social.dribbble}>db</Link>
      <Link href={siteConfig.social.instagram}>ig</Link>
    </div>
  );
}

/**
 * Detaillierte Kontaktinformationen für die Kontaktseite
 */
export function ContactPageInfo() {
  return (
    <ul>
      <li>
        <div className="inner">
          <div className="icon-box">
            <span className="icon-pin"></span>
          </div>

          <div className="content-box">
            <h4>Address</h4>
            <p>{siteConfig.address.full}</p>
          </div>
        </div>
      </li>

      <li>
        <div className="inner">
          <div className="icon-box">
            <span className="icon-phone"></span>
          </div>

          <div className="content-box">
            <h4>Phone</h4>
            <p>
              <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
            </p>
          </div>
        </div>
      </li>

      <li>
        <div className="inner">
          <div className="icon-box">
            <span className="icon-envelope"></span>
          </div>

          <div className="content-box">
            <h4>Email</h4>
            <p>
              <Link href={getMailtoLink()}>{siteConfig.contact.email}</Link>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

/**
 * Adress-und Telefoninformationen für die Fußzeile
 */
export function FooterContactInfo() {
  return (
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
      <FooterSocialLinks />
    </div>
  );
}

export default {
  SliderContactInfo,
  SocialLinks,
  FooterSocialLinks,
  ContactPageInfo,
  FooterContactInfo,
};
