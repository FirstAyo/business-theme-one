import BlogSidebarSearch from "./Sidebar/BlogSidebarSearch";
import BlogSidebarCategories from "./Sidebar/BlogSidebarCategories";
import BlogSidebarRecent from "./Sidebar/BlogSidebarRecent";
import BlogSidebarTags from "./Sidebar/BlogSidebarTags";
import BlogSidebarHelpCard from "./Sidebar/BlogSidebarHelpCard";

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
