import ServiceFeatureGrid from "./ServiceFeatureGrid";
import ServiceSteps from "./ServiceSteps";
import ServiceFaq from "./ServiceFaq";

import featuredImg from "../../assets/images/hero3.png";

export default function ServiceDetailContent() {
  return (
    <div>
      {/* Featured Image */}
      <div className="overflow-hidden rounded-2xl bg-black/5">
        <img src={featuredImg} alt="" className="w-full object-cover" />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-2xl font-extrabold text-[#1F2A30]">
        Business Growth Management
      </h2>

      <p className="mt-4 text-sm leading-7 text-black/60">
        Continually myocardinate holistic mindshare with client-based web
        services. Assertively e-enable catalysts for change before tested
        markets...
      </p>

      <p className="mt-4 text-sm leading-7 text-black/60">
        Intrinsically coordinate multifunctional functionalities reliable
        potentialities...
      </p>

      <ServiceFeatureGrid />

      <ServiceSteps />

      <ServiceFaq />
    </div>
  );
}
