import React from 'react'
import { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () =>{

    const [displayMessage, setDisplayMessage] = useState(false);

    return(
        <nav className='p-5 flex items-center max-w-600 mx-auto border-b border-solid border-gray-300'>
            <img className='w-[10%] h-full' src={logo} alt="logo" />
                <div className='flex items-center ml-auto'>
                <ul className='pr-4 ml-auto flex'>
                        <li>
                    <Link
                        to="/"
                        className="pr-4 ml-4 no-underline py-2 transition-colors duration-300 hover:text-blue-600"
                    >
                        Community
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/education"
                        className="pr-4 ml-4 no-underline py-2 transition-colors duration-300 hover:text-blue-600"
                    >
                        Education
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/plumber"
                        className="pr-4 ml-4 no-underline py-2 transition-colors duration-300 hover:text-blue-600"
                    >
                        Plumber
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/map"
                        className="pr-4 ml-4 no-underline py-2 transition-colors duration-300 hover:text-blue-600"
                    >
                        Map
                    </Link>
                    </li>
                </ul>
            {/*REPORT Button*/}
            <div className='relative'>
                <button 
                        className='rounded-lg mr-6 px-6 py-2 bg-[#BA1200] font-bold text-white transition duration-300 hover:bg-white hover:text-[#BA1200] ease-in-out'
                        onMouseEnter={() => setDisplayMessage(true)} onMouseLeave={() => setDisplayMessage(false)}>
                        Report
                    </button>
                    {/*Pop-up message on mouse hover on the Report button*/}
                    {displayMessage && (<div className='absolute top-full left-1/2 transform -translate-x-1/2 w-40 h-30 bg-white bg-opacity-80 text-black text-sm font-10 border border-gray-300 p-2 rounded-md transition duration-300 ease-in-out'>
                        Lodge a report on water accessibility issues to your local authority
                    </div>)}
                </div> 
            
                <a href="#profile"><IoPersonCircleSharp size={45} /></a>
                </div>
      </nav>
    )
}

export default Navbar;