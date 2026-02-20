import { Link } from "react-router-dom";

/**
 * ProjectCard
 * - Clickable image card (links to project detail page)
 * - Bottom-left white info badge
 * - Uses placeholders for images (replace later)
 */
export default function ProjectCard({ to, title, category }) {
  return (
    <Link to={to} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-gray-200">
        {/* Image placeholder (swap with <img /> later) */}
        <div className="h-[260px] w-full sm:h-[300px]" />

        {/* Info badge */}
        <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-8 py-5 shadow-lg">
          <p className="text-lg font-extrabold text-[#1F2A30]">{title}</p>
          <p className="mt-1 text-sm text-[#5C6B73]">{category}</p>
        </div>

        {/* Hover polish */}
        <div className="pointer-events-none absolute inset-0 transition group-hover:bg-black/5" />
      </div>
    </Link>
  );
}
