import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  HardHat,
  Lightbulb,
  LineChart,
  Wrench,
} from "lucide-react";
import dropdownImg from "../../assets/images/hero3.png";

export default function ServiceDropdown({
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) {
  const items = [
    {
      to: "/services/business-solution",
      title: "Business Solution",
      desc: "Once planning is complete, site preparation begins.",
      icon: <BriefcaseBusiness className="h-6 w-6 text-[#1F2A30]" />,
    },
    {
      to: "/services/structural-engineering",
      title: "Structural Engineering",
      desc: "We provide best IT solutions for any type of business.",
      icon: <HardHat className="h-6 w-6 text-[#1F2A30]" />,
    },
    {
      to: "/services/creative-ideas",
      title: "Creative Ideas",
      desc: "Quis nulla blandit vulputate morbi adipiscing sem vestibulum.",
      icon: <Lightbulb className="h-6 w-6 text-[#1F2A30]" />,
    },
    {
      to: "/services/post-construction",
      title: "Post-Construction",
      desc: "We provide best IT solutions for any type of business as.",
      icon: <Wrench className="h-6 w-6 text-[#1F2A30]" />,
    },
    {
      to: "/services/market-research",
      title: "Market Research",
      desc: "Elever Architecture is a New-York–based studio on modern...",
      icon: <LineChart className="h-6 w-6 text-[#1F2A30]" />,
    },
  ];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        // Position & size (centered)
        "fixed left-1/2 top-32 z-9999 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2",

        // Animation + interaction
        "origin-top transition-all duration-200 ease-out",
        open
          ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
          : "pointer-events-none -translate-y-3 opacity-0 scale-[0.98]",
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-b-xl bg-white shadow-[0_22px_70px_rgba(0,0,0,0.18)]">
        <div className="grid lg:grid-cols-[1.55fr_0.85fr]">
          {/* LEFT */}
          <div className="p-8">
            <div className="grid grid-cols-2 gap-6">
              {items.slice(0, 4).map((it) => (
                <Link
                  key={it.title}
                  to={it.to}
                  onClick={onClose}
                  className="group rounded-xl bg-[#F7F8F9] p-5 transition hover:bg-[#F2F4F6]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{it.icon}</div>
                    <div>
                      <p className="text-[16px] font-extrabold text-[#1F2A30]">
                        {it.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-black/55">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              {/* 5th item */}
              <Link
                to={items[4].to}
                onClick={onClose}
                className="group col-span-1 rounded-xl bg-[#F7F8F9] p-5 transition hover:bg-[#F2F4F6]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{items[4].icon}</div>
                  <div>
                    <p className="text-[16px] font-extrabold text-[#1F2A30]">
                      {items[4].title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-black/55">
                      {items[4].desc}
                    </p>
                  </div>
                </div>
              </Link>

              {/* CTA bar */}
              <div className="col-span-1 rounded-xl bg-[#1F2A30] p-6 text-white">
                <p className="text-lg font-extrabold">Get Free Consultation</p>
                <p className="mt-2 text-sm text-white/80">
                  From preconstruction to virtual design and construction.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <img
              src={dropdownImg}
              alt="Services preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
