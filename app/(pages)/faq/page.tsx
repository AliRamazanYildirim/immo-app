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
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Faq’s">
        <div>
          {/*Start Faq One */}
          <section className="faq-one faq-one--faq">
            <div className="container clearfix">
              <div className="row">
                <div className="col-xl-6">
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
                          How long does the architectural design and approval
                          process take?
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
                            Concept and preliminary design typically take 4 to 8
                            weeks. Municipal building permit reviews generally
                            require 2 to 4 months depending on local authority
                            schedules and project scale.
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
                          Do you provide turnkey construction and general
                          contracting?
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
                            Yes. We offer complete turnkey delivery — managing
                            excavation, shell construction, building envelope,
                            MEP engineering, and interior finishes under a
                            single, accountable contract.
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
                          What is included in your interior architecture
                          services?
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
                            We provide spatial flow optimization, bespoke
                            millwork and cabinetry design, lighting plans,
                            tactile material sourcing, photorealistic 3D
                            renders, and full turnkey furniture installation.
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
                          How do you ensure budget compliance and prevent cost
                          overruns?
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
                            We utilize detailed bills of quantities (BoQ),
                            competitive trade tenders, and
                            guaranteed-maximum-price contracts, backed by
                            transparent weekly variance audits against milestone
                            budgets.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/*End Faq One Single */}
                  </ul>
                </div>

                <div className="col-xl-6">
                  <ul
                    className="accrodion-grp faq-one__accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    {/* Start Faq One Single*/}
                    <li
                      className={
                        isActive.key == 5 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(5)}
                    >
                      <div className="accrodion-title">
                        <h3>
                          Can you renovate older or historic heritage buildings
                          (Denkmalschutz)?
                        </h3>
                      </div>
                      <div
                        className={
                          isActive.key == 5
                            ? "accrodion-content current"
                            : "accrodion-content"
                        }
                      >
                        <div className="inner">
                          <p>
                            Yes. We have specialized expertise in energetic
                            modernizations and historic monument restorations,
                            balancing heritage authority regulations with modern
                            thermal efficiency and luxury living.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/*End Faq One Single- */}

                    {/*Start Faq One Single */}
                    <li
                      className={
                        isActive.key == 6 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(6)}
                    >
                      <div className="accrodion-title">
                        <h3>
                          How does 3D BIM technology benefit the building
                          process?
                        </h3>
                      </div>
                      <div
                        className={
                          isActive.key == 6
                            ? "accrodion-content current"
                            : "accrodion-content"
                        }
                      >
                        <div className="inner">
                          <p>
                            Building Information Modeling creates a federated 3D
                            model combining architecture, structure, and MEP
                            systems to eliminate spatial clashes before
                            construction, accelerating the build schedule.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/*End Faq One Single- */}

                    {/*Start Faq One Single */}
                    <li
                      className={
                        isActive.key == 7 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(7)}
                    >
                      <div className="accrodion-title">
                        <h3>
                          What energy efficiency standards do your buildings
                          achieve?
                        </h3>
                      </div>
                      <div
                        className={
                          isActive.key == 7
                            ? "accrodion-content current"
                            : "accrodion-content"
                        }
                      >
                        <div className="inner">
                          <p>
                            We design and build according to stringent energy
                            standards (KfW 40, Passivhaus, DGNB), incorporating
                            geothermal heat pumps, solar arrays, and
                            high-performance thermal building envelopes.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/*End Faq One Single- */}

                    {/*Start Faq One Single */}
                    <li
                      className={
                        isActive.key == 8 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(8)}
                    >
                      <div className="accrodion-title">
                        <h3>
                          Do you manage statutory building permits and
                          structural engineering?
                        </h3>
                      </div>
                      <div
                        className={
                          isActive.key == 8
                            ? "accrodion-content current"
                            : "accrodion-content"
                        }
                      >
                        <div className="inner">
                          <p>
                            Yes. We coordinate all required engineering
                            disciplines — including soil tests, structural
                            statics, fire safety concepts, and direct liaison
                            with municipal building control departments.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/*End Faq One Single- */}

                    {/*Start Faq One Single */}
                    <li
                      className={
                        isActive.key == 9 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(9)}
                    >
                      <div className="accrodion-title">
                        <h3>
                          What warranty and aftercare guarantees do you provide?
                        </h3>
                      </div>
                      <div
                        className={
                          isActive.key == 9
                            ? "accrodion-content current"
                            : "accrodion-content"
                        }
                      >
                        <div className="inner">
                          <p>
                            All completed works are handed over with formal
                            acceptance protocols and comprehensive legal
                            structural warranties (VOB/BGB), accompanied by
                            organized digital operations manuals for building
                            maintenance.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/*End Faq One Single */}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*End Faq One */}

          {/*Start Cta One */}
          <section className="cta-one">
            <div
              className="cta-one__pattern"
              style={{
                backgroundImage: "url(assets/img/pattern/cta-v1-pattern.png)",
              }}
            ></div>
            <div className="container">
              <div className="cta-one__inner">
                <div className="cta-one__content">
                  <h2>
                    We are Always Ready to Help You <br />& Answer Your
                    Questions
                  </h2>
                </div>

                <div className="cta-one__btn">
                  <a className="thm-btn" href="#">
                    <span className="txt">SERVICE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*End Cta One */}
        </div>
      </Layout>
    </>
  );
}
