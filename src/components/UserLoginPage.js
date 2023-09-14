// UserLoginPage.js
import React, { useState } from 'react';

const UserLoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

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
                // Save the token to your app's state or local storage
                console.log("Logged in successfully:", data);
                // Navigate the user to the home or profile page
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
