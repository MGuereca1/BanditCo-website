import hero_temp from '../assets/service_img/hero_temp.jpg'

const Hero = () => {
  return (
    
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

            {/* is better with a 720 x 600 ratio picture.  */}
            <img className="object-cover object-center rounded" alt="hero" src={hero_temp}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Built Right.
                <br className="hidden lg:inline-block"/>No Shortcuts.
            </h1>
            <p className="mb-8 leading-relaxed">Whether you're remodeling the inside of your home, upgrading the exterior, replacing your roof, installing new gutters, or building a custom deck, we bring the same commitment to every project</p>
            <div className="flex justify-center">
                {/* MODIFY SO IT SCROLLS DOWN PAGE  */}
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Get Your Quote</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About Us</button>
            </div>
            </div>
        </div>
    </section>

  )
}

export default Hero

