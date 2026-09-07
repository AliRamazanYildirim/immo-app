"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*Start Video One */}
      <section className="video-one video-one--two">
        <div className="scrolling-text-one">
          <div className="scrolling-text-one__wrap">
            <div className="scrolling-text-one__title">
              <h2>ARY CREATIVE ARCHITECTURE SOLUTION</h2>
            </div>
            <div className="scrolling-text-one__title">
              <h2>ARY CREATIVE ARCHITECTURE SOLUTION</h2>
            </div>
            <div className="scrolling-text-one__title">
              <h2>ARY CREATIVE ARCHITECTURE SOLUTION</h2>
            </div>
          </div>
        </div>
        <div className="video-one__pattern">
          <img src="/assets/img/pattern/video-v1-pattern.webp" alt="" decoding="async" loading="lazy" width={1889} height={716} />
        </div>
        <div className="auto-container">
          <div className="video-one__inner text-center">
            <div className="shape1 float-bob-x">
              <img src="/assets/img/shape/video-v1-shape1.webp" alt="" decoding="async" loading="lazy" width={56} height={46} />
            </div>
            <div
              className="video-one__bg"
              style={{
                backgroundImage: "url(/assets/img/background/video-v1-bg.webp)",
              }}
            ></div>
            <div className="title-box">
              <h2>
                We Are The Leader in <br />
                the Architectural
              </h2>
            </div>
            <div className="video-one__video-btn">
              <a
                onClick={() => setOpen(true)}
                className="video-one__icon video-popup"
              >
                <span className="icon-play-button-1"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*End Video One */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
