export default function ProjectGallery({ imgMain, imgSmall1, imgSmall2 }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
        {/* Left big */}
        <div className="overflow-hidden rounded-2xl bg-black/5">
          <img src={imgMain} alt="" className="h-full w-full object-cover" />
        </div>

        {/* Right stacked */}
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-2xl bg-black/5">
            <img
              src={imgSmall1}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl bg-black/5">
            <img
              src={imgSmall2}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
