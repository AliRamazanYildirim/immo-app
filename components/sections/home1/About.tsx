import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import siteConfig, { getTelLink } from "@/lib/siteConfig";
import { getTranslations } from "@/lib/i18n/server";

export type AboutProps = {
  /** about sayfası aynı bölümü `about-one--about` varyantıyla kullanır. */
  variant?: "about";
};

export default async function About({ variant }: AboutProps) {
  const { t, href } = await getTranslations();
  const about = t.home.about1;

  return (
    <section
      className={`about-one ${variant ? "about-one--about" : ""}`.trim()}
    >
      <div className="shape1 float-bob-y">
        <img
          src="/assets/img/shape/about-v1-shape1.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width={508}
          height={688}
        />
      </div>
      <div className="container">
        <div className="row">
          {/*Start About One Img */}
          <div
            className="col-xl-5 wow animated fadeInRight"
            data-wow-delay="0.1s"
          >
            <div className="about-one__img">
              <div className="inner">
                <img
                  src="/assets/img/about/about-v1-img1.webp"
                  alt={about.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={460}
                  height={600}
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
          </div>
          {/*End About One Img */}

          {/*Start About One Content */}
          <div
            className="col-xl-7 wow animated fadeInLeft"
            data-wow-delay="0.1s"
          >
            <div className="about-one__content">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>{about.eyebrow}</h5>
                </div>
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
                      <span className="txt">{t.common.actions.discoverMore}</span>
                    </Link>
                  </div>

                  <div className="author-info">
                    <div className="img-box">
                      <img
                        src="/assets/img/about/about-v1-img2.webp"
                        alt={about.portraitAlt}
                        loading="lazy"
                        decoding="async"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="signature-box">
                      <img
                        src="/assets/img/about/signature-1.webp"
                        alt={about.signatureAlt}
                        loading="lazy"
                        decoding="async"
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
