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
        breadcrumbTitle="Construction Site"
        breadcrumbBg="/assets/img/service/page-header-bg-construction.webp"
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
                      <img src="/assets/img/service/services-details-img6.webp"
                        alt="#" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box1">
                      <h2>Construction & Site Management</h2>
                      <p className="text1">
                        We provide turnkey general contracting and rigorous
                        on-site construction supervision. Our site engineers
                        ensure that every architectural drawing, structural
                        calculation, and technical specification is realized on
                        the job site with uncompromising precision and German
                        craftsmanship.
                      </p>

                      <p className="text2">
                        From groundbreaking excavation and structural concrete
                        pouring to building envelope weatherproofing and MEP
                        fit-out, we coordinate all specialized trades to deliver
                        projects on time, on budget, and to the highest quality
                        standards.
                      </p>

                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Turnkey general contracting with
                              guaranteed-maximum-price transparency and timeline
                              commitments.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Certified on-site health, safety, and
                              environmental coordination (SiGeKo).
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="text-box2">
                      <p>
                        Successful construction execution demands seamless
                        logistical planning and daily trade coordination. Our
                        on-site managers inspect material deliveries, verify
                        rebar placement, monitor concrete curing, and audit
                        building envelope airtightness to eliminate execution
                        defects before they arise.
                      </p>

                      <ul>
                        <li>
                          <p>
                            Rigorous quality assurance, material certifications,
                            and milestone inspections.
                          </p>
                        </li>

                        <li>
                          <p>
                            Digital construction documentation, progress
                            tracking, and transparent weekly reporting.
                          </p>
                        </li>

                        <li>
                          <p>
                            Comprehensive subcontractor management, scheduling
                            synchronization, and dispute mitigation.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="services-details__content-img2">
                      <img src="/assets/img/service/services-details-const-img2.webp"
                        alt="#" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box3">
                      <p className="text1">
                        Our seasoned construction managers maintain constant
                        presence on the build site. We serve as the central
                        communication hub between clients, architects, municipal
                        building inspectors, and trade contractors, resolving
                        on-site technical challenges proactively.
                      </p>

                      <p className="text2">
                        Upon completion, we conduct comprehensive commissioning
                        of all mechanical, electrical, and fire safety systems.
                        We complete formal legal acceptance protocols (VOB/BGB)
                        and provide organized digital asset manuals for
                        effortless facility operation.
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
                                    Zero-defect technical handover & structural
                                    excellence
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Strict milestone scheduling & guaranteed
                                    budget compliance
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Highest standards of job-site safety & clean
                                    logistics
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
                                Managing complex urban site logistics, crane
                                positioning, neighbor protection, and
                                synchronized deliveries of heavy materials on
                                constrained plots without delaying sequential
                                trade workflows.
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
                              What is the role of your site manager and general
                              contracting team?
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
                                Our site managers supervise daily site
                                operations, verify workmanship against
                                architectural specifications, coordinate all
                                specialized trade subcontractors, enforce safety
                                regulations, and lead milestone quality
                                inspections.
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
                              How do you control construction costs and avoid
                              budget overruns?
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
                                We implement transparent contracts, detailed
                                bills of quantities, competitive open-book
                                subcontractor tenders, and continuous cost
                                tracking with weekly variance auditing against
                                approved milestones.
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
                              What health, safety, and environmental standards
                              are enforced on site?
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
                                Certified health and safety coordinators
                                (SiGeKo) inspect our sites regularly. We mandate
                                full PPE compliance, secure scaffolding, daily
                                safety briefings, and environmentally
                                responsible construction waste recycling.
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
                              What does the final building handover and warranty
                              process involve?
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
                                A formal joint acceptance protocol
                                (Abnahmeprotokoll) is conducted with the client,
                                documenting full technical testing of all
                                building systems, delivering operations manuals,
                                and issuing statutory warranty certificates
                                (VOB/BGB).
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

                {/*Start Sidebar*/}
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
                          <Link href="/building-renovation">
                            Building Renovation{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link className="active" href="#">
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
