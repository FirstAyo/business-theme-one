import { useEffect, useMemo, useState } from "react";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * HeroSlider
 * - Background image slider with centered content
 * - Prev/Next controls
 * - Decorative overlays (circles + corner grid)
 */
export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        eyebrow: "WELCOME! START GROWING YOUR BUSINESS TODAY",
        titleTop: "Innovative Solutions",
        titleBottom: "Tailored for Your Success",
        body: "Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit Duis feugiat fusce conubia ridiculus tristique parturient",
        imageUrl: hero1, // TODO: replace with your image path
      },
      {
        eyebrow: "WELCOME! START GROWING YOUR BUSINESS TODAY",
        titleTop: "Impressive Solutions",
        titleBottom: "Crafted for Your Goal",
        body: "Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit Duis feugiat fusce conubia ridiculus tristique parturient",
        imageUrl: hero2, // TODO
      },
      {
        eyebrow: "WELCOME! START GROWING YOUR BUSINESS TODAY",
        titleTop: "Best Solutions",
        titleBottom: "Intro for Your Business",
        body: "Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit Duis feugiat fusce conubia ridiculus tristique parturient",
        imageUrl: hero3, // TODO
      },
    ],
    [],
  );

  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  // Optional autoplay (matches typical template behavior)
  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[active];

  return (
    <section className="relative w-full">
      {/* Slide background */}
      <div className="relative h-130 w-full overflow-hidden md:h-155 lg:h-180">
        {/* Image placeholder (swap to real bg image later) */}
        <div
          className="absolute inset-0 bg-gray-300 bg-cover bg-center"
          style={{
            backgroundImage: s.imageUrl ? `url(${s.imageUrl})` : undefined,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Decorative overlays */}
        <Decorations />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/90 md:text-xs">
              {s.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] md:text-6xl">
              <span className="block">{s.titleTop}</span>
              <span className="block">{s.titleBottom}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 md:text-[15px]">
              {s.body}
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#1F2A30] hover:bg-white/90"
              >
                Get Consultant
              </button>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1F2A30] shadow md:flex"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1F2A30] shadow md:flex"
        >
          <ChevronRight />
        </button>

        {/* Mobile controls */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={prev}
            className="h-11 w-11 rounded-full bg-white text-[#1F2A30]"
            aria-label="Previous slide (mobile)"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="h-11 w-11 rounded-full bg-white text-[#1F2A30]"
            aria-label="Next slide (mobile)"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

/** Decorative circles + corner grid overlay */
function Decorations() {
  return (
    <>
      {/* Top-left diagonal overlay */}
      <div className="pointer-events-none absolute left-0 top-0 z-2 h-full w-full">
        <div className="absolute left-0 top-0 h-full w-45 bg-white/10 md:w-60" />
        <div className="absolute left-0 top-0 h-full w-45 -skew-x-12 bg-black/10 md:w-60" />
      </div>

      {/* Left big circle */}
      <div className="pointer-events-none absolute bottom-16 left-10 z-3 h-28 w-28 rounded-full border border-white/25 md:h-36 md:w-36" />

      {/* Right mid circle */}
      <div className="pointer-events-none absolute right-24 top-1/2 z-3 hidden h-20 w-20 -translate-y-1/2 rounded-full border border-white/25 md:block" />

      {/* Bottom-right big arc */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 z-3 h-72 w-72 rounded-full border-18 border-white/15 md:h-96 md:w-96" />

      {/* Bottom-right grid (square lines) */}
      <div className="pointer-events-none absolute bottom-10 right-10 z-3 hidden h-28 w-28 md:block">
        <div className="absolute inset-0 border border-white/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/20" />
      </div>
    </>
  );
}
