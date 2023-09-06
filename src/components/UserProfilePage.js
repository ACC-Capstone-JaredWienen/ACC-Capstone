import React, { useState, useEffect } from 'react';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Here, you would typically use the userID of the logged-in user
    const userId = 1;
    
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name.firstname} {user.name.lastname}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Add other user details and options (like updating profile, changing password, etc.) */}
    </div>
  );
};

export default UserProfilePage;
