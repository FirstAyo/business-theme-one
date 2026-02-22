export default function BlogSidebarHelpCard() {
  return (
    <div className="rounded-2xl bg-[#1F2A30] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10">
          ↗
        </div>
        <div className="leading-tight">
          <p className="text-lg font-extrabold">Nexora</p>
          <p className="text-xs text-white/70">Business Solution</p>
        </div>
      </div>

      <p className="mt-8 text-sm font-semibold text-white/85">
        Need Help? We Are <br /> Here To Help You
      </p>

      <button
        type="button"
        className="mt-8 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1F2A30]"
      >
        Contact Us
      </button>
    </div>
  );
}
