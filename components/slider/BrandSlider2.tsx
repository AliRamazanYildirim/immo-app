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
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 2, spaceBetween: 30 },
    767: { slidesPerView: 3, spaceBetween: 30 },
    991: { slidesPerView: 4, spaceBetween: 30 },
    1199: { slidesPerView: 4, spaceBetween: 30 },
    1350: { slidesPerView: 5, spaceBetween: 30 },
  },
};

/**
 * Marka adları özel isimdir — çevrilmez, bu yüzden sözlükte değil burada tutulur.
 * Her marka normal ve hover (img-box2) görselini birlikte gösterir.
 */
const brands = [
  {
    name: "Chrome",
    src: "/assets/img/brand/brand-v2-img1.webp",
    hoverSrc: "/assets/img/brand/brand-v2-img6.webp",
  },
  {
    name: "Figma",
    src: "/assets/img/brand/brand-v2-img2.webp",
    hoverSrc: "/assets/img/brand/brand-v2-img7.webp",
  },
  {
    name: "GitLab",
    src: "/assets/img/brand/brand-v2-img3.webp",
    hoverSrc: "/assets/img/brand/brand-v2-img8.webp",
  },
  {
    name: "Dribbble",
    src: "/assets/img/brand/brand-v2-img4.webp",
    hoverSrc: "/assets/img/brand/brand-v2-img9.webp",
  },
  {
    name: "CodePen",
    src: "/assets/img/brand/brand-v2-img5.webp",
    hoverSrc: "/assets/img/brand/brand-v2-img10.webp",
  },
];

export default function BrandSlider2() {
  // Sonsuz döngünün boşluksuz akması için listeyi iki kez kullan
  const slides = [...brands, ...brands];

  return (
    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
      {slides.map((brand, index) => (
        <SwiperSlide key={`${brand.name}-${index}`} className="swiper-slide">
          <div className="img-box">
            <img
              src={brand.src}
              alt={brand.name}
              width={110}
              height={110}
              decoding="async"
              loading="lazy"
            />
          </div>

          <div className="img-box2">
            <img
              src={brand.hoverSrc}
              alt=""
              width={110}
              height={110}
              decoding="async"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
