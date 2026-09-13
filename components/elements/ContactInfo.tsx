/**
 * Merkezi iletişim bilgisi bileşenleri.
 * Etiketler sözlükten gelir; adres/telefon gibi olgusal veriler siteConfig'ten.
 *
 * Neden hook yok? Hem Server Component'lerde (footer, iletişim sayfası) hem
 * client slider'da kullanılıyor; metinler çağıran taraftan prop olarak gelir.
 */

import Link from "next/link";
import SocialLink, { socialIconSets } from "@/components/elements/SocialLink";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";
import type { CommonDict } from "@/lib/i18n/locales/de/common";

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

export type SocialLinksProps = {
  className?: string;
  /** Sözlükteki `common.a11y.socialProfile` şablonu. */
  ariaLabelTemplate: string;
};

/** Sosyal medya bağlantıları. */
export function SocialLinks({
  className = "social-links",
  ariaLabelTemplate,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialIconSets.outline.map((item) => (
        <SocialLink
          key={item.network}
          {...item}
          ariaLabelTemplate={ariaLabelTemplate}
        />
      ))}
    </div>
  );
}

export type ContactPageInfoProps = {
  labels: CommonDict["labels"];
};

/** İletişim sayfası için ayrıntılı bilgi listesi. */
export function ContactPageInfo({ labels }: ContactPageInfoProps) {
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
