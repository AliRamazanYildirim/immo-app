import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import siteConfig, { getTelLink } from "@/lib/siteConfig";
import { getTranslations } from "@/lib/i18n/server";

export default async function About() {
  const { t, href } = await getTranslations();
  const about = t.home.about1;
  const alts = t.home.about3;

  return (
    <section className="about-three">
      <div className="container">
        <div className="row">
          {/*Start About Three Img */}
          <div className="col-xl-6">
            <div className="about-three__img">
              <div className="about-three__img1">
                <div className="inner">
                  <img
                    src="/assets/img/about/about-v3-img1.webp"
                    alt={alts.projectAlt}
                    decoding="async"
                    loading="lazy"
                    width={390}
                    height={500}
                  />
                </div>

                <div className="experience-box">
                  <div className="counter-box">
                    <h2 className="count">
                      <CounterUp end={about.experienceYears} />
                    </h2>
                  </div>
                  <div className="text-box">
                    <p>
                      {about.experienceLines.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < about.experienceLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-three__img2">
                <ul>
                  <li>
                    <div className="about-three__img2-single">
                      <img
                        src="/assets/img/about/about-v3-img2.webp"
                        alt={alts.interiorAlt}
                        decoding="async"
                        loading="lazy"
                        width={275}
                        height={160}
                      />
                    </div>
                  </li>

                  <li>
                    <div className="about-three__img2-single">
                      <img
                        src="/assets/img/about/about-v3-img3.webp"
                        alt={alts.buildingAlt}
                        decoding="async"
                        loading="lazy"
                        width={275}
                        height={335}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End About Three Img */}

          {/*Start About One Content */}
          <div className="col-xl-6">
            <div className="about-one__content">
              <div className="sec-title">
                <h2>
                  {about.titleLine1} <br />
                  {about.titleLine2}
                </h2>
              </div>

              <div className="text-box">
                <p>{about.text}</p>
              </div>

              <div className="about-one__content-progress">
                {about.progress.map((bar, index) => (
                  <div
                    key={bar.label}
                    className={`about-one__content-progress-single ${
                      index === about.progress.length - 1 ? "mb0" : ""
                    }`.trim()}
                  >
                    <div className="title">
                      <h4>{bar.label}</h4>
                    </div>
                    <div className="bar">
                      <div
                        className={`bar-inner${index + 1} count-bar`}
                        data-percent={`${bar.percent}%`}
                      >
                        <div
                          className={`count-text ${index > 0 ? "style2" : ""}`.trim()}
                        >
                          {bar.percent}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-one__content-bottom">
                <div className="about-one__content-bottom-author-box">
                  <div className="btn-box">
                    <Link className="thm-btn" href={href("/about")}>
                      <span className="txt">
                        {t.common.actions.discoverMore}
                      </span>
                    </Link>
                  </div>

                  <div className="author-info">
                    <div className="img-box">
                      <img
                        src="/assets/img/about/about-v3-img4.webp"
                        alt={about.portraitAlt}
                        decoding="async"
                        loading="lazy"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="signature-box">
                      <img
                        src="/assets/img/about/signature-1.webp"
                        alt={about.signatureAlt}
                        decoding="async"
                        loading="lazy"
                        width={93}
                        height={55}
                      />
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h4>
                    {t.common.labels.projectQuestion}{" "}
                    <Link href={getTelLink()}>{siteConfig.contact.phone}</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/*End About One Content */}
        </div>
      </div>
    </section>
  );
}
