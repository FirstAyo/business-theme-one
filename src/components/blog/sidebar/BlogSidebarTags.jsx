import SidebarCard from "./SidebarCard";
import { TAGS } from "../blogData";

export default function BlogSidebarTags() {
  return (
    <SidebarCard title="Popular Tags">
      <div className="flex flex-wrap gap-3">
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-lg bg-[#F4F6F8] px-3 py-2 text-xs font-semibold text-[#1F2A30]/70 hover:bg-[#EEF1F3]"
          >
            {t}
          </button>
        ))}
      </div>
    </SidebarCard>
  );
}
