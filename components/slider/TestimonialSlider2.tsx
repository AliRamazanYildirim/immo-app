"use client";

import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
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
    el: "#testimonials-one__pagination",
    clickable: true,
  },
};

function RatingStars() {
  return (
    <div className="rating-box" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <i key={index} className="icon-star"></i>
      ))}
    </div>
  );
}

export default function TestimonialSlider2() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  const reviews = t.shared.reviewsShort;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="swiper-container"
        id="testimonials-one__carousel"
        style={{ minHeight: "180px", overflow: "hidden" }}
      >
        <div
          className="testimonials-one__content-single"
          style={{ paddingRight: "65px" }}
        >
          <RatingStars />
          <div className="text-box">
            <p>{reviews[0]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      {...swiperOptions}
      className="swiper-container"
      id="testimonials-one__carousel"
      style={{ overflow: "hidden" }}
    >
      {reviews.map((text, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div
            className="testimonials-one__content-single"
            style={{ paddingRight: "65px" }}
          >
            <RatingStars />

            <div className="text-box">
              <p>{text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination" id="testimonials-one__pagination"></div>
    </Swiper>
  );
}
