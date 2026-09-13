"use client";

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export type FeaturesProps = {
  /** home3 bölümü `style2` varyantını kullanır. */
  variant?: "style2";
};

/** Üç özellik kartı — home1, home2 ve home3 aynı içeriği paylaşır. */
export default function Features({ variant }: FeaturesProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { eyebrow, items } = t.home.features;

  // Kartların giriş animasyonu dönüşümlü: sol, sağ, sol
  const animations = ["fadeInLeft", "fadeInRight", "fadeInLeft"];

  return (
    <section className={`feauture-one ${variant ?? ""}`.trim()}>
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`col-xl-4 col-lg-4 wow ${animations[index % animations.length]}`}
              data-wow-delay={`${index * 100}ms`}
              data-wow-duration="1500ms"
            >
              <div className="feauture-one__single">
                <div className="feauture-one__single-text">
                  <p>{eyebrow}</p>
                  <h2>
                    <Link href={href(item.href)}>{item.title}</Link>
                  </h2>
                </div>

                <div className="feauture-one__single-bottom">
                  <div className="btn-box">
                    <Link href={href(item.href)} aria-label={item.title}>
                      <span className="icon-plus" aria-hidden="true"></span>
                    </Link>
                  </div>

                  <div className="icon-box">
                    <span className={item.icon} aria-hidden="true"></span>
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
