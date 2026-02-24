import { act, useMemo, useState } from "react";
import image1 from "../../assets/images/hero2.png";

/**
 * ClientReviews
 * - 3-review slider
 * - Prev/Next arrows update the active review
 * - Counter shows 01 / 03 style
 * - Image + dark quote card layout
 */
export default function ClientReviews() {
  const reviews = useMemo(
    () => [
      {
        quote:
          "I can’t recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional.",
        name: "William Henry",
        meta: "Designer at ",
        company: "Vertex Agency",
        image: image1,
      },
      {
        quote:
          "The service was outstanding and the experience felt premium from start to finish. Communication was clear, delivery was fast, and the results exceeded expectations.",
        name: "Sophia Carter",
        meta: "Marketing Lead at ",
        company: "BrightWorks",
        image: image1,
      },
      {
        quote:
          "A reliable partner with real attention to detail. The team understood our goals and delivered a clean, professional solution that our clients love.",
        name: "James Wilson",
        meta: "Product Manager at ",
        company: "NorthPeak",
        image: image1,
      },
    ],
    [],
  );

  const total = reviews.length;
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const counter = `${String(index + 1).padStart(2, "0")} / ${String(
    total,
  ).padStart(2, "0")}`;

  const active = reviews[index];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: heading left, controls right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative">
            {/* Watermark */}
            <div className="pointer-events-none absolute -top-20 left-0 hidden select-none text-[110px] font-extrabold tracking-tight text-black/7 lg:block">
              Review
            </div>

            <p className="text-sm font-semibold tracking-[0.22em] text-[#1F2A30]">
              OUR TESTIMONIAL
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
              Our Client Reviews
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 lg:pt-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-[#1F2A30] hover:bg-black/10"
            >
              ←
            </button>

            <div className="rounded-lg bg-black/5 px-4 py-2 text-sm font-semibold text-[#1F2A30]">
              {counter}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-[#1F2A30] hover:bg-black/10"
            >
              →
            </button>
          </div>
        </div>

        {/* Main card */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm h-[400px]">
          <div className="grid lg:grid-cols-2 h-full">
            {/* Left image placeholder */}
            <div className="bg-gray-200">
              {/* Replace with <img /> later */}
              <img src={active.image} className="h-[280px] w-full sm:h-[360px] lg:h-full" />
            </div>

            {/* Right quote panel */}
            <div className="bg-[#1F2A30] px-8 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-xl leading-9 sm:text-2xl">{active.quote}</p>

              <div className="mt-10">
                <p className="text-lg font-extrabold">{active.name}</p>
                <p className="mt-2 text-sm text-white/70">
                  {active.meta}
                  <span className="font-semibold text-white">
                    {active.company}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
