import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Campaigns.css";

// import required modules
import { Autoplay, Pagination } from "swiper";




const Campaigns = () => {
    const [Campaigns, setCampaigns] = useState([])

    useEffect(() => {
        fetch('campaign.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])





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
                {
                    Campaigns.map(campaign => <SwiperSlide key={campaign.id}>
                        <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5">
                                <img src={campaign.img} alt="" className="rounded-lg" />
                                <div className="badge badge-primary mt-4">{campaign.badge}</div>
                            </div>
                            <div className="px-5">
                                <div>
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight">{campaign.name}</h3>
                                </div>
                                <p className="mb-3 font-medium">{campaign.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Campaigns;