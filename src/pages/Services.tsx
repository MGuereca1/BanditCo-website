import { CheckCircle2 } from "lucide-react";
import { servicesData } from "../constants/Serv_consts";

const Services = () => {
  return (
    <div className="bg-[#171717] min-h-screen text-white body-font">
      {/* Header Banner */}
      <section className="py-20 border-b border-[#b89d76]/30">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-[#f5efe6]">
            Our Construction & Remodeling Services
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Comprehensive residential craftsmanship. Explore our primary disciplines,
            materials, and exact capabilities below.
          </p>
        </div>
      </section>

      {/* Deep-Dive Service Modules */}
      <section className="py-16 divide-y divide-[#b89d76]/20">
        <div className="container mx-auto px-6 max-w-6xl space-y-24">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`pt-16 flex flex-col gap-12 lg:items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#b89d76]/40 aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="text-lg font-semibold tracking-wider uppercase text-[#b89d76] mb-2">
                    Scope of Work
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-[#f5efe6] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-base text-neutral-300 mb-4 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-white leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bulleted Capabilities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
                    {service.capabilities.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#b89d76] shrink-0 mt-0.5" />
                        <span className="text-lg text-neutral-200 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-16 border-t border-[#b89d76]/30 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#f5efe6]">
            Have a specialized custom build in mind?
          </h2>
          <p className="text-neutral-300 mb-8">
            We regularly tackle custom framing, structural repairs, and multi-discipline builds.
            Send over your project details for an on-site walkthrough.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-lg bg-[#b89d76] text-black font-semibold hover:bg-[#947c5d] transition shadow-md hover:shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;