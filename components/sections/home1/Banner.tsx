"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import React from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import {
  SliderContactInfo,
  SocialLinks,
} from "@/components/elements/ContactInfo";

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

export default function Banner() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <section className="main-slider main-slider-one">
        <Swiper
          {...swiperOptions}
          className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none"
        >
          <SwiperSlide className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source
                  srcSet="/assets/img/slider/slider-v1-img1.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/slider/slider-v1-img1.jpg"
                  alt="Creative Architecture"
                  className="image-layer__img"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="shape1">
              <img
                src="assets/img/shape/slider-v1-shape1.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="container">
              <div className="main-slider-one__single">
                <div className="main-slider-one__content">
                  <div className="shape2 float-bob-x">
                    <img
                      src="assets/img/shape/slider-v1-shape2.png"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>Creative</h3>
                  <h2>Architecture</h2>
                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>
                    <div className="btn-two">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-popup"
                        data-fancybox="video-1"
                        data-caption=""
                      >
                        <div className="main-slider-one__icon">
                          <i className="icon-play-button-1"></i>
                          <span>Watch Our Videos</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <SliderContactInfo />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source
                  srcSet="/assets/img/slider/slider-v1-img2.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/slider/slider-v1-img2.jpg"
                  alt="Creative Architecture"
                  className="image-layer__img"
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="shape1">
              <img
                src="assets/img/shape/slider-v1-shape1.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="container">
              <div className="main-slider-one__single">
                <div className="main-slider-one__content">
                  <div className="shape2 float-bob-x">
                    <img
                      src="assets/img/shape/slider-v1-shape2.png"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>Creative</h3>
                  <h2>Architecture</h2>
                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>
                    <div className="btn-two">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-popup"
                        data-fancybox="video-1"
                        data-caption=""
                      >
                        <div className="main-slider-one__icon">
                          <i className="icon-play-button-1"></i>
                          <span>Watch Our Videos</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <SliderContactInfo />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source
                  srcSet="/assets/img/slider/slider-v1-img3.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/slider/slider-v1-img3.jpg"
                  alt="Creative Architecture"
                  className="image-layer__img"
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="shape1">
              <img
                src="assets/img/shape/slider-v1-shape1.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="container">
              <div className="main-slider-one__single">
                <div className="main-slider-one__content">
                  <div className="shape2 float-bob-x">
                    <img
                      src="assets/img/shape/slider-v1-shape2.png"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>Creative</h3>
                  <h2>Architecture</h2>
                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>
                    <div className="btn-two">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-popup"
                        data-fancybox="video-1"
                        data-caption=""
                      >
                        <div className="main-slider-one__icon">
                          <i className="icon-play-button-1"></i>
                          <span>Watch Our Videos</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <SliderContactInfo />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </SwiperSlide>
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
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
