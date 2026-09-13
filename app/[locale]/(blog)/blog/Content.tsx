"use client";

import Layout from "@/components/layout/Layout";
import News from "@/components/sections/home2/News";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function BlogPage() {
  const { t } = useTranslation();
  const page = t.blog.list;

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <News showHeading={false} />
    </Layout>
  );
}
