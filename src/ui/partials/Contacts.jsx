import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt,
    FaCalendar,
    FaPhone,
} from 'react-icons/fa';
import Button from '../components/Button/Button';

const Contact = () => {
    return (
        <section className="bg-default xl:text-xl">
            <div className="container mx-auto pb-8 px-2 xl:px-48 flex justify-center items-center flex-col-reverse xl:flex-row">
                <div className="p-6 xl:px-16 xl:py-20 w-full">
                    <div className="flex flex-col xl:flex-row mb-12 xl:mb-24 gap-8 xl:gap-16">
                        <div className="xl:w-1/2">
                            <h3 className="flex gap-4 my-4 xl:my-7 xl:text-4xl">
                                Nosso Endereço
                            </h3>
                            <p className="my-4 xl:mt-7 xl:mb-9">
                                R. Acácio de Moraes Terra, 960 - Jardim
                                Paulista, Itapetininga - SP, 18214-385
                            </p>
                            <Button
                                anchor={true}
                                href="https://g.page/kennedybarber19?share"
                                target="_blank"
                                dataAos="fade-right"
                            >
                                <span className="flex items-center gap-4">
                                    Como chegar
                                    <FaMapMarkerAlt />
                                </span>
                            </Button>
                        </div>

                        <div className="xl:w-1/2">
                            <h3 className="my-4 xl:my-7 xl:text-4xl">
                                Horário de Funcionamento
                            </h3>
                            <p className="my-4 xl:mt-7 xl:mb-9">
                                Segunda à sábado - 09:00 às 19:30{' '}
                            </p>
                            <Button
                                anchor={true}
                                href="https://www.trinks.com/barbearia-kennedy-santos"
                                target="_blank"
                                dataAos="fade-right"
                            >
                                <span className="flex items-center gap-4">
                                    Agende um horário
                                    <FaCalendar />
                                </span>
                            </Button>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center flex-col xl:flex-row w-full xl:gap-16">
                        <div className="flex flex-wrap justify-start items-center gap-6 xl:gap-8 my-7 w-full xl:w-1/2">
                            <a
                                href="https://api.whatsapp.com/send?phone=5515996856813"
                                target="_blank"
                                className="zoom-effect"
                                rel="noreferrer"
                            >
                                <FaWhatsapp className="text-4xl xl:text-5xl hover:text-whatsapp" />
                            </a>
                            <a
                                href="https://instagram.com/kennedybarber19"
                                target="_blank"
                                className="zoom-effect"
                                rel="noreferrer"
                            >
                                <FaInstagram className="text-4xl xl:text-5xl hover:text-instagram" />
                            </a>
                            <a
                                href="https://www.facebook.com/kennedybarber19"
                                target="_blank"
                                className="zoom-effect"
                                rel="noreferrer"
                            >
                                <FaFacebook className="text-4xl xl:text-5xl hover:text-facebook" />
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
