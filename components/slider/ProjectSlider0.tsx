"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

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
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 2, spaceBetween: 30 },
    1350: { slidesPerView: 2, spaceBetween: 30 },
  },
};

/** Bu slider'ın görsel seti — proje metinleri sözlükten gelir. */
const slideImages = [
  "/assets/img/project/project-v2-img1.webp",
  "/assets/img/project/project-v2-img2.webp",
  "/assets/img/project/project-v2-img1.webp",
  "/assets/img/project/project-v2-img2.webp",
];

export default function ProjectSlider0() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { items, detailsHref } = t.shared.projects;

  return (
    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
      {items.map((project, index) => (
        <SwiperSlide key={project.title} className="swiper-slide">
          <img
            src={slideImages[index % slideImages.length]}
            alt={project.alt}
            decoding="async"
            loading="lazy"
            width={770}
            height={520}
          />
          <div className="overlay-content">
            <p>{project.location}</p>
            <h2>
              <Link href={href(detailsHref)}>{project.title}</Link>
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
