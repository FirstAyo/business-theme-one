import Navbar from "../components/layout/Navbar";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";

// Sections
import ProjectHeroBanner from "../components/projects/detail/ProjectHeroBanner";
import ProjectGallery from "../components/projects/detail/ProjectGallery";
import ProjectOverviewCard from "../components/projects/detail/ProjectOverviewCard";
import ProjectBody from "../components/projects/detail/ProjectBody";
import ProjectStatsRow from "../components/projects/detail/ProjectStatsRow";
import ProjectFaqSection from "../components/projects/detail/ProjectFaqSection";
import ProjectPrevNextNav from "../components/projects/detail/ProjectPrevNextNav";
import RelatedProjects from "../components/projects/detail/RelatedProjects";

// Demo images (replace with your real ones)
import heroBg from "../assets/images/hero3.png";
import imgMain from "../assets/images/hero3.png";
import imgSmall1 from "../assets/images/hero3.png";
import imgSmall2 from "../assets/images/hero3.png";

export default function ProjectDetailPage() {
  // Demo content (later you can fetch by slug/id)
  const project = {
    title: "Quality-Driven Approach to Building Projects",
    excerpt:
      "Natus platesa nec commodo tincidunt felis orci lacus felis. Molestie etiam magna risusm penatibus eros non accumsan erat nulla.",
    heroTitle: "Project Details",
    heroBg,
    gallery: { imgMain, imgSmall1, imgSmall2 },
    meta: [
      { label: "Client", value: "RC Builders" },
      { label: "Location", value: "Denver, CO, USA" },
      { label: "Client", value: "RC Builders" },
      { label: "Project Year", value: "15 Oct 2024" },
      { label: "Duration", value: "5Years, 3Months" },
      { label: "Price", value: "$18 Million" },
    ],
    body: {
      p1: "Natus platesa nec commodo tincidunt felis orci lacus felis. Molestie etiam magna risusm penatibus eros non accumsan erat nulla, convallis rhoncus natoque lacinia class viverra platea cubilia, netus luctus tristique quam habitasse taciti nullam fringilla nascitur.",
      p2: "Tempor metus blandit ridiculus feugiat pulvinar quisque praesent. Dictum mollis vel iaculis eleifend orci vitae blandit ultrices hac, fringilla sed a faucibus pandemic e-business rather than state of the art e-tailers completely unleash frictionless data via services.",
      quote:
        "“Tortor nunc dictumst sapien inceptos libero natoque maecenas metus viverra commodo dignissim magna, donec odio leo varius nullam potenti porta faucibus vulputate sollicitudin montes ostra vel himenaeos amet sociosqu erat inceptos.”",
      p3: "Natus platesa nec commodo tincidunt felis orci lacus felis. Molestie etiam magna risusm penatibus eros non accumsan erat nulla, convallis rhoncus natoque lacinia class viverra platea cubilia.",
    },
    stats: [
      {
        value: "0+",
        label: "We’ve had so many compliments from friends and family",
      },
      {
        value: "0+",
        label: "Our dedication to sustainable building practices",
      },
      { value: "0+", label: "Success rate of bot case completion" },
      { value: "0+", label: "Hours delivered back to the business" },
    ],
    faqs: [
      {
        q: "What Are The 5 Stages Of Building Construction?",
        aTitle: "We Work Strictly And Responsibly.",
        a: "Proactively restore professional data and multimedia based collaboration and idea sharing. Credibly top line deliverables and cross platform manufactured products. Dramatically facilitate enabled value with seamless growth strategies.",
      },
      {
        q: "How Long Does It Take To Get An Estimate?",
        a: "Answer content goes here.",
      },
      {
        q: "What Are The 5 Stages Of Building Construction?",
        a: "Answer content goes here.",
      },
      {
        q: "How Long Does It Take To Get An Estimate?",
        a: "Answer content goes here.",
      },
      {
        q: "What are the different types of construction projects?",
        a: "Answer content goes here.",
      },
    ],
  };

  // Related Projects (reuse your card component inside RelatedProjects)
  const related = [
    {
      slug: "business-growth",
      title: "Business Growth",
      category: "Business Strategy",
      image: imgMain,
    },
    {
      slug: "startup-solution",
      title: "Startup Solution",
      category: "Business Strategy",
      image: imgSmall1,
    },
    {
      slug: "growth-manage",
      title: "Growth Manage",
      category: "Business Strategy",
      image: imgSmall2,
    },
    {
      slug: "company-skills",
      title: "Company Skills",
      category: "Business Strategy",
      image: imgMain,
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <ProjectHeroBanner title={project.heroTitle} bg={project.heroBg} />

      <main className="mx-auto max-w-6xl mt-10 px-4 sm:px-6 lg:px-8">
        <div className=" pb-16">
          <ProjectGallery {...project.gallery} />

          <ProjectOverviewCard
            title={project.title}
            excerpt={project.excerpt}
            meta={project.meta}
          />

          <ProjectBody {...project.body} />

          <ProjectStatsRow stats={project.stats} />

          <ProjectFaqSection faqs={project.faqs} />

          <ProjectPrevNextNav />

          <RelatedProjects projects={related} />
        </div>
      </main>

      <FooterDarkSimple />
    </div>
  );
}
