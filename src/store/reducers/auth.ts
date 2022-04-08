const tokenData = localStorage.getItem('spotifyAuthToken');
let initialState: any = {};

initialState = {
  isLogin: tokenData ? true : false,
  token: tokenData ? tokenData : null,
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
