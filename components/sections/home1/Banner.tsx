"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import {
  SliderContactInfo,
  SocialLinks,
} from "@/components/elements/ContactInfo";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
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

  // Pagination
  pagination: {
    el: "#main-slider-one__pagination",
    clickable: true,
  },
};

const VIDEO_ID = "vfhzo499OeA";

const slideImages = [
  "/assets/img/slider/slider-v1-img1.webp",
  "/assets/img/slider/slider-v1-img2.webp",
  "/assets/img/slider/slider-v1-img3.webp",
];

export default function Banner() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const [isOpen, setOpen] = useState<boolean>(false);
  const banner = t.home.banner1;

  return (
    <>
      <section className="main-slider main-slider-one">
        <Swiper
          {...swiperOptions}
          className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none"
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
              <div className="shape1">
                <img
                  src="/assets/img/shape/slider-v1-shape1.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1043}
                  height={960}
                />
              </div>
              <div className="container">
                <div className="main-slider-one__single">
                  <div className="main-slider-one__content">
                    <div className="shape2 float-bob-x">
                      <img
                        src="/assets/img/shape/slider-v1-shape2.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={60}
                        height={35}
                      />
                    </div>
                    <h3>{banner.eyebrow}</h3>
                    <h2>{banner.title}</h2>
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
                    <SliderContactInfo />
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="swiper-pagination"
            id="main-slider-one__pagination"
          ></div>
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
