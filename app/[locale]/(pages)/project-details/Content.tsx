import Link from "next/link";
import Layout from "@/components/layout/Layout";
import SocialLink, { socialIconSets } from "@/components/elements/SocialLink";
import ProjectGrid from "@/components/sections/common/ProjectGrid";
import { getTranslations } from "@/lib/i18n/server";

const relatedImages = [
  "/assets/img/project/project-v3-img4.webp",
  "/assets/img/project/project-v3-img5.webp",
  "/assets/img/project/project-v3-img6.webp",
];

export default async function ProjectDetailsPage() {
  const { t, href } = await getTranslations();
  const page = t.pages.projectDetails;
  const { labels } = page;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      {/*Start Project Details */}
      <section className="project-details">
        <div className="container">
          <div className="project-details__inner">
            <div className="project-details-img">
              <div className="inner">
                <img
                  src="/assets/img/project/project-details-img1.webp"
                  alt={page.heroAlt}
                  decoding="async"
                  loading="lazy"
                  width={1170}
                  height={540}
                />
              </div>
            </div>

            <div className="project-details__text1">
              <ul>
                <li>
                  <div className="text-box">
                    <p>{labels.published}</p>
                    <h4>{page.publishedDate}</h4>
                  </div>
                </li>

                <li>
                  <div className="text-box">
                    <p>{labels.category}</p>
                    <h4>{page.category}</h4>
                  </div>
                </li>

                <li>
                  <div className="text-box">
                    <p>{labels.client}</p>
                    <h4>{page.client}</h4>
                  </div>
                </li>

                <li>
                  <ul className="social-links">
                    <li>
                      {socialIconSets.profile.map((item) => (
                        <SocialLink
                          key={item.network}
                          {...item}
                          ariaLabelTemplate={t.common.a11y.socialProfile}
                        />
                      ))}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="project-details__text2">
              <h2>{page.title}</h2>
              <p>{page.text1}</p>
              <p>{page.text2}</p>

              <div className="project-details__text2-bottom">
                <div className="tag-box">
                  {page.tags.map((tag) => (
                    <Link key={tag} href={href("/projects")}>
                      {tag}
                    </Link>
                  ))}
                </div>

                <div className="icon-box">
                  <Link href={href("/projects")} aria-label={labels.shareAria}>
                    <span className="icon-share" aria-hidden="true"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-details__previous-next">
              <div className="single-box">
                <div className="icon-box">
                  <Link
                    href={href("/projects")}
                    aria-label={`${labels.previous}: ${page.previousProject}`}
                  >
                    <span className="icon-left-arrow1" aria-hidden="true"></span>
                  </Link>
                </div>
                <div className="text-box">
                  <p>{labels.previous}</p>
                  <h4>
                    <Link href={href("/projects")}>{page.previousProject}</Link>
                  </h4>
                </div>
              </div>

              <div className="single-box next">
                <div className="text-box text-right">
                  <p>{labels.next}</p>
                  <h4>
                    <Link href={href("/projects")}>{page.nextProject}</Link>
                  </h4>
                </div>
                <div className="icon-box">
                  <Link
                    href={href("/projects")}
                    aria-label={`${labels.next}: ${page.nextProject}`}
                  >
                    <span className="icon-left-arrow" aria-hidden="true"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Project Details */}

      <ProjectGrid
        images={relatedImages}
        linkTo="/projects"
        title={labels.relatedTitle}
        variant="style4"
      />
    </Layout>
  );
}
