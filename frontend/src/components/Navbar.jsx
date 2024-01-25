import React from 'react'
import { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";
import ReportModal from './ReportModal';

const Navbar = () =>{

    // const [displayMessage, setDisplayMessage] = useState(false);

    // const [showMyModal, setShowMyModal] = useState(false);
  
    // const handleButtonClick = () => {
    //   setShowModal(true);
    // };
  
    // const closeModal = () => {
    //   setShowModal(false);
    // };

    const [profile,setProfile] = useState(false);
    const handleProfile = () => {
      setProfile(!profile); //basically nak true kan useState (default)
    };

    return(
        <nav className='p-5 flex items-center max-w-600 mx-auto border-b border-solid border-gray-300 bg-white'>
            <img className='w-[10%] h-full' src={logo} alt="logo" />
                <div className='flex items-center ml-auto'>
                <ul className='pr-4 ml-auto flex'>
                        <li>
                    <Link
                        to="/community"
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
                    {/* <li>
                    <Link
                        to="/report"
                        className="pr-4 ml-4 no-underline py-2 transition-colors duration-300 hover:text-blue-600"
                    >
                        Report
                    </Link>
                    </li> */}
                </ul>
               {/* New REPORT Button*/}     
                    {/* <ReportModal visible={showMyModal} /> */}

            {/*REPORT Button*/}
            <div className='relative'>
                {/* <button
                    className='rounded-lg mr-6 px-6 py-2 bg-[#BA1200] font-bold text-white transition duration-300 hover:bg-white hover:text-[#BA1200] ease-in-out'
                    onClick={setShowMyModal(true)}>
                    Report
                </button> */}
                {/* <button className='bg-red-500' onClick={setShowMyModal(true)}>Report</button> */}
                {/* Pop-up message on mouse hover on the Report button */}
                {/* {displayMessage && (
                    <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-40 h-30 bg-white bg-opacity-80 text-black text-sm font-10 border border-gray-300 p-2 rounded-md transition duration-300 ease-in-out'>
                    Lodge a report on water accessibility issues to your local authority
                    </div>
                )} */}

                {/* Modal */}
                {/* {showModal && (
                    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
                    <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-80 h-60 bg-red-400 text-black text-sm font-10 border border-gray-300 p-4 rounded-md'>
                        <p>Your modal content goes here.</p>
                        <button className='mt-4 px-4 py-2 bg-[#BA1200] text-red-600 rounded-md' onClick={closeModal}>
                        Close
                        </button>
                    </div>
                    </div>
                )} */}
            </div>
            {/*END REPORT Button*/}
                <IoPersonCircleSharp size={45} onClick={handleProfile}/>
                {
                    profile ? (
                        <div className='fixed bottom-0 right-0 z-[99] bg-blue-900 h-full w-[30%]'>
                            <div className='p-12 pt-16 flex flex-col items-center'>
                                <p className='w-[75%] flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>edit profile pic</p>
                                <p className='w-[75%] flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>view history report</p>
                                <button className="absolute top-2 right-2 text-xl text-white" onClick={handleProfile}>
                                    close
                                </button>
                            </div>
                        </div>
                       
                    )
                    : (
                        ''
                    )
                }
                </div>
      </nav>
    )
}

export default Navbar;