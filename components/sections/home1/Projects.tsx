import Link from "next/link";
import { getTranslations } from "@/lib/i18n/server";

export default async function Projects() {
  const { t, href } = await getTranslations();
  const { eyebrow, titleLine1, titleLine2, items } = t.home.projects1;

  return (
    <section className="project-one">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{eyebrow}</h5>
          </div>
          <h2>
            {titleLine1} <br />
            {titleLine2}
          </h2>
        </div>
        <div className="row">
          {items.map((project, index) => (
            <div
              key={project.title}
              className={`col-xl-3 col-lg-6 col-md-6 wow ${
                index % 2 === 0 ? "fadeInUp" : "fadeInDown"
              }`}
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    width={470}
                    height={625}
                  />
                  <div className="overlay-btn">
                    <a
                      className="img-popup"
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.alt}
                    >
                      <span
                        className="icon-search-interface-symbol"
                        aria-hidden="true"
                      ></span>
                    </a>
                    <Link
                      href={href("/project-details")}
                      aria-label={project.title}
                    >
                      <span className="icon-link" aria-hidden="true"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>{project.location}</p>
                    <h2>
                      <Link href={href("/project-details")}>
                        {project.title}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
