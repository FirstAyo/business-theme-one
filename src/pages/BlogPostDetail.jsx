import { useParams, Link } from "react-router-dom";

export default function BlogPostDetail() {
  const { slug } = useParams();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-sm font-semibold text-[#1F2A30]">
          ← Back to Blog
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-[#1F2A30]">
          Blog Post Detail (Demo)
        </h1>

        <p className="mt-3 text-[#1F2A30]/70">
          Slug: <span className="font-semibold">{slug}</span>
        </p>

        <div className="mt-10 rounded-2xl border border-black/10 bg-[#F4F6F8] p-8">
          <p className="text-[#1F2A30]/70">
            We’ll build the real blog detail layout later. This is just to prove
            the routing works.
          </p>
        </div>
      </div>
    </main>
  );
}