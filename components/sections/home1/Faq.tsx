"use client";
import { useState } from "react";
interface AccordionState {
  status: boolean;
  key?: number;
}

export default function Faq() {
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
      {/*Start Faq One */}
      <section className="faq-one">
        <div className="shape1">
          <img src="/assets/img/shape/faq-v1-shape1.webp"
            alt=""
            loading="lazy"
            decoding="async" width={469} height={736} />
        </div>
        <div className="container clearfix">
          <div className="faq-one__inner">
            <div className="big-title">
              <h2>FAQ</h2>
            </div>
            <ul
              className="accrodion-grp faq-one__accrodion"
              data-grp-name="faq-one-accrodion"
            >
              {/*Start Faq One Single */}
              <li
                className={isActive.key == 1 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(1)}
              >
                <div className="accrodion-title">
                  <h3>How long does the architectural design and approval process take?</h3>
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
                      Concept and preliminary design typically take 4 to 8 weeks. Municipal building permit reviews generally require 2 to 4 months depending on local authority schedules and project scale.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}

              {/*Start Faq One Single */}
              <li
                className={isActive.key == 2 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(2)}
              >
                <div className="accrodion-title">
                  <h3>Do you provide turnkey construction and general contracting?</h3>
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
                      Yes. We offer complete turnkey delivery — managing excavation, shell construction, building envelope, MEP engineering, and interior finishes under a single, accountable contract.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}

              {/*Start Faq One Single */}
              <li
                className={isActive.key == 3 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(3)}
              >
                <div className="accrodion-title">
                  <h3>What is included in your interior architecture services?</h3>
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
                      We provide spatial flow optimization, bespoke millwork and cabinetry design, lighting plans, tactile material sourcing, photorealistic 3D renders, and full turnkey furniture installation.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}

              {/*Start Faq One Single */}
              <li
                className={isActive.key == 4 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(4)}
              >
                <div className="accrodion-title">
                  <h3>How do you ensure budget compliance and prevent cost overruns?</h3>
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
                      We utilize detailed bills of quantities (BoQ), competitive trade tenders, and guaranteed-maximum-price contracts, backed by milestone-based payment disbursements.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}
            </ul>
          </div>
        </div>
      </section>
      {/*End Faq One */}
    </>
  );
}
