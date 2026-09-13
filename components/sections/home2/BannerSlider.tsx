"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import SocialLink, { socialIconSets } from "@/components/elements/SocialLink";
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

const VIDEO_ID = "vfhzo499OeA";

const slideImages = [
  "/assets/img/slider/slider-v2-img1.webp",
  "/assets/img/slider/slider-v2-img2.webp",
  "/assets/img/slider/slider-v2-img3.webp",
];

export type BannerSliderProps = {
  content: HomeDict["banner2"];
};

export default function BannerSlider({ content }: BannerSliderProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <section className="main-slider main-slider-two">
        <Swiper {...swiperOptions} className="swiper-wrapper">
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
              <div
                className="main-slider-two__pattern"
                style={{
                  backgroundImage:
                    "url(/assets/img/pattern/main-slider-v2-pattern.webp)",
                }}
              ></div>

              <div className="main-slider-two__social-links">
                {socialIconSets.slider.map((item) => (
                  <SocialLink
                    key={item.network}
                    {...item}
                    ariaLabelTemplate={t.common.a11y.socialProfile}
                  />
                ))}
              </div>

              <div className="container">
                <div className="main-slider-two__single">
                  <div className="main-slider-two__content">
                    <div className="big-title">
                      <h2>{content.brandTitle}</h2>
                    </div>
                    <h2>
                      {content.titleLine1} <br />
                      {content.titleLine2}
                    </h2>
                    <div className="btn-box">
                      <div className="btn-one">
                        <Link className="thm-btn" href={href("/contact")}>
                          <span className="txt">
                            {t.common.actions.discoverMore}
                          </span>
                        </Link>
                      </div>
                      <div className="btn-two">
                        <button
                          type="button"
                          onClick={() => setOpen(true)}
                          className="video-popup"
                        >
                          <div className="main-slider-one__icon">
                            <i
                              className="icon-play-button-1"
                              aria-hidden="true"
                            ></i>
                            <span>{t.common.actions.watchOurVideos}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={VIDEO_ID}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
