"use client";

/**
 * Ekip ızgarası (`team-two`).
 * Anasayfa 3, hakkımızda 3, ekip sayfası 6 üye gösteriyor — aynı işaretleme
 * üç yerde kopyalanmıştı, burada tek kaynağa indirildi.
 */

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export type TeamGridProps = {
  /** Gösterilecek üye sayısı; verilmezse tümü listelenir. */
  limit?: number;
  /** Başlık bloğu gösterilsin mi. */
  showHeading?: boolean;
};

const socialIcons = [
  { icon: "icon-linkedin-big-logo", label: "LinkedIn" },
  { icon: "icon-instagram", label: "Instagram" },
  { icon: "icon-facebook", label: "Facebook" },
] as const;

export default function TeamGrid({ limit, showHeading = true }: TeamGridProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const team = t.pages.team;

  const members = limit ? team.members.slice(0, limit) : team.members;
  const animations = ["fadeInUp", "fadeInDown", "fadeInUp"];

  return (
    <section className="team-two">
      <div className="container">
        {showHeading && (
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>{team.eyebrow}</h5>
            </div>
            <h2>
              {team.titleLine1} <br />
              {team.titleLine2}
            </h2>
          </div>
        )}
        <div className="row">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`col-xl-4 col-lg-4 col-md-6 col-sm-12 wow ${animations[index % animations.length]}`}
              data-wow-delay=".3s"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="inner">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      decoding="async"
                      loading="lazy"
                      width={370}
                      height={540}
                    />
                  </div>

                  <div className="content-box">
                    <h3>
                      <Link href={href("/team-details")}>{member.name}</Link>
                    </h3>
                    <p>{member.role}</p>
                  </div>
                  <ul className="social-links clearfix">
                    <li className="share">
                      <Link href="#" aria-label={team.shareAria}>
                        <span className="icon-share" aria-hidden="true"></span>
                      </Link>
                      <ul className="social-links-inner">
                        {socialIcons.map((social) => (
                          <li key={social.icon}>
                            <Link
                              href="#"
                              aria-label={t.common.a11y.socialProfile.replace(
                                "{network}",
                                social.label,
                              )}
                            >
                              <i className={social.icon} aria-hidden="true"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
