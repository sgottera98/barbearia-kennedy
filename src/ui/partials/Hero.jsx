import BarbershopImage from '../../assets/barbershop.jpg';
import Barbearia from '../../assets/Barbearia.jpg';
import Equipe from '../../assets/equipe.jpg';

const Hero = () => {
    return (
        <section className="bg-neutral-black container mx-auto px-2 xl:px-48 pb-4 pt-20 xl:pt-28">
            <div className="flex justify-center items-center flex-col-reverse xl:flex-row rounded-b-lg">
                <div className="xl:w-2/3 p-6 xl:py-20 xl:px-16" data-aos="fade-right" data-aos-delay="200">
                    <h1>Barbearia Kennedy</h1>
                    <p>
                        Bem-vindo à Barbearia Kennedy, onde fornecemos o melhor
                        serviço de barbearia. De cortes de
                        cabelo modernos e estilosos a barbas bem cuidadas, temos
                        tudo para garantir que você saia daqui se sentindo
                        confiante e pronto para enfrentar o mundo.
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    className="w-full xl:w-1/3 xl:m-4 overflow-hidden h-[75vh]"
                >
                    <img
                        src={Equipe}
                        alt=""
                        className="w-full h-full object-cover xl:rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
