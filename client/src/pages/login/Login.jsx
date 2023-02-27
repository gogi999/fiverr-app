import './Login.scss';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import newRequest from '../../utils/newRequest';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await newRequest.post('/auth/login', { username, password });

            localStorage.setItem('currentUser', JSON.stringify(res.data));
            navigate('/');
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    placeholder="Enter username..." 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    name="password"
                    value={password} 
                    placeholder="Enter password..." 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Login;
