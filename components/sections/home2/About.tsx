import Link from "next/link";
import VideoPopupButton from "@/components/elements/VideoPopupButton";
import { getTranslations } from "@/lib/i18n/server";

const VIDEO_ID = "vfhzo499OeA";

export default async function About() {
  const { t, href } = await getTranslations();
  const about = t.home.about2;

  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          {/*Start About Two Img */}
          <div className="col-xl-6">
            <div className="about-two__img">
              <div
                className="about-two__img1 wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner">
                  <img
                    src="/assets/img/about/about-v2-img1.webp"
                    alt={t.home.about3.buildingAlt}
                    decoding="async"
                    loading="lazy"
                    width={690}
                    height={695}
                  />
                </div>
              </div>
              <div
                className="about-two__img2 wow fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/img/about/about-v2-img2.webp"
                  alt={t.home.about3.interiorAlt}
                  decoding="async"
                  loading="lazy"
                  width={520}
                  height={210}
                />
                <div className="about-two__video-btn">
                  <VideoPopupButton
                    videoId={VIDEO_ID}
                    className="about-two__icon video-popup"
                    ariaLabel={t.common.a11y.playVideo}
                  >
                    <span className="icon-play-button-1" aria-hidden="true"></span>
                  </VideoPopupButton>
                </div>
              </div>
            </div>
          </div>
          {/*End About Two Img */}

          {/*Start About Two Content */}
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>{about.eyebrow}</h5>
                </div>
                <h2>
                  {about.titleLine1} <br />
                  {about.titleLine2}
                </h2>
              </div>

              <div className="about-two__content-text">
                <p>{about.text}</p>
              </div>

              <div className="about-two__content-list">
                <ul>
                  {about.listItems.map((item) => (
                    <li key={item}>
                      <p>
                        <span className="icon-verified" aria-hidden="true"></span>{" "}
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-two__content-bottom">
                <div className="author-box">
                  <div className="img-box">
                    <img
                      src="/assets/img/about/about-v2-img3.webp"
                      alt={t.home.about1.portraitAlt}
                      decoding="async"
                      loading="lazy"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="signature">
                    <img
                      src="/assets/img/about/signature-1.webp"
                      alt={t.home.about1.signatureAlt}
                      decoding="async"
                      loading="lazy"
                      width={93}
                      height={55}
                    />
                  </div>
                </div>

                <div className="btn-box">
                  <Link className="thm-btn" href={href("/about")}>
                    <span className="txt">{t.common.actions.discoverMore}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*End About Two Content */}
        </div>
      </div>
    </section>
  );
}
