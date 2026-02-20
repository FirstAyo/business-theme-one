/**
 * ServiceItem
 * - Active item: white card + shadow + dark circle arrow
 * - Inactive item: minimal layout (no big card)
 */
export default function ServiceItem({ title, desc, active = false }) {
  return (
    <div
      className={[
        "w-full",
        active
          ? "rounded-2xl bg-white p-10 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
          : "px-4 py-10",
      ].join(" ")}
    >
      {/* Icon placeholder */}
      <div className="flex items-start gap-6">
        <div className="h-16 w-16 shrink-0 rounded-xl bg-black/5" />
        <div>
          <h3 className="text-xl font-extrabold text-[#1F2A30]">{title}</h3>
          <p className="mt-3 max-w-sm text-[15px] leading-7 text-[#5C6B73]">
            {desc}
          </p>

          {/* Read more */}
          <div className="mt-8 flex items-center gap-4">
            <span
              className={[
                "inline-flex h-12 w-12 items-center justify-center rounded-full",
                active ? "bg-[#1F2A30] text-white" : "bg-black/5 text-[#1F2A30]",
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