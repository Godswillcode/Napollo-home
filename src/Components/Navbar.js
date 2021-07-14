import React from "react";
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-xl head py-1">
      <div className="myContainer ">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>

            <img src={logo} alt="logo" className="w-16" />
          </div>
          <div className="">
            <div class="col-rt-3 equal-height">
              <div class="sb-example-3">
                <div class="search__container">
                  <input
                    class="search__input"
                    type="text"
                    placeholder="Search for artistes, songs, albums"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
