import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAppState } from './AppStateContext'; // Adjust the path accordingly

const UserLoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const { setIsLoggedIn } = useAppState();
    const navigate = useNavigate(); // using the useNavigate hook

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();

            if (data.token) {
                setIsLoggedIn(true);
                alert('Log in successful!');
                navigate('/profile'); // Navigate to profile page
            } else {
                console.error("Login failed:", data);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
}

export default UserLoginPage;
