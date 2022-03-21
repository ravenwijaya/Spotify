// import axios from 'axios';
// import Cookies from 'js-cookie';

// const baseURL = process.env.REACT_APP_API_URL;

// const instance = axios.create({
//   baseURL,
// });

// export const auth = async () => {
//   const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
//   const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
//   const authUrl = process.env.REACT_APP_API_AUTH_URL;
//   let auth = `${clientId}:${clientSecret}`;
//   let encodedAuth = btoa(auth);
//   const payload = 'grant_type=client_credentials';
//   let config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${encodedAuth}`,
//     },
//   };
//   // @ts-ignore
//   const { data } = await axios.post(authUrl, payload, config);
//   Cookies.set('token', data.access_token);
// };

// instance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get('token');
//     // @ts-ignore
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (err) => Promise.reject(err)
// );

// export default instance;
