import './App.scss'
import Hero from './ui/partials/hero';
import Services from './ui/partials/services';
import Professionals from './ui/partials/Professionals';

function App() {

  return (
    <>
      <div className="bg-default w-screen h-screen text-white">
        <Hero/>
      </div>
      <div className="bg-image w-screen h-auto text-white">
        <div className='bg-default bg-opacity-80'>
          <Services/>
        </div>
      </div>
      <div className="bg-default to-black w-screen h-auto text-white">
          <Professionals/>
      </div>
    </>
  )
}

export default App
