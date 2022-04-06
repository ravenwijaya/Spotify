export const login = (data) => (dispatch) => {
  dispatch({
    type: 'LOGIN',
    payload: data,
  });
};
