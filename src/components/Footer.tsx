import { Mail, Phone, MapPin} from "lucide-react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { contactInfo, QuickLink, ServicesLink, social } from "../constants/Serv_consts"
import {Link} from "react-router-dom"


const Footer = () => {
  const currentYear  = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-8 border-t border-[#b89d76]">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-bold text-[#b89d76] mb-4"> The Bandit Co.</h3>
            <p className="mb-4 text-[#b89d76]">{social.message.text}</p>
            <div className="flex space-x-4">
              <a
                href={social.social1.href}
                className="hover:text-[#b89d76] transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={social.social2.href}
                className="hover:text-[#b89d76] transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href={social.social2.href}
                className="hover:text-[#b89d76] transition"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#b89d76] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QuickLink.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#b89d76] transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#b89d76] mb-4">Our Services</h4>
            <ul className="space-y-2">
              {ServicesLink.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#b89d76] transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#b89d76] mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <a
                  href={contactInfo.email.href}
                  className="hover:text-[#b89d76] transition"
                >
                  {contactInfo.email.address}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <a
                  href={contactInfo.phone.href}
                  className="hover:text-[#b89d76] transition"
                >
                  {contactInfo.phone.display}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} />
                <span>{contactInfo.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#b89d76] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>&copy; {currentYear} The Bandit Co. LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="Terms" className="hover:text-[#b89d76] transition">
              Terms of Service
            </Link>
            <Link to="Privacy" className="hover:text-[#b89d76] transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer