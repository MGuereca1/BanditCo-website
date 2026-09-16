import { Link } from "react-router-dom"

import construction from '../assets/service_img/construction.jpg'
import decks from '../assets/service_img/decks.jpg'
import exterior from '../assets/service_img/exterior_remodeling.jpg'
import interior from '../assets/service_img/interior_remodeling.jpg'
import gutters from '../assets/service_img/gutters.jpg'
import roofing from '../assets/service_img/roofers.jpg'

const Home_Services = () => {
    return (
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-col">
                <div className="h-1 bg-[#b89d76] rounded overflow-hidden">
                    <div className="w-24 h-full bg-grey"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-2/5 text-[#b89d76] font-medium title-font text-2xl mb-2 sm:mb-0">Our Services</h1>
                    <p className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">The Bandit Co. handles a wide variety of residential construction and remodeling projects, from smaller repairs and upgrades to complete renovations and custom builds.</p>
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={interior}/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-[#b89d76] mt-5">Interior Remodeling</h2>
                    <p className="text-white leading-relaxed mt-2">Kitchen and bathroom remodels, flooring, drywall, trim, painting, and complete interior renovations.</p>
                </div>

                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={exterior}/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-[#b89d76] mt-5">Exterior Remodeling</h2>
                    <p className="text-white leading-relaxed mt-2">Exterior upgrades, repairs, siding, and improvements designed to enhance your home's appearance and durability.</p>
                    
                </div>
                
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={roofing} />
                    </div>
                    <h2 className="text-xl font-medium title-font text-[#b89d76] mt-5">Roofing</h2>
                    <p className="text-white leading-relaxed mt-2">Roof repairs, replacements, and new roofing projects built to protect your home for years to come.</p>
                    
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={gutters}/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-[#b89d76] mt-5">Gutters</h2>
                    <p className="text-white leading-relaxed mt-2">Gutter installation, replacement, repairs, and drainage solutions to help protect your home's foundation and exterior.</p>
                </div>

                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={decks}/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-[#b89d76] mt-5">Custom Decks</h2>
                    <p className="text-white leading-relaxed mt-2">Custom-built decks designed around your home, your space, and how you want to use it.</p>
                    
                </div>
                
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={construction} />
                    </div>
                    <h2 className="text-xl font-medium title-font text-[#b89d76] mt-5">General Remodeling & Construction</h2>
                    <p className="text-white leading-relaxed mt-2">Home improvements, renovations, repairs, and custom construction projects of all sizes.</p>
            
                </div>
            </div>
            <div className="flex justify-center w-full mt-16">
                <Link
                    to="/services"
                    className="text-black bg-[#b89d76] hover:bg-[#947c5d] font-semibold py-3 px-8 rounded-lg text-lg tracking-wide transition-colors shadow-md hover:shadow-lg cursor-pointer inline-flex items-center justify-center"
                >
                    View All Services
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Home_Services