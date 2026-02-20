import icon1 from "../../assets/icons/developing.png";
import icon2 from "../../assets/icons/growth.png";
import icon3 from "../../assets/icons/planning.png";
import icon4 from "../../assets/icons/startegy.png";

/**
 * ServiceCard
 * - active: white bg + shadow + dark arrow button
 * - inactive: transparent
 */
export default function ServiceCard({ title, desc, active }) {
  return (
    <div
      className={[
        "h-full w-full border border-slate-300",
        active
          ? " bg-white p-10 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
          : "px-4 py-10",
      ].join(" ")}
    >
      <div className="flex items-start gap-6">
        {/* Icon placeholder */}
        {/* <div className="h-16 w-16 shrink-0 rounded-xl bg-black" /> */}
        <img src={icon1} alt="ic" className="h-16 w-16 shrink-0 rounded-xl"/>

        <div>
          <h3 className="text-xl font-extrabold text-[#1F2A30]">{title}</h3>

          <p className="mt-3 max-w-sm text-[15px] leading-7 text-[#5C6B73]">
            {desc}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span
              className={[
                "inline-flex h-12 w-12 items-center justify-center rounded-full",
                active
                  ? "bg-[#1F2A30] text-white"
                  : "bg-black/5 text-[#1F2A30]",
              ].join(" ")}
            >
              →
            </span>

            <span className="text-[15px] font-semibold text-[#1F2A30]">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
