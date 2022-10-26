import React from 'react';
import './DonateCard.css'

const Donate = () => {
    return (
        <div className='px-8 md:px-12 lg:px-12'>
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className=" bg-[url('/src/images/help.jpeg')] bg-no-repeat bg-cover bg-center shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div className="w-full image-cover rounded-t-md" >
                            <div className="p-2 m-4 w-16 h-16 text-center bg-[#434141] rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span className="text-base tracking-wide  font-bold border-b border-white "> 12</span>
                                <span className="text-xs tracking-wide font-bold uppercase block ">April</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span className="text-3xl text-white tracking-wider leading-relaxed ">Rescue, save, love</span>
                        <div className="pt-8 text-center">
                            <button className=" px-12 py-3 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</button>
                        </div>
                    </div>
                </div>
                <div className=" bg-[url('/src/images/africa-help.jpg')] bg-no-repeat bg-cover bg-center shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div className="w-full image-cover rounded-t-md" >
                            <div className="p-2 m-4 w-16 h-16 text-center bg-[#434141] rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span className="text-base tracking-wide  font-bold border-b border-white "> 12</span>
                                <span className="text-xs tracking-wide font-bold uppercase block ">April</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span className="text-3xl text-white tracking-wider leading-relaxed ">Children in Africa</span>
                        <div className="pt-8 text-center">
                            <button className=" px-12 py-3 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</button>
                        </div>
                    </div>
                </div>
                <div className=" bg-[url('/src/images/gift-edu.jpg')] bg-no-repeat bg-cover bg-center shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div className="w-full image-cover rounded-t-md" >
                            <div className="p-2 m-4 w-16 h-16 text-center bg-[#434141] rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span className="text-base tracking-wide  font-bold border-b border-white "> 12</span>
                                <span className="text-xs tracking-wide font-bold uppercase block ">April</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span className="text-3xl text-white tracking-wider leading-relaxed ">Little Help</span>
                        <div className="pt-8 text-center">
                            <button className=" px-12 py-3 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;