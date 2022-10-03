import React from "react";
import mainLogo from "../../../images/main-logo.png"

const Navbar = () => {
  const menuItems =
    <>
      <li>
        <a className="font-mont font-medium text-[#0B0B0B]">Home</a>
      </li>
      <li>
        <a className="font-mont font-medium text-[#0B0B0B]">Donation</a>
      </li>
      <li>
        <a className="font-mont font-medium text-[#0B0B0B]">Events</a>
      </li>
      <li>
        <a className="font-mont font-medium text-[#0B0B0B]">Blog</a>
      </li>
    </>
  return (
    <div className="navbar bg-base-100 md:justify-center lg:justify-center">
      <div className="w-9/12 justify-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-transparent"
          >
            {menuItems}
          </ul>
        </div>
        <img className="w-full lg:w-52 md:w-52" src={mainLogo} alt="" />
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex bg-transparent">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          <div className="grid grid-cols-2 gap-2">
            <button className="font-mont px-12 bg-[#3F90FC] rounded-lg text-white hover:bg-violet-600">Register</button>
            <button className="font-mont px-12 bg-[#434141] rounded-lg text-white hover:bg-[#313030]">Admin</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
