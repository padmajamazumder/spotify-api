// src/components/History.jsx
import React, { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('playedSongs')) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-emerald-800 mb-4">Previously Played Songs</h2>
      <ul>
        {history.map(track => (
          <li key={track.id} className="mb-4">
            <div className="flex items-center">
              <img src={track.album.images[0].url} alt={track.name} className="w-12 h-12 mr-4" />
              <div>
                <p className="text-emerald-800">{track.name} by {track.artists.map(artist => artist.name).join(', ')}</p>
                <audio controls src={track.preview_url} className="mt-2"></audio>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
