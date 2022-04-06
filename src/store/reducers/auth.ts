/* eslint-disable import/no-anonymous-default-export */
const tokenData = localStorage.getItem('spotifyAuthToken');
let initialState: {} = {};

initialState = {
  isLogin: tokenData !== 'undefined' ? true : false,
  token: tokenData !== 'undefined' ? tokenData : null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: true,
        token: action.payload,
      };
    default:
      return state;
  }
};
