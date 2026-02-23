
export default function CategoriesCard() {

  const items = [
    "Business Solution",
    "Strategy Growth",
    "Finance Solution",
    "Investment Policy",
    "Tax Management",
  ];

  return (
    <div className="rounded-2xl bg-[#1F2A30] p-6 text-white">
      <h4 className="text-lg font-extrabold">Categories</h4>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-white/20"
          >
            {item}
            <span>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}