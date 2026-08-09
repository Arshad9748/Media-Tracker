import react from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Content from '../components/Content'

const Landingpage = () => {
    return (
        <div className='bg-slate-950 pt-4'>
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </div>
    );
    }

export default Landingpage;