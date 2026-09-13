"use client";

import Layout from "@/components/layout/Layout";
import Accordion from "@/components/elements/Accordion";
import CtaOne from "@/components/sections/common/CtaOne";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function FaqPage() {
  const { t } = useTranslation();
  const page = t.pages.faq;

  // Sorular iki kolona bölünür
  const midpoint = Math.ceil(page.items.length / 2);
  const columns = [page.items.slice(0, midpoint), page.items.slice(midpoint)];

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <section className="faq-one faq-one--faq">
        <div className="container clearfix">
          <div className="row">
            {columns.map((items, columnIndex) => (
              <div key={columnIndex} className="col-xl-6">
                <Accordion
                  items={items}
                  defaultOpenIndex={columnIndex === 0 ? 0 : null}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaOne />
    </Layout>
  );
}
