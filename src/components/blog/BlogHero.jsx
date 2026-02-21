export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F8] pt-20">
      {/* faint watermark */}
      <div className="pointer-events-none absolute left-1/2 -top-10 hidden -translate-x-1/2 select-none text-[130px] font-extrabold tracking-tight text-black/5 lg:block w-6xl mx-auto text-center">
        Latest Post
      </div>

      {/* light decorative circles + scribble vibe */}
      <div className="pointer-events-none absolute left-8 top-28 h-28 w-28 rounded-full border border-black/10" />
      <div className="pointer-events-none absolute left-20 top-44 h-44 w-44 rounded-full border border-black/10" />
      <div className="pointer-events-none absolute right-10 top-32 h-20 w-20 rounded-full border border-black/10" />

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            Latest Posts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#1F2A30]/60">
            With a team of experienced professionals and a passion for
            innovation, we combine cutting-edge strategies
          </p>
        </div>
      </div>
    </section>
  );
}
