// for navbar usage

import Navbar from '../components/Navbar'
import { Outlet, ScrollRestoration} from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
    console.log('RootLayout is rendering')

    return (
        <>
      <ScrollRestoration />
      <Navbar /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
    )
}

export default RootLayout