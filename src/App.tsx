import './App.css';
import React from 'react';
import HomePage from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';

const PrivateRoute = ({ isLogin }) => {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = ({ isLogin }) => {
  return !isLogin ? <Outlet /> : <Navigate to="/create-playlist" />;
};

function App({ isLogin }: { isLogin: boolean }) {
  return (
    <Router>
      <Routes>
        <Route
          path="/create-playlist"
          element={<PrivateRoute isLogin={isLogin} />}
        >
          <Route path="/create-playlist" element={<HomePage />} />
        </Route>
        <Route path="/" element={<PublicRoute isLogin={isLogin} />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({ isLogin: state.auth.isLogin });

export default connect(mapStateToProps)(App);
