import { useEffect } from "react";
import logo1 from "../../assets/clients/1.webp";
import logo2 from "../../assets/clients/2.webp";
import logo3 from "../../assets/clients/3.webp";
import logo4 from "../../assets/clients/4.webp";
import logo5 from "../../assets/clients/5.webp";
import logo6 from "../../assets/clients/6.webp";

export default function ContactMapSection() {
  return (
    <section className="bg-white">
      {/* Map */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-16">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4756.782789314845!2d-123.11017652398694!3d49.2249757748395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e1!3m2!1sen!2sca!4v1771628804124!5m2!1sen!2sca"
            className="h-[520px] w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Trusted Clients */}
      <div className="mt-10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Title */}
            <p className="text-lg font-semibold tracking-widest text-[#1F2A30]">
              OUR TRUSTED CLIENTS
            </p>

            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
              <ClientLogo name="Toy Jesh" image={logo1} />
              <ClientLogo name="sefrov" image={logo2} />
              <ClientLogo name="waleon" image={logo3} />
              <ClientLogo name="calsa" image={logo4} />
              <ClientLogo name="Contex" image={logo5} />
              <ClientLogo name="Toy Jesh" image={logo6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogo({ image, name }) {
  return (
    <div>
      <img src={image} alt={name} className="h-10 w-30 object-contain" />
    </div>
  );
}
