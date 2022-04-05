/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};
