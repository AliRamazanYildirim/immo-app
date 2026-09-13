"use client";

import TestimonialSlider2 from "@/components/slider/TestimonialSlider2";
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function Testimonial() {
  const { t } = useTranslation();
  const { eyebrow, title } = t.home.testimonial1;

  return (
    <section className="testimonials-one">
      <div className="shape1">
        <img
          src="/assets/img/shape/testimonials-v1-shape1.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width={944}
          height={735}
        />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{eyebrow}</h5>
          </div>
          <h2>{title}</h2>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="testimonials-one__inner">
              <div className="testimonials-one__content">
                <TestimonialSlider2 />
              </div>

              <TestimonialSlider3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
