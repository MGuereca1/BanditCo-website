import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../constants/Serv_consts'

//import logo here, using hero.png for now
import heroImg from '../assets/hero.png'
import { NavLink } from 'react-router-dom'

import Icon from '../assets/BanditCo_Outline.svg'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev)
  }
  
  return (
    <nav className="sticky top-0 z-50 py-3 bg-neutral-950 text-white border-b border-[#b89d76]">
      <div className="container px-4 mx-auto relative text-lg">
        <div className="relative flex items-center justify-center lg:justify-between">
          {/* Empty div for desktop spacing - keeps logo centered on mobile */}
          <div className="hidden lg:block flex-1"></div>
          
          {/* Centered logo and company name */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-14 w-14 flex items-center justify-center">
              <img 
                className="w-full h-full object-contain" 
                src={Icon} 
                alt="Bandit Co Logo" 
              />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-[#b89d76]">
              The Bandit Co.
            </span>
          </div>
          
          {/* Mobile menu button - positioned absolutely on mobile, normally on desktop */}
          <div className="lg:hidden absolute right-0">
            <button onClick={toggleNavbar} aria-label="Toggle Navigation">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          {/* Empty div for desktop spacing - keeps logo centered */}
          <div className="hidden lg:block flex-1"></div>
        </div>
        
        {/* Navigation items - centered below logo */}
        <ul className="hidden lg:flex justify-center space-x-10 items-center mt-4">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.href.startsWith('#') ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <NavLink to={item.href}>{item.label}</NavLink>
              )}
            </li>
          ))}
        </ul>

        {mobileDrawerOpen && (
          <div className="absolute top-full right-0 z-20 bg-white w-80 p-6 flex flex-col justify-start items-start lg:hidden shadow-lg rounded-bl-lg">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="py-3 border-b border-neutral-700 last:border-b-0">
                  <NavLink 
                    to={item.href}
                    className="block hover:text-neutral-300 transition-colors"
                    onClick={() => setMobileDrawerOpen(false)}
                  > 
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar