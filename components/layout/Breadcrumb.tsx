import Link from "next/link";

export interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbBg?: string;
}

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbBg,
}: BreadcrumbProps) {
  return (
    <>
      {/*Start Page Header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url(${breadcrumbBg || "assets/img/background/page-header-bg.jpg"})`,
          }}
        ></div>

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
