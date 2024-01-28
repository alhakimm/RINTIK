import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const loader = new Loader({
    apiKey: "AIzaSyAhwyYYo1bwoO7KLKs_oMV3Tg9viOVE40A",
    version: 'weekly',
  });

let locationData = {}

localStorage.removeItem("lat")
localStorage.removeItem("lng")



const ReportMap = () => {

    // const locationData = {
    //     lat: null,
    //     lng: null
    // }
    const history = useHistory()

    const [locations, setLocations] = useState();
    let marker
    console.log("1111" + marker)

  useEffect(() => {
    loader.load().then(async () => {
      const center = { lat: 6.107307, lng: 102.24092 };

      // const { Map } = await google.maps.importLibrary('maps');
      const { google } = window;
      // const {AdvancedMarkerElement, infoWindow} = await google.maps.importLibrary("marker");
      
      var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12,
        mapId: "Rintik Map",

      });

    //   var newPosition = snapshot.val();
    //   var point = new google.maps.LatLng(newPosition.lat, newPosition.lng);
    //   console.log(point)

    //   let lat;
    //   let lng;

    const infoWindow = new google.maps.InfoWindow();

      map.addListener('click', (event) => {
        const lat = event.latLng.lat()
        const lng = event.latLng.lng()

        console.log("2222" + marker)

        if (localStorage.lat){
          alert('you already chosen a location')
        } else {
          marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: "Reported Location"
          });
        }

          marker.addListener('click', () => {
            const content = `
              <div>
                <strong>Location:</strong> Lat: ${lat}, Lng: ${lng}
                <br />
                <button onclick="handleConfirmation()">Confirm</button>
                <button onclick="handleCancellation()">Cancel</button>
              </div>
            `;
  
            infoWindow.setContent(content);
            infoWindow.open(map, marker);
  
            window.handleConfirmation = () => {
              infoWindow.close();
              // Proceed with the location data
              // locationData = { lat, lng };
              localStorage.setItem('lat', lat)
              localStorage.setItem('lng', lng)
              setReportForm({ ...reportForm, lat, lng })
              console.log(localStorage.lat);
            };
  
            window.handleCancellation = () => {
              infoWindow.close();
              marker.setMap(null); // Remove the marker if not confirmed
              localStorage.removeItem("lat")
              localStorage.removeItem("lng")
              setReportForm({ ...reportForm, lat: "", lng: "" })
              console.log("33333" + marker)
            };
          });
          
    //       marker.addListener('click', () => {
    //         infoWindow.setContent(`<div><strong>Location:</strong> Lat: ${lat}, Lng: ${lng}</div>`)
    //         infoWindow.open(map, marker);
    //       });

    //     const isConfirmed = window.confirm(`Are you sure this is the location?`)
    //   if (isConfirmed){
    //     const locationData = {
    //         lat,
    //         lng
    //     }
    //     console.log(locationData)
    //   } else{
    //     marker.setMap(null);
    //   }
      

      })

      
  });
}, []);

// Submit Report
const [showReportMenu, setShowReportMenu] = useState(false); // for showing the report menu
const [reportForm, setReportForm] = useState({
  // name: "",
  location: "",
  lat: localStorage.lat,
  lng: localStorage.lng,
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
      // reportForm.name.trim() === '' ||
      // reportForm.lat.trim() === '' ||
      reportForm.location.trim() === '' ||
      !reportForm.lat  ||
      !reportForm.lng  ||
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

  console.log("lat"+localStorage.lat)
  console.log(reportData)
  axios
    .post('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/reportProblem', reportData)
    .then(response => {
      console.log(response.data);
      setShowReportMenu(false);
      localStorage.removeItem("lat")
      localStorage.removeItem("lng")
      history.push('/community') 
    })
    .catch(error => {
      console.error("Error submitting report:", error);
    })
};

return (
  <div className='flex items-center justify-center bg-blue-500 w-full h-screen'>
  
    {/* <div className="mb-4 flex gap-2">
      <label htmlFor="lat">latitude:</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={reportForm.lat}
        onChange={handleInputChange}
        className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
    </div>*/}
    
    <div className='border p-8 w-96 h-96 bg-white flex flex-col justify-center gap-4'>
      <div className="mb-4 flex flex-col gap-2">
        <p className='text-2xl font-bold underline text-red-500'>Report</p>
        {/* <div className="mb-4 flex gap-2"> */}
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={reportForm.location}
          onChange={handleInputChange}
          className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      {/* </div>  */}
        <label htmlFor="description" >Description:</label>
        <textarea
          id="description"
          name="description"
          value={reportForm.description}
          onChange={handleInputChange}
          className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></textarea>
      </div><div className="mb-4 flex gap-2">
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
      </div><div className="mb-4 flex gap-2">
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
      </div><button
        className='px-4 py-2 bg-[#BA1200] text-white rounded-md w-full'
        onClick={handleReportSubmit}
      >
        Submit Report
      </button>
    </div>
    <div>
      {/* <div><h1>Report Map</h1></div> */}
      <div id="map" className='h-96 w-96'>Map</div>
    </div>

    
  </div>
  

    
)
};

export default ReportMap;
