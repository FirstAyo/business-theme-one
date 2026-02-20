import { useEffect, useMemo, useRef, useState } from "react";
import BlogCard from "./BlogCard";

/**
 * RecentBlogSection
 * - Continuous horizontal slider (right -> left)
 * - Duplicates list for loop illusion
 * - Dots are shown for UI feel (optional click to jump)
 */
export default function RecentBlogSection() {
  const posts = useMemo(
    () => [
      {
        slug: "quick-settle-tips",
        category: "Business Solution",
        author: "David Dolean",
        title: "The quick settle tips of the new ages exist",
      },
      {
        slug: "building-a-brand",
        category: "Business Solution",
        author: "David Dolean",
        title: "Building a Brand That from Market Leaders",
      },
      {
        slug: "transforming-approach",
        category: "Business Solution",
        author: "David Dolean",
        title: "Transforming Your Best Of Approach to Business",
      },
      // Extra item(s) to make the slider feel continuous (same UI, different slug)
      {
        slug: "business-growth-hacks",
        category: "Business Solution",
        author: "David Dolean",
        title: "Business growth hacks for modern teams",
      },
      {
        slug: "strategy-for-startups",
        category: "Business Solution",
        author: "David Dolean",
        title: "Strategy fundamentals that scale startups",
      },
      {
        slug: "designing-better-systems",
        category: "Business Solution",
        author: "David Dolean",
        title: "Designing better systems for long-term success",
      },
    ],
    [],
  );

  // Duplicate for loop illusion
  const track = useMemo(() => [...posts, ...posts], [posts]);

  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Start closer to the beginning so the loop reset is less noticeable
    if (el.scrollLeft === 0) el.scrollLeft = 1;

    const tick = () => {
      if (isPaused) return;

      // Move right -> left by scrolling to the right (content moves left)
      el.scrollBy({ left: 340, behavior: "smooth" });

      // Loop illusion: if far enough, jump back
      const maxBeforeReset = el.scrollWidth * 0.55;
      if (el.scrollLeft > maxBeforeReset) {
        el.scrollLeft = 1;
      }

      // Update a simple dot state (visual)
      setActiveDot((d) => (d + 1) % 6);
    };

    const id = window.setInterval(tick, 3500);
    return () => window.clearInterval(id);
  }, [isPaused]);

  const jumpTo = (dotIndex) => {
    const el = scrollerRef.current;
    if (!el) return;
    setActiveDot(dotIndex);

    // Rough jump amount per "page"
    el.scrollTo({ left: dotIndex * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative text-center">
          {/* Watermark */}
          <div className="pointer-events-none absolute left-1/2 top-[-28px] hidden -translate-x-1/2 select-none text-[120px] font-extrabold tracking-tight text-black/[0.03] lg:block">
            Blog
          </div>

          <p className="text-sm font-semibold tracking-[0.22em] text-[#1F2A30]">
            BLOG &amp; NEWS
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            Recent blog post
          </h2>
        </div>

        {/* Slider */}
        <div
          className="mt-14"
          onMouseEnter={() => setIsPaused(true)} // pause when hovering the section
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={scrollerRef} className="no-scrollbar overflow-x-auto">
            <div className="flex gap-10">
              {track.map((post, idx) => (
                <div
                  key={`${post.slug}-${idx}`}
                  className={[
                    "shrink-0",
                    "w-[320px]", // mobile
                    "sm:w-[360px]",
                    "lg:w-[360px]",
                    "xl:w-[380px]",
                  ].join(" ")}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Go to blog slide ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  activeDot === i
                    ? "bg-[#1F2A30] ring-4 ring-black/10"
                    : "bg-black/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
