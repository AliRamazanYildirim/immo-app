import Link from "next/link";
import type { ReactNode } from "react";
import { getTranslations } from "@/lib/i18n/server";

export interface FeatureExploreProps {
  imgSrc?: string;
  imgAlt?: string;
  subTitle?: string;
  title?: ReactNode;
  text?: string;
  btnLink?: string;
  btnText?: string;
}

/**
 * Varsayılan içerik sözlükten gelir; çağıran sayfa istediği alanı
 * prop ile geçersiz kılabilir.
 */
export default async function FeatureExplore({
  imgSrc = "/assets/img/service/service-feauture-img1.webp",
  imgAlt,
  subTitle,
  title,
  text,
  btnLink = "/about",
  btnText,
}: FeatureExploreProps) {
  const { t, href } = await getTranslations();
  const section = t.home.featureExplore;

  const resolvedImg = imgSrc.startsWith("/") ? imgSrc : `/${imgSrc}`;
  const resolvedTitle = title ?? (
    <>
      {section.titleLine1} <br />
      {section.titleLine2}
    </>
  );

  return (
    <section className="feauture-three">
      <div className="shape1 float-bob-y">
        <img
          src="/assets/img/shape/feauture-v3-shape1.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width={311}
          height={337}
        />
      </div>
      <div className="container">
        <div className="row">
          {/*Start Feauture Three Img */}
          <div
            className="col-xl-5 wow animated fadeInLeft"
            data-wow-delay="0.1s"
          >
            <div className="feauture-three__img">
              <div className="inner clearfix">
                <img
                  src={resolvedImg}
                  alt={imgAlt ?? section.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={520}
                />
              </div>
            </div>
          </div>
          {/*End Feauture Three Img */}

          {/*Start Feauture Three Content */}
          <div className="col-xl-7">
            <div className="feauture-three__content">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>{subTitle ?? section.eyebrow}</h5>
                </div>
                <h2>{resolvedTitle}</h2>
              </div>

              <div className="text-box">
                <p>{text ?? section.text}</p>
              </div>
              <div className="btn-box">
                <Link className="thm-btn" href={href(btnLink)}>
                  <span className="txt">
                    {btnText ?? t.common.actions.discoverMore}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/*End Feauture Three Content */}
        </div>
      </div>
    </section>
  );
}
