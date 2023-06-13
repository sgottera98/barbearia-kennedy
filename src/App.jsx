import { useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './ui/partials/Hero';
import OurBarberShop from './ui/partials/OurBarberShop';
import Services from './ui/partials/services';
import Professionals from './ui/partials/Professionals';
import Contact from './ui/partials/Contacts';

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
        <div className="bg-black md:bg-default w-screen min-h-screen text-white">
            <Hero />
            <OurBarberShop />
            <Services />
            <Professionals />
            <Contact />
        </div>
    );
}

export default App;
