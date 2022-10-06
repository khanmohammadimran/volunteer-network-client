import React, { useEffect, useState } from 'react';

const VolunteerService = () => {
    const [volunteers, setVolunteers] = useState([])


    useEffect(() => {
        fetch('volunteer.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div className='grid grid-rows-1 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center'>
            {
                volunteers.map(volunteer => <div className=''>
                    <div key={volunteer.id} className="w-72">
                        <div className='w-72'>
                            <div className=''>
                                <img src={volunteer.img} className="" alt="" />
                            </div>
                            {
                                volunteer.color === "yellow" ? <div className='py-4 bg-[#FFBD3E]'>
                                    <h2 className='font-mont text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : volunteer.color === "Brick" ? <div className='py-4 bg-[#FF7044]'>
                                    <h2 className='font-mont text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : volunteer.color === "Sky" ? <div className='py-4 bg-[#3F90FC]'>
                                    <h2 className='font-mont text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : volunteer.color === "Violet" ? <div className='py-4 bg-[#421FCF]'>
                                    <h2 className='font-mont text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div> : <div className='py-4 bg-slate-600'>
                                    <h2 className='font-mont text-xl text-center font-semibold'>{volunteer.name}</h2>
                                </div>
                            }

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default VolunteerService;