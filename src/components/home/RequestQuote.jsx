import clientImg from "../../assets/images/cover.jpg";

/**
 * RequestQuote
 * - Left: heading + form
 * - Right: image placeholder
 * - Responsive: stacks on small screens
 */
export default function RequestQuote() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire later (API/email service)
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT: Form card */}
          <div className="relative rounded-xl bg-white p-8 shadow-sm sm:p-10">
            {/* Watermark */}
            <div className="pointer-events-none absolute -top-10 left-6 hidden select-none text-[120px] font-extrabold tracking-tight text-black/7 lg:block">
              Hello
            </div>

            <p className="text-sm font-semibold tracking-[0.22em] text-[#1F2A30]">
              MAKE AN APPOINTMENT
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#1F2A30] sm:text-5xl">
              Request a free quote
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              {/* Row 1 */}
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-12 w-full rounded-xl bg-black/5 px-5 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
                />
                <input
                  type="text"
                  placeholder="Number"
                  className="h-12 w-full rounded-xl bg-black/5 px-5 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Row 2 */}
              <input
                type="email"
                placeholder="Your Email"
                className="h-12 w-full rounded-xl bg-black/5 px-5 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Type Your Message"
                className="w-full resize-none rounded-xl bg-black/5 px-5 py-4 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
              />

              {/* Button */}
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#1F2A30] px-8 text-sm font-semibold text-white hover:opacity-95"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* RIGHT: Image card */}
          <div className="lg:pt-2">
            <div className="overflow-hidden rounded-xl bg-gray-200">
              {/* Replace with <img /> later */}
              <img
                src={clientImg}
                className="h-82.3 w-full sm:h-107.5 lg:h-135 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
