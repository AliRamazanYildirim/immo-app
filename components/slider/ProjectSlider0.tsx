"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 2,
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
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};

export default function ProjectSlider0() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="swiper-slide">
          <img src="/assets/img/project/project-v2-img1.webp" alt="Hotel Joshna Villa exterior architecture" decoding="async" loading="lazy" width={770} height={520} />
          <div className="overlay-content">
            <p>San Fransisco</p>
            <h2>
              <a href="#">Hotel Joshna Villa</a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/assets/img/project/project-v2-img2.webp" alt="Hotel Joshna Villa interior view" decoding="async" loading="lazy" width={770} height={520} />
          <div className="overlay-content">
            <p>San Fransisco</p>
            <h2>
              <a href="#">Hotel Joshna Villa</a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/assets/img/project/project-v2-img1.webp" alt="Hotel Joshna Villa structural detail" decoding="async" loading="lazy" width={770} height={520} />
          <div className="overlay-content">
            <p>San Fransisco</p>
            <h2>
              <a href="#">Hotel Joshna Villa</a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/assets/img/project/project-v2-img2.webp" alt="Hotel Joshna Villa modern interior design" decoding="async" loading="lazy" width={770} height={520} />
          <div className="overlay-content">
            <p>San Fransisco</p>
            <h2>
              <a href="#">Hotel Joshna Villa</a>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
