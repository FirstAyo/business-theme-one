import stepImg1 from "../../assets/images/hero3.png";
import stepImg2 from "../../assets/images/hero3.png";

const steps = [
  {
    img: stepImg1,
    title: "Define Your Objectives and Plan",
    bullets: [
      "Outline Key Features",
      "Choose a Domain Name",
      "Identify Purpose",
      "Understand Your Audience",
    ],
  },
  {
    img: stepImg2,
    title: "Build and Design Your Website",
    bullets: [
      "Outline Key Features",
      "Choose a Domain Name",
      "Identify Purpose",
      "Understand Your Audience",
    ],
  },
];

export default function ServiceSteps() {
  return (
    <section className="mt-14">
      <h3 className="text-2xl font-extrabold text-[#1F2A30]">
        2 Simple Steps to Process
      </h3>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
        Assertively e-enable catalysts for change before fully tested markets.
        Phosfluorescently maintain solve wireless scenarios after intermediate
        applications. Conveniently predominate mission-critical initiatives.
      </p>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
        Phosfluorescently maintain solve wireless scenarios after intermediate
        applications. Conveniently predominate mission-critical initiatives.
      </p>

      <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
        {steps.map((s, idx) => (
          <div key={idx} className="grid gap-6 p-6 sm:grid-cols-[200px_1fr]">
            {/* Left image */}
            <div className="overflow-hidden rounded-xl bg-black/5">
              <img
                src={s.img}
                alt=""
                className="h-[120px] w-full object-cover sm:h-[110px]"
              />
            </div>

            {/* Right content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-[16px] font-extrabold text-[#1F2A30]">
                {s.title}
              </h4>

              <div className="mt-3 grid gap-x-10 gap-y-2 text-xs text-black/55 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <p key={b} className="leading-6">
                    {b}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
