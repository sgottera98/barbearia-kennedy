import "./App.scss";
import Hero from "./ui/partials/Hero";
import Services from "./ui/partials/services";
import Professionals from "./ui/partials/Professionals";
import OurBarberShop from "./ui/partials/OurBarberShop";

function App() {
  return (
    <div className="bg-black w-screen min-h-screen text-white">
      <div className="xl:bg-default">
        <Hero />
        <OurBarberShop />
      </div>
      <Services />
      <Professionals />
    </div>
  );
}

export default App;
