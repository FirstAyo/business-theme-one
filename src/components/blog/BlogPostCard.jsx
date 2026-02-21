import { Link } from "react-router-dom";

export default function BlogPostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* Image wrapper (with inner padding like screenshot) */}
        <div className="p-6 pb-5">
          <div className="overflow-hidden rounded-2xl bg-black/5">
            <img
              src={post.image}
              alt={post.title}
              className="h-[210px] w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px w-full bg-black/10" />

        {/* Content */}
        <div className="px-6 pb-8 pt-7">
          <h3 className="text-[22px] font-extrabold leading-snug text-[#1F2A30]">
            {post.title}
          </h3>

          <p className="mt-4 text-xs font-medium text-[#1F2A30]/60">
            {post.category} <span className="mx-1">/</span>by {post.author}
          </p>
        </div>
      </article>
    </Link>
  );
}