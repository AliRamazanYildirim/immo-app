/** "Yardıma hazırız" CTA şeridi — SSS ve referanslar sayfaları paylaşır. */

import Link from "next/link";
import { getTranslations } from "@/lib/i18n/server";

export default async function CtaOne() {
  const { t, href } = await getTranslations();
  const faq = t.pages.faq;

  return (
    <section className="cta-one">
      <div
        className="cta-one__pattern"
        style={{
          backgroundImage: "url(/assets/img/pattern/cta-v1-pattern.webp)",
        }}
      ></div>
      <div className="container">
        <div className="cta-one__inner">
          <div className="cta-one__content">
            <h2>
              {faq.ctaTitleLine1} <br />
              {faq.ctaTitleLine2}
            </h2>
          </div>

          <div className="cta-one__btn">
            <Link className="thm-btn" href={href("/service")}>
              <span className="txt">{faq.ctaButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
