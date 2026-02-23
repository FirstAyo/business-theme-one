export default function BlogDetailHero({ image }) {
  return (
    <div className="relative h-[320px] sm:h-[380px] lg:h-[520px]">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
