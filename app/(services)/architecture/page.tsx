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
        breadcrumbTitle="Building Architecture"
        breadcrumbBg="/assets/img/service/page-header-bg-architecture.webp"
      >
        <div>
          {/*Start Services Details */}
          <section className="services-details">
            <div className="container">
              <div className="row">
                {/* Start Services Details Content*/}
                <div className="col-xl-8">
                  <div className="services-details__content">
                    <div className="services-details__content-img1">
                      <img src="/assets/img/service/services-details-img1.webp"
                        alt="#" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box1">
                      <h2>Building Architecture & Planning</h2>
                      <p className="text1">
                        We deliver innovative, sustainable, and tailor-made
                        architectural solutions for residential estates, modern
                        commercial complexes, and urban living spaces. Our
                        holistic planning methodology unites visionary design
                        with functional efficiency, structural precision, and
                        environmental responsibility.
                      </p>

                      <p className="text2">
                        From initial spatial feasibility studies to detailed 3D
                        BIM modeling, we guide your project through every phase
                        of architectural creation. We translate your lifestyle
                        or business identity into enduring built reality.
                      </p>

                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Sustainable bioclimatic design optimizing natural
                              light, ventilation, and energy performance.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              State-of-the-art 3D BIM modeling ensuring
                              clash-free engineering and cost efficiency.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="text-box2">
                      <p>
                        Every architectural masterpiece begins with
                        understanding the unique character of the site and the
                        aspirations of its future occupants. We analyze
                        topographical orientations, urban zoning regulations,
                        and microclimates to craft structures that age
                        gracefully and provide timeless spatial value.
                      </p>

                      <ul>
                        <li>
                          <p>
                            Comprehensive concept design, photorealistic
                            renderings, and physical scale mockups.
                          </p>
                        </li>

                        <li>
                          <p>
                            Full statutory permitting documentation and
                            proactive municipal authority management.
                          </p>
                        </li>

                        <li>
                          <p>
                            Detailed execution blueprints, technical
                            specifications, and contractor tender packages.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="services-details__content-img2">
                      <img src="/assets/img/service/services-details-arch-img2.webp"
                        alt="#" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box3">
                      <p className="text1">
                        Our architectural studio blends creative artistic
                        expression with rigorous technical German engineering
                        standards. We coordinate all specialist planners —
                        including structural engineers, MEP designers, and
                        building physicists — to deliver harmonious
                        architectural forms.
                      </p>

                      <p className="text2">
                        Throughout construction, our architects provide
                        dedicated artistic and quality supervision on site. This
                        ensures that every shadow gap, material transition, and
                        spatial dimension matches the design intent with
                        millimeter precision.
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
                                    Net-zero energy efficiency (KfW 40 /
                                    Passivhaus)
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Timeless aesthetic longevity & spatial
                                    harmony
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Transparent budgeting & rigorous timeline
                                    control
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
                                Navigating complex municipal zoning laws, tight
                                urban plot boundaries, and rigorous
                                environmental building codes. We solve these
                                through proactive authority liaison, precision
                                site surveys, and intelligent space-saving
                                structural designs.
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
                              How long does the architectural design and
                              approval process take?
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
                                Conceptual and detailed design typically
                                requires 4 to 8 weeks. Municipal building permit
                                approvals generally take between 2 to 4 months
                                depending on the local building authority and
                                project scale.
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
                              Do you handle building permit applications and
                              regulatory approvals?
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
                                Yes, we provide end-to-end statutory permitting
                                services, including official building
                                applications (Bauantrag), structural
                                calculations, fire protection concepts, and
                                direct coordination with local authorities.
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
                              How does 3D BIM (Building Information Modeling)
                              benefit my project?
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
                                BIM creates a unified digital 3D model combining
                                architectural, structural, and MEP systems. This
                                detects physical trade collisions before
                                construction begins, minimizing costly site
                                revisions and ensuring precise cost forecasts.
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
                              Can you design custom energy-efficient and passive
                              house buildings?
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
                                Absolutely. We specialize in high-efficiency
                                concepts including KfW 40, Passivhaus, and DGNB
                                standards. We integrate geothermal heat pumps,
                                photovoltaic solar systems, and intelligent
                                thermal envelope solutions.
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
                          <Link className="active" href="#">
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
                          <Link href="/building-renovation">
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
