import Shave from '../../assets/shave.jpg';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const Professionals = ()=> {
    return (
        <section className="container mx-auto px-5 md:px-16 flex justify-center items-center h-screen">
            <div className="rounded-lg h-screen md:w-1/2 max-h-sm md:py-20 md:px-16">
                <img className='h-full object-cover rounded-lg' src={Shave} alt="" />
            </div>
            <div className="md:w-1/2 m-4 h-1/2 flex items-center">
                <Swiper
                direction={"vertical"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{clickable: true,}}
                modules={[Pagination]}
                className='w-full h-screen'
                >
                    <SwiperSlide className='text-white flex flex items-center justify-center'>
                        <div className='max-w-md mx-auto bg-black bg-opacity-50 rounded-lg shadow-2xl flex flex-col justify-center items-center'>
                            <p className='my-4'>Temos os melhores!</p>
                            <p className='my-4 mx-4'>Cada membro da nossa equipe é treinado profissionalmente e tem anos de experiência na indústria da barbearia.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-white flex flex items-center justify-center'>
                        <div className='max-w-md mx-auto bg-black bg-opacity-50 rounded-lg shadow-2xl flex flex-col justify-center items-center'>
                            <p className='my-4'>Temos os melhores!</p>
                            <p className='my-4 mx-4'>Cada membro da nossa equipe é treinado profissionalmente e tem anos de experiência na indústria da barbearia.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-white flex flex items-center justify-center'>
                        <div className='max-w-md mx-auto bg-black bg-opacity-50 rounded-lg shadow-2xl flex flex-col justify-center items-center'>
                            <p className='my-4'>Temos os melhores!</p>
                            <p className='my-4 mx-4'>Cada membro da nossa equipe é treinado profissionalmente e tem anos de experiência na indústria da barbearia.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Professionals;