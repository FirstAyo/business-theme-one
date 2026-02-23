import avatar from "../../assets/images/hero3.png";

export default function BlogDetailAuthorCard() {
  return (
    <div className="mt-8 flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5">
      <div className="h-14 w-14 overflow-hidden rounded-xl bg-black/5">
        <img src={avatar} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold text-black/50">Brand Design</p>
        <p className="mt-1 text-sm font-extrabold text-[#1F2A30]">
          Angelia H. Dekato
        </p>
        <p className="mt-2 text-xs leading-6 text-black/55">
          Nullam varius luctus pharetra ultricies... (demo text)
        </p>
      </div>
    </div>
  );
}
