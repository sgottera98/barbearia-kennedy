import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Professionals = () => {
    return (
        <section className="bg-image">
            <div className="bg-gradient-left px-5 xl:px-16 flex justify-center xl:justify-end items-center h-screen">
                <div className="w-full md:w-1/2 m-4 md:h-1/2 flex items-center bg-neutral-black bg-opacity-50 xl:bg-transparent">
                    <Swiper
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className="w-full"
                    >
                        <SwiperSlide className="text-white flex items-center justify-center w-full py-4">
                            <div className="mx-4 flex flex-col justify-center items-center text-start">
                                <h3 className="w-full text-yellow">
                                    Temos os melhores
                                </h3>
                                <p className="my-4">
                                    Cada membro da nossa equipe é treinado
                                    profissionalmente e tem anos de experiência
                                    na indústria da barbearia.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-white flex items-center justify-center w-full py-4">
                            <div className="mx-4 flex flex-col justify-center items-center text-start">
                                <h3 className="w-full text-yellow">
                                    Conhecimento técnico
                                </h3>
                                <p className="my-4">
                                    Nossos profissionais estão sempre aprendendo
                                    e acompanhando as últimas tendências em
                                    tratamentos masculinos e técnicas modernas
                                    de barbear.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-white flex items-center justify-center w-full py-4">
                            <div className="mx-4 flex flex-col justify-center items-center text-start">
                                <h3 className="w-full text-yellow">
                                    Atendimento personalizado
                                </h3>
                                <p className="my-4">
                                    Trabalhamos para fornecer a cada cliente o
                                    melhor atendimento e tratamento possível.
                                    Nos preocupamos com a sua satisfação e para
                                    isso estamos sempre prontos para ouví-lo e
                                    garantir um serviço personalizado.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Professionals;
