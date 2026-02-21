import FooterArea from "../components/footer/FooterArea";
import AboutSection from "../components/home/AboutSection";
import BusinessGlobalSection from "../components/home/BusinessGlobalSection";
import ClientReviews from "../components/home/ClientReviews";
import CtaBanner from "../components/home/CtaBanner";
import HeroSlider from "../components/home/HeroSlider";
import ProjectsSection from "../components/home/ProjectsSection";
import RecentBlogSection from "../components/home/RecentBlogSection";
import RequestQuote from "../components/home/RequestQuote";
import ServicesSection from "../components/home/ServicesSection";
import StatsStrip from "../components/home/StatsStrip";
import TeamSection from "../components/home/TeamSection";
import TrustedClients from "../components/home/TrustedClients";

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
      <FooterArea />
      {/* next sections go here */}
    </div>
  );
}
