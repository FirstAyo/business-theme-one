import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "../../../assets/images/hero3.png";

export default function ProjectFaqSection({ faqs = [] }) {
  const data = useMemo(() => {
    if (faqs?.length) return faqs;

    // fallback demo (so UI always matches the screenshot)
    return [
      { q: "What Are The 5 Stages Of Building Construction?", a: "" },
      { q: "How Long Does It Take To Get An Estimate?", a: "" },
      { q: "What Are The 5 Stages Of Building Construction?", a: "" },
      { q: "How Long Does It Take To Get An Estimate?", a: "" },
      { q: "What are the different types of construction projects?", a: "" },
    ];
  }, [faqs]);

  const [openIdx, setOpenIdx] = useState(0);

  // Use the same content block for any opened item (per your instruction)
  const contentTitle = "We Work Strictly And Responsibly.";
  const contentText =
    "Proactively restore professional data and multimedia based collaboration and idea sharing. Credibly top line deliverables and cross platform manufactured products. Dramatically facilitate enabled value with seamless growth strategies.\n\nProactively restore professional data and multimedia based collaboration and idea sharing. Credibly top line deliverables and cross platform manufactured products. Dramatically facilitate enabled value with seamless growth strategies.";

  return (
    <section className="mt-10">
      <div className="space-y-6">
        {data.map((f, idx) => {
          const open = idx === openIdx;

          return (
            <div
              key={`${f.q}-${idx}`}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/5"
            >
              {/* Header row */}
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : idx)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-[18px] font-extrabold text-[#1F2A30]">
                  {f.q}
                </span>

                <ChevronDown
                  className={[
                    "h-5 w-5 text-[#1F2A30]/70 transition-transform duration-300",
                    open ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {/* Expanded content */}
              <div
                className={[
                  "grid transition-all duration-300 ease-out",
                  open
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-black/5 px-8 pb-8 pt-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[0.48fr_0.52fr]">
                      {/* Image */}
                      <div className="overflow-hidden rounded-xl bg-black/5">
                        <img
                          src={heroImg}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div className="pt-1">
                        <h4 className="text-[28px] font-extrabold leading-tight text-[#1F2A30]">
                          {contentTitle}
                        </h4>

                        <p className="mt-4 whitespace-pre-line text-[14px] leading-7 text-black/60">
                          {contentText}
                        </p>

                        <button className="mt-8 rounded-2xl bg-[#1F2A30] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-black">
                          Get A Free Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End expanded */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
