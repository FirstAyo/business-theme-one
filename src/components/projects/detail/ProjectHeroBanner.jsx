export default function ProjectHeroBanner({ title, bg }) {
  return (
    <section className="relative h-96 lg:h-screen 2xl:h-120 w-full overflow-hidden">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-70 2xl:top-50 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[120px] font-extrabold tracking-wide text-white/20 md:block">
        Project
      </div>

      <div className="relative flex h-full items-center justify-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
