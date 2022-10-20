import React from 'react';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#222328] justify-items-center text-white font-mont">
                <div>
                    <p>We’re curious, passionate, and <br /> committed to helping nonprofits <br /> learn and grow. Donate now!</p>
                    <button className='btn bg-[#FF7044] rounded-full text-white hover:bg-[#FFBD3E] px-8 py-2 mt-2'>Donate Now</button>
                </div>
                <div>
                    <span className="font-bold">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="font-bold">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="font-bold">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t border-base-300 bg-[#222328] text-white font-mont">
                <div className="items-center grid-flow-col">
                    <AiFillCopyrightCircle className='text-4xl' />
                    <p>Khan Mohammad Imran</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 pr-8">
                        <p>Follow me on</p>
                        <AiFillGithub className='text-2xl' />
                        <AiFillLinkedin className='text-2xl' />
                        <BsFacebook className='text-2xl' />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;