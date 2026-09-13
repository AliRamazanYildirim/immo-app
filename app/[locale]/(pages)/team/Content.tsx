"use client";

import Layout from "@/components/layout/Layout";
import TeamGrid from "@/components/sections/common/TeamGrid";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function TeamPage() {
  const { t } = useTranslation();
  const page = t.pages.team;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <TeamGrid showHeading={false} />
    </Layout>
  );
}
