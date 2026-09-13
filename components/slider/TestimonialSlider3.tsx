"use client";

import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import type { SharedDict } from "@/lib/i18n/locales/de/shared";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 3,
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

  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 3 },
  },
};

export type TestimonialSlider3Props = {
  clients: SharedDict["clientThumbs"];
};

export default function TestimonialSlider3({ clients }: TestimonialSlider3Props) {
  const [mounted, setMounted] = useState(false);

  // Sonsuz döngü için 3 müşteriyi iki kez göster
  const thumbs = [...clients, ...clients];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="swiper-container"
        id="testimonials-one__thumb"
        style={{ minHeight: "100px" }}
      >
        <div className="row">
          {thumbs.slice(0, 3).map((item, index) => (
            <div key={index} className="col-4">
              <div className="testimonials-one__thumb-single">
                <div className="testimonials-one__thumb-img">
                  <div className="inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="testimonials-one__thumb-single-text">
                  <h2>{item.name}</h2>
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
    <Swiper
      {...swiperOptions}
      className="swiper-container"
      id="testimonials-one__thumb"
    >
      {thumbs.map((item, index) => (
        <SwiperSlide key={`${item.name}-${index}`} className="swiper-slide">
          <div
            className={`testimonials-one__thumb-single ${index % 3 === 0 ? "ml0" : ""}`}
          >
            <div className="testimonials-one__thumb-img">
              <div className="inner">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            <div className="testimonials-one__thumb-single-text">
              <h2>{item.name}</h2>
              <p>{item.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
