import { BarChart3, Leaf, Trophy, Clock } from "lucide-react";

const icons = [BarChart3, Leaf, Trophy, Clock];

export default function ProjectStatsRow({ stats = [] }) {
  return (
    <section className="mt-10">
      <div className="rounded-2xl bg-[#F5F7F9] px-6 py-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((s, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={idx}
                className={[
                  "px-2 sm:px-4 lg:px-10",
                  "lg:border-r lg:border-black/5",
                  idx === stats.length - 1 ? "lg:border-r-0" : "",
                ].join(" ")}
              >
                {/* Icon */}
                <div className="text-[#1F2A30]">
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <p className="mt-5 text-4xl font-extrabold tracking-tight text-[#1F2A30]">
                  {s.value}
                </p>

                {/* Label */}
                <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-black/55">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
