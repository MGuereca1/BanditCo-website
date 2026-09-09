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
export const services = [
    {
      title: "Remodeling",
      description: "Complete home and commercial remodeling services designed to transform your space with quality craftsmanship and attention to detail.",
      //image: remodeling,
      alt: "remodeling example"
    },
    {
      title: "Carpentry",
      description: "Expert carpentry tailored to your needs — from custom builds to structural work. Carpentry is our specialty and most requested service.",
      //image: carpentry, 
      alt: "carpentry example"
    },
    {
      title: "Demolition",
      description: "Safe, efficient demolition services to prepare your property for new builds, renovations, or upgrades.",
      //image: demolition,
      alt: "demolition example"
    },
    {
      title: "Siding",
      description: "Durable and attractive siding solutions to enhance curb appeal while protecting your property from the elements.",
      //image: siding,
      alt: "siding example"
    },
    {
      title: "Other",
      description: "Need anything else done? Contact us to work out the job you want!",
      //image: more,
      alt: "other"
    }
]

/*
import Logo from '../assets/logo.JPG'
import values from '../assets/gallery/siding/SKHC7343.JPG'
*/

export const about = [
    {
      title: "Our Story",
      description: " Bandit Co's story",
      //img: Logo
    },
    {
      title: "Our Values",
      description: "More info about company...",
      //img: values
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
    { href: '/services', text: 'Carpentry' },
    { href: '/services', text: 'Demolition' },
    { href: '/services', text: 'Siding Packages' }
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

