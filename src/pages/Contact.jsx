import React from "react";
import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactMapSection from "../components/contact/ContactMapSection";
import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";

export default function Contact() {
  return (
    <div>
      <ContactHeroSection />
      <ContactMapSection />
      <NewsletterCta />
      <FooterDarkSimple />
    </div>
  );
}
