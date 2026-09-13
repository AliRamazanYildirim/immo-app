"use client";

import { useTranslation } from "@/lib/i18n/TranslationProvider";

export type WhyChooseUsProps = {
  /** Sayfaya göre farklı görsel çifti kullanılabilir. */
  images?: Array<{ src: string; alt: string }>;
  /** home3 ve hizmetler sayfası `services3` metinlerini gösterir. */
  source?: "whyChooseUs" | "services3";
};

const defaultImages = [
  { src: "/assets/img/service/service-why-choose-img1.webp", alt: "" },
  { src: "/assets/img/service/service-why-choose-img2.webp", alt: "" },
];

export default function WhyChooseUs({
  images = defaultImages,
  source = "whyChooseUs",
}: WhyChooseUsProps) {
  const { t } = useTranslation();
  const items =
    source === "services3" ? t.home.services3.items : t.home.whyChooseUs.items;

  return (
    <div className="why-choose-us-one">
      <div className="container">
        <div className="row">
          {/*Start Why Choose Us One Img */}
          <div
            className="col-xl-6 wow animated fadeInRight"
            data-wow-delay="0.1s"
          >
            <div className="why-choose-us-one__img">
              <ul>
                {images.map((image) => (
                  <li key={image.src}>
                    <div className="img-box">
                      <img
                        src={image.src}
                        alt={image.alt}
                        decoding="async"
                        loading="lazy"
                        width={280}
                        height={535}
                      />
                    </div>
                  </li>
                ))}
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
                {items.map((item) => (
                  <li key={item.title}>
                    <div className="inner">
                      <div className="icon-box">
                        <span className={item.icon} aria-hidden="true"></span>
                      </div>
                      <div className="content-box">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*End Why Choose Us Content */}
        </div>
      </div>
    </div>
  );
}
