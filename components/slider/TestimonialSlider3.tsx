"use client";
import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 3,
  // spaceBetween: 30,
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
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  },
};

const clientThumbs = [
  {
    name: "Julian Meier",
    role: "Private Residence Client",
    img: "/assets/img/testimonial/testimonials-v1-img1.webp",
  },
  {
    name: "Annette Black",
    role: "Residential Complex Client",
    img: "/assets/img/testimonial/testimonials-v1-img2.webp",
  },
  {
    name: "Lucas Hoffmann",
    role: "Commercial Building Client",
    img: "/assets/img/testimonial/testimonials-v1-img3.webp",
  },
  {
    name: "Julian Meier",
    role: "Private Residence Client",
    img: "/assets/img/testimonial/testimonials-v1-img1.webp",
  },
  {
    name: "Annette Black",
    role: "Residential Complex Client",
    img: "/assets/img/testimonial/testimonials-v1-img2.webp",
  },
  {
    name: "Lucas Hoffmann",
    role: "Commercial Building Client",
    img: "/assets/img/testimonial/testimonials-v1-img3.webp",
  },
];

export default function TestimonialSlider3() {
  const [mounted, setMounted] = useState(false);

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
          {clientThumbs.slice(0, 3).map((item, index) => (
            <div key={index} className="col-4">
              <div className="testimonials-one__thumb-single">
                <div className="testimonials-one__thumb-img">
                  <div className="inner">
                    <img src={item.img} alt={item.name} loading="lazy" decoding="async" width={80} height={80} />
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
    <>
      <Swiper
        {...swiperOptions}
        className="swiper-container"
        id="testimonials-one__thumb"
      >
        {clientThumbs.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              className={`testimonials-one__thumb-single ${index % 3 === 0 ? "ml0" : ""}`}
            >
              <div className="testimonials-one__thumb-img">
                <div className="inner">
                  <img src={item.img} alt={item.name} loading="lazy" decoding="async" width={80} height={80} />
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
    </>
  );
}
