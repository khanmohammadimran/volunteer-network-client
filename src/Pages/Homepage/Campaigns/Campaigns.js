import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import education from '../../../images/slider/education.jpg'
import agriculture from '../../../images/slider/agriculture.jpg'
import food from '../../../images/slider/food.jpg'
import garbage from '../../../images/slider/Garbage.jpg'
import help from '../../../images/slider/help.jpg'
import medicine from '../../../images/slider/medical.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Campaigns.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Campaigns = () => {
    return (
        <div className='px-14 font-mont'>
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={education} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">education</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">Education is the best gift</h3>
                            </div>
                            <p className="mb-3 font-medium">We mainly teach children aged between 6-14 years. Typical subjects taught include English, Maths and many more.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={agriculture} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">agriculture</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">Guide them in farming</h3>
                            </div>
                            <p className="mb-3 font-medium">Agriculture is one of the oldest and most essential industries in the world. We help them grow their farming</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={food} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">food</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">We provide free meals</h3>
                            </div>
                            <p className="mb-3 font-medium">We know the pain of not having food on the table. Therefore, I'm determined to help the needy.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={garbage} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">cleanup</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">The ocean cleanup</h3>
                            </div>
                            <p className="mb-3 font-medium">Beach cleanup projects protect our aquatic ecosystems from the harmful effects of pollution.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={help} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">community</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">Help community to rise</h3>
                            </div>
                            <p className="mb-3 font-medium">Our mission is to help small communities to rise out of poverty. We provide food, clothes.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={medicine} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">healthcare</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">Health care for unprivileged</h3>
                            </div>
                            <p className="mb-3 font-medium">We Contribute to developing healthcare services and basic education in schools and communities.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Campaigns;