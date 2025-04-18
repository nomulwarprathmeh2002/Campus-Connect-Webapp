import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
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
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Enter ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
