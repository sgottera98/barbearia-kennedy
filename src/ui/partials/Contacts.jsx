import { Calendar, Facebook, Instagram } from 'react-feather';

const Contact = () => {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center items-center flex-col-reverse xl:flex-row bg-default">
                <div className="p-6 xl:py-20 xl:px-16">
                    <div className="flex flex-row flex-col xl:flex-row w-full">
                        <div className="xl:w-1/2">
                            <h3 className="flex gap-4 my-4 xl:my-7">
                                Nosso Endereço{' '}
                            </h3>
                            <p>
                                R. Acácio de Moraes Terra, 960 - Jardim
                                Paulista, Itapetininga - SP, 18214-385
                            </p>
                        </div>
                        <div className="xl:w-1/2">
                            <h3 className="my-4 xl:my-7">
                                Horário de Funcionamento
                            </h3>
                            <p>Segunda à sábado - 09:00 às 19:30 </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between flex-col xl:flex-row">
                        <div className="flex gap-6 my-4 xl:my-7">
                            <a href="https://instagram.com/kennedybarber19">
                                <Instagram size={36} strokeWidth={1.7} />
                            </a>
                            <a href="https://www.facebook.com/kennedybarber19">
                                <Facebook size={36} strokeWidth={1.7} />
                            </a>
                            <a href="https://www.trinks.com/barbearia-kennedy-santos">
                                <Calendar size={36} strokeWidth={1.7} />
                            </a>
                            <a href="https://g.page/kennedybarber19?share">
                                Google
                            </a>
                        </div>
                        <div>
                            <a href="tel:+55015996856813">15 99685-6813</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
