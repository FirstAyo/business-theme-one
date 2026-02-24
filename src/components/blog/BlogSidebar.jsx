import BlogSidebarSearch from "./sidebar/BlogSidebarSearch";
import BlogSidebarCategories from "./sidebar/BlogSidebarCategories";
import BlogSidebarRecent from "./sidebar/BlogSidebarRecent";
import BlogSidebarTags from "./sidebar/BlogSidebarTags";
import BlogSidebarHelpCard from "./sidebar/BlogSidebarHelpCard";

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <BlogSidebarSearch />
      <BlogSidebarCategories />
      <BlogSidebarRecent />
      <BlogSidebarTags />
      <BlogSidebarHelpCard />
    </div>
  );
}
