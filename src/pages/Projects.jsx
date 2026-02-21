import React from "react";
import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGridSection from "../components/projects/ProjectsGridSection";

export default function Projects() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGridSection />
      <NewsletterCta />
      <FooterDarkSimple />
    </main>
  );
}
