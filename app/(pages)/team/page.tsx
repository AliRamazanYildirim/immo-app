import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Our Team"
        breadcrumbBg="/assets/img/team/page-header-bg.webp"
      >
        <div>
          <section className="team-two">
            <div className="container">
              <div className="row">
                {/* Start Team Two Single */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/img/team/team-v2-img1.webp"
                          alt="Marcus Vance - Senior Architect" decoding="async" loading="lazy" width={370} height={540} />
                      </div>

                      <div className="content-box">
                        <h3>
                          <Link href="/team-details">Marcus Vance</Link>
                        </h3>
                        <p>Senior Architect</p>
                      </div>
                      <ul className="social-links clearfix">
                        <li className="share">
                          <Link href="#">
                            <span className="icon-share"></span>
                          </Link>
                          <ul className="social-links-inner">
                            <li>
                              <Link href="#">
                                <i className="icon-linkedin-big-logo"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Team Two Single */}

                {/* Start Team Two Single */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/img/team/team-v2-img2.webp"
                          alt="Janes Cooper - Lead Interior Designer" decoding="async" loading="lazy" width={370} height={540} />
                      </div>

                      <div className="content-box">
                        <h3>
                          <Link href="/team-details">Janes Cooper</Link>
                        </h3>
                        <p>Lead Interior Designer</p>
                      </div>
                      <ul className="social-links clearfix">
                        <li className="share">
                          <Link href="#">
                            <span className="icon-share"></span>
                          </Link>
                          <ul className="social-links-inner">
                            <li>
                              <Link href="#">
                                <i className="icon-linkedin-big-logo"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Team Two Single */}

                {/* Start Team Two Single */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/img/team/team-v2-img3.webp"
                          alt="David Miller - Structural Engineer" decoding="async" loading="lazy" width={370} height={540} />
                      </div>

                      <div className="content-box">
                        <h3>
                          <Link href="/team-details">David Miller</Link>
                        </h3>
                        <p>Structural Engineer</p>
                      </div>
                      <ul className="social-links clearfix">
                        <li className="share">
                          <Link href="#">
                            <span className="icon-share"></span>
                          </Link>
                          <ul className="social-links-inner">
                            <li>
                              <Link href="#">
                                <i className="icon-linkedin-big-logo"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Team Two Single */}

                {/* Start Team Two Single */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/img/team/team-v2-img4.webp"
                          alt="Sophia Laurent - Landscape Architect" decoding="async" loading="lazy" width={370} height={540} />
                      </div>

                      <div className="content-box">
                        <h3>
                          <Link href="/team-details">Sophia Laurent</Link>
                        </h3>
                        <p>Landscape Architect</p>
                      </div>
                      <ul className="social-links clearfix">
                        <li className="share">
                          <Link href="#">
                            <span className="icon-share"></span>
                          </Link>
                          <ul className="social-links-inner">
                            <li>
                              <Link href="#">
                                <i className="icon-linkedin-big-logo"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Team Two Single */}

                {/* Start Team Two Single */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/img/team/team-v2-img5.webp"
                          alt="Alexander Wright - Construction Manager" decoding="async" loading="lazy" width={370} height={540} />
                      </div>

                      <div className="content-box">
                        <h3>
                          <Link href="/team-details">Alexander Wright</Link>
                        </h3>
                        <p>Construction Manager</p>
                      </div>
                      <ul className="social-links clearfix">
                        <li className="share">
                          <Link href="#">
                            <span className="icon-share"></span>
                          </Link>
                          <ul className="social-links-inner">
                            <li>
                              <Link href="#">
                                <i className="icon-linkedin-big-logo"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Team Two Single */}

                {/* Start Team Two Single */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="team-two__single">
                    <div className="team-two__single-img">
                      <div className="inner">
                        <img src="/assets/img/team/team-v2-img6.webp"
                          alt="Clara Schmidt - Interior Concepts Specialist" decoding="async" loading="lazy" width={370} height={540} />
                      </div>

                      <div className="content-box">
                        <h3>
                          <Link href="/team-details">Clara Schmidt</Link>
                        </h3>
                        <p>Interior Concepts Specialist</p>
                      </div>
                      <ul className="social-links clearfix">
                        <li className="share">
                          <Link href="#">
                            <span className="icon-share"></span>
                          </Link>
                          <ul className="social-links-inner">
                            <li>
                              <Link href="#">
                                <i className="icon-linkedin-big-logo"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Team Two Single */}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
