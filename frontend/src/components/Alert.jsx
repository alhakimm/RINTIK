import React from 'react';
import {useState, useEffect} from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { RiCloseFill } from "react-icons/ri";

const Alert = () => {

    const [alerts, setAlerts] = useState([
        {title: 'Water Disruption', 
        location: 'Rantau Panjang', 
        date: '13 January 2024', 
        duration: '3 Days',
        desc: 'Rantau Panjang is scheduled to face a water cut on the 13th of January 2024 for 3 Days, make all necessary preparations',
        id: 1,
        type:'Alert'},

        {title: 'Quality Alert', 
        location: 'Pasir Mas', 
        date: '19 January 2024', 
        duration: '2 Days',
        desc: 'Pasir Mas is expected to face water quality issues due to pollution surrounding the area. Please save clean water for use during these 2 days' ,
        id: 2,
        type:'Alert'},

        {title: 'Flood Warning', 
        location: 'Kuala Krai', 
        date: '29 January 2024', 
        duration: '2 Days',
        desc: 'Kuala Krai is expected to face a heavy flood on the 29th of January 2024 due to the constant rain, preparations for flood rescue are currently being made',
        id: 3,
        type:'Alert'},

        {title: 'Reservoir Level Warning', 
        location: 'Rantau Panjang', 
        date: '13 January 2024', 
        duration: '5 Days',
        desc: 'From 13th of January 2024 to the 17th of January 2024, Rantau Panjang will face low water reservoir levels which may affect water quality, remember to save enough water for important use',
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
        return (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-lg max-w-md">
                    <Typography variant="h1" color="textPrimary" className="text-2xl mb-4 font-bold border-b border-black pb-2">
                        {alert.title}
                    </Typography>
                    <div className="bg-red-300 rounded-lg p-4 mb-4">
                        <div className="flex justify-between border-b border-black pb-2 mb-4">
                            <div>
                                <Typography variant="paragraph" color="textPrimary" className="mb-2 font-bold">
                                    Location: {alert.location}
                                </Typography>
                                <Typography variant="paragraph" color="textPrimary" className="mb-2 font-bold">
                                    Date: {alert.date}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="paragraph" color="textPrimary" className="mb-2 font-semibold">
                                    Duration: {alert.duration}
                                </Typography>
                            </div>
                        </div>
                        <div>
                            <Typography variant="paragraph" color="textPrimary" className="mb-2 text-xl font-bold">
                                Description
                            </Typography>
                            <Typography variant="paragraph" color="textPrimary" className="mb-2 text-xl">
                                {alert.desc}
                            </Typography>
                        </div>
                    </div>
                    <Button color="blue" buttonType="link" onClick={handleClosePopup} ripple="dark">
                        Close
                    </Button>
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
                  key={alert.id}
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
            {selectedAlert && <AlertPopup alert={selectedAlert} />}
        </div>
    </div>
    );
};

export default Alert