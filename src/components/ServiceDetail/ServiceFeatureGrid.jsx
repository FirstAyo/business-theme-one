import { ShieldCheck, Headphones, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Instant Business Growth",
    desc: "Maintain wireless scenarios after sure quality vectors future",
  },
  {
    icon: Clock,
    title: "24/7 Quality Service",
    desc: "Maintain wireless scenarios after sure quality vectors future",
  },
  {
    icon: Headphones,
    title: "Easy Customer Service",
    desc: "Maintain wireless scenarios after sure quality vectors future",
  },
  {
    icon: BadgeCheck,
    title: "Quality Cost Service",
    desc: "Maintain wireless scenarios after sure quality vectors future",
  },
];

export default function ServiceFeatureGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div key={i} className="flex gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F5F7F9]">
              <Icon className="h-6 w-6 text-[#1F2A30]" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#1F2A30]">
                {f.title}
              </h4>
              <p className="mt-2 text-xs leading-6 text-black/55">{f.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
