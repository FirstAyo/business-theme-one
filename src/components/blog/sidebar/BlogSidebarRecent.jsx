import SidebarCard from "./SidebarCard";
import { RECENT_POSTS } from "../blogData";

export default function BlogSidebarRecent() {
  return (
    <SidebarCard title="Recent Posts">
      <div className="space-y-4">
        {RECENT_POSTS.map((p, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="h-14 w-16 overflow-hidden rounded-lg bg-black/5">
              <img
                src={p.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-[#1F2A30]/55">{p.date}</p>
              <p className="mt-1 line-clamp-2 text-sm font-semibold text-[#1F2A30]/80">
                {p.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SidebarCard>
  );
}
