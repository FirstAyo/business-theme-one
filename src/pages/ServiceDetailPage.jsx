import ServiceDetailHero from "../components/ServiceDetail/ServiceDetailHero";
import ServiceDetailLayout from "../components/ServiceDetail/ServiceDetailLayout";

import heroImg from "../assets/images/hero3.png";
import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";

export default function ServiceDetailPage() {
  return (
    <main className="bg-white">
      <ServiceDetailHero image={heroImg} />
      <ServiceDetailLayout />
      <NewsletterCta />
      <FooterDarkSimple />
    </main>
  );
}
