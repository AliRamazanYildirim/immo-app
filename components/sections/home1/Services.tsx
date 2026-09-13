"use client";

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

/** Numaralı hizmet kartları — home1 ve hizmetler sayfası paylaşır. */
export default function Services() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { eyebrow, title, items } = t.home.services1;

  return (
    <section className="service-one">
      <div
        className="service-one__shape2"
        style={{
          backgroundImage: "url(/assets/img/shape/service-v1-shape2.webp)",
        }}
      ></div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{eyebrow}</h5>
          </div>
          <h2>{title}</h2>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div
              key={item.href}
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay={`${index % 2 === 0 ? "0.1" : "0.2"}s`}
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img
                    src="/assets/img/shape/service-v1-shape1.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={181}
                    height={244}
                  />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">{item.number}</div>
                  <div className="icon-box">
                    <span className={item.icon} aria-hidden="true"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href={href(item.href)}>{item.title}</Link>
                    </h2>
                    <p>{item.text}</p>
                    <div className="btn-box">
                      <Link href={href(item.href)}>
                        {t.common.actions.exploreService}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
