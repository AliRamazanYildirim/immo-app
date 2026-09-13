import TestimonialSlider2 from "@/components/slider/TestimonialSlider2";
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3";
import { getTranslations } from "@/lib/i18n/server";

export default async function Testimonial() {
  const { t } = await getTranslations();
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
                <TestimonialSlider2 reviews={t.shared.reviewsShort} />
              </div>

              <TestimonialSlider3 clients={t.shared.clientThumbs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
