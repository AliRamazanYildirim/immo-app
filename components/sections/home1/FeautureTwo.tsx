"use client";

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export type FeautureTwoProps = {
  /** home3 bölümü `style4` varyantını ve ters animasyon yönünü kullanır. */
  variant?: "style4";
};

export default function FeautureTwo({ variant }: FeautureTwoProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { items } = t.home.featureTwo;

  const isStyle4 = variant === "style4";
  const animations = isStyle4
    ? ["fadeInLeft", "fadeInRight"]
    : ["fadeInRight", "fadeInLeft"];

  return (
    <section className={`feauture-two ${isStyle4 ? "style4" : ""}`.trim()}>
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div
              key={item.href}
              className={`col-xl-6 wow animated ${animations[index % animations.length]}`}
              data-wow-delay="0.1s"
            >
              <div className="feauture-two__single">
                <div
                  className="feauture-two__single-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="icon-box">
                    <span className={item.icon} aria-hidden="true"></span>
                  </div>
                </div>
                <div className="feauture-two__single-content">
                  <h2>
                    <Link href={href(item.href)}>
                      {item.titleLine1} <br />
                      {item.titleLine2}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
