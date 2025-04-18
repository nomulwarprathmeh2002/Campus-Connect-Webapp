// src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <span className="navbar-brand">Campus Connect</span>
            <div className="ml-auto">
                <button className="btn btn-outline-primary btn-sm">Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
