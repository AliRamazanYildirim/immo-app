"use client";

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export type ActionProps = {
  /** Sayfaya göre farklı arka plan görseli kullanılabilir. */
  background?: string;
  /** About ve hizmetler sayfaları vurgulu varyantı kullanır. */
  highlight?: boolean;
};

export default function Action({
  background = "/assets/img/background/call-to-action-v1-bg.webp",
  highlight = false,
}: ActionProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const { title, subtitle, cta } = t.home.action;

  return (
    <section
      className={`call-to-action-one ${
        highlight ? "call-to-action-one--highlight" : ""
      }`.trim()}
    >
      <div
        className="call-to-action-one__bg"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="container">
        <div className="call-to-action-one__inner">
          <div className="call-to-action-one__content text-center">
            <h2>{highlight ? <span>{title}</span> : title}</h2>
            <h3>{highlight ? <span>{subtitle}</span> : subtitle}</h3>
            <div className="btn-box">
              <Link className="thm-btn" href={href("/contact")}>
                <span className="txt">{cta}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
