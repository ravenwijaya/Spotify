import axios from '../../utils/axios';

export const search = async (name) => {
  const data = await axios
    .get(`/search?q=name:${name}&type=album`)
    .then((res) => res.data.albums.items)
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
    encodeURIComponent('user-read-private%20user-read-email') +
    '&redirect_uri=' +
    encodeURIComponent('http://localhost:3000/') +
    '&state=' +
    encodeURIComponent(state);
  return url;
};
