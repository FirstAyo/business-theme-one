import image1 from "../../assets/images/cover.jpg";
import image2 from "../../assets/images/hero2.png";
import icon from "../../assets/icons/developing.png";

/**
 * BusinessGlobalSection
 * - Left: heading + 2 feature rows + buttons
 * - Right: stacked image collage
 * - Includes faint watermark text behind
 */
export default function BusinessGlobalSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="relative mx-auto flex flex-col lg:flex-row max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 justify-between">
         {/* Watermark */}
          <div className="pointer-events-none absolute -top-20 left-0 hidden select-none text-[125px] font-extrabold tracking-wide text-black/7 lg:block">
            Business Goal
          </div>
        {/* LEFT */}
        <div className="relative">
         

          <p className="text-sm font-semibold tracking-[0.22em] text-[#1F2A30]">
            JUST A CONSULTANCY
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#1F2A30] sm:text-5xl">
            We know how to manage
            <br className="hidden sm:block" />
            business globally
          </h2>

          {/* Features */}
          <div className="mt-10 space-y-8">
            <FeatureRow
              title="Best Business Consulting"
              desc="Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum"
            />
            <FeatureRow
              title="24/7 Customer Support"
              desc="Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum"
            />
          </div>

          {/* Buttons */}
          <div className="mt-12 flex items-center gap-6">
            <button
              type="button"
              className="h-14 rounded-2xl bg-[#1F2A30] px-10 text-sm font-semibold text-white hover:bg-black/85"
            >
              Contact Us
            </button>

            <button
              type="button"
              aria-label="Play video"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/5 text-[#1F2A30] hover:bg-black/10"
            >
              ▶
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-110 lg:mx-0">
          {/* Big image placeholder */}
          <div className="overflow-hidden rounded-3xl bg-gray-200">
            {/* Replace with your image */}
            <img
              src={image1}
              alt="Business Global Section"
              className="h-140 w-full lg:h-140 object-cover"
            />
          </div>

          {/* Small overlapping image placeholder */}
          <div className="absolute left-10 top-50 lg:-left-30 lg:top-24 w-65 overflow-hidden rounded-3xl border-10 border-white bg-gray-200 shadow-lg sm:w-75">
            {/* Replace with your image */}
            <img src={image2} className="h-80 w-full sm:h-90 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Feature row item (icon + text) */
function FeatureRow({ title, desc }) {
  return (
    <div className="flex items-start gap-5">
      {/* Icon placeholder */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black/5">
        {/* swap with icon later */}

        <img src={icon} alt="icon" className="h-12 w-12" />
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-[#1F2A30]">{title}</h3>
        <p className="mt-2 max-w-md text-[15px] leading-7 text-[#5C6B73]">
          {desc}
        </p>
      </div>
    </div>
  );
}
