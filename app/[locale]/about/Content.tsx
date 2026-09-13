import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Action from "@/components/sections/home2/Action";
import Testimonial from "@/components/sections/home3/Testimonial";
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs";
import TeamGrid from "@/components/sections/common/TeamGrid";
import BrandSlider2 from "@/components/slider/BrandSlider2";
import { getTranslations } from "@/lib/i18n/server";

export default async function AboutPage() {
  const { t } = await getTranslations();
  const page = t.pages.about;

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <About variant="about" />

      <Testimonial showPagination={false} />

      {/*Start Brand Two */}
      <div className="brand-one brand-one--two about">
        <div className="container">
          <BrandSlider2 />
        </div>
      </div>
      {/*End Brand Two */}

      <WhyChooseUs source="services3" images={page.whyChooseImages} />

      <Action background="/assets/img/about/about-cta-bg.webp" highlight />

      <TeamGrid limit={3} />
    </Layout>
  );
}
