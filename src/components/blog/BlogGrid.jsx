import { BLOG_POSTS } from "./blogData";
import BlogPostCard from "./BlogPostCard";

export default function BlogGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {BLOG_POSTS.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
