// src/components/Account.jsx
import React, { useState, useEffect } from 'react';

const Account = ({ token }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (token) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('User Info:', data);
          setUserInfo(data);
        });
    }
  }, [token]);

  if (!token) {
    return <div>Please log in to see your account information.</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userInfo.display_name}</h1>
      <img src={userInfo.images[0]?.url} alt="User Profile" />
      <p>Email: {userInfo.email}</p>
    </div>
  );
};

export default Account;
