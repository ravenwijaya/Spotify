import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';
//@ts-ignore
import logo from '../assets/img/logo.png';
import Login from './Login';
import { auth } from '../../store/actions/resources';

const Index = (props) => {
  const getHashParams = () => {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams as { access_token: string };
  };

  const handleRedirect = (event) => {
    event.preventDefault();
    //@ts-ignore
    window.location.href = auth();
  };

  return (
    <Login
      {...props}
      getHashParams={getHashParams}
      handleRedirect={handleRedirect}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  auth,
});

export default connect(null, mapDispatchToProps)(Index);
