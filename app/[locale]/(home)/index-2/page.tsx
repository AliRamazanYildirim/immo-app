import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home2/About";
import Banner from "@/components/sections/home2/Banner";
import Services from "@/components/sections/home2/Services";
import Projects from "@/components/sections/home2/Projects";
import Features from "@/components/sections/home2/Features";
import Action from "@/components/sections/home2/Action";
import Contact from "@/components/sections/home2/Contact";
import Brand from "@/components/sections/home2/Brand";
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    locale,
    path: "/index-2",
    title: (t) => t.common.nav.homeTwo,
  });
}
export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner />
      <Features />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Brand />
      <WhyChooseUs />
      <Action />
    </Layout>
  );
}
