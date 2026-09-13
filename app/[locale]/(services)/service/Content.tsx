import Layout from "@/components/layout/Layout";
import FeatureExplore from "@/components/sections/common/FeatureExplore";
import Action from "@/components/sections/home2/Action";
import ServiceCards from "@/components/sections/home2/Services";
import NumberedServices from "@/components/sections/home1/Services";
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs";
import { getTranslations } from "@/lib/i18n/server";

export default async function ServicesPage() {
  const { t } = await getTranslations();
  const page = t.services.overview;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <ServiceCards showShape={false} />

      <Action background="/assets/img/service/service-cta-bg.webp" highlight />

      <WhyChooseUs source="services3" />

      <NumberedServices />

      <FeatureExplore />
    </Layout>
  );
}
