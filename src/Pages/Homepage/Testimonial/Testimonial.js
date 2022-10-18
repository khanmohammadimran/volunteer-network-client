import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";
// import help from '../../../images/help.jpeg'
import { Autoplay, Pagination } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='font-mont w-full md:w-9/12 lg:w-9/12 mx-auto'>
            <h2 className="text-4xl font-bold text-center">What people say about us</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <p className='bg-[#fff3f3] rounded-lg p-4 shadow-lg'><FaQuoteLeft className='text-4xl inline-block text-[#434141]' />Thapa: You know sometimes when I'm talking, my words can't keep up with my thoughts ...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.<FaQuoteRight className='text-4xl inline-block text-[#434141]' /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p className='bg-[#fff3f3] rounded-lg p-4 shadow-lg'><FaQuoteLeft className='text-4xl inline-block text-[#434141]' />Thapa: You know sometimes when I'm talking, my words can't keep up with my thoughts ...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.<FaQuoteRight className='text-4xl inline-block text-[#434141]' /></p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;