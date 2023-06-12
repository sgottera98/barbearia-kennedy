import './App.scss';
import Hero from './ui/partials/hero';
import OurBarbershop from './ui/partials/OurBarbershop';
import Services from './ui/partials/services';
import Professionals from './ui/partials/Professionals';

function App() {
    return (
        <>
            <div className="bg-default w-screen min-h-screen text-white">
                <Hero />
                <OurBarbershop />
                <Services />
                <Professionals />
            </div>
        </>
    );
}

export default App;
