"use client";

import ProjectSlider0 from "@/components/slider/ProjectSlider0";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function Projects() {
  const { t } = useTranslation();
  const { eyebrow, titleLine1, titleLine2 } = t.home.projects1;

  return (
    <section className="project-two">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{eyebrow}</h5>
          </div>
          <h2>
            {titleLine1} <br />
            {titleLine2}
          </h2>
        </div>
        <ProjectSlider0 />
      </div>
    </section>
  );
}
