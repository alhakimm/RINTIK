import React from 'react';
import {useState, useEffect} from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { RiCloseFill } from "react-icons/ri";

const Alert = () => {

    const [alerts, setAlerts] = useState([
        {title: 'Water Disruption', 
        location: 'Rantau Panjang', 
        date: '13 January 2024', 
        id: 1,
        type:'Alert'},

        {title: 'Quality Alert', 
        location: 'Pasir Mas', 
        date: '19 January 2024', 
        id: 2,
        type:'Alert'},

        {title: 'Flood Warning', 
        location: 'Kuala Krai', 
        date: '29 January 2024', 
        id: 3,
        type:'Alert'},

        {title: 'Reservoir Level Warning', 
        location: 'Rantau Panjang', 
        date: '13 January 2024', 
        id: 4,
        type:'Alert'},
    ]);

    const [selectedAlert, setSelectedAlert] = useState(null);

    const handleAlertClick = (alert) => {
        setSelectedAlert(alert);
    };
      
    const handleClosePopup = () => {
        setSelectedAlert(null);
    };

    const AlertPopup = ({ alert }) => {
        const handleReadOriginalPost = () => {
          window.location.href = alert.id;
        };
  
        return (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md">
              <Typography variant="h1" color="black" className="text-2xl mb-4">
                {alert.title}
              </Typography>
              <Typography variant="paragraph" color="black" className="mb-4">
                {alert.location}
              </Typography>
              <Button
                color="blue"
                buttonType="link"
                onClick={handleClosePopup}
                ripple="dark"
              >
                Close
              </Button>
              <button className="text-blue-500 mt-2 block" onClick={handleReadOriginalPost}>
                 Read Original Post
              </button>
            </div>
          </div>
        );
      };

  return (
    <div className='bg-red-200 p-4 rounded-lg'>
        <div>
            <h2 className="text-black font-bold text-xl">ALERTS</h2>
            <div className="">
              {alerts.map((alert) => (
                <div
                  className="flex flex-row items-center justify-between bg-red-100 p-2 mt-2 rounded-lg hover:shadow-xl cursor-pointer"
                  key={alert.title}
                  onClick={() => handleAlertClick(alert)}
                >
                    <div>
                        <h2 className="text-md text-black font-semibold leading-4">
                            {alert.title}
                        </h2>
                        <p className="text-xs text-black">
                            {alert.location}
                        </p>
                        <p className="text-xs text-black">
                            {alert.date} 
                        </p>
                    </div>
                    <div>
                        <p>&gt;</p>
                    </div>        
                </div>
              ))}
            </div>
            {/* <h1 className='text-xl font-bold'>Alert!</h1>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Water Shortage</h1>
                    <h3 className='text-xs'>Rantau Panjang</h3>
                    <h3 className='text-xs'>13 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Quality Alert</h1>
                    <h3 className='text-xs'>Pasir Mas</h3>
                    <h3 className='text-xs'>19 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Flood Warning</h1>
                    <h3 className='text-xs'>Kuala Krai</h3>
                    <h3 className='text-xs'>29 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Reservoir Level Warning</h1>
                    <h3 className='text-xs'>Rantau Panjang</h3>
                    <h3 className='text-xs'>13 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div> */}
        </div>

        {selectedAlert && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 bg-opacity-50 z-[99]'>
            <div className='bg-blue-300 p-8 rounded-md'>
              <div className='flex justify-between mb-4'>
                <h2 className="text-2xl font-bold text-black underline">Report</h2>
                <button className="text-xl text-black" onClick={handleClosePopup}>
                  <RiCloseFill />
                </button>
              </div>
            </div>
          </div>
        )}

    </div>
    );
};

export default Alert