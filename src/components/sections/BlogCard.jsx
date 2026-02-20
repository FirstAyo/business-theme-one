import { Link } from "react-router-dom";

/**
 * BlogCard
 * - Category/author stays non-clickable
 * - Title + image area is clickable (Link)
 * - Image zooms slightly on hover
 */
export default function BlogCard({ post }) {
  return (
    <div className="w-full">
      {/* Top meta (NOT clickable) */}
      <p className="text-xs text-[#5C6B73]">
        {post.category} <span className="text-black/20">/</span> by{" "}
        {post.author}
      </p>

      {/* Clickable content (title + divider + image) */}
      <Link to={`/blog/${post.slug}`} className="mt-4 block">
        <h3 className="text-2xl font-extrabold leading-snug text-[#1F2A30]">
          {post.title}
        </h3>

        {/* Divider line */}
        <div className="mt-6 h-px w-full bg-black/10" />

        {/* Image */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gray-200">
          {/* Placeholder for image */}
          <div className="h-60 w-full transition-transform duration-300 hover:scale-[1.04]" />
        </div>
      </Link>
    </div>
  );
}
