import Shaving from '../../assets/shaving.jpg';

const Services = () => {
    return (
        <section className="container mx-auto px-5 md:px-16 flex justify-center items-center flex-col h-full w-full">
            <h2>Serviços</h2>
            <div className='flex flex-col mb-10 md:flex-row'>
                <div className="max-w-sm rounded-b-lg overflow-hidden shadow-lg m-4 zoom-effect bg-yellow">
                    <img className="w-full relative rounded-br-full" src={Shaving} alt="Card Image" />
                    <div className="px-6 py-6 text-black">
                        <div className="font-bold text-xl mb-2">Corte de Cabelo</div>
                        <ul>
                            <li>Corte de cabelo classico</li>
                            <li>Corte de cabelo infantil</li>
                            <li>Corte de cabelo moderno</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-sm rounded-b-lg overflow-hidden shadow-lg m-4  zoom-effect bg-yellow">
                    <img className="w-full relative rounded-b-full" src={Shaving} alt="Card Image" />
                    <div className="px-6 py-6 text-black">
                        <div className="font-bold text-xl mb-2">Barba</div>
                        <ul>
                            <li>Design de barba</li>
                            <li>Barba com tesoura e navalha</li>
                            <li>Barba com toalha quente</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-sm rounded-b-lg overflow-hidden shadow-lg m-4  zoom-effect bg-yellow">
                    <img className="w-full relative rounded-bl-full" src={Shaving} alt="Card Image" />
                    <div className="px-6 py-6 text-black">
                        <div className="font-bold text-xl mb-2">Tratamentos de Cabelo</div>
                        <ul>
                            <li>Hidratação</li>
                            <li>Tonalização</li>
                            <li>Reparação</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;