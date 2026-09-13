"use client";

/**
 * Merkezi iletişim bilgisi bileşenleri.
 * Etiketler sözlükten gelir; adres/telefon gibi olgusal veriler siteConfig'ten.
 */

import Link from "next/link";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export interface ClassNameProps {
  className?: string;
}

const socialNetworks = [
  { key: "facebook", icon: "icon-facebook", label: "Facebook" },
  { key: "instagram", icon: "icon-instagram", label: "Instagram" },
  { key: "tiktok", icon: "icon-tik-tok", label: "TikTok" },
  { key: "youtube", icon: "icon-youtube", label: "YouTube" },
] as const;

/** Slider ve banner için kompakt iletişim bilgisi. */
export function SliderContactInfo() {
  return (
    <div className="contact-info">
      <ul>
        <li>
          <div className="icon-box">
            <span className="icon-pin" aria-hidden="true"></span>
          </div>
          <div className="text-box">
            <p>{siteConfig.address.full}</p>
          </div>
        </li>

        <li>
          <div className="icon-box">
            <span className="icon-envelope" aria-hidden="true"></span>
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

/** Sosyal medya bağlantıları. */
export function SocialLinks({ className = "social-links" }: ClassNameProps) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      {socialNetworks.map((network) => (
        <Link
          key={network.key}
          href={siteConfig.social[network.key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common.a11y.socialProfile.replace(
            "{network}",
            network.label,
          )}
        >
          <span className={network.icon} aria-hidden="true"></span>
        </Link>
      ))}
    </div>
  );
}

/** Footer için kısa metin formatında sosyal bağlantılar. */
export function FooterSocialLinks({
  className = "footer-social-link",
}: ClassNameProps) {
  const { t } = useTranslation();

  const shortLinks = [
    { key: "twitter", text: "x", label: "X" },
    { key: "instagram", text: "in", label: "Instagram" },
    { key: "dribbble", text: "db", label: "Dribbble" },
    { key: "instagram", text: "ig", label: "Instagram" },
  ] as const;

  return (
    <div className={className}>
      {shortLinks.map((link) => (
        <Link
          key={link.text}
          href={siteConfig.social[link.key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common.a11y.socialProfile.replace(
            "{network}",
            link.label,
          )}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

/** İletişim sayfası için ayrıntılı bilgi listesi. */
export function ContactPageInfo() {
  const { t } = useTranslation();
  const { labels } = t.common;

  return (
    <ul>
      <li>
        <div className="inner">
          <div className="icon-box">
            <span className="icon-pin" aria-hidden="true"></span>
          </div>

          <div className="content-box">
            <h4>{labels.address}</h4>
            <p>{siteConfig.address.full}</p>
          </div>
        </div>
      </li>

      <li>
        <div className="inner">
          <div className="icon-box">
            <span className="icon-phone" aria-hidden="true"></span>
          </div>

          <div className="content-box">
            <h4>{labels.phone}</h4>
            <p>
              <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
            </p>
          </div>
        </div>
      </li>

      <li>
        <div className="inner">
          <div className="icon-box">
            <span className="icon-envelope" aria-hidden="true"></span>
          </div>

          <div className="content-box">
            <h4>{labels.email}</h4>
            <p>
              <Link href={getMailtoLink()}>{siteConfig.contact.email}</Link>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

/** Footer için adres ve telefon bilgisi. */
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
