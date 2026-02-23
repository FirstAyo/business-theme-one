import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectPrevNextNav() {
  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl bg-[#F5F7F9] p-6">
        <div className="flex items-center gap-3 text-black/60">
          <ChevronLeft className="h-4 w-4" />
          <span className="text-xs font-semibold">Building</span>
        </div>
        <p className="mt-2 text-sm font-extrabold text-[#1F2A30]">
          Quality Construction Projects That Stand the Test of Time
        </p>
      </div>

      <div className="rounded-2xl bg-[#F5F7F9] p-6 text-right">
        <div className="flex items-center justify-end gap-3 text-black/60">
          <span className="text-xs font-semibold">Building</span>
          <ChevronRight className="h-4 w-4" />
        </div>
        <p className="mt-2 text-sm font-extrabold text-[#1F2A30]">
          Quality Construction Projects That Stand the Test of Time
        </p>
      </div>
    </section>
  );
}
