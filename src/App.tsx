// @ts-nocheck
import './App.css';
import React from 'react';
import HomePage from '../src/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/app" component={Layout} /> */}
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
