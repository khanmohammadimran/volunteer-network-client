import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-around  items-center bg-[#d9edee] h-60 md:h-44 lg:h-44'>
            <div className='my-4'>
                <h2 className='font-mont font-bold text-4xl text-center px-2 md:px-0 lg:px-0'>Subscribe and receive weekly our newsletter</h2>
            </div>
            <div className='my-4'>
                <button className="font-mont px-8 py-2 text-xl bg-[#434141] rounded-full text-white hover:bg-[#313030]">Subscribe Now</button>
            </div>
        </div>
    );
};

export default Subscribe;