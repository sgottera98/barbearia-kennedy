import BarbershopImage from '../../assets/barbershop.jpg';

const Hero = () => {
    return (
        <section className="container mx-auto px-5 md:px-16 flex justify-center items-center">
            <div className="md:w-1/2 md:py-20 md:px-16">
                <h2>Barbearia Kennedy</h2>
                <p>
                    Bem-vindo à Barbearia Kennedy, onde fornecemos o melhor
                    serviço de barbearia para homens da cidade. De cortes de
                    cabelo modernos e estilosos a barbas bem cuidadas, temos
                    tudo para garantir que você saia daqui se sentindo confiante
                    e pronto para enfrentar o mundo.
                </p>
            </div>
            <div className="md:w-1/2 m-4 h-full">
                <img src={BarbershopImage} alt="" className='h-full object-cover'/>
            </div>
        </section>
    );
};

export default Hero;
