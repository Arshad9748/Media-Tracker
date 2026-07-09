import react from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const Landingpage = () => {
    return (
        <div className='bg-pink-100 pt-4'>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
    }

export default Landingpage;