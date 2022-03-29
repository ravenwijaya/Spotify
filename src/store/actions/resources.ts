// // import axios from '../../utils/axios';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// // const url = process.env.REACT_APP_API_GIGIH_URL;
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
// // export const getNewRelased = async () => {
// //   const data = await axios
// //     .get(`/browse/new-releases`)
// //     .then((res) => res.data)
// //     .catch(console.error);
// //   return data ? data : [];
// // };

// // export const getAlbums = async () => {
// //   const data = await axios
// //     // @ts-ignore
// //     .get(url)
// //     .then((res) => res.data)
// //     .catch(console.error);
// //   console.log(data);
// //   return data ? data : [];
// // };
