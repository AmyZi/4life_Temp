import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing  from './LandingPage/LandingPage';
import Home  from './LandingPage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;