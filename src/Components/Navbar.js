import React from 'react'
import logo from "../Images/logo.png"

const Navbar = () => {
    return (
         <div className="shadow head">
             <div className="myContainer ">
            <div className="flex items-center">
                <div className="flex items-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                <img src={logo} alt="logo" className="w-16"/>
                </div>
                <div className="child2">
                    <input type="search" name="" id="" placeholder="Search for artistes, songs, albums" className="rounded-2xl px-10 text-sm py-1 bg-secondary text-gray-400"/>
                </div>
            </div>
        </div>
         </div>
    )
}

export default Navbar
