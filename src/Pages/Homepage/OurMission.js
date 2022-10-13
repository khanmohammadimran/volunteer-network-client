import React from 'react';

const OurMission = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row mt-20 px-14 font-mont'>
            <div className='basis-1/2'>
                <p className='text-[#fd6711] uppercase font-medium'>Our Mission</p>
                <h2 className="text-4xl font-bold">Every child deserves the opportunity to learn.</h2>
                <p className="py-6 font-medium">When young people want to tell their story, we listen. These young people still believe in a better tomorrow. They know they can break free from those who <br />This is the impact you helped us achieve in 2020-21 lorem ipsum is simply free text dolor sit amet, consec tetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='basis-1/2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    <div className='bg-[#d9edee] rounded-md p-4 text-center'>
                        <p className='text-7xl font-medium'>89%</p>
                        <p className='text-xl font-medium'>Program expenditure</p>
                    </div>
                    <div className='bg-[#f8f2ef] rounded-md p-4 text-center'>
                        <p className='text-7xl font-medium'>95%</p>
                        <p className='text-xl font-medium'>Save the children</p>
                    </div>
                </div>
                <ul>
                    <li>Ut nec venenatis mauris, vitae accumsan nunc</li>
                    <li>Fundraise or host an event lorem ipsum dolor sit amet constur adipisicing elit</li>
                    <li>Some 500 million children have had no access to distance learning.</li>
                </ul>
            </div>
        </div>
    );
};

export default OurMission;