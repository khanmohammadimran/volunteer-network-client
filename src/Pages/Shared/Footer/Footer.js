import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#222328] justify-items-center text-white">
                <div>
                    <p>We’re curious, passionate, and <br /> committed to helping nonprofits <br /> learn and grow. Donate now!</p>
                    <button className='btn bg-[#FF7044] rounded-full text-white hover:bg-[#FFBD3E] px-8 py-2 mt-2'>Donate Now</button>
                </div>
                <div>
                    <span className="font-bold">Services</span>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span className="font-bold">Company</span>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </div>
                <div>
                    <span className="font-bold">Legal</span>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t border-base-300 bg-[#222328] text-white">
                <div className="items-center grid-flow-col">
                    <a href="https://khan-mohammad-imran.netlify.app/" target="_blank" rel="noreferrer"><BsCodeSlash className='text-4xl' /></a>
                    <a className='p-2 hover:bg-[#313133]' href="https://khan-mohammad-imran.netlify.app/" target="_blank" rel="noreferrer">Khan Mohammad Imran</a>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 pr-8">
                        <p>Follow me on</p>
                        <a href="https://github.com/khanmohammadimran" target="_blank" rel="noreferrer"><AiFillGithub className='text-2xl hover:outline outline-[#ffffff] outline-1 rounded-full' /></a>
                        <a href="https://www.linkedin.com/in/khanmohammadimran/" target="_blank" rel="noreferrer"><AiFillLinkedin className='text-2xl hover:outline outline-[#ffffff] outline-1 rounded-full' /></a>
                        <a href="https://www.facebook.com/khanmohammadimran23" target="_blank" rel="noreferrer"><BsFacebook className='text-2xl hover:outline outline-[#ffffff] outline-1 rounded-full' /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;