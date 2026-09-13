"use client";

import Layout from "@/components/layout/Layout";
import FeatureExplore from "@/components/sections/common/FeatureExplore";
import Action from "@/components/sections/home2/Action";
import ServiceCards from "@/components/sections/home2/Services";
import NumberedServices from "@/components/sections/home1/Services";
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function ServicesPage() {
  const { t } = useTranslation();
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
