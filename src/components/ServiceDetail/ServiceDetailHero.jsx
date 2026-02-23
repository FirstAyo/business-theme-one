export default function ServiceDetailHero({ image }) {
  return (
    <section className="relative h-[320px] sm:h-[380px] lg:h-screen 2xl:h-145 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Structural Engineering
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/80">
            Intrinsically coordinate multifunctional functionalities reliable
            potentialities. Objectively envisioner high in convergence through
            collaborative networks.
          </p>
        </div>
      </div>
    </section>
  );
}
