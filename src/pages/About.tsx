import { about } from "../constants/Serv_consts";

const About = () => {
  return (
    <div className="bg-[#171717] min-h-screen text-white body-font">
      {/* Header Banner */}
      <section className="py-20 border-b border-[#b89d76]/30">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-[#f5efe6]">
            About Us
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Meet our team and learn more about our story.
          </p>
        </div>
      </section>

      {/* About Modules */}
      <section className="py-16 divide-y divide-[#b89d76]/20">
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
                {/* image container */}
                <div className="lg:w-1/2 ">
                  <div className="rounded-2xl overflow-hidden shadow-lg border bg-[#b89d76] border-[#b89d76]/40 aspect-[4/3]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#b89d76] mb-2">
                    {item.header}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f5efe6] mb-4">
                    {item.title}
                  </h2>
                  <p className="text-neutral-200 leading-relaxed text-lg md:text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="py-16 border-t border-[#b89d76]/30 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#f5efe6]">
            Ready to work with us?
          </h2>
          <p className="text-neutral-300 mb-8">
            Get in touch to discuss your next project and see how our team can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-lg bg-[#b89d76] text-black font-semibold hover:bg-[#947c5d] transition shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;