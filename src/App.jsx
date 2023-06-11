import './App.scss';
import Hero from './ui/partials/hero';
import Services from './ui/partials/services';
import Professionals from './ui/partials/Professionals';

function App() {
    return (
        <>
            <div className="bg-black w-screen min-h-screen text-white">
                <Hero/>
                <Services />
                <Professionals />
            </div>
        </>
    );
}

export default App;
