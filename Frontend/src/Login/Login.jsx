import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Handle successful login
                navigate('/'); // Redirect to home page after successful login
            } else {
                // Handle login error
                console.error('Login failed');
                // You might want to show an error message to the user here
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle any network errors here
        }
    };

    return (
        <div className="loginform">
            <h1>Login</h1>
        </div>
    );
};

export default Login;