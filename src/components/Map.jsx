import React, { useState, useEffect } from 'react';

const Map = ({ address }) => {
  const [mapError, setMapError] = useState(null);
  const [map, setMap] = useState(null);
  const [allAddresses, setAllAddresses] = useState([]);
  const [latestLocation, setLatestLocation] = useState(null);

  // Fetch all addresses and their cached coordinates (latitude, longitude)
  const fetchAddresses = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/addresses`);
      const data = await response.json();
      setAllAddresses(data);
      if (data.length > 0) {
        // Set the latest address to center the map on
        const latest = data[data.length - 1];
        setLatestLocation({
          lat: parseFloat(latest.latitude),
          lng: parseFloat(latest.longitude),
        });
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  // Initialize the map once
  useEffect(() => {
    const initMap = () => {
      if (!window.google || !window.google.maps) {
        setMapError('Google Maps API failed to load.');
        console.error('Google Maps API is not loaded.');
        return;
      }

      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -37.8136, lng: 144.9631 }, // Default Melbourne location
        zoom: 12,
      });

      setMap(mapInstance); // Set map once it's initialized
    };

    if (window.google && window.google.maps && !map) {
      initMap();
    }
  }, [map]);

  // Place markers for all addresses using cached coordinates
  useEffect(() => {
    if (map && allAddresses.length > 0) {
      const infoWindow = new window.google.maps.InfoWindow(); // Create a reusable InfoWindow instance

      allAddresses.forEach(({ latitude, longitude, address }) => {
        if (latitude && longitude) {
          const marker = new window.google.maps.Marker({
            map: map,
            position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
            icon: {
              url: 'https://static.wixstatic.com/media/84f0f7_8ec2567a53ce4485bded74fd97214a7b~mv2.png',
              scaledSize: new window.google.maps.Size(50, 50),
            },
            title: address, // Display the address in the marker title
          });

          // Add a click listener to open an info window with a clickable address
          marker.addListener('click', () => {
            const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
            infoWindow.setContent(`
              <div style="color:black;">
                <strong>${address}</strong><br/>
                <a href="${googleMapsLink}" target="_blank" style="color:blue;">View on Google Maps</a>
              </div>
            `);
            infoWindow.open(map, marker);
          });
        }
      });
    }
  }, [map, allAddresses]);

  // Center the map on the latest location
  useEffect(() => {
    if (map && latestLocation) {
      map.setCenter(latestLocation); // Center the map on the latest added address
    }
  }, [map, latestLocation]);

  // Fetch addresses when the component mounts
  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <>
      {mapError ? (
        <div style={{ color: 'red', textAlign: 'center' }}>{mapError}</div>
      ) : (
        <div id="map" style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>
      )}
    </>
  );
};

export default Map;