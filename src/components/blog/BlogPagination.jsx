export default function BlogPagination() {
  return (
    <div className="mt-10 flex items-center gap-2">
      <PageBtn active>01</PageBtn>
      <PageBtn>02</PageBtn>
      <PageBtn>03</PageBtn>
      <PageBtn>04</PageBtn>
      <PageBtn>&raquo;</PageBtn>
    </div>
  );
}

function PageBtn({ active, children }) {
  return (
    <button
      type="button"
      className={[
        "grid h-10 w-10 place-items-center rounded-xl text-sm font-bold",
        active
          ? "bg-[#1F2A30] text-white"
          : "bg-white text-[#1F2A30]/70 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:text-[#1F2A30]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
