import React from 'react';

const Header = () => {
    return (
        <div className="bg-[url('/src/images/banner.png')] -mt-28">
            <div className='pt-44 pb-24 px-2 md:px-0 lg:px-0'>
                <h1 className='uppercase font-bold text-4xl text-center mt-20'>I grow by helping people in need.</h1>
                <div className='mt-6 text-center'>
                    <input type="text" placeholder='Search...' className='py-4 pl-4 w-11/12 md:w-96 lg:w-96 border border-[#D6D6D6] rounded-l-lg' />
                    <button className='bg-[#3F90FC] px-8 py-4 mt-2 md:mt-0 lg:mt-0 md:rounded-r-lg lg:rounded-r-lg text-white border border-[#3F90FC] hover:bg-violet-600 hover:border-violet-600'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;