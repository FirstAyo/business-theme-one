export default function ProjectBody({ p1, p2, quote, p3 }) {
  return (
    <section className="mt-8 space-y-5 text-[15px] leading-7 text-black/65">
      <p>{p1}</p>
      <p>{p2}</p>

      <blockquote className="rounded-2xl bg-[#F5F7F9] p-6 text-sm font-semibold text-black/60">
        {quote}
      </blockquote>

      <p>{p3}</p>
    </section>
  );
}
