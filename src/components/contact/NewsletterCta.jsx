export default function NewsletterCta() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F8] py-16">
      {/* Subtle diagonal pattern (like screenshot) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 42px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left text */}
          <div>
            <p className="text-sm text-black/60">Subscribe Newsletter</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#1F2A30] sm:text-5xl">
              Stay Updated with <br className="hidden sm:block" />
              the Latest News!
            </h2>
          </div>

          {/* Right input */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center justify-start lg:justify-end"
          >
            <div className="flex w-full max-w-[520px] items-center gap-3 rounded-xl bg-[#1F2A30] p-2 shadow-sm">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="h-12 w-full bg-transparent px-4 text-sm text-white placeholder:text-white/50 outline-none"
              />
              <button
                type="submit"
                className="h-12 whitespace-nowrap rounded-lg bg-white px-6 text-sm font-semibold text-[#1F2A30]"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}