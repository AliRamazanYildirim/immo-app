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

const brands = [
  { name: "Chrome", src: "/assets/img/brand/brand-chrome.webp" },
  { name: "Figma", src: "/assets/img/brand/brand-figma.webp" },
  { name: "GitLab", src: "/assets/img/brand/brand-gitlab.webp" },
  { name: "Dribbble", src: "/assets/img/brand/brand-dribbble.webp" },
  { name: "CodePen", src: "/assets/img/brand/brand-codepen.webp" },
  { name: "CodePen Solid", src: "/assets/img/brand/brand-codepen-solid.webp" },
];

export default function BrandSlider1() {
  const slides = [...brands, ...brands];

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="thm-swiper__slider swiper-container"
      >
        {slides.map((brand, index) => (
          <SwiperSlide key={`${brand.name}-${index}`} className="swiper-slide">
            <div className="img-box">
              <img
                src={brand.src}
                alt={brand.name}
                width={130}
                height={60}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="img-box2">
              <img
                src={brand.src}
                alt={brand.name}
                width={130}
                height={60}
                loading="lazy"
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
