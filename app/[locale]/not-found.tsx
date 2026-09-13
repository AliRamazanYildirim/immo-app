import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { getTranslations } from "@/lib/i18n/server";

/**
 * Neden params yok? not-found.tsx route param'ı almaz; locale'i
 * app/[locale]/layout.tsx'in ayarladığı istek deposundan okur.
 */
export default async function NotFound() {
  const { t, href } = await getTranslations();
  const page = t.pages.notFound;

  return (
    <Layout
      headerStyle={2}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
    >
      <section className="error-page">
        <div className="error-page__shape1">
          <img
            src="/assets/img/shape/error-page-bg.webp"
            alt=""
            decoding="async"
            loading="lazy"
            width={1368}
            height={673}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__wrapper text-center">
                <div className="error-page__content">
                  <h2>{page.code}</h2>
                  <h3>{page.title}</h3>
                  <p>{page.text}</p>
                  <div className="btn-box">
                    <Link className="thm-btn" href={href("/")}>
                      <span className="txt">{page.button}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
