import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Comment from '../components/Comment';

const Comments = () => {
    return (
        <section className="bg-neutral-black h-96 mb-4">
            <div className="container mx-auto p-6 xl:px-16 h-full">
                <div className="px-2 xl:px-48 flex h-full flex-col xl:flex-row gap-6">
                    <h2 className="text-black font-semibold  mb-0">
                        Comentários
                    </h2>
                    <Swiper
                        effect={'fade'}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[EffectFade, Autoplay, Pagination]}
                        className="swiper-comments h-full w-full"
                    >
                        <SwiperSlide className="flex flex-col w-full justify-center items-center bg-default rounded-lg p-6 pb-10">
                            <Comment>
                                Ótimo atendimento, lugar limpo e organizado,
                                funcionários simpáticos e profissionais no que
                                fazem. Super recomendo 👏👏 …
                            </Comment>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col w-full justify-center items-center bg-default rounded-lg p-6 pb-10">
                            <Comment>
                                Ótimo atendimento excelente super recomendo..
                            </Comment>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col w-full justify-center items-center bg-default rounded-lg p-6 pb-10">
                            <Comment>
                                Atendimento excelente, funcionários muitos
                                simpáticos, trabalho de extrema qualidade.
                            </Comment>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col w-full justify-center items-center bg-default rounded-lg p-6 pb-10">
                            <Comment>
                                Excelente lugar e atendimento 5 estrelas
                            </Comment>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Comments;
