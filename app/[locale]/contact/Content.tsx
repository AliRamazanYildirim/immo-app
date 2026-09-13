import Layout from "@/components/layout/Layout";
import { ContactPageInfo } from "@/components/elements/ContactInfo";
import ContactForm from "@/components/sections/common/ContactForm";
import siteConfig from "@/lib/siteConfig";
import { getTranslations } from "@/lib/i18n/server";

export default async function ContactPage() {
  const { t } = await getTranslations();
  const page = t.pages.contact;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <section className="contact-page">
        <div className="contact-page__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__top-content">
                  <div className="contact-page__top-content-top">
                    <h2>{page.introTitle}</h2>
                    <p>{page.introText}</p>
                  </div>

                  <div className="contact-page__top-content-bottom">
                    <h2>{page.contactInfoTitle}</h2>
                    <ContactPageInfo labels={t.common.labels} />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__google-map">
                  <iframe
                    src={siteConfig.maps.embedUrl}
                    className="contact-page-google-map__one"
                    title={page.mapTitle}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-page__bottom">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
