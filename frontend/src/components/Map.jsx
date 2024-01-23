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
      const center = { lat: 5.2632, lng: 100.4846 };

      const { Map } = await google.maps.importLibrary('maps');
      const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");
      var map = new Map(document.getElementById('map'), {
        center: center,
        zoom: 10,
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
        const fetchedLocations =  response.data;
        console.log(fetchedLocations);

        setLocations(fetchedLocations);

        fetchedLocations.forEach(data => {
            const marker = new AdvancedMarkerElement({
                position: data.position,
                map: map,
                title: "Penang"
            });
        });
      } catch (error) {
        console.error("error", error);
      }
    });

  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return <div id="map" style={{ height: '400px', width: '100%' }}>Map</div>;
};

export default Map;
