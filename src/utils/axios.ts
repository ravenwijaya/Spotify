import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

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
