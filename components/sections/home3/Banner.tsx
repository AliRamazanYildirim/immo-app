"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import siteConfig from "@/lib/siteConfig";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
};

const slideImages = [
  "/assets/img/slider/slider-v3-img1.webp",
  "/assets/img/slider/slider-v3-img2.webp",
  "/assets/img/slider/slider-v3-img3.webp",
];

const socialNetworks = [
  { key: "facebook", icon: "icon-facebook-1", label: "Facebook" },
  { key: "twitter", icon: "icon-x-twitter", label: "X" },
  { key: "dribbble", icon: "icon-dribbble", label: "Dribbble" },
  { key: "instagram", icon: "icon-letter-v", label: "Instagram" },
] as const;

export default function Banner() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const banner = t.home.banner3;

  return (
    <section className="main-slider main-slider-three">
      <Swiper
        {...swiperOptions}
        className="swiper-container main-slider-three__carousel"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={image} className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt={banner.imageAlt}
                  className="image-layer__img"
                  fetchPriority={index === 0 ? "high" : undefined}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="main-slider-three__social-links">
              <div className="title-box">
                <div className="text">
                  <p>{banner.followUs}</p>
                </div>
                <div className="border-box"></div>
              </div>

              <ul className="social-links">
                {socialNetworks.map((network) => (
                  <li key={network.key}>
                    <Link
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
                  </li>
                ))}
              </ul>
            </div>

            <div className="container">
              <div className="main-slider-three__single text-center">
                <div className="main-slider-three__content">
                  <div className="logo-box">
                    <img
                      src={siteConfig.logos.redWhite}
                      alt={siteConfig.company.name}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width={459}
                      height={508}
                    />
                  </div>
                  <div className="title">
                    <h2>{banner.title}</h2>
                  </div>

                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href={href("/contact")}>
                        <span className="txt">
                          {t.common.actions.discoverMore}
                        </span>
                      </Link>
                    </div>

                    <div className="btn-two">
                      <Link className="thm-btn" href={href("/contact")}>
                        <span className="txt">{banner.ctaSecondary}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
