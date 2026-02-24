// import ProjectCard from "../ProjectCard"; // <-- use your existing component
import { Link } from "react-router-dom";

function MiniProjectCard({ p }) {
  return (
    <Link
      to={`/projects/${p.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-55 overflow-hidden bg-black/5">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <p className="text-base font-extrabold text-[#1F2A30]">{p.title}</p>
        <p className="mt-2 text-xs text-black/55">{p.category}</p>
      </div>
    </Link>
  );
}

export default function RelatedProjects({ projects = [] }) {
  return (
    <section className="mt-14">
      <div className="relative">
        <div className="pointer-events-none absolute -top-10 left-0 hidden select-none text-[90px] font-extrabold tracking-tight text-black/5 lg:block">
          Projects
        </div>

        <p className="text-xs font-extrabold tracking-[0.25em] text-black/40">
          RELATED PROJECTS
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.slice(0, 2).map((p) => (
          // Replace MiniProjectCard with your ProjectCard if you want
          <MiniProjectCard key={p.slug} p={p} />
          // <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
