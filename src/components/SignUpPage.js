import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const SignUpPage = () => {
  return (
    <div>
      <button onClick={() => netlifyIdentity.open('signup')}>Sign Up</button>
    </div>
  );
}

export default SignUpPage;
