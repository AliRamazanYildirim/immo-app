"use client";
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

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

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  },
};

const reviews = [
  "ARY GROUP transformed our residential villa beyond all expectations. Their focus on natural daylight, clean structural lines, and seamless indoor-outdoor transitions turned our architectural vision into a timeless, functional sanctuary.",
  "From initial building permit documentation to bespoke interior millwork, their team executed our corporate campus with complete cost transparency, zero budget deviations, and impeccable German engineering standards.",
  "Navigating complex zoning regulations and energetic retrofits for our historic property felt effortless with their 3D BIM modeling and dedicated on-site supervision. Truly an extraordinary architectural partner.",
];

export default function TestimonialSlider2() {
  const [mounted, setMounted] = useState(false);

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
          <div className="rating-box">
            <a href="#">
              <i className="icon-star"></i>
            </a>
            <a href="#">
              <i className="icon-star"></i>
            </a>
            <a href="#">
              <i className="icon-star"></i>
            </a>
            <a href="#">
              <i className="icon-star"></i>
            </a>
            <a href="#">
              <i className="icon-star"></i>
            </a>
          </div>
          <div className="text-box">
            <p>{reviews[0]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
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
              <div className="rating-box">
                <a href="#">
                  <i className="icon-star"></i>
                </a>
                <a href="#">
                  <i className="icon-star"></i>
                </a>
                <a href="#">
                  <i className="icon-star"></i>
                </a>
                <a href="#">
                  <i className="icon-star"></i>
                </a>
                <a href="#">
                  <i className="icon-star"></i>
                </a>
              </div>

              <div className="text-box">
                <p>{text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-pagination"
          id="testimonials-one__pagination"
        ></div>
      </Swiper>
    </>
  );
}
