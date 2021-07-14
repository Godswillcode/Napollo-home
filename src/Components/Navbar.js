import React from "react";
import logo from "../Images/logo.png";
import apple from "../Images/apple.png";
import google from "../Images/googlePlay.png";

const Navbar = () => {
  return (
    <nav className="shadow-xl nav py-1">
      <div className="myContainer ">
        <div className="flex items-center justify-between">
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
          <div className="ml-8">
            <div className="col-rt-3 equal-height">
              <div className="sb-example-3">
                <div className="search__container">
                  <input
                    className="search__input"
                    type="text"
                    placeholder="Search for artistes, songs, albums"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center ml-32 justify-center">
            <img src={apple} alt="apple" className="w-32" />
            <img src={google} alt="google playstore" className="w-32" />
            <a href="#!" className="text-white mx-3">
              SignUp/Login
            </a>

            <label
              htmlFor="upload"
              className="flex items-center text-white border border-secondary py-1 px-6 rounded-2xl cursor-pointer"
              style={{
                background: "linear-gradient(to top, #f78127, #feed3e)",
              }}
            >
              <svg
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M9 16h-8v6h22v-6h-8v-1h9v8h-24v-8h9v1zm11 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-7.5 0h-1v-14.883l-4.735 5.732-.765-.644 6.021-7.205 5.979 7.195-.764.645-4.736-5.724v14.884z"
                  fill="#fff"
                />
              </svg>{" "}
              <span className="pl-3">Upload</span>
            </label>
            <input type="file" name="file" id="upload" className="hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
