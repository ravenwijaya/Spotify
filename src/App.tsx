// @ts-nocheck
import './App.css';
import React, { useEffect } from 'react';
import HomePage from '../src/pages/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/login';

const PrivateRoute = (isLogin) => {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = (isLogin) => {
  return !isLogin ? <Outlet /> : <Navigate to="/create-playlist" />;
};

function App({ auth: { isLogin, token } }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/create-playlist" element={<PrivateRoute isLogin />}>
          <Route exact path="/create-playlist" element={<HomePage />} />
        </Route>
        <Route exact path="/" element={<PublicRoute isLogin />}>
          <Route exact path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(App);
