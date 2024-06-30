// src/components/Search.jsx
import React, { useState } from 'react';
import getToken from '../auth';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const token = await getToken();
    const result = await axios(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setResults(result.data.tracks.items);
  };

  const handlePlay = (track) => {
    const playedSongs = JSON.parse(localStorage.getItem('playedSongs')) || [];
    localStorage.setItem('playedSongs', JSON.stringify([...playedSongs, track]));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-emerald-800 p-2 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="bg-emerald-800 text-white p-2 ml-2 hover:bg-emerald-600"
        >
          Search
        </button>
      </div>
      <ul>
        {results.map(track => (
          <li key={track.id} className="mb-4">
            <div className="flex items-center">
              <img src={track.album.images[0].url} alt={track.name} className="w-12 h-12 mr-4" />
              <div>
                <p className="text-emerald-800">{track.name} by {track.artists.map(artist => artist.name).join(', ')}</p>
                <audio controls src={track.preview_url} onPlay={() => handlePlay(track)} className="mt-2"></audio>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
