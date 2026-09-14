// for content that needs to be constant
// services and for gallery if needed

export const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact us', href: '/contact' },
]

/*
import carpentry from '../assets/service_img/carpentry.jpg'
import remodeling from '../assets/service_img/remodeling.jpg'
import demolition from '../assets/service_img/demolition.jpg'
import siding from '../assets/service_img/siding.jpg'
import more from '../assets/service_img/more.jpg'
*/ 

// current info is a placeholder
export const servicesData = [
    {
    id: "interior",
    title: "Interior Remodeling",
    tagline: "Custom kitchens, living spaces, and luxury bathrooms built to last.",
    description:
      "We handle every phase of interior transformations—from floor-plan reconfigurations and load-bearing removals to custom cabinetry, tilework, and finishing details.",
    capabilities: [
      "Full kitchen & bathroom renovations",
      "Hardwood, vinyl plank, & custom tile flooring",
      "Drywall installation, repair, and texturing",
      "Trim carpentry, baseboards, & crown molding",
      "Interior wall framing and structural adjustments",
      "Turnkey interior paint & fine finishing",
    ],
    image: "https://dummyimage.com/800x600/e2e8f0/1e293b&text=Interior+Remodel",
  },
  {
    id: "roofing-gutters",
    title: "Roofing & Gutter Systems",
    tagline: "Weather-tight protection engineered for longevity and curb appeal.",
    description:
      "Protect your structure from the top down. We provide thorough inspections, storm tear-offs, complete re-roofs, and seamless drainage systems.",
    capabilities: [
      "Architectural asphalt shingle replacements",
      "Leak detection, flashing repairs, & preventative maintenance",
      "Seamless aluminum gutter fabrication & installation",
      "Gutter guard protection systems",
      "Fascia and soffit rot repair & replacement",
      "Full post-job magnetic sweep and cleanup",
    ],
    image: "https://dummyimage.com/800x600/e2e8f0/1e293b&text=Roofing+%26+Gutters",
  },
  {
    id: "decks-exterior",
    title: "Custom Decks & Exterior Living",
    tagline: "Functional outdoor spaces tailored to your terrain and lifestyle.",
    description:
      "Expand your functional footprint. We design and construct weather-resistant decks, covered porches, and siding upgrades that withstand the elements.",
    capabilities: [
      "Treated wood and composite (Trex/TimberTech) decking",
      "Multi-level deck engineering & rebuilds",
      "Covered patios, pergolas, and porticos",
      "Modern cable, wood, or aluminum railing systems",
      "Fiber cement, vinyl, and board-and-batten siding",
      "Full local code compliance & permit acquisition",
    ],
    image: "https://dummyimage.com/800x600/e2e8f0/1e293b&text=Decks+%26+Exteriors",
  }
]

// MODIFY PICTURES
import Logo from '../assets/hero.png'
import values from '../assets/service_img/hero_temp.jpg'


export const about = [
    {
      title: "Our Story",
      description: " Bandit Co's story",
      img: Logo
    },
    {
      title: "Our Founder",
      description: " Bandit Co's Founder",
      img: Logo
    },
    {
      title: "Our Team",
      description: "More info about team...",
      img: values
    },
    {
      title: "Our Values",
      description: "More info about company...",
      img: values
    }
]

export const QuickLink = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' }
]

// services may change
export const ServicesLink = [
    { href: '/services', text: 'Remodeling' },
    { href: '/services', text: 'Roofing & Gutters' },
    { href: '/services', text: 'Custom Decks' },
    { href: '/services', text: 'Exterior Living' }
]

export const contactInfo = {
    email: {
        address: 'BanditCo@gmail.com',
        href: 'mailto:BanditCo@gmail.com'
    },
    phone: {
        display: '123-456-7890',
        href: 'tel:1234567890'
    },
    address: {
        full: '173 Bessie Ln \nJasper, GA 30143'
    }
}

export const social = {
    message: {
        text: ' Message to reader here'
    },
    social1: {
        label: 'Facebook',
        href: 'facebook link'
    },
    social2: {
        label: 'Instagram',
        href: 'instalink'
    },
    social3: {
        label: 'TikTok',
        href: 'TikToklink'
    }
}

