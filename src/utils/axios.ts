import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('spotifyAuthToken');
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
