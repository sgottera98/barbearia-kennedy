import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import React from 'react';

const Comments = () => {
    return (
        <section className='bg-image'>
            <div className="bg-gradient mx-auto px-5 md:px-16r flex h-screen">
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, }}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className='my-swiper'
                >
                    <SwiperSlide className='flex justify-center items-center'>Slide 1</SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center'>Slide 2</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Comments;