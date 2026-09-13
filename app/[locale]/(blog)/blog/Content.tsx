import Layout from "@/components/layout/Layout";
import News from "@/components/sections/home2/News";
import { getTranslations } from "@/lib/i18n/server";

export default async function BlogPage() {
  const { t } = await getTranslations();
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
