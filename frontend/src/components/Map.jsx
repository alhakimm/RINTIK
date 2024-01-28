import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';

const loader = new Loader({
    apiKey: "AIzaSyAhwyYYo1bwoO7KLKs_oMV3Tg9viOVE40A",
    version: 'weekly',
  });

const Map = () => {

    const [locations, setLocations] = useState();

  useEffect(() => {
    loader.load().then(async () => {
      const center = { lat: 6.137307, lng: 102.24092 };

      // const { Map } = await google.maps.importLibrary('maps');
      const { google } = window;
      // const {AdvancedMarkerElement, infoWindow} = await google.maps.importLibrary("marker");
      
      var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 15,
        mapId: "Rintik Map",

        // styles: [
        //   {
        //     featureType: 'poi',
        //     stylers: [{ visibility: 'off' }],
        //   },
        //   {
        //     featureType: 'transit.station',
        //     stylers: [{ visibility: 'off' }],
        //   },
        // ],
        // disableDoubleClickZoom: true,
      });

    //   const locations = await axios.get('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/viewMap');
    //   console.log(locations.data)

    //   locations.forEach((location) => {
    //     const marker = new Marker({
    //         position: { lat: location.latitude, lng: location.longitude},
    //         map: map,
    //         title: location.title
    //     })
    //   })

    try {
      const response = await axios.get('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/viewMap');
      const fetchedLocations = response.data;
      console.log(fetchedLocations);

      fetchedLocations.forEach(data => {
        console.log(data.location._latitude)
        console.log(data.location._longitude)

        const marker = new google.maps.Marker({
          position: { lat: data.location._latitude, lng: data.location._longitude },
          map: map,
          title: "Kota Bharu"
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div><strong>Address:</strong> ${data.body}</div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    } catch (error) {
      console.error("error", error);
    }
  });
}, []);


return (
  <div>
    <div className='flex flex-col items-center justify-center py-4'>
      <h1 className='font-bold text-xl text-blue-500 underline'>Clean Water Sources</h1>
      <p>Places with Clean Water Sources provided below</p>
    </div>
    <div id="map" style={{ height: '1000px', width: '100%' }}>Map</div>;
  </div>
)
};

export default Map;
