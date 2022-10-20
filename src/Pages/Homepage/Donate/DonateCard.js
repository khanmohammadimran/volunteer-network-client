import React from 'react';
import './DonateCard.css'

const Donate = () => {
    return (
        <div className='px-8 md:px-12 lg:px-12 font-mont'>
            <div class="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div class=" bg-[url('/src/images/help.jpeg')] bg-no-repeat bg-cover bg-center shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="w-full image-cover rounded-t-md" >
                            <div class="p-2 m-4 w-16 h-16 text-center bg-[#434141] rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-base tracking-wide  font-bold border-b border-white "> 12</span>
                                <span class="text-xs tracking-wide font-bold uppercase block ">April</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl text-white tracking-wider leading-relaxed ">Rescue, save, love</span>
                        <div class="pt-8 text-center">
                            <button className="font-mont px-12 py-3 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</button>
                        </div>
                    </div>
                </div>
                <div class=" bg-[url('/src/images/africa-help.jpg')] bg-no-repeat bg-cover bg-center shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="w-full image-cover rounded-t-md" >
                            <div class="p-2 m-4 w-16 h-16 text-center bg-[#434141] rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-base tracking-wide  font-bold border-b border-white "> 12</span>
                                <span class="text-xs tracking-wide font-bold uppercase block ">April</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl text-white tracking-wider leading-relaxed ">Children in Africa</span>
                        <div class="pt-8 text-center">
                            <button className="font-mont px-12 py-3 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</button>
                        </div>
                    </div>
                </div>
                <div class=" bg-[url('/src/images/gift-edu.jpg')] bg-no-repeat bg-cover bg-center shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="w-full image-cover rounded-t-md" >
                            <div class="p-2 m-4 w-16 h-16 text-center bg-[#434141] rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-base tracking-wide  font-bold border-b border-white "> 12</span>
                                <span class="text-xs tracking-wide font-bold uppercase block ">April</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl text-white tracking-wider leading-relaxed ">Little Help</span>
                        <div class="pt-8 text-center">
                            <button className="font-mont px-12 py-3 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;