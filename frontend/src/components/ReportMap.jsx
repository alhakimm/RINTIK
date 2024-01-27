import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';

const loader = new Loader({
    apiKey: "AIzaSyAhwyYYo1bwoO7KLKs_oMV3Tg9viOVE40A",
    version: 'weekly',
  });

const Map = () => {

    // const locationData = {
    //     lat: null,
    //     lng: null
    // }

    const [locations, setLocations] = useState();

  useEffect(() => {
    loader.load().then(async () => {
      const center = { lat: 5.1151, lng: 101.8892 };

      // const { Map } = await google.maps.importLibrary('maps');
      const { google } = window;
      // const {AdvancedMarkerElement, infoWindow} = await google.maps.importLibrary("marker");
      
      var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 10,
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

        const marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: "Reported Location"
          });

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
              const locationData = { lat, lng };
              console.log(locationData);
            };
  
            window.handleCancellation = () => {
              infoWindow.close();
              marker.setMap(null); // Remove the marker if not confirmed
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


return (
  <div>
    <div><h1>Report Map</h1></div>
    <div id="map" style={{ height: '1000px', width: '100%' }}>Map</div>;
  </div>
)
};

export default Map;
