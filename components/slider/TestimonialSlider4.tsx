"use client";
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import type { SharedDict } from "@/lib/i18n/locales/de/shared";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 3,
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

  // Pagination
  pagination: {
    el: "#testimonials-two__pagination",
    clickable: true,
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
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};


export type TestimonialSlider4Props = {
  testimonials: SharedDict["testimonials"];
};

export default function TestimonialSlider4({ testimonials }: TestimonialSlider4Props) {
  const [mounted, setMounted] = useState(false);

  const testimonialsData = testimonials;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="thm-swiper__slider swiper-container"
        style={{ minHeight: "340px" }}
      >
        <div className="row">
          {testimonialsData.slice(0, 3).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="testimonials-two__single">
                <div className="testimonials-two__single-top">
                  <div className="img-box">
                    <img src={item.image} alt={item.name} decoding="async" loading="lazy" width={80} height={80} />
                  </div>
                  <div className="icon-box">
                    <span className="icon-quote"></span>
                  </div>
                </div>
                <div className="testimonials-two__single-text">
                  <p>{item.text}</p>
                </div>
                <div className="testimonials-two__single-bottom">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="thm-swiper__slider swiper-container"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="testimonials-two__single">
              <div className="testimonials-two__single-top">
                <div className="img-box">
                  <img src={item.image} alt={item.name} decoding="async" loading="lazy" width={80} height={80} />
                </div>

                <div className="icon-box">
                  <span className="icon-quote"></span>
                </div>
              </div>

              <div className="testimonials-two__single-text">
                <p>{item.text}</p>
              </div>

              <div className="testimonials-two__single-bottom">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
