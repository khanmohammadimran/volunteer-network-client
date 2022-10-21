import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../images/main-logo.png"

const Navbar = () => {
  const menuItems =
    <>
      <li><Link to="/" className="font-medium text-[#0B0B0B] hover:bg-[#dbdeda]">Home</Link></li>
      <li><Link to="/events" className="font-medium text-[#0B0B0B] hover:bg-[#dbdeda]">Events</Link>
      </li>
      <li><Link to="/blog" className="font-medium text-[#0B0B0B] hover:bg-[#dbdeda]">Blog</Link></li>
      <li><Link to="/aboutme" className="font-medium text-[#0B0B0B] hover:bg-[#dbdeda]">About Me</Link></li>
    </>
  const mentuButtons = <>
    <li><Link to="register" className="px-12 my-2 md:my-2 lg:my-0 bg-[#3F90FC] rounded-lg text-white hover:bg-violet-600">Register</Link></li>
    <li><Link to="/donate" className="px-12 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Donate</Link></li>
  </>
  return (
    <div className="navbar bg-base-100 md:justify-end  lg:justify-center px-14">
      <div className="w-9/12 justify-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-transparent"
          >
            {menuItems}
            {mentuButtons}
          </ul>
        </div>
        <Link to="/"><img className="w-full lg:w-52 md:w-52" src={mainLogo} alt="" /></Link>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex bg-transparent">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          <div className="grid grid-cols-2 gap-2">
            {mentuButtons}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
