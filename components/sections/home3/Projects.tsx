import Link from "next/link";
import ProjectSlider2 from "@/components/slider/ProjectSlider2";
import { getTranslations } from "@/lib/i18n/server";

export default async function Projects() {
  const { t, href } = await getTranslations();
  const { eyebrow, title } = t.home.projects3;

  return (
    <section className="project-three">
      <div className="shape1">
        <img
          src="/assets/img/shape/project-v3-shape1.webp"
          alt=""
          decoding="async"
          loading="lazy"
          width={944}
          height={510}
        />
      </div>
      <div className="container">
        <div className="project-three__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>{eyebrow}</h5>
            </div>
            <h2>{title}</h2>
          </div>

          <div className="btn-box">
            <Link href={href("/projects")}>
              {t.common.actions.viewAllProjects}
            </Link>
          </div>
        </div>

        <div className="project-three__bottom">
          <ProjectSlider2 projects={t.shared.projects} />
          <div className="swiper-pagination" id="project-three__pagination"></div>
        </div>
      </div>
    </section>
  );
}
