import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: "AIzaSyAhwyYYo1bwoO7KLKs_oMV3Tg9viOVE40A",
    version: 'weekly',
  });

const Map = () => {
    console.log(3)
  useEffect(() => {
    
    loader.load().then(async () => {
      const center = { lat: 5.2632, lng: 100.4846 };

        console.log(1)

      const { Map } = await google.maps.importLibrary('maps');
      var map = new Map(document.getElementById('map'), {
        center: center,
        zoom: 10,
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit.station',
            stylers: [{ visibility: 'off' }],
          },
        ],
        disableDoubleClickZoom: true,
      });
    });
    console.log(2)
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return <div id="map" style={{ height: '400px', width: '100%' }}>Map</div>;
};

export default Map;
