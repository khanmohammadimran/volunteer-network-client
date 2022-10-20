import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-around  items-center bg-[#222328] h-60 md:h-44 lg:h-44'>
            <div className='my-4'>
                <h2 className='font-mont font-bold text-white text-4xl text-center px-6 md:px-0 lg:px-0'>Subscribe and receive weekly our newsletter</h2>
            </div>
            <div className='my-4'>
                <button className="font-mont px-8 py-2 text-xl bg-white rounded-full hover:bg-[#222328] hover:border-2 border-[#ffffff] hover:text-white">Subscribe Now</button>
            </div>
        </div>
    );
};

export default Subscribe;