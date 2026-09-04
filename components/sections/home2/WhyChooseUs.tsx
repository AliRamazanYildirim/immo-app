import Link from "next/link";
export default function WhyChooseUs() {
  return (
    <>
      {/*Start Why Choose Us One */}
      <div className="why-choose-us-one">
        <div className="container">
          <div className="row">
            {/*Start Why Choose Us One Img */}
            <div
              className="col-xl-6 wow animated fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="why-choose-us-one__img">
                <div className="shape1">
                  <img
                    src="assets/img/shape/why-choose-us-v1-shape1.png"
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <div className="img-box">
                      <img
                        src="assets/img/resource/why-choose-us-v1-img1.jpg"
                        alt=""
                      />
                    </div>
                  </li>

                  <li>
                    <div className="img-box">
                      <img
                        src="assets/img/resource/why-choose-us-v1-img2.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Why Choose Us One Img */}

            {/*Start Why Choose Us Content */}
            <div
              className="col-xl-6 wow animated fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="why-choose-us-one__content">
                <ul>
                  <li>
                    <div className="inner">
                      <div className="icon-box">
                        <span className="icon-office-building"></span>
                      </div>
                      <div className="content-box">
                        <h2>Architectural Design</h2>
                        <p>
                          Innovative structural concepts crafted with
                          sustainable materials, smart space utilization, and
                          bioclimatic design principles.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <div className="icon-box">
                        <span className="icon-bed"></span>
                      </div>
                      <div className="content-box">
                        <h2>The Joy of Best Living</h2>
                        <p>
                          Curated living environments combining ergonomic
                          comfort, timeless materiality, and bespoke lighting
                          arrangements.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <div className="icon-box">
                        <span className="icon-targeted"></span>
                      </div>
                      <div className="content-box">
                        <h2>Professional Planning</h2>
                        <p>
                          Rigorous cost estimation, timeline scheduling,
                          regulatory compliance, and seamless execution
                          management.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Why Choose Us Content */}
          </div>
        </div>
      </div>
      {/*End Why Choose Us One */}
    </>
  );
}
