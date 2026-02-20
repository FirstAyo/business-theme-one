import { useEffect, useMemo, useRef, useState } from "react";
import CarouselDots from "../ui/CarouselDots";
import ProjectCard from "./ProjectCard";

/**
 * ProjectsSection (Popular Projects)
 * - Scroll-snap carousel
 * - 4 dots for 4 items
 * - lg/xl: 2 visible, md/sm: 1 visible
 * - Dot click moves by ONE card (smooth)
 */
export default function ProjectsSection() {
  const projects = useMemo(
    () => [
      {
        slug: "business-growth",
        title: "Business Growth",
        category: "Business Strategy",
      },
      {
        slug: "startup-solution",
        title: "Startup Solution",
        category: "Business Strategy",
      },
      {
        slug: "market-research",
        title: "Market Research",
        category: "Business Strategy",
      },
      {
        slug: "product-launch",
        title: "Product Launch",
        category: "Business Strategy",
      },
    ],
    [],
  );

  const DOTS = 3;
  const [activeDot, setActiveDot] = useState(0);

  const itemRefs = useRef([]);

  // Smoothly scroll to the selected item (one-card movement)
  useEffect(() => {
    const el = itemRefs.current[activeDot];
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, [activeDot]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row: heading left, dots right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative">
            {/* Watermark */}
            <div className="pointer-events-none absolute -top-10 left-0 hidden select-none text-[110px] font-extrabold tracking-tight text-black/[0.03] lg:block">
              Projects
            </div>

            <p className="text-sm font-semibold tracking-[0.25em] text-[#1F2A30]">
              POPULAR PROJECTS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
              Projects Our Completed Projects
            </h2>
          </div>

          {/* Dots aligned to right (like screenshot) */}
          <div className="lg:pt-6">
            <CarouselDots
              count={DOTS}
              activeIndex={activeDot}
              onChange={setActiveDot}
            />
          </div>
        </div>

        {/* Light patterned panel */}
        <div className="relative mt-10 overflow-hidden bg-[#F7F8F9] px-4 py-12 sm:px-8">
          {/* Subtle diagonal shapes */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-40 top-10 h-56 w-[520px] rotate-[-25deg] bg-white/70" />
            <div className="absolute left-1/3 top-24 h-56 w-[520px] rotate-[-25deg] bg-white/60" />
            <div className="absolute right-[-220px] top-10 h-56 w-[520px] rotate-[-25deg] bg-white/50" />
          </div>

          {/* Carousel */}
          <div className="relative no-scrollbar overflow-x-auto scroll-smooth">
            <div className="flex snap-x snap-mandatory gap-8 lg:gap-10">
              {projects.map((p, i) => (
                <div
                  key={p.slug}
                  ref={(node) => (itemRefs.current[i] = node)}
                  className={[
                    "snap-start shrink-0",
                    "w-full", // md/sm: 1 visible
                    "lg:w-[calc(50%-20px)]", // lg/xl: 2 visible
                  ].join(" ")}
                >
                  <ProjectCard
                    to={`/projects/${p.slug}`}
                    title={p.title}
                    category={p.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
