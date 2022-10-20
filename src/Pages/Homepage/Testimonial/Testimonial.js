import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.module.css";
import { Autoplay, Pagination } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import person from '../../../images/img-07.jpg'

const Testimonial = () => {
    return (
        <div className='font-mont w-full md:w-9/12 lg:w-9/12 mx-auto my-8'>
            <h2 className="text-4xl font-bold text-center">What people say about us</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div>
                            <p className='bg-[#fcfcfc] rounded-lg p-4 shadow-lg'><FaQuoteLeft className='text-4xl inline-block text-[#ccd4fa] mr-2' />I really had a great experience and I also got to learn new things. I do miss the interaction that happens during the on-ground training, but the virtual training is the need Of the hour so it must be done. Looking forward to the next upcoming sessions.<FaQuoteRight className='ml-2 text-4xl inline-block text-[#ccd4fa]' /></p>
                        </div>
                        <AiOutlineCaretDown className='text-6xl text-[#ccd4fa] mx-auto -mt-[18px]' />
                        <div className='w-24 mx-auto'>
                            <img class="w-24 rounded-full outline outline-offset-2 outline-[#ccd4fa]" src={person} alt="" width="384" height="512" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <p className='bg-[#fcfcfc] rounded-lg p-4 shadow-lg'><FaQuoteLeft className='text-4xl inline-block text-[#ccd4fa] mr-2' />I really had a great experience and I also got to learn new things. I do miss the interaction that happens during the on-ground training, but the virtual training is the need Of the hour so it must be done. Looking forward to the next upcoming sessions.<FaQuoteRight className='ml-2 text-4xl inline-block text-[#ccd4fa]' /></p>
                        </div>
                        <AiOutlineCaretDown className='text-6xl text-[#ccd4fa] mx-auto -mt-[18px]' />
                        <div className='w-24 mx-auto'>
                            <img class="w-24 rounded-full outline outline-offset-2 outline-[#ccd4fa]" src={person} alt="" width="384" height="512" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <p className='bg-[#fcfcfc] rounded-lg p-4 shadow-lg'><FaQuoteLeft className='text-4xl inline-block text-[#ccd4fa] mr-2' />I really had a great experience and I also got to learn new things. I do miss the interaction that happens during the on-ground training, but the virtual training is the need Of the hour so it must be done. Looking forward to the next upcoming sessions.<FaQuoteRight className='ml-2 text-4xl inline-block text-[#ccd4fa]' /></p>
                        </div>
                        <AiOutlineCaretDown className='text-6xl text-[#ccd4fa] mx-auto -mt-[18px]' />
                        <div className='w-24 mx-auto'>
                            <img class="w-24 rounded-full outline outline-offset-2 outline-[#ccd4fa]" src={person} alt="" width="384" height="512" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <p className='bg-[#fcfcfc] rounded-lg p-4 shadow-lg'><FaQuoteLeft className='text-4xl inline-block text-[#ccd4fa] mr-2' />I really had a great experience and I also got to learn new things. I do miss the interaction that happens during the on-ground training, but the virtual training is the need Of the hour so it must be done. Looking forward to the next upcoming sessions.<FaQuoteRight className='ml-2 text-4xl inline-block text-[#ccd4fa]' /></p>
                        </div>
                        <AiOutlineCaretDown className='text-6xl text-[#ccd4fa] mx-auto -mt-[18px]' />
                        <div className='w-24 mx-auto'>
                            <img class="w-24 rounded-full outline outline-offset-2 outline-[#ccd4fa]" src={person} alt="" width="384" height="512" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;