"use client";

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 1,
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
    el: "#project-three__pagination",
    clickable: true,
  },
};

/** Her slide üç kart gösterir; görseller bu üçlüden dönüşümlü kullanılır. */
const cardImages = [
  "/assets/img/project/project-v3-img1.webp",
  "/assets/img/project/project-v3-img2.webp",
  "/assets/img/project/project-v3-img3.webp",
];

const SLIDE_COUNT = 3;
const CARDS_PER_SLIDE = 3;

export default function ProjectSlider2() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { items, detailsHref } = t.shared.projects;

  return (
    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
      {Array.from({ length: SLIDE_COUNT }, (_, slideIndex) => (
        <SwiperSlide key={slideIndex} className="swiper-slide">
          {/*Start Project Three Single */}
          <div className="project-three__single">
            <ul className="project-three__box">
              {Array.from({ length: CARDS_PER_SLIDE }, (_, cardIndex) => {
                const image = cardImages[cardIndex];
                const project =
                  items[(slideIndex * CARDS_PER_SLIDE + cardIndex) % items.length];

                return (
                  <li key={cardIndex}>
                    <div className="project-three__single-inner">
                      <div
                        className="project-three__single-img"
                        style={{ backgroundImage: `url(${image})` }}
                        role="img"
                        aria-label={project.alt}
                      ></div>
                      <div className="bg-overlay"></div>

                      <div className="project-three__overlay-icon">
                        <ul>
                          <li>
                            <a
                              className="img-popup"
                              href={image}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={project.alt}
                            >
                              <span
                                className="icon-search-interface-symbol"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <Link
                              href={href(detailsHref)}
                              aria-label={project.title}
                            >
                              <span className="icon-link" aria-hidden="true"></span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="project-three__single-content">
                        <p>{project.location}</p>
                        <h2>
                          <Link href={href(detailsHref)}>{project.title}</Link>
                        </h2>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*End Project Three Single */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
