// src/components/Login.jsx
import React from 'react';

const Login = () => {
  const handleLogin = () => {
    const clientId = 'ba1cfa05f5034c668eff907446c71e11';
    const redirectUri = 'http://localhost:5173/';
    const scopes = 'user-read-private user-read-email';

    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = url;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-emerald-800 text-white p-4 rounded hover:bg-emerald-600"
      >
        Log in with Spotify
      </button>
    </div>
  );
};

export default Login;
