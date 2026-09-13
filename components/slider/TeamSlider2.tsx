"use client";

import { useEffect, useState } from "react";
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
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export default function TeamSlider2() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const [mounted, setMounted] = useState(false);

  const { members, shareAria } = t.shared.teamSlider;
  // slidesPerView 4 ile sorunsuz sonsuz döngü için listeyi iki kez kullan
  const slides = [...members, ...members];

  useEffect(() => {
    setMounted(true);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const shareBtn = target?.closest(
        ".team-one__single-icon .social-links li.share > a",
      );
      if (shareBtn) {
        e.preventDefault();
        const shareLi = shareBtn.closest("li.share");
        if (shareLi) {
          const wasActive = shareLi.classList.contains("active");
          document
            .querySelectorAll(
              ".team-one__single-icon .social-links li.share.active",
            )
            .forEach((el) => {
              el.classList.remove("active");
            });
          if (!wasActive) {
            shareLi.classList.add("active");
          }
        }
        return;
      }

      if (!target?.closest(".team-one__single-icon .social-links li.share")) {
        document
          .querySelectorAll(
            ".team-one__single-icon .social-links li.share.active",
          )
          .forEach((el) => {
            el.classList.remove("active");
          });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!mounted) {
    return (
      <div
        className="thm-swiper__slider swiper-container"
        style={{ minHeight: "450px" }}
      />
    );
  }

  return (
    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
      {slides.map((member, index) => (
        <SwiperSlide key={`${member.name}-${index}`} className="swiper-slide">
          {/*Start Team One Single */}
          <div className="team-one__single">
            <div className="team-one__single-img">
              <div className="inner">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  decoding="async"
                  loading="lazy"
                  width={270}
                  height={400}
                />
                <div className="team-one__single-icon">
                  <ul className="social-links clearfix">
                    <li className="share">
                      <a href="#share" role="button" aria-label={shareAria}>
                        <span className="icon-share" aria-hidden="true"></span>
                      </a>
                      <ul className="social-links-inner">
                        <li>
                          <Link className="fb" href="#">
                            <i className="icon-facebook-1" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="tw" href="#">
                            <i className="icon-letter-v" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="ins" href="#">
                            <i className="icon-letter-x" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="team-one__single-content">
              <h3>
                <Link href={href("/team-details")}>{member.name}</Link>
              </h3>
              <p>{member.role}</p>
            </div>
          </div>
          {/*End Team One Single */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
