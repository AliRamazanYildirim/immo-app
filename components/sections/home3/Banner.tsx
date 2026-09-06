"use client";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import siteConfig from "@/lib/siteConfig";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
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
};

export default function Banner() {
  return (
    <>
      {/*Start Main Slider Three */}
      <section className="main-slider main-slider-three">
        <Swiper
          {...swiperOptions}
          className="swiper-container main-slider-three__carousel"
        >
          {/*Start Swiper Slide Single */}
          <SwiperSlide className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source
                  srcSet="/assets/img/slider/slider-v3-img1.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/slider/slider-v3-img1.jpg"
                  alt="NEW WAY OF LIVING"
                  className="image-layer__img"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="main-slider-three__social-links">
              <div className="title-box">
                <div className="text">
                  <p>Follow Us</p>
                </div>
                <div className="border-box"></div>
              </div>

              <ul className="social-links">
                <li>
                  <Link href="#">
                    <span className="icon-letter-v"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-x-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-dribbble"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-facebook-1"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="container">
              <div className="main-slider-three__single text-center">
                <div className="main-slider-three__content">
                  <div className="logo-box">
                    <img
                      src={siteConfig.logos.redWhite}
                      alt={siteConfig.company.name}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="title">
                    <h2>NEW WAY OF LIVING</h2>
                  </div>

                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>

                    <div className="btn-two">
                      <Link className="thm-btn" href="contact">
                        <span className="txt">GET STARTED NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*End Swiper Slide Single */}

          {/*Start Swiper Slide Single */}
          <SwiperSlide className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source
                  srcSet="/assets/img/slider/slider-v3-img2.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/slider/slider-v3-img2.jpg"
                  alt="NEW WAY OF LIVING"
                  className="image-layer__img"
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="main-slider-three__social-links">
              <div className="title-box">
                <div className="text">
                  <p>Follow Us</p>
                </div>
                <div className="border-box"></div>
              </div>

              <ul className="social-links">
                <li>
                  <Link href="#">
                    <span className="icon-letter-v"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-x-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-dribbble"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-facebook-1"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="container">
              <div className="main-slider-three__single text-center">
                <div className="main-slider-three__content">
                  <div className="logo-box">
                    <img
                      src={siteConfig.logos.redWhite}
                      alt={siteConfig.company.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="title">
                    <h2>NEW WAY OF LIVING</h2>
                  </div>

                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>

                    <div className="btn-two">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">GET STARTED NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*End Swiper Slide Single */}

          {/*Start Swiper Slide Single */}
          <SwiperSlide className="swiper-slide">
            <div className="image-layer">
              <picture>
                <source
                  srcSet="/assets/img/slider/slider-v3-img3.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/slider/slider-v3-img3.jpg"
                  alt="NEW WAY OF LIVING"
                  className="image-layer__img"
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={960}
                />
              </picture>
            </div>
            <div className="main-slider-three__social-links">
              <div className="title-box">
                <div className="text">
                  <p>Follow Us</p>
                </div>
                <div className="border-box"></div>
              </div>

              <ul className="social-links">
                <li>
                  <Link href="#">
                    <span className="icon-letter-v"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-x-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-dribbble"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="icon-facebook-1"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="container">
              <div className="main-slider-three__single text-center">
                <div className="main-slider-three__content">
                  <div className="logo-box">
                    <img
                      src={siteConfig.logos.redWhite}
                      alt={siteConfig.company.name}
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="title">
                    <h2>NEW WAY OF LIVING</h2>
                  </div>

                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>

                    <div className="btn-two">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">GET STARTED NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* End Swiper Slide Single*/}
        </Swiper>
      </section>
      {/* End Main Slider Three*/}
    </>
  );
}
