// src/pages/auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (id.startsWith("SU")) {
            navigate("/student/dashboard");
        } else if (id.startsWith("TU")) {
            navigate("/teacher/dashboard");
        } else if (id.startsWith("AU")) {
            navigate("/admin/dashboard");
        } else {
            alert("Invalid ID");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
