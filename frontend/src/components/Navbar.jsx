import React from 'react'
import { useState } from 'react'
import useFetch from "./useFetch";
import { IoPersonCircleSharp } from "react-icons/io5"
import logo from '../assets/logo.png';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import ReportModal from './ReportModal';
import PropTypes from 'prop-types'
import { RiCloseFill } from "react-icons/ri";
import { CgPin } from "react-icons/cg";

//report map
// import React, { useEffect, useState } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
// import axios from 'axios';

// const loader = new Loader({
//     apiKey: "AIzaSyAhwyYYo1bwoO7KLKs_oMV3Tg9viOVE40A",
//     version: 'weekly',
//   });

const Navbar = () =>{

    // const [displayMessage, setDisplayMessage] = useState(false);

    // const [showMyModal, setShowMyModal] = useState(false);
  
    // const handleButtonClick = () => {
    //   setShowModal(true);
    // };
  
    // const closeModal = () => {
    //   setShowModal(false);
    // };
    axios.defaults.headers.common['Authorization'] = localStorage.FBIdToken
    console.log("header: " + axios.defaults.headers.common['Authorization'])

    // Submit Report
    const [showReportMenu, setShowReportMenu] = useState(false); // for showing the report menu
    const [reportForm, setReportForm] = useState({
      name: "",
      location: "",
      description: "",
      category: "",
      priority: "",
      status: "Received",
    });

    const handleReportButtonClick = () => {
      setShowReportMenu(!showReportMenu);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setReportForm({
        ...reportForm,
        [name]: value,
      });
    };

    const handleReportSubmit = () => {
      if (
          reportForm.name.trim() === '' ||
          reportForm.location.trim() === '' ||
          reportForm.description.trim() === '' ||
          reportForm.category.trim() === '' ||
          reportForm.priority.trim() === ''
      ) {
          alert('Please fill in all required fields.');
          return;
      }

      const reportData = {
          ...reportForm,
          status: 'Received', // Adding status field with value "Received"
      };

      axios
        .post('http://localhost:5000/testingfirebase-3e0f7/us-central1/addReports', reportData)
        .then(response => {
          console.log(response.data);
          setShowReportMenu(false);
        })
        .catch(error => {
          console.error("Error submitting report:", error);
        })
    };

    // Report History, getReports
    const {data: reportList, isLoading, error} = useFetch("http://localhost:5000/testingfirebase-3e0f7/us-central1/api/reports");

    const [showReportHistory, setShowReportHistory] = useState(false); // when selecting viewhistorybutton
    const [selectedReport, setSelectedReport] = useState(null); // for when selecting a report in popup menu

    const handleViewReportHistory = () => {
        setShowReportHistory(true);
    };

    const handleReportClick = (report) => {
        setSelectedReport(report);
      };

    // Profile
    const [profile,setProfile] = useState(false);
    const handleProfile = () => {
      setProfile(!profile); //basically nak true kan useState (default)
    };

    const [popupReport,setPopupReport] = useState(false);
    const handlePopupReport = () => {
      setPopupReport(!popupReport); //basically nak true kan useState (default)
    };

    const [editProfile, setEditProfile] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleEditProfile = () => {
        setEditProfile(!editProfile);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleImageUpload = () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            fetch('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/user/image', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image uploaded successfully', data);
                setEditProfile(false);
            })
            .catch(error => {
                console.error('Error uploading image', error);
            });
        }
    };

    // const image = {
    //   user: {
    //     credentials: {imageUrl}
    //   }
      
    // } 
    // console.log(image)

    

    return(
        <nav className='p-5 flex items-center max-w-600 mx-auto border-b border-solid border-gray-300 bg-white'>
            <img className='w-[10%] h-full' src={logo} alt="user image" />
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

      {/* REPORT Button */}
      <div className='relative'>
        <button
          className='rounded-lg mr-6 px-6 py-2 bg-[#BA1200] font-bold text-white transition duration-300 hover:bg-white hover:text-[#BA1200] ease-in-out'
          onClick={handleReportButtonClick}
        >
          Report
        </button>

                {/* Pop-up menu on Report Button click */}
                {showReportMenu && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 bg-opacity-50 z-[99]'>
            <div className='bg-blue-300 p-8 rounded-md'>
              <div className='flex justify-between mb-4'>
                <h2 className="text-2xl font-bold text-black underline">Report</h2>
                <button className="text-xl text-black" onClick={handleReportButtonClick}>
                  <RiCloseFill />
                </button>
              </div>
                  

                <div className="mb-4 flex gap-2">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reportForm.name}
                    onChange={handleInputChange}
                    className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div className="mb-4 flex gap-2">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={reportForm.location}
                    onChange={handleInputChange}
                    className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div className="mb-4 flex flex-col gap-2">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={reportForm.description}
                    onChange={handleInputChange}
                    className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  ></textarea>
                </div>
                <div className="mb-4 flex gap-2">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={reportForm.category}
                  onChange={handleInputChange}
                  className='w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  defaultValue=""
                >
                  <option value="" disabled hidden>Select category</option>
                  <option value="Dirty Water">Dirty Water</option>
                  <option value="Raised Water Level">Raised Water Level</option>
                  <option value="Water Quality">Water Quality</option>
                  <option value="Water Shortage">Water Shortage</option>
                </select>
              </div>
                <div className="mb-4 flex gap-2">
                  <label htmlFor="priority">Priority:</label>
                  <select
                    id="priority"
                    name="priority"
                    value={reportForm.priority}
                    onChange={handleInputChange}
                    className='w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    defaultValue="" 
                  >
                    <option value="" disabled hidden>Select urgency</option>
                    <option value="Low Urgency">Low Urgency</option>
                    <option value="High Urgency">High Urgency</option>
                  </select>
                </div>  
                <button
                  className='px-4 py-2 bg-[#BA1200] text-white rounded-md w-full'
                  onClick={handleReportSubmit}
                >
                  Submit Report
                </button>
            </div>
            {/* <div className='bg-blue-300 p-8 rounded-md'>
             <div className='flex justify-between mb-4'>
              <script>
                
              </script>
             </div>
            </div> */}

          </div>
        )}

            </div>
            {/*END REPORT Button*/}

            {/* start of profile */}
                <IoPersonCircleSharp size={45} onClick={handleProfile}/>
                {
                    profile ? (
                      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-[80]'>
                        <div className='fixed bottom-0 right-0 z-[99] bg-blue-900 h-full w-[30%] '>
                            <div className='p-12 pt-16 flex flex-col items-center'>
                            <div className='w-[75%] flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleEditProfile}>
                                Edit Profile Pic
                            </div>

                            {/* popup for edit profile pic */}
                            {editProfile && (
                                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
                                    <div className='bg-white p-8 rounded-md'>
                                        <input type="file" accept="image/*" onChange={handleImageChange} />
                                        <button onClick={handleImageUpload}>Upload Image</button>
                                        <button onClick={() => setEditProfile(false)}>Cancel</button>
                                    </div>
                                </div>
                            )}
                            {/* end popup for edit profile pic */}


                              {/* View Report History Button */}
                              <div className='relative'>
                                      <button
                                        className='w-[75%] flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                                        onClick={handleViewReportHistory}
                                      >
                                        View Report History
                                      </button>
                              {/* end view report history button */}

                                      {/* Pop-up for Report History */}
                                      {showReportHistory && (
                                        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
                                          <div className='bg-blue-300 p-8 rounded-xl max-w-[30%] min-w-[30%]'>
                                            {selectedReport ? (
                                              <div>
                                                <div className='flex justify-between mb-4'>
                                                  <h2 className='text-2xl font-bold underline'>Report Details</h2>
                                                  <button onClick={() => setSelectedReport(null)}><RiCloseFill size={25} /></button>
                                                </div>
                                                <div className='bg-white rounded-xl p-4'>
                                                  <div className='flex items-center justify-between'>
                                                    <p className='text-xl font-bold underline'>{selectedReport.category}</p>
                                                    <p className='font-bold text-green-800'>{selectedReport.status}</p>
                                                  </div>                                           
                                                  <p className='text-sm'>Priority: {selectedReport.priority}</p>       
                                                  <p className='py-6 font-semibold'>{selectedReport.description}</p>
                                                  <p className='flex items-center font-thin text-sm'><CgPin className="relative mr-1" />{selectedReport.location}</p>
                                                  
                                                  
                                                </div>
                                                
                                                
                                              </div>
                                            ) : (
                                              <div>
                                                <div className='flex justify-between'>
                                                  <h2 className='font-bold text-xl'>Report History</h2>
                                                  <button onClick={() => setShowReportHistory(false)}><RiCloseFill size={25} /></button>
                                                </div>
                                                
                                                {isLoading ? (
                                                  <p>Loading report history...</p>
                                                ) : error ? (
                                                  <p>Error loading report history</p>
                                                ) : (
                                                  <ul>
                                                    {reportList.map((report) => (
                                                      <li key={report.id}>
                                                        <button className='bg-white my-2 w-full rounded-md p-2' onClick={() => handleReportClick(report)}>
                                                          Report
                                                        </button>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                )}
                                                
                                              </div>
                                             

                                            )}
                                          </div>
                                        </div>
                                      )}
                                      {/* end pop-up for report history */}
                                    </div>
                                <button className="absolute top-2 right-2 text-xl text-white" onClick={handleProfile}>
                                    close
                                </button>
                            </div>
                        </div>
                     </div>  
                    )
                    : (
                        ''
                    )}
                </div>
      </nav>
    )
}

export default Navbar;