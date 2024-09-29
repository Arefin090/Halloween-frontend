// src/components/Map.js
import React, { useState, useEffect } from 'react';

const Map = ({ address }) => {
    const [mapError, setMapError] = useState(null);
  useEffect(() => {
    const initMap = () => {
        if (!window.google || !window.google.maps) {
          setMapError('Google Maps API failed to load.');
          console.error('Google Maps API is not loaded.');
          return;
        }
  
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: -37.8136, lng: 144.9631 }, // Default Melbourne location
          zoom: 12,
        });

      if (address) {
        const geocoder = new window.google.maps.Geocoder();
        geocodeAddress(geocoder, map, address);
      }
    };

    const geocodeAddress = (geocoder, map, address) => {
      console.log('Geocoding address:', address); // Log the address for debugging

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          console.log('Geocoding successful:', results); // Log geocoding results

          map.setCenter(results[0].geometry.location);

          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: {
              url: 'https://img.icons8.com/?size=100&id=61576&format=png&color=000000',
              scaledSize: new window.google.maps.Size(50, 50),
            },
          });
        } else {
          console.error('Geocode failed:', status); // Log error if geocoding fails
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    }
  }, [address]);

  return (
    <>
      {mapError ? (
        <div style={{ color: 'red', textAlign: 'center' }}>{mapError}</div>
      ) : (
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
      )}
    </>
  );
};

export default Map;
