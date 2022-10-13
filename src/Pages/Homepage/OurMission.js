import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { BsCheck2Circle } from 'react-icons/bs';

const OurMission = () => {
    const [realTimeCount, setRealTimeCount] = useState(false)
    return (
        <div className='flex flex-col md:flex-row lg:flex-row mt-20 px-14 font-mont'>
            <div className='basis-1/2'>
                <p className='text-[#fd6711] uppercase font-medium'>Our Mission</p>
                <h2 className="text-4xl font-bold">Every child deserves the opportunity to learn.</h2>
                <p className="py-6 text-lg font-medium pr-2 md:pr-8 lg:pr-8">When young people want to tell their story, we listen. These young people still believe in a better tomorrow. They know they can break free from those who <br /> <br /> This is the impact you helped us achieve in 2020-21 lorem ipsum is simply free text dolor sit amet, consec tetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className='basis-1/2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    <ScrollTrigger onEnter={() => setRealTimeCount(true)} onExit={() => setRealTimeCount(false)}>
                        <div className='bg-[#d9edee] rounded-md p-4 text-center'>
                            {realTimeCount && <CountUp start={0} end={89} delay={0} className='text-7xl font-medium' />}
                            <span className='text-7xl font-medium'>%</span>
                            <p className='text-xl font-medium'>Program expenditure</p>
                        </div>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={() => setRealTimeCount(true)} onExit={() => setRealTimeCount(false)}>
                        <div className='bg-[#f8f2ef] rounded-md p-4 text-center'>
                            {realTimeCount && <CountUp start={0} end={95} delay={0} className='text-7xl font-medium' />}
                            <span className='text-7xl font-medium'>%</span>
                            <p className='text-xl font-medium'>Save the children</p>
                        </div>
                    </ScrollTrigger>
                </div>
                <div className='pt-4 text-xl font-medium'>
                    <div className='mt-6 flex items-center'>
                        <BsCheck2Circle className='text-3xl mr-2 text-[#FF7044]' />
                        <p className='font-medium text-xl'>Ut nec venenatis mauris, vitae accumsan nunc</p>
                    </div>
                    <div className='mt-6 flex items-center'>
                        <BsCheck2Circle className='text-3xl mr-2 text-[#FF7044]' />
                        <p className='font-medium text-xl'>Fundraise or host an event lorem ipsum dolor sit</p>
                    </div>
                    <div className='mt-6 flex items-center'>
                        <BsCheck2Circle className='text-3xl mr-2 text-[#FF7044]' />
                        <p className='font-medium text-xl'>Some 500 million children have had no access.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;