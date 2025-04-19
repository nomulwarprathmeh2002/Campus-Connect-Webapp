import React, { useState } from 'react';

const Location = ({ onLocationAllowed }) => {
    const [locationAllowed, setLocationAllowed] = useState(false);

    const handleAttendanceClick = async () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const collegeLat = 28.492517434699092;
                const collegeLng = 77.14260388163844;
                const radius = 0.3; // 300 meters

                const distance = getDistanceFromLatLonInKm(latitude, longitude, collegeLat, collegeLng);
                if (distance <= radius) {
                    setLocationAllowed(true);
                    onLocationAllowed(true); // Pass the state back to parent
                } else {
                    alert("You are not within college premises.");
                }
            },
            () => alert("Unable to retrieve your location")
        );
    };

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const deg2rad = deg => deg * (Math.PI / 180);

    return (
        <div>
            <button className="btn btn-success mt-2" onClick={handleAttendanceClick}>Mark Attendance</button>
            {locationAllowed && <p>You are within the allowed location.</p>}
        </div>
    );
};

export default Location;
