import { CheckCircle2, ArrowRight} from "lucide-react";
import { servicesData } from "../constants/Serv_consts";

const Services = () => {
  return (
    <div className="bg-white text-neutral-900">
      {/* Header Banner */}
      <section className="bg-neutral-950 text-white py-20 border-b border-neutral-800">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Our Construction & Remodeling Services
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive residential craftsmanship. Explore our primary disciplines,
            materials, and exact capabilities below.
          </p>
        </div>
      </section>

      {/* Deep-Dive Service Modules */}
      <section className="py-16 divide-y divide-neutral-200">
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
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="text-lg font-semibold tracking-wider uppercase text-yellow-600 mb-2">
                    Scope of Work
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-base text-neutral-600 mb-4 font-large">
                    {service.tagline}
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bulleted Capabilities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
                    {service.capabilities.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-neutral-700 font-lg leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Inline CTA Anchor {Places button next to each service} */}
                  {/* <div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-400 text-neutral-950 font-semibold hover:bg-yellow-300 transition text-sm shadow-sm"
                    >
                      Request a quote for
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div> */}
                </div>
                
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="bg-neutral-100 py-16 border-t border-neutral-200 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Have a specialized custom build in mind?
          </h2>
          <p className="text-neutral-600 mb-8">
            We regularly tackle custom framing, structural repairs, and multi-discipline builds.
            Send over your project details for an on-site walkthrough.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition shadow"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services