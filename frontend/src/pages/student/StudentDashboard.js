import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Location from '../../components/Location';
import Camera from '../../components/Camera';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [locationAllowed, setLocationAllowed] = useState(false);

    const handleLocationAllowed = (status) => {
        setLocationAllowed(status);
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
                            <NavLink to="" end className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="calendar" className="nav-link">My Calendar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="assignment" className="nav-link">Assignments</NavLink>
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
                                        <div className="progress-bar" style={{ width: '85%' }}></div>
                                    </div>
                                    <p className="mt-2">Above 85%</p>
                                    <Location onLocationAllowed={handleLocationAllowed} />
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

                    {/* Camera section */}
                    <Camera locationAllowed={locationAllowed} />

                    {/* Static Class Info */}
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
