import headshot from "../assets/pictures/4-OD1A5656.jpg";
import { Link } from "react-router-dom";

const Home_About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 sm:py-16 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#f5efe6] mb-8">
            About Us
          </h1>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Image Column */}
            <div className="sm:w-1/3 w-full flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-full sm:h-72 rounded-xl overflow-hidden shadow-md">
                <img
                  alt="Anthony Pendley"
                  className="object-cover object-center h-full w-full"
                  src={headshot}
                />
              </div>
              <h2 className="font-semibold text-[#b89d76] text-md mt-4">
                Founder &amp; CEO
              </h2>
            </div>

            {/* Text Column */}
            <div className="sm:w-2/3 sm:pl-8 sm:border-l border-[#b89d76] text-left space-y-4">
              <p className="leading-relaxed text-sm text-white">
                I'm Anthony Pendley, founder and CEO of The Bandit Co. Construction
                has been a part of my life for as long as I can remember. A lot of
                what I know today comes from three generations of construction,
                learning from the people who came before me and carrying those
                lessons forward through my own career.
              </p>
              {/* possible colors: #f7f4d5, #f0ecc0, #ebe3d5  */}
              <p className="leading-relaxed text-sm text-white">
                Over the past 10-plus years, I've worked across many areas of
                construction, gaining experience in remodeling, exterior work,
                roofing, custom projects, and general contracting. Along the way,
                I've had the opportunity to learn from some great people and build
                relationships throughout the industry that I truly value. Those
                experiences and relationships became part of the foundation for The
                Bandit Co.
              </p>

              <div className="pt-2">
                <p className="text-sm uppercase tracking-wider text-white font-medium ">
                  Our core belief
                </p>
                {/* former color  text-gray-900 */}
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  Built Right. No Shortcuts.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="about"
                  className="text-[#b89d76] hover:text-white font-medium inline-flex items-center transition-colors"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_About;