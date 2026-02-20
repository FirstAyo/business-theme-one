import { useEffect, useMemo, useRef, useState } from "react";
import TeamCard from "./TeamCard";

/**
 * TeamSection
 * - Continuous slider simulation: auto-scrolls horizontally every few seconds
 * - Duplicates members list to give a "loop" feel
 * - Responsive: shows ~4 cards on xl, fewer on smaller screens
 */
export default function TeamSection() {
  const members = useMemo(
    () => [
      {
        slug: "beckett-hayden",
        name: "Beckett Hayden",
        role: "Deputy Manager",
        social: { youtube: "#", twitter: "#", instagram: "#" },
      },
      {
        slug: "julian-wyat",
        name: "Julian Wyat",
        role: "Finance Manager",
        social: { youtube: "#", twitter: "#", instagram: "#" },
      },
      {
        slug: "archer-graham",
        name: "Archer Graham",
        role: "Founder",
        social: { youtube: "#", twitter: "#", instagram: "#" },
      },
      {
        slug: "amelia-clover",
        name: "Amelia Clover",
        role: "Co-Founder",
        social: { youtube: "#", twitter: "#", instagram: "#" },
      },
    ],
    [],
  );

  // Duplicate for loop feel
  const track = useMemo(() => [...members, ...members, ...members], [members]);

  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const step = () => {
      if (isPaused) return;
      // Scroll a little to the right each tick
      el.scrollBy({ left: 320, behavior: "smooth" });

      // If we get far, jump back near the start (loop illusion)
      const maxBeforeReset = el.scrollWidth * 0.55;
      if (el.scrollLeft > maxBeforeReset) {
        el.scrollLeft = el.scrollWidth * 0.18;
      }
    };

    // Start near the middle for smoother looping
    if (el.scrollLeft === 0) el.scrollLeft = el.scrollWidth * 0.18;

    const id = window.setInterval(step, 3000);
    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative text-center">
          {/* Watermark */}
          <div className="pointer-events-none absolute left-1/2 -top-20 hidden -translate-x-1/2 select-none text-[110px] font-extrabold tracking-tight text-black/7 lg:block">
            Members
          </div>

          <span className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#1F2A30]">
            EXPERT MEMBERS
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            Professionals Team
          </h2>
        </div>

        {/* Slider */}
        <div
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)} // pause on hover (nice UX)
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={scrollerRef} className="no-scrollbar overflow-x-auto py-2">
            <div className="flex gap-6 px-1">
              {track.map((m, idx) => (
                <div
                  key={`${m.slug}-${idx}`}
                  className={[
                    "shrink-0",
                    "w-[260px]", // mobile
                    "sm:w-[280px]",
                    "lg:w-[300px]",
                  ].join(" ")}
                >
                  <TeamCard member={m} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
