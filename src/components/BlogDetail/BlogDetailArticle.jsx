import BlogDetailQuote from "./BlogDetailQuote";
import BlogDetailTagsShare from "./BlogDetailTagsShare";
import BlogDetailAuthorCard from "./BlogDetailAuthorCard";
import BlogDetailReplyForm from "./BlogDetailReplyForm";

import inlineImg from "../../assets/images/hero3.png";

export default function BlogDetailArticle({ post }) {
  return (
    <article className="rounded-2xl bg-white px-6 py-8 shadow-[0_18px_55px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:px-10 sm:py-10">
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-black/50">
        <span>by {post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.category}</span>
      </div>

      <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#1F2A30] sm:text-3xl">
        {post.title}
      </h1>

      <p className="mt-3 text-sm leading-7 text-black/55">
        Collaboratively proliferate bleeding edge resources with inexpensive
        methodologies globally initiate multidisciplinary compatible
        architectures... (demo text)
      </p>

      {/* Body */}
      <div className="mt-6 space-y-5 text-sm leading-7 text-black/55">
        <p>Onubia semper vel donec congue... (demo paragraph)</p>

        <BlogDetailQuote />

        <p>Ultricies lacus commodo parturient... (demo paragraph)</p>

        {/* Inline image block like screenshot */}
        <div className="overflow-hidden rounded-xl bg-black/5">
          <img src={inlineImg} alt="" className="h-full w-full object-cover" />
        </div>

        <h2 className="pt-2 text-xl font-extrabold text-[#1F2A30]">
          Ultimate Business Strategy Solution
        </h2>
        <p>Gravida maecenas lobortis suscipit... (demo paragraph)</p>
      </div>

      <BlogDetailTagsShare />

      <BlogDetailAuthorCard />

      <BlogDetailReplyForm />
    </article>
  );
}
