"use client";

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export type ServicesProps = {
  /** Hizmetler sayfasında üstteki dekoratif şekil gösterilmez. */
  showShape?: boolean;
};

/** Dört kartlı hizmet bölümü — home2 ve hizmetler sayfası paylaşır. */
export default function Services({ showShape = true }: ServicesProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { eyebrow, title, items } = t.home.services2;

  return (
    <section className="service-two">
      {showShape && (
        <div className="shape1 float-bob-y">
          <img
            src="/assets/img/shape/service-v2-shape1.webp"
            alt=""
            decoding="async"
            loading="lazy"
            width={508}
            height={688}
          />
        </div>
      )}
      <div className="container">
        {showShape && (
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>{eyebrow}</h5>
            </div>
            <h2>{title}</h2>
          </div>
        )}
        <div className="row">
          {items.map((item, index) => (
            <div
              key={item.href}
              className="col-xl-3 col-lg-6 wow animated fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <div className="service-two__single">
                <div className="shape2">
                  <img
                    src="/assets/img/shape/service-v2-shape2.webp"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    width={76}
                    height={133}
                  />
                </div>
                <div
                  className="service-two__single-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="service-two__single-icon">
                  <span className={item.icon} aria-hidden="true"></span>
                </div>
                <div className="service-two__single-text">
                  <h2>
                    <Link href={href(item.href)}>{item.title}</Link>
                  </h2>
                  <p>{item.text}</p>
                </div>

                <div className="btn-box">
                  <Link href={href(item.href)}>
                    {t.common.actions.exploreService}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
