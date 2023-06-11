import Shave from '../../assets/shave.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const Professionals = () => {
    return (
        <section className='bg-image'>
            <div className="bg-gradient-left px-5 md:px-16 flex justify-end items-center h-screen">
                <div className="md:w-1/2 m-4 h-1/2 flex items-center">
                    <Swiper
                        direction={"vertical"}
                        autoplay={{delay: 5000,}}
                        loop={true}
                        pagination={{ clickable: true, }}
                        modules={[Pagination, Autoplay]}
                        className='w-full h-screen'
                    >
                        <SwiperSlide className='text-white flex flex items-center justify-center'>
                            <div className='max-w-md mx-4 flex flex-col justify-center items-center text-start'>
                                <p className='w-full'>Temos os melhores</p>
                                <p className='my-4'>Cada membro da nossa equipe é treinado profissionalmente e tem anos de experiência na indústria da barbearia.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex items-center justify-center'>
                            <div className='max-w-md mx-4 flex flex-col justify-center items-center text-start'>
                                <p className='w-full'>Conhecimento técnico</p>
                                <p className='my-4'>Nossos profissionais estão sempre aprendendo e acompanhando as últimas tendências em tratamentos masculinos e técnicas modernas de barbear.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex items-center justify-center'>
                            <div className='max-w-md mx-4 flex flex-col justify-center items-center text-start'>
                                <p className='w-full'>Atendimento personalizado</p>
                                <p className='my-4'>Trabalhamos para fornecer a cada cliente o melhor atendimento e tratamento possível. Nos preocupamos com a sua satisfação e para isso estamos sempre prontos para ouví-lo e garantir um serviço personalizado.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Professionals;