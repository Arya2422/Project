import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Assuming 'london' and 'nyc' are coordinates (just as an example)
const london = [51.5074, -0.1278];
const nyc = [40.7128, -74.0060];

const WorldMapWithCurve = () => {
  const [curvedLine, setCurvedLine] = useState(null);

  useEffect(() => {
    // This effect depends on the coordinates of London and NYC
    const line = `M${london[1]} ${london[0]} Q 50 10, ${nyc[1]} ${nyc[0]}`; // Generate path for the curve
    setCurvedLine(line); // Update the curve path

  }, [london, nyc]); // Dependency array to trigger effect when these values change

  return (
    <div>
      <MapContainer center={london} zoom={3} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={london}>
          <Popup>London</Popup>
        </Marker>
        <Marker position={nyc}>
          <Popup>New York City</Popup>
        </Marker>

        {curvedLine && (
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <path d={curvedLine} stroke="white" strokeWidth="2" fill="transparent" />
          </svg>
        )}
      </MapContainer>
    </div>
  );
};

export default WorldMapWithCurve;
