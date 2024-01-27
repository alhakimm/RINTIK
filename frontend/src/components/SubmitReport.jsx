import React, { useState } from 'react';
import axios from 'axios';

const SubmitReport = ({ setShowReportMenu }) => {
    const [reportForm, setReportForm] = useState({
        name: "",
        location: "",
        description: "",
        category: "",
        priority: "",
        status: "Received",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReportForm({
            ...reportForm,
            [name]: value,
        });
    };

    const handleReportSubmit = () => {
        // Your submission logic here
    };

    return (
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
                >
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
                  >
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
    </div>
    );
};

export default SubmitReport;