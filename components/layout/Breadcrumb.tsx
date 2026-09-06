import Link from "next/link";

export interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbBg?: string;
}

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbBg,
}: BreadcrumbProps) {
  const bgImage = breadcrumbBg
    ? breadcrumbBg.startsWith("/")
      ? breadcrumbBg
      : `/${breadcrumbBg}`
    : "/assets/img/background/page-header-bg.jpg";

  const webpImage = bgImage.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <>
      {/*Start Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <picture>
            <source srcSet={webpImage} type="image/webp" />
            <img
              src={bgImage}
              alt={breadcrumbTitle}
              className="page-header__bg-img"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width={1920}
              height={500}
            />
          </picture>
        </div>

        <div className="container">
          <div className="page-header__inner text-center">
            <ul className="thm-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">{breadcrumbTitle}</li>
            </ul>
            <h2>{breadcrumbTitle}</h2>
          </div>
        </div>
      </section>
      {/*End Page Header */}
    </>
  );
}
