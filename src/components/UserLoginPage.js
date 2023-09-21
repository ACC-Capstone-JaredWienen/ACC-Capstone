import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const UserLoginPage = () => {
  return (
    <div>
      <button onClick={() => netlifyIdentity.open('login')}>Login</button>
    </div>
  );
}

export default UserLoginPage;
