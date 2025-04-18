// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-light border-end vh-100 p-3" style={{ width: '250px' }}>
            <h5>Student Menu</h5>
            <ul className="list-unstyled">
                <li><Link to="/student/dashboard">Home</Link></li>
                <li><Link to="/student/dashboard/calendar">Calendar</Link></li>
                <li><Link to="/student/dashboard/assignment">Assignment</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
