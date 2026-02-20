import AboutSection from "../components/sections/AboutSection";
import BusinessGlobalSection from "../components/sections/BusinessGlobalSection";
import CtaBanner from "../components/sections/CtaBanner";
import HeroSlider from "../components/sections/HeroSlider";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
      <BusinessGlobalSection />
      <ProjectsSection />
      {/* next sections go here */}
    </div>
  );
}
