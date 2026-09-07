import Layout from "@/components/layout/Layout";
import Link from "next/link";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Team Details"
        breadcrumbBg="/assets/img/team/page-header-bg.webp"
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
                      <h2>ARY GROUP</h2>
                    </div>
                    <div className="inner">
                      <img src="/assets/img/team/team-details-img1.webp"
                        alt="Elena Rostova - Lead Architect & Project Director" decoding="async" loading="lazy" width={470} height={550} />
                    </div>
                  </div>
                </div>
                {/* End Team Details Top Img */}

                {/* Start Team Details Top Content */}
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__top-content">
                    <div className="team-details__top-content-top">
                      <h2>Elena Rostova</h2>
                      <p>Lead Architect & Project Director</p>
                    </div>

                    <div className="team-details__top-content-text">
                      <p>
                        <span>Department:</span> Architectural & Interior Design
                      </p>
                      <p>
                        <span>Experience:</span> 15 Years
                      </p>
                      <p>
                        <span>Email:</span>{" "}
                        <Link href={getMailtoLink()}>
                          {siteConfig.contact.email}
                        </Link>
                      </p>
                      <p>
                        <span>Phone:</span>{" "}
                        <Link href={getTelLink()}>
                          {siteConfig.contact.phone}
                        </Link>
                      </p>
                    </div>

                    <div className="social-links">
                      <ul>
                        <li>
                          <Link href={siteConfig.social.facebook}>
                            <span className="icon-facebook"></span>
                          </Link>
                        </li>
                        <li>
                          <Link className="tw" href={siteConfig.social.twitter}>
                            <span className="icon-x-twitter"></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ins"
                            href={siteConfig.social.instagram}
                          >
                            <span className="icon-instagram"></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="in"
                            href={siteConfig.social.linkedin}
                          >
                            <span className="icon-linkedin-big-logo"></span>
                          </Link>
                        </li>
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
                  <h2>Elena Rostova’s Biography</h2>
                  <p>
                    With over 15 years of distinguished experience in
                    architectural planning, interior design, and sustainable
                    construction management, Elena leads high-impact residential
                    and commercial developments from conceptualization through
                    turnkey delivery.
                  </p>

                  <p>
                    She combines contemporary aesthetic vision with advanced
                    Building Information Modeling (BIM), sustainable materials,
                    and rigorous on-site construction coordination, ensuring
                    every development exceeds client expectations in
                    functionality, structural longevity, and architectural
                    beauty.
                  </p>
                </div>

                <div className="team-details__middle-text2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="team-details__middle-text2-progress">
                        <div className="team-details__middle-text2-progress-single">
                          <div className="title">
                            <h4>Architectural Design & 3D BIM</h4>
                          </div>
                          <div className="bar">
                            <div
                              className="bar-inner count-bar"
                              style={{ width: "95%" }}
                            >
                              <div className="count-text">95%</div>
                            </div>
                          </div>
                        </div>

                        <div className="team-details__middle-text2-progress-single">
                          <div className="title">
                            <h4>Interior Design & Spatial Concept</h4>
                          </div>
                          <div className="bar">
                            <div
                              className="bar-inner count-bar"
                              style={{ width: "90%" }}
                            >
                              <div className="count-text style2">90%</div>
                            </div>
                          </div>
                        </div>

                        <div className="team-details__middle-text2-progress-single mb0">
                          <div className="title">
                            <h4>Construction & Site Supervision</h4>
                          </div>
                          <div className="bar">
                            <div
                              className="bar-inner count-bar"
                              style={{ width: "85%" }}
                            >
                              <div className="count-text style2">85%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                      <div className="team-details__middle-text2-content">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="single-content">
                              <h2>Studio Arki Berlin</h2>
                              <p>Lead Architect, BIM Modeling</p>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="single-content">
                              <h2>Metro Urban Builders</h2>
                              <p>Senior Construction Manager</p>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="single-content">
                              <h2>Atelier Interior Spaces</h2>
                              <p>Principal Interior Designer</p>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="single-content">
                              <h2>Alpine Habitat Design</h2>
                              <p>Sustainable Architecture Lead</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-details__middle-text3">
                  <h2>Key Competencies & Specializations</h2>
                  <p>
                    Specializing in comprehensive building design, bespoke
                    interior space planning, structural engineering
                    coordination, and high-precision turnkey execution.
                    Passionate about creating timeless spaces where aesthetic
                    harmony meets environmental sustainability and German
                    building excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Details Middle */}

          <div className="contact-two">
            <div className="container">
              <div className="contact-two__inner">
                <div className="title-box">
                  <h2>Let’s Get in Touch</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="contact-two__inner-box">
                  <form
                    action="#"
                    className="contact-page__form contact-form-validated"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Your Name*"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-page__input-box">
                          <input
                            type="email"
                            placeholder="Your Email*"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Phone*"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Subject*"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="contact-page__input-box">
                          <textarea
                            name="message"
                            placeholder="Write Message*"
                          ></textarea>
                        </div>
                        <div className="contact-page__btn">
                          <button
                            className="thm-btn"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span className="txt">SEND YOUR MESSAGE</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Details */}
      </Layout>
    </>
  );
}
