import { Link, useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <main className="min-h-[60vh] bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.22em] text-black/50">
          PROJECT DETAIL (PLACEHOLDER)
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-[#1F2A30]">
          {slug?.replaceAll("-", " ")}
        </h1>

        <p className="mt-4 text-black/60">
          This is a temporary detail page to simulate clicking a project from
          the grid. We’ll design the real project detail page later.
        </p>

        <Link
          to="/projects"
          className="mt-8 inline-flex rounded-xl bg-[#1F2A30] px-6 py-3 text-sm font-semibold text-white hover:bg-black"
        >
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
