"use client";
import Link from "next/link";

export default function Services() {
  return (
    <>
      {/*Start Service Two */}
      <section className="service-two">
        <div className="shape1 float-bob-y">
          <img src="/assets/img/shape/service-v2-shape1.webp" alt="" decoding="async" loading="lazy" width={508} height={688} />
        </div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>OUR SERVICE</h5>
            </div>
            <h2>Our Architecture Services</h2>
          </div>
          <div className="row">
            {/*Start Service Two Single */}
            <div
              className="col-xl-3 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-two__single">
                <div className="shape2">
                  <img src="/assets/img/shape/service-v2-shape2.webp" alt="" decoding="async" loading="lazy" width={76} height={133} />
                </div>
                <div
                  className="service-two__single-bg"
                  style={{
                    backgroundImage:
                      "url(/assets/img/service/service-v2-bg-architecture.webp)",
                  }}
                ></div>
                <div className="service-two__single-icon">
                  <span className="icon-blueprint"></span>
                </div>
                <div className="service-two__single-text">
                  <h2>
                    <Link href="/architecture">Architecture & Planning</Link>
                  </h2>
                  <p>
                    Visionary architectural concepts, sustainable building
                    plans, and precise 3D BIM coordination for modern living.
                  </p>
                </div>

                <div className="btn-box">
                  <Link href="/architecture">EXPLORE SERVICE</Link>
                </div>
              </div>
            </div>
            {/*End Service Two Single */}

            {/*Start Service Two Single */}
            <div
              className="col-xl-3 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-two__single">
                <div className="shape2">
                  <img src="/assets/img/shape/service-v2-shape2.webp" alt="" decoding="async" loading="lazy" width={76} height={133} />
                </div>
                <div
                  className="service-two__single-bg"
                  style={{
                    backgroundImage:
                      "url(/assets/img/service/service-v2-bg-construction.webp)",
                  }}
                ></div>
                <div className="service-two__single-icon">
                  <span className="icon-engineer"></span>
                </div>
                <div className="service-two__single-text">
                  <h2>
                    <Link href="/construction-site">General Contracting</Link>
                  </h2>
                  <p>
                    Full-scope site supervision, technical execution, and
                    turnkey construction with uncompromising quality standards.
                  </p>
                </div>

                <div className="btn-box">
                  <Link href="/construction-site">EXPLORE SERVICE</Link>
                </div>
              </div>
            </div>
            {/*End Service Two Single */}

            {/*Start Service Two Single */}
            <div
              className="col-xl-3 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-two__single">
                <div className="shape2">
                  <img src="/assets/img/shape/service-v2-shape2.webp" alt="" decoding="async" loading="lazy" width={76} height={133} />
                </div>
                <div
                  className="service-two__single-bg"
                  style={{
                    backgroundImage:
                      "url(/assets/img/service/service-v2-bg-interior.webp)",
                  }}
                ></div>
                <div className="service-two__single-icon">
                  <span className="icon-interior-design"></span>
                </div>
                <div className="service-two__single-text">
                  <h2>
                    <Link href="/interior-design">Interior Design</Link>
                  </h2>
                  <p>
                    Harmonious interior spaces combining ergonomic comfort,
                    refined materials, and custom bespoke architectural
                    millwork.
                  </p>
                </div>

                <div className="btn-box">
                  <Link href="/interior-design">EXPLORE SERVICE</Link>
                </div>
              </div>
            </div>
            {/*End Service Two Single */}

            {/*Start Service Two Single */}
            <div
              className="col-xl-3 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-two__single">
                <div className="shape2">
                  <img src="/assets/img/shape/service-v2-shape2.webp" alt="" decoding="async" loading="lazy" width={76} height={133} />
                </div>
                <div
                  className="service-two__single-bg"
                  style={{
                    backgroundImage:
                      "url(/assets/img/service/service-v2-bg-renovation.webp)",
                  }}
                ></div>
                <div className="service-two__single-icon">
                  <span className="icon-solution"></span>
                </div>
                <div className="service-two__single-text">
                  <h2>
                    <Link href="/building-renovation">Building Renovation</Link>
                  </h2>
                  <p>
                    Energetic modernization, historic building restoration, and
                    high-efficiency structural facade retrofits.
                  </p>
                </div>

                <div className="btn-box">
                  <Link href="/building-renovation">EXPLORE SERVICE</Link>
                </div>
              </div>
            </div>
            {/*End Service Two Single */}
          </div>
        </div>
      </section>
      {/*End Service Two */}
    </>
  );
}
