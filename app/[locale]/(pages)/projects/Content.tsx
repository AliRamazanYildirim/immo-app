import Layout from "@/components/layout/Layout";
import ProjectGrid from "@/components/sections/common/ProjectGrid";
import { getTranslations } from "@/lib/i18n/server";

/** Portföy ızgarasının görsel seti — proje metinleri sözlükten gelir. */
const gridImages = [
  "/assets/img/project/project-v3-img4.webp",
  "/assets/img/project/project-v3-img5.webp",
  "/assets/img/project/project-v3-img6.webp",
  "/assets/img/project/project-v3-img7.webp",
  "/assets/img/project/project-v3-img8.webp",
  "/assets/img/project/project-v3-img9.webp",
];

export default async function ProjectsPage() {
  const { t } = await getTranslations();
  const page = t.pages.projects;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <ProjectGrid images={gridImages} />
    </Layout>
  );
}
