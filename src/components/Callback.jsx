// src/components/Callback.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromUrl } from '../auth';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('Callback Token:', token);
    if (token) {
      localStorage.setItem('spotifyToken', token);
      navigate('/account');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
