import Link from "next/link";
import React from "react";

export interface FeatureExploreProps {
  imgSrc?: string;
  imgAlt?: string;
  subTitle?: string;
  title?: React.ReactNode;
  text?: string;
  btnLink?: string;
  btnText?: string;
}

export default function FeatureExplore({
  imgSrc = "/assets/img/service/service-feauture-img1.jpg",
  imgAlt = "Architectural & Interior Design",
  subTitle = "EXPLORE OUR FEATURE",
  title = (
    <>
      We provide the best <br />
      architect & interior design
    </>
  ),
  text = "We deliver innovative, sustainable architectural designs, bespoke interior atmospheres, and robust construction management. Our integrated team combines visionary creativity with precise engineering to bring exceptional spaces to life.",
  btnLink = "/about",
  btnText = "Discover More",
}: FeatureExploreProps) {
  const resolvedImg = imgSrc.startsWith("/") ? imgSrc : `/${imgSrc}`;
  return (
    <>
      {/*Start Feauture Three */}
      <section className="feauture-three">
        <div className="shape1 float-bob-y">
          <img src="/assets/img/shape/feauture-v3-shape1.png" alt="" />
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
                  <img src={resolvedImg} alt={imgAlt} />
                </div>
              </div>
            </div>
            {/*End Feauture Three Img */}

            {/*Start Feauture Three Content */}
            <div className="col-xl-7">
              <div className="feauture-three__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>{subTitle}</h5>
                  </div>
                  <h2>{title}</h2>
                </div>

                <div className="text-box">
                  <p>{text}</p>
                </div>
                <div className="btn-box">
                  <Link className="thm-btn" href={btnLink}>
                    <span className="txt">{btnText}</span>
                  </Link>
                </div>
              </div>
            </div>
            {/*End Feauture Three Content */}
          </div>
        </div>
      </section>
      {/*End Feauture Three */}
    </>
  );
}
