import { about } from "../constants/Serv_consts";

const About = () => {
  return (
    <div className="bg-white text-neutral-900">
      {/* Header Banner */}
      <section className="bg-neutral-950 text-white py-20 border-b border-neutral-800">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Meet our team and learn more about our story.
          </p>
        </div>
      </section>

      {/* About Modules */}
      <section className="py-16 divide-y divide-neutral-200">
        <div className="container mx-auto px-6 max-w-6xl space-y-24">
          {about.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={index}
                className={`pt-16 flex flex-col gap-12 lg:items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-[4/3]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-yellow-600 mb-2">
                    {item.header}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-neutral-700 leading-relaxed text-lg md:text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="bg-neutral-100 py-16 border-t border-neutral-200 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to work with us?
          </h2>
          <p className="text-neutral-600 mb-8">
            Get in touch to discuss your next project and see how our team can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition shadow"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About