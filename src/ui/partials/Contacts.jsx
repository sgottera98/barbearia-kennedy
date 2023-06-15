import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaGoogle,
    FaCalendar,
    FaPhone,
} from 'react-icons/fa';
import Button from '../components/Button/Button';

const Contact = () => {
    return (
        <section className="bg-default">
            <div className="container mx-auto pb-8 px-2 xl:px-48 flex justify-center items-center flex-col-reverse xl:flex-row">
                <div className="p-6 xl:px-16 xl:py-20 w-full">
                    <div className="flex flex-col xl:flex-row mb-12 xl:mb-24 gap-8 xl:gap-16">
                        <div className="xl:w-1/2">
                            <h3 className="flex gap-4 my-4 xl:my-7 xl:text-4xl">
                                Nosso Endereço
                            </h3>
                            <p className="my-4 xl:my-7">
                                R. Acácio de Moraes Terra, 960 - Jardim
                                Paulista, Itapetininga - SP, 18214-385
                            </p>
                            <Button dataAos="fade-right">Como chegar</Button>
                        </div>

                        <div className="xl:w-1/2">
                            <h3 className="my-4 xl:my-7 xl:text-4xl">
                                Horário de Funcionamento
                            </h3>
                            <p className="my-4 xl:my-7">
                                Segunda à sábado - 09:00 às 19:30{' '}
                            </p>
                            <Button dataAos="fade-right" dataAosDelay="200" >Agende um horário</Button>
                        </div>
                    </div>

                    <div className="flex items-center flex-col xl:flex-row w-full gap-8 xl:gap-16">
                        <div className="flex flex-wrap justify-start items-center gap-6 my-4 xl:my-7 w-full xl:w-1/2">
                            <a href="" className="zoom-effect">
                                <FaWhatsapp className="text-2xl xl:text-4xl" />
                            </a>
                            <a
                                href="https://instagram.com/kennedybarber19"
                                className="zoom-effect"
                            >
                                <FaInstagram className="text-2xl xl:text-4xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/kennedybarber19"
                                className="zoom-effect"
                            >
                                <FaFacebook className="text-2xl xl:text-4xl" />
                            </a>
                            <a
                                href="https://g.page/kennedybarber19?share"
                                className="zoom-effect"
                            >
                                <FaGoogle className="text-2xl xl:text-4xl" />
                            </a>
                            <a
                                href="https://www.trinks.com/barbearia-kennedy-santos"
                                className="zoom-effect"
                            >
                                <FaCalendar className="text-2xl xl:text-4xl" />
                            </a>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <a
                                href="tel:+55015996856813"
                                className="flex items-center gap-6"
                            >
                                <FaPhone className="zoom-effect text-2xl xl:text-4xl" />
                                +55 15 99685-6813
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
