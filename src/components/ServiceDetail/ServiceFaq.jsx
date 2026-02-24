import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DEFAULT_FAQS = [
  {
    q: "01. What services/products do you offer?",
    a: "Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod necort quam convallis ornare justo service visionary sources unleash online.",
  },
  {
    q: "02. Where i can find my business growth result?",
    a: "Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod necort quam convallis ornare justo service visionary sources unleash online.",
  },
  {
    q: "03. Did you get any business consultant?",
    a: "Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod necort quam convallis ornare justo service visionary sources unleash online.",
  },
  {
    q: "04. Do you need any business investment policy?",
    a: "Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod necort quam convallis ornare justo service visionary sources unleash online.",
  },
  {
    q: "04. Do you need any business investment policy?",
    a: "Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod necort quam convallis ornare justo service visionary sources unleash online.",
  },
];

export default function ServiceFaq({ faqs = DEFAULT_FAQS }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="mt-14">
      <h3 className="text-2xl font-extrabold text-[#1F2A30]">
        Popular Question
      </h3>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
        Conveniently predominate revolutionary quality vectors through
        future-proof manufactured products. Objectively envisioner high in
        convergence through collaborative networks.
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((f, idx) => {
          const open = openIdx === idx;

          return (
            <div
              key={`${f.q}-${idx}`}
              className={[
                "overflow-hidden rounded-xl border border-black/10",
                open ? "bg-[#F5F7F9]" : "bg-[#F5F7F9]",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : idx)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="text-sm font-extrabold text-[#1F2A30]">
                  {f.q}
                </span>

                <ChevronDown
                  className={[
                    "h-4 w-4 text-black/60 transition duration-200",
                    open ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {/* Answer */}
              <div
                className={[
                  "grid transition-all duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-xs leading-6 text-black/55">
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
