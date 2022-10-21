import React from 'react';
import kid from '../../images/kid1.png'
import { FaPencilAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { RiMentalHealthFill } from 'react-icons/ri';
import { RiUserHeartFill } from 'react-icons/ri';

const AboutVolunteer = () => {
    return (
        <div className=''>
            <div className="hero justify-end mt-20 px-2 md:px-0 lg:px-0">
                <div className="hero-content flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-start">
                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <img className='' src={kid} alt="kid" />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 pr-8'>
                        <p className='text-[#fd6711] uppercase font-medium'>About volunteer Network</p>
                        <h2 className="text-4xl font-bold">We are Make an education charity donation today</h2>
                        <p className="py-6 text-lg font-medium">Growing up in poverty, children face many challenges: hunger and health problems, limited access to education and medical services.Growing up in poverty children face many</p>
                        <hr />
                        <div className='px-8 lg:px-0'>
                            <div className='mt-6 flex items-center'>
                                <FaPencilAlt className='text-4xl lg:text-2xl mr-2 text-[#FF7044]' />
                                <p className='font-medium text-xl'>20,000 poor children education and empowered</p>
                            </div>
                            <div className='mt-6 flex items-center'>
                                <IoIosPeople className='text-2xl mr-2 text-[#FF7044]' />
                                <p className='font-medium text-xl'>42,000 children lifted from poverty</p>
                            </div>
                            <div className='mt-6 flex items-center'>
                                <RiMentalHealthFill className='text-2xl mr-2 text-[#FF7044]' />
                                <p className='font-medium text-xl'>9,000 children healthy and nourished</p>
                            </div>
                            <div className='mt-6 mb-6 flex items-center'>
                                <RiUserHeartFill className='text-2xl mr-2 text-[#FF7044]' />
                                <p className='font-medium text-xl'>Make an education charity for their bright future.</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutVolunteer;