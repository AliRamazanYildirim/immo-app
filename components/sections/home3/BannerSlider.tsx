"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import SocialLink, { socialIconSets } from "@/components/elements/SocialLink";
import siteConfig from "@/lib/siteConfig";
import type { HomeDict } from "@/lib/i18n/locales/de/home";
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

export type BannerSliderProps = {
  content: HomeDict["banner3"];
};

export default function BannerSlider({ content }: BannerSliderProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();

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
                  alt={content.imageAlt}
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
                  <p>{content.followUs}</p>
                </div>
                <div className="border-box"></div>
              </div>

              <ul className="social-links">
                {socialIconSets.slider.map((item) => (
                  <li key={item.network}>
                    <SocialLink
                      {...item}
                      ariaLabelTemplate={t.common.a11y.socialProfile}
                    />
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
                    <h2>{content.title}</h2>
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
                        <span className="txt">{content.ctaSecondary}</span>
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
