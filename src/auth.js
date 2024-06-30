// src/auth.js
import axios from 'axios';

const clientId = 'ba1cfa05f5034c668eff907446c71e11';
const clientSecret = '555be4ea2abc4876bb0e48ad1daccc6e';

const getToken = async () => {
  const result = await axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  });

  return result.data.access_token;
};

export default getToken;
