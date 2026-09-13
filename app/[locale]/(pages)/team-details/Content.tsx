"use client";

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/common/ContactForm";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

const socialNetworks = [
  { key: "facebook", icon: "icon-facebook", className: "", label: "Facebook" },
  { key: "twitter", icon: "icon-x-twitter", className: "tw", label: "X" },
  {
    key: "instagram",
    icon: "icon-instagram",
    className: "ins",
    label: "Instagram",
  },
  {
    key: "linkedin",
    icon: "icon-linkedin-big-logo",
    className: "in",
    label: "LinkedIn",
  },
] as const;

export default function TeamDetailsPage() {
  const { t } = useTranslation();
  const page = t.pages.teamDetails;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <section className="team-details">
        {/* Start Team Details Top */}
        <div className="team-details__top">
          <div className="container">
            <div className="row">
              {/* Start Team Details Top Img */}
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-img">
                  <div className="big-title">
                    <h2>{page.brandTitle}</h2>
                  </div>
                  <div className="inner">
                    <img
                      src="/assets/img/team/team-details-img1.webp"
                      alt={page.imageAlt}
                      decoding="async"
                      loading="lazy"
                      width={470}
                      height={550}
                    />
                  </div>
                </div>
              </div>
              {/* End Team Details Top Img */}

              {/* Start Team Details Top Content */}
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-content">
                  <div className="team-details__top-content-top">
                    <h2>{page.name}</h2>
                    <p>{page.role}</p>
                  </div>

                  <div className="team-details__top-content-text">
                    <p>
                      <span>{page.labels.department}</span> {page.department}
                    </p>
                    <p>
                      <span>{page.labels.experience}</span> {page.experience}
                    </p>
                    <p>
                      <span>{page.labels.email}</span>{" "}
                      <Link href={getMailtoLink()}>
                        {siteConfig.contact.email}
                      </Link>
                    </p>
                    <p>
                      <span>{page.labels.phone}</span>{" "}
                      <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
                    </p>
                  </div>

                  <div className="social-links">
                    <ul>
                      {socialNetworks.map((network) => (
                        <li key={network.key}>
                          <Link
                            className={network.className || undefined}
                            href={siteConfig.social[network.key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.common.a11y.socialProfile.replace(
                              "{network}",
                              network.label,
                            )}
                          >
                            <span
                              className={network.icon}
                              aria-hidden="true"
                            ></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Team Details Top Content */}
            </div>
          </div>
        </div>
        {/* End Team Details Top */}

        {/* Start Team Details Middle */}
        <div className="team-details__middle">
          <div className="container">
            <div className="team-details__middle-inner">
              <div className="team-details__middle-text1">
                <h2>{page.biographyTitle}</h2>
                <p>{page.biography1}</p>
                <p>{page.biography2}</p>
              </div>

              <div className="team-details__middle-text2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="team-details__middle-text2-progress">
                      {page.skills.map((skill, index) => (
                        <div
                          key={skill.label}
                          className={`team-details__middle-text2-progress-single ${
                            index === page.skills.length - 1 ? "mb0" : ""
                          }`.trim()}
                        >
                          <div className="title">
                            <h4>{skill.label}</h4>
                          </div>
                          <div className="bar">
                            <div
                              className="bar-inner count-bar"
                              style={{ width: `${skill.percent}%` }}
                            >
                              <div
                                className={`count-text ${index > 0 ? "style2" : ""}`.trim()}
                              >
                                {skill.percent}%
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="team-details__middle-text2-content">
                      <div className="row">
                        {page.positions.map((position) => (
                          <div
                            key={position.company}
                            className="col-xl-6 col-lg-6 col-md-6"
                          >
                            <div className="single-content">
                              <h2>{position.company}</h2>
                              <p>{position.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-details__middle-text3">
                <h2>{page.competenciesTitle}</h2>
                <p>{page.competencies1}</p>
                <p>{page.competencies2}</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Details Middle */}

        <ContactForm />
      </section>
    </Layout>
  );
}
