// components/GoogleMapDirections.js
import React from 'react';
const GoogleMapDirections = () => {
    const googleMapsLink = 'https://maps.app.goo.gl/vVadW4vC3Jtw4sQS9'; // Link to Google Maps directions

    return (
        <div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                <img src="/assets/direction.png" alt="Google Maps" className="h-12 cursor-pointer" /> 
            </a>
        </div>
    );
};

export default GoogleMapDirections;
