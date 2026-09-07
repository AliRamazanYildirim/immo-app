"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export default function BrandSlider2() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="thm-swiper__slider swiper-container"
      >
        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img1.webp"
              alt="Chrome"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img6.webp"
              alt="Chrome"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img2.webp"
              alt="Figma"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img7.webp"
              alt="Figma"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img3.webp"
              alt="GitLab"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img8.webp"
              alt="GitLab"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img4.webp"
              alt="Dribbble"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img9.webp"
              alt="Dribbble"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img5.webp"
              alt="CodePen"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img10.webp"
              alt="CodePen"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img1.webp"
              alt="Chrome"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img6.webp"
              alt="Chrome"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img2.webp"
              alt="Figma"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img7.webp"
              alt="Figma"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img3.webp"
              alt="GitLab"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img8.webp"
              alt="GitLab"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img4.webp"
              alt="Dribbble"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img9.webp"
              alt="Dribbble"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="img-box">
            <img src="/assets/img/brand/brand-v2-img5.webp"
              alt="CodePen"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>

          <div className="img-box2">
            <img src="/assets/img/brand/brand-v2-img10.webp"
              alt="CodePen"
              width={110}
              height={110} decoding="async" loading="lazy" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
