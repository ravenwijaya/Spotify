export const login = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: 'LOGIN',
    payload: data,
  });
};
