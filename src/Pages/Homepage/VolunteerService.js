import React, { useEffect, useState } from 'react';

const VolunteerService = () => {
    const [volunteers, setVolunteers] = useState([])


    useEffect(() => {
        fetch('volunteer.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center justify-center mt-8 px-14'>
            {
                volunteers.map(volunteer =>
                    <div key={volunteer.id} className="w-80 md:w-72 lg:w-72">
                        <div className=''>
                            <div>
                                <img src={volunteer.img} className="" alt="" />
                            </div>
                            {
                                volunteer.color === "yellow" ? <div className='flex justify-center items-center rounded-b-lg text-white h-20 bg-[#FFBD3E]'>
                                    <h2 className='text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : volunteer.color === "Brick" ? <div className='flex justify-center items-center rounded-b-lg text-white h-20 bg-[#FF7044]'>
                                    <h2 className='text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : volunteer.color === "Sky" ? <div className='flex justify-center items-center rounded-b-lg text-white h-20 bg-[#3F90FC]'>
                                    <h2 className='text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : volunteer.color === "Violet" ? <div className='flex justify-center items-center rounded-b-lg text-white h-20 bg-[#421FCF]'>
                                    <h2 className='text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : <div className='flex justify-center items-center rounded-b-lg text-white h-20 bg-slate-600'>
                                    <h2 className='text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default VolunteerService;