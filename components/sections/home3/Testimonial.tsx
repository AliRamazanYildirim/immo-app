"use client";

import TestimonialSlider4 from "@/components/slider/TestimonialSlider4";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export type TestimonialProps = {
  /** Hakkımızda sayfası da aynı bölümü kullanır. */
  showPagination?: boolean;
};

export default function Testimonial({ showPagination = true }: TestimonialProps) {
  const { t } = useTranslation();
  const { eyebrow, titleLine1, titleLine2 } = t.home.testimonial3;

  return (
    <section className="testimonials-two">
      <div
        className="testimonials-two__pattern"
        style={{
          backgroundImage:
            "url(/assets/img/pattern/testimonials-v2-pattern.webp)",
        }}
      ></div>
      <div className="shape1 float-bob-x">
        <img
          src="/assets/img/shape/testimonials-v2-shape1.webp"
          alt=""
          decoding="async"
          loading="lazy"
          width={1297}
          height={481}
        />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{eyebrow}</h5>
          </div>
          <h2>
            {titleLine1} <br />
            {titleLine2}
          </h2>
        </div>

        <TestimonialSlider4 />
        {showPagination && (
          <div className="swiper-pagination" id="testimonials-two__pagination"></div>
        )}
      </div>
    </section>
  );
}
