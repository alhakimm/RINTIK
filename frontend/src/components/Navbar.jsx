import React from 'react'
import { useState } from 'react'
import useFetch from "./useFetch";
import { IoPersonCircleSharp } from "react-icons/io5"
import logo from '../assets/logo.png';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import ReportModal from './ReportModal';
import { RiCloseFill } from "react-icons/ri";

const Navbar = () =>{

    // const [displayMessage, setDisplayMessage] = useState(false);

    // const [showMyModal, setShowMyModal] = useState(false);
  
    // const handleButtonClick = () => {
    //   setShowModal(true);
    // };
  
    // const closeModal = () => {
    //   setShowModal(false);
    // };

    // Submit Report
    const [showReportMenu, setShowReportMenu] = useState(false); // for showing the report menu
    const [reportForm, setReportForm] = useState({
      name: "",
      location: "",
      description: "",
      category: "",
      priority: "",
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
      // You can handle the report submission logic here
      // Use the values in reportForm to send the report data to your server or perform other actions
      console.log("Report submitted:", reportForm);

      // Make a POST request to your backend endpoint using Axios
      axios.post('http://localhost:5000/testingfirebase-3e0f7/us-central1/addReports', reportForm)
        .then(response => {
          console.log(response.data); // Log the response from the server
          // Close the pop-up menu after submitting the report
          setShowReportMenu(false);
        })
        .catch(error => {
          console.error("Error submitting report:", error);
          // Handle errors as needed
        });
    };

    // Report History, getReports
    const {data: reportList, isLoading, error} = useFetch("http://localhost:5000/testingfirebase-3e0f7/us-central1/getReports");

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

            fetch('/uploadImage', {
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
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 bg-opacity-50'>
            <div className='bg-white p-8 rounded-md'>
              <div className='flex justify-between'>
                <h2 className="text-2xl font-bold">Report</h2>
                <button className="text-xl text-black" onClick={handlePopupReport}>
                  <RiCloseFill />
                </button>
              </div>
                  

                <div className="mb-4">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reportForm.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={reportForm.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={reportForm.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="category">Category:</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={reportForm.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="priority">Priority:</label>
                  <input
                    type="text"
                    id="priority"
                    name="priority"
                    value={reportForm.priority}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className='px-4 py-2 bg-[#BA1200] text-white rounded-md'
                  onClick={handleReportSubmit}
                >
                  Submit Report
                </button>
            </div>

          </div>
        )}

            </div>
            {/*END REPORT Button*/}

            {/* start of profile */}
                <IoPersonCircleSharp size={45} onClick={handleProfile}/>
                {
                    profile ? (
                        <div className='fixed bottom-0 right-0 z-[99] bg-blue-900 h-full w-[30%]'>
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
                                          <div className='bg-white p-8 rounded-md'>
                                            {selectedReport ? (
                                              <div>
                                                <h2>Report Details</h2>
                                                <p>Category: {selectedReport.category}</p>
                                                <p>Description: {selectedReport.description}</p>
                                                <p>Location: {selectedReport.location}</p>
                                                <p>Priority: {selectedReport.priority}</p>
                                                <p>Status: {selectedReport.status}</p>
                                                <button onClick={() => setSelectedReport(null)}>Back to Report List</button>
                                              </div>
                                            ) : (
                                              <div>
                                                <h2>Report History</h2>
                                                {isLoading ? (
                                                  <p>Loading report history...</p>
                                                ) : error ? (
                                                  <p>Error loading report history</p>
                                                ) : (
                                                  <ul>
                                                    {reportList.map((report) => (
                                                      <li key={report.id}>
                                                        <button onClick={() => handleReportClick(report)}>
                                                          Report
                                                        </button>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                )}
                                                <button onClick={() => setShowReportHistory(false)}>Close</button>
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
                       
                    )
                    : (
                        ''
                    )}
                </div>
      </nav>
    )
}

export default Navbar;