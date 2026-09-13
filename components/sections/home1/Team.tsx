import Link from "next/link";
import TeamSlider2 from "@/components/slider/TeamSlider2";
import { getTranslations } from "@/lib/i18n/server";

export default async function Team() {
  const { t, href } = await getTranslations();
  const { eyebrow, titleLine1, titleLine2 } = t.home.team1;

  return (
    <section className="team-one">
      <div className="container">
        <div className="team-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>{eyebrow}</h5>
            </div>
            <h2>
              {titleLine1} <br />
              {titleLine2}
            </h2>
          </div>
          <div className="btn-box">
            <Link className="thm-btn" href={href("/contact")}>
              <span className="txt">{t.common.actions.joinOurTeam}</span>
            </Link>
          </div>
        </div>

        <TeamSlider2 content={t.shared.teamSlider} />
      </div>
    </section>
  );
}
