/**
 * Proje ızgarası (`project-three`).
 * Projeler sayfası ve proje detayındaki "ilgili projeler" bloğu paylaşır.
 */

import Link from "next/link";
import { getTranslations } from "@/lib/i18n/server";

export type ProjectGridProps = {
  /** Kartlarda kullanılacak görseller; proje sayısını da belirler. */
  images: string[];
  /** Kart linklerinin hedefi. */
  linkTo?: string;
  /** İlgili projeler bloğunda kullanılan başlık. */
  title?: string;
  /** Proje detayındaki blok ek `style4` varyantını kullanır. */
  variant?: "style4";
};

export default async function ProjectGrid({
  images,
  linkTo,
  title,
  variant,
}: ProjectGridProps) {
  const { t, href } = await getTranslations();
  const { items, detailsHref } = t.shared.projects;

  const target = linkTo ?? detailsHref;

  return (
    <section
      className={`project-three project-three--project ${variant ?? ""}`.trim()}
    >
      <div className="container">
        {title && (
          <div className="sec-title text-center">
            <h2>{title}</h2>
          </div>
        )}
        <div className="row">
          {images.map((image, index) => {
            const project = items[index % items.length];

            return (
              <div key={image} className="col-xl-4 col-lg-4 col-md-6">
                <div className="project-three__single">
                  <div className="project-three__single-inner">
                    <div
                      className="project-three__single-img"
                      style={{ backgroundImage: `url(${image})` }}
                      role="img"
                      aria-label={project.alt}
                    ></div>
                    <div className="bg-overlay"></div>

                    <div className="project-three__overlay-icon">
                      <ul>
                        <li>
                          <a
                            className="img-popup"
                            href={image}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={project.alt}
                          >
                            <span
                              className="icon-search-interface-symbol"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <Link href={href(target)} aria-label={project.title}>
                            <span className="icon-link" aria-hidden="true"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="project-three__single-content">
                      <p>{project.location}</p>
                      <h2>
                        <Link href={href(target)}>{project.title}</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
