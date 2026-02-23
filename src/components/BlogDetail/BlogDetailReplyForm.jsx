export default function BlogDetailReplyForm() {
  return (
    <section className="mt-10">
      <h3 className="text-xl font-extrabold text-[#1F2A30]">Leave a Reply</h3>

      <div className="mt-4 rounded-2xl bg-[#F5F7F9] p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Your Name"
            className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#1F2A30]"
          />
          <input
            placeholder="Your Email"
            className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#1F2A30]"
          />
        </div>

        <input
          placeholder="Select Topic"
          className="mt-4 h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#1F2A30]"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="mt-4 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#1F2A30]"
        />

        <button className="mt-5 rounded-2xl bg-[#1F2A30] px-7 py-3 text-sm font-semibold text-white hover:bg-black">
          Submit Message
        </button>
      </div>
    </section>
  );
}
