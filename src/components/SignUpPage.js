// SignUpPage.js
import React, { useState } from 'react';

const SignUpPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        username: '',
        password: '',
        //... other user details
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://fakestoreapi.com/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            console.log(data);
            // After a successful sign-up, you can redirect the user to the login page.
        } catch (error) {
            console.error("Error during signup:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            {/* Add other input fields as necessary */}
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpPage;
