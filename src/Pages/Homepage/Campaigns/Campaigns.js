import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import education from '../../../images/slider/education.jpg'
import agriculture from '../../../images/slider/agriculture.jpg'
import food from '../../../images/slider/food.jpg'
import garbage from '../../../images/slider/Garbage.jpg'
import help from '../../../images/slider/help.jpg'
import medicine from '../../../images/slider/medical.jpg'
import './Campaigns.css'

const Campaigns = () => {

    const settings = {
        // Autoplay 
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",

        // dots: true,
        // infinite: false,
        // speed: 500,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='mt-8 font-mont'>
            <div className='text-center'>
                <p className='text-[#fd6711] uppercase font-medium'>We Help Around The World</p>
                <h2 className="text-4xl font-bold mb-4">Introduce to Our Campagins</h2>
            </div>
            <div className="w-11/12 mx-auto mt-9">
                <Slider {...settings}>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <img src={education} alt="" className="rounded-lg" />
                            <div className="badge badge-primary mt-4">education</div>
                        </div>
                        <div className="px-5">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">Education is the best gift</h3>
                            </div>
                            <p className="mb-3 font-medium">We mainly teach children aged between 6-14 years. Typical subjects taught include English, Maths and many more subject.</p>
                        </div>
                    </div>
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
                </Slider>
            </div>
        </div>
    );
};

export default Campaigns;