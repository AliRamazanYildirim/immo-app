import Layout from "@/components/layout/Layout";
import CtaOne from "@/components/sections/common/CtaOne";
import { getTranslations } from "@/lib/i18n/server";

export default async function TestimonialsPage() {
  const { t } = await getTranslations();
  const page = t.pages.testimonials;
  const testimonials = t.shared.testimonials;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <section className="testimonials-two testimonials-two--testimonials">
        <div className="container">
          <div className="row">
            {testimonials.map((item) => (
              <div key={item.name} className="col-xl-4 col-lg-4 col-md-6">
                <div className="testimonials-two__single">
                  <div className="testimonials-two__single-top">
                    <div className="img-box">
                      <img
                        src={item.image}
                        alt={`${item.name} — ${item.role}`}
                        decoding="async"
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>

                    <div className="icon-box">
                      <span className="icon-quote" aria-hidden="true"></span>
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
      </section>

      <CtaOne />
    </Layout>
  );
}
