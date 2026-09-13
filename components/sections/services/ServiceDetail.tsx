/**
 * Hizmet detay sayfası gövdesi.
 *
 * Dört hizmet sayfası (mimarlık, iç mimarlık, renovasyon, şantiye) yapısal
 * olarak birebir aynıydı; her biri ~455 satır kopyaydı. Tek bileşene indirildi,
 * içerik `services.details[slug]` altından geliyor.
 */

import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import type { ServiceSlug } from "@/lib/i18n/locales/de/services";
import { getTranslations } from "@/lib/i18n/server";
import ServiceSidebar from "./ServiceSidebar";

export type ServiceDetailProps = {
  slug: ServiceSlug;
};

export default async function ServiceDetail({ slug }: ServiceDetailProps) {
  const { t } = await getTranslations();
  const services = t.services;
  const detail = services.details[slug];

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={detail.breadcrumbTitle}
      breadcrumbBg={detail.breadcrumbBg}
    >
      {/*Start Services Details */}
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/*Start Services Details Content */}
            <div className="col-xl-8">
              <div className="services-details__content">
                <div className="services-details__content-img1">
                  <img
                    src={detail.heroImage}
                    alt={detail.heroAlt}
                    decoding="async"
                    loading="lazy"
                    width={740}
                    height={370}
                  />
                </div>

                <div className="text-box1">
                  <h2>{detail.title}</h2>
                  <p className="text1">{detail.intro1}</p>
                  <p className="text2">{detail.intro2}</p>

                  <ul>
                    {detail.checkItems.map((item) => (
                      <li key={item}>
                        <div className="icon">
                          <span className="icon-check-mark" aria-hidden="true"></span>
                        </div>
                        <div className="text">
                          <p>{item}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-box2">
                  <p>{detail.midText}</p>

                  <ul>
                    {detail.midItems.map((item) => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-details__content-img2">
                  <img
                    src={detail.image2}
                    alt={detail.image2Alt}
                    decoding="async"
                    loading="lazy"
                    width={740}
                    height={370}
                  />
                </div>

                <div className="text-box3">
                  <p className="text1">{detail.outroText1}</p>
                  <p className="text2">{detail.outroText2}</p>
                </div>

                <div className="text-box4">
                  <div className="row">
                    <div className="col-xl-5 col-md-6">
                      <div className="text-box4-single">
                        <div className="title-box">
                          <h2>{services.goalsTitle}</h2>
                        </div>
                        <ul>
                          {detail.goals.map((goal) => (
                            <li key={goal}>
                              <div className="icon-box">
                                <span
                                  className="icon-check-mark"
                                  aria-hidden="true"
                                ></span>
                              </div>

                              <div className="text-box">
                                <p>{goal}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-7 col-md-6">
                      <div className="text-box4-single">
                        <div className="title-box">
                          <h2>{services.challengesTitle}</h2>
                        </div>
                        <div className="text">
                          <p>{detail.challengesText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="services-details__accordion">
                  <Accordion items={detail.faq} />
                </div>
              </div>
            </div>
            {/*End Services Details Content */}

            {/*Start Sidebar */}
            <div className="col-xl-4">
              <ServiceSidebar activeSlug={slug} />
            </div>
            {/*End Sidebar */}
          </div>
        </div>
      </section>
      {/*End Services Details */}
    </Layout>
  );
}
