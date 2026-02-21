import { Mail, MapPin, Phone } from "lucide-react";
import contactImg from "../../assets/images/hero3.png";

/**
 * ContactHeroSection
 * - Matches the screenshot layout:
 *   - Big centered "Contact Us" + faint watermark behind
 *   - Left dark info card overlaps center image
 *   - Right white form card overlaps center image
 *   - On mobile: stacks cards naturally (no awkward absolute positioning)
 */
export default function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F8] py-20 sm:py-24">
      {/* Decorative circles + subtle scribble (simple approximation) */}
      <div className="pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full border border-black/5" />
      <div className="pointer-events-none absolute right-24 top-44 hidden h-28 w-28 rounded-full border border-black/5 lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative text-center py-5">
          {/* Watermark */}
          <div className="pointer-events-none absolute left-1/2 -top-25 hidden -translate-x-1/2 select-none text-[130px] font-extrabold tracking-tight text-black/7 lg:block">
            Contact
          </div>

          <h2 className="relative text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            Contact Us
          </h2>
        </div>

        {/* Main layout */}
        <div className="relative mt-40">
          {/* Mobile/Tablet: stack | Desktop: overlap */}
          <div className="grid gap-10 lg:block">
            {/* Center Image (behind the two cards on desktop) */}
            <div className="mx-auto w-full max-w-2xl lg:absolute lg:left-1/2 lg:top-1/2 lg:w-130 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
              <div className="overflow-hidden rounded-2xl shadow-[0_22px_70px_rgba(0,0,0,0.12)]">
                <img
                  src={contactImg}
                  alt="Contact"
                  className="h-[280px] w-full object-cover sm:h-[440px] lg:h-[580px]"
                />
              </div>
            </div>

            {/* Left Dark Contact Card */}
            <div className="mx-auto w-full max-w-xl lg:absolute lg:left-0 lg:top-1/2 lg:w-[410px] lg:-translate-y-1/2">
              <div className="rounded-2xl bg-[#1F2A30] px-10 py-12 text-white shadow-[0_22px_70px_rgba(0,0,0,0.18)]">
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Call Us 24/7"
                  value="(+256) 2145.2156"
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Work with us"
                  value="info@Invena.com"
                />
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Our Location"
                  value="125 Town, United State"
                />
              </div>
            </div>

            {/* Right Form Card */}
            <div className="mx-auto w-full max-w-xl lg:absolute lg:right-0 lg:top-1/2 lg:w-[420px] lg:-translate-y-1/2">
              <div className="rounded-2xl border border-black/10 bg-white p-10 shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
                <h3 className="text-2xl font-extrabold text-[#1F2A30]">
                  Get In Touch
                </h3>

                <div className="mt-6 space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-12 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-[#1F2A30] outline-none focus:border-[#1F2A30]"
                  />

                  <input
                    type="email"
                    placeholder="Johndoe@gmail.com"
                    className="h-12 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-[#1F2A30] outline-none focus:border-[#1F2A30]"
                  />

                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full resize-none rounded-md border border-black/15 bg-white px-4 py-3 text-sm text-[#1F2A30] outline-none focus:border-[#1F2A30]"
                  />

                  <label className="flex items-center gap-3 text-sm text-black/55">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#1F2A30]"
                    />
                    <span>I agree to the Terms &amp; Conditions</span>
                  </label>

                  <button className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-[#1F2A30] px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-[#172126]">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>

            {/* Spacer so the overlapped layout doesn't collide with next sections */}
            <div className="hidden lg:block lg:h-[440px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ContactItem row (left dark card)
 * - White icon bubble
 * - Light-blue label, white value (as in screenshot)
 */
function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-6 py-7">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#1F2A30] shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-[#86AFC2]">{label}</p>
        <p className="mt-1 text-lg font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
