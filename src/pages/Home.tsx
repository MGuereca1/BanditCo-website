import Hero from "../components/Hero"
import Home_About from "./Home_About"
import Home_Services from "./Home_Services"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div className="bg-[#171717]">
        <Hero />
        <Home_About />
        <Home_Services />
        <br></br>
        <Contact />
    </div>
  )
}

export default Home