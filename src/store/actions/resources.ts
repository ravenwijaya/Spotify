import axios from '../../utils/axios';

export const search = async (name) => {
  const data = await axios
    .get(`/search?q=name:${name}&type=track`)
    .then((res) => res.data.tracks.items)
    .catch(console.error);
  return data ? data : [];
};

const generateRandomString = (length) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const auth = () => {
  var state = generateRandomString(16);
  let url =
    'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    `&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}` +
    '&scope=' +
    encodeURIComponent(
      'user-read-private%20user-read-email%20playlist-modify'
    ) +
    '&redirect_uri=' +
    encodeURIComponent('http://localhost:3000/') +
    '&state=' +
    encodeURIComponent(state);
  return url;
};

export const getCurrentUser = async () => {
  const data = await axios
    .get(`/me`)
    .then((res) => res.data)
    .catch(console.error);
  return data ? data : [];
};
export const addPlaylist = async (userId, data) => {
  await axios
    .post(`/users/${userId}/playlists`, data)
    .then((res) => res.data)
    .catch(console.error);
  return data ? data : [];
};
export const addItemToPlaylist = async (playlistId, data) => {
  await axios
    .post(`/playlists/${playlistId}/tracks`, data)
    .then((res) => res.data)
    .catch(console.error);
  return data ? data : [];
};
export const getUserPlaylists = async () => {
  const data = await axios
    .get(`/me/playlists`)
    .then((res) => res.data.items)
    .catch(console.error);
  return data ? data : [];
};
