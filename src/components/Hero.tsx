// import hero_temp from '../assets/service_img/hero_temp.jpg'
import hero from '../assets/pictures/14-OD1A5730.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    
    <section className="relative w-full min-h-[700px] overflow-hidden">

    {/* Hero Image */}
    <img
        src={hero}
        alt="Construction project"
        className="absolute inset-0 w-full h-full object-cover object-center"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Hero Content */}
    <div className="relative z-10 container mx-auto px-5 min-h-[700px] flex flex-col items-center justify-center text-center text-white">

        <h1 className="title-font sm:text-6xl text-4xl mb-6 font-bold">
            Built Right.
            <br />
            No Shortcuts.
        </h1>

        <p className="mb-8 leading-relaxed max-w-2xl text-lg">
            Whether you're remodeling the inside of your home,
            upgrading the exterior, replacing your roof, installing
            new gutters, or building a custom deck, we bring the same
            commitment to every project.
        </p>

{/* changed button class to link or could just do a, which is simpler */}
        <div className="flex justify-center">
            <Link to={"/contact"} className="inline-flex text-black bg-[#b89d76] border-0 py-3 px-7 hover:bg-[#947c5d] rounded text-lg">
                GET YOUR QUOTE
            </Link>

            <Link to={"/about"} className="ml-4 inline-flex text-[#b89d76] bg-black border-0 py-3 px-7 hover:bg-gray-500 rounded text-lg">
                ABOUT US
            </Link>
        </div>

    </div>

</section>
    
  )
}

export default Hero

