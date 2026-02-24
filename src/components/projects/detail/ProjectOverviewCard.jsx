export default function ProjectOverviewCard({ title, excerpt, meta = [] }) {
  return (
    <section className="mt-8 rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <h2 className="text-xl font-extrabold text-[#1F2A30] sm:text-2xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-black/60">{excerpt}</p>

      {/* Meta row */}
      <div className="mt-6 rounded-xl bg-[#F5F7F9] p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {meta.map((m, idx) => (
            <div key={idx} className="rounded-lg bg-white px-3 py-3">
              <p className="text-[11px] font-semibold text-black/45">
                {m.label}
              </p>
              <p className="mt-1 text-xs font-bold text-[#1F2A30]">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
