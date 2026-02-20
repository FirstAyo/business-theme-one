import AboutSection from "../components/sections/AboutSection";
import BusinessGlobalSection from "../components/sections/BusinessGlobalSection";
import ClientReviews from "../components/sections/ClientReviews";
import CtaBanner from "../components/sections/CtaBanner";
import HeroSlider from "../components/sections/HeroSlider";
import ProjectsSection from "../components/sections/ProjectsSection";
import RecentBlogSection from "../components/sections/RecentBlogSection";
import RequestQuote from "../components/sections/RequestQuote";
import ServicesSection from "../components/sections/ServicesSection";
import StatsStrip from "../components/sections/StatsStrip";
import TeamSection from "../components/sections/TeamSection";
import TrustedClients from "../components/sections/TrustedClients";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
      <BusinessGlobalSection />
      <StatsStrip />
      <ProjectsSection />
      <TrustedClients />
      <TeamSection />
      <ClientReviews />
      <RequestQuote />
      <RecentBlogSection />
      {/* next sections go here */}
    </div>
  );
}
