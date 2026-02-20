/**
 * CarouselDots
 * - Clickable dots for carousel navigation
 */
export default function CarouselDots({ count = 4, activeIndex = 0, onChange }) {
  return (
    <div className="flex items-center justify-center gap-4">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onChange?.(i)}
            className={[
              "relative h-3 w-3 rounded-full",
              isActive ? "border border-[#1F2A30]" : "bg-black/15",
            ].join(" ")}
          >
            {isActive && (
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F2A30]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
