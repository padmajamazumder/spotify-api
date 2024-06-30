// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHistory } from 'react-icons/fa';

const Navigation = () => (
  <nav className="bg-orange-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/home" className="text-2xl">Spotify App</Link>
      <div className="flex space-x-4">
        <Link to="/search" className="flex items-center">
          <FaSearch className="mr-2" /> Search
        </Link>
        <Link to="/history" className="flex items-center">
          <FaHistory className="mr-2" /> History
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
