import { ChevronRight } from "lucide-react";
import SidebarCard from "./SidebarCard";
import { CATEGORIES } from "../blogData";

export default function BlogSidebarCategories() {
  return (
    <SidebarCard title="Categories">
      <div className="space-y-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-[#F4F6F8] px-4 py-3 text-sm font-semibold text-[#1F2A30]/80 hover:bg-[#EEF1F3]"
          >
            <span>{c}</span>
            <ChevronRight className="h-4 w-4 opacity-60" />
          </button>
        ))}
      </div>
    </SidebarCard>
  );
}
