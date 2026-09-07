"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import siteConfig, { getTelLink } from "@/lib/siteConfig";
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
        breadcrumbTitle="Interior Design"
        breadcrumbBg="/assets/img/service/page-header-bg-interior.webp"
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
                      <img src="/assets/img/service/services-details-img3.webp"
                        alt="Interior Architecture and Spatial Design project" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box1">
                      <h2>Interior Architecture & Spatial Design</h2>
                      <p className="text1">
                        We create bespoke, refined interior spaces that elevate
                        everyday living and reflect distinctive personal or
                        commercial identities. Our interior architecture
                        approach harmonizes spatial proportions, natural light,
                        organic materiality, and tailored artisan furnishings.
                      </p>

                      <p className="text2">
                        From private luxury residences and penthouses to
                        boutique hotels and modern executive workplaces, we
                        sculpt atmospheres that balance aesthetic sophistication
                        with effortless everyday functionality.
                      </p>

                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Tailor-made spatial planning optimizing flow,
                              sightlines, and natural illumination.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>
                              Bespoke cabinetry, custom architectural millwork,
                              and curated luxury materiality.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="text-box2">
                      <p>
                        Every interior concept is developed through intimate
                        dialogue with our clients. We curate tactile color
                        palettes, layered architectural lighting, and acoustic
                        treatments to craft sensory environments that feel warm,
                        timeless, and completely individual.
                      </p>

                      <ul>
                        <li>
                          <p>
                            Concept mood boards, tactile material palettes, and
                            photorealistic 3D renders.
                          </p>
                        </li>

                        <li>
                          <p>
                            Comprehensive technical joinery drawings, lighting
                            plans, and electrical layouts.
                          </p>
                        </li>

                        <li>
                          <p>
                            Turnkey FF&E procurement, artisan coordination, and
                            meticulous on-site styling.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="services-details__content-img2">
                      <img src="/assets/img/service/services-details-interior-img2.webp"
                        alt="Bespoke luxury interior architecture and furnishings" decoding="async" loading="lazy" width={740} height={370} />
                    </div>

                    <div className="text-box3">
                      <p className="text1">
                        Our team manages the entire procurement and installation
                        process, collaborating with master craftsmen, stone
                        fabricators, and renowned European furniture ateliers.
                        We ensure every stitch, seam, and joint meets the
                        highest benchmark of artisanal quality.
                      </p>

                      <p className="text2">
                        During installation, our interior architects supervise
                        every phase directly on site — coordinating specialty
                        contractors, overseeing custom millwork fitting, and
                        arranging art, accessories, and lighting for a flawless
                        turnkey handover.
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
                                    Harmonious spatial flow & ergonomic
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
                                    Artisanal millwork & sustainable luxury
                                    materiality
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div className="icon-box">
                                  <span className="icon-check-mark"></span>
                                </div>

                                <div className="text-box">
                                  <p>
                                    Atmospheric architectural lighting &
                                    acoustic comfort
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
                                Seamlessly integrating modern building services,
                                smart home automation, and acoustic requirements
                                without disturbing the clean, elegant visual
                                lines of the interior architecture.
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
                              What does your comprehensive interior design
                              service include?
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
                                Our full-service scope covers conceptual mood
                                boards, spatial layout plans, 3D photorealistic
                                renderings, custom millwork detail drawings,
                                lighting and electrical schematics, furniture
                                curation, and turnkey on-site styling.
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
                              Can you redesign interiors within an existing
                              building structure?
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
                                Absolutely. We specialize in high-end
                                transformations of existing apartments,
                                historical residences, and boutique commercial
                                spaces, optimizing layouts while respecting
                                structural load-bearing elements.
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
                              Do you handle custom furniture and bespoke
                              cabinetry design?
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
                                Yes. Our team produces detailed fabrication
                                drawings for custom kitchens, dressing rooms,
                                integrated shelving, and paneling, collaborating
                                with master joiners and craftsmen to ensure
                                perfection.
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
                              How do you present design concepts before
                              procurement?
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
                                We present comprehensive physical material
                                sample trays, custom finish swatches, and
                                photorealistic 3D virtual walkthroughs so you
                                experience every texture, color, and lighting
                                mood before making investment decisions.
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
                          <Link className="active" href="#">
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
                            <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/*End Sidebar Single */}
                  </div>
                </div>
                {/* End Sidebar*/}
              </div>
            </div>
          </section>
          {/*End Services Details */}
        </div>
      </Layout>
    </>
  );
}
