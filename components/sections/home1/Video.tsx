import VideoPopupButton from "@/components/elements/VideoPopupButton";
import { getTranslations } from "@/lib/i18n/server";

const VIDEO_ID = "vfhzo499OeA";

/** Kayan yazı şeridi üç kez tekrarlanarak kesintisiz akar. */
const SCROLLING_REPEAT = 3;

export type VideoProps = {
  /** home3 bölümü üstte kayan yazı şeridi olan `video-one--two` varyantını kullanır. */
  variant?: "two";
};

export default async function Video({ variant }: VideoProps) {
  const { t } = await getTranslations();
  const { titleLine1, titleLine2 } = t.home.video1;

  const isVariantTwo = variant === "two";

  return (
    <section className={`video-one ${isVariantTwo ? "video-one--two" : ""}`.trim()}>
      {isVariantTwo && (
        <div className="scrolling-text-one">
          <div className="scrolling-text-one__wrap">
            {Array.from({ length: SCROLLING_REPEAT }, (_, index) => (
              <div key={index} className="scrolling-text-one__title">
                <h2>{t.home.video3.scrollingText}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="video-one__pattern">
        <img
          src="/assets/img/pattern/video-v1-pattern.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width={1889}
          height={716}
        />
      </div>
      <div className="auto-container">
        <div className="video-one__inner text-center">
          <div className="shape1 float-bob-x">
            <img
              src="/assets/img/shape/video-v1-shape1.webp"
              alt=""
              loading="lazy"
              decoding="async"
              width={56}
              height={46}
            />
          </div>
          <div
            className="video-one__bg"
            style={{
              backgroundImage: "url(/assets/img/background/video-v1-bg.webp)",
            }}
          ></div>
          <div className="title-box">
            <h2>
              {titleLine1} <br />
              {titleLine2}
            </h2>
          </div>
          <div className="video-one__video-btn">
            <VideoPopupButton
              videoId={VIDEO_ID}
              className="video-one__icon video-popup"
              ariaLabel={t.common.a11y.playVideo}
            >
              <span className="icon-play-button-1" aria-hidden="true"></span>
            </VideoPopupButton>
          </div>
        </div>
      </div>
    </section>
  );
}
