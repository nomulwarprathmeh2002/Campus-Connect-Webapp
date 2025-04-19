// Updated StudentDashboard.js with location-based camera attendance button
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [locationAllowed, setLocationAllowed] = useState(false);

    const handleAttendanceClick = async () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Example: Amity University Gurugram coordinates
                const collegeLat = 28.4497;
                const collegeLng = 76.8131;
                const radius = 0.3; // in km (300 meters)

                const distance = getDistanceFromLatLonInKm(latitude, longitude, collegeLat, collegeLng);
                if (distance <= radius) {
                    setLocationAllowed(true);
                    openCamera();
                } else {
                    alert("You are not within college premises.");
                }
            },
            () => {
                alert("Unable to retrieve your location");
            }
        );
    };

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const deg2rad = (deg) => deg * (Math.PI / 180);

    const openCamera = () => {
        // This will be replaced with real image capture and API upload logic
        alert("Camera opened! (Simulated)");
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar navbar-dark bg-primary px-3">
                <span className="navbar-brand mb-0 h1">Amity University Gurugram</span>
            </nav>

            <div className="d-flex">
                <div className="sidebar bg-light p-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="" end className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="calendar" className="nav-link" activeClassName="active">My Calendar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="assignment" className="nav-link" activeClassName="active">Assignments</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="content p-4 w-100">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Attendance</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mt-2">Above 85%</p>
                                    <button className="btn btn-success mt-2" onClick={handleAttendanceClick}>Mark Attendance</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">No Fee Due</h5>
                                    <p>All fees are up to date!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Student Services</h5>
                                    <button className="btn btn-primary">Click Here</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12">
                            <h5>My Classes</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Class Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>April 18, 2025</td>
                                        <td>Good Friday</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12">
                            <h5>My Attendance</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <span>ITEU4220 - Cloud Computing</span>
                                    <span className="badge bg-success float-end">81.58%</span>
                                </li>
                                <li className="list-group-item">
                                    <span>AIEU4214 - Machine Learning using Python</span>
                                    <span className="badge bg-success float-end">91.67%</span>
                                </li>
                                <li className="list-group-item">
                                    <span>AIEU4215 - Machine Learning using Python Lab</span>
                                    <span className="badge bg-success float-end">92.31%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;