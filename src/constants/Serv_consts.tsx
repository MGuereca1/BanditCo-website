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

import construction from '../assets/service_img/construction.jpg'
import decks from '../assets/service_img/decks.jpg'
import exterior from '../assets/service_img/exterior_remodeling.jpg'
import interior from '../assets/service_img/interior_remodeling.jpg'
import gutters from '../assets/service_img/gutters.jpg'
import roofing from '../assets/service_img/roofers.jpg'

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
    image: interior,
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
    image: gutters,
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
    image:decks,
  }
]

// MODIFY PICTURES
import Logo from '../assets/The BanditCo_tan.svg'
import values from '../assets/The BanditCo_inv_tan.svg'
import icon from '../assets/BanditCo_inverted_noFillTan.svg'


export const about = [
    {
    header: "Our Story",
    title: "Three Generations of Craftsmanship",
    description:
      "Founded by Anthony Pendley, The Bandit Co. brings together three generations of construction knowledge and more than 10 years of hands-on experience across remodeling, roofing, exterior projects, and general contracting. For us, construction isn’t just an industry, it’s a craft passed down through mentors, family, and hard-earned lessons on real jobsites throughout North Georgia.",
    img: Logo,
  },
  {
    header: "Our Standard",
    title: "Built Right. No Shortcuts.",
    description:
      "This is more than a motto. It is the standard this company was built on from day one. We take the time to do the work properly, pay attention to the details that matter over time, and use high-grade materials. Whether we are replacing a roof, remodeling a living area, or framing a custom deck, we treat every home with the care it deserves because we know that’s where families live and make memories.",
    img: icon,
  },
  // {
  //   header: "Our Team",
  //   title: "The Hands Behind the Work",
  //   description:
  //     "Team info here.",
  //   img: values,
  // },
  {
    header: "Our Values",
    title: "Good People & Honest Work",
    description:
      "Quality work doesn't happen by accident; it comes from clear communication, honest guidance, and reliable tradesmen who take pride in their craft. We are not interested in merely finishing a punch list, we are here to give you straightforward answers, stand behind what we put our name on, and build things designed to last.",
    img: values,
  },
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
        address: 'anthony@thebanditco.info',
        href: 'mailto:anthony@thebanditco.info'
    },
    phone: {
        display: '404-988-3297',
        href: 'tel:4049883297'
    },
    address: {
        full: '173 Bessie Ln \nJasper, GA 30143'
    }
}

export const social = {
    message: {
        text: 'Built Right. No Shortcuts.'
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

