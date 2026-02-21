import { Link } from "react-router-dom";

// Replace these images with your real project images
import p1 from "../../assets/images/hero3.png";
import p2 from "../../assets/images/hero3.png";
import p3 from "../../assets/images/hero3.png";
import p4 from "../../assets/images/hero3.png";

export default function ProjectsGridSection() {
  const projects = [
    {
      slug: "business-growth",
      title: "Business Growth",
      sub: "Business Strategy",
      image: p1,
    },
    {
      slug: "startup-solution",
      title: "Startup Solution",
      sub: "Business Strategy",
      image: p2,
    },
    {
      slug: "growth-manage",
      title: "Growth Manage",
      sub: "Business Strategy",
      image: p3,
    },
    {
      slug: "company-skills",
      title: "Company Skills",
      sub: "Business Strategy",
      image: p4,
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center my-3">Case Studies</p>
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1F2A30] sm:text-4xl">
          Specialist Business Cases
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-10">
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.slug}
              project={p}
              cut={idx % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ProjectCard
 * - Image with angled bottom corner (matches screenshot)
 * - White info card overlay at bottom-left
 * - Whole card is a Link to /projects/:slug (simulated detail page)
 */
function ProjectCard({ project, cut = "right" }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-[#F4F6F8] shadow-[0_18px_60px_rgba(0,0,0,0.10)]"
      aria-label={`Open project: ${project.title}`}
    >
      {/* Image wrapper */}
      <div className="relative h-[250px] w-full sm:h-[280px] lg:h-[320px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* Angled corner cut (bottom) */}
        {cut === "right" ? (
          <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 bg-white [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
        ) : (
          <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 bg-white [clip-path:polygon(0_0,100%_100%,0_100%)]" />
        )}

        {/* Overlay info card */}
        <div className="absolute bottom-6 left-6">
          <div className="w-[240px] rounded-2xl bg-white px-6 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
            <p className="text-lg font-extrabold text-[#1F2A30]">
              {project.title}
            </p>
            <p className="mt-1 text-sm text-black/55">{project.sub}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
