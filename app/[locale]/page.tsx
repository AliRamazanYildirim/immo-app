import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Services from "@/components/sections/home1/Services";
import Projects from "@/components/sections/home1/Projects";
import BeforeAfter from "@/components/sections/home1/BeforeAfter";
import Faq from "@/components/sections/home1/Faq";
import Team from "@/components/sections/home1/Team";
import Features from "@/components/sections/home1/Features";
import FeatureExplore from "@/components/sections/common/FeatureExplore";
import FeautureTwo from "@/components/sections/home1/FeautureTwo";
import Video from "@/components/sections/home1/Video";
import Brand from "@/components/sections/home1/Brand";
import Testimonial from "@/components/sections/home1/Testimonial";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/i18n/metadata";
import { initRequestLocale, type LocalePageProps } from "@/lib/i18n/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    locale,
    path: "/",
  });
}
export default async function Home({ params }: LocalePageProps) {
  await initRequestLocale(params);

  return (
    <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Features />
        <About />
        <Services />
        <Projects />
        <BeforeAfter />
        <Team />
        <Faq />
        <FeautureTwo />
        <Video />
        <Brand />
        <FeatureExplore />
        <Testimonial />
      </Layout>
  );
}
