export default function SidebarCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <h4 className="text-lg font-extrabold text-[#1F2A30]">{title}</h4>
      <div className="mt-5">{children}</div>
    </div>
  );
}
