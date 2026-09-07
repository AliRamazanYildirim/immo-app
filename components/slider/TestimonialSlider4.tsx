"use client";
import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
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

const testimonialsData = [
  {
    name: "Marcus Vance",
    role: "Commercial Property Client",
    img: "/assets/img/testimonial/testimonials-v2-img1.webp",
    text: "ARY GROUP delivered our mixed-use commercial building with uncompromising structural precision and complete cost transparency. Their turnkey general contracting and on-site supervision standards are truly outstanding.",
  },
  {
    name: "Janes Cooper",
    role: "Private Villa Owner",
    img: "/assets/img/testimonial/testimonials-v2-img2.webp",
    text: "The interior architecture and spatial flow in our residence are breathtaking. The bespoke joinery, acoustic balance, and curated natural stone and oak materiality far exceeded our highest expectations.",
  },
  {
    name: "David Martinez",
    role: "Corporate Office Client",
    img: "/assets/img/testimonial/testimonials-v2-img3.webp",
    text: "Their seamless 3D BIM modeling and thorough regulatory documentation made navigating complex building permits completely effortless. An exceptional partner for modern architectural engineering.",
  },
  {
    name: "Sophia Laurent",
    role: "Historic Estate Owner",
    img: "/assets/img/testimonial/testimonials-v2-img4.webp",
    text: "Renovating our historic building under strict preservation guidelines required delicate craftsmanship. ARY GROUP modernized the energetic envelope and heating systems while honoring the original heritage facade.",
  },
  {
    name: "Alexander Wright",
    role: "Residential Construction Client",
    img: "/assets/img/testimonial/testimonials-v2-img5.webp",
    text: "Strict on-site safety protocols, rigorous milestone execution, and daily subcontractor supervision ensured that our 45-unit residential complex was constructed and handed over right on schedule.",
  },
  {
    name: "Clara Schmidt",
    role: "Boutique Hotel General Manager",
    img: "/assets/img/testimonial/testimonials-v2-img6.webp",
    text: "Our guests constantly praise the ambient lighting design and tranquil spatial harmony. ARY GROUP brought refined architectural elegance and custom millwork to life in every guest suite and lobby.",
  },
];

export default function TestimonialSlider4() {
  const [mounted, setMounted] = useState(false);

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
                    <img src={item.img} alt={item.name} decoding="async" loading="lazy" width={80} height={80} />
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
                  <img src={item.img} alt={item.name} decoding="async" loading="lazy" width={80} height={80} />
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
