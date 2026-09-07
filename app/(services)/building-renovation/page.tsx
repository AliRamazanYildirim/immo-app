"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
interface AccordionState {
  status: boolean;
  key?: number;
}

export default function Home() {
  const [isActive, setIsActive] = useState<AccordionState>({
    status: false,
    key: 1,
  });

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Building Renovation"
        breadcrumbBg="/assets/img/service/page-header-bg-renovation.webp"
      >
        <div>
          {/*Start Services Details */}
          <section className="services-details">
            <div className="container">
              <div className="row">
                {/*Start Services Details Content */}
                <div className="col-xl-8">
                  <div className="services-details__content">
                    <div className="services-details__content-img1">
                      <img src="/assets/img/service/services-details-img5.webp"
                        alt="#" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box1">
                      <h2>Building Renovation & Modernization</h2>
                      <p className="text1">
                        We revitalize existing residential, commercial, and
                        historic buildings, transforming aging structures into
                        high-performance, energy-efficient, and contemporary
                        architectural spaces. Our renovation team combines deep
                        structural expertise with sensitive preservation
                        craftsmanship.
                      </p>

                      <p className="text2">
                        Whether upgrading an urban apartment building,
                        modernizing an executive office property, or restoring a
                        protected heritage villa, we extend building lifecycles
                        while maximizing long-term asset value.
                      </p>

                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Deep energetic retrofits achieving top KfW
                              efficiency standards and drastically reducing
                              heating costs.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Historic monument preservation (Denkmalschutz)
                              respecting authentic architectural heritage.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="text-box2">
                      <p>
                        Successful renovation requires forensic diagnosis before
                        demolition begins. We thoroughly inspect building
                        foundations, load-bearing masonry, timber structures,
                        and moisture barriers to engineer solutions that
                        remediate hidden deficiencies and future-proof the
                        building.
                      </p>

                      <ul>
                        <li>
                          <p>
                            Comprehensive structural, thermal, and moisture
                            building diagnostics.
                          </p>
                        </li>

                        <li>
                          <p>
                            Facade revitalization, high-performance triple
                            glazing, and roof conversions.
                          </p>
                        </li>

                        <li>
                          <p>
                            Modern HVAC, heat pump integration, floor heating,
                            and smart home retrofitting.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="services-details__content-img2">
                      <img src="/assets/img/service/services-details-renov-img2.webp"
                        alt="#" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box3">
                      <p className="text1">
                        Our engineering and craft teams work under rigorous
                        quality and safety supervision. We utilize dust-tight
                        partition barriers, negative-pressure air scrubbers, and
                        organized logistics to allow renovation work even in
                        partially occupied properties.
                      </p>

                      <p className="text2">
                        We also handle all municipal permitting, heritage board
                        negotiations, and government energy subsidy applications
                        (BAFA / KfW), ensuring your modernization investment
                        receives maximum financial incentive support.
                      </p>
                    </div>

                    <div className="text-box4">
                      <div className="row">
                        <div className="col-xl-5 col-md-6">
                          <div className="text-box4-single">
                            <div className="title-box">
                              <h2>Our Goals</h2>
                            </div>
                            <ul>
                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Radical reduction in building energy
                                    consumption
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Structural stabilization & complete moisture
                                    remediation
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Preserving historical soul with contemporary
                                    luxury
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-xl-7 col-md-6">
                          <div className="text-box4-single">
                            <div className="title-box">
                              <h2>The Challenges</h2>
                            </div>
                            <div className="text">
                              <p>
                                Uncovering unforeseen structural defects in
                                older masonry or timber and harmonizing strict
                                heritage preservation rules with modern fire
                                safety and insulation standards. Our
                                multidisciplinary engineering team solves these
                                through innovative, non-invasive restoration
                                techniques.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="services-details__accordion">
                      <ul
                        className="accrodion-grp faq-one__accrodion"
                        data-grp-name="faq-one-accrodion"
                      >
                        {/*Start Faq One Single */}
                        <li
                          className={
                            isActive.key == 1 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="accrodion-title">
                            <h3>
                              Can renovation work be carried out while parts of
                              the building are occupied?
                            </h3>
                          </div>
                          <div
                            className={
                              isActive.key == 1
                                ? "accrodion-content current"
                                : "accrodion-content"
                            }
                          >
                            <div className="inner">
                              <p>
                                Yes. Through phased scheduling, sealed dust
                                protection walls, controlled working hours, and
                                planned utility cutovers, we ensure minimal
                                disruption to tenants or business operations
                                during renovation.
                              </p>
                            </div>
                          </div>
                        </li>
                        {/*End Faq One Single */}

                        {/*Start Faq One Single */}
                        <li
                          className={
                            isActive.key == 2 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="accrodion-title">
                            <h3>
                              What energy subsidies and grants can we apply for?
                            </h3>
                          </div>
                          <div
                            className={
                              isActive.key == 2
                                ? "accrodion-content current"
                                : "accrodion-content"
                            }
                          >
                            <div className="inner">
                              <p>
                                We assist clients in securing attractive
                                government energy subsidies (such as KfW and
                                BAFA programs), covering thermal facade
                                insulation, triple-pane window replacements,
                                heat pump retrofits, and roof insulation.
                              </p>
                            </div>
                          </div>
                        </li>
                        {/*End Faq One Single */}

                        {/*Start Faq One Single */}
                        <li
                          className={
                            isActive.key == 3 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="accrodion-title">
                            <h3>
                              How do you handle heritage preservation
                              (Denkmalschutz) regulations?
                            </h3>
                          </div>
                          <div
                            className={
                              isActive.key == 3
                                ? "accrodion-content current"
                                : "accrodion-content"
                            }
                          >
                            <div className="inner">
                              <p>
                                Our team collaborates closely with monument
                                protection authorities, utilizing approved
                                breathable lime plasters, authentic wood
                                moldings, and reversible interior insulation
                                systems that satisfy strict preservation laws.
                              </p>
                            </div>
                          </div>
                        </li>
                        {/*End Faq One Single */}

                        {/*Start Faq One Single */}
                        <li
                          className={
                            isActive.key == 4 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="accrodion-title">
                            <h3>
                              How is the structural safety of an older building
                              verified?
                            </h3>
                          </div>
                          <div
                            className={
                              isActive.key == 4
                                ? "accrodion-content current"
                                : "accrodion-content"
                            }
                          >
                            <div className="inner">
                              <p>
                                We perform comprehensive non-destructive
                                diagnostics, including foundation soil core
                                sampling, masonry ultrasound tests, timber beam
                                moisture analysis, and static load
                                recalculations prior to any construction
                                intervention.
                              </p>
                            </div>
                          </div>
                        </li>
                        {/*End Faq One Single */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/*End Services Details Content */}

                {/*Start Sidebar */}
                <div className="col-xl-4">
                  <div className="sidebar">
                    {/*Start Sidebar Single */}
                    <div className="sidebar__single sidebar__category">
                      <h3 className="sidebar__title">Categories</h3>

                      <ul className="sidebar__category-list">
                        <li>
                          <Link href="/architecture">
                            Architecture{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/interior-design">
                            Interior Design{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" href="#">
                            Building Renovation{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/construction-site">
                            Construction Site{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/*End Sidebar Single */}

                    {/*Start Sidebar Single */}
                    <div className="sidebar__single sidebar__support">
                      <div
                        className="sidebar__support-bg"
                        style={{
                          backgroundImage:
                            "url(/assets/img/service/sidebar-support-bg.webp)",
                        }}
                      ></div>
                      <div className="sidebar__support__inner text-center">
                        <h2>
                          Need Any Types <br />
                          of Service <br />
                          from us
                        </h2>
                        <div className="btn-box">
                          <Link className="thm-btn" href="#">
                            <span className="txt">FIND SOLUTION</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*End Sidebar Single */}

                    {/*Start Sidebar Single */}
                    <div className="sidebar__single sidebar__contact">
                      <div className="sidebar__contact-inner">
                        <div className="icon-box">
                          <span className="icon-phone"></span>
                        </div>

                        <div className="text-box">
                          <p>You can call anytime </p>
                          <h4>
                            Free{" "}
                            <Link href="tel:123456789">+99 (786) 8765</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/*End Sidebar Single */}
                  </div>
                </div>
                {/*End Sidebar */}
              </div>
            </div>
          </section>
          {/*End Services Details */}
        </div>
      </Layout>
    </>
  );
}
