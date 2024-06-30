// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Search from './components/Search';
import History from './components/History';
import Login from './components/Login';

const App = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      const urlParams = new URLSearchParams(hash.replace('#', ''));
      token = urlParams.get('access_token');
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);

    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={token ? <h1 className="text-emerald-800">Welcome to Spotify App</h1> : <Login />} />
          <Route path="/home" element={token ? <h1 className="text-emerald-800">Welcome to Spotify App</h1> : <Login />} />
          <Route path="/search" element={token ? <Search /> : <Login />} />
          <Route path="/history" element={token ? <History /> : <Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
