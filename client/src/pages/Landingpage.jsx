import react from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

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