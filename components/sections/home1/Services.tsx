"use client";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  return (
    <>
      {/*Start Service One */}
      <section className="service-one">
        <div
          className="service-one__shape2"
          style={{
            backgroundImage: "url(assets/img/shape/service-v1-shape2.png)",
          }}
        ></div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>OUR SERVICE</h5>
            </div>
            <h2>Our Architecture Services</h2>
          </div>
          <div className="row">
            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">01</div>
                  <div className="icon-box">
                    <span className="icon-blueprint"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/architecture">Architecture & Planning</Link>
                    </h2>
                    <p>
                      Forward-thinking architectural concepts, 3D BIM modeling,
                      structural engineering, and complete statutory permit
                      approvals.
                    </p>
                    <div className="btn-box">
                      <Link href="/architecture">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">02</div>
                  <div className="icon-box">
                    <span className="icon-interior-design"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/interior-design">Interior Design</Link>
                    </h2>
                    <p>
                      Bespoke spatial design, high-end material selection,
                      custom millwork details, and tailored turnkey interior
                      styling.
                    </p>
                    <div className="btn-box">
                      <Link href="/interior-design">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">03</div>
                  <div className="icon-box">
                    <span className="icon-solution"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/building-renovation">
                        Building Renovation
                      </Link>
                    </h2>
                    <p>
                      Energetic modernization, historic building restoration,
                      structural remediation, and high-efficiency facade
                      retrofits.
                    </p>
                    <div className="btn-box">
                      <Link href="/building-renovation">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">04</div>
                  <div className="icon-box">
                    <span className="icon-construction"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/construction-site">
                        Construction Management
                      </Link>
                    </h2>
                    <p>
                      Full-scope general contracting, site supervision, trade
                      coordination, strict safety protocols, and on-time project
                      handover.
                    </p>
                    <div className="btn-box">
                      <Link href="/construction-site">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}
          </div>
        </div>
      </section>
      {/*End Service One */}
    </>
  );
}
