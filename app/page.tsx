import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Services from "@/components/sections/home1/Services";
import Projects from "@/components/sections/home1/Projects";
import Faq from "@/components/sections/home1/Faq";
import Team from "@/components/sections/home1/Team";
import Features from "@/components/sections/home1/Features";
import FeatureExplore from "@/components/sections/common/FeatureExplore";
import FeautureTwo from "@/components/sections/home1/FeautureTwo";
import Video from "@/components/sections/home1/Video";
import Brand from "@/components/sections/home1/Brand";
import Testimonial from "@/components/sections/home1/Testimonial";
export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Features />
        <About />
        <Services />
        <Projects />
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
