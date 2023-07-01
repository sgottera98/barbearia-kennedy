import { useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './ui/partials/Hero';
import OurBarberShop from './ui/partials/OurBarberShop';
import Services from './ui/partials/Services';
import Comments from './ui/partials/Comments';
import Professionals from './ui/partials/Professionals';
import Contact from './ui/partials/Contacts';
import AboutUs from './ui/partials/AboutUs';
import Menu from './ui/partials/Menu';
import Cta from './ui/partials/Cta';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            mirror: true,
            easing: 'ease',
            anchorPlacement: 'top-bottom',
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-neutral-black md:bg-neutral-black w-screen min-h-screen text-white">
            <Menu />
            <Hero />
            <OurBarberShop />
            {/* <Services /> */}
            <Comments/>
            <AboutUs />
            <Professionals />
            <Contact />
            <Cta />
        </div>
    );
}

export default App;
