import React from 'react';
import volunteer from '../../images/become Volunteer.jpg'

const BecomeVolunteer = () => {
    return (
        <div className='mt-16 flex flex-col lg:flex-row px-8 lg:px-14'>
            <div className='basis-1/2 pr-0 lg:pr-2'>
                <img className='rounded-lg' src={volunteer} alt="Become a volunteer" />
            </div>
            <div className='basis-1/2 pl-0 lg:pl-9'>
                <p className='text-[#fd6711] uppercase font-medium pt-6 md:pt-6 lg:pt-0'>Become a volunteer</p>
                <h2 className="text-4xl font-bold">Why We Need You</h2>
                <div tabIndex={0} className="mt-8 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Donor satisfaction is guaranteed
                    </div>
                    <div className="collapse-content">
                        <p>Web development refers to the work involved in building and developing a site for the web. The scope of work depends on the size of the website being built, and can be as simple as a landing page or as complex.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-6 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        We help nonprofits become more effective
                    </div>
                    <div className="collapse-content">
                        <p>Web development refers to the work involved in building and developing a site for the web. The scope of work depends on the size of the website being built, and can be as simple as a landing page or as complex.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-6 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Donor satisfaction is guaranteed
                    </div>
                    <div className="collapse-content">
                        <p>Web development refers to the work involved in building and developing a site for the web. The scope of work depends on the size of the website being built, and can be as simple as a landing page or as complex.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeVolunteer;