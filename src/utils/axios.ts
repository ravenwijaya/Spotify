import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
