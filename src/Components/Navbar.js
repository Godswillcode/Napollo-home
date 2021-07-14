import React from 'react'
import logo from "../Images/logo.png"

const Navbar = () => {
    return (
         <div className="bg-secondary">
             <div className="myContainer shadow-sm">
            <div className="wrap">
                <div className="flex items-center child1">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                <img src={logo} alt="logo" className="w-16"/>
                </div>
                <div className="child2">
                    <input type="search" name="" id="" />
                </div>
            </div>
        </div>
         </div>
    )
}

export default Navbar
