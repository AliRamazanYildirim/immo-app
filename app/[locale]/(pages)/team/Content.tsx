import Layout from "@/components/layout/Layout";
import TeamGrid from "@/components/sections/common/TeamGrid";
import { getTranslations } from "@/lib/i18n/server";

export default async function TeamPage() {
  const { t } = await getTranslations();
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
